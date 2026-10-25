# darentan.my

The source for [darentan.my](https://darentan.my), Daren Tan's personal site. Daren is Founder and CEO of ALPHV Group of Companies and founder of Developer Kaki. The site is a static [Astro](https://astro.build) build, deployed to GitHub Pages on every push to `main`.

## Run it locally

You need Node 24 (the version the deploy uses).

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at http://localhost:4321. To check a production build:

```bash
npm run build
```

```bash
npm run preview
```

`npm run build` writes the site to `dist/`.

## Pages

| Path | What it is |
|---|---|
| `/` | Home: cover, key figures, group structure, profile, recognition and media |
| `/work/alphv-group/` | Segment review of ALPHV Group of Companies |
| `/work/developer-kaki/` | Segment review of Developer Kaki |
| `/media-kit/` | Speaker bios to copy and speaker photos to download, for event organisers |
| `/llms.txt` | Plain-text summary for AI assistants, generated from the site's data |
| `/sitemap.xml` | Generated from the pages in `src/pages/` |

## Editing content

Content lives in two places.

**Pages CMS**, for anything that changes often. Open [app.pagescms.org](https://app.pagescms.org) and pick this repository. Fields are set up in `.pages.yml`:

- public appearances (`src/content/appearances/`)
- media kit speaker bios (`src/content/bios/`)
- media kit speaker photos (`src/content/speaker-photos/`)

Saving in the CMS commits to `main`, which redeploys the site. Images can be uploaded at any size: the build resizes and compresses them.

**In code**, for everything else:

- `src/data/content.ts` is the single source of truth for facts on the site: profile, numbered notes, key figures, experience, qualifications, recognition, press, articles, BFM episodes, talks and socials.
- `src/components/work/alphv/data.ts` and `src/components/work/devkaki/data.ts` hold the two segment reviews.

### Every fact needs a source

Nothing goes on the site without a source. Record where each fact came from in `.source/content.md`, a working reference that is kept in the repo but isn't part of the built site. Any figure shown on a page cites one of the numbered `notes` in `content.ts`.

### Common edits

- **Add a recognition.** Add a row to `recognition` in `content.ts`, newest year first.
  - For a logo, put a square PNG in `assets/logos/` and map the organisation's name to it in `src/data/logos.ts`. Without a logo, the row shows a lettered tile.
  - For an international event, add the host country's flag to `rowFlags` in `src/components/Recognition.astro`. Flag images go in `assets/flags/`.
  - For a footnote, add the row to `rowNotes` in the same file.
- **Add a press article.** Add it to `articles` in `content.ts`, then update the counts in `press` and note 8.
- **Add a recorded talk.** Add it to `talks` with its YouTube ID, and save its thumbnail as `assets/media/yt-<id>.jpg`. View counts are read from YouTube at build time. If YouTube can't be reached, the build falls back to the snapshot in `src/lib/youtube.ts`.
- **Add a BFM episode.** Add it to `onAir`, and save its artwork as `assets/media/bfm-<yyyy-mm-dd>.png`.

## Project layout

```
assets/             logos, flags, press marks, photos and media thumbnails
public/             files served as-is: CNAME, robots.txt, favicon, social share image
src/
  components/       page sections; work/ holds the segment reviews, kit/ the media kit
  content/          CMS-managed Markdown: appearances, bios, speaker photos
  content.config.ts schemas for those collections
  data/             content.ts (facts) and logos.ts (organisation → logo)
  layouts/          Base.astro: head, metadata and structured data
  lib/              social embeds, schema.org JSON-LD, YouTube view counts
  pages/            routes, plus llms.txt and sitemap.xml
  scripts/          motion, the cover's point field, the appearances carousel
  styles/           global.css
.pages.yml          Pages CMS configuration
.source/            source notes for every fact (not part of the built site)
```

## Deploy

A push to `main` runs `.github/workflows/deploy.yml`. It builds the site with `withastro/action` and publishes it to GitHub Pages. A deploy usually takes under a minute. The custom domain is set by `public/CNAME`.

## Design

- `PRODUCT.md`: who the site is for, what it must do, and its constraints.
- `DESIGN.md`: the design system, "The Annual Report". It sets the colours, type, layout and motion rules.
- `.impeccable/`: working files from the design tool used to build the site.

The stack is Tailwind CSS v4, GSAP for motion, Lenis for smooth scrolling and OGL for the cover's WebGL point field.
