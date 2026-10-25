# ALPHV corporate deck (2026)

A 35-slide corporate overview of ALPHV Technologies as an AI systems integration and consulting firm,
built from the content of alphv.com (captured 25 October 2026) in the Cobalt Editorial design.

This folder sits outside `src/` and `public/`, so the Astro build ignores it and it is not published
on darentan.my.

## Open it

- `index.html` is the deck. Open it in a browser: slides scroll as a reel; press **P** (or the Present
  button) for full-screen, one slide at a time. Arrow keys, Page Up/Down, Home and End move between slides,
  and Esc leaves present mode.
- `ALPHV-corporate-overview-2026.pdf` is the same deck, one 1920×1080 slide per page.

## Storyline

| # | Section | Slides |
|---|---|---|
| — | Opening | Cover, executive summary, contents |
| 01 | Point of view | The pilot gap; four principles |
| 02 | Who we are | At a glance; people and APEX; platforms and partners |
| 03 | What we do | Capability framework; brain, action layer and guardrails; six services; method; regulated sectors |
| 04 | Sectors and products | Six sectors; five products; two flagships |
| 05 | Proof | Nine engagements and a case note; four case studies; more work; numbers; clients; recognition |
| 06 | Engage | Seven questions to ask any AI partner; how engagements start; contact |

`source/STORYLINE.md` has the slide-by-slide spec and the content rules the deck follows.

## Facts and sources

Every figure and claim comes from alphv.com. `source/briefs/` holds the extracted content per page
group, with each fact tagged by page, plus the flags the deck respects:

- Tasco Insurance is a proof of concept (2026) with no production results yet.
- MYR 379 million (Fundaztic) and MYR 500 million (iPajak Group) are the clients' own scale, not ALPHV results.
- The healthcare group, the Singapore hospitality group and the telco stay unnamed, as on the site.
- ALPHV "assisted" Carlsberg with its migration.
- The unqualified "30% productivity" figure on the services page is not used.

Each slide's footer names its source pages.

## Rebuild

```bash
cd decks/alphv-corporate-2026
npm install --no-save lucide-static@0.469.0 playwright   # build-time only; icons are inlined
node source/build.cjs source .                           # writes index.html
node source/render.cjs index.html /tmp/deck-png ALPHV-corporate-overview-2026.pdf
```

`render.cjs` writes one PNG per slide, reports any overflow and, given a third argument, writes the
PDF. Slides are `source/slides/NN-id.html`, one `<section>` each; `source/src/deck.css` is the whole
design system (one cobalt accent, Poppins 300/500/600, 24px cards, liquid-gradient cover, dividers
and close). The build adds the section tracker, footer, page numbers and icons.
