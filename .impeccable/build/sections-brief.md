# Sections build brief (shared by every subagent)

Project: /Users/daren/code/darentan.my. It is an Astro 7 static site with Tailwind v4, GSAP, Lenis and OGL. This is the personal site of Daren Tan, Founder & CEO of ALPHV Group of Companies (Kuala Lumpur).

## Read these before writing anything
- `PRODUCT.md`: product truth and the rules against invented content.
- `.impeccable/surfaces/src-pages-index-astro.md`: the direction contract (THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM).
- `src/data/content.ts`: the only source of facts. If you need a fact that isn't there, take it from `.source/content.md` and add it to content.ts in the same style (`as const`). Never invent anything.
- `src/styles/global.css`: tokens and the shared classes (.section-heading, .btn-linkedin, .note-ref, .tabular, .on-plate).
- Built components to match: `src/components/Cover.astro`, `KeyFigures.astro`, `GroupStructure.astro`, `Notes.astro`, `SegmentCover.astro`, `SiteHeader.astro`.
- The approved comp: `.impeccable/mocks/comp-1-cover-split.png`. Open it to see the finish level.

## The world: The Annual Report
The site is Daren's decade, reported the way a Bursa-listed group's annual report reports itself. Sections read like report sections: Profile of the Founder, Recognition, Media, Notes, Corporate Information. The case-study pages read as segment reviews.

- **Palette:**
  - Paper `--color-paper` #f8f8f8; ink `--color-ink` #0d0d0f; secondary ink `--color-ink-2`.
  - Hairlines: `--color-rule` (strong) and `--color-rule-soft` (dividers).
  - Stage black `--color-stage`, for photos only.
  - One committed ultramarine, `--color-plate` #0a22cc, used ONLY for full-bleed section plates and for the LinkedIn action. A full-bleed ultramarine section plate is a legitimate rhythm device; use at most one per page section group and never as decoration.
  - On a plate, secondary text is `--color-plate-ink`, never grey.
- **Type:** Archivo variable only (`font-family` inherits; `--font-display` is the same family).
  - Display: weight 800–900 with `font-stretch` 80–90% and tight tracking.
  - Text: weight 400–500 at 100%.
  - Numbers always use `.tabular`.
  - Body measure is 65–75ch.
- **Sizing:** desktop sizes are written in comp pixels with `calc(N * var(--u))`, where 1u = 1/2688 of the viewport width. Give small text a legible floor with `max(calc(N * var(--u)), 14px)`. The horizontal gutter is `var(--gutter)`. The only breakpoint is `@media (max-width: 1023px)`, where you switch to a single column with px sizes (like the existing components). Check both.
- **Structure language:** hairline rules (1px, or `max(calc(2 * var(--u)), 1px)` for strong rules), tables and lists set like a report. Use the 411u left column for section headings or labels (see Notes.astro and GroupStructure.astro). Photos bleed to their own stage black and are never boxed, rounded or shadowed.
- **Every figure gets a note:** any number you show cites a numbered note with `<a class="note-ref" href="#note-N">N</a>`. Home notes live in content.ts `notes`. Case-study pages define their own page-level notes array and render `<Notes notes={...} />`.

## Hard bans (the craft floor; Daren publicly criticises "AI slop")
- No cards (and no nested cards), no rounded corners, no box-shadows, no gradients, no gradient text, no glass or blur.
- No eyebrow or kicker labels above headings, no small-caps tracked labels, and no 01/02/03 section numbers.
- No emoji or unicode glyphs as icons. If you need an icon, use an inline authored SVG with a 1.6 stroke (see the arrow in GroupStructure.astro).
- No colored border-left accents, no icon-tile grids, and no testimonials.
- No new colours, no new fonts, no monospace.
- No invented facts, metrics, quotes, client names or dates.
- No email, contact forms or booking. The ONLY call to action anywhere is LinkedIn (`LINKEDIN` in content.ts, `.btn-linkedin`). Internal links to /work/alphv-group/ and /work/developer-kaki/ are fine.
- Voice: polished and professional, plain English, confident and specific. No hype words (revolutionary, cutting-edge, passionate, seamless, leverage).
- Keep content visible by default. Do NOT add any animation, GSAP, Lenis or IntersectionObserver code: motion is a separate later phase. You may add `data-reveal` attributes on blocks that should animate later, and `data-draw` on lines.
- Theme browser surfaces: links get `text-underline-offset` and hover states, and focus-visible already exists globally.

## Accessibility
Use semantic HTML (section with aria-labelledby, h2 per section, h3 within, real lists/tables), a single h1 per page (the home h1 is in Cover), meaningful alt text, and AA contrast. External links get `rel="noopener"` and `target="_blank"` only where it makes sense.

## Verifying your work (do this; you have no shared dev server)
1. Build to your own output dir: `npx astro build --outDir /private/tmp/claude-501/-Users-daren-code-darentan-my/12304797-f618-4ee9-9309-36951f106328/scratchpad/out-<AGENT>` (needs network-free sandbox off; if the build fails because of another agent's file, report that rather than editing their file).
2. Serve it: `python3 -m http.server <PORT> --directory <that outDir>`, run in the background.
3. Capture: `/private/tmp/claude-501/-Users-daren-code-darentan-my/12304797-f618-4ee9-9309-36951f106328/scratchpad/cap.sh <url> <abs-out.png> <width> <height>`. Capture desktop at 1440×(tall enough to include your section, e.g. 1440×6000 full page) and mobile at 390×(full height). Open the PNGs and look at YOUR section.
4. Fix what you see in at most two rounds. Then stop the http.server you started (kill its PID).

## Ownership
Edit ONLY the files assigned to you, plus additive entries in `src/data/content.ts` (append only; never change or remove existing entries, because other agents rely on them). Never touch Cover, KeyFigures, GroupStructure, Notes, SegmentCover, SiteHeader, global.css, Base.astro or index.astro. If you think one of them needs a change, say so in your report.

## Report back
Report the files you wrote, any content.ts additions with their source, any word or claim choices worth flagging, screenshot paths, and anything you could not resolve.
