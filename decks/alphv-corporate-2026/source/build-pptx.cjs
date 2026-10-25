// Convert the built HTML deck into an editable PowerPoint file.
// Every slide is rebuilt from the browser's layout as native objects: text boxes with
// Poppins runs, rectangles and rounded rectangles, lines, and cropped pictures.
// Only the liquid-gradient backgrounds of the blue slides are images.
//
// Usage: node build-pptx.cjs <deck/index.html> <out.pptx>
// Needs playwright, pptxgenjs and sharp (build-time only).
const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("playwright");
const PptxGenJS = require("pptxgenjs");
const sharp = require("sharp");
const JSZip = require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));

const [, , deckFile, outFile] = process.argv;
if (!deckFile || !outFile) { console.error("Usage: node build-pptx.cjs <deck/index.html> <out.pptx>"); process.exit(2); }

const IN = 1 / 144; // inches per CSS px: the 1920px canvas becomes the 13.333in widescreen slide
const PT = 0.5;     // points per CSS px
const FACE = { 300: "Poppins Light", 400: "Poppins", 500: "Poppins Medium", 600: "Poppins SemiBold" };
const THEME = {
  name: "ALPHV Cobalt Editorial",
  colors: {
    dk1: "000000", lt1: "FFFFFF", dk2: "1F2937", lt2: "F8F9FA",
    accent1: "044BD9", accent2: "155DFC", accent3: "3B6BFF", accent4: "0236A8",
    accent5: "6B6B6B", accent6: "E3E6EC", hlink: "155DFC", folHlink: "0236A8",
  },
};

// ───────── in-page extraction ─────────
// Runs inside the deck page for one slide and returns plain data: boxes, lines, pictures,
// icons and text groups (one per block element), all in CSS px relative to the slide.
function extractSlide(index) {
  const frame = document.querySelectorAll(".slide-frame")[index];
  const slide = frame.querySelector(".slide");
  const S = slide.getBoundingClientRect();
  const cs = (el, p) => getComputedStyle(el, p || null);
  const rgba = (str) => {
    const m = String(str).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const px = (v, ref) => (String(v).endsWith("%") ? (parseFloat(v) / 100) * ref : parseFloat(v) || 0);
  const shapes = [], texts = [], warnings = [];
  const opacityOf = (el) => { let o = 1; for (let e = el; e && e !== slide.parentElement; e = e.parentElement) o *= parseFloat(cs(e).opacity); return o; };
  const isAccent = slide.classList.contains("s-accent") || slide.classList.contains("s-ink");
  const bgBehind = (el) => {
    for (let e = el; e; e = e.parentElement) {
      const c = rgba(cs(e).backgroundColor);
      if (c && c.a > 0.5) return c;
      if (e === slide) break;
    }
    return isAccent ? { r: 4, g: 75, b: 217, a: 1 } : { r: 255, g: 255, b: 255, a: 1 };
  };
  const visible = (el) => { const s = cs(el); return s.display !== "none" && s.visibility !== "hidden" && parseFloat(s.opacity) > 0.01; };

  // Boxes and borders of an element (or one of its pseudo-elements) at rect r.
  function box(el, s, r, label) {
    if (r.width < 0.5 && r.height < 0.5) return;
    const op = opacityOf(el) * (label ? parseFloat(s.opacity) : 1);
    const bg = rgba(s.backgroundColor);
    const sides = ["Top", "Right", "Bottom", "Left"].map((k) => ({
      w: parseFloat(s["border" + k + "Width"]) || 0, st: s["border" + k + "Style"], c: rgba(s["border" + k + "Color"]),
    }));
    const live = sides.map((b) => b.w > 0 && b.st !== "none" && b.st !== "hidden" && b.c && b.c.a > 0.01);
    const uniform = live.every(Boolean) && sides.every((b) => b.w === sides[0].w && b.st === sides[0].st && JSON.stringify(b.c) === JSON.stringify(sides[0].c));
    const rad = Math.min(px(s.borderTopLeftRadius, Math.min(r.width, r.height)), Math.min(r.width, r.height) / 2);
    const x = r.left - S.left, y = r.top - S.top, w = r.width, h = r.height;
    const bgImg = s.backgroundImage && s.backgroundImage !== "none" ? s.backgroundImage : null;
    if (bgImg && el !== slide) {
      // Thin gradient strips are dashed connector lines; anything else is reported.
      if (/gradient/.test(bgImg) && Math.min(w, h) <= 6) {
        const c = rgba(bgImg) || { r: 4, g: 75, b: 217, a: 0.2 };
        const horiz = w >= h;
        shapes.push({ type: "line", x1: x, y1: horiz ? y + h / 2 : y, x2: horiz ? x + w : x + w / 2, y2: horiz ? y + h / 2 : y + h,
          color: c, width: Math.min(w, h), dash: /repeating/.test(bgImg), op, name: "Connector" });
      } else if (!/conic/.test(bgImg)) warnings.push(`background image on ${el.className || el.tagName}${label || ""}: ${bgImg.slice(0, 80)}`);
    }
    const ring = s.boxShadow && s.boxShadow !== "none" && s.boxShadow.match(/(rgba?\([^)]*\))\s+0px\s+0px\s+0px\s+([\d.]+)px/);
    if (ring && parseFloat(ring[2]) > 0) {
      const sp = parseFloat(ring[2]), c = rgba(ring[1]);
      const circ = rad >= Math.min(w, h) / 2 - 0.5 && Math.abs(w - h) < 1;
      shapes.push({ type: "shape", kind: circ ? "ellipse" : rad > 0.5 ? "roundRect" : "rect", x: x - sp, y: y - sp, w: w + 2 * sp, h: h + 2 * sp,
        radius: rad + sp, fill: c, op, line: null, name: "Ring" });
    }
    const fill = bg && bg.a > 0.01 ? bg : null;
    if (fill || uniform) {
      const bw = uniform ? sides[0].w : 0;
      const circle = rad >= Math.min(w, h) / 2 - 0.5 && Math.abs(w - h) < 1;
      shapes.push({
        type: "shape", kind: circle ? "ellipse" : rad > 0.5 ? "roundRect" : "rect",
        x: x + bw / 2, y: y + bw / 2, w: w - bw, h: h - bw, radius: Math.max(0, rad - bw / 2),
        fill, op, line: uniform ? { color: sides[0].c, width: bw, dash: sides[0].st === "dashed" || sides[0].st === "dotted" } : null,
        name: (el.className && typeof el.className === "string" ? el.className.split(" ")[0] : el.tagName.toLowerCase()) + (label || ""),
      });
    }
    if (!uniform) {
      sides.forEach((b, i) => {
        if (!live[i]) return;
        const t = b.w / 2;
        const seg = [
          [x, y + t, x + w, y + t], [x + w - t, y, x + w - t, y + h],
          [x, y + h - t, x + w, y + h - t], [x + t, y, x + t, y + h],
        ][i];
        shapes.push({ type: "line", x1: seg[0], y1: seg[1], x2: seg[2], y2: seg[3], color: b.c, width: b.w,
          dash: b.st === "dashed" || b.st === "dotted", op, name: "Rule" });
      });
    }
  }

  // Pseudo-elements: decorative boxes (bullets, tracker squares, connectors) or text (quote marks).
  const pseudoText = new Map();
  function pseudo(el, which) {
    const s = cs(el, which);
    if (!s || s.content === "none" || s.content === "normal" || s.display === "none") return;
    const str = s.content.match(/^"(.*)"$/);
    const w = parseFloat(s.width), h = parseFloat(s.height);
    if (str && str[1] && !(rgba(s.backgroundColor) || {}).a) {
      const t = pseudoText.get(el) || {}; t[which] = str[1]; pseudoText.set(el, t); return;
    }
    if (!(w > 0) || !(h > 0)) return;
    const r = el.getBoundingClientRect(), es = cs(el);
    const bl = parseFloat(es.borderLeftWidth), bt = parseFloat(es.borderTopWidth);
    let left, top;
    if (s.position === "absolute") {
      const pw = r.width - bl - parseFloat(es.borderRightWidth), ph = r.height - bt - parseFloat(es.borderBottomWidth);
      left = s.left !== "auto" ? parseFloat(s.left) : pw - parseFloat(s.right) - w;
      top = s.top !== "auto" ? parseFloat(s.top) : ph - parseFloat(s.bottom) - h;
      left += r.left + bl; top += r.top + bt;
    } else {
      const pl = parseFloat(es.paddingLeft), pt = parseFloat(es.paddingTop), pb = parseFloat(es.paddingBottom);
      const ch = r.height - bt - parseFloat(es.borderBottomWidth) - pt - pb;
      left = which === "::before" ? r.left + bl + pl : r.right - parseFloat(es.borderRightWidth) - parseFloat(es.paddingRight) - w;
      top = r.top + bt + pt + (ch - h) / 2;
    }
    box(el, s, { left, top, width: w, height: h, right: left + w, bottom: top + h }, which);
  }

  // Clip rectangle and corner radius from ancestors with overflow hidden.
  function clipOf(el) {
    let c = { l: -1e9, t: -1e9, r: 1e9, b: 1e9 }, radius = 0, clipEl = null;
    for (let e = el.parentElement; e && e !== slide.parentElement; e = e.parentElement) {
      const s = cs(e);
      if (s.overflow !== "visible" || s.overflowX !== "visible") {
        const r = e.getBoundingClientRect();
        c = { l: Math.max(c.l, r.left), t: Math.max(c.t, r.top), r: Math.min(c.r, r.right), b: Math.min(c.b, r.bottom) };
        if (!clipEl && e !== slide) { clipEl = e; radius = px(s.borderTopLeftRadius, Math.min(r.width, r.height)); }
      }
    }
    return { c, radius, clipEl };
  }

  function image(img) {
    const r = img.getBoundingClientRect(), s = cs(img);
    if (!r.width || !r.height || !img.naturalWidth) return;
    const nw = img.naturalWidth, nh = img.naturalHeight, fit = s.objectFit;
    let dw = r.width, dh = r.height;
    if (fit === "cover" || fit === "contain") {
      const k = (fit === "cover" ? Math.max : Math.min)(r.width / nw, r.height / nh);
      dw = nw * k; dh = nh * k;
    }
    const pos = s.objectPosition.split(" ");
    const dx = (r.width - dw) * (pos[0].endsWith("%") ? parseFloat(pos[0]) / 100 : 0.5) + (pos[0].endsWith("px") ? parseFloat(pos[0]) : 0);
    const dy = (r.height - dh) * (pos[1].endsWith("%") ? parseFloat(pos[1]) / 100 : 0.5) + (pos[1].endsWith("px") ? parseFloat(pos[1]) : 0);
    const draw = { l: r.left + dx, t: r.top + dy, r: r.left + dx + dw, b: r.top + dy + dh };
    let vis = { l: Math.max(draw.l, r.left), t: Math.max(draw.t, r.top), r: Math.min(draw.r, r.right), b: Math.min(draw.b, r.bottom) };
    let radius = px(s.borderTopLeftRadius, Math.min(r.width, r.height));
    const cp = s.clipPath && s.clipPath.match(/inset\(([^)]*?)(?:\s+round\s+([\d.]+)px)?\)/);
    if (cp) {
      const v = cp[1].trim().split(/\s+/).map((q, i) => px(q, i % 2 ? r.width : r.height));
      const [t, rr, b, l] = [v[0], v[1] ?? v[0], v[2] ?? v[0], v[3] ?? v[1] ?? v[0]];
      vis = { l: Math.max(vis.l, r.left + l), t: Math.max(vis.t, r.top + t), r: Math.min(vis.r, r.right - rr), b: Math.min(vis.b, r.bottom - b) };
      if (cp[2]) radius = parseFloat(cp[2]);
    }
    const { c, radius: crad, clipEl } = clipOf(img);
    vis = { l: Math.max(vis.l, c.l), t: Math.max(vis.t, c.t), r: Math.min(vis.r, c.r), b: Math.min(vis.b, c.b) };
    if (vis.r - vis.l < 1 || vis.b - vis.t < 1) return;
    if (!radius && clipEl) {
      const cr = clipEl.getBoundingClientRect();
      if (Math.abs(cr.left - vis.l) < 3 && Math.abs(cr.right - vis.r) < 3 && Math.abs(cr.top - vis.t) < 3 && Math.abs(cr.bottom - vis.b) < 3) radius = crad;
    }
    shapes.push({
      type: "image", src: img.currentSrc || img.src, alt: img.alt || "", natural: { w: nw, h: nh },
      draw: { x: draw.l - S.left, y: draw.t - S.top, w: dw, h: dh },
      vis: { x: vis.l - S.left, y: vis.t - S.top, w: vis.r - vis.l, h: vis.b - vis.t },
      radius, op: opacityOf(img),
    });
  }

  function svg(el) {
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const c = rgba(cs(el).color) || { r: 0, g: 0, b: 0, a: 1 };
    const hex = "#" + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
    const clone = el.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", r.width); clone.setAttribute("height", r.height);
    clone.setAttribute("stroke-width", cs(el).strokeWidth.replace("px", "") || "2");
    const markup = clone.outerHTML.replace(/currentColor/g, hex);
    shapes.push({ type: "svg", markup, x: r.left - S.left, y: r.top - S.top, w: r.width, h: r.height, op: opacityOf(el) * c.a, name: "Icon" });
  }

  // Walk the tree in paint order: an element's box, ::before, children, ::after.
  (function walk(el) {
    if (!visible(el)) return;
    if (el.tagName === "IMG") { image(el); return; }
    if (el.tagName.toLowerCase() === "svg") { svg(el); return; }
    const s = cs(el);
    if (el !== slide) box(el, s, el.getBoundingClientRect());
    pseudo(el, "::before");
    for (const ch of el.children) walk(ch);
    pseudo(el, "::after");
  })(slide);

  // ── text: one group per block-level ancestor ──
  const blockOf = (n) => { let e = n.parentElement; while (e && e !== slide && cs(e).display === "inline") e = e.parentElement; return e; };
  const groups = new Map();
  const tw = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (let n = tw.nextNode(); n; n = tw.nextNode()) {
    if (n.nodeType === 1) {
      if (n.tagName === "BR") { const b = blockOf(n); if (groups.has(b)) groups.get(b).items.push({ br: true }); }
      continue;
    }
    if (!n.nodeValue.trim() && !/\S/.test(n.nodeValue)) {
      const b = blockOf(n); if (groups.has(b)) groups.get(b).items.push({ node: n }); continue;
    }
    if (n.parentElement.closest("svg") || !visible(n.parentElement)) continue;
    let hidden = false;
    for (let e = n.parentElement; e && e !== slide; e = e.parentElement) if (!visible(e)) { hidden = true; break; }
    if (hidden) continue;
    const b = blockOf(n);
    if (!groups.has(b)) groups.set(b, { blk: b, items: [] });
    groups.get(b).items.push({ node: n });
  }

  const range = document.createRange();
  for (const g of groups.values()) {
    const blk = g.blk, bs = cs(blk);
    const words = []; // {text, style, rect, br}
    let space = false;
    const styleOf = (el) => {
      const s = cs(el), c = rgba(s.color) || { r: 0, g: 0, b: 0, a: 1 };
      const a = c.a * opacityOf(el);
      const under = bgBehind(el);
      const mix = (v, u) => Math.round(v * a + u * (1 - a));
      return {
        weight: Math.min(600, Math.max(300, Math.round(parseInt(s.fontWeight, 10) / 100) * 100)),
        size: parseFloat(s.fontSize), italic: s.fontStyle === "italic",
        underline: /underline/.test(s.textDecorationLine), ls: parseFloat(s.letterSpacing) || 0,
        color: [mix(c.r, under.r), mix(c.g, under.g), mix(c.b, under.b)],
        upper: s.textTransform === "uppercase",
      };
    };
    const pt = pseudoText.get(blk);
    if (pt && pt["::before"]) words.push({ text: pt["::before"], style: styleOf(blk), glue: true });
    for (const it of g.items) {
      if (it.br) { words.push({ br: true }); space = false; continue; }
      const n = it.node, raw = n.nodeValue, st = styleOf(n.parentElement);
      const re = /([ \t\n\r\f]+)|([^ \t\n\r\f]+)/g; let m;
      while ((m = re.exec(raw))) {
        if (m[1]) { space = true; continue; }
        range.setStart(n, m.index); range.setEnd(n, m.index + m[2].length);
        const rects = [...range.getClientRects()].filter((q) => q.width > 0);
        if (!rects.length) continue;
        // A word broken across lines (at a hyphen) is split where the break fell.
        let parts = [{ text: m[2], rect: rects[0], n, s0: m.index, s1: m.index + m[2].length }];
        if (rects.length > 1) {
          parts = []; let start = 0, top = rects[0].top;
          for (let i = 1; i < m[2].length; i++) {
            range.setStart(n, m.index + i); range.setEnd(n, m.index + i + 1);
            const q = range.getClientRects()[0];
            if (q && q.top > top + q.height / 2) {
              range.setStart(n, m.index + start); range.setEnd(n, m.index + i);
              parts.push({ text: m[2].slice(start, i), rect: range.getClientRects()[0], n, s0: m.index + start, s1: m.index + i }); start = i; top = q.top;
            }
          }
          range.setStart(n, m.index + start); range.setEnd(n, m.index + m[2].length);
          parts.push({ text: m[2].slice(start), rect: range.getClientRects()[0], n, s0: m.index + start, s1: m.index + m[2].length });
        }
        // Inline margins and padding open gaps the source has no space for (label + value rows).
        const prev = words.length ? words[words.length - 1] : null;
        let spaces = space && words.length > 0 ? 1 : 0;
        if (!spaces && prev && prev.rect && Math.abs(prev.rect.bottom - parts[0].rect.bottom) < st.size * 0.5) {
          const gap = parts[0].rect.left - prev.rect.right;
          if (gap > st.size * 0.15) spaces = Math.max(1, Math.round(gap / (st.size * 0.26)));
        }
        parts.forEach((p, i) => words.push({ text: p.text, style: st, rect: p.rect, spaces: i === 0 ? spaces : 0, glue: i > 0, n: p.n, s0: p.s0, s1: p.s1 }));
        space = false;
      }
    }
    if (pt && pt["::after"]) words.push({ text: pt["::after"], style: styleOf(blk), glue: true });
    const real = words.filter((w) => w.rect);
    if (!real.length) continue;
    // Lines from word positions.
    let lineTops = [], line = -1;
    const assign = (list, key) => {
      let tops = [], ln = -1;
      for (const w of list) {
        if (w.br) { ln += 1; tops.push(null); continue; }
        if (!w.r2) { w[key] = Math.max(ln, 0); continue; }
        const cur = tops[ln], base = w.r2.top + 1.05 * w.style.size;
        if (ln < 0 || cur === null || base > cur.base + 0.45 * Math.min(cur.size, w.style.size) || base < cur.base - 0.45 * Math.min(cur.size, w.style.size) - cur.size) {
          if (ln < 0 || cur !== null) ln += 1;
          tops[ln] = { base, size: w.style.size };
        }
        w[key] = ln;
      }
    };
    for (const w of words) {
      if (w.br) { line += 1; lineTops.push(null); continue; }
      if (!w.rect) { w.line = Math.max(line, 0); continue; }
      // Same line when baselines match (Poppins ascent is 1.05em), so mixed sizes like "1st" stay together.
      const cur = lineTops[line];
      const base = w.rect.top + 1.05 * w.style.size;
      if (line < 0 || cur === null || base > cur.base + 0.45 * Math.min(cur.size, w.style.size) || base < cur.base - 0.45 * Math.min(cur.size, w.style.size) - cur.size) {
        if (line < 0 || cur !== null) line += 1;
        lineTops[line] = { base, size: w.style.size };
      }
      w.line = line;
    }
    const nLines = line + 1;
    const U = real.reduce((u, w) => ({ l: Math.min(u.l, w.rect.left), t: Math.min(u.t, w.rect.top), r: Math.max(u.r, w.rect.right), b: Math.max(u.b, w.rect.bottom) }),
      { l: 1e9, t: 1e9, r: -1e9, b: -1e9 });
    const fs0 = parseFloat(bs.fontSize);
    let LH = parseFloat(bs.lineHeight);
    if (!(LH > 0)) LH = real[0].rect.height;
    const maxSize = Math.max(...real.map((w) => w.style.size));
    if (maxSize > fs0 && bs.lineHeight !== "normal") LH = Math.max(LH, maxSize * (LH / fs0));
    const firstH = Math.max(...real.filter((w) => w.line === real[0].line).map((w) => w.rect.height));
    const firstSize = Math.max(...real.filter((w) => w.line === real[0].line).map((w) => w.style.size));
    const top = Math.min(...real.filter((w) => w.line === real[0].line).map((w) => w.rect.top)) - (LH - firstH) / 2
      + (0.35 * firstSize - 0.3 * LH);
    const r = blk.getBoundingClientRect();
    const cl = r.left + parseFloat(bs.borderLeftWidth) + parseFloat(bs.paddingLeft);
    const cr = r.right - parseFloat(bs.borderRightWidth) - parseFloat(bs.paddingRight);
    const align = /center/.test(bs.textAlign) ? "center" : /right|end/.test(bs.textAlign) ? "right" : "left";
    const heading = /^H[1-4]$/.test(blk.tagName) || /balance/.test(bs.textWrap || bs.textWrapStyle || "");
    let x, w;
    // Left-aligned text starts where its first glyphs start (after any ::before marker),
    // unless a quote mark from ::before is prepended to the text itself.
    if (align === "left") { x = pt && pt["::before"] ? Math.min(cl, U.l) : U.l; w = Math.max(cr, U.r) - x; }
    else if (align === "right") { const xr = Math.max(cr, U.r); x = Math.min(cl, U.l); w = xr - x; }
    else { x = Math.min(cl, U.l); w = Math.max(cr, U.r) - x; }
    // PowerPoint wraps greedily and breaks at hyphens; the HTML balances lines and keeps
    // hyphenated words whole. Where that would change the line breaks, keep the browser's.
    let greedyDiffers = false;
    if (nLines > 1) {
      const saved = blk.style.cssText, nowraps = [...blk.querySelectorAll("*")].filter((e) => cs(e).whiteSpace === "nowrap");
      const savedNw = nowraps.map((e) => e.style.cssText);
      blk.style.textWrap = "wrap"; nowraps.forEach((e) => (e.style.whiteSpace = "normal"));
      for (const w of words) if (w.n) { range.setStart(w.n, w.s0); range.setEnd(w.n, w.s1); w.r2 = range.getClientRects()[0]; }
      assign(words, "gline");
      greedyDiffers = words.some((w) => w.n && (w.gline !== w.line || range.getClientRects().length > 1));
      for (const w of words) if (w.n) { range.setStart(w.n, w.s0); range.setEnd(w.n, w.s1); if (range.getClientRects().length > 1) greedyDiffers = true; }
      blk.style.cssText = saved; nowraps.forEach((e, i) => (e.style.cssText = savedNw[i]));
    }
    let tight = false;
    if (nLines > 1) {
      const avail = cr - cl;
      for (let ln = 0; ln < nLines; ln++) {
        const on = real.filter((w) => w.line === ln);
        if (!on.length) continue;
        const lineW = Math.max(...on.map((w) => w.rect.right)) - Math.min(...on.map((w) => w.rect.left));
        if (lineW > avail * 0.985) tight = true;
        const next = real.find((w) => w.line === ln + 1);
        if (next && lineW + next.style.size * 0.26 + next.rect.width <= avail * 1.04) tight = true;
      }
    }
    let mode;
    if (nLines === 1) mode = (cr - cl) >= (U.r - U.l) + Math.max(8, 0.06 * (U.r - U.l)) && bs.whiteSpace !== "nowrap" ? "wrap" : "single";
    else mode = heading || bs.whiteSpace === "nowrap" || greedyDiffers || tight ? "breaks" : "wrap";
    if (mode === "single") { w = Math.max(w, U.r - U.l) + 4; if (align === "left") x = Math.min(x, U.l); }
    if (mode === "wrap" && align === "left") w = w * 1.004 + 2;
    if (mode === "breaks" && align === "left") w = w * 1.04 + 4; // explicit breaks: slack only stops stray wraps
    texts.push({
      x: x - S.left, y: top - S.top, w, h: nLines * LH, lh: LH, align, mode, lines: nLines,
      title: blk.matches("h2.title"), tag: blk.tagName.toLowerCase(), cls: typeof blk.className === "string" ? blk.className : "",
      words: words.map((w) => ({ text: w.text, br: !!w.br, spaces: w.spaces || 0, glue: !!w.glue, line: w.line, style: w.style })),
    });
  }
  return {
    cls: slide.className, id: frame.id, section: slide.dataset.section || "",
    accent: isAccent, bg: rgba(cs(slide).backgroundColor), shapes, texts, warnings,
  };
}

// ───────── node side ─────────
const hex = (c) => c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("").toUpperCase();
const hexA = (c) => hex([c.r, c.g, c.b]);
const inch = (v) => +(v * IN).toFixed(4);

async function prepImage(it, tmp, n) {
  const file = decodeURIComponent(new URL(it.src).pathname);
  const isSvg = file.endsWith(".svg");
  const { natural, draw, vis } = it;
  // Visible region in the image's natural units, then in the decoded bitmap's pixels.
  const kx = natural.w / draw.w, ky = natural.h / draw.h;
  const L = (vis.x - draw.x) * kx, T = (vis.y - draw.y) * ky, W = vis.w * kx, H = vis.h * ky;
  const buf = isSvg
    ? await sharp(fs.readFileSync(file), { density: 72 * Math.min(8, Math.max(2, (vis.w * 2) / W)) }).png().toBuffer()
    : fs.readFileSync(file);
  const img = sharp(buf);
  const meta = await img.metadata();
  const sx = meta.width / natural.w, sy = meta.height / natural.h;
  const left = Math.max(0, Math.round(L * sx)), top = Math.max(0, Math.round(T * sy));
  const width = Math.max(1, Math.min(meta.width - left, Math.round(W * sx)));
  const height = Math.max(1, Math.min(meta.height - top, Math.round(H * sy)));
  let pipe = img.extract({ left, top, width, height });
  const target = Math.round(vis.w * 2); // 2x the displayed size is plenty for projection
  if (width > target) pipe = pipe.resize({ width: target });
  const alpha = isSvg || meta.hasAlpha || meta.format === "png";
  const out = path.join(tmp, `img-${n}.${alpha ? "png" : "jpg"}`);
  await (alpha ? pipe.png({ compressionLevel: 9 }) : pipe.jpeg({ quality: 84, mozjpeg: true })).toFile(out);
  return out;
}

async function main() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "deck-pptx-"));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" });
  await page.goto("file://" + path.resolve(deckFile), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: ".viewer-bar{display:none!important}.reel{padding:0!important;gap:0!important}.slide-frame{width:1920px!important;height:1080px!important;max-width:none!important;border-radius:0!important;box-shadow:none!important}.slide-frame>.slide{transform:none!important}.bgonly *{visibility:hidden!important}" });
  const count = await page.$$eval(".slide-frame", (f) => f.length);

  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "ALPHV Technologies";
  pres.company = "ALPHV Technologies Sdn Bhd";
  pres.title = "ALPHV Technologies: corporate overview 2026";
  pres.theme = { headFontFace: "Poppins Medium", bodyFontFace: "Poppins Light" };

  const slides = [];
  for (let i = 0; i < count; i++) slides.push(await page.evaluate(extractSlide, i));
  // Sections: dividers and the opening slides take the section of what follows them.
  let opening = true;
  for (let i = 0; i < slides.length; i++) {
    if (!slides[i].section) {
      const next = slides.slice(i + 1).find((s) => s.section && !s.accent);
      slides[i].section = opening && i < 3 ? "Opening" : next ? next.section : "Engage";
    } else opening = false;
  }

  let lastSection = null, imgN = 0;
  const warnings = [];
  for (let i = 0; i < slides.length; i++) {
    const d = slides[i];
    warnings.push(...d.warnings.map((w) => `slide ${i + 1}: ${w}`));
    if (d.section !== lastSection) { pres.addSection({ title: d.section }); lastSection = d.section; }
    const slide = pres.addSlide({ sectionTitle: d.section });
    if (d.accent) {
      // The liquid gradient is the one thing PowerPoint cannot draw: render it once as the background.
      const frame = (await page.$$(".slide-frame"))[i];
      await frame.evaluate((f) => f.querySelector(".slide").classList.add("bgonly"));
      const file = path.join(tmp, `bg-${i + 1}.jpg`);
      await frame.screenshot({ path: file, type: "jpeg", quality: 88 });
      await frame.evaluate((f) => f.querySelector(".slide").classList.remove("bgonly"));
      slide.background = { path: file };
    } else slide.background = { color: hexA(d.bg || { r: 255, g: 255, b: 255 }) };

    for (const it of d.shapes) {
      const tr = (a) => Math.round((1 - a) * 100);
      if (it.type === "shape") {
        const kind = { rect: pres.ShapeType.rect, roundRect: pres.ShapeType.roundRect, ellipse: pres.ShapeType.ellipse }[it.kind];
        const o = { x: inch(it.x), y: inch(it.y), w: inch(Math.max(it.w, 0.5)), h: inch(Math.max(it.h, 0.5)), objectName: it.name };
        o.fill = it.fill ? { color: hexA(it.fill), transparency: tr(it.fill.a * it.op) } : { type: "none" };
        o.line = it.line ? { color: hexA(it.line.color), width: Math.max(0.25, it.line.width * PT), transparency: tr(it.line.color.a * it.op), dashType: it.line.dash ? "dash" : "solid" } : { type: "none" };
        if (it.kind === "roundRect") o.rectRadius = inch(it.radius);
        slide.addShape(kind, o);
      } else if (it.type === "line") {
        const x = Math.min(it.x1, it.x2), y = Math.min(it.y1, it.y2);
        slide.addShape(pres.ShapeType.line, {
          x: inch(x), y: inch(y), w: inch(Math.abs(it.x2 - it.x1)), h: inch(Math.abs(it.y2 - it.y1)), objectName: it.name,
          line: { color: hexA(it.color), width: Math.max(0.25, it.width * PT), transparency: Math.round((1 - it.color.a * it.op) * 100), dashType: it.dash ? "dash" : "solid" },
        });
      } else if (it.type === "image") {
        const file = await prepImage(it, tmp, ++imgN);
        const adj = it.radius > 0.5 ? Math.round((Math.min(it.radius, Math.min(it.vis.w, it.vis.h) / 2) / Math.min(it.vis.w, it.vis.h)) * 100000) : 0;
        slide.addImage({ path: file, x: inch(it.vis.x), y: inch(it.vis.y), w: inch(it.vis.w), h: inch(it.vis.h),
          altText: it.alt, objectName: adj ? `Picture rounded ${adj}` : "Picture", transparency: it.op < 1 ? Math.round((1 - it.op) * 100) : undefined });
      } else if (it.type === "svg") {
        const file = path.join(tmp, `icon-${++imgN}.png`);
        await sharp(Buffer.from(it.markup), { density: 72 * 4 }).png().toFile(file);
        slide.addImage({ path: file, x: inch(it.x), y: inch(it.y), w: inch(it.w), h: inch(it.h), objectName: "Icon", altText: "" });
      }
    }

    for (const t of d.texts) {
      const runs = [];
      let prevLine = null;
      t.words.forEach((w, k) => {
        if (w.br) { if (runs.length) runs[runs.length - 1].options.breakLine = true; prevLine = null; return; }
        let text = w.style.upper ? w.text.toUpperCase() : w.text;
        const newLine = t.mode === "breaks" && prevLine !== null && w.line !== prevLine;
        if (newLine && runs.length) runs[runs.length - 1].options.breakLine = true;
        else if (w.spaces && runs.length) text = " ".repeat(w.spaces) + text;
        prevLine = w.line;
        const s = w.style;
        const opt = {
          fontFace: FACE[s.weight] || "Poppins", fontSize: +(s.size * PT).toFixed(1), color: hex(s.color),
          italic: s.italic || undefined, underline: s.underline ? { style: "sng" } : undefined,
          charSpacing: s.ls ? +(s.ls * PT).toFixed(2) : undefined,
        };
        const last = runs[runs.length - 1];
        if (last && !last.options.breakLine && JSON.stringify({ ...last.options, breakLine: undefined }) === JSON.stringify(opt)) last.text += text;
        else runs.push({ text, options: opt });
      });
      if (!runs.length) continue;
      slide.addText(runs, {
        x: inch(t.x), y: inch(t.y), w: inch(t.w), h: inch(t.h), margin: 0, valign: "top", align: t.align,
        wrap: t.mode !== "single", fit: "none", lineSpacing: +(t.lh * PT).toFixed(2), isTextBox: true,
        objectName: t.title ? "Title" : /s-foot|src/.test(t.cls) ? "Source" : /tracker/.test(t.cls) ? "Tracker" : "Text",
      });
    }
  }
  await browser.close();
  await pres.writeFile({ fileName: outFile });

  // Pictures keep the deck's 24px rounded corners as native rounded-rectangle geometry,
  // so they stay pictures you can crop or replace in PowerPoint.
  const zip = await JSZip.loadAsync(fs.readFileSync(outFile));
  for (const name of Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))) {
    let xml = await zip.file(name).async("string");
    xml = xml.replace(/<p:pic>[\s\S]*?<\/p:pic>/g, (pic) => {
      const m = pic.match(/name="Picture rounded (\d+)"/);
      if (!m) return pic;
      return pic.replace(`name="Picture rounded ${m[1]}"`, 'name="Picture"')
        .replace(/<a:prstGeom prst="rect">\s*<a:avLst\s*\/>\s*<\/a:prstGeom>/, `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${m[1]}"/></a:avLst></a:prstGeom>`);
    });
    zip.file(name, xml);
  }
  fs.writeFileSync(outFile, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${slides.length} slides → ${outFile}`);
  if (warnings.length) console.log("WARNINGS:\n" + warnings.join("\n"));
  return THEME;
}

main().then(async (theme) => {
  // Theme colours (pptxgenjs writes Office's palette); applyTheme comes from the pptx skill,
  // with a local fallback that only swaps the colour scheme.
  const zip = await JSZip.loadAsync(fs.readFileSync(outFile));
  const part = "ppt/theme/theme1.xml";
  const SLOTS = ["dk1", "lt1", "dk2", "lt2", "accent1", "accent2", "accent3", "accent4", "accent5", "accent6", "hlink", "folHlink"];
  const scheme = `<a:clrScheme name="${theme.name}">` + SLOTS.map((k) => `<a:${k}><a:srgbClr val="${theme.colors[k]}"/></a:${k}>`).join("") + "</a:clrScheme>";
  const xml = (await zip.file(part).async("string")).replace(/<a:clrScheme\b[\s\S]*?<\/a:clrScheme>/, scheme)
    .replace(/(<a:(?:theme|fontScheme)\b[^>]*?\bname=")[^"]*"/g, (_, h) => `${h}${theme.name}"`);
  zip.file(part, xml);
  fs.writeFileSync(outFile, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
}).catch((e) => { console.error(e); process.exit(1); });
