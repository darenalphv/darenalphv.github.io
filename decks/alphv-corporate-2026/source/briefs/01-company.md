# ALPHV Technologies: company source brief (01)

Source: scraped alphv.com pages in `scratchpad/pages/`. Page keys in brackets: [home], [about], [how-we-work], [platforms-and-clients], [careers], [apex], [contact], [services], [products], [industries], [insights], [news-tasco] (= news__ai-for-insurance-challenge-tasco-winner), [news-ramen] (= news__ramen-tech-global-summit-2026-fukuoka), [news-selangor] (= news__selangor-ai-hackathon-2026-2nd-runner-up). "(JSON-LD)" means the fact comes from the page's structured data in the HTML, not visible copy. "(HTML)" means it was recovered from the raw HTML because the deduped .txt dropped or blanked it.

Quotes are verbatim, including site spelling and punctuation (curly apostrophes, "organisation", "programme", but note the APEX page itself says "program").

Extraction caveat: the .txt files are deduped, so a line that repeats anywhere on a page shows only once. Where that mattered (step titles, stat values, testimonial captions, tags) I checked against the HTML. CountUp numbers render as "0", "0+", "0%" or "0–0%" in the .txt. The real values come from the aria-labels and are given below.

---

## 1. Positioning

### Page titles (browser `<title>`)
- "ALPHV Technologies | AI Systems Integrator in Malaysia" [home]
- "About ALPHV | AI-Native Systems Integrator, Kuala Lumpur" [about]
- "How We Deliver AI Projects | ALPHV Technologies" [how-we-work]
- "AI Platforms, Partners & Clients | ALPHV Technologies" [platforms-and-clients]
- "Careers in AI Engineering | ALPHV Technologies" [careers]
- "APEX internship alumni | ALPHV Technologies" [apex]
- "Contact ALPHV | Talk to an AI Engineer in Kuala Lumpur" [contact]
- "AI Engineering & Automation Services | ALPHV Technologies" [services]
- "AI Software Products for Business | ALPHV Technologies" [products]
- "AI Solutions by Industry | ALPHV Technologies" [industries]
- "AI Case Studies & Recognition | ALPHV Technologies" [insights]

### Hero badges, H1s and ledes
- Home badge: "AI systems integrator · Kuala Lumpur" [home]
- Home H1: **"Build AI into the systems that run your business"** [home]
- Home lede: "ALPHV designs, integrates and runs production AI for legal, insurance, healthcare, hospitality, finance and retail teams, from first model to measurable outcomes." [home]
- Home hero shows a "01 / 04" slide counter. Only slide 1 is in the scraped HTML, so slides 2–4 were **not captured**. [home]
- About H1: **"An AI-native systems integrator from Kuala Lumpur"** [about]
- About lede: "ALPHV designs, integrates and runs production AI inside the core systems that legal, insurance, healthcare, hospitality, finance and retail teams already run." [about]
- How we work H1: **"From business case to production, with one team"**. Lede: "The engineers who scope your AI are the ones who ship and improve it. No hand-offs." [how-we-work] (the same H2 and lede appear on [home] and [services])
- Platforms H1: **"The right model, compute and cloud for each job"**. Lede: "Choose the right model, compute and cloud for your data, cost and residency needs. ALPHV works across all of them." [platforms-and-clients] (the home version reads "Choose the right model , compute and cloud for your data, cost and residency needs. ALPHV works across all of them." [home])
- Services H1: **"Systems built and run for your business"**. Lede: "From the first model to the last integration, ALPHV designs, builds and runs AI systems inside your existing operations." [services] (also on [home] as "Support your business end to end")
- Products H1: **"ALPHV software, ready to deploy"**. Lede: "ALPHV products package proven solutions to recurring problems, from workforce rostering to computer vision and digital avatars." [products]
- Industries H1: **"Work shaped around your sector"** [industries]
- Insights H1: **"Work in production, and the people noticing"** [insights]
- Careers H1: **"Join a 100% local team"** [careers]
- Contact H1: **"Talk to an AI engineer"**. Lede: "Tell us where your business needs to be. We’ll map the path to get there." [contact]
- Closing CTA band, on every page: "Let’s build what’s next / Tell us where your business needs to be. We’ll map the path to get there." [home, about, how-we-work, services, products, industries, insights, platforms-and-clients, news pages]
- Home platform band H2: "Powered by the technologies leading the AI frontier" [home]
- Home products band H2: "AI in action". Copy: "ALPHV products package proven solutions to recurring problems, from workforce rostering to computer vision and digital avatars." [home]
- Home "Full Stack AI Engineering" H2: "Every ALPHV system combines a brain that understands your data, an action layer that does the work, and guardrails that keep it accountable." [home]
- Interactive band: "I want to transform my [Law firm] business". Only the "Law firm" option is in the HTML, so the other dropdown options were not captured. [home]

### Meta descriptions (search snippets)
- "ALPHV Technologies is an AI-native systems integrator in Kuala Lumpur, Malaysia, building AI, agents and automation into the core systems businesses run." [home]
- "ALPHV Technologies is a Malaysian AI-native systems integrator founded in 2023, headquartered in Kuala Lumpur with a Singapore presence and a 100% local team." [about]
- "One team from business case to production: discover, design, implement and improve. The engineers who scope your AI at ALPHV ship it and keep improving it." [how-we-work]
- "AI engineering, agentic automation, system integration, computer vision, web and mobile apps, and data, RPA and MLOps, delivered by one team in Kuala Lumpur." [services]
- Organisation description (JSON-LD, every page): "ALPHV Technologies is an AI-native systems integrator headquartered in Kuala Lumpur, Malaysia, with an office in Singapore. It designs, integrates and runs production AI inside the core systems businesses already run, for legal, insurance, healthcare, hospitality, financial services and retail teams." [home (JSON-LD)]

### The "Why ALPHV" argument
Home version [home]:
- Badge "Why ALPHV". H2: **"AI pays off after the pilot. Not in it."**
- "Most companies have tried AI. Far fewer have it running inside the systems that earn their revenue, because data sits in silos, legacy systems resist change and pilots stall at integration."
- "ALPHV closes that gap. Headquartered in Kuala Lumpur with an office in Singapore, we embed AI into the core systems you already run, then stay to improve it."
- Photo caption: "The ALPHV Technologies team, 100% Malaysian and fully local."

About "Our story" version [about]:
- H2: "AI pays off after the pilot. Not in it."
- "Most companies have tried AI. Far fewer run it inside the systems that earn their revenue. Data sits in silos, legacy systems resist change and pilots stall at integration."
- "ALPHV was founded in 2023 to close that gap. We embed AI into the core systems you already run, then stay to improve it after go-live."
- "Today a founder-led team of 15+ solutions architects, engineers and consultants does that work from Kuala Lumpur, with an office in Singapore."

About "Why teams build AI with ALPHV" [about]: "One accountable team that builds AI into the systems you already run, keeps your data where it must stay and chooses the stack per project."
1. **One team, no hand-offs**: "The engineers who scope your AI are the ones who ship and improve it, so one team stays accountable from business case to production."
2. **Starts from the business case**: "Every engagement begins with tech advisory, a data audit and AI strategy research to find where AI pays back, before any build starts."
3. **AI inside your core systems**: "We embed AI into the systems you already run, such as ERP, CRM, case management and third-party portals, including bank, government and SSM portals."
4. **Your data stays in-house**: "Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation."
5. **Model- and cloud-agnostic**: "We choose per project across Qwen, Claude, OpenAI, Gemini and ILMU, with compute and cloud from FPT AI Factory, NVIDIA, Alibaba Cloud and Google Cloud."
6. **Founder-led and fully local**: "A 100% Malaysian team, led by a founder who still writes code. We also take over projects midway, as we did for iPajak Group."

### Mission, vision and values
- No formal mission, vision or values statement appears on any of these pages: **not stated**.
- Closest lines: the slogan "We automate everything." (footer and JSON-LD `slogan`) and "AI pays off after the pilot. Not in it." [home, about]

### Footer statements (every page)
- "We automate everything." (the footer breaks it as "We automate / everything.") [home]
- "© 2026 ALPHV Technologies Sdn Bhd. All rights reserved." [home]
- "Company Reg. No. 202301015604 (1509526-V)" [home]
- "ALPHV Technologies Sdn Bhd is a Malaysian technology company incorporated in 2023. It is not affiliated with any other organisation that uses a similar name." [home]
- Footer nav groups: "Discover Services" (AI engineering, Agentic automation, System integration and consulting, Computer vision, Web and mobile apps), "Products" (Kiralytics SHIFT™, ALPHV Avatar™, ALPHV HelloGen™), "Get to know us" (About us, Why ALPHV, How we work, Careers, Insights, Case studies, Recognition, Platforms and clients, Contact us). [home]

---

## 2. Company facts

| Fact | Value (verbatim) | Source |
|---|---|---|
| Trading name | ALPHV Technologies; alternate name "ALPHV" | [home (JSON-LD)] |
| Legal entity (MY) | ALPHV Technologies Sdn Bhd | [home footer] |
| Company reg. no. | "Company Reg. No. 202301015604 (1509526-V)"; JSON-LD labels it "Company Registration No. (SSM)" | [home], [home (JSON-LD)] |
| Singapore entity | "ALPHV Group Pte Ltd, its Singapore company" | [news-ramen] |
| Founded | "Founded 2023"; "ALPHV was founded in 2023"; "incorporated in 2023" | [about], [home footer] |
| HQ | "Kuala Lumpur (HQ)": Unit 21-05, Level 21, Tower A, The Vertical Business Suites, 8 Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur | [home], [about], [contact] |
| Singapore office | WCEGA Tower, 21 Bukit Batok Crescent, Singapore 658065 | [home], [about], [contact] |
| Singapore office note | "Serving clients in Singapore, including an AI CRM with WhatsApp sales agents for a leading hospitality group." | [about] |
| | "To arrange a meeting, message us on WhatsApp or email the team." | [contact] |
| Countries (offices) | "2 / Countries: Malaysia (HQ) and Singapore" | [home], [about], [industries] |
| Countries (clients) | "clients across Malaysia, Singapore and Vietnam"; JSON-LD areaServed: Malaysia, Singapore, Vietnam | [about], [contact], [home (JSON-LD)] |
| Market being explored | "as ALPHV explores the Japanese market" | [news-ramen] |
| Team size | "15+ / Solutions Architect, Engineers, and Consultants" [home]; "a founder-led team of 15+ solutions architects, engineers and consultants" [about]; "a founder-led team of 15+ engineers and consultants" [news-tasco]; JSON-LD numberOfEmployees minValue 15 | [home], [about], [news-tasco] |
| Team make-up | "Team: 100% Malaysian and fully local" [about]; "ALPHV is built by Malaysian engineers, designers and consultants who ship AI into production." [careers, home]; "led by a founder who still writes code" [about] | [about], [careers], [home] |
| Role families | AI engineers; Software engineers, web and mobile; Solutions architects; UI/UX designers; Consultants ("We hire across five role families") | [careers] |
| Leadership | Called "ALPHV’s CEO" throughout, but the CEO is **not named in visible copy**. "Daren" appears only in the iPajak testimonial ("Daren and the ALPHV team…"). The news pages' "Read the original post" links go to facebook.com/heisdaren and linkedin.com/posts/daren-tan_… (link targets only). | [insights], [how-we-work], [news-*] |
| Team location | "Our team works from Bangsar South in Kuala Lumpur, with an office in Singapore and clients across Malaysia, Singapore and Vietnam." | [about] |
| Language | JSON-LD contactPoint availableLanguage: English | [home (JSON-LD)] |

### Certifications ("Our certifications" logo strip [home])
Names are the logos' alt text. The site gives no further detail on PETRONAS or ePerolehan beyond the logo:
1. Malaysia Digital (MDEC) status: https://framerusercontent.com/images/r2VwXWG3WtZS4Df5Ix75IzzN6Ag.png
2. HRD Corp registered training provider: https://framerusercontent.com/images/WzVrbyrgCSAVGXqCRlVuhzUjs.png
3. PETRONAS: https://framerusercontent.com/images/QEwWnRuiv0F8nHkRlLsjmw44gDY.png
4. Government of Malaysia ePerolehan: https://framerusercontent.com/images/OyGUMBUs0z6PjSjnLd9J0lOA5vs.png

Related statements:
- "Malaysia Digital (MD) status — ALPHV Technologies holds MDEC Malaysia Digital status." [about]
- "ALPHV Technologies is certified in the Alibaba Cloud Partner Network as a Tier 2 reseller for Malaysia." (Partner network · 15 Jul 2025) [insights]
- "Cloud platform, with ALPHV as a Microsoft partner." [platforms-and-clients]
- "a strategic partnership with FPT AI Factory" [platforms-and-clients]

### Contact details
- Phone: "+60 16-518 7740" (link tel:+60165187740) [home, contact]
- WhatsApp: "+60 16-518 7740" (link https://wa.me/60165187740) [contact]
- Email: admin@alphv.com [about, contact, careers]
- No separate Singapore phone number. The footer's "Call" link uses the MY number. [home (HTML)]
- Contact form topics: "AI engineering; Agentic automation; System integration and consulting; Computer vision and smart city; Web and mobile apps; Data, RPA and MLOps; Product demo — Kiralytics or ALPHV Avatar™; Careers; Something else" [contact]
- Contact form section: badge "Get in touch", H2 "Tell us about your business case", copy "Share what you want AI to change and the systems it needs to work with. Prefer to talk it through? Reach the team directly." Form note: "All fields are required unless marked optional." [contact]
- FAQ answer: "Message or call +60 16-518 7740 on WhatsApp or phone, email admin@alphv.com, or use the form on the contact page to talk to an AI engineer." [about (JSON-LD FAQ)]

### Social links (footer "Follow us", every page)
- LinkedIn: https://www.linkedin.com/company/alphv-technologies
- Instagram: https://www.instagram.com/alphvgroup/
- Facebook: https://www.facebook.com/profile.php?id=61571678193968
- No X, YouTube or TikTok company links. [home (HTML)]

### Logos (ALPHV)
- Header logo: https://framerusercontent.com/images/nbgY1jBHT0nJrIR59BBNqKn2Ao.png (alt "ALPHV") [home]
- Footer logo (480×150): https://framerusercontent.com/images/rTiONB1RogHziU0cc3PcKIIhE.png [home]
- Square logo, JSON-LD (512×512): https://framerusercontent.com/images/QZSQWFFWYrMOhD1lLZq8yT8Kzk8.png [home (JSON-LD)]

---

## 3. Numbers

### Company stat blocks
| Number | Exact label | Sub-label | Source |
|---|---|---|---|
| 16 | "Industry verticals served" | (none) | [home], [about], [industries], [insights] |
| 12 | "Projects delivered and in delivery" | (none) | [home], [about], [industries], [insights] |
| 2 | "Countries: Malaysia (HQ) and Singapore" [home] / "Countries" + "Malaysia (HQ) and Singapore" [about, industries] | | [home], [about], [industries] |
| 15+ | "Solutions Architect, Engineers, and Consultants" [home] / "Solutions architects, engineers and consultants" [about, industries] | | (HTML aria-label) |
| (text stat) | "Clients across" + "Malaysia, Singapore and Vietnam" | | [insights] |
| 2023 | "Founded" | | [about] |

Services hero facts strip [services]: "Services: Six, from AI engineering to MLOps" · "Delivery: Founder-led, with no hand-offs" · "Models: Qwen, Claude, OpenAI, Gemini and ILMU" · "Base: Kuala Lumpur HQ, with an office in Singapore"

### Impact stats
H2 "Measured in revenue, hours and cost". Copy: "Outcomes reported and expected across ALPHV engagements." [services]. The same four tiles appear on [home] under the law-firm band. Values come from the HTML aria-labels.

| Number | Label | Sub-label (verbatim) |
|---|---|---|
| 15% | "Revenue generation" | "Up to 15%, expected" |
| 30% | "Productivity improvement" | (none) |
| 10–40% | "Cost saving" | "Minimum 10%, estimated up to 40%" |
| 80% | "Less manual entry time" | "AI CRM, Singapore hospitality group" |

### APEX stats [apex]
| Number | Label |
|---|---|
| 8 | "Cohorts" |
| 10+ | "Interns trained" |
| 100% | "Hands-on projects" |
| APEX | "Program name" |

### Other figures in copy
- "a 36-year-old law firm" [home, insights, industries, platforms-and-clients]
- "90+ third-party portal automations, including banks, government, SSM and CTOS" (law firm) [home]; "90+ third-party portal automations for one law firm" [industries]
- "WhatsApp AI agents cut manual data entry by 80% for a Singapore hospitality group" [home, insights]; "cutting manual data entry time by 80%" [industries]
- "LocumLah: 3,000 doctors and 600 clinics onboarded" [services]; "LocumLah, with 3,000 doctors and 600 clinics onboarded" [careers]
- "Politikus by Caprice: Malaysia’s first public predictions game, with 32,000 swipes" [services]
- "a P2P financing platform that has funded MYR 379 million" [platforms-and-clients]
- "a centralised pawn brokerage system for iPajak Group’s six branches across Malaysia" [how-we-work]
- "ALPHV helps Carlsberg migrate core operational data in five months" [home, insights]
- "a client reel with 50.1K views for @richdadwilliam" [home, products]
- "A life-like avatar from a 3-minute clip" (HelloGen™) [home, products]
- "Specialised fine-tuning, including Qwen2.5-14B on H100 SXM" [home, services]
- "Highlighted as one of 12 AI implementation partners" (Alibaba AI Day, Dec 2025) [about, platforms-and-clients, insights]
- Tasco challenge: "first of nine companies"; rivals "in seven countries"; one rival "has raised more than US$772 million and employs over 1,500 people" [news-tasco]
- RAMEN TECH: "exhibiting among 124 companies"; "ALPHV’s second overseas exhibition this year" [news-ramen]
- Selangor hackathon: "26 entrants"; "top 10 finalists"; "team of three AI and data analysts"; "first round on 21 August"; results "on 9 September"; "focus group discussions with 12 local authorities" [news-selangor]
- Law-firm band on home: "ALPHV Lawtech Solutions, delivered 2025." / "Abraham Ooi & Partners, 2025" / "Case management with sovereign AI" / "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting. GenAI with retrieval and agentic RPA handle document work, and the models run on a locally hosted NVIDIA GPU workstation so client data stays inside the firm." Bullets: "Matters, tasks, teams and a client portal for lawyers, clerks and secretaries" / "Bank loan document AI extraction and template-based document generation" / "90+ third-party portal automations, including banks, government, SSM and CTOS" / "Workflow, email and WhatsApp automation, with accounting and e-invoicing". Tags: Qwen GenAI-RAG · Agentic RPA · NVIDIA GPU [home]

### Case studies listed (category label → headline) [home, insights]
1. Lawtech → "ALPHV builds sovereign AI case management for a 36-year-old law firm"
2. Insuretech → "Proof of concept agentic AI for round-the-clock damage claims for Vietnamese insurance"
3. AI CRM → "WhatsApp AI agents cut manual data entry by 80% for a Singapore hospitality group"
4. P2P lending → "ALPHV builds debt recovery management for Fundaztic"
5. Pawn broking → "ALPHV takes over and delivers a centralised pawn brokerage system for iPajak Group"
6. Medicolegal claims → "ALPHV builds AI medicolegal claims processing for a leading healthcare group"
7. E-commerce content → "ALPHV builds an AI content factory for Eastern Decorator’s e-⁠commerce"
8. VR experience → "ALPHV builds a VR and web experience for a telco’s roadshow"
9. Data migration → "ALPHV helps Carlsberg migrate core operational data in five months"
- Case note → "Train a promotions model on H100 SXM": "ALPHV fine-tuned Qwen2.5-14B-Instruct with LoRA and Flash Attention on H100 SXM, through FPT AI Factory, to recommend promotions from historical sales and promotions data." Tags: "Qwen2.5-14B · LoRA · Flash Attention · H100 SXM" [insights]. Home version: "ALPHV fine-tuned Qwen2.5-14B-Instruct using LoRA with Flash Attention to build a model that recommends promotions from historical sales and promotions data. Access to AI hardware through the FPT AI Factory partnership shortens training time and lowers the cost of AI R&D and production for clients." [home]

---

## 4. How we work

### Principles: "The principles behind every engagement" [how-we-work]
Lede: "From a first model to a legacy system replacement, the same four principles shape how we scope, build and run AI."
1. **Start from the business case**: "Tech advisory, a data audit and AI strategy research come first, so the build goes where AI pays back."
2. **One team, no hand-offs**: "The engineers who scope your AI are the ones who ship and improve it. You keep one point of accountability throughout."
3. **Built around your systems, data and regulator**: "Models, hosting and guardrails are chosen to fit the systems you already run, the data you hold and the rules you answer to."
4. **Improvement scoped in from day one**: "Monitoring adoption and model performance is part of the build. After go-live, we stay to review, iterate and improve."

### The four steps: "Four steps, one accountable team" [how-we-work]
Lede: "Every engagement moves through the same four steps, and the engineers who start it are the ones who finish it."

**01 Discover: Start from the business case**
"Run tech advisory, a data audit and AI strategy research to find where AI pays back, before any build starts."
- Tech advisory on the systems and processes AI must fit
- A data audit of what you hold and where it sits
- AI strategy research to find where AI pays back

**02 Design: Design an architecture that fits your stack**
"Choose models, hosting and guardrails around your existing systems, your data and your regulator."
- Models chosen per project across Qwen, Claude, OpenAI, Gemini and ILMU
- Compute and cloud from FPT AI Factory, NVIDIA, Alibaba Cloud or Google Cloud
- Locally hosted models where data must stay in-house
- Guardrails for AI safety, alignment and governance

**03 Implement: Build AI into production**
"Integrate retrieval, agents and automation across your core systems, including bank, government and SSM portals."
- Retrieval over your own documents and data
- Agents with the tools, MCP servers and APIs they need to act safely
- Integration with ERP, CRM, case management and third-party portals

**04 Improve: Improve continuously after go-live**
"Monitor adoption, review model performance and iterate, with improvement scoped into the build from day one."
- Adoption monitoring once your teams are using the system
- Model performance reviews, with MLOps to keep models accurate in production
- Iterations planned from day one, not bolted on later

(The step titles and copy are the same on [home]. On [services], step 01 copy reads: "Tech advisory, a data audit and AI strategy research find where AI pays back, before any build starts." Section heading there: "How we engage".)

### Full stack AI engineering: "What every system is made of" [how-we-work] / "A brain, an action layer and guardrails" [services]
"Every ALPHV system combines a brain that understands your data, an action layer that does the work, and guardrails that keep it accountable."
- **The brain: Foundational intelligence core.** "Custom knowledge integration, RAG and beyond, specialised model fine-tuning, and multimodal intelligence across vision and language."
- **The action: Agentic and autonomous solutions.** "Agentic process automation, custom tool, MCP and API development for agents, and multi-agent systems that do the work."
- **The guardrails: AI governance.** "AI safety and alignment, governance guardrails, and locally hosted models where data must stay in-house."
(Home bullet version: Brain = Custom knowledge integration, RAG and beyond / Specialised model fine-tuning / Multimodal intelligence across vision and language. Action = Agentic process automation / Custom tool, MCP and API development for agents / Multi-agent systems. Guardrails = AI safety and alignment / Governance guardrails / Locally hosted models where data must stay in-house. [home])

### Taking over projects [how-we-work]
H2 "Already mid-build? We can take it over": "Not every project starts with us. We have taken over projects midway and delivered them, including a centralised pawn brokerage system for iPajak Group’s six branches across Malaysia." / "Once a system is live, we stay to improve it."

### What happens after first contact [contact]
H2 "What happens after you get in touch". Lede: "Every engagement starts from the business case, before any build begins. Here is how a first message turns into a plan."
- 01 **Tell us about the business case**: "Share what you want AI to change and the systems involved, by form, WhatsApp, phone or email."
- 02 **Find where AI pays back**: "Tech advisory, a data audit and AI strategy research show where AI pays back, before any build starts."
- 03 **One team designs, builds and improves it**: "The engineers who scope your AI are the ones who ship and improve it. No hand-offs."

### How ALPHV chooses the stack [platforms-and-clients]
"We choose per project, weighing data, cost, capability and governance against your systems and your regulator."
- **Data and residency**: "Where data must stay in-house, we run locally hosted models on an NVIDIA GPU workstation inside your organisation, as we did for a 36-year-old law firm."
- **Cost**: "H100 access through FPT AI Factory shortens training time and lowers the cost of AI R&D and production, as in our Qwen2.5-14B fine-tuning case note."
- **Capability**: "Vision and language models work together where a job needs both, such as assessing asset damage from images and video in insurance claims."
- **Governance**: "Guardrails, AI safety and alignment are part of the design, such as conversation flows with guardrails for WhatsApp sales agents."

### Regulated sectors, governance, security and sovereignty [industries]
H2 "What regulated sectors need from AI": "Legal, insurance, healthcare and financial teams answer to regulators, so their AI has to respect where data lives, what it connects to and who can act."
- **Data that stays in-house**: "Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." Bullets: "Client data stays inside the firm for a 36-year-old law firm" / "Models, hosting and guardrails chosen around your regulator"
- **Integration with the systems you run**: "Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals." Bullets: "90+ third-party portal automations for one law firm" / "Projects taken over midway and delivered, as for iPajak Group"
- **Guardrails and governance**: "AI safety and alignment and governance guardrails keep each system accountable, from customer conversations to claims." Bullets: "Intelligent conversation flows with guardrails" / "Duplicate claims from the same person identified automatically" / "CRM features by user access level"

Sovereignty wording: "sovereign AI case management" [home, insights]; "Case management with sovereign AI" [home]; JSON-LD knowsAbout includes "Sovereign AI" and "AI governance".

### Not stated on these pages
- Engagement or commercial models (fixed price, retainer, T&M, pricing): **not stated**
- Support SLAs, support hours or managed-service tiers: **not stated**. The only support line is "we stay to improve it" and the Improve step.
- Security certifications (ISO 27001, SOC 2 and the like) or a PDPA statement: **not stated**
- Named data-centre or cloud regions: **not stated**

---

## 5. Platforms, partners, technologies

### Models [platforms-and-clients] "Models we build with: We choose per project, matching the model to the task, the data and where it has to run."
| Name | Caption on site | Logo URL |
|---|---|---|
| Qwen | Models | https://framerusercontent.com/images/z3InVRQos68sCLmSwuqV9Dykis.svg |
| Claude | Models | https://framerusercontent.com/images/0UOLRuiN4Btu8mjdwtl2aQtefM.svg |
| OpenAI | Models | https://framerusercontent.com/images/dPbonsGjcuzstbXzlVWG8VYo0.png ([platforms-and-clients], [services]); https://framerusercontent.com/images/UVBm1W5LP8BPVt1niuqfrBGO0I.webp ([home]) |
| Gemini | Models | https://framerusercontent.com/images/xKEndIxNtRo3Cv8dDKH6lmi2pzw.svg |
| ILMU | "Models, YTL AI Labs" | https://framerusercontent.com/images/BRLU9m3PYjol1B3pIIF3CZiwA.png |

Specific models named: Qwen2.5-14B / Qwen2.5-14B-Instruct (LoRA, Flash Attention) [home, insights, platforms-and-clients].

### Compute, cloud and hardware [platforms-and-clients] "Compute, cloud and hardware: We match compute, cloud and hardware to each project’s data, cost and residency needs."
| Name | Caption / claim (verbatim) | Logo URL |
|---|---|---|
| FPT AI Factory | "H100 compute": "H100 SXM compute for training and fine-tuning, through our strategic partnership with FPT AI Factory." Bullets: Shorter training time / Lower cost for AI R&D and production / Qwen2.5-14B fine-tuned with LoRA and Flash Attention | https://framerusercontent.com/images/9jO9W8sBRjKLnDganm2BgdnjPU.png |
| NVIDIA | "GPU workstations": "NVIDIA GPU workstations run locally hosted models where data must stay in-house." Bullets: Client data stays inside the organisation / Qwen, retrieval and agentic RPA for a 36-year-old law firm | https://framerusercontent.com/images/JFjmGaK0xrz8XBJgdo7DuGKOA.svg |
| Alibaba Cloud | "Cloud": "Cloud platform, with ALPHV in the Alibaba Cloud Partner Network." | https://framerusercontent.com/images/qYEeBJSZ5aYafKy76IBsRR95YHg.png |
| Google Cloud | "Cloud": "Cloud platform, chosen per project for data, cost and residency needs." | https://framerusercontent.com/images/NKBr35Q9ZqMOrRYDW8x82Ldnms.png ([platforms-and-clients], [services]); https://framerusercontent.com/images/Pe5lFpjFTG2KiSlauaDukOVng.webp ([home]) |
| Microsoft | "Cloud": "Cloud platform, with ALPHV as a Microsoft partner." | https://framerusercontent.com/images/KqmjDFzV6npQj3SNbQLZ1Nsq8E.svg |
| FootfallCam | "AI hardware": "Hardware partner platform for Kiralytics MATA people counting and TRAFFIK traffic analytics." | https://framerusercontent.com/images/J5jOqIunemmDHXMgNYMpP34ZUig.png |

"How we choose" summary strip [platforms-and-clients]: "Models: Qwen, Claude, OpenAI, Gemini, ILMU" · "Compute: FPT AI Factory (H100), NVIDIA GPU workstations" · "Cloud: Alibaba Cloud, Google Cloud" · "AI hardware: FootfallCam". (Microsoft appears as a cloud logo but is not in this text strip or in the JSON-LD "mentions" list.)

### Partnerships [platforms-and-clients] "Partnerships behind the platforms: A strategic partnership with FPT AI Factory, a place in the Alibaba Cloud Partner Network and recognition as an AI implementation partner."
- Partnership · 24 Apr 2026: "FPT AI Factory and ALPHV announce a strategic partnership". "FPT AI Factory and ALPHV partnered to speed up AI research and development in Malaysia, with priority access to FPT’s GPU cloud and AI tools." [insights]. Link: https://factory.fpt.ai/news/fpt-ai-factory-and-alphv-announce-strategic-partnership-to-accelerate-ai-innovation-in-malaysia
- Partner network · 15 Jul 2025: "ALPHV joins the Alibaba Cloud Partner Network". "certified in the Alibaba Cloud Partner Network as a Tier 2 reseller for Malaysia." [insights]
- Alibaba AI Day · Dec 2025: "Highlighted as one of 12 AI implementation partners" [platforms-and-clients, about, insights]

### Other named organisations (context, not ALPHV technology partners)
- Third-party portals integrated: banks, government, SSM, CTOS [home, industries]
- Social and news channels monitored by Kiralytics EMOSI: Facebook, X, Instagram, TikTok and news [home, products]
- Tasco challenge ecosystem: GenAI Fund, BeyondPilot, Tasco, plus "Microsoft for Startups and Notion as technology partners" of the challenge [news-tasco]
- StartupX (Singapore delegation organiser), Fukuoka City (RAMEN TECH host) [news-ramen]
- Selangor State Government and SHRDC (Selangor Human Resource Development Centre) [news-selangor]
- MDEC (MDX 2025 panel), Konsortium AI Negara (ecosystem map) [insights]
- Media: BFM 89.9, KiniTV, Media Selangor [insights]
- An image alt text mentions a "GIGABYTE AI TOP ATOM", held by the CEO in a BFM photo [insights]. That is image alt text only, with no partnership claimed.

### Clients
Trusted-by line: **"Trusted by teams across Malaysia, Singapore and Vietnam"** [home, industries, platforms-and-clients H2]
Platforms-and-clients lede: "Clients range from a 36-year-old law firm to a P2P financing platform that has funded MYR 379 million." [platforms-and-clients]

| Client | Logo URL | Where shown |
|---|---|---|
| Fundaztic | https://framerusercontent.com/images/x0N9BeUTbzcfI9ARRzVPm1zSw.png | [home], [platforms-and-clients], [industries] |
| iPajak Group | https://framerusercontent.com/images/0suQ2BoN5SyzixJ4YgbycsbQ.png | [home], [platforms-and-clients], [industries], [how-we-work] |
| Abraham Ooi & Partners | https://framerusercontent.com/images/AhEhbR9o2CZh4YvBZsjKh7fuQ.png | [home], [platforms-and-clients], [industries] |
| Tasco Insurance | https://framerusercontent.com/images/a3ZvN5wdJWDoP8plaA1E79k5Bo.png | [platforms-and-clients], [industries] (not in home marquee) |
| PowerDNA | https://framerusercontent.com/images/Ul4RSGFB4RvZIvGX942A9JBA.png | [home], [platforms-and-clients], [industries] |
| EasyRenz | https://framerusercontent.com/images/yhD9PgHw9mNKKxzcYqw0Lh6DUg.png | [home], [platforms-and-clients], [industries] |
| Carlsberg | https://framerusercontent.com/images/6uh07Z5gFCehwCr6E0EKJ0AIs3A.png | [home], [platforms-and-clients], [industries] |
| Mudah Healthcare | https://framerusercontent.com/images/VLzW9TYFtoeuzndpguwjdU6vkFE.png | [home], [platforms-and-clients], [industries] |
| Borong | https://framerusercontent.com/images/TAuwgAaIRw480V7Lk2kzZXQdjs.png | [home], [platforms-and-clients], [industries] |
| LocumLah | https://framerusercontent.com/images/jStdhV6p7VSr0dGLVJJM77Lccww.png | [home], [platforms-and-clients], [industries] |
| Caprice | text tile, no logo | [platforms-and-clients] |

Other clients named in copy (no logo): Eastern Decorator (AI content factory) [home, insights]; Paramount Group (in Tracy Gan's second title) [home, industries, platforms-and-clients]; @richdadwilliam (client reel) [home, products]; "Politikus by Caprice" [services].
Unnamed clients in copy: "a leading healthcare group" [home, insights]; "Singapore hospitality group" [home, industries]; "a telco’s roadshow" [home, insights]; "Leading textile group, 2026" (Retail sector card) [industries]; "a 36-year-old law firm" (named elsewhere as Abraham Ooi & Partners, 2025) [home, industries].

Work per named client (verbatim):
- Fundaztic: "Debt recovery management for Fundaztic"; "UI/UX overhaul for Fundaztic’s lending platform" [services]
- iPajak Group: "Multi-branch pawn brokerage for iPajak Group" [services]; "a six-branch pawn brokerage system for iPajak Group" [careers]
- EasyRenz: "Tech advisory, data audit and AI strategy for EasyRenz" [services]
- PowerDNA: "RPA for PowerDNA’s genetic test report generation" [services]
- LocumLah: "3,000 doctors and 600 clinics onboarded" [services]
- Tasco Insurance, Vietnam: "A multimodal case system assesses asset damage from images and video around the clock, then prepares the liability assessment and claim report. Proof of concept, 2026." [industries]
- Carlsberg: "migrate core operational data in five months" [home, insights]

---

## 6. Testimonials

1. **Tracy Gan**. Caption lines in the HTML: "COO, Fundaztic" **and** "Head of Corporate Strategy and Investment, Paramount Group" (both under the one name) [home, industries, platforms-and-clients]
   > "Our objectives and requirements are well captured and built into solving our problems, incorporating advanced technologies like AI. ALPHV has good people and is easy to work with compared to other tech vendors."

2. **Chong Voon Ying**, "CEO, iPajak Group" [how-we-work]
   > "Daren and the ALPHV team have been exceptional to work with and have done a commendable job taking over the project midway, especially in providing their technical expertise to meet our specific needs."

Note: the testimonial carousels on [home], [industries] and [platforms-and-clients] have arrows, but only the Tracy Gan slide is in the HTML. The platforms intro says "Leaders at Fundaztic and iPajak Group on working with ALPHV." No other testimonials were found on these pages.

---

## 7. Recognition and news

Section framing [insights]: "Recognition / On stage and on the map: Wins at the AI for Insurance Challenge × Tasco and the Selangor AI Hackathon, a place representing Singapore at RAMEN TECH in Fukuoka, plus keynotes, panels and ecosystem maps." About version: "Recognised across the AI ecosystem: Keynotes, panels, ecosystem maps and partner programmes that have featured ALPHV and its work." [about]

### 7.1 AI for Insurance Challenge × Tasco: Winner [news-tasco]
- **Date**: 22 October 2026 (dateline "Kuala Lumpur, 22 October 2026")
- **Programme**: AI for Insurance Challenge × Tasco
- **Run by**: "GenAI Fund, on BeyondPilot" (link https://beyondpilot.ai/programs/insurance-ai-tasco)
- **Result**: "Winner, first of nine companies"
- **Location**: dateline Kuala Lumpur. The demo day venue is **not stated**.
- **What was presented**: not stated explicitly. The page says "The win builds on ALPHV’s agentic AI work in insurance, including a proof of concept with Tasco Insurance that assesses vehicle damage from images and video and prepares the liability assessment and claim report."
- H2: "First of nine, against far larger rivals"
- **Summary (site wording)**: "ALPHV Technologies has won the AI for Insurance Challenge × Tasco, finishing first of nine companies at the programme’s demo day. The challenge is run by GenAI Fund through BeyondPilot with Tasco, a Vietnamese multi-sector group listed on the Hanoi Stock Exchange, with Microsoft for Startups and Notion as technology partners. Teams were asked to build AI that improves how people buy, carry and claim insurance in Vietnam. ALPHV pitched against eight other companies from the US, Turkey, Dubai, Taiwan, India and across Southeast Asia. Some already run insurtech platforms for insurers in seven countries; one has raised more than US$772 million and employs over 1,500 people. ALPHV, a founder-led team of 15+ engineers and consultants, came out on top."
- Image: https://framerusercontent.com/images/B7FlfGZpihdRHr4Z7sCXFQHdmkA.jpg (alt "AI for Insurance Challenge × Tasco winner: ALPHV Technologies", caption "The winner announcement at the AI for Insurance Challenge × Tasco demo day."). Insights card version: https://framerusercontent.com/images/5cVcsFG2ZnGfyU6j0MaOf63nA.jpg

### 7.2 RAMEN TECH Global Summit 2026, Fukuoka: Exhibitor representing Singapore [news-ramen]
- **Date**: 8 October 2026 (dateline "Fukuoka, 8 October 2026")
- **Event**: RAMEN TECH Global Summit 2026
- **Host**: Fukuoka City, Japan
- **Delegation**: "Singapore, with StartupX"
- **Placement**: no ranking. ALPHV exhibited and pitched: "exhibiting among 124 companies"; "pitched on the Open Stage and took part in corporate visits"
- **What was presented**: "At its booth, ALPHV showed its AI systems integration work since 2023 and ALPHV HelloGen™, introducing AYA, a photorealistic live avatar who speaks Japanese as ALPHV’s spokesperson. AYA drew some of the strongest interest from visitors."
- H2: "On the Singapore delegation to Fukuoka"
- **Summary (site wording)**: "ALPHV represented Singapore at the RAMEN TECH Global Summit 2026, part of Fukuoka City’s RAMEN TECH startup week, exhibiting among 124 companies. ALPHV joined the Singapore delegation organised by StartupX through ALPHV Group Pte Ltd, its Singapore company, when a place opened up for the next company in line. It was ALPHV’s second overseas exhibition this year. … The team also pitched on the Open Stage and took part in corporate visits, meeting founders from around the world and learning how Japanese companies work with technology as ALPHV explores the Japanese market."
- Image: https://framerusercontent.com/images/ySq7DrwFhJf6IxjpEBpsg9duU.jpg (caption "The ALPHV team at the RAMEN TECH Global Summit 2026, Fukuoka.")

### 7.3 Selangor AI Hackathon 2026: 2nd runner-up [news-selangor]
- **Date**: 9 September 2026 (dateline "Selangor, 9 September 2026")
- **Organisers**: "Selangor State Government and SHRDC" (Selangor Human Resource Development Centre)
- **Field**: 26 companies
- **Result**: "2nd runner-up, third place"
- **Location**: Selangor. The closing event is named "Selangor AI Hackathon and Forum 2026 closing ceremony" in the photo caption.
- **What was presented**: "a solution for illegal dumping and waste management". The related Media Selangor item mentions "a 3D map that tracks illegal dumping hotspots" among the hackathon's AI solutions [insights].
- H2: "Third of 26 companies, from a blind dataset draw"
- **Summary (site wording)**: "ALPHV Technologies has been named 2nd runner-up at the Selangor AI Hackathon 2026, organised by the Selangor State Government and the Selangor Human Resource Development Centre (SHRDC). The hackathon was open to companies with SSM registration, an MOF licence and a CTOS report, and drew 26 entrants. Datasets were drawn blind on the day, and ALPHV’s team of three AI and data analysts was assigned illegal dumping and waste management. After the first round on 21 August, the team was named among the top 10 finalists and pitched to the judging panel. Results were announced at the closing ceremony and awards dinner on 9 September, where ALPHV placed third. Alongside the hackathon, ALPHV has held focus group discussions with 12 local authorities and Selangor’s waste, water, road and infrastructure departments, in support of better public services for the rakyat."
- Image: https://framerusercontent.com/images/0SxFZfaALtmSosMYms12gS3Y50.jpg

### 7.4 Other recognition [insights, about]
| Type · date | Headline (verbatim) | Detail (verbatim) | Link |
|---|---|---|---|
| Alibaba AI Day · Dec 2025 | "ALPHV highlighted as one of 12 AI implementation partners" | "At Alibaba Cloud AI Day in Kuala Lumpur, ALPHV was highlighted on stage among the partners powering Malaysia’s AI future with Alibaba Cloud." | theasianbanker.com press release |
| Panel · Sep 2025 | "ALPHV joins the agentic AI panel at MDX 2025" | "ALPHV joined MDEC’s agentic AI panel at MDX 2025 in Kuala Lumpur, on how AI agents move from hype to real-world impact." | mdec.my media release |
| Keynote · 13 Aug 2025 | "ALPHV’s CEO delivers a technical AI keynote at the ASEAN AI Summit 2025" | "ALPHV’s CEO gave a technical keynote on building scalable, autonomous systems in ASEAN with agentic AI and MCP at the ASEAN AI Malaysia Summit 2025." | https://www.youtube.com/watch?v=_3sm0zq-620 |
| Ecosystem map · 2025 | "ALPHV Technologies named on the Konsortium AI Negara 2025 ecosystem map" | "ALPHV Technologies appears on Konsortium AI Negara’s 2025 map of Malaysia’s AI ecosystem." | https://konsortiumainegara.org/ |
| Status | "Malaysia Digital (MD) status" | "ALPHV Technologies holds MDEC Malaysia Digital status." [about] | |

### 7.5 Media and partners [insights]
Framing: "In partnership and on air: A strategic partnership with FPT AI Factory, a place in the Alibaba Cloud Partner Network, and coverage on Media Selangor, KiniTV and BFM 89.9."
| Outlet · date | Headline | Detail |
|---|---|---|
| Media Selangor · 10 Sep 2026 | "Media Selangor covers the AI solutions from Selangor Hackathon 2026" | "A Media Selangor report on AI solutions built for real state issues at the hackathon, including a 3D map that tracks illegal dumping hotspots." (https://www.youtube.com/watch?v=DfaAL00YFpk) |
| Partnership · 24 Apr 2026 | "FPT AI Factory and ALPHV announce a strategic partnership" | "FPT AI Factory and ALPHV partnered to speed up AI research and development in Malaysia, with priority access to FPT’s GPU cloud and AI tools." |
| BFM 89.9 · 19 Mar 2026 | "$100K AI bills? Four drivers of token bill shock, on BFM 89.9 Tech Talk" | "On BFM 89.9’s Tech Talk, ALPHV’s CEO explains how companies can control AI spending, from token billing to model routing." |
| BFM 89.9 · 12 Mar 2026 | "Shadow AI and the true cost of LLMs, on BFM 89.9 Tech Talk" | "On BFM 89.9’s Tech Talk, ALPHV’s CEO on the risks of unmanaged AI use at work and the real cost of running LLMs." |
| KiniTV · 19 Sep 2025 | "Tech, Trust and Tomorrow: a fireside chat with ALPHV’s CEO" | "A KiniTV live fireside chat at MDX 2025 with ALPHV’s CEO on technology, trust and what comes next." |
| Partner network · 15 Jul 2025 | "ALPHV Technologies joins the Alibaba Cloud Partner Network" | "ALPHV Technologies is certified in the Alibaba Cloud Partner Network as a Tier 2 reseller for Malaysia." |
| BFM 89.9 · 27 Feb 2025 | "On air with BFM, Malaysia’s business radio station" | "On BFM 89.9’s Open For Business, ALPHV’s CEO shares how a freelance side business grew into ALPHV." |

---

## 8. APEX

**What it is**: APEX is ALPHV's **internship programme**. The page itself spells it "APEX program". It is not a partner network or an event. Page title: "APEX internship alumni | ALPHV Technologies". Meta description: "Meet the APEX interns who built with ALPHV Technologies: eight cohorts from Malaysian and overseas universities, working on real client projects." [apex]. The careers page calls it "APEX internships: Interns join APEX from universities and colleges across Malaysia and overseas, and work on hands-on projects with the team." with the link "Meet our intern alumni" [careers].

**Structure** [apex]:
- Badge "APEX program". H1 **"Meet our intern alumni"**
- Lede: "Real people, real projects, real impact. Every APEX cohort brings in driven individuals who leave a lasting mark on our products and culture."
- Stats: 8 Cohorts · 10+ Interns trained · 100% Hands-on projects · APEX Program name
- "Universities: Where our interns study. APEX interns join from universities and colleges across Malaysia and overseas." There are 13 logos: Yale University, Multimedia University, UMPSA, TARUMT, Taylor’s University, Sunway University, UiTM, University of Toronto, UKM, Sunway College, University of Illinois, IIUM, APU
- "Cohorts: All APEX cohorts. From our founding cohort to the latest batch, every face that built with us."
  - **APEX-00 · Founding, "The First"**: Wei Lun (Yale University)
  - **APEX-01, Cohort 01**: Daron Tang (Multimedia University); Alpha Chong (UMPSA)
  - **APEX-02, Cohort 02**: Derek Liew (TARUMT); Jing Yuan (Taylor’s University); Marcus Tan (Taylor’s University)
  - **APEX-03, Cohort 03**: Leanne Ooi (Sunway University); Jia Ying (Sunway University)
  - **APEX-04, Cohort 04**: Fathin Umairah (UiTM); Toryn Chua (University of Toronto)
  - **APEX-05, Cohort 05**: Maya (IIUM); James (APU); Dini (UKM); Qistina (UKM)
  - **APEX-R · Returns, "The Returners"**: Alpha Chong (UMPSA); Derek Liew (TARUMT)
  - **APEX-06 · Current, Cohort 06**: Tisha (Taylor’s University); Hana Tang (Sunway College); Christian Teo (University of Illinois)
- CTA: "Join ALPHV now: Send your CV and work samples to admin@alphv.com, or message the team on WhatsApp."
- My own counts, not site stats: 17 distinct names are listed, and the "8 cohorts" stat matches the 8 cohort groups (APEX-00 to 06 plus APEX-R).
- The page makes no claims about project outcomes, duration, stipend or application dates: **not stated**.
- Intern photos and university logos have no alt text (headshots: e.g. https://framerusercontent.com/images/zDeWHOJs1oLDv91YzWDxVLySH1Q.jpg for Wei Lun). They are personal headshots of interns, so leave them out of a corporate deck unless consent is confirmed.

---

## 9. Careers

- H1 "Join a 100% local team". Lede: "ALPHV is built by Malaysian engineers, designers and consultants who ship AI into production." Photo caption: "An ALPHV team dinner." [careers]
- **Working here: "Grow as a builder"**: "Work on real client systems from week one, alongside a founder who still writes code." / "The engineers who scope a system are the ones who ship and improve it, so you see your work through from business case to production." Bullets: "Real client systems from week one" · "Scope, build and improve the same system" · "Work across Qwen, Claude, OpenAI, Gemini and ILMU" · "Clients across Malaysia, Singapore and Vietnam" [careers]
- **The work: "What you would work on"**: "Production systems for legal, insurance, healthcare, hospitality, financial services and retail teams across Malaysia, Singapore and Vietnam." [careers]
  - Production AI and fine-tuning: "Retrieval, fine-tuning and multimodal models, such as Qwen2.5-14B fine-tuned on H100 SXM for a retail promotions model."
  - Agentic automation: "AI agents that act across systems, from insurance claims in Vietnam to WhatsApp sales agents that sync leads to a hospitality group’s CRM."
  - System integration: "Legacy replacement and integration, such as debt recovery for Fundaztic and a six-branch pawn brokerage system for iPajak Group."
  - Computer vision: "People counting, traffic counting and speed detection on live video with Kiralytics MATA and TRAFFIK, for retail floors and roads."
  - Web and mobile apps: "Platforms used by thousands of people, such as LocumLah, with 3,000 doctors and 600 clinics onboarded."
  - Data, RPA and MLOps: "Data analytics, RPA and MLOps pipelines that keep models accurate in production, such as RPA for PowerDNA’s genetic test reports."
- **Roles: "Roles we hire for"**: "We hire across five role families, all working on the kinds of systems above." [careers]
  - AI engineers: "Build retrieval, agents and fine-tuned models, then deploy, monitor and improve them inside client systems."
  - Software engineers, web and mobile: "Build the web and mobile platforms, portals and integrations that production AI runs inside."
  - Solutions architects: "Design architectures that fit a client’s stack, choosing models, hosting and guardrails around their data and regulator."
  - UI/UX designers: "Design the interfaces people use every day, from client portals and CRM dashboards to lending platforms."
  - Consultants: "Run tech advisory, data audits and AI strategy research to find where AI pays back before any build starts."
- **How to apply**: "There is no fixed list of openings on this site. Send your CV and work to admin@alphv.com and tell us which kind of role fits you." [careers]
- **APEX internships**: see section 8.
- **Next steps: "How to reach us"**: "Start with an email to admin@alphv.com or a WhatsApp message to +60 16-518 7740." Steps: 01 "Send your CV and work samples: Email your CV with a few samples of your work, such as code, designs or write-ups, to admin@alphv.com." 02 "We reply: We read what you send and get back to you." 03 "A conversation with the team: Talk with the team about your work, the roles we hire for and the systems we build." [careers]
- Closing CTA: "Build what’s next with us: Send your CV and work samples to admin@alphv.com, or message the team on WhatsApp." [careers]
- Home careers band: "Join a 100% local team / ALPHV is built by Malaysian engineers, designers and consultants who ship AI into production." and "Grow as a builder / Work on real client systems from week one, alongside a founder who still writes code." [home]
- Formal values list: **not stated**. Benefits (salary, leave, hybrid work and so on): **not stated**. Specific open vacancies: none ("no fixed list of openings").

---

## 10. FAQs (verbatim; answers come from the visible copy or the pages' FAQPage JSON-LD)

**Q: What does an AI-native systems integrator do?** [home, services]
A: "We design, build and integrate AI into the core systems you already run, such as ERP, CRM, case management and third-party portals, then monitor and improve it after go-live."

**Q: Can you work with our existing systems?** [home, how-we-work, services, contact]
A: "Yes. Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals. We have also taken over projects midway and delivered them."

**Q: Can our data stay in-house?** [home, how-we-work, services, contact]
A: "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation."

**Q: Which industries do you work with?** [home]
A: "Legal, insurance, healthcare, hospitality, financial services and retail, among the 16 industry verticals we serve across Malaysia and Singapore."

**Q: Which AI models and clouds do you use?** [home, how-we-work, services]
A: "We choose per project across Qwen, Claude, OpenAI, Gemini and ILMU, with compute and cloud from FPT AI Factory, NVIDIA, Alibaba Cloud and Google Cloud."

**Q: How do we get started?** [home, how-we-work, services, contact]
A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Q: Can ALPHV take over a project already in progress?** [services]
A: "Yes. We took over iPajak Group’s centralised pawn brokerage system midway and delivered it for six branches across Malaysia."

FAQ intros: home "Everything you need to know about working with ALPHV, from integration to data residency."; how-we-work "How engagements start, what we connect to, and where your data and models run."; services "How our services fit your systems, your data and your team."; contact "Answers to common questions before a first conversation with our team."

About page FAQ, headed "About ALPHV, in brief: Quick answers about who ALPHV is, where it is based and how to reach the team." [about]
- **What is ALPHV Technologies?** "ALPHV Technologies is an AI-native systems integrator headquartered in Kuala Lumpur, Malaysia. It designs, integrates and runs production AI inside the core systems businesses already run, from the first model to measurable outcomes."
- **Where is ALPHV based?** "ALPHV’s headquarters is at Unit 21-05, Level 21, Tower A, The Vertical Business Suites, 8 Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur. It also has an office at WCEGA Tower, 21 Bukit Batok Crescent, Singapore 658065, and works with clients across Malaysia, Singapore and Vietnam."
- **When was ALPHV founded?** "ALPHV Technologies Sdn Bhd is a Malaysian technology company incorporated in 2023, Company Reg. No. 202301015604 (1509526-V)."
- **Who works at ALPHV?** "A 100% Malaysian team of 15+ solutions architects, engineers and consultants, led by a founder who still writes code. The engineers who scope your AI are the ones who ship and improve it."
- **Which industries does ALPHV work with?** "Legal, insurance, healthcare, hospitality, financial services and retail, among the 16 industry verticals ALPHV serves across Malaysia and Singapore."
- **How do I contact ALPHV?** "Message or call +60 16-518 7740 on WhatsApp or phone, email admin@alphv.com, or use the form on the contact page to talk to an AI engineer."

---

## 11. Index-page copy (slide subtitles)

### Services [services]
- Badge "What we do". H1 "Systems built and run for your business". Lede: "From the first model to the last integration, ALPHV designs, builds and runs AI systems inside your existing operations."
- "Services / **Six services, one team**: Every service is shipped and improved by the same engineers who scoped it."
  1. **AI engineering**: "Turn your own data into specialised AI with knowledge integration, fine-tuning and multimodal models, governed for regulated work." (Retrieval-augmented generation and beyond / Specialised fine-tuning, including Qwen2.5-14B on H100 SXM / Vision and language models working together)
  2. **Agentic automation**: "Put AI agents to work across your systems, with the tools, MCP servers and APIs they need to act safely." (Agentic process automation for documents and claims / Custom tool, MCP and API development for agents / WhatsApp sales agents that sync leads to your CRM)
  3. **System integration and consulting**: "Replace and connect legacy systems, with consulting from AI strategy to go-live, including projects taken over midway." (Debt recovery management for Fundaztic / Multi-branch pawn brokerage for iPajak Group / Tech advisory, data audit and AI strategy for EasyRenz)
  4. **Computer vision and smart city**: "Count, classify and track with video analytics for retail floors, roads and public spaces." (People counting and occupancy with Kiralytics MATA / Traffic counting and speed detection with Kiralytics TRAFFIK / Smart city video analytics)
  5. **Web and mobile apps**: "Design and engineer platforms used by thousands of people, from product strategy and UI/UX to delivery." (LocumLah: 3,000 doctors and 600 clinics onboarded / Politikus by Caprice: Malaysia’s first public predictions game, with 32,000 swipes / UI/UX overhaul for Fundaztic’s lending platform)
  6. **Data, RPA and MLOps**: "Keep models accurate in production with data science, analytics, RPA, DevOps and MLOps." (RPA for PowerDNA’s genetic test report generation / Data analytics and dashboards / DevOps and MLOps pipelines)
- "Full stack AI engineering / **A brain, an action layer and guardrails**"
- "How we engage / **From business case to production, with one team**"
- "Impact / **Measured in revenue, hours and cost**: Outcomes reported and expected across ALPHV engagements."
- "Platforms / **Models, compute and cloud, chosen per project**: Choose the right model, compute and cloud for your data, cost and residency needs. ALPHV works across all of them."
- "FAQ / Frequently asked questions: How our services fit your systems, your data and your team."

### Products [products]
- Badge "Products". H1 "ALPHV software, ready to deploy". Lede: "ALPHV products package proven solutions to recurring problems, from workforce rostering to computer vision and digital avatars."
- "Flagship products / **Two flagships for day-to-day operations**: Kiralytics SHIFT™ runs rostering and attendance for multi-location retail. ALPHV Avatar™ puts digital avatars to work taking orders, answering questions and screening candidates."
  - **Kiralytics SHIFT™ workforce optimiser**: "Cloud-native rostering, GPS-verified attendance and workforce analytics for multi-location retail, with separate views for store managers, rostered staff and HQ admins." (Roster timeline with leave, overtime and shift-swap approvals / GPS-verified clock-in with geofence validation / Cross-branch KPIs and unified reporting for HQ)
  - **ALPHV Avatar™ digital avatars**: "Digital Mamak takes restaurant orders. Digital Ustaz answers questions about Islam 24/7 from the Al-Quran and Hadith. Digital Interviewer screens candidates at scale."
- "Kiralytics / **The Kiralytics family**: Analytics products for workforces, shop floors, roads and brands, built by ALPHV."
  - Kiralytics SHIFT™, "Workforce optimiser": "Cloud-native rostering, GPS-verified attendance and workforce analytics for multi-location retail."
  - Kiralytics MATA and TRAFFIK, "People and traffic counting": "Video analytics that count, classify and track on shop floors and roads, with FootfallCam as the AI hardware partner." (Foot traffic, customer flow and occupancy on live CCTV / Vehicle classification, speed detection and flow analysis)
  - Kiralytics EMOSI, "Sentiment monitoring": "Track brand perception across Facebook, X, Instagram, TikTok and news."
- "ALPHV avatars / **Avatars for orders, answers and interviews**: ALPHV Avatar™ puts digital avatars to work in specific roles. ALPHV HelloGen™ turns a 3-minute clip into a life-like video and voice avatar."
  - ALPHV Avatar™, "Digital avatars": "Digital avatars, each built for one role, from the restaurant counter to the hiring funnel."
  - ALPHV HelloGen™, "Video and voice avatars": "Turn a 3-minute clip into a life-like avatar with lip-sync and low-latency replies."
- "Also from ALPHV / **Content and sports analysis**: AI-generated content for brands, and a real-time analysis prototype for national athletes."
  - AI content, "AI-generated UGC and ads": "AI-generated UGC and ads for brands, including a client reel with 50.1K views for @richdadwilliam."
  - In development, "Kiralytics FIGHT": "A real-time combat sports analysis prototype for national athletes, currently in development."

### Industries [industries]
- Badge "Industries". H1 "Work shaped around your sector". Lede: "ALPHV builds AI for legal, insurance, healthcare, hospitality, financial services and retail teams, among the 16 industry verticals we serve across Malaysia and Singapore."
- "Sectors / **Six sectors, with work to show**: Choose your sector to see what we built, for whom, and with which models and systems."
  | Sector | Client label | One-liner (verbatim) | Tags |
  |---|---|---|---|
  | Legal | Abraham Ooi & Partners, 2025 | "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting, with models hosted inside the firm." | Qwen GenAI-RAG · Agentic RPA · NVIDIA GPU |
  | Insurance | Tasco Insurance, Vietnam | "A multimodal case system assesses asset damage from images and video around the clock, then prepares the liability assessment and claim report. Proof of concept, 2026." | Qwen · Multimodal AI · Agentic AI |
  | Healthcare | Leading healthcare group, 2026 | "An intelligent engine assesses medicolegal and insurance cases and generates the report, so clinicians review a draft instead of writing from scratch." | Qwen · Claude · RPA |
  | Hospitality | Singapore hospitality group, 2026 | "WhatsApp AI agents handle customer conversations 24/7, sync every lead to the CRM and alert sales to hot leads, cutting manual data entry time by 80%." | Qwen · WhatsApp · AI agents |
  | Financial services | Fundaztic and iPajak Group | "A debt recovery management system for Fundaztic, and a centralised pawn brokerage system for iPajak Group’s six branches, taken over midway." | System integration · Consulting · UI/UX |
  | Retail | Leading textile group, 2026 | "An AI content factory automates e-commerce product photoshoots, while Kiralytics SHIFT™ and MATA handle rostering, attendance and footfall for multi-location retailers." | Gemini · Kiralytics SHIFT™ · Kiralytics MATA |
- "ALPHV in numbers / **A Malaysian team, delivering across the region**: Headquartered in Kuala Lumpur with an office in Singapore, serving clients across Malaysia, Singapore and Vietnam."
- "Regulated sectors / **What regulated sectors need from AI**" (see section 4)
- "Clients / **What our clients say**: Fundaztic and iPajak Group on working with ALPHV, from capturing requirements to taking over a project midway."

### Insights [insights]
- Badge "Insights". H1 "Work in production, and the people noticing". Lede: "Case studies from AI systems ALPHV builds and runs in legal, insurance, hospitality, finance and retail, plus keynotes, panels, partnerships and media coverage."
- Hero stats: Industry verticals served 16 · Projects delivered and in delivery 12 · Clients across Malaysia, Singapore and Vietnam
- "Case studies / **AI running inside real businesses**: Each story covers the situation, what ALPHV built and how it runs, from a 36-year-old law firm to a hospitality group in Singapore."
- "Case note / **Train a promotions model on H100 SXM**"
- "Recognition / **On stage and on the map**: Wins at the AI for Insurance Challenge × Tasco and the Selangor AI Hackathon, a place representing Singapore at RAMEN TECH in Fukuoka, plus keynotes, panels and ecosystem maps."
- "Media and partners / **In partnership and on air**: A strategic partnership with FPT AI Factory, a place in the Alibaba Cloud Partner Network, and coverage on Media Selangor, KiniTV and BFM 89.9."
- Short case titles in the JSON-LD ItemList (good for slide titles): "Sovereign AI Case Management for a Law Firm" · "Agentic AI for Insurance Damage Claims (Tasco)" · "WhatsApp AI CRM Cuts Manual Data Entry by 80%" · "Debt Recovery Management System for Fundaztic" · "Centralised Pawn Brokerage System for iPajak Group" · "Fine-Tuning Qwen2.5-14B on H100 via FPT AI Factory" [insights (JSON-LD)]

---

## 12. Best images (framerusercontent.com photos, no logos or icons)

The sizes are the intrinsic width×height from the HTML. Append `?scale-down-to=1024` or similar for smaller versions. I checked each one visually at thumbnail size.

| # | URL | Alt text (verbatim) | Page | Notes |
|---|---|---|---|---|
| 1 | https://framerusercontent.com/images/0fAhVvHRqhJNuHTngwwAJo9FVx0.jpg | "ALPHV team members at a team dinner" | [home] | 2560×1920, the highest resolution. It looks like a team group photo indoors by large windows, not a dinner, so the alt text may be wrong. Good team or cover image. |
| 2 | https://framerusercontent.com/images/2eIDfDSlQKE5KVqcjvoHFxZgc.jpg | "The ALPHV Technologies team at its exhibition booth" | [home] | 952×925. Caption on home: "The ALPHV Technologies team, 100% Malaysian and fully local." Served as PNG data despite the .jpg name. |
| 3 | https://framerusercontent.com/images/q6VmFOiWxgIJqMd8FUG2y2DpFY.jpg | "ALPHV team members together at an evening event" | [about], [careers] | 886×507. About caption: "The ALPHV Technologies team, 100% Malaysian and fully local." |
| 4 | https://framerusercontent.com/images/hs8XWBuhF5BRryWzqH4uc4QuuS4.jpg | "ALPHV team members at a team dinner" | [home] | 1080×810, culture slide |
| 5 | https://framerusercontent.com/images/Dwa7rjJdWjzM0JS5E3VyZ8vRjNM.jpg | "The ALPHV team at a team dinner" | [careers] | 756×418. Caption "An ALPHV team dinner." |
| 6 | https://framerusercontent.com/images/ySq7DrwFhJf6IxjpEBpsg9duU.jpg | "The ALPHV team at the RAMEN TECH Global Summit 2026 in Fukuoka" | [insights], [news-ramen] | 1152×950 |
| 7 | https://framerusercontent.com/images/0SxFZfaALtmSosMYms12gS3Y50.jpg | "ALPHV with the winners on stage at the Selangor AI Hackathon and Forum 2026 closing ceremony" | [insights], [news-selangor] | 635×368, low resolution |
| 8 | https://framerusercontent.com/images/kB7MR3aPYB0iwLxZricU5Az6EI.jpg | "ALPHV’s CEO on stage giving a technical AI keynote at the ASEAN AI Summit 2025" | [about] | 820×392 (insights alt: "ALPHV’s CEO on stage at the ASEAN AI Summit 2025") |
| 9 | https://framerusercontent.com/images/hVsMWH1GgkGMDTWbB4VsHpnqw.jpg | "The agentic AI panel on stage at MDX 2025" | [about], [insights] | 648×486 |
| 10 | https://framerusercontent.com/images/bHyzm1ZpqFnPZ8ZZH0dn7fLYc.jpg | "Presentation on stage at Alibaba AI Day" ([about], [platforms-and-clients]) / "A presentation to a full room at Alibaba AI Day" ([insights]) | [about], [insights] | 1280×960. Also the background of the home "I want to transform my" band. |
| 11 | https://framerusercontent.com/images/ljf9c6XrZoLo7ogFm8tFCtzrFY.webp | "ALPHV’s CEO holding a GIGABYTE AI TOP ATOM, for the BFM 89.9 Tech Talk episode on AI bills" | [insights] | 1178×617, leadership portrait. Alternates in the same corridor setting: https://framerusercontent.com/images/g0c92HzgCM4dokikHhimHwAejxg.webp and https://framerusercontent.com/images/DYP0QgrWkQ2gD02gjosLyFcnEQ.webp |
| 12 | https://framerusercontent.com/images/B7FlfGZpihdRHr4Z7sCXFQHdmkA.jpg | "AI for Insurance Challenge × Tasco winner: ALPHV Technologies" | [news-tasco] | 1081×600. A winner graphic, not a photo. Taller card version: https://framerusercontent.com/images/5cVcsFG2ZnGfyU6j0MaOf63nA.jpg |

Not included:
- https://framerusercontent.com/images/9OKLr9WFhxsZulNUYJu9ZTWUmrc.jpg ("The ALPHV team at its exhibition booth", [how-we-work]) is a near-duplicate of #2.
- https://framerusercontent.com/images/68vqaj3Rwa1C9elor6jbGhGY0aM.jpg (home hero background, alt "Glass office towers seen from below" on [industries]) is generic stock.
- The case-study photos (gavel, doctors, VR headsets, fibre cables and so on) look like stock and do not show ALPHV.
- The Alibaba Cloud Partner Network certificate image (https://framerusercontent.com/images/nho0O6kf8zqTkVj0hhe54UmTNWw.jpg) shows, inside the image, issue date Jul 15, 2025 and expiration date Jul 14, 2026. Check that before using it as current proof.

---

## Gaps, inconsistencies and things to check before the deck goes out
- **Countries**: "2 / Countries" counts office countries (Malaysia HQ and Singapore), but clients span Malaysia, Singapore and Vietnam. The industries lede and two FAQ answers say "16 industry verticals we serve across Malaysia and Singapore" (no Vietnam). Pick one framing.
- **Team label** wording varies: "Solutions Architect, Engineers, and Consultants" [home] vs "Solutions architects, engineers and consultants" [about, industries] vs "15+ engineers and consultants" [news-tasco].
- **Sector naming**: the ledes say "finance" [home, about, insights] but the cards say "financial services" [industries, careers, JSON-LD].
- **Tracy Gan** carries two titles (COO, Fundaztic; Head of Corporate Strategy and Investment, Paramount Group). Confirm which to use.
- **CEO name** never appears in visible copy on these pages.
- **Not captured**: home hero slides 2–4, the other "I want to transform my…" options, and further testimonial slides. These render client-side only.
- **Not stated anywhere on these pages**: formal mission, vision or values; benefits; engagement or commercial models; support SLAs; security or compliance certifications; employee count beyond "15+"; revenue figures.
- **PETRONAS** and **Government of Malaysia ePerolehan** appear only as logos under "Our certifications", with no wording on what kind of registration they are.
- The Tasco challenge's "Microsoft for Startups and Notion" are the **challenge's** technology partners, not ALPHV's. ALPHV's own Microsoft claim is "Cloud platform, with ALPHV as a Microsoft partner." [platforms-and-clients]
