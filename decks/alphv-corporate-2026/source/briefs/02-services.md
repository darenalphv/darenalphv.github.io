# 02 — Services (alphv.com/services and the six service pages)

Source: scraped HTML in `scratchpad/pages/` (services.html plus services__*.html, captured 25 Oct 2026). I parsed the HTML by Framer layer name, so every item below is tied to the section it appears in.

Conventions
- Quoted text is verbatim, with curly apostrophes (’), ™ and British spelling as written.
- **FAQ answers.** Each page shows one FAQ answer open; the rest are collapsed and are not in the visible HTML. Collapsed answers are taken word for word from the same page's `FAQPage` JSON-LD and are marked *(collapsed; from page JSON-LD)*.
- **CountUp stats.** The page renders these as "0%". The real values come from the `aria-label` on the number.
- "not stated" means the field is absent from the page.
- Arrows (→) show link targets as relative site paths.

---

## 0. Services index — /services

- **SEO title:** AI Engineering & Automation Services | ALPHV Technologies
- **Meta description:** "AI engineering, agentic automation, system integration, computer vision, web and mobile apps, and data, RPA and MLOps, delivered by one team in Kuala Lumpur."
- **Badge:** What we do
- **H1:** "Systems built and run for your business"
- **Lede:** "From the first model to the last integration, ALPHV designs, builds and runs AI systems inside your existing operations."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See how we work" (→ /how-we-work)
- **Key facts panel (hero aside):**
  - Services — "Six, from AI engineering to MLOps"
  - Delivery — "Founder-led, with no hand-offs"
  - Models — "Qwen, Claude, OpenAI, Gemini and ILMU"
  - Base — "Kuala Lumpur HQ, with an office in Singapore"
- **Services grid:** badge "Services"; H2 "Six services, one team"; intro "Every service is shipped and improved by the same engineers who scoped it." The site order is AI engineering, Agentic automation, System integration and consulting, Computer vision and smart city, Web and mobile apps, Data, RPA and MLOps. Each card's text appears under its service below.
- **Full stack section:** badge "Full stack AI engineering"; H2 "A brain, an action layer and guardrails"; "Every ALPHV system combines a brain that understands your data, an action layer that does the work, and guardrails that keep it accountable." Link "Explore the three layers" (→ /services/ai-engineering#three-layers).
  - The brain — Foundational intelligence core — "Custom knowledge integration, RAG and beyond, specialised model fine-tuning, and multimodal intelligence across vision and language."
  - The action — Agentic and autonomous solutions — "Agentic process automation, custom tool, MCP and API development for agents, and multi-agent systems."
  - The guardrails — AI governance — "AI safety and alignment, governance guardrails, and locally hosted models where data must stay in-house."
- **How we engage:** H2 "From business case to production, with one team"; "The engineers who scope your AI are the ones who ship and improve it. No hand-offs."
  - 01 Discover — Start from the business case — "Tech advisory, a data audit and AI strategy research find where AI pays back, before any build starts."
  - 02 Design — Design an architecture that fits your stack — "Choose models, hosting and guardrails around your existing systems, your data and your regulator."
  - 03 Implement — Build AI into production — "Integrate retrieval, agents and automation across your core systems, including bank, government and SSM portals."
  - 04 Improve — Improve continuously after go-live — "Monitor adoption, review model performance and iterate, with improvement scoped into the build from day one."
  - Link "See the full approach" (→ /how-we-work)
- **Impact stats:** badge "Impact"; H2 "Measured in revenue, hours and cost"; intro "Outcomes reported and expected across ALPHV engagements."
  - **15%** — Revenue generation — "Up to 15%, expected"
  - **30%** — Productivity improvement — *(the page gives no qualifier or source for this figure)*
  - **10–40%** — Cost saving — "Minimum 10%, estimated up to 40%"
  - **80%** — Less manual entry time — "AI CRM, Singapore hospitality group"
- **Platforms:** H2 "Models, compute and cloud, chosen per project"; "Choose the right model, compute and cloud for your data, cost and residency needs. ALPHV works across all of them."
  - Logo cards and their labels:
    - Qwen, Claude, OpenAI, Gemini — "Models"
    - ILMU — "Models, YTL AI Labs"
    - FPT AI Factory — "H100 compute"
    - NVIDIA — "GPU workstations"
    - Alibaba Cloud, Google Cloud — "Cloud"
    - FootfallCam — "AI hardware"
  - Link "See platforms and clients" (→ /platforms-and-clients)
- **FAQ:** "Frequently asked questions" — "How our services fit your systems, your data and your team."
  - **What does an AI-native systems integrator do?** — "We design, build and integrate AI into the core systems you already run, such as ERP, CRM, case management and third-party portals, then monitor and improve it after go-live." *(open)*
  - **Can you work with our existing systems?** — "Yes. Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals. We have also taken over projects midway and delivered them." *(collapsed; from page JSON-LD)*
  - **Can our data stay in-house?** — "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." *(collapsed; from page JSON-LD)*
  - **Which AI models and clouds do you use?** — "We choose per project across Qwen, Claude, OpenAI, Gemini and ILMU, with compute and cloud from FPT AI Factory, NVIDIA, Alibaba Cloud and Google Cloud." *(collapsed; from page JSON-LD)*
  - **Can ALPHV take over a project already in progress?** — "Yes. We took over iPajak Group’s centralised pawn brokerage system midway and delivered it for six branches across Malaysia." *(collapsed; from page JSON-LD)*
  - **How do we get started?** — "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins." *(collapsed; from page JSON-LD)*
- **CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" (→ /contact) · "Chat on WhatsApp" (→ https://wa.me/60165187740)

---

## 1. AI engineering — /services/ai-engineering

- **Name:** AI engineering
- **SEO title:** AI Engineering Services: RAG & Fine-Tuning | ALPHV
- **Meta description:** "Turn your own data into specialised AI with retrieval-augmented generation, fine-tuning on H100 and multimodal models, governed for regulated work."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › AI engineering)
- **H1:** "Turn your own data into specialised AI"
- **Lede:** "Knowledge integration, fine-tuning and multimodal models, built on your data, governed for regulated work and embedded in the systems you already run."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "Explore the three layers" (→ #three-layers)
- **Key facts panel (hero aside):** not stated. The hero has an image and no facts panel.
- **Card on the services index:** "Turn your own data into specialised AI with knowledge integration, fine-tuning and multimodal models, governed for regulated work."
  - Bullets: "Retrieval-augmented generation and beyond" · "Specialised fine-tuning, including Qwen2.5-14B on H100 SXM" · "Vision and language models working together"
  - Link: "Explore AI engineering"

**What's included:** badge "What we deliver"; H2 "Specialised AI, built around your data"; "We connect models to your knowledge, tune them for your tasks and put guardrails around them before they reach production."
1. **Knowledge integration and RAG** — "Connect models to your documents, records and databases with retrieval-augmented generation, so answers draw on your own knowledge."
2. **Specialised fine-tuning** — "Tune open models for one task on your data. For a retail promotions model, we fine-tuned Qwen2.5-14B-Instruct on H100 SXM."
3. **Multimodal intelligence** — "Vision and language models working together, reading images, video and PDFs in one case file, as in our claims proof of concept for Tasco Insurance."
4. **Document AI** — "Extract data from documents and generate new ones from templates, like the bank loan document extraction we built for a law firm."
5. **Case assessment and reports** — "An engine assesses medicolegal and insurance cases and generates the report, so clinicians at a leading healthcare group review a draft instead of writing from scratch."
6. **Built into your core systems** — "The model works where your team works: ERP, CRM, case management and third-party portals, with monitoring and improvement after go-live."

**Three layers:** badge "Full stack AI engineering"; H2 "Three layers in every system we build"; "Every ALPHV system combines a brain that understands your data, an action layer that does the work, and guardrails that keep it accountable."
- **The brain — Foundational intelligence core:** "Models and knowledge that understand your data, from retrieval over your documents to models tuned for one task."
  - Custom knowledge integration, RAG and beyond · Specialised model fine-tuning · Multimodal intelligence across vision and language
- **The action — Agentic and autonomous solutions:** "Agents that act on what the models understand, through the tools, MCP servers and APIs your systems need."
  - Agentic process automation · Custom tool, MCP and API development for agents · Multi-agent systems
- **The guardrails — AI governance:** "Controls that keep every model accountable to your policies and your regulator, including where it runs."
  - AI safety and alignment · Governance guardrails · Locally hosted models where data must stay in-house

**Hosting and platforms:** H2 "Keep sensitive data inside your organisation"; "Where data must stay in-house, we deploy locally hosted models, for example on your own NVIDIA GPU workstation. Otherwise we choose per project for your data, cost and residency needs."
- "A law firm’s models run on a locally hosted NVIDIA GPU workstation, so client data stays inside the firm"
- "Fine-tuning on H100 SXM compute through the FPT AI Factory partnership"
- "Cloud deployments on Alibaba Cloud and Google Cloud"
- Links: "Read the law firm case" (→ /insights/sovereign-ai-case-management-law-firm) · "See platforms and clients" (→ /platforms-and-clients)
- The logo wall is the same as the services index, without FootfallCam.

**Process:** badge "How we deliver"; H2 "From business case to a model in production"; "The engineers who scope your AI are the ones who train, ship and improve it. No hand-offs." Link "See how we work".
1. **Discover — Start from the business case:** "Tech advisory, a data audit and AI strategy research show where a specialised model pays back, and whether your data can support it, before any build starts."
2. **Design — Choose models, hosting and guardrails:** "Retrieval, fine-tuning or both, in the cloud or locally hosted, designed around your existing systems, your data and your regulator."
3. **Implement — Build AI into production:** "Integrate retrieval, fine-tuned models and agents across your core systems, including bank, government and SSM portals."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review model performance and iterate, with improvement scoped into the build from day one."

**Technologies, models, platforms and tools named:**
- Methods and models: retrieval-augmented generation (RAG); Qwen2.5-14B-Instruct; LoRA; Flash Attention; H100 SXM
- Compute and hosting: FPT AI Factory; NVIDIA GPU workstation (locally hosted); Alibaba Cloud; Google Cloud
- Agent tooling: MCP servers; APIs
- Model logos: Qwen, Claude, OpenAI, Gemini, ILMU ("Models, YTL AI Labs")
- Systems integrated: ERP, CRM, case management, third-party portals; bank, government and SSM portals
- Case-note tags: "Qwen2.5-14B" · "LoRA" · "Flash Attention" · "H100 SXM"

**Stats:** not stated (this page has no number stats).

**Proof:**
- **Case note, FPT AI Factory: "Train a promotions model on H100 SXM".** "ALPHV fine-tuned Qwen2.5-14B-Instruct using LoRA with Flash Attention to build a model that recommends promotions from historical sales and promotions data. Access to FPT AI Factory hardware shortens training time and lowers the cost of AI R&D." Link "Read the case note" (→ /insights/fine-tuning-qwen-on-h100-fpt-ai-factory). FPT AI Factory and ALPHV logos are shown side by side.
- **Tasco Insurance:** "our claims proof of concept for Tasco Insurance" (Multimodal intelligence card)
- **A law firm (unnamed on this page):** "the bank loan document extraction we built for a law firm"; "A law firm’s models run on a locally hosted NVIDIA GPU workstation, so client data stays inside the firm"
- **A leading healthcare group:** "clinicians at a leading healthcare group review a draft instead of writing from scratch"
- No numeric outcomes are claimed on this page.

**Industries:**
- On-page links to industry pages: not stated.
- Sectors named in the copy: "regulated work", retail (promotions model), insurance (Tasco), legal (law firm), healthcare (medicolegal).
- Industry pages that link to this service: Healthcare, Insurance, Legal, Retail.

**Related products:**
- None named on this page.
- Product pages that link to this service: ALPHV Avatar™, ALPHV HelloGen™, Kiralytics EMOSI.

**Related services (cards):** Agentic automation · Data, RPA and MLOps · Computer vision and smart city

**FAQs:** "Questions about AI engineering" — "How we build, host and govern specialised AI for your business."
- **Do you fine-tune models or use retrieval?** — "Both. We connect models to your knowledge with retrieval-augmented generation, and fine-tune specialised models where a task needs it, for example Qwen2.5-14B-Instruct with LoRA on H100 SXM." *(open)*
- **Can our data stay in-house?** — "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." *(collapsed; from page JSON-LD)*
- **Which AI models and clouds do you use?** — "We choose per project across Qwen, Claude, OpenAI, Gemini and ILMU, with compute and cloud from FPT AI Factory, NVIDIA, Alibaba Cloud and Google Cloud." *(collapsed; from page JSON-LD)*
- **How do we get started?** — "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/xZA70n2uPEBQ4rt79wXmTX5UQk.jpg — "An engineer reviewing model output on several monitors" (hero; also the services index card)
2. https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg — dashboard screenshot. Its alt is empty on this page (Step 04 image); other pages give it as "ALPHV AI CRM dashboard with lead and revenue charts".
3. FPT AI Factory partner logo: https://framerusercontent.com/images/9jO9W8sBRjKLnDganm2BgdnjPU.png — "FPT AI Factory" (a logo, not a photo)

---

## 2. Agentic automation — /services/agentic-automation

- **Name:** Agentic automation
- **SEO title:** Agentic AI Automation & AI Agents | ALPHV Technologies
- **Meta description:** "AI agents that act across your systems with the tools, MCP servers and APIs they need: document and claims automation, WhatsApp sales agents and CRM sync."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › Agentic automation)
- **H1:** "Put AI agents to work across your systems"
- **Lede:** "Agents that read documents, images and messages, decide within guardrails and act through tools, MCP servers and APIs, then sync results back to your CRM."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See how agents act" (→ #how-agents-act)
- **Key facts panel (hero aside):** not stated
- **Card on the services index:** "Put AI agents to work across your systems, with the tools, MCP servers and APIs they need to act safely."
  - Bullets: "Agentic process automation for documents and claims" · "Custom tool, MCP and API development for agents" · "WhatsApp sales agents that sync leads to your CRM"
  - Link: "Explore agentic automation"

**What's included:** badge "What we deliver"; H2 "AI agents with the tools to act safely"; "We design the agent, build the tools it acts through and set the guardrails it works within, then connect it to your systems."
1. **Agentic process automation** — "Agents take on multi-step work such as document handling and claims, following your process from intake to report."
2. **Custom tools, MCP servers and APIs** — "We build the tools, MCP servers and APIs that let agents read from and write to your systems, scoped to what each task needs."
3. **WhatsApp sales agents** — "Agents answer customer conversations on WhatsApp 24/7 in natural language, sync every lead to your CRM and alert sales to hot leads."
4. **Claims and case handling** — "Agents assess damage from images and video, identify duplicate claims and prepare the liability assessment and claim report."
5. **Multi-agent systems** — "Several specialised agents share one task, such as reading, checking and reporting, and hand work between them under the same guardrails."
6. **Guardrails and access control** — "Conversation flows with guardrails keep agents on task, and dashboard features follow each user’s access level."

**How agents act:** badge "How agents act"; H2 "Read, decide, act, then sync the result"; "An agent works inside the systems you already run. It reads what arrives, decides within guardrails, acts through tools and passes the result back."
- Step 01 **Read what arrives** — "Agents take in PDFs, photos, video and WhatsApp messages, and keep them together in one case file."
- Step 02 **Decide within guardrails** — "Rules and conversation flows keep each decision in scope, such as assessing liability against Vietnam’s Road Act and compendium."
- Step 03 **Act through tools and APIs** — "Agents update records, generate contracts, invoices and reports, and work through third-party portals, email and WhatsApp."
- Step 04 **Sync results back** — "Every lead lands in your CRM, and the sales team is alerted to hot leads in real time."

**Process:** badge "How we deliver"; H2 "From business case to agents in production"; "The engineers who map your workflows are the ones who build, connect and improve the agents. No hand-offs."
1. **Discover — Start from the business case:** "Tech advisory, a data audit and AI strategy research to find which documents, messages and steps an agent should take on first, and where it pays back."
2. **Design — Define tools, access and guardrails:** "Choose models and hosting, and define the tools, MCP servers and APIs each agent may use in your existing systems."
3. **Implement — Connect agents to your systems:** "Build the agents and integrate them with your CRM, email, WhatsApp and third-party portals, including bank, government and SSM portals."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review what agents do and how models perform, and iterate, with improvement scoped into the build from day one."

**Technologies, models, platforms and tools named:**
- Agent tooling: tools, MCP servers, APIs
- Channels and systems: WhatsApp; CRM; email; third-party portals; bank, government and SSM portals (CTOS in the FAQ answer)
- Models: Qwen (case tags); "Multimodal AI"; "Agentic AI"
- Inputs: PDFs, photos, video
- Domain rules: "Vietnam’s Road Act and compendium"

**Stats:**
- **80%** — in the headline "WhatsApp agents cut manual data entry by 80%" (case card)
- The services index shows the same figure: 80%, labelled "Less manual entry time", with the sub-label "AI CRM, Singapore hospitality group".

**Proof:** section "Agents at work"; H2 "Where our agents already work"; "A WhatsApp AI CRM for a Singapore hospitality group, and a claims proof of concept for Tasco Insurance in Vietnam."
- **AI CRM, Singapore, 2026: "WhatsApp agents cut manual data entry by 80%".** "Agents handle customer conversations 24/7, sync every lead to the CRM and alert sales to hot leads, with one-click contracts, invoices and reports." Tags: Qwen · WhatsApp · AI agents. Link "Read the case study" (→ /insights/whatsapp-ai-crm-singapore-hospitality).
- **Insuretech, Vietnam, 2026: "Agentic AI for round-the-clock damage claims".** "A proof of concept for Tasco Insurance: agents assess asset damage from images and video, flag duplicate claims and prepare the liability assessment and claim report." Tags: Qwen · Multimodal AI · Agentic AI. Link "Read the case study" (→ /insights/agentic-ai-insurance-claims-tasco).
  - Note: "Insuretech" is the site's spelling.

**Industries:**
- On-page links to industry pages: not stated.
- Sectors named in the copy: Singapore hospitality group; Insuretech, Vietnam.
- Industry pages that link to this service: Hospitality, Insurance, Legal.

**Related products:**
- None named on this page.
- Product pages that link to this service: ALPHV Avatar™.

**Related services (cards):** AI engineering · System integration and consulting · Data, RPA and MLOps

**FAQs:** "Questions about agentic automation" — "What agents do, how they stay within limits and how they connect to your systems."
- **What can AI agents do in our systems?** — "Agents read documents, images and messages, decide within guardrails and act through tools, MCP servers and APIs, for example handling WhatsApp conversations and syncing each lead into your CRM." *(open)*
- **How do agents stay within limits?** — "Agents act through the tools, MCP servers and APIs built for them, inside conversation flows with guardrails, and dashboard features follow each user’s access level." *(collapsed; from page JSON-LD)*
- **Can you work with our existing systems?** — "Yes. Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals. We have also taken over projects midway and delivered them." *(collapsed; from page JSON-LD)*
- **Can our data stay in-house?** — "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg — "ALPHV AI CRM dashboard with lead and revenue charts" (screenshot, AI CRM case card)
2. https://framerusercontent.com/images/mFzU6WzKoAGYOmb9TCHqNNGVArE.jpg — "Tasco Insurance web interface designed by ALPHV, proof-of-concept stage" (screenshot, Tasco case card)
3. https://framerusercontent.com/images/UDOwnMP13EH2gF9xmunF433xWLc.jpg — "Colleagues meeting in a bright office" (hero; also the services index card)

---

## 3. System integration and consulting — /services/system-integration-and-consulting

- **Name:** System integration and consulting
- **SEO title:** System Integration & AI Consulting | ALPHV Technologies
- **Meta description:** "Replace and connect legacy systems, with consulting from AI strategy to go-live, including projects taken over midway, for lending, pawn broking and law firms."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › System integration and consulting)
- **H1:** "Replace and connect legacy systems, from strategy to go-live"
- **Lede:** "Consulting from AI strategy to go-live. We replace legacy systems, connect third-party portals and take over projects already in progress."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See how we work" (→ /how-we-work)
- **Key facts panel (hero aside):** not stated
- **Card on the services index:** "Replace and connect legacy systems, with consulting from AI strategy to go-live, including projects taken over midway."
  - Bullets: "Debt recovery management for Fundaztic" · "Multi-branch pawn brokerage for iPajak Group" · "Tech advisory, data audit and AI strategy for EasyRenz"
  - Link: "Explore system integration"

**What's included:** badge "What we deliver"; H2 "Where we start depends on where you are"; "Some teams need a strategy first. Others need a legacy system replaced, third-party portals connected or a project finished by a new team." Each card has a badge.
1. **Strategy before the build** [badge: EasyRenz] — "Tech advisory, a data audit and AI strategy research to find where AI pays back, before any build starts."
   - Tech advisory and a data audit · AI strategy research · A business case before any build
2. **Replace legacy systems** [badge: Abraham Ooi & Partners, 2025] — "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting."
   - Matters, tasks, teams and a client portal · Accounting and e-invoicing · Models on a locally hosted NVIDIA GPU workstation
3. **Connect third-party portals** [badge: 90+ portal automations] — "For the same law firm, we built 90+ third-party portal automations, including banks, government, SSM and CTOS."
   - Bank, government, SSM and CTOS portals · Workflow, email and WhatsApp automation · Bank loan document AI extraction
4. **Take over projects midway** [badge: iPajak Group] — "We took over iPajak Group’s centralised pawn brokerage system midway and delivered it for six branches across Malaysia."
   - Centralised pawn brokerage system · Six branches across Malaysia · Delivered after a mid-project handover

**Lending systems section:** badge "Financial services"; H2 "Core lending and pawn broking systems"; "ALPHV delivers core lending and pawn broking systems for Fundaztic, a P2P financing platform, and iPajak Group, a multi-branch pawn broker."
- **Fundaztic** — "P2P financing platform"
  - Stat **MYR 379M** — "Funded through the platform"
  - "ALPHV built a debt recovery management (DRM) system and a UI/UX overhaul design for Fundaztic’s lending platform."
  - Tags: System integration · UI/UX
  - Link "Read the Fundaztic case study" (→ /insights/debt-recovery-management-fundaztic)
- **iPajak Group** — "Multi-branch pawn broker, Malaysia"
  - Stat **MYR 500M** — "Disbursed by iPajak Group"
  - Stat **6** — "Branches on one system"
  - "A centralised pawn brokerage system for six branches across Malaysia. ALPHV took the project over midway and delivered it."
  - Tags: System integration · Consulting
  - Link "Read the iPajak case study" (→ /insights/pawn-brokerage-system-ipajak)

**Client voices:** H2 "What our clients say"; "Fundaztic and iPajak Group on working with ALPHV, from capturing requirements to taking over a project midway."
- Quote, as rendered: "Daren and the ALPHV team have been exceptional to work with and have done a commendable job taking over the project midway, especially in providing their technical expertise to meet our specific needs." — **Chong Voon Ying, CEO, iPajak Group**
- Note: the intro mentions Fundaztic, but this page's HTML contains only the iPajak slide. A Fundaztic quote does appear elsewhere on the site, on home, industries, industries/financial-services, platforms-and-clients and the Fundaztic case study: "Our objectives and requirements are well captured and built into solving our problems, incorporating advanced technologies like AI. ALPHV has good people and is easy to work with compared to other tech vendors." — Tracy Gan, COO, Fundaztic. Cite it to one of those pages, not to this one.

**Process:** badge "How we deliver"; H2 "One team, from strategy to go-live"; "The engineers who scope your systems are the ones who ship and improve them. No hand-offs."
1. **Discover — Start from the business case:** "Tech advisory, a data audit and AI strategy research map your current systems and find where AI pays back, before any build starts."
2. **Design — Design around what you already run:** "Decide what to replace, what to connect and where AI fits, around your existing systems, your data and your regulator."
3. **Implement — Integrate and go live:** "Build the platform and integrate it with bank, government and SSM portals, CTOS and the internal systems you keep."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review performance and iterate, with improvement scoped into the build from day one."

**Technologies, platforms and tools named:**
- Portals: bank, government, SSM and CTOS portals; "90+ third-party portal automations"
- Platform components: case management, back office and accounting; e-invoicing; client portal
- Automation and AI: workflow, email and WhatsApp automation; bank loan document AI extraction
- Hosting: NVIDIA GPU workstation (locally hosted)
- Systems built: debt recovery management (DRM) system; centralised pawn brokerage system

**Stats:**
- **MYR 379M** — Funded through the platform (Fundaztic)
- **MYR 500M** — Disbursed by iPajak Group
- **6** — Branches on one system (iPajak Group)
- "90+ portal automations" (card badge)
- "36-year-old law firm" (card copy)

**Proof:** EasyRenz (strategy); Abraham Ooi & Partners, 2025 (legacy replacement; the copy calls it "A 36-year-old law firm"); 90+ portal automations for the same law firm; iPajak Group (taken over midway, six branches); Fundaztic (DRM system and UI/UX overhaul). All are quoted above.
- This is the only service page that names the law firm, and it does so only in the card badge. AI engineering and Data, RPA and MLOps say "a law firm".

**Industries:**
- Section badge "Financial services" (not linked to the industry page).
- The meta description names "lending, pawn broking and law firms".
- Industry pages that link to this service: Financial services, Legal.

**Related products:** not stated (none named; no product page links here).

**Related services (cards):** AI engineering · Agentic automation · Web and mobile apps

**FAQs:** "Questions about system integration" — "Taking over projects, replacing legacy systems and connecting third-party portals."
- **Can ALPHV take over a project already in progress?** — "Yes. We took over iPajak Group’s centralised pawn brokerage system midway and delivered it for six branches across Malaysia." *(open)*
- **Do you replace legacy systems?** — "Yes. A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting." *(collapsed; from page JSON-LD)*
- **Can you work with our existing systems?** — "Yes. Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals. We have also taken over projects midway and delivered them." *(collapsed; from page JSON-LD)*
- **How do we get started?** — "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/S6fF0FJfMx5n9NK8ibcMKF2zuEA.jpg — "The ALPHV team at an exhibition booth" (client voices slide)
2. https://framerusercontent.com/images/RGnnpQg6l2j5HkfltjFEXhrqu4.jpg — "Two colleagues reviewing figures on a tablet" (hero; also the services index card)
3. Logos, not photos:
   - https://framerusercontent.com/images/x0N9BeUTbzcfI9ARRzVPm1zSw.png — "Fundaztic"
   - https://framerusercontent.com/images/0suQ2BoN5SyzixJ4YgbycsbQ.png — "iPajak Group"

---

## 4. Computer vision and smart city — /services/computer-vision-and-smart-city

- **Name:** Computer vision and smart city
- **SEO title:** Computer Vision & Smart City Video Analytics | ALPHV
- **Meta description:** "Video analytics that count, classify and track people and vehicles on retail floors, roads and public spaces, with Kiralytics MATA and TRAFFIK from ALPHV."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › Computer vision and smart city)
- **H1:** "Count, classify and track with video analytics"
- **Lede:** "Computer vision for retail floors, roads and public spaces: people counting and occupancy with Kiralytics MATA, traffic counting and speed detection with Kiralytics TRAFFIK."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See Kiralytics MATA and TRAFFIK" (→ /products/kiralytics-mata-and-traffik)
- **Key facts panel (hero aside):** not stated in the hero. A "Key facts" list does appear lower down, in the Products and partners section (see below).
- **Card on the services index:** "Count, classify and track with video analytics for retail floors, roads and public spaces."
  - Bullets: "People counting and occupancy with Kiralytics MATA" · "Traffic counting and speed detection with Kiralytics TRAFFIK" · "Smart city video analytics"
  - Link: "Explore computer vision"

**What's included:** badge "What we deliver"; H2 "Turn camera feeds into counts, flows and occupancy"; "Computer vision on live CCTV turns what your cameras see into figures your team can plan around, from store traffic to road use."
1. **People counting** — "Count foot traffic into stores and commercial spaces on live CCTV with Kiralytics MATA."
2. **Customer flow and occupancy** — "See how visitors move through a space and how full it is through the day, as input for layout and staffing."
3. **Vehicle classification** — "Classify vehicles on the road with Kiralytics TRAFFIK, so traffic counts break down by vehicle type."
4. **Speed detection and flow analysis** — "Detect vehicle speeds and analyse traffic flow with Kiralytics TRAFFIK, as input for road planning."
5. **Smart city video analytics** — "The same counting, classification and tracking, applied to public spaces for smart city planning."
6. **AI hardware** — "Where a site needs dedicated devices, we work with AI hardware from FootfallCam alongside existing CCTV."

**Where it runs:** H2 "Retail floors, roads and public spaces"; "The same count, classify and track capability, applied where your operation happens."
- [Kiralytics MATA] **Retail floors** — "Foot traffic, customer flow and occupancy for stores and commercial spaces, from live CCTV." Link "See retail work" (→ /industries/retail).
- [Kiralytics TRAFFIK] **Roads** — "Vehicle classification, speed detection and flow analysis that feed road planning." Link "See Kiralytics TRAFFIK" (→ /products/kiralytics-mata-and-traffik).
- [Smart city] **Public spaces** — "Smart city video analytics that count and track movement across shared public areas." Link "Discuss a smart city project" (→ /contact).

**Products and partners:** H2 "Productised as Kiralytics MATA and TRAFFIK"; "Our people counting and traffic analytics also run as products, on live CCTV or with AI hardware from FootfallCam." Link "Explore Kiralytics MATA and TRAFFIK".
- Key facts:
  - Kiralytics MATA — "People counting on live CCTV"
  - Kiralytics TRAFFIK — "Traffic analytics for road planning"
  - FootfallCam — "AI hardware partner platform"
  - In development — "Kiralytics FIGHT, a real-time combat sports analysis prototype for national athletes"

**Process:** badge "How we deliver"; H2 "From business case to live video analytics"; "The engineers who scope your cameras and models are the ones who deploy and improve them. No hand-offs."
1. **Discover — Start from the business case:** "Tech advisory, a data audit and AI strategy research settle what to count, where and why, and where video analytics pays back."
2. **Design — Choose cameras, hardware and hosting:** "Design around your existing CCTV, add AI hardware from FootfallCam where a site needs it, and choose hosting that fits your data and your regulator."
3. **Implement — Put analytics on live video:** "Deploy counting, classification and tracking on live feeds, and connect the results to the systems and reports your team uses."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review model performance and iterate, with improvement scoped into the build from day one."

**Technologies, platforms and tools named:**
- Products: Kiralytics MATA; Kiralytics TRAFFIK; Kiralytics FIGHT (in development)
- Hardware and partners: FootfallCam AI hardware ("AI hardware partner platform"); live CCTV; NVIDIA GPU workstation (in the FAQ answer)

**Stats:** not stated (no number stats on this page).

**Proof:**
- No named client case studies or outcome numbers are on this page.
- Proof here takes the form of products (MATA, TRAFFIK), the FootfallCam partnership and the FIGHT prototype "for national athletes".

**Industries:**
- On-page link: "See retail work" (→ /industries/retail).
- Settings named: retail floors, commercial spaces, roads, public spaces / smart city.
- Industry pages that link to this service: Retail.

**Related products:**
- Kiralytics MATA and TRAFFIK. Its product page links back here twice.
- Kiralytics FIGHT is listed as "In development".

**Related services (cards):** AI engineering · Data, RPA and MLOps · Agentic automation

**FAQs:** "Questions about computer vision" — "What our video analytics measures, where it runs and how the data is handled."
- **Does Kiralytics MATA work on CCTV?** — "Yes. Kiralytics MATA counts foot traffic, customer flow and occupancy on live CCTV. Where a site needs dedicated AI hardware, we work with FootfallCam." *(open)*
- **What does Kiralytics TRAFFIK measure?** — "Vehicle classification, speed detection and flow analysis, as input for road planning." *(collapsed; from page JSON-LD)*
- **Where can video analytics be used?** — "On retail floors and in commercial spaces, on roads, and in public spaces through smart city video analytics." *(collapsed; from page JSON-LD)*
- **Can our data stay in-house?** — "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/ZCAVkFkuAfQ2IyjrVR2ITIeSpts.jpg — "Kiralytics MATA counting people on live CCTV at a shop counter" (Retail floors card)
2. https://framerusercontent.com/images/GeOkUeemeA6fC5KcVV1yKOj5po.png — "Vehicles on a road tracked with detection boxes" (hero). The services index card gives it as "Computer vision detection boxes tracking vehicles on a road". The largest srcset width is about 486px, so it is low resolution.
3. https://framerusercontent.com/images/xe1xTcBQXA4zGxYQMS1310y2KM.jpg — "Multi-lane city traffic seen from above" (Roads card)
   - Alternative: https://framerusercontent.com/images/14WCGIvV28w8EFHPhzz1jbFpo4.jpg — "People walking along a busy pedestrian street" (Public spaces card)

---

## 5. Web and mobile apps — /services/web-and-mobile-apps

- **Name:** Web and mobile apps
- **SEO title:** Web & Mobile App Development | ALPHV Technologies
- **Meta description:** "Product strategy, UI/UX and engineering for platforms used by thousands, including LocumLah, with 3,000 doctors and 600 clinics, and Politikus by Caprice."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › Web and mobile apps)
- **H1:** "Web and mobile platforms used by thousands of people"
- **Lede:** "From product strategy and UI/UX to engineering and delivery, we design and build platforms like LocumLah, with 3,000 doctors and 600 clinics onboarded."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See how we work" (→ /how-we-work)
- **Key facts panel (hero aside):** not stated
- **Card on the services index:** "Design and engineer platforms used by thousands of people, from product strategy and UI/UX to delivery."
  - Bullets: "LocumLah: 3,000 doctors and 600 clinics onboarded" · "Politikus by Caprice: Malaysia’s first public predictions game, with 32,000 swipes" · "UI/UX overhaul for Fundaztic’s lending platform"
  - Link: "Explore web and mobile apps"

**What's included:** badge "What we deliver"; H2 "From product strategy to a platform people use"; "One team shapes the product, designs the interface and engineers the platform, so what launches matches what was planned."
1. **Product strategy** — "Define who the platform serves, what it must do first and how it fits your business, before design starts."
2. **UI/UX design** — "Interface and experience design, from new products to overhauls of live platforms such as Fundaztic’s lending platform."
3. **Web platforms** — "Portals and platforms engineered for thousands of users, like LocumLah for doctors and clinics."
4. **Mobile apps** — "Mobile experiences such as the Kiralytics SHIFT™ app, where staff clock in with GPS-verified attendance."
5. **Consumer engagement** — "Interactive products like Politikus by Caprice, Malaysia’s first public predictions game."
6. **AI inside the product** — "Add AI where it helps users, from agents and retrieval to digital avatars, built by the team that builds the platform."

**Selected work:** H2 "Platforms built for thousands of users"; "A locum platform for doctors and clinics, a public predictions game and a lending platform redesign."
- [Healthcare] **LocumLah** — "A Malaysian locum platform built by ALPHV, with 3,000 doctors and 600 clinics onboarded." Tags: Web platform · Healthcare. Link "See healthcare work" (→ /industries/healthcare).
- [Caprice] **Politikus by Caprice** — "Malaysia’s first public predictions game, with 32,000 swipes." Tags: Consumer app · Predictions game. Link "Talk to us about your product" (→ /contact).
- [Financial services] **Fundaztic** — "A UI/UX overhaul design for Fundaztic’s lending platform, alongside the debt recovery management system ALPHV built." Tags: UI/UX · Lending platform. Link "See financial services work" (→ /industries/financial-services).

**In numbers:** H2 "Built for thousands of people"; "Figures from platforms ALPHV designed and engineered, from a locum platform to a public predictions game."

**Process:** badge "How we deliver"; H2 "From product strategy to a platform in production"; "The team that shapes your product is the one that designs, builds and improves it. No hand-offs."
1. **Discover — Start with product strategy:** "Tech advisory, a data audit and product strategy settle who the platform serves, what it must do first and where it pays back."
2. **Design — Design the UI/UX:** "Design the interface and experience around your users and your existing systems, from first flows to final screens."
3. **Implement — Engineer and deliver:** "Build the web and mobile platform, integrate it with your core systems and take it through to delivery."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review what users do and iterate, with improvement scoped into the build from day one."

**Technologies, platforms and tools named:**
- Disciplines: UI/UX; web platforms and portals; mobile apps
- Product features: Kiralytics SHIFT™ app with "GPS-verified attendance"
- AI features: "agents and retrieval", "digital avatars"
- No frameworks or languages are named (not stated).

**Stats:**
- **3,000** — Doctors onboarded — LocumLah
- **600** — Clinics onboarded — LocumLah
- **32,000** — Swipes — Politikus by Caprice
- **MYR 379 million** — from the FAQ: Fundaztic "has funded MYR 379 million"

**Proof:**
- LocumLah: "A Malaysian locum platform built by ALPHV, with 3,000 doctors and 600 clinics onboarded."
- Politikus by Caprice: "Malaysia’s first public predictions game, with 32,000 swipes."
- Fundaztic: "UI/UX overhaul design for Fundaztic’s lending platform".
- Kiralytics SHIFT™ app.
- The hero image is the Tasco Insurance web interface at proof-of-concept stage.

**Industries:**
- On-page links: Healthcare (→ /industries/healthcare) and Financial services (→ /industries/financial-services).
- Card badges: Healthcare · Caprice · Financial services.
- Industry pages that link to this service: Financial services, Healthcare, Hospitality, Insurance.

**Related products:**
- Kiralytics SHIFT™ is named in the Mobile apps card. The SHIFT product page does not link back.
- "Digital avatars" is mentioned generically; the copy does not name ALPHV Avatar™.

**Related services (cards):** System integration and consulting · AI engineering · Agentic automation

**FAQs:** "Questions about web and mobile apps" — "Design, redesigns and adding AI to the platforms your users rely on."
- **Do you design as well as build?** — "Yes. We cover product strategy, UI/UX and engineering through to delivery, with one team from first flows to launch." *(open)*
- **Can you redesign a platform that is already live?** — "Yes. ALPHV designed a UI/UX overhaul for the lending platform of Fundaztic, a P2P financing platform that has funded MYR 379 million." *(collapsed; from page JSON-LD)*
- **Can you add AI to our app?** — "Yes. We design, build and integrate AI into the systems you already run, from retrieval and agents to digital avatars, then monitor and improve it after go-live." *(collapsed; from page JSON-LD)*
- **How do we get started?** — "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/2Z2b0JGmnyiK9OMms5UmV5bDtU.png — "Politikus landing page with the predictions game on two phones". The services index card gives it as "The Politikus predictions game landing page, designed and engineered by ALPHV".
2. https://framerusercontent.com/images/mFzU6WzKoAGYOmb9TCHqNNGVArE.jpg — "Tasco Insurance web interface designed by ALPHV, proof-of-concept stage" (hero screenshot; the largest srcset width is about 1216px)
3. LocumLah logo, not a photo: https://framerusercontent.com/images/jStdhV6p7VSr0dGLVJJM77Lccww.png — "LocumLah"

---

## 6. Data, RPA and MLOps — /services/data-rpa-and-mlops

- **Name:** Data, RPA and MLOps
- **SEO title:** Data, RPA & MLOps Services | ALPHV Technologies
- **Meta description:** "Keep AI accurate in production with data science, analytics dashboards, robotic process automation, DevOps and MLOps, including RPA for genetic test reports."
- **Badge/eyebrow:** "Service" (breadcrumb: What we do › Data, RPA and MLOps)
- **H1:** "Keep models accurate in production"
- **Lede:** "Data science, analytics, RPA, DevOps and MLOps that keep models accurate after go-live and take repetitive reporting work off your team."
- **Hero CTAs:** "Talk to an AI engineer" (→ /contact) · "See healthcare work" (→ /industries/healthcare)
- **Key facts panel (hero aside):** not stated
- **Card on the services index:** "Keep models accurate in production with data science, analytics, RPA, DevOps and MLOps."
  - Bullets: "RPA for PowerDNA’s genetic test report generation" · "Data analytics and dashboards" · "DevOps and MLOps pipelines"
  - Link: "Explore data, RPA and MLOps"

**What's included:** badge "What we deliver"; H2 "Data, automation and pipelines around your models"; "We build the data work, automation and release pipelines that keep AI useful after launch, from dashboards to retraining."
1. **Data science** — "Explore and model your data to find patterns worth acting on, such as promotions recommended from historical sales and promotions data."
2. **Analytics and dashboards** — "Dashboards that turn operational data into KPIs, such as cross-branch KPIs and unified reporting for HQ."
3. **Robotic process automation** — "Software robots for repetitive, rules-based steps, such as generating PowerDNA’s genetic test reports."
4. **Agentic RPA** — "RPA combined with AI for document work that needs judgement, as in a law firm’s document handling."
5. **DevOps pipelines** — "Automated build, test and release pipelines, so changes reach production safely and repeatably."
6. **MLOps pipelines** — "Pipelines that retrain, evaluate and redeploy models, so accuracy holds up as your data changes."

**Model lifecycle:** H2 "What keeps a model accurate after go-live"; "Models learn from yesterday’s data. Monitoring, retraining and release pipelines keep them useful as the data changes." Image caption: "ALPHV AI CRM dashboard, with features by user access level."
- 01 **Data pipelines** — "Collect, clean and prepare the data your models and reports depend on."
- 02 **Release through DevOps** — "Ship models and applications through tested, repeatable release pipelines."
- 03 **Monitor in production** — "Dashboards track adoption and model performance, so drift shows up early."
- 04 **Retrain with MLOps** — "Retrain, evaluate and redeploy models when performance slips, with improvement scoped into the build from day one."

**Healthcare and genomics:** H2 "Reports generated with RPA and GenAI"; "Report generation for genomics and medicolegal work, built for PowerDNA and a leading healthcare group." Link "See healthcare work".

**Process:** badge "How we deliver"; H2 "From business case to models that stay accurate"; "The engineers who build your pipelines are the ones who monitor and improve them. No hand-offs."
1. **Discover — Start from the business case:** "Tech advisory, a data audit and AI strategy research show which data you hold, what it can support and where automation pays back."
2. **Design — Design data, automation and pipelines:** "Choose models, hosting and guardrails, and design the data flows, RPA steps and release pipelines around your existing systems."
3. **Implement — Automate and deploy:** "Build dashboards, RPA and MLOps pipelines into production, integrated with your core systems and third-party portals."
4. **Improve — Improve continuously after go-live:** "Monitor adoption, review model performance and iterate, with improvement scoped into the build from day one."

**Technologies, platforms and tools named:**
- Disciplines: data science; analytics dashboards and KPIs; RPA ("Software robots"); agentic RPA; GenAI; DevOps (build, test and release pipelines); MLOps (retrain, evaluate, redeploy)
- Products: Kiralytics SHIFT™ (in the FAQ); ALPHV AI CRM dashboard (image caption)
- No specific tools or vendors are named (not stated).

**Stats:** not stated (no number stats on this page).

**Proof:**
- **PowerDNA, Malaysia and China, 2024: "Genetic test reports, generated by RPA".** "RPA for genetic test report generation, alongside GenAI-personalised DNA health reports." Tags: RPA · GenAI.
- **Leading healthcare group, 2026: "Medicolegal and insurance case reports".** "An intelligent engine assesses medicolegal and insurance cases and generates the report, so clinicians review a draft instead of writing from scratch." Tags: Case assessment · Report generation.
- A law firm's document handling (Agentic RPA card).
- Kiralytics SHIFT™ cross-branch KPIs (FAQ).
- No numeric outcomes are claimed on this page.

**Industries:**
- On-page links: "See healthcare work" (→ /industries/healthcare), in the hero and in the section.
- Section badge: "Healthcare and genomics".
- Industry pages that link to this service: Healthcare.

**Related products:**
- Kiralytics SHIFT™ (named in the FAQ).
- Product pages that link to this service: Kiralytics EMOSI.

**Related services (cards):** AI engineering · Agentic automation · System integration and consulting

**FAQs:** "Questions about data, RPA and MLOps" — "Automation, dashboards and keeping models accurate after launch."
- **What is the difference between RPA and agentic RPA?** — "RPA follows fixed, rules-based steps, such as generating PowerDNA’s genetic test reports. Agentic RPA adds AI for document work that needs judgement, as in a law firm’s document handling." *(open)*
- **How do you keep models accurate after launch?** — "We monitor adoption and model performance after go-live and iterate, with improvement scoped into the build from day one, supported by DevOps and MLOps pipelines." *(collapsed; from page JSON-LD)*
- **Do you build analytics dashboards?** — "Yes. We build data analytics and dashboards, such as the cross-branch KPIs and unified reporting for HQ in Kiralytics SHIFT™." *(collapsed; from page JSON-LD)*
- **How do we get started?** — "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins." *(collapsed; from page JSON-LD)*

**CTA:** "Let’s build what’s next" — "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" · "Chat on WhatsApp"

**Photos:**
1. https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg — "ALPHV AI CRM dashboard with lead and revenue charts" (screenshot; caption "ALPHV AI CRM dashboard, with features by user access level.")
2. https://framerusercontent.com/images/JImkW1VOCR37rxBitHsKeSxk.jpg — "Researchers working in a laboratory" (hero; also the services index card)
3. PowerDNA logo, not a photo: https://framerusercontent.com/images/Ul4RSGFB4RvZIvGX942A9JBA.png — "PowerDNA"

---

## Shared across every service page

- **Delivery section images.** Every service page reuses the same two images in its delivery steps:
  - https://framerusercontent.com/images/68vqaj3Rwa1C9elor6jbGhGY0aM.jpg — its alt is empty on the service pages; another page gives it as "Glass office towers seen from below".
  - The AI CRM dashboard screenshot (6oBpIK…).
- **Closing CTA.** All six pages have the same block: heading "Let’s build what’s next" and copy "Tell us where your business needs to be. We’ll map the path to get there." The buttons are "Talk to an AI engineer" and "Chat on WhatsApp".
- **Primary hero button.** On every page it is "Talk to an AI engineer".

---

## Cross-service patterns

Each theme below lists the services whose own page states it, with the wording used. All six means all six service pages.

1. **Improvement after go-live, scoped in from day one** — all six. Each Step 04 is titled "Improve continuously after go-live" and its copy includes "with improvement scoped into the build from day one". Data, RPA and MLOps builds its whole lifecycle section and an FAQ around it. AI engineering's "Built into your core systems" card adds "with monitoring and improvement after go-live".
2. **Business case first (tech advisory, data audit, strategy)** — all six, in Step 01 "Discover". Five pages say "AI strategy research"; Web and mobile apps says "product strategy" instead.
3. **Same team end to end ("No hand-offs.")** — all six, in each delivery intro. Five pages use the form "The engineers who … are the ones who …"; Web and mobile apps says "The team that shapes your product is the one that designs, builds and improves it." The index key fact reads "Founder-led, with no hand-offs".
4. **One four-stage method: Discover → Design → Implement → Improve** — all six. The step titles are tailored per service; the index labels this "How we engage".
5. **Fits what you already run (existing or core systems)** — all six:
   - AI engineering: "embedded in the systems you already run"
   - Agentic automation: "works inside the systems you already run"
   - System integration and consulting: "Design around what you already run"
   - Computer vision and smart city: "Design around your existing CCTV"
   - Web and mobile apps: "integrate it with your core systems"
   - Data, RPA and MLOps: "integrated with your core systems and third-party portals"
6. **Integration with bank, government, SSM (and CTOS) portals** — four of six:
   - AI engineering (Step 03)
   - Agentic automation (Step 03; its FAQ adds CTOS)
   - System integration and consulting ("90+ third-party portal automations, including banks, government, SSM and CTOS"; Step 03; FAQ)
   - Data, RPA and MLOps (Step 03 says "third-party portals" only; no portals are named)
   - Not on Computer vision or Web and mobile apps. The index Step 03 and FAQ also state it.
7. **Data stays in-house / locally hosted models** — four of six:
   - AI engineering (hosting section, guardrails layer, FAQ)
   - Agentic automation (FAQ)
   - System integration and consulting ("Models on a locally hosted NVIDIA GPU workstation")
   - Computer vision and smart city (FAQ)
   - Data, RPA and MLOps mentions only "Choose models, hosting and guardrails"; Web and mobile apps does not mention it.
   - Wording: the visible copy never uses the words sovereign or sovereignty. It says "in-house", "locally hosted" and "residency". "Sovereign" appears only in the case-study URL slug `/insights/sovereign-ai-case-management-law-firm` and in the organisation schema's `knowsAbout` ("Sovereign AI").
8. **Designed around "your regulator" / governed for regulated work** — AI engineering ("governed for regulated work"; guardrails layer; Step 02), System integration and consulting (Step 02), Computer vision and smart city (Step 02).
9. **Guardrails and access control** — AI engineering (guardrails layer), Agentic automation (guardrails throughout, plus "each user’s access level"), Data, RPA and MLOps (Step 02 "guardrails"; caption "features by user access level").
10. **Model, compute and cloud chosen per project** — AI engineering (logo wall: Qwen, Claude, OpenAI, Gemini, ILMU, FPT AI Factory, NVIDIA, Alibaba Cloud, Google Cloud), Agentic automation ("Choose models and hosting"), Computer vision ("choose hosting that fits your data"), Data, RPA and MLOps ("Choose models, hosting and guardrails"). Also on the services index.
11. **Document and report automation** — AI engineering (Document AI; Case assessment and reports), Agentic automation ("generate contracts, invoices and reports"; claim report), System integration and consulting ("Bank loan document AI extraction"), Data, RPA and MLOps (RPA genetic test reports; medicolegal case reports).
12. **Productised IP (Kiralytics)** — Computer vision and smart city (MATA, TRAFFIK, FIGHT in development), Web and mobile apps (Kiralytics SHIFT™ app), Data, RPA and MLOps (Kiralytics SHIFT™ dashboards).
13. **Taking over projects midway** — System integration and consulting (core claim, iPajak Group, CEO quote). Agentic automation's FAQ repeats it ("We have also taken over projects midway and delivered them"), as does the services index FAQ.
14. **Regional proof (Malaysia, Singapore, Vietnam)** — Agentic automation (Singapore hospitality group; Tasco Insurance, Vietnam), System integration and consulting ("six branches across Malaysia"), Web and mobile apps ("Malaysia’s first public predictions game"; "A Malaysian locum platform"), Data, RPA and MLOps ("PowerDNA, Malaysia and China, 2024").
15. **Clients that appear on more than one service page** (useful for keeping the deck consistent):
    - Tasco Insurance: AI engineering, Agentic automation, Web and mobile apps (hero image)
    - Law firm: AI engineering and Data, RPA and MLOps ("a law firm"); System integration and consulting (named "Abraham Ooi & Partners, 2025")
    - Fundaztic: System integration and consulting, Web and mobile apps
    - Leading healthcare group: AI engineering, Data, RPA and MLOps
    - Promotions model / FPT AI Factory: AI engineering; Data, RPA and MLOps (Data science card)
    - Kiralytics SHIFT™: Web and mobile apps, Data, RPA and MLOps

### Flags for the deck team
- The index stat 30% (label "Productivity improvement") has no qualifier or source on the page. The other three index stats are qualified as "expected" or "estimated", or attributed (80% to the AI CRM for a Singapore hospitality group).
- The model name differs by page: the index says "Qwen2.5-14B on H100 SXM"; the AI engineering page says "Qwen2.5-14B-Instruct".
- The Fundaztic testimonial is not in the System integration page's HTML (only the iPajak slide is rendered). If you use it, cite it to another page.
- Computer vision has no client case study or outcome figure. Its proof is product and partner based.
- AI engineering and Data, RPA and MLOps make no numeric outcome claims.
