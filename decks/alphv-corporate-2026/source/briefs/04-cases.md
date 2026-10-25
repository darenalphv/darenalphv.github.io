# 04 — Case studies (source extract)

Source: scraped alphv.com pages in `scratchpad/pages/` (`insights.*` and the ten `insights__*` pages). Everything in quotation marks or under a "verbatim" label is copied from the page text; the site's curly apostrophes (’) and British spelling are kept. Where a field is absent from the case page it says **not stated**. Facts taken from a page *other* than the case page are labelled with that page.

## Read this first — accuracy flags for the deck

1. **The law firm is not anonymised on the site.** The headline says "a 36-year-old law firm", but the case page's Client field and its first paragraph name **Abraham Ooi & Partners**. The name also appears on the home, industries, industries/legal and services/system-integration-and-consulting pages. Use the name or the descriptor as the site does; it is the site's choice, not a leak.
2. **Eastern Decorator is named on its case page**, but the industries and industries/retail pages call it "a leading textile group". Both are on the site.
3. **Clients the site really keeps anonymous:** "A leading hospitality group, Singapore", "A leading healthcare group, Malaysia" and "A telco". The FPT case note names a **Partner** (FPT AI Factory), not a client. No end client is stated.
4. **The MYR figures are the clients' own scale, not ALPHV results.** On Fundaztic it is "MYR 379 million" funded, and on iPajak it is "MYR 500 million" disbursed. The industries/financial-services page says so outright: "These are the clients’ own figures: what Fundaztic’s platform has funded and what iPajak Group has disbursed." Do not present them as outcomes ALPHV delivered.
5. **Only one case has a business-outcome metric:** the 80% figure on the WhatsApp AI CRM. The other "In numbers" figures count scope or capability (90+ automations, 6 branches, 5 months, 24/7, 4 stages, 3 content types, 2 clients). The FPT case note has no "In numbers" block.
6. **Tasco is a proof of concept.** The page says: "The system is at proof-of-concept stage, so there are no production results to report yet." The index page headlines this section "Work in production", and every case page has a "More work in production" link. Both are generic site copy and say nothing about the status of any single case.
7. **Most photos are generic stock-style images** (a gavel, fabric rolls, fibre cables and so on). Only two real product screenshots exist: the Tasco Insurance web interface and the AI CRM dashboard.
8. **No case page gives a publication date.** The JSON-LD has no `datePublished`. The only dates are the "Year" fields, on three cases.
9. **Quotes exist on only two case pages:** Fundaztic (Tracy Gan) and iPajak (Chong Voon Ying). The other eight have none.
10. **No product (Kiralytics SHIFT™, ALPHV Avatar™, ALPHV HelloGen™) is linked from the body of any case.** Products appear only in the shared nav and footer. Each case links one industry page, one service page and "How we work".

## How the insights index tags them

Index page title: "AI Case Studies & Recognition | ALPHV Technologies". Hero: "Work in production, and the people noticing" / "Case studies from AI systems ALPHV builds and runs in legal, insurance, hospitality, finance and retail, plus keynotes, panels, partnerships and media coverage."

Key facts block (label, then value, as in the DOM): "Industry verticals served" **16** · "Projects delivered and in delivery" **12** · "Clients across" **Malaysia, Singapore and Vietnam**. (Check with ALPHV before use: the site lists more verticals, 16, than projects, 12.)

Section: "Case studies / AI running inside real businesses / Each story covers the situation, what ALPHV built and how it runs, from a 36-year-old law firm to a hospitality group in Singapore."

| # | Tag (verbatim) | Card headline (verbatim) | URL slug |
|---|---|---|---|
| 1 | Lawtech | ALPHV builds sovereign AI case management for a 36-year-old law firm | /insights/sovereign-ai-case-management-law-firm |
| 2 | Insuretech | Proof of concept agentic AI for round-the-clock damage claims for Vietnamese insurance | /insights/agentic-ai-insurance-claims-tasco |
| 3 | AI CRM | WhatsApp AI agents cut manual data entry by 80% for a Singapore hospitality group | /insights/whatsapp-ai-crm-singapore-hospitality |
| 4 | P2P lending | ALPHV builds debt recovery management for Fundaztic | /insights/debt-recovery-management-fundaztic |
| 5 | Pawn broking | ALPHV takes over and delivers a centralised pawn brokerage system for iPajak Group | /insights/pawn-brokerage-system-ipajak |
| 6 | Medicolegal claims | ALPHV builds AI medicolegal claims processing for a leading healthcare group | /insights/ai-medicolegal-claims-processing-healthcare |
| 7 | E-commerce content | ALPHV builds an AI content factory for Eastern Decorator’s e-commerce | /insights/ai-content-factory-eastern-decorator |
| 8 | VR experience | ALPHV builds a VR and web experience for a telco’s roadshow | /insights/vr-roadshow-experience-telco |
| 9 | Data migration | ALPHV helps Carlsberg migrate core operational data in five months | /insights/core-data-migration-carlsberg |
| 10 | Case note | Train a promotions model on H100 SXM | /insights/fine-tuning-qwen-on-h100-fpt-ai-factory |

The case note sits apart from the nine "Explore the story" cards. Its call to action is "Read the case note", and its card carries the chips "Qwen2.5-14B · LoRA · Flash Attention · H100 SXM". On the site, the Eastern Decorator headline has an invisible word-joiner (U+2060) inside "e-commerce". It is removed above.

Every case page ends with the same blocks: "Planning something similar? The engineers who scope your AI are the ones who ship and improve it. No hand-offs." and "Approach — How we work — One team from business case to production: discover, design, implement and improve." These are site-wide copy, not facts about any one case.

---

## 1. Sovereign AI case management — law firm

- **Page title:** Sovereign AI Case Management for a Law Firm | ALPHV
- **Headline:** ALPHV builds sovereign AI case management for a 36-year-old law firm
- **Tag:** Lawtech
- **Client (as named):** Client field "Abraham Ooi & Partners". Headline descriptor "a 36-year-old law firm". See flag 1.
- **Country:** not stated on the case page. The portals named are "bank, government, SSM and CTOS".
- **Industry:** Legal
- **Year:** 2025 ("Since delivery in 2025"). The home and legal pages carry the caption "ALPHV Lawtech Solutions, delivered 2025."
- **Stack chips:** Qwen · GenAI-RAG · Agentic RPA · NVIDIA GPU
- **Standfirst:** "A 36-year-old law firm replaced its legacy system with ALPHV case management, back office and accounting. The AI runs on a local NVIDIA GPU workstation, so client data stays in-house."
- **Meta description:** "How ALPHV replaced a 36-year-old law firm’s legacy system with case management, document AI and 90+ portal automations on a local NVIDIA GPU workstation."

**Challenge / context (verbatim):** "Abraham Ooi & Partners is a 36-year-old law firm. Its case management, back office and accounting ran on a legacy system, while lawyers, clerks and secretaries worked across bank, government, SSM and CTOS portals. The firm needed a platform that could take on document work with AI, without client data leaving the firm."

**What ALPHV built (verbatim):** "ALPHV replaced the legacy system with one platform for case management, back office and accounting. GenAI with retrieval and agentic RPA handle the document work."
- Matters, tasks, teams and a client portal for lawyers, clerks and secretaries
- Bank loan document AI extraction and template-based document generation
- 90+ third-party portal automations, including banks, government, SSM and CTOS
- Workflow, email and WhatsApp automation, with accounting and e-invoicing

**Architecture / hosting (verbatim):** "The models run on a locally hosted NVIDIA GPU workstation, so client data stays inside the firm. Retrieval grounds answers in the firm’s own documents, and agentic RPA carries the work into third-party portals."
- Stack: Qwen, GenAI-RAG and agentic RPA
- Hosting: a locally hosted NVIDIA GPU workstation (on-premises / sovereign)
- Data residency: client data stays inside the firm
- Integrations: bank, government, SSM and CTOS portals; email; WhatsApp; accounting and e-invoicing

**Delivery:** delivered in 2025. Timeline, phases and team are not stated.

**Outcomes (verbatim):** "Since delivery in 2025, the firm runs case management, back office and accounting on one ALPHV platform, with more than 90 portal automations and its data kept in-house."
- In numbers: **90+** "Third-party portal automations, including banks, government, SSM and CTOS"
- Status: **in use since delivery in 2025** (stated)

**Quote:** none on the case page.

**Links from the page:** Industry → Legal (/industries/legal). Service → AI engineering (/services/ai-engineering). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/PtGlJjXmAv8PedgGHHmW2IqAMfM.jpg — alt "A gavel on legal documents" (1022×544, stock-style)
- OG share card: https://framerusercontent.com/images/fBJNDKAGSBtPjSDGzaFoPbr5ujg.png (1200×630, not inspected)

---

## 2. Agentic AI for insurance damage claims — Tasco Insurance (PoC)

- **Page title:** Agentic AI for Insurance Damage Claims (Tasco) | ALPHV
- **Headline:** Proof of concept agentic AI for round-the-clock damage claims for Vietnamese insurance
- **Tag:** Insuretech
- **Client (as named):** Tasco Insurance, Vietnam
- **Country:** Vietnam
- **Industry:** Insurance
- **Year:** "Proof of concept, 2026"
- **Stack chips:** Qwen · Multimodal AI · Agentic AI
- **Standfirst:** "A proof-of-concept case system for Tasco Insurance in Vietnam assesses asset damage from images and video around the clock, then prepares the liability assessment and claim report."
- **Meta description:** "A proof of concept with Tasco Insurance in Vietnam: multimodal AI agents read photos, video and PDFs, flag duplicate claims and draft the liability assessment."

**Challenge / context (verbatim):** "Damage claims arrive as images, video and PDFs, at any hour. With Tasco Insurance in Vietnam, ALPHV built a proof of concept that assesses them around the clock, from the first photo to the claim report."

**What ALPHV built (verbatim):** "A multimodal case system that assesses asset damage from images and video, then prepares the liability assessment and claim report."
- Images, video and PDFs in one case file
- Duplicate claims from the same person identified automatically
- Liability assessment based on Vietnam’s Road Act and compendium
- Third-party garage, workflow, email and WhatsApp automation
- Image caption: "Tasco Insurance interface, proof-of-concept stage."

**Architecture / hosting (verbatim):** "Qwen models read images, video and documents together, and AI agents move each case from damage assessment to liability and the claim report. Garage, email and WhatsApp steps run as automated workflow."
- Stack: Qwen, multimodal AI and agentic AI
- Stage: proof of concept, 2026
- Hosting: not stated
- Integrations: third-party garage, email, WhatsApp

**Delivery:** proof of concept, 2026. Timeline, phases and team are not stated. (The industries/insurance page adds "Product strategy, UI/UX and engineering for web platforms, including the Tasco Insurance web interface designed by ALPHV.")

**Outcomes (verbatim):** "The system is at proof-of-concept stage, so there are no production results to report yet. It already assesses damage from images and video at any hour, flags duplicate claims and prepares the liability assessment and claim report."
- In numbers: **24/7** "Damage assessment from images and video"
- Status: **proof of concept** (stated). There are no production results.

**Quote:** none on the case page.

**Related, from the insights index (verbatim):** "Award · 22 Oct 2026 — ALPHV wins the AI for Insurance Challenge × Tasco — ALPHV Technologies placed first of nine companies, from the US, Turkey, Dubai, Taiwan, India and Southeast Asia, at the GenAI Fund and Tasco demo day for AI in Vietnamese insurance." The case page itself does not mention the award.

**Links from the page:** Industry → Insurance (/industries/insurance). Service → Agentic automation (/services/agentic-automation). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/mFzU6WzKoAGYOmb9TCHqNNGVArE.jpg — alt "Tasco Insurance web interface designed by ALPHV" (1216×679, **real product screenshot**; caption "Tasco Insurance interface, proof-of-concept stage.")
- https://framerusercontent.com/images/sXar4GXGA8J57faK0SWPk2E.jpg — alt "A home insurance policy form on a clipboard" (1016×573, stock-style hero)
- OG share card: https://framerusercontent.com/images/tmSHYiXujgu0Ln543NYx4w3Wny0.png (not inspected)

---

## 3. WhatsApp AI CRM — Singapore hospitality group

- **Page title:** WhatsApp AI CRM Cuts Manual Data Entry by 80% | ALPHV
- **Headline:** WhatsApp AI agents cut manual data entry by 80% for a Singapore hospitality group
- **Tag:** AI CRM
- **Client (as named):** "A leading hospitality group, Singapore" (anonymised; keep it so)
- **Country:** Singapore
- **Industry:** Hospitality
- **Year:** 2026
- **Stack chips:** Qwen · WhatsApp · AI agents
- **Standfirst:** "WhatsApp AI agents handle customer conversations 24/7 for a leading Singapore hospitality group, sync every lead to the CRM and flag hot leads to sales in real time."
- **Meta description:** "WhatsApp AI agents handle customer conversations 24/7, sync every lead to the CRM and cut manual data entry time by 80% for a Singapore hospitality group."

**Challenge / context (verbatim):** "A leading hospitality group in Singapore talks to its customers on WhatsApp. Leads from those conversations were entered into the CRM by hand."

**What ALPHV built (verbatim):** "An AI CRM with WhatsApp sales agents. The agents handle customer conversations 24/7 in natural language, sync every lead to the CRM and alert the sales team to hot leads in real time."
- Intelligent conversation flows with guardrails
- CRM dashboard with features by user access level
- One-click contracts, invoices and reports
- Image caption: "The AI CRM dashboard, with features by user access level."

**Architecture / hosting (verbatim):** "The agents run on Qwen inside WhatsApp, where the conversations already happen. Guardrails keep each conversation within its flow, and every lead, contract, invoice and report sits in one CRM."
- Stack: Qwen, WhatsApp and AI agents
- Access: CRM features set by user access level
- Hosting: not stated
- Integrations: WhatsApp; CRM

**Delivery:** 2026. Timeline, phases and team are not stated.

**Outcomes (verbatim):** "Manual data entry time is down by 80%. Every lead reaches the CRM, and the sales team is alerted to hot leads in real time."
- In numbers: **80%** "Less manual data entry time" · **24/7** "Customer conversations handled by AI agents"
- The 80% figure is worded four ways on the site: "cut manual data entry by 80%" (headline), "cut manual data entry time by 80%" (meta), "Manual data entry time is down by 80%" (outcome) and "80% Less manual data entry time" (in numbers). The safest wording is the one that says *time*.
- Status: **in use, with a result reported**. The page does not use the word "production". No baseline or measurement period is stated.

**Quote:** none on the case page.

**Links from the page:** Industry → Hospitality (/industries/hospitality). Service → Agentic automation (/services/agentic-automation). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg — alt "ALPHV AI CRM dashboard with lead and revenue charts" (800×443, **real product screenshot**, smallest asset)
- https://framerusercontent.com/images/UDOwnMP13EH2gF9xmunF433xWLc.jpg — alt "Colleagues meeting in a bright office" (955×544, stock-style hero)
- OG share card: https://framerusercontent.com/images/jhdsAA1zEvNH2Nxe1C8LLni94zo.png (not inspected)

---

## 4. Debt recovery management — Fundaztic

- **Page title:** Debt Recovery Management System for Fundaztic | ALPHV
- **Headline:** ALPHV builds debt recovery management for Fundaztic
- **Tag:** P2P lending
- **Client (as named):** Fundaztic
- **Country:** not stated (figures are in MYR)
- **Industry:** Financial services
- **Year:** not stated
- **Scope chips:** System integration · UI/UX
- **Standfirst:** "A debt recovery management system and a UI/UX overhaul design for the lending platform of Fundaztic, a P2P financing platform that has funded MYR 379 million."

**Challenge / context (verbatim):** "Fundaztic is a P2P financing platform that has funded MYR 379 million. It needed a dedicated system to manage debt recovery, and a refreshed design for its lending platform."

**What ALPHV built (verbatim):** "Core systems around Fundaztic’s lending operation, from collections to the platform its users see."
- A debt recovery management (DRM) system
- A UI/UX overhaul design for the lending platform

**Architecture / hosting:** models, hosting and named technologies are not stated. Scope: "system integration and UI/UX design".

**Delivery (verbatim):** "ALPHV scoped the work with Fundaztic’s team, then designed, built and integrated the system into its lending operation." Timeline and team are not stated.

**Outcomes (verbatim):** "Fundaztic now runs a dedicated debt recovery management system, alongside a UI/UX overhaul design for its lending platform."
- In numbers: **MYR 379 million** "Funded through Fundaztic’s P2P financing platform". This is the client's scale, not an ALPHV result (flag 4).
- Status: **running** (stated: "now runs"). The UI/UX item is described as an overhaul *design*. The page does not say it was implemented.

**Quote (verbatim):** "Our objectives and requirements are well captured and built into solving our problems, incorporating advanced technologies like AI. ALPHV has good people and is easy to work with compared to other tech vendors."
— **Tracy Gan**, COO, Fundaztic, and Head of Corporate Strategy and Investment, Paramount Group

**Links from the page:** Industry → Financial services (/industries/financial-services). Service → System integration and consulting (/services/system-integration-and-consulting). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/RGnnpQg6l2j5HkfltjFEXhrqu4.jpg — alt "Two colleagues reviewing figures on a tablet" (955×573, stock-style)
- OG share card: https://framerusercontent.com/images/dmhN6OiIsHN0gXtRymWCvKbofI.png (not inspected)

---

## 5. Centralised pawn brokerage system — iPajak Group

- **Page title:** Centralised Pawn Brokerage System for iPajak Group | ALPHV
- **Headline:** ALPHV takes over and delivers a centralised pawn brokerage system for iPajak Group
- **Tag:** Pawn broking
- **Client (as named):** iPajak Group
- **Country:** Malaysia ("six branches across Malaysia")
- **Industry:** Financial services
- **Year:** not stated
- **Scope chips:** System integration · Consulting
- **Standfirst:** "ALPHV took over iPajak Group’s pawn brokerage system project midway and delivered one centralised system for its six branches across Malaysia."

**Challenge / context (verbatim):** "iPajak Group is a multi-branch pawn broker in Malaysia that has disbursed MYR 500 million. Its project to run six branches on one centralised pawn brokerage system was already under way when ALPHV took it over."

**What ALPHV built (verbatim):** "A centralised pawn brokerage system for iPajak Group’s branches across Malaysia."
- One system for six branches across Malaysia
- Delivered after ALPHV took over the project midway

**Architecture / hosting:** models, hosting and named technologies are not stated. Scope: "system integration and consulting". Branches: "six, across Malaysia".

**Delivery (verbatim):** "ALPHV took over a project already in progress, scoped the remaining work with iPajak Group’s team, then built, integrated and delivered the system." Timeline and team are not stated.

**Outcomes (verbatim):** "iPajak Group’s six branches run on one centralised pawn brokerage system."
- In numbers: **MYR 500 million** "Disbursed by iPajak Group" (client's scale, not an ALPHV result; flag 4) · **6** "Branches across Malaysia on one pawn brokerage system"
- Status: **delivered and running** (stated)

**Quote (verbatim):** "Daren and the ALPHV team have been exceptional to work with and have done a commendable job taking over the project midway, especially in providing their technical expertise to meet our specific needs."
— **Chong Voon Ying**, CEO, iPajak Group

**Links from the page:** Industry → Financial services (/industries/financial-services). Service → System integration and consulting (/services/system-integration-and-consulting). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/4M8fJi64Mn6XBY2zWOJz8cwx6xw.jpg — alt "Gold bangles and jewellery on a white surface" (1800×1200, stock-style, high resolution)
- OG share card: https://framerusercontent.com/images/yZ2drX9BL2z6CHV9cjAqv0c0RU.png (not inspected)

---

## 6. AI medicolegal claims processing — healthcare group

- **Page title:** AI Medicolegal Claims Processing for Healthcare | ALPHV
- **Headline:** ALPHV builds AI medicolegal claims processing for a leading healthcare group
- **Tag:** Medicolegal claims
- **Client (as named):** "A leading healthcare group, Malaysia" (anonymised; keep it so)
- **Country:** Malaysia
- **Industry:** Healthcare
- **Year:** not stated on the case page. The industries, industries/healthcare and services/data-rpa-and-mlops pages label it "Leading healthcare group, 2026".
- **Stack chips:** Qwen · Claude · Document AI. The industries pages list "Qwen Claude RPA" for the same work.
- **Standfirst:** "ALPHV builds AI claims processing for a leading Malaysian healthcare group, taking medicolegal insurance claims from intake and extraction to assessment and adjudication for insurers and regulators."

**Challenge / context (verbatim):** "Every medicolegal insurance claim arrives as a set of documents that has to be read, extracted, assessed and written up before an insurer can decide on it. Done by hand, that work takes up clinicians’ time. A leading Malaysian healthcare group appointed ALPHV to build an AI claims processing capability for its insurer end users and the regulators who oversee them."

**What ALPHV built (verbatim):** "One AI flow across the medicolegal claims pipeline, from intake to adjudication. An intelligent engine assesses each case and drafts the report, so clinicians review a draft instead of writing from scratch."
- Claims intake that brings each case and its documents into one file
- Document AI that extracts the details each assessment needs
- Case assessment with a drafted medicolegal report for clinicians to review
- Adjudication support for insurer end users and regulators

**Architecture / hosting (verbatim):** "Qwen and Claude models read the claim documents and assess each case, then the engine drafts the report for a clinician to review. Every claim moves through the same four stages, from intake to adjudication."
- Stack: Qwen, Claude and document AI
- Review: clinicians review every drafted report (human in the loop)
- Users: insurer end users and regulators across the claims lifecycle
- Hosting: not stated

**Delivery:** "A leading Malaysian healthcare group appointed ALPHV to build…". Timeline, phases and team are not stated.

**Outcomes (verbatim):** "The capability brings intake, extraction, assessment and adjudication into one flow, so clinicians review a drafted report instead of writing each one from scratch."
- In numbers: **4** "Claim stages in one flow: intake, extraction, assessment and adjudication"
- Status: **not stated**. The headline is in the present tense ("builds"), and no live results or volumes are given.

**Quote:** none on the case page.

**Links from the page:** Industry → Healthcare (/industries/healthcare). Service → AI engineering (/services/ai-engineering). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/JBqT6LUIdEXNM6AxD4N3FaeWBUQ.jpg — alt "Two doctors reviewing a document on a tablet" (1000×563, stock-style)

---

## 7. AI content factory — Eastern Decorator

- **Page title:** AI Content Factory for E-commerce: Eastern Decorator | ALPHV
- **Headline:** ALPHV builds an AI content factory for Eastern Decorator’s e-commerce
- **Tag:** E-commerce content
- **Client (as named):** Eastern Decorator, described as "Southeast Asia’s leading textile group". The retail and industries pages say "a leading textile group" (flag 2).
- **Country:** not stated ("Southeast Asia’s leading textile group")
- **Industry:** Retail
- **Year:** not stated on the case page. The industries page labels it "Leading textile group, 2026".
- **Stack chips:** Gemini · Multimodal AI · Workflow automation
- **Standfirst:** "ALPHV builds an AI content factory for Eastern Decorator, Southeast Asia’s leading textile group, that turns source assets into product imagery, copy and listing variants for multiple sales channels."

**Challenge / context (verbatim):** "Eastern Decorator is Southeast Asia’s leading textile group, and it sells its products online across several channels. Each listing needs product imagery, copy and channel-specific variants, which usually means a photoshoot and hand-written content for every product. As the range grows, so does the content work."

**What ALPHV built (verbatim):** "ALPHV’s first AI content factory for e-commerce: one automated pipeline that takes a product’s source assets and produces the imagery, copy and listing variants each channel needs."
- Asset ingestion for source product images and details
- AI-generated product imagery that automates e-commerce photoshoots
- Product copy and listing variants generated at scale
- A review workflow before content is published
- Multi-channel publishing of approved listings

**Architecture / hosting (verbatim):** "Generation runs on Gemini, which works across images and text. Every asset moves through the same pipeline, with a review step between generation and publishing."
- Stack: Gemini, multimodal AI and workflow automation
- Pipeline: ingestion, generation, review and publishing
- Hosting: not stated

**Delivery:** timeline, phases and team are not stated.

**Outcomes (verbatim):** "The content factory takes Eastern Decorator’s product content from source assets to published listings end to end, with a review step before anything goes live."
- In numbers: **3** "Content types per product: imagery, copy and listing variants"
- Status: **not stated in words**. The outcome describes the pipeline working end to end, but no volumes, time or cost savings are given.

**Quote:** none on the case page.

**Links from the page:** Industry → Retail (/industries/retail). Service → AI engineering (/services/ai-engineering). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/kgPLdRcB4jFBhgur595FboC94M.jpg — alt "Rolls of blue and green fabric stacked side by side" (1800×1200, stock-style, high resolution)

---

## 8. VR and web roadshow experience — telco

- **Page title:** VR and Web Roadshow Experience for a Telco | ALPHV
- **Headline:** ALPHV builds a VR and web experience for a telco’s roadshow
- **Tag:** VR experience
- **Client (as named):** "A telco" (anonymised; keep it so)
- **Country:** not stated
- **Industry:** Telecommunications. No industry page is linked; the "Explore the industry" link goes to /industries.
- **Year:** not stated
- **Scope chips:** Concept · Interaction design · VR and web build · On-site support
- **Standfirst:** "ALPHV builds an interactive VR and web experience for a telco, with headsets and browsers driven from one shared scene, for the stops of its travelling roadshow."

**Challenge / context (verbatim):** "A telco takes its brand to the public through a travelling roadshow. Each stop needs an interactive experience that draws visitors in, works in a headset and on a screen, and runs the same way at every venue."

**What ALPHV built (verbatim):** "An interactive VR experience paired with a browser-based build for roadshow use. Headset and browser clients are driven from one shared interactive scene and content layer, so both tell the same story."
- Concept development for the roadshow experience
- Interaction design for headset and browser
- A VR experience and a browser-based interactive build
- One shared scene and content layer behind both
- On-site support at roadshow stops

**Architecture / hosting (verbatim):** "Visitors step into the experience in a VR headset or take part in a web browser. Both clients run from the same scene and content layer, so content is updated once for both, and ALPHV supports the build on site as the roadshow moves."
- Clients: VR headset and web browser
- Architecture: one shared interactive scene and content layer
- Support: on site at roadshow stops
- Named technologies, engines and hosting: not stated. No AI is described.

**Delivery:** concept, interaction design, the VR and web build, and on-site support (from the scope chips). Timeline and team are not stated.

**Outcomes (verbatim):** "One build is designed to run at every stop of the roadshow, in headsets and in browsers, with content kept in step across both."
- In numbers: **2** "Clients, VR headset and web browser, run from one shared scene"
- Status: **not stated** ("designed to run"). No visitor numbers are given.

**Quote:** none on the case page.

**Links from the page:** Industry → /industries (no telco page). Service → Web and mobile apps (/services/web-and-mobile-apps). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/Mbem8cGt6P9mWnbeRrTUh8UE.jpg — alt "Visitors trying VR headsets with hand controllers at an exhibition" (1800×1202, stock-style, high resolution)

---

## 9. Core operational data migration — Carlsberg

- **Page title:** Core Operational Data Migration for Carlsberg | ALPHV
- **Headline:** ALPHV helps Carlsberg migrate core operational data in five months
- **Tag:** Data migration
- **Client (as named):** Carlsberg, "the global brewing group"
- **Country:** not stated
- **Industry:** Brewing and consumer goods. No industry page is linked; the link goes to /industries.
- **Year:** not stated
- **Scope chips:** Extraction · Mapping · Validation · Reconciliation · Cutover
- **Standfirst:** "ALPHV assisted Carlsberg, the global brewing group, with a major migration of data across its core operational systems, from extraction and mapping to validation, reconciliation and cutover, in five months."
- **Wording note:** the site says ALPHV "helps" and "assisted" Carlsberg. Keep that framing, and do not imply ALPHV led the programme alone.

**Challenge / context (verbatim):** "Carlsberg is a global brewing group, and its core operational systems hold the data the business runs on every day. That data needed to move to a target estate, and the business needed to trust what arrived."

**What ALPHV built (verbatim):** "ALPHV assisted Carlsberg with an end-to-end migration of core operational data to the target estate, delivered over a five-month engagement."
- Extraction of data from the source systems
- Mapping of source data to the target estate
- Validation of the migrated data
- Reconciliation between source and target
- Cutover to the target estate

**Architecture / hosting:** the source and target systems are not named. The page says only "Carlsberg’s core operational systems" and "the target estate". No technologies are named and no AI is described.

**Delivery (verbatim):** "The migration ran as a staged programme: extraction, mapping, validation and cutover, with reconciliation between source and target before the switch. Carlsberg’s core operational data now sits in the target estate." Duration: "five months". Team is not stated.

**Outcomes (verbatim):** "ALPHV delivered the migration over a five-month engagement, moving Carlsberg’s core operational data to the target estate."
- In numbers: **5 months** "Engagement, from extraction to cutover"
- Status: **delivered** (engagement complete; data "now sits in the target estate")

**Quote:** none on the case page.

**Links from the page:** Industry → /industries (no brewing page). Service → System integration and consulting (/services/system-integration-and-consulting). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/cSbanKbWJRUWnyGF7SYtfGr5OY.jpg — alt "Yellow fibre optic cables connected to a network patch panel" (1800×1286, stock-style, high resolution)

---

## 10. Case note — fine-tuning Qwen on H100 via FPT AI Factory

- **Page title:** Fine-Tuning Qwen2.5-14B on H100 via FPT AI Factory | ALPHV
- **Headline:** Train a promotions model on H100 SXM
- **Tag:** Case note
- **Client (as named):** no client is named. The page names a **Partner**: "FPT AI Factory".
- **Country:** not stated
- **Industry:** Retail
- **Year:** not stated. (The index dates the related partnership "Partnership · 24 Apr 2026".)
- **Stack chips:** Qwen2.5-14B · LoRA · Flash Attention · H100 SXM
- **Standfirst:** "ALPHV fine-tuned Qwen2.5-14B-Instruct with LoRA and Flash Attention on H100 SXM, through FPT AI Factory, to recommend promotions from historical sales and promotions data."
- **Meta description:** "ALPHV fine-tuned Qwen2.5-14B-Instruct with LoRA and Flash Attention on H100 SXM via FPT AI Factory to recommend retail promotions from historical sales data."

**Challenge / context (verbatim):** "Promotions are planned from historical sales and promotions data. ALPHV set out to train a specialised model that recommends promotions from that data."

**What ALPHV built (verbatim):** "ALPHV fine-tuned Qwen2.5-14B-Instruct using LoRA with Flash Attention, producing a model that recommends promotions from historical sales and promotions data."
- Base model: Qwen2.5-14B-Instruct
- Fine-tuning: LoRA
- Attention: Flash Attention
- Hardware: H100 SXM through FPT AI Factory

**Architecture / hosting (verbatim):** "Training ran on H100 SXM through the FPT AI Factory partnership. LoRA trains a small set of adapter weights instead of the full model, and Flash Attention speeds up attention on the GPU." (Training on partner GPU cloud. Where the model is served is not stated.)

**Delivery:** timeline, team and dataset size are not stated.

**Outcomes (verbatim):** "A specialised promotions model built on Qwen2.5-14B-Instruct. Access to AI hardware through FPT AI Factory shortens training time and lowers the cost of AI R&D and production for ALPHV’s clients."
- In numbers: **no "In numbers" block on this page.** No accuracy, uplift, training-time or cost figures are given.
- Status: **model built**. Deployment or production use is not stated. It is framed as a case note, not a client case study.

**Quote:** none on the case page.

**Related, from the insights index (verbatim):** "Partnership · 24 Apr 2026 — FPT AI Factory and ALPHV announce a strategic partnership — FPT AI Factory and ALPHV partnered to speed up AI research and development in Malaysia, with priority access to FPT’s GPU cloud and AI tools."

**Links from the page:** Industry → Retail (/industries/retail). Service → AI engineering (/services/ai-engineering). Approach → How we work. Products: none.

**Photos:**
- https://framerusercontent.com/images/xZA70n2uPEBQ4rt79wXmTX5UQk.jpg — alt "An engineer reviewing model output on several monitors" (851×1110, portrait, stock-style)
- OG share card: https://framerusercontent.com/images/cPvBTAPaB2kpz1bUCTTYZAS9uE.png (not inspected)

---

## Summary table

Sorted by the strength of the quantified outcome, strongest first. The problem and solution columns are condensed from each page's own wording. The headline result is the page's own "In numbers" figure, quoted exactly.

| Rank | Case | Client label (as on site) | Country | Industry | One-line problem | One-line solution | Headline result (verbatim) | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | WhatsApp AI CRM | A leading hospitality group, Singapore | Singapore | Hospitality | Leads from WhatsApp conversations were entered into the CRM by hand | AI CRM with WhatsApp sales agents on Qwen that sync every lead and alert sales to hot leads | "80%" less manual data entry time; "24/7" customer conversations handled by AI agents | In use, with a result reported (2026); "production" not stated |
| 2 | Sovereign AI case management | Abraham Ooi & Partners ("a 36-year-old law firm") | not stated | Legal | Legacy system, staff working across bank, government, SSM and CTOS portals; client data could not leave the firm | One platform for case management, back office and accounting; GenAI-RAG and agentic RPA on Qwen, on a locally hosted NVIDIA GPU workstation | "90+" third-party portal automations, including banks, government, SSM and CTOS | In use since delivery in 2025 |
| 3 | Centralised pawn brokerage | iPajak Group | Malaysia | Financial services | Project to put six branches on one system was already under way | ALPHV took the project over midway, then built, integrated and delivered one centralised system | "6" branches across Malaysia on one pawn brokerage system (plus "MYR 500 million" disbursed: client scale) | Delivered and running |
| 4 | Core data migration | Carlsberg | not stated | Brewing and consumer goods | Core operational data had to move to a target estate, and the business had to trust what arrived | Assisted with end-to-end migration: extraction, mapping, validation, reconciliation, cutover | "5 months" engagement, from extraction to cutover | Delivered (engagement complete) |
| 5 | Agentic AI damage claims | Tasco Insurance, Vietnam | Vietnam | Insurance | Damage claims arrive as images, video and PDFs, at any hour | Multimodal Qwen case system with AI agents: duplicate-claim detection, liability under Vietnam’s Road Act, claim report | "24/7" damage assessment from images and video | **Proof of concept, 2026**: "no production results to report yet" |
| 6 | Debt recovery management | Fundaztic | not stated (MYR) | Financial services | Needed a dedicated debt recovery system and a refreshed lending-platform design | DRM system plus a UI/UX overhaul design, scoped, designed, built and integrated | "MYR 379 million" funded through Fundaztic’s platform (client scale, not an ALPHV result) | Running ("now runs"); UI/UX is a design |
| 7 | AI medicolegal claims | A leading healthcare group, Malaysia | Malaysia | Healthcare | Medicolegal claims are read, extracted, assessed and written up by hand, using clinicians’ time | One AI flow, intake to adjudication, on Qwen and Claude; drafted reports for clinician review | "4" claim stages in one flow (a scope count, not an outcome) | not stated (other pages date it 2026) |
| 8 | AI content factory | Eastern Decorator | not stated (SE Asia) | Retail | Every listing needs a photoshoot, hand-written copy and channel variants | Gemini pipeline: ingestion, AI imagery, copy and variants, review, multi-channel publishing | "3" content types per product (a scope count, not an outcome) | not stated in words |
| 9 | VR roadshow experience | A telco | not stated | Telecommunications | Each roadshow stop needs an interactive experience that runs the same everywhere | VR plus browser build from one shared scene and content layer, with on-site support | "2" clients run from one shared scene (a scope count, not an outcome) | not stated ("designed to run") |
| 10 | Case note: Qwen on H100 | Partner: FPT AI Factory (no client named) | not stated | Retail | Recommend promotions from historical sales and promotions data | Fine-tuned Qwen2.5-14B-Instruct with LoRA and Flash Attention on H100 SXM via FPT AI Factory | none (no "In numbers" block) | Model built; deployment not stated |

How the ranking works: rank 1 is the only business-outcome metric. Ranks 2–4 are delivered systems with a concrete delivery or scale figure. Rank 5 is a capability figure from a proof of concept. Ranks 6–10 have only client-scale figures, scope counts or no figure.

## Top four for full-slide C-suite stories

1. **WhatsApp AI CRM (Singapore hospitality group):** the site's only hard business result ("80%" less manual data entry time), in a channel every executive understands, with a real dashboard screenshot.
2. **Sovereign AI case management (Abraham Ooi & Partners / a 36-year-old law firm):** the clearest data-sovereignty story. Models run on a locally hosted NVIDIA GPU workstation so client data stays inside the firm, it replaced a legacy system, it has 90+ portal automations, and it has run since delivery in 2025.
3. **iPajak Group pawn brokerage:** a project-rescue story with a named CEO quote crediting ALPHV for "taking over the project midway", plus six branches on one system. Keep MYR 500 million framed as the client's scale.
4. **Tasco Insurance agentic claims (proof of concept):** the strongest agentic and multimodal AI story, with a real interface screenshot. The index records that ALPHV "placed first of nine companies" at the AI for Insurance Challenge × Tasco. It must be labelled a proof of concept, with no production results.

Alternate: Carlsberg is the most recognisable brand and has a clean "5 months" delivery figure. It suits a logo strip or proof-point line better than a full slide: it has no AI content, no quote and no outcome beyond completion, and the site frames ALPHV as having "assisted".
