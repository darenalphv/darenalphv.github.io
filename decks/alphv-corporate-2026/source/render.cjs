// Render the built deck: one PNG per slide (and optionally a PDF).
// Usage: node render.cjs <dist/index.html> <pngDir> [pdfPath] [onlyIndexes e.g. 3,7]
const { chromium } = require("playwright");
const fs = require("fs");
const [, , file, pngDir, pdfPath, only] = process.argv;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" });
  await p.goto("file://" + require("path").resolve(file), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  // Flatten every frame to 1:1 so slides screenshot at full size.
  await p.addStyleTag({ content: ".viewer-bar{display:none!important}.reel{padding:0!important;gap:0!important}.slide-frame{width:1920px!important;height:1080px!important;max-width:none!important;border-radius:0!important;box-shadow:none!important}.slide-frame>.slide{transform:none!important}" });
  fs.mkdirSync(pngDir, { recursive: true });
  const frames = await p.$$(".slide-frame");
  const want = only ? new Set(only.split(",").map(Number)) : null;
  const overflow = [];
  for (let i = 0; i < frames.length; i++) {
    const n = i + 1;
    if (want && !want.has(n)) continue;
    await frames[i].screenshot({ path: `${pngDir}/${String(n).padStart(2, "0")}.png` });
    // Report any element whose box escapes the slide or its own clipping parent.
    const o = await frames[i].evaluate((f) => {
      const s = f.querySelector(".slide"); const sr = s.getBoundingClientRect(); const out = [];
      s.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || el.closest(".tracker")) return;
        if (r.right > sr.right + 1 || r.bottom > sr.bottom + 1) out.push(el.tagName + "." + el.className + " → " + Math.round(r.right - sr.left) + "x" + Math.round(r.bottom - sr.top));
        if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow === "hidden" && !el.classList.contains("slide") && !el.classList.contains("photo-wrap")) out.push("clipped " + el.tagName + "." + el.className);
      });
      const foot = s.querySelector(".s-foot"); const body = s.querySelector(".s-body");
      if (foot && body) { const fb = foot.getBoundingClientRect(); const kids = body.querySelectorAll("*"); let maxB = 0; kids.forEach((k) => { const r = k.getBoundingClientRect(); if (r.height) maxB = Math.max(maxB, r.bottom); }); if (maxB > fb.top - 8) out.push("body runs into footer by " + Math.round(maxB - fb.top + 8) + "px"); }
      return out.slice(0, 6);
    });
    if (o.length) overflow.push(`slide ${n}: ` + o.join(" | "));
  }
  if (pdfPath) {
    const p2 = await b.newPage({ viewport: { width: 1920, height: 1080 } });
    await p2.goto("file://" + require("path").resolve(file), { waitUntil: "networkidle" });
    await p2.evaluate(() => document.fonts.ready);
    await p2.pdf({ path: pdfPath, width: "1920px", height: "1080px", printBackground: true, preferCSSPageSize: true });
  }
  await b.close();
  console.log(overflow.length ? "OVERFLOW:\n" + overflow.join("\n") : "no overflow detected");
})();
