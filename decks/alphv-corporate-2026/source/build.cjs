// Assemble deck/slides/*.html into one HTML deck.
// Usage: node build.cjs <deckDir> <outDir>
// Writes <outDir>/index.html (full document) and <outDir>/artifact.html (body fragment
// for the Artifact publisher), and copies bg/ and img/ beside them.
const fs = require("fs");
const path = require("path");

const [, , deckDir, outDir] = process.argv;
if (!deckDir || !outDir) { console.error("Usage: node build.cjs <deckDir> <outDir>"); process.exit(2); }
// lucide-static is a build-time dependency only: icons are inlined into the output.
const ICONS = path.join(path.dirname(require.resolve("lucide-static/package.json", {
  paths: [process.cwd(), __dirname, path.join(__dirname, "..", "node")],
})), "icons");
const SECTIONS = JSON.parse(fs.readFileSync(path.join(deckDir, "sections.json"), "utf8"));
const META = { title: "ALPHV Corporate Deck", deck: "Corporate overview 2026" };

function icon(name) {
  const f = path.join(ICONS, name + ".svg");
  if (!fs.existsSync(f)) throw new Error("Unknown lucide icon: " + name);
  return fs.readFileSync(f, "utf8")
    .replace(/<!--[\s\S]*?-->\s*/g, "")
    .replace(/\s*class="[^"]*"/, "")
    .replace(/\s*width="24"\s*height="24"/, "")
    .replace(/\n\s*/g, " ")
    .replace(/<svg /, '<svg aria-hidden="true" ')
    .trim();
}

const files = fs.readdirSync(path.join(deckDir, "slides")).filter((f) => f.endsWith(".html")).sort();
const problems = [];
const frames = files.map((file, i) => {
  let html = fs.readFileSync(path.join(deckDir, "slides", file), "utf8").trim();
  const open = html.match(/<section\b[^>]*>/);
  if (!open) throw new Error(file + ": no <section>");
  const attr = (n) => (open[0].match(new RegExp(n + '="([^"]*)"')) || [])[1];
  const id = attr("data-id") || file.replace(/^\d+-/, "").replace(/\.html$/, "");
  const section = attr("data-section");
  const source = attr("data-source");
  const cls = attr("class") || "";
  const dark = /\bs-(accent|ink)\b/.test(cls);

  html = html.replace(/<i data-icon="([a-z0-9-]+)"><\/i>/g, (_, n) => icon(n));

  const inject = [];
  if (section && !dark) {
    if (!SECTIONS.includes(section)) problems.push(`${file}: section "${section}" not in sections.json`);
    inject.push('<nav class="tracker" aria-hidden="true">' +
      SECTIONS.map((s) => `<span${s === section ? ' class="on"' : ""}>${s}</span>`).join("") + "</nav>");
  }
  if (!/class="s-foot"/.test(html) && !/data-nofoot/.test(open[0])) {
    inject.push('<footer class="s-foot"><span class="src">' + (source ? source : "") +
      '</span><span class="meta"><span class="mark">ALPHV</span><span>' + META.deck +
      '</span><span class="pg">' + String(i + 1).padStart(2, "0") + '</span></span></footer>');
  }
  html = html.replace(/<\/section>\s*$/, inject.join("\n") + "\n</section>");

  const h = (html.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/) || [])[1] || id;
  const label = h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return `<div class="slide-frame" id="${id}" tabindex="0" role="group" aria-roledescription="slide" aria-label="${i + 1}: ${label.replace(/"/g, "&quot;")}">\n${html}\n</div>`;
});

const css = fs.readFileSync(path.join(deckDir, "src", "deck.css"), "utf8");
const js = fs.readFileSync(path.join(deckDir, "src", "deck.js"), "utf8");
const head = `<title>${META.title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="robots" content="noindex">
<meta name="description" content="ALPHV Technologies corporate overview 2026: an AI systems integration and consulting deck built from alphv.com.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap">
<style>
${css}
</style>`;
const body = `<header class="viewer-bar">
  <div class="vb-title"><span class="vb-dot"></span><span>ALPHV Technologies</span><span class="vb-sub">${META.deck}</span></div>
  <div class="vb-actions"><span class="vb-count" aria-live="polite">01 / ${String(frames.length).padStart(2, "0")}</span><button class="vb-btn primary" id="present-btn" type="button">Present</button></div>
</header>
<main class="reel">
${frames.join("\n")}
</main>
<div class="present-hint" hidden>← → to move · Esc to exit</div>
<script>
${js}
</script>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"),
  `<!doctype html>\n<html lang="en-GB">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head}\n</head>\n<body>\n${body}\n</body>\n</html>\n`);
fs.writeFileSync(path.join(outDir, "artifact.html"), `${head}\n${body}\n`);
for (const d of ["bg", "img"]) {
  const src = path.join(deckDir, d);
  if (fs.existsSync(src)) fs.cpSync(src, path.join(outDir, d), { recursive: true, filter: (p) => !p.endsWith(".md") });
}
// Every referenced local asset must exist.
const all = frames.join("\n") + css;
for (const m of all.matchAll(/(?:src="|url\(")((?:img|bg)\/[^"]+)"/g)) {
  if (!fs.existsSync(path.join(outDir, m[1]))) problems.push("missing asset " + m[1]);
}
console.log(`${frames.length} slides → ${outDir}`);
if (problems.length) { console.log("PROBLEMS:\n" + problems.join("\n")); process.exitCode = 1; }
