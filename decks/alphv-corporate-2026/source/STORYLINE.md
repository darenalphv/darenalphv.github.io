# ALPHV corporate deck — storyline and build spec

ALPHV Technologies, "AI systems integration and consulting", corporate overview, October 2026.
Craft target: an Accenture / McKinsey credentials deck (answer first, action titles, one message per
slide, every number sourced). Look: Cobalt Editorial (one cobalt accent on white, Poppins
600/500/300, 24px cards with hairlines, liquid gradient only on cover, dividers and close).

Paths (relative to `decks/alphv-corporate-2026/`)
- Slides: `source/slides/NN-id.html` (one `<section>` each). Styles: `source/src/deck.css` (read it all first).
- Facts: `source/briefs/01-company.md`, `02-services.md`, `03-industries-products.md`, `04-cases.md`. Craft: `05-benchmark.md`.
- Images: `img/` (logos in `img/logos/`), referenced as `src="img/team-1.jpg"`; liquid backgrounds in `bg/`.
- Build: `node source/build.cjs source .` · render: `node source/render.cjs index.html /tmp/deck-png "" <comma-separated slide numbers>`
  The renderer prints overflow warnings; fix every one.

This spec was written before the build. The slides follow it, with the fact-check corrections applied
(for example "Nine engagements and a case note", not "Ten engagements"); where they differ, the slides win.

## Non-negotiable content rules

1. Only facts from the briefs. Never invent clients, numbers, dates, durations, prices, awards, people or
   partnerships. If a slide needs a fact the briefs lack, describe what the system does instead.
2. Keep the flags in the briefs: Tasco is a **proof of concept (2026)**, no production results; MYR 379 million
   (Fundaztic) and MYR 500 million (iPajak) are **the clients' own scale**, never ALPHV outcomes; healthcare
   group, Singapore hospitality group and the telco stay unnamed; Carlsberg: ALPHV **assisted/helped**;
   the 80% figure is "80% less manual data entry time". Do not use the unsourced "30% productivity" stat or the
   "15% revenue / 10–40% cost" expectations. Microsoft for Startups / Notion are the Tasco challenge's partners, not ALPHV's.
3. Product marks exactly: Kiralytics SHIFT™, ALPHV Avatar™, ALPHV HelloGen™; Kiralytics MATA, TRAFFIK, EMOSI, FIGHT (no ™).
4. British English, sentence case, smart quotes (’ “ ”), en dash for ranges, no exclamation marks, no hype words
   (cutting-edge, seamless, revolutionise, unlock, leverage…). "ALPHV" in capitals.
5. Every slide with a number or a claim gets `data-source="Source: alphv.com/<page> (October 2026)."` Combine pages
   with semicolons. Add a short note in the same attribute when a figure needs a qualifier, e.g.
   "Note: MYR figures are the clients’ own scale."

## Slide markup contract

```html
<section class="slide [s-surface|s-accent bg-cover|bg-divider|bg-close|bg-flat]" data-id="kebab-id"
         data-section="<one of sections.json>" data-source="Source: …">
  <header class="s-head"><span class="badge">Two-word label</span><h2 class="title">Action title</h2></header>
  <div class="s-body"> … </div>
</section>
```
- The build adds the tracker (top right, from `data-section`), the footer (source + ALPHV + page number) and icons:
  write `<i data-icon="lucide-name"></i>` (lucide-static 0.469 names, e.g. `scale`, `shield-check`, `bot`, `workflow`).
- Accent slides (cover, dividers, close, the numbers band) take `data-nofoot` unless they need a source line.
- Title: one `<h2 class="title">`, a full-sentence takeaway, **≤ 80 characters, max 2 lines**. Optionally wrap the
  key phrase in `<span class="hl">`. Badge: 1–3 words.
- Canvas is 1920×1080. Head starts at y=84; footer row at y≈1000. Body must end above the footer (the renderer warns).
  Aim to fill ~70% of the body; no slide should look half empty, none crammed. Minimum text 19px; body 21–24px.
- Use only classes from deck.css (`card`, `tile`, `bullets`, `tags/tag`, `stats/stat`, `steps/step`, `tbl`, `quote`,
  `logo-wall/logo-cell`, `sowhat`, `house`, `case-*`, `hero-num`, `exec`, `toc`, `kv`, `split`, `grid-N`, `row`,
  `col`, `photo`, `photo-wrap`, `hb`, `dot`, `flow`…). Small inline styles for spacing/size tweaks are fine; no new
  colours, fonts, shadows or radii. Bullets are accent squares. Numbers are accent, medium weight.
- Images: `object-fit: cover` photos with 24px radius; screenshots `object-fit: contain` on a surface/white card.
  Logos sit in `logo-cell`s (white card); `logos/alphv-white.png` only on accent slides, `logos/alphv-blue.png` on light.
  Prefer ALPHV's own photos (team, booth, events, screenshots) over stock; never repeat the same image twice in the deck.

## sections.json (tracker order)

["Point of view", "Who we are", "What we do", "Sectors and products", "Proof", "Engage"]

## The storyline (35 slides). Builder A: 01–12 · Builder B: 13–23 · Builder C: 24–35

Background rhythm is given per slide: W = white, S = surface (#F8F9FA), A = accent (liquid).
Never two A slides next to each other.

### Opening
01 `01-cover.html` · A bg-cover · nofoot — Cover. ALPHV white logo top-left; badge top-right "Corporate overview · October 2026".
   Badge "AI systems integration and consulting"; display H1 "Build AI into the systems that run your business";
   lede = home lede. Bottom `kv` strip: Founded 2023 · Headquarters Kuala Lumpur · Office Singapore · Clients in Malaysia, Singapore and Vietnam.
02 `02-exec.html` · W · no data-section — Executive summary (SCR, five `exec` rows, bold lead phrases).
   Title: "ALPHV takes AI past the pilot and into the systems that earn revenue".
   Rows: Situation (most companies have tried AI; few run it inside revenue systems) · Complication (silos, legacy, integration) ·
   Answer (AI-native systems integrator; the engineers who scope it ship and improve it; models, hosting and guardrails fit your
   systems, data and regulator) · Evidence (12 projects delivered and in delivery; 90+ portal automations for a 36-year-old law firm;
   80% less manual data entry time for a Singapore hospitality group; first of nine at the AI for Insurance Challenge × Tasco) ·
   Next step (every engagement starts from the business case: tech advisory, a data audit and AI strategy research).
03 `03-contents.html` · S · no data-section — Contents (the only topic title). `toc` with the six sections numbered 01–06 and a
   one-line description each.

### 01 Point of view
04 `04-div-pov.html` · A bg-divider — "01" / "AI pays off after the pilot. Not in it." / lede "Most companies have tried AI. Far fewer have it running inside the systems that earn their revenue."
05 `05-gap.html` · W — Badge "The pilot gap". Title "Pilots stall where AI meets data silos, legacy systems and integration".
   A left-to-right `flow`: card "Pilot" → three barrier cards (Data sits in silos / Legacy systems resist change / Pilots stall at
   integration), each with "What closes it" from the site (data audit; replace and connect legacy systems, embed AI into ERP, CRM,
   case management and portals; one team from business case to production, improvement scoped in) → blue card "Production".
   `sowhat`: "ALPHV was founded in 2023 to close that gap…" (about page).
06 `06-principles.html` · S — Badge "What we believe". Title "Four principles shape how we scope, build and run every system".
   Four cards (icon tile, title, verbatim copy) from how-we-work principles. Head row lede: "From a first model to a legacy system replacement…".

### 02 Who we are
07 `07-div-who.html` · A bg-divider — "02" / "An AI-native systems integrator from Kuala Lumpur" / about lede.
08 `08-glance.html` · W — Badge "ALPHV at a glance". Title "A founder-led team of 15+ builds production AI from Kuala Lumpur and Singapore".
   Split: photo `team-1.jpg` (tag caption "The ALPHV team, 100% Malaysian and fully local") | right: stats 2×2 (16 industry verticals served ·
   12 projects delivered and in delivery · 15+ solutions architects, engineers and consultants · 2 countries: Malaysia (HQ) and Singapore)
   plus a compact facts list: ALPHV Technologies Sdn Bhd, Company Reg. No. 202301015604 (1509526-V) · Founded 2023 · HQ Bangsar South,
   Kuala Lumpur · Office WCEGA Tower, Singapore · Clients in Malaysia, Singapore and Vietnam · MDEC Malaysia Digital status.
09 `09-people.html` · S — Badge "People". Title "The people who scope your system are the people who build it".
   Five role-family cards (careers page copy) + an APEX band: "APEX internship programme": 8 cohorts · 10+ interns trained · 100% hands-on
   projects · 13 universities in Malaysia and overseas (a row of 6–8 university logos in logo-cells, e.g. Yale, Toronto, Illinois, Taylor’s,
   Sunway, UKM, UiTM, MMU). No intern headshots or names. Add "Led by a founder who still writes code."
10 `10-platforms.html` · W — Badge "Platforms and partners". Title "We choose the model, compute and cloud per project, not per alliance".
   Left (7fr): grouped logo rows with small group labels: Models (Qwen, Claude, OpenAI, Gemini, ILMU — label "Models, YTL AI Labs" not needed
   on logo) · Compute (FPT AI Factory "H100 compute", NVIDIA "GPU workstations") · Cloud (Alibaba Cloud, Google Cloud, Microsoft) · AI hardware
   (FootfallCam). Right (5fr): "How we choose" four criteria (Data and residency / Cost / Capability / Governance) one line each, and a
   partnerships list with dates: FPT AI Factory strategic partnership (24 Apr 2026); Alibaba Cloud Partner Network, Tier 2 reseller for
   Malaysia (joined 15 Jul 2025); one of 12 AI implementation partners highlighted at Alibaba Cloud AI Day (Dec 2025).
   Caption: "Technology platforms, not clients."

### 03 What we do
11 `11-div-what.html` · A bg-divider — "03" / "Six services, one team" / "Every service is shipped and improved by the same engineers who scoped it."
12 `12-house.html` · W — Badge "Capability framework". Title "Six services cover the path from first model to the last integration".
   `house`: roof "Production AI inside the systems you already run" + services lede; six pillars (service name + 3–4 offerings each);
   base of four: Method (Discover · Design · Implement · Improve) · Architecture (brain, action layer, guardrails) · Platforms (models,
   compute and cloud chosen per project) · Products (Kiralytics and ALPHV avatars as accelerators).
13 `13-stack.html` · S — Badge "Full stack AI engineering". Title "Every system combines a brain, an action layer and guardrails".
   Layer diagram (three stacked bands: The guardrails / The action / The brain, each with name, sub-name and three items) resting on a
   band "Your core systems: ERP · CRM · case management · bank, government, SSM and CTOS portals · email · WhatsApp".
   Right column "In practice: a 36-year-old law firm" mapping: brain = Qwen with GenAI-RAG over the firm's documents; action = agentic RPA
   across 90+ third-party portals; guardrails = models on a locally hosted NVIDIA GPU workstation, client data stays in the firm.
14 `14-services-a.html` · W — Badge "Services 1–3". Title "AI engineering, agents and integration turn business problems into working systems".
   Three service columns (icon tile, name, the page H1 as subtitle, three "what we deliver" bullets, a foot line with the proof):
   AI engineering · Agentic automation · System integration and consulting (proof lines from 02-services).
15 `15-services-b.html` · S — Badge "Services 4–6". Title "Vision, platforms and MLOps carry AI to cameras, users and production pipelines".
   Same template: Computer vision and smart city · Web and mobile apps · Data, RPA and MLOps.
16 `16-method.html` · W — Badge "How we work". Title "Every engagement moves through four steps, run by one accountable team".
   `steps linked grid-4` (Discover / Design / Implement / Improve) with step title, one line and 2–3 short bullets from how-we-work.
   `sowhat`: "Already mid-build? We can take it over, as we did for iPajak Group’s six-branch pawn brokerage system."
17 `17-regulated.html` · S — Badge "Regulated sectors". Title "Regulated teams keep data in-house, reach their portals and act within guardrails".
   Three columns from the industries page (Data that stays in-house / Integration with the systems you run / Guardrails and governance)
   with their bullets; under them a "Where models run, chosen per project" strip of three: Inside your organisation (locally hosted
   models on your own NVIDIA GPU workstation) · Partner GPU cloud (H100 SXM through FPT AI Factory, for training and fine-tuning) ·
   Public cloud (Alibaba Cloud and Google Cloud, chosen for data, cost and residency).

### 04 Sectors and products
18 `18-div-sectors.html` · A bg-divider — "04" / "Work shaped around your sector" / "Six sectors with work to show, and five products that package proven solutions."
19 `19-sectors.html` · W — Badge "Industries". Title "Six sectors with work to show, from a 36-year-old law firm to a Vietnamese insurer".
   `tbl` with six rows: Sector · Client (as the site labels it) · What ALPHV built · Models and systems (tags) · Proof (verbatim, with PoC
   flag for Tasco). Mention "among 16 industry verticals served" in the head lede or source.
20 `20-products.html` · S — Badge "Products". Title "Five products give engagements a working starting point".
   Two groups: Kiralytics family (SHIFT™ workforce optimiser · MATA and TRAFFIK people and traffic counting · EMOSI sentiment monitoring)
   and ALPHV avatars (Avatar™ digital avatars · HelloGen™ video and voice avatars). Card: category line, one-liner, 2 bullets.
   A small "Also from ALPHV" line: AI-generated UGC and ads (client reel with 50.1K views for @richdadwilliam) · Kiralytics FIGHT,
   real-time combat sports analysis prototype, in development.
21 `21-flagships.html` · W — Badge "Flagship products". Title "Two flagships run daily operations: branch rostering and role-based avatars".
   Two halves. Kiralytics SHIFT™: screenshot `prd-kiralytics-shift.jpg` (portrait phone, contain) + one product, three views
   (store managers / rostered staff / HQ admins) + 4 features. ALPHV Avatar™: screenshot `prd-alphv-avatar.jpg` + Digital Mamak,
   Digital Ustaz (live at digitalustaz.com), Digital Interviewer; HelloGen™ line: a life-like avatar from a 3-minute clip.

### 05 Proof
22 `22-div-proof.html` · A bg-divider — "05" / "Work in the field, and the people noticing" / "Nine engagements and a case note across Malaysia, Singapore and Vietnam, plus the wins, stages and partnerships around them."
23 `23-portfolio.html` · W — Badge "Portfolio". Title "Nine engagements and a case note across eight sectors, from proof of concept to production".
   `tbl` with ten rows from 04-cases summary: Client (site label) · Sector · Country · What ALPHV built · Result or status (verbatim figure,
   or status like "Proof of concept, 2026", "In use since 2025", "Delivered"). Note on MYR figures in data-source.
24 `24-case-crm.html` · S — Case template (see below). Title "WhatsApp AI agents cut manual data entry time by 80% for a Singapore hospitality group"
   — if that exceeds two lines, use "WhatsApp AI agents cut manual data entry time by 80% for a hospitality group". Tags: Hospitality · Agentic
   automation · Singapore · 2026 · Qwen · WhatsApp. Hero numbers: 80% less manual data entry time; 24/7 customer conversations handled by AI agents.
   Screenshot `img/case-crm-dashboard.jpg` (800×443 AI CRM dashboard; show it no wider than ~800px, contain, on a white card).
25 `25-case-law.html` · W — Title "A 36-year-old law firm now runs on sovereign AI, with 90+ portal automations".
   Tags: Legal · AI engineering · System integration · 2025 · Qwen · GenAI-RAG · Agentic RPA · NVIDIA GPU. Client: Abraham Ooi & Partners.
   Logo `logo-abraham-ooi-partners.png`. Hero numbers: 90+ third-party portal automations; "In use since delivery in 2025".
26 `26-case-ipajak.html` · S — Title "ALPHV took over iPajak Group’s project midway and put six branches on one system".
   Tags: Financial services · System integration and consulting · Malaysia. Hero number: 6 branches across Malaysia on one system.
   Quote: Chong Voon Ying, CEO, iPajak Group (verbatim). MYR 500 million only as "a pawn broker that has disbursed MYR 500 million" (client scale).
27 `27-case-tasco.html` · W — Title "A proof of concept assesses insurance damage claims from images and video, 24/7".
   Tags: Insurance · Agentic automation · Vietnam · Proof of concept, 2026 · Qwen · Multimodal AI. Screenshot `svc-web-mobile-apps.jpg`
   (Tasco interface, contain). Impact: 24/7 damage assessment; "no production results to report yet" stated plainly. Related line:
   ALPHV won the AI for Insurance Challenge × Tasco, first of nine companies (22 Oct 2026).
28 `28-more-work.html` · S — Badge "More work". Title "The same team ships claims engines, content pipelines and data migrations".
   Six compact cards: Medicolegal claims (leading healthcare group, Malaysia; Qwen and Claude; 4 claim stages in one flow) · AI content
   factory (Eastern Decorator; Gemini; 3 content types per product) · Core data migration (Carlsberg; ALPHV assisted; 5 months, extraction
   to cutover) · Debt recovery management (Fundaztic; DRM system and UI/UX overhaul design) · VR and web roadshow (a telco; 2 clients from one
   shared scene) · Promotions model case note (Qwen2.5-14B-Instruct, LoRA, Flash Attention, H100 SXM via FPT AI Factory).
29 `29-numbers.html` · A bg-close — The one accent statement band. Badge "In numbers". Title "Platforms built for thousands of people, and the hours they give back".
   Stats (white): 3,000 doctors onboarded (LocumLah) · 600 clinics onboarded (LocumLah) · 32,000 swipes (Politikus by Caprice, Malaysia’s
   first public predictions game) · 90+ portal automations (one law firm) · 80% less manual data entry time (AI CRM). Needs data-source.
30 `30-clients.html` · W — Badge "Clients". Title "Teams across Malaysia, Singapore and Vietnam trust ALPHV with core systems".
   Logo wall of the 10 client logos (equal optical size) + the two verbatim quotes (Tracy Gan, COO, Fundaztic; Chong Voon Ying, CEO,
   iPajak Group). If the iPajak quote is already on slide 26, use only Tracy Gan's here, larger.
31 `31-recognition.html` · S — Badge "Recognition". Title "ALPHV placed first of nine at the AI for Insurance Challenge × Tasco".
   A dated timeline 2025 → 2026 (Alibaba Cloud Partner Network, Jul 2025 · ASEAN AI Summit keynote, Aug 2025 · MDX 2025 agentic AI panel,
   Sep 2025 · Alibaba Cloud AI Day, one of 12 AI implementation partners, Dec 2025 · FPT AI Factory partnership, Apr 2026 · Selangor AI
   Hackathon 2026, 2nd runner-up of 26, Sep 2026 · RAMEN TECH Global Summit, Fukuoka, representing Singapore among 124 exhibitors,
   Oct 2026 · AI for Insurance Challenge × Tasco, winner, first of nine, 22 Oct 2026) with the Tasco item emphasised, plus 1–2 photos
   (`news-ramen-tech.jpg`, `team-3.jpg`).

### 06 Engage
32 `32-div-engage.html` · A bg-divider — "06" / "One team, from business case to production" / "How our model differs, and how a first message turns into a plan."
33 `33-questions.html` · W — Badge "Why ALPHV". Title "Seven questions to ask any AI partner, and how ALPHV answers them".
   `tbl`: Question · ALPHV’s answer · Evidence. Rows: Who builds what you scoped? · Where does the work start? · Where will our data run? ·
   Which models? · Can it reach our local systems and portals? · What happens after go-live? · Can you take over a project in flight?
   Then a quiet concession line (muted, small): "Where a global firm may fit better: multi-country transformation programmes that need
   large teams in many markets at once." No claims about competitors.
34 `34-engage.html` · S — Badge "How to engage". Title "Engagements start from the business case, wherever your systems are today".
   Left: the three steps from the contact page (Tell us about the business case → Find where AI pays back → One team designs, builds and
   improves it). Right: "Where we start depends on where you are" — four entry points from the SI page (Strategy before the build ·
   Replace legacy systems · Connect third-party portals · Take over projects midway), each with its proof line. No durations or prices.
35 `35-close.html` · A bg-close · nofoot — Closing. White logo; display "Let’s build what’s next"; lede "Tell us where your business needs
   to be. We’ll map the path to get there." `kv` contacts: Email admin@alphv.com · WhatsApp or call +60 16-518 7740 · alphv.com ·
   HQ Unit 21-05, Level 21, Tower A, The Vertical Business Suites, Bangsar South, Kuala Lumpur · Office WCEGA Tower, 21 Bukit Batok
   Crescent, Singapore. Small line at the bottom: "We automate everything." and "ALPHV Technologies Sdn Bhd · Company Reg. No. 202301015604 (1509526-V)".

## Case-study template (24–27)
Head: badge = sector tag; title = outcome sentence. Under the title a `case-tags` row of `tag`s.
Body: `case-grid` with three `case-col`s: Situation (2–3 sentences, client's terms) · Approach (3–4 bullets naming what was built,
plus the stack) · Impact (`hero-num`s with labels, status line). One image or logo where it adds proof (screenshot > logo > nothing; no stock).
Keep the same positions on all four case slides.
