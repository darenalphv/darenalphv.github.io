---
name: Daren Tan
description: Daren's decade, reported the way a listed group reports itself.
colors:
  plate-ultramarine: "#0a22cc"
  plate-ultramarine-deep: "#0718a3"
  plate-ink: "#d9defb"
  report-paper: "#f8f8f8"
  ink: "#0d0d0f"
  ink-secondary: "#45464d"
  rule: "#1b1c20"
  rule-soft: "#d6d6da"
  stage-black: "#121317"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, sans-serif"
    fontSize: "calc(250 * 100vw / 2688)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.014em"
    fontVariation: "'wdth' 88"
  figure:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, sans-serif"
    fontSize: "calc(113 * 100vw / 2688)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 90"
  headline:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, sans-serif"
    fontSize: "max(calc(50 * 100vw / 2688), 28px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, sans-serif"
    fontSize: "calc(59.5 * 100vw / 2688)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 95"
  side-head:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, sans-serif"
    fontSize: "max(calc(30 * 100vw / 2688), 18px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "max(calc(30 * 100vw / 2688), 14px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  note-mark:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.24em"
    fontWeight: 600
    lineHeight: 0
rounded:
  none: "0px"
spacing:
  comp-unit: "calc(100vw / 2688)"
  gutter: "calc(69 * 100vw / 2688)"
  gutter-mobile: "20px"
  nav-height: "calc(85 * 100vw / 2688)"
  nav-height-mobile: "60px"
  side-head-column: "calc(411 * 100vw / 2688)"
  column-gap: "calc(40 * 100vw / 2688)"
components:
  button-linkedin:
    backgroundColor: "{colors.plate-ultramarine}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 max(calc(18 * 100vw / 2688), 14px)"
    height: "max(calc(43 * 100vw / 2688), 34px)"
  button-linkedin-hover:
    backgroundColor: "{colors.plate-ultramarine-deep}"
    textColor: "#ffffff"
  button-linkedin-on-plate:
    backgroundColor: "#ffffff"
    textColor: "{colors.plate-ultramarine}"
    rounded: "{rounded.none}"
  button-linkedin-on-plate-hover:
    backgroundColor: "{colors.plate-ink}"
    textColor: "{colors.plate-ultramarine}"
  structure-node:
    backgroundColor: "{colors.report-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "calc(57 * 100vw / 2688)"
  site-header:
    backgroundColor: "{colors.report-paper}"
    textColor: "{colors.ink}"
    height: "{spacing.nav-height}"
---

# Design System: Daren Tan

## Overview

**Creative North Star: "The Annual Report"**

The site is set like the annual report of a listed group. It opens on a cover, then gives key figures with notes, a group structure, a profile of the founder, recognition, media, notes, and corporate information. The visual system is the printed report's: white report stock, black ink, one committed ultramarine, and one grotesque family in heavy, slightly condensed cuts for display and figures. Authority comes from the register boardrooms already trust: hairline rules, tabular numerals, side heads in a fixed left column, and a numbered note behind every figure.

The page is dense with evidence but never crowded. Each spread is a white page divided by rules, or an ultramarine plate that bleeds to the edges. Stage photography bleeds to its own black and is never boxed. The one living element is the cover's WebGL point field. Its points stand for Developer Kaki members, they drift in a slow swirl and part around the pointer. Motion is report-like: figures roll into place, connectors draw, rules extend, and rows settle. Everything is visible without script.

Desktop is set in comp pixels. One unit is 100vw / 2688, the width of the approved comp. This keeps the first viewport in its measured proportions at any desktop width. Text never falls below its legibility floor. There is one breakpoint, at 1023px.

**Key Characteristics:**
- White report stock and black ink. Ultramarine appears only on full-bleed plates and the LinkedIn action.
- One family, Archivo variable: 800 weight at 88–90% width for display and figures, 100% width for text.
- Tabular, lining numerals wherever a number is a figure.
- Every figure carries a superscript note number that resolves to a Notes list on the same page.
- Square everything: no radius, no elevation, no decorative gradient fills.
- Hairline and 2-unit rules carry the structure, and side heads sit in a 411-unit left column.
- One signature: the white point field on the ultramarine cover.

## Colors

Report stock and ink with a single saturated ultramarine. The palette is restrained everywhere except the plates.

### Primary
- **Plate Ultramarine** (#0a22cc): fills full-bleed plates (the home cover, the segment covers, the Media plate) and the "Connect on LinkedIn" action. It is also the text-selection colour, the focus ring on paper, the note-mark hover colour, and the hover colour for linked review names. It is never used as a decorative tint or as a panel inside a paper page.
- **Pressed Ultramarine** (#0718a3): hover and pressed state of the LinkedIn action on paper.
- **Plate Ink** (#d9defb): secondary text on ultramarine (captions and sub-heads), tinted from the plate's own hue. It is also the hover fill for the white LinkedIn button on a plate.

### Neutral
- **Report Paper** (#f8f8f8): the page ground, the sticky header, and the fill behind structure nodes, so connectors stop at node edges.
- **Ink** (#0d0d0f): body text, display type, structure strokes, and strong rules.
- **Secondary Ink** (#45464d): supporting lines, descriptions, note text and follower counts on paper (7.9:1 on paper).
- **Rule** (#1b1c20): the vertical hairlines between key figures.
- **Soft Rule** (#d6d6da): section dividers, table row rules, and the header's scrolled hairline.
- **Stage Black** (#121317): the ground stage photographs bleed onto.

### Named Rules
**The Two Jobs Rule.** Ultramarine does exactly two jobs: it fills a full-bleed plate or it marks the LinkedIn action. If a new use is neither, use ink.

**The Plate Inversion Rule.** On a plate (`.on-plate`), text turns white, secondary text turns plate ink, the LinkedIn button inverts to white with ultramarine text, and the focus ring turns white.

## Typography

**Display Font:** Archivo Variable (with Archivo, ui-sans-serif)
**Body Font:** Archivo Variable (with Archivo, ui-sans-serif, system-ui)

**Character:** One grotesque family does every job, separated by weight and width. The heavy cuts at 88–90% width read as a listed company's cover and figure tables. Text at full width and regular weight reads as the narrative pages.

### Hierarchy
- **Display** (800, 88% width, 250 units on the home cover, line-height 1): the cover name. The same cut appears at 220 units for segment cover names, 196 units for the closing statement, and 150 units for the next-segment name.
- **Figure** (800, 90% width, 113 units, tabular and lining numerals): key figures and other report numbers, such as community member counts and hackathon tallies. Each one carries a note mark.
- **Title** (700, 95% width, 59.5 units, line-height 1.04): the cover's two-line role and company title, and segment cover lines.
- **Headline** (700, max(50 units, 28px), line-height 1.05): every section heading ("Group Structure", "Profile of the Founder", "Recognition", "Media", "Corporate Information").
- **Side head** (700, max(30 units, 18px)): sub-block heads set in the left side-head column, for example Notes, Segment reviews, On air, and Next segment review.
- **Body** (400, 1rem base, line-height 1.55): running text, which scales up to max(30 units, 16px) in reading blocks. Measure stays at or under 62ch.
- **Label** (500, max(30 units, 14px)): figure captions, table metadata, and the cover's period line and caption (minimum 12–14px).
- **Note mark** (600, 0.24em of its figure, superscript): numbered link to the Notes list.

### Named Rules
**The Two Widths Rule.** Display and figures use 800 at 88% (names, statements) or 90% (figures, headline names in tables). Text uses 100% width. Do not introduce a second family or a light display weight.

**The Tabular Rule.** Any number that reports a figure is set with tabular, lining numerals so digits hold fixed positions. That is what lets them roll in place.

**The Legibility Floor Rule.** Comp-unit sizes always carry a pixel floor for text, written as `max(calc(n * var(--u)), floor)`. Only the display cuts scale freely.

## Layout

Desktop sizes are written in comp units: `--u` = 100vw / 2688. The gutter is 69 units and the sticky header is 85 units tall. Each section keeps a fixed side-head column 411 units wide (in the footer, a 371-unit column plus a 40-unit gap), and content sits to its right. The home cover is a split 922 units tall: a 1540-unit ultramarine plate on the left and the stage photo, full-bleed on stage black, on the right. The key-figures strip uses columns weighted to the approved comp (1.18 / 0.83 / 0.97 / 1.02). The profile is a spread: a 1075-unit stage photo bleeds from the left edge, and the profile is set on the right. Vertical rhythm is generous, at 90–190 units between sections.

There is one breakpoint, at 1023px. Below it, the gutter is 20px, the header is 60px tall, and the nav collapses into a "Contents" popover. The cover stacks: the plate becomes a flex column of at least min(78svh, 640px) with the name pushed down, and the photo becomes a 1:1 block. The key figures go to a two-by-two grid, and the side-head column collapses above its content.

## Elevation & Depth

The system is flat. Depth comes from stacked planes (paper, plate, stage black) and from the point field behind the cover type, never from shadow. The only `box-shadow` is a functional hairline: once the page scrolls, the sticky header gains a 1px Soft Rule line under it (`0 1px 0`). That is a rule, not elevation.

### Named Rules
**The Printed Page Rule.** Nothing lifts off the page. Separation is a rule, a change of plane, or whitespace.

## Shapes

Everything is square. No element has a border radius. Rules come in two weights: hairline (1px Soft Rule) for rows and dividers, and strong (max(2 units, 1px) in ink, or white on a plate) to open a block. Strong rules draw from the left. The group structure is built from outlined rectangles. Companies have solid outlines and solid connectors. Communities run by the group have dashed outlines and dashed connectors (8-on, 6-off in comp units), and a legend explains the difference. Photographs bleed to an edge and are never framed. Arrows are thin inline strokes (1.6 stroke on a 24 grid) and are used only on links that lead somewhere.

## Components

### Buttons
Only one action exists: "Connect on LinkedIn."
- **Shape:** square (0px).
- **Primary:** ultramarine with white text, weight 600 at 100% width. In the header it is 43 units tall (minimum 34px). In the closing section it is 104 units tall (minimum 52px) with a diagonal arrow.
- **Hover / Focus:** the fill deepens to Pressed Ultramarine over 180ms on the expo-out ease, and the closing arrow nudges up and right by 2px. The button drops 1px on press. Focus shows a 2px ultramarine outline offset by 3px.
- **On a plate:** the button inverts to white with ultramarine text, and hover turns it plate ink.
- **Contents toggle (mobile only):** a 1px ink outline on transparent, 38px tall, that opens the Contents popover.

### Navigation
The sticky header sits on paper. The wordmark is set at 700, and five section links at 500 with a 1px underline that grows from the left on hover (260ms). The LinkedIn button sits at the far right. A Soft Rule hairline appears under the header after scrolling. Below 1023px, the links become a full-width Contents popover: ruled rows at 700 / 90% / 24px over a 30% ink scrim.

### Key Figures Strip
Up to four figures, each centred over its label, separated by vertical Rule hairlines, with a Soft Rule beneath the strip. Each digit rolls through a 0–9 column into a fixed tabular slot, while separators stay put. On mobile the strip becomes a ruled two-by-two grid with left-aligned figures.

### Group Structure Chart
A parent node, a stem, and solid and dashed buses with drops to five member nodes. Each node has a short description beneath it in secondary ink, and a legend follows the chart. On entry the connectors draw in order (stem, then buses, then drops) and the nodes fade up.

### Ruled Tables and Lists
Experience, recognition, talks, milestones and corporate information are all set as ruled rows: hairline Soft Rule dividers, a side head in the left column, and tabular dates. Rows reveal with an opacity and 12px rise, staggered.

### Notes
A Notes block closes each page: the side head "Notes" sits in the left column, and the notes run as two ruled columns of numbered entries in secondary ink. A targeted note takes an 8% ultramarine wash. Every note mark on the page resolves here.

### Cover Point Field (signature)
A WebGL field of white points on the ultramarine plate forms an off-centre logarithmic swirl, with bright arms and a crescent core. The pointer parts the field. The home cover draws 72,000 points with 3 arms at arm contrast 0.35, captioned "one for every Developer Kaki member." Segment covers reuse the field with their own count and arms: Developer Kaki uses 72,000 points and 3 arms, ALPHV uses 36,000 points and 4 arms, both at arm contrast 0.78. On entry the field fades in over 2.4s, the name unclips upward, and the cover lines stagger in. Under reduced motion the field is static.

### Segment Cover and Next Segment
Case-study pages open on a full-bleed ultramarine plate with no photo: a back link and the period across the top, the segment name in the display cut, the line as a title, the field behind, and a caption. They end with a "Next segment review" hand-off: a strong rule, a side head, the other segment's name at 150 units, and a large arrow. The name turns ultramarine on hover.

## Do's and Don'ts

### Do:
- **Do** size desktop elements in comp units (`calc(n * var(--u))`, with `--u` = 100vw / 2688), and give every text size a pixel floor.
- **Do** cite every figure with a numbered note mark that resolves to that page's Notes list.
- **Do** set figures at Archivo 800, 90% width, with tabular and lining numerals.
- **Do** keep ultramarine (#0a22cc) for full-bleed plates and the LinkedIn action only.
- **Do** separate content with 1px Soft Rule hairlines, and open blocks with a strong ink rule that draws from the left.
- **Do** bleed stage photography to an edge on stage black (#121317).
- **Do** use the expo-out ease (`cubic-bezier(0.16, 1, 0.3, 1)`), keep every element visible without script, and provide a reduced-motion path for every motion.

### Don't:
- **Don't** round corners, add shadows for elevation, or use glass or decorative gradient fills. The only gradients allowed are the functional ones that draw dashed connectors and link underlines.
- **Don't** put content in cards. Use ruled rows and the side-head column.
- **Don't** add a second call to action. "Connect on LinkedIn" is the only one.
- **Don't** introduce a second typeface or a light display weight.
- **Don't** frame, box or round a photograph.
- **Don't** show a figure without a note behind it.
