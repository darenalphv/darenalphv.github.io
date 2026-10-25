# 03 — Industries and Products (source brief)

Source: alphv.com pages scraped to `pages/` (industries, industries__legal, industries__insurance, industries__healthcare, industries__hospitality, industries__financial-services, industries__retail, products, products__kiralytics-shift, products__kiralytics-mata-and-traffik, products__kiralytics-emosi, products__alphv-avatar, products__alphv-hellogen).

Text inside straight double quotation marks is copied word for word from the page. Wording outside quotes is my own and only says where something is or labels it. British spelling and the site's curly apostrophes (’) are kept as on the site.

## Read first: extraction notes and flags

1. **Some CountUp values in the .txt files are wrong. Use the HTML aria-label values.** The .txt shows the animation's start value. The real figures, taken from `aria-label` in the HTML, are:
   - /industries: "15+" for "Solutions architects, engineers and consultants". The .txt shows "0+".
   - /industries/legal: "90+" for "Third-party portal automations". The .txt shows "0+".
   - /industries/hospitality: "80%" for "Less manual data entry time". The .txt shows "0%".
   - /industries/financial-services: "MYR 379m" for "Funded through Fundaztic’s P2P platform" and "MYR 500m" for "Disbursed by iPajak Group". The .txt shows "MYR 0m".
2. **Where the FAQ answers come from.** In the static HTML only the first FAQ answer on each page is open. All the others are copied verbatim from that page's own `FAQPage` JSON-LD. Where both versions exist, the wording is the same.
3. **Hyphen in "3-minute".** On the HelloGen and Avatar pages the phrase is written "3-⁠minute", with an invisible word-joiner (U+2060) after the hyphen. Below it is written "3-minute". The JSON-LD and meta text use the plain form.
4. **Trademark marks** (checked across every scraped page):
   - **With ™:** "Kiralytics SHIFT™", "ALPHV Avatar™" and "ALPHV HelloGen™" carry ™ in headings, breadcrumbs and body copy.
   - **Never with ™:** "Kiralytics MATA", "Kiralytics TRAFFIK", "Kiralytics EMOSI" and "Kiralytics FIGHT" appear without ™ on every page.
   - **Exceptions where ™ is dropped:**
     - Body copy often shortens the product to "HelloGen", e.g. "HelloGen starts from a single 3-minute video clip."
     - Some image alt texts and meta descriptions leave out ™, e.g. alt "Kiralytics SHIFT clock-in screen on a phone" and alt "ALPHV Avatar Digital Ustaz interface".
5. **Some clients are not named.** Do not put a name to these anywhere in the deck:
   - Healthcare: "Leading healthcare group, 2026"
   - Hospitality: "Leading hospitality group, Singapore, 2026"
   - Retail: "a leading textile group"
6. **Tasco Insurance is a proof of concept, not a finished delivery.** The page calls it "proof of concept 2026" and says "ALPHV is building a multimodal case system". Describe it as a proof of concept, not a delivered system.
7. **Two financial figures are the clients' own, not ALPHV's.** The page says: "These are the clients’ own figures: what Fundaztic’s platform has funded and what iPajak Group has disbursed." That covers MYR 379m and MYR 500m.
8. **Testimonial attribution.** The /industries and /industries/financial-services pages show one quote. Its caption has three lines: "Tracy Gan", "COO, Fundaztic" and "Head of Corporate Strategy and Investment, Paramount Group", all in one figcaption under Tracy Gan's name. The section heading promises "Both financial services clients, in their own words", but the static HTML holds only this one quote.
9. **The 50.1K views figure is not a HelloGen result.** The page says: "Separately from HelloGen, ALPHV produces AI-generated UGC and ads for clients, including a client reel with 50.1K views for @richdadwilliam."
10. **No product page names a customer.** None of the five product pages names a customer or end client. The only live deployment named is Digital Ustaz at https://digitalustaz.com/, part of ALPHV Avatar™.
11. **Industry pages have no key facts block.** Only the product pages have a layer named "Key facts". For each industry I have used the closest thing, the "Featured delivery" case panel, and called it the key facts panel.
12. **The /industries "Countries" stat counts offices.** It reads "2" with the label "Countries" and the sub-label "Malaysia (HQ) and Singapore". The same page says "serving clients across Malaysia, Singapore and Vietnam".

---

# PART A — INDUSTRIES

## A0. Industries index (https://alphv.com/industries, `industries`)

- **Page title:** "AI Solutions by Industry | ALPHV Technologies"
- **Meta description:** "AI systems for legal, insurance, healthcare, hospitality, finance and retail teams in Malaysia, Singapore and Vietnam, built by ALPHV in Kuala Lumpur."
- **Breadcrumb:** "Home" > "Industries". Badge: "Industries"
- **H1:** "Work shaped around your sector"
- **Lede:** "ALPHV builds AI for legal, insurance, healthcare, hospitality, financial services and retail teams, among the 16 industry verticals we serve across Malaysia and Singapore."
- **CTAs:** "Talk to an AI engineer" (goes to /contact) and "Read the case studies" (goes to /insights#case-studies)
- **Hero photo:** https://framerusercontent.com/images/68vqaj3Rwa1C9elor6jbGhGY0aM.jpg, alt "Glass office towers seen from below"

**Sectors section:** "Sectors" / "Six sectors, with work to show" / "Choose your sector to see what we built, for whom, and with which models and systems."

| Sector | Card badge | Card copy | Tags |
|---|---|---|---|
| "Legal" | "Abraham Ooi & Partners, 2025" | "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting, with models hosted inside the firm." | "Qwen", "GenAI-RAG", "Agentic RPA", "NVIDIA GPU" |
| "Insurance" | "Tasco Insurance, Vietnam" | "A multimodal case system assesses asset damage from images and video around the clock, then prepares the liability assessment and claim report. Proof of concept, 2026." | "Qwen", "Multimodal AI", "Agentic AI" |
| "Healthcare" | "Leading healthcare group, 2026" | "An intelligent engine assesses medicolegal and insurance cases and generates the report, so clinicians review a draft instead of writing from scratch." | "Qwen", "Claude", "RPA" |
| "Hospitality" | "Singapore hospitality group, 2026" | "WhatsApp AI agents handle customer conversations 24/7, sync every lead to the CRM and alert sales to hot leads, cutting manual data entry time by 80%." | "Qwen", "WhatsApp", "AI agents" |
| "Financial services" | "Fundaztic and iPajak Group" | "A debt recovery management system for Fundaztic, and a centralised pawn brokerage system for iPajak Group’s six branches, taken over midway." | "System integration", "Consulting", "UI/UX" |
| "Retail" | "Leading textile group, 2026" | "An AI content factory automates e-commerce product photoshoots, while Kiralytics SHIFT™ and MATA handle rostering, attendance and footfall for multi-location retailers." | "Gemini", "Kiralytics SHIFT™", "Kiralytics MATA" |

**Numbers section:** "ALPHV in numbers" / "A Malaysian team, delivering across the region" / "Headquartered in Kuala Lumpur with an office in Singapore, serving clients across Malaysia, Singapore and Vietnam."

| Value | Label |
|---|---|
| "16" | "Industry verticals served" |
| "12" | "Projects delivered and in delivery" |
| "2" | "Countries" (sub-label "Malaysia (HQ) and Singapore") |
| "15+" | "Solutions architects, engineers and consultants" |

**Regulated sectors section:** "Regulated sectors" / "What regulated sectors need from AI" / "Legal, insurance, healthcare and financial teams answer to regulators, so their AI has to respect where data lives, what it connects to and who can act."

| Card | Copy | Proof bullets |
|---|---|---|
| "Data that stays in-house" | "Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation." | "Client data stays inside the firm for a 36-year-old law firm"; "Models, hosting and guardrails chosen around your regulator" |
| "Integration with the systems you run" | "Most of our work connects AI to legacy and third-party systems, including bank, government, SSM and CTOS portals." | "90+ third-party portal automations for one law firm"; "Projects taken over midway and delivered, as for iPajak Group" |
| "Guardrails and governance" | "AI safety and alignment and governance guardrails keep each system accountable, from customer conversations to claims." | "Intelligent conversation flows with guardrails"; "Duplicate claims from the same person identified automatically"; "CRM features by user access level" |

**Clients section:** "Clients" / "What our clients say" / "Fundaztic and iPajak Group on working with ALPHV, from capturing requirements to taking over a project midway."
- **Quote:** "Our objectives and requirements are well captured and built into solving our problems, incorporating advanced technologies like AI. ALPHV has good people and is easy to work with compared to other tech vendors."
- **Caption:** "Tracy Gan" / "COO, Fundaztic" / "Head of Corporate Strategy and Investment, Paramount Group" (see flag 8)

**Logo strip:** "Trusted by teams across Malaysia, Singapore and Vietnam". The logo alts are "Fundaztic", "iPajak Group", "Abraham Ooi & Partners", "Tasco Insurance", "PowerDNA", "EasyRenz", "Carlsberg", "Mudah Healthcare", "Borong" and "LocumLah".

**Closing CTA (the same on every industry page):** "Let’s build what’s next" / "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Talk to an AI engineer" and "Chat on WhatsApp" (goes to https://wa.me/60165187740).

**Sector card photos on the index:**
- Legal: https://framerusercontent.com/images/PtGlJjXmAv8PedgGHHmW2IqAMfM.jpg, "A gavel on legal documents"
- Insurance: https://framerusercontent.com/images/sXar4GXGA8J57faK0SWPk2E.jpg, "A home insurance policy form on a clipboard"
- Healthcare: https://framerusercontent.com/images/JImkW1VOCR37rxBitHsKeSxk.jpg, "Researchers working in a laboratory"
- Hospitality: https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg, "ALPHV AI CRM dashboard with lead and revenue charts"
- Financial services: https://framerusercontent.com/images/RGnnpQg6l2j5HkfltjFEXhrqu4.jpg, "Two colleagues reviewing figures on a tablet"
- Retail: https://framerusercontent.com/images/ZCAVkFkuAfQ2IyjrVR2ITIeSpts.jpg, "Kiralytics MATA people counting on live CCTV"

---

## A1. Legal (https://alphv.com/industries/legal, `industries__legal`)

- **Name:** "Legal" (breadcrumb "Industries" > "Legal"; badge "Legal")
- **Page title:** "AI for Law Firms: Sovereign Case Management | ALPHV"
- **Meta description:** "Case management, document AI and 90+ portal automations for law firms, with models on a local NVIDIA GPU workstation so client data stays inside the firm."
- **H1:** "Sovereign AI for law firms, with client data in-house"
- **Lede:** "Case management, document AI and 90+ portal automations, built for a 36-year-old law firm and run on a locally hosted NVIDIA GPU workstation."
- **Hero CTAs:** "Talk to an AI engineer" and "Read the case study" (goes to /insights/sovereign-ai-case-management-law-firm)

**Key facts panel** (the "Featured delivery" case panel)
- **Image caption:** "ALPHV Lawtech Solutions, delivered 2025."
- **Badge:** "Abraham Ooi & Partners, 2025"
- **Title:** "Case management with sovereign AI"
- **Copy:** "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting. GenAI with retrieval and agentic RPA handle document work, and the models run on a locally hosted NVIDIA GPU workstation so client data stays inside the firm."
- **Bullets:**
  - "Matters, tasks, teams and a client portal for lawyers, clerks and secretaries"
  - "Bank loan document AI extraction and template-based document generation"
  - "90+ third-party portal automations, including banks, government, SSM and CTOS"
  - "Workflow, email and WhatsApp automation, with accounting and e-invoicing"
- **Tags:** "Qwen", "GenAI-RAG", "Agentic RPA", "NVIDIA GPU"
- **Link:** "Read the case study"

**Challenges:** "Where AI pays back in a law firm" / "Law firms run on documents, third-party portals and confidential client data. Each is a place where AI can take routine work off lawyers, clerks and secretaries."

| Title | Copy |
|---|---|
| "Document-heavy matters" | "AI extracts the details from bank loan documents, and routine documents are generated from the firm’s own templates rather than drafted from scratch." |
| "90+ third-party portals" | "Automations work across bank, government, SSM and CTOS portals, so staff stop re-keying the same matter details into each one." |
| "Client data that must stay in" | "Models run on a locally hosted NVIDIA GPU workstation, so confidential client files are processed inside the firm, not in an outside cloud." |

**What ALPHV delivered**
- **Figure band:** "90+" "Third-party portal automations". Then "Agentic RPA" / "Automation across the firm’s third-party portals" / "Bank, government, SSM and CTOS portals are covered, alongside workflow, email and WhatsApp automation and accounting with e-invoicing." Chips: "Banks", "Government", "SSM", "CTOS". Link: "Explore agentic automation".
- **Services:** "The services behind the platform" / "The same team delivered all three, from the models and agents to the platform the firm now runs on."

| Service | Title | Copy |
|---|---|---|
| "AI engineering" | "Document AI on locally hosted models" | "Retrieval and document AI over your own files, governed for regulated work and hosted where your data has to stay." |
| "Agentic automation" | "Agents for portals and paperwork" | "AI agents with the tools and APIs they need to act safely across portals, documents, email and WhatsApp." |
| "System integration and consulting" | "A new platform in place of legacy" | "Replace and connect legacy systems, with consulting from AI strategy to go-live, including projects taken over midway." |

**Named clients and case studies:** Abraham Ooi & Partners, with the case study at /insights/sovereign-ai-case-management-law-firm. The outcome claims, as written:
- "A 36-year-old law firm replaced its legacy system with an ALPHV platform for case management, back office and accounting."
- "90+ third-party portal automations, including banks, government, SSM and CTOS"
- "the models run on a locally hosted NVIDIA GPU workstation so client data stays inside the firm."

**Regulations, standards and systems named:** bank, government, SSM and CTOS portals; "NVIDIA GPU workstation"; "Qwen"; "GenAI-RAG"; "Agentic RPA"; "e-invoicing"; email and WhatsApp. No regulator is named on this page.

**Stats:** "90+" "Third-party portal automations"; "36-year-old law firm"

**FAQ:** "Questions law firms ask" / "Short answers on data residency, portals and the systems you already run."
- **Q: "Can client data stay inside our firm?"**
  A: "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation, as we did for Abraham Ooi & Partners."
- **Q: "Can AI work with bank, government, SSM and CTOS portals?"**
  A: "Yes. Most of our work connects AI to legacy and third-party systems. For one law firm, we built 90+ third-party portal automations, including banks, government, SSM and CTOS."
- **Q: "Do we have to replace our case management system?"**
  A: "Not necessarily. We embed AI into the core systems you already run. Abraham Ooi & Partners chose to replace its legacy system with an ALPHV platform for case management, back office and accounting."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos**
- Case panel: https://framerusercontent.com/images/PtGlJjXmAv8PedgGHHmW2IqAMfM.jpg, alt "A judge’s gavel resting on signed legal papers"
- Hero: https://framerusercontent.com/images/yiodlHkvE6MQ8l1dqFeptkQ2A.jpg, alt "Stacks of paper files and folders in an office"

---

## A2. Insurance (https://alphv.com/industries/insurance, `industries__insurance`)

- **Name:** "Insurance" (breadcrumb "Industries" > "Insurance"; badge "Insurance")
- **Page title:** "Agentic AI for Insurance Claims | ALPHV Technologies"
- **Meta description:** "AI agents that assess asset damage from images, video and PDFs, flag duplicate claims and draft liability assessments: a proof of concept with Tasco Insurance."
- **H1:** "Agentic AI for damage claims, around the clock"
- **Lede:** "In a 2026 proof of concept for Tasco Insurance, Vietnam, ALPHV’s multimodal case system assesses asset damage from images and video, then prepares the liability assessment and claim report."
- **Hero CTAs:** "Talk to an AI engineer" and "Read the case study" (goes to /insights/agentic-ai-insurance-claims-tasco)

**Key facts panel** (the "Featured delivery" case panel)
- **Image caption:** "Tasco Insurance interface, proof-of-concept stage."
- **Badge:** "Tasco Insurance, Vietnam, proof of concept 2026"
- **Title:** "Agentic AI for asset damage claims"
- **Copy:** "ALPHV is building a multimodal case system that assesses asset damage from images and video around the clock, then prepares the liability assessment and claim report." Then: "ALPHV designed the web interface, and the system automates third-party garage, workflow, email and WhatsApp steps."
- **Tags:** "Qwen", "Multimodal AI", "Agentic AI"
- **Link:** "Read the case study"

**Challenges:** "Where AI pays back in insurance claims" / "Damage claims arrive at any hour, as photos, video and documents, and each one ends in a liability assessment and a claim report."

| Title | Copy |
|---|---|
| "Claims that arrive at any hour" | "The case system assesses asset damage from images and video around the clock, so new claims do not wait for office hours." |
| "Evidence in every format" | "Photos, video and PDFs for one claim are processed together in one case file instead of being reviewed separately." |
| "Liability with a clear basis" | "The liability assessment is based on Vietnam’s Road Act and compendium, then written into the claim report the system prepares." |

**What ALPHV delivered: how it works.** "How the case system works" / "From images to a claim report" / "Each claim moves through four steps inside one case file, around the clock."

| Step | Title | Copy |
|---|---|---|
| "01" | "Collect the evidence" | "Images, video and PDFs for a claim are processed together in one case file." |
| "02" | "Check for duplicates" | "Claims from the same person are compared, and duplicates are identified automatically." |
| "03" | "Assess damage and liability" | "Multimodal AI assesses asset damage from images and video, and liability against Vietnam’s Road Act and compendium." |
| "04" | "Prepare the report" | "The claim report is prepared, with third-party garage, workflow, email and WhatsApp steps automated." |

**Services:** "The services behind the case system" / "The same team scopes, builds and improves the system, from the multimodal models to the agents and the web interface."

| Service | Title | Copy |
|---|---|---|
| "Agentic automation" | "Agents for documents and claims" | "Agentic process automation for documents and claims, with the tools, MCP servers and APIs agents need to act safely." |
| "AI engineering" | "Multimodal models for images, video and PDFs" | "Vision and language models working together on your own data, governed for regulated work." |
| "Web and mobile apps" | "Web interfaces for insurance" | "Product strategy, UI/UX and engineering for web platforms, including the Tasco Insurance web interface designed by ALPHV." |

**Named clients and case studies:** Tasco Insurance (Vietnam), with the case study at /insights/agentic-ai-insurance-claims-tasco. This is a proof of concept (see flag 6). The claims, as written:
- "ALPHV is building a multimodal case system that assesses asset damage from images and video around the clock"
- "duplicates are identified automatically"
- "ALPHV designed the web interface"

**Regulations, standards and systems named:** "Vietnam’s Road Act and compendium"; third-party garage, workflow, email and WhatsApp; "MCP servers and APIs"; "Qwen"; "Multimodal AI"; "Agentic AI"

**Stats:** not stated. The page has no numeric stats apart from "four steps" and the year "2026".

**FAQ:** "Questions insurers ask" / "Short answers on evidence, duplicate claims, liability and the systems you already run."
- **Q: "Can the system read photos, video and PDFs together?"**
  A: "Yes. In the Tasco Insurance proof of concept, images, video and PDFs are processed in one case file, and asset damage is assessed from images and video."
- **Q: "How are duplicate claims handled?"**
  A: "The case system identifies duplicate claims from the same person automatically. It is one of the features of the Tasco Insurance proof of concept."
- **Q: "Which rules does the liability assessment follow?"**
  A: "For Tasco Insurance in Vietnam, the liability assessment is based on Vietnam’s Road Act and compendium."
- **Q: "Can you work with our existing systems?"**
  A: "Yes. Most of our work connects AI to legacy and third-party systems. For Tasco Insurance, that includes third-party garage, workflow, email and WhatsApp automation."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos**
- Case panel screenshot: https://framerusercontent.com/images/mFzU6WzKoAGYOmb9TCHqNNGVArE.jpg, alt "Tasco Insurance web interface designed by ALPHV"
- Hero: https://framerusercontent.com/images/sXar4GXGA8J57faK0SWPk2E.jpg, alt "A home insurance policy form on a clipboard"

---

## A3. Healthcare (https://alphv.com/industries/healthcare, `industries__healthcare`)

- **Name:** "Healthcare" (breadcrumb "Industries" > "Healthcare"; badge "Healthcare")
- **Page title:** "AI for Healthcare Reports & Platforms | ALPHV"
- **Meta description:** "Medicolegal report automation, GenAI-personalised DNA health reports with PowerDNA, and LocumLah, a locum platform with 3,000 doctors and 600 clinics onboarded."
- **H1:** "Healthcare reports drafted by AI, reviewed by clinicians"
- **Lede:** "ALPHV’s healthcare work spans an engine that drafts medicolegal and insurance reports, GenAI-personalised DNA health reports for PowerDNA, and LocumLah, a Malaysian locum platform."
- **Hero CTAs:** "Talk to an AI engineer" and "Explore data, RPA and MLOps" (goes to /services/data-rpa-and-mlops). There is no case-study link on this page.

**Key facts panel** (the "Featured delivery" case panel)
- **Image caption:** "Healthcare and genomics work, 2024 to 2026."
- **Badge:** "Leading healthcare group, 2026" (the client is not named)
- **Title:** "Medicolegal reports, assessed and drafted"
- **Copy:** "An intelligent engine assesses medicolegal and insurance cases and generates the report, so clinicians review a draft instead of writing from scratch."
- **Bullets:** "Medicolegal and insurance case assessment"; "AI report generation engine"
- **Tags:** "Qwen", "Claude", "RPA"
- **Link:** "Explore AI engineering"

**Challenges:** "Where AI pays back in healthcare" / "Healthcare runs on structured reports and on having doctors where they are needed: case reports, genetic test results and locum shifts."

| Title | Copy |
|---|---|
| "Medicolegal and insurance cases" | "An intelligent engine assesses each case and generates the report, so clinicians review a draft instead of writing from scratch." |
| "Genetic test reports" | "RPA generates genetic test reports, and GenAI personalises DNA health reports, as delivered for PowerDNA in Malaysia and China." |
| "Locum cover for clinics" | "LocumLah, a Malaysian locum platform built by ALPHV, has onboarded 3,000 doctors and 600 clinics." |

**What ALPHV delivered: more work.** "More healthcare and genomics work" / "Genomics reports and a locum platform" / "Alongside the report engine, ALPHV automated genetic test reports for PowerDNA and built LocumLah, a Malaysian locum platform."
- **PowerDNA card:** badge "PowerDNA, Malaysia and China, 2024" / "GenAI-personalised DNA health reports" / "GenAI personalises DNA health reports, and robotic process automation generates genetic test reports."
- **LocumLah card:** "LocumLah" / "A Malaysian locum platform" / "Built by ALPHV for Malaysian clinics and the locum doctors who cover their shifts." Link: "Explore web and mobile apps".

**Services:** "The services behind this work" / "Three services cover ALPHV’s healthcare work, delivered by the team that scopes it and improves it after go-live."

| Service | Title | Copy |
|---|---|---|
| "Data, RPA and MLOps" | "Automation for report generation" | "RPA for PowerDNA’s genetic test report generation, with data analytics, dashboards and MLOps pipelines to keep models accurate." |
| "Web and mobile apps" | "Platforms for clinics and doctors" | "Product strategy, UI/UX and engineering for platforms used by thousands of people, such as LocumLah." |
| "AI engineering" | "Models that assess cases and draft reports" | "Knowledge integration and specialised models, governed for regulated work, with Qwen and Claude in ALPHV’s healthcare stack." |

**Named clients and case studies:**
- PowerDNA (Malaysia and China, 2024)
- LocumLah (a platform built by ALPHV)
- The medicolegal client is unnamed ("Leading healthcare group, 2026").
- No case-study link appears on this page.

Outcome claims, as written:
- "LocumLah, a Malaysian locum platform built by ALPHV, has onboarded 3,000 doctors and 600 clinics."
- "so clinicians review a draft instead of writing from scratch."

**Regulations, standards and systems named:** "Qwen", "Claude", "RPA", "MLOps pipelines"; the FAQ also names "Qwen, Claude, OpenAI, Gemini and ILMU" and "NVIDIA GPU workstation". No regulator is named.

**Stats**

| Value | Label |
|---|---|
| "3,000" | "Doctors onboarded to LocumLah" |
| "600" | "Clinics onboarded to LocumLah" |
| "2" | "Countries in the PowerDNA work" (sub-label "Malaysia and China, 2024") |

**FAQ:** "Questions healthcare teams ask" / "Short answers on clinical review, data residency and the models we use."
- **Q: "Does AI replace the clinician’s judgement?"**
  A: "No. The engine assesses the case and generates a draft report, and clinicians review that draft instead of writing from scratch."
- **Q: "Can patient data stay in-house?"**
  A: "Yes. Where data must stay inside your organisation, we deploy locally hosted models, for example on your own NVIDIA GPU workstation."
- **Q: "Which models do you use for healthcare work?"**
  A: "We choose per project across Qwen, Claude, OpenAI, Gemini and ILMU. ALPHV’s healthcare work to date uses Qwen and Claude."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos**
- Hero: https://framerusercontent.com/images/JBqT6LUIdEXNM6AxD4N3FaeWBUQ.jpg, alt "Two doctors reviewing a document on a tablet"
- Case panel: https://framerusercontent.com/images/JImkW1VOCR37rxBitHsKeSxk.jpg, alt "Researchers working in a laboratory"

---

## A4. Hospitality (https://alphv.com/industries/hospitality, `industries__hospitality`)

- **Name:** "Hospitality" (breadcrumb "Industries" > "Hospitality"; badge "Hospitality")
- **Page title:** "AI CRM & WhatsApp Agents for Hospitality | ALPHV"
- **Meta description:** "WhatsApp AI agents that handle customer conversations 24/7, sync every lead to the CRM and cut manual data entry time by 80% for a Singapore hospitality group."
- **H1:** "WhatsApp AI agents that cut data entry by 80%"
- **Lede:** "For a leading hospitality group in Singapore, AI agents handle customer conversations 24/7, sync every lead to the CRM and alert the sales team to hot leads in real time."
- **Hero CTAs:** "Talk to an AI engineer" and "Read the case study" (goes to /insights/whatsapp-ai-crm-singapore-hospitality)

**Key facts panel** (the "Featured delivery" case panel)
- **Image caption:** "AI CRM dashboard for a Singapore hospitality group."
- **Badge:** "Leading hospitality group, Singapore, 2026" (the client is not named)
- **Title:** "An AI CRM with WhatsApp sales agents"
- **Copy:** "WhatsApp agents handle customer conversations 24/7 in natural language, sync every lead to the CRM and alert the sales team to hot leads in real time."
- **Bullets:**
  - "Intelligent conversation flows with guardrails"
  - "CRM dashboard with features by user access level"
  - "One-click contracts, invoices and reports"
  - "Manual data entry time reduced by 80%"
- **Tags:** "Qwen", "WhatsApp", "AI agents"
- **Link:** "Read the case study"

**Challenges:** "Where AI pays back in hospitality" / "Hospitality sales happen in conversations, often on WhatsApp and outside office hours. Every lead then has to reach the CRM and the right person."

| Title | Copy |
|---|---|
| "Conversations at any hour" | "WhatsApp agents handle customer conversations 24/7 in natural language, inside conversation flows with guardrails." |
| "Leads that reach the CRM" | "Every lead from WhatsApp is synced to the CRM, and manual data entry time is down by 80%." |
| "Hot leads, flagged in real time" | "The sales team is alerted to hot leads in real time, then moves to one-click contracts, invoices and reports." |

**What ALPHV delivered**
- **Figure band:** "80%" "Less manual data entry time". Then "AI CRM" / "Leads flow from WhatsApp into the CRM" / "Agents capture each lead in the conversation and sync it to the CRM, where the dashboard shows features by user access level." Link: "Explore agentic automation".
- **Services and products:** "The services and products behind it" / "The AI CRM combines agentic automation and a web platform, built by one team. ALPHV Avatar™ adds a digital avatar that takes restaurant orders."

| Service / product | Title | Copy |
|---|---|---|
| "Agentic automation" | "WhatsApp sales agents" | "WhatsApp sales agents that sync leads to your CRM, with the tools, MCP servers and APIs they need to act safely." |
| "Web and mobile apps" | "A CRM dashboard built around access levels" | "Product strategy, UI/UX and engineering for the CRM dashboard, with features by user access level and one-click contracts, invoices and reports." |
| "ALPHV Avatar™" | "Digital Mamak takes restaurant orders" | "ALPHV Avatar™ digital avatars take on customer-facing roles. For restaurants, Digital Mamak takes orders." |

**Named clients and case studies:** the client is unnamed ("Leading hospitality group, Singapore, 2026"). The case study is at /insights/whatsapp-ai-crm-singapore-hospitality. Outcome claims, as written:
- "Manual data entry time reduced by 80%"
- "Every lead from WhatsApp is synced to the CRM"
- "The sales team is alerted to hot leads in real time"

**Regulations, standards and systems named:** "WhatsApp"; "CRM"; "Qwen"; "MCP servers and APIs". No regulator is named.

**Stats:** "80%" "Less manual data entry time"

**FAQ:** "Questions hospitality teams ask" / "Short answers on the agents, your CRM and access for your team."
- **Q: "Do the agents work outside office hours?"**
  A: "Yes. The WhatsApp agents handle customer conversations 24/7 in natural language, within conversation flows that have guardrails."
- **Q: "Does every lead reach our CRM?"**
  A: "Yes. The agents sync every lead to the CRM and alert the sales team to hot leads in real time. For one Singapore hospitality group, manual data entry time fell by 80%."
- **Q: "Can staff see different things in the CRM?"**
  A: "Yes. The CRM dashboard has features by user access level, with one-click contracts, invoices and reports."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos**
- Case panel screenshot: https://framerusercontent.com/images/6oBpIKOhZ1gp0H1VkPqRQ4kxv4.jpg, alt "ALPHV AI CRM dashboard with lead and revenue charts"
- Hero: https://framerusercontent.com/images/UDOwnMP13EH2gF9xmunF433xWLc.jpg, alt "Colleagues meeting in a bright office"

---

## A5. Financial services (https://alphv.com/industries/financial-services, `industries__financial-services`)

- **Name:** "Financial services" (breadcrumb "Industries" > "Financial services"; badge "Financial services")
- **Page title:** "Lending & Pawn Broking Systems | ALPHV Technologies"
- **Meta description:** "Debt recovery management for Fundaztic, a centralised pawn brokerage system for iPajak Group’s six branches, and AI strategy for Malaysian financial services."
- **H1:** "Core systems for lending and pawn broking"
- **Lede:** "ALPHV built debt recovery management for Fundaztic, which has funded MYR 379 million, and delivered a centralised pawn brokerage system for iPajak Group’s six branches, taking the project over midway."
- **Hero CTAs:** "Talk to an AI engineer" and "Read the case studies" (goes to /insights#case-studies)

**Key facts panel** (the "Featured delivery" panel, with two client cards)
- **Header:** "Fundaztic and iPajak Group" / "Delivered for Fundaztic and iPajak Group" / "Both are core systems: one built for Fundaztic, and one taken over midway and delivered for iPajak Group."
- **Card 1:**
  - Badge: "Fundaztic, P2P financing"
  - Title: "Debt recovery management and a UI/UX overhaul"
  - Copy: "For a P2P financing platform that has funded MYR 379 million, ALPHV built a debt recovery management (DRM) system and a UI/UX overhaul design for its lending platform."
  - Bullets: "Debt recovery management (DRM) system"; "UI/UX overhaul design for the lending platform"
  - Link: "Read the Fundaztic case study" (goes to /insights/debt-recovery-management-fundaztic)
- **Card 2:**
  - Badge: "iPajak Group, pawn broking"
  - Title: "A centralised pawn brokerage system"
  - Copy: "For iPajak Group, with MYR 500 million disbursed, ALPHV took over the project midway and delivered a centralised pawn brokerage system for six branches across Malaysia."
  - Bullets: "Centralised multi-branch pawn brokerage management"; "Six branches across Malaysia"; "Project taken over midway"
  - Link: "Read the iPajak case study" (goes to /insights/pawn-brokerage-system-ipajak)
- **Tags:** "System integration", "Consulting", "UI/UX"

**Challenges:** "Where AI and core systems pay back in finance" / "Lending and pawn broking run on core systems: debt recovery, branch operations and the platforms borrowers use. ALPHV builds and connects them, with AI where it pays back."

| Title | Copy |
|---|---|
| "Debt recovery, managed in one system" | "A debt recovery management (DRM) system for Fundaztic, a P2P financing platform that has funded MYR 379 million." |
| "Six branches, one system" | "A centralised pawn brokerage system for iPajak Group’s six branches across Malaysia, a project ALPHV took over midway." |
| "AI strategy before the build" | "Tech advisory, a data audit and AI strategy research for EasyRenz, so any AI build starts from the business case." |

**Numbers:** "In numbers" / "The scale these systems serve" / "These are the clients’ own figures: what Fundaztic’s platform has funded and what iPajak Group has disbursed."

| Value | Label |
|---|---|
| "MYR 379m" | "Funded through Fundaztic’s P2P platform" |
| "MYR 500m" | "Disbursed by iPajak Group" |
| "6" | "iPajak branches on one pawn brokerage system" |

**Testimonial:** "What our clients say" / "Both financial services clients, in their own words, on requirements, delivery and a project taken over midway."
- **Quote:** "Our objectives and requirements are well captured and built into solving our problems, incorporating advanced technologies like AI. ALPHV has good people and is easy to work with compared to other tech vendors."
- **Caption:** "Tracy Gan" / "COO, Fundaztic" / "Head of Corporate Strategy and Investment, Paramount Group" (see flag 8)

**Services:** "The services behind this work" / "Most of ALPHV’s financial services work is system integration and consulting, with UI/UX design for the platforms borrowers use."

| Service | Title | Copy |
|---|---|---|
| "System integration and consulting" | "Core systems, including projects taken over midway" | "Debt recovery management for Fundaztic and multi-branch pawn brokerage for iPajak Group, with consulting from AI strategy to go-live." |
| "Web and mobile apps" | "A UI/UX overhaul for a lending platform" | "Product strategy, UI/UX and engineering, including the UI/UX overhaul design for Fundaztic’s lending platform." |

**Named clients and case studies:** Fundaztic (P2P financing); iPajak Group (pawn broking); EasyRenz (AI strategy only). Outcome claims, as written:
- "ALPHV took over the project midway and delivered a centralised pawn brokerage system for six branches across Malaysia."
- "ALPHV built a debt recovery management (DRM) system and a UI/UX overhaul design for its lending platform."

**Regulations, standards and systems named:** "debt recovery management (DRM) system"; "P2P financing platform"; "centralised pawn brokerage system". No regulator is named.

**Stats:** "MYR 379m", "MYR 500m", "6" (as labelled above; the two MYR figures are the clients' own, see flag 7)

**FAQ:** "Questions financial services teams ask" / "Short answers on takeovers, systems work and where AI fits."
- **Q: "Can ALPHV take over a project already in progress?"**
  A: "Yes. iPajak Group’s centralised pawn brokerage system was a project ALPHV took over midway and delivered for six branches across Malaysia."
- **Q: "Do you only build AI?"**
  A: "No. Much of our financial services work is system integration: debt recovery management for Fundaztic and multi-branch pawn brokerage for iPajak Group, plus UI/UX design."
- **Q: "Where does an AI project start?"**
  A: "From the business case. For EasyRenz, that meant tech advisory, a data audit and AI strategy research before any build."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos.** The page has no product screenshot.
- Hero: https://framerusercontent.com/images/RGnnpQg6l2j5HkfltjFEXhrqu4.jpg, alt "Two colleagues reviewing figures on a tablet"
- Client logos: https://framerusercontent.com/images/x0N9BeUTbzcfI9ARRzVPm1zSw.png ("Fundaztic") and https://framerusercontent.com/images/0suQ2BoN5SyzixJ4YgbycsbQ.png ("iPajak Group")

---

## A6. Retail (https://alphv.com/industries/retail, `industries__retail`)

- **Name:** "Retail" (breadcrumb "Industries" > "Retail"; badge "Retail")
- **Page title:** "AI for Retail: Rostering, Footfall & Content | ALPHV"
- **Meta description:** "Kiralytics SHIFT rostering and GPS-verified attendance, MATA people counting on live CCTV, and AI content production for multi-location retailers in Malaysia."
- **H1:** "AI for retail rosters, footfall and product content"
- **Lede:** "Kiralytics SHIFT™ gives multi-location retailers intelligent rostering, real-time attendance and workforce analytics. For a leading textile group, ALPHV built an AI content factory that automates product photoshoots."
- **Hero CTAs:** "Talk to an AI engineer" and "Explore Kiralytics SHIFT™" (goes to /products/kiralytics-shift)

**Key facts panel** (the "Featured delivery" case panel)
- **Image caption:** "Kiralytics SHIFT™ clock-in on mobile."
- **Badge:** "Kiralytics SHIFT™ and a leading textile group, 2026"
- **Title:** "Rosters, footfall and product content"
- **Copy:** "Kiralytics SHIFT™ runs rostering, attendance and workforce analytics across branches, with separate views for store managers, rostered staff and HQ admins. For a leading textile group, ALPHV built an AI content factory on Gemini that automates product photoshoots."
- **Bullets:**
  - "Roster timeline with leave, overtime and shift-swap approvals"
  - "GPS-verified clock-in with geofence validation"
  - "Cross-branch KPIs and unified reporting for HQ"
  - "People counting for foot traffic, customer flow and occupancy"
- **Tags:** "Kiralytics SHIFT™", "Kiralytics MATA", "Gemini content factory"
- **Link:** "Explore Kiralytics SHIFT™"

**Challenges:** "Where AI pays back in retail" / "Multi-location retail runs on the right people on shift, knowing who walks in, and product content for online stores. AI helps with all three."

| Title | Copy |
|---|---|
| "Rosters across branches" | "A roster timeline with leave, overtime and shift-swap approvals, and GPS-verified clock-in with geofence validation." |
| "Foot traffic and occupancy" | "Kiralytics MATA counts people on live CCTV to show foot traffic, customer flow and occupancy for each space." |
| "Product photoshoots, automated" | "An AI content factory built on Gemini automates e-commerce product photoshoots for a leading textile group." |

**What ALPHV delivered**
- **Case note:**
  - Badge: "Case note, FPT AI Factory"
  - Title: "Train a promotions model on H100 SXM"
  - Copy: "ALPHV fine-tuned Qwen2.5-14B-Instruct using LoRA with Flash Attention on H100 SXM to build a model that recommends promotions from historical sales and promotions data."
  - Tags: "Qwen2.5-14B", "LoRA", "Flash Attention", "H100 SXM"
  - Link: "Read the case note" (goes to /insights/fine-tuning-qwen-on-h100-fpt-ai-factory)
- **Products and services:** "The products and services behind it" / "Two Kiralytics products and two ALPHV services cover the retail work, from the shop floor to the model that recommends promotions." Link: "See all products".

| Product / service | Title | Copy |
|---|---|---|
| "Kiralytics SHIFT™" | "Workforce optimiser for multi-location retail" | "Cloud-native rostering, GPS-verified attendance and workforce analytics, with separate views for store managers, rostered staff and HQ admins." |
| "Kiralytics MATA" | "People counting on live CCTV" | "Foot traffic, customer flow and occupancy for retail and commercial spaces, with FootfallCam as the AI hardware partner platform." |
| "Computer vision and smart city" | "Video analytics for retail floors" | "Count, classify and track with video analytics for retail floors, roads and public spaces." |
| "AI engineering" | "Specialised models, such as a promotions model" | "Specialised fine-tuning, including Qwen2.5-14B on H100 SXM for a model that recommends promotions from sales data." |

**Named clients and case studies:**
- The textile group is unnamed ("a leading textile group").
- FPT AI Factory is named in the case note badge.
- No named SHIFT or MATA customer.
- Outcome claims, as written: "an AI content factory on Gemini that automates product photoshoots". No numeric outcome is stated.

**Regulations, standards and systems named:** GPS verification and "geofence validation"; "live CCTV"; "FootfallCam"; "Gemini"; "Qwen2.5-14B-Instruct", "LoRA", "Flash Attention", "H100 SXM"; "FPT AI Factory". No regulator is named.

**Stats:** not stated (no numeric stats on the page).

**FAQ:** "Questions retailers ask" / "Short answers on branches, attendance and people counting."
- **Q: "Can Kiralytics SHIFT™ handle several branches?"**
  A: "Yes. It is built for multi-location retail, with cross-branch KPIs and unified reporting for HQ, and separate views for store managers, rostered staff and HQ admins."
- **Q: "How is attendance verified?"**
  A: "Staff clock in with GPS verification and geofence validation, and the roster timeline handles leave, overtime and shift-swap approvals."
- **Q: "What does people counting run on?"**
  A: "Kiralytics MATA works on live CCTV to measure foot traffic, customer flow and occupancy. Where dedicated AI hardware fits, FootfallCam is ALPHV’s hardware partner platform."
- **Q: "How do we get started?"**
  A: "Talk to our team. Every engagement starts from the business case, with tech advisory, a data audit and AI strategy research before any build begins."

**Photos**
- Case panel: https://framerusercontent.com/images/sd83ARYag8jSEiDrWEhyZqhN0.jpg, alt "Kiralytics SHIFT clock-in screen on a phone"
- Hero: https://framerusercontent.com/images/ZCAVkFkuAfQ2IyjrVR2ITIeSpts.jpg, alt "Kiralytics MATA people counting on live CCTV"
- Extra (FPT case note): https://framerusercontent.com/images/xZA70n2uPEBQ4rt79wXmTX5UQk.jpg, alt "An engineer reviewing model output on several monitors"

---

## A7. Industry matrix

How the columns were filled:
- **Top challenge:** the first card in each page's "Where AI pays back" section.
- **ALPHV answer:** the case panel title.
- **Proof point:** the strongest claim stated on the page.
- **Related service and product:** the cards in each page's services or products section.

| Industry | Top challenge | ALPHV answer | Proof point | Related service | Related product |
|---|---|---|---|---|---|
| Legal | "Document-heavy matters" | "Case management with sovereign AI" (Abraham Ooi & Partners, 2025) | "90+" "Third-party portal automations"; "36-year-old law firm"; models on "a locally hosted NVIDIA GPU workstation" | "AI engineering"; "Agentic automation"; "System integration and consulting" | not stated |
| Insurance | "Claims that arrive at any hour" | "Agentic AI for asset damage claims" (Tasco Insurance, Vietnam, proof of concept 2026) | "duplicates are identified automatically"; liability "based on Vietnam’s Road Act and compendium" (proof of concept, no metric) | "Agentic automation"; "AI engineering"; "Web and mobile apps" | not stated |
| Healthcare | "Medicolegal and insurance cases" | "Medicolegal reports, assessed and drafted" (unnamed "Leading healthcare group, 2026") | LocumLah "has onboarded 3,000 doctors and 600 clinics"; PowerDNA "Malaysia and China, 2024" | "Data, RPA and MLOps"; "Web and mobile apps"; "AI engineering" | not stated |
| Hospitality | "Conversations at any hour" | "An AI CRM with WhatsApp sales agents" (unnamed "Leading hospitality group, Singapore, 2026") | "Manual data entry time reduced by 80%" | "Agentic automation"; "Web and mobile apps" | "ALPHV Avatar™" (Digital Mamak) |
| Financial services | "Debt recovery, managed in one system" | DRM system for Fundaztic; "A centralised pawn brokerage system" for iPajak Group | "Six branches across Malaysia"; "Project taken over midway"; "MYR 379m" / "MYR 500m" (clients' own figures) | "System integration and consulting"; "Web and mobile apps" | not stated |
| Retail | "Rosters across branches" | "Rosters, footfall and product content" (Kiralytics SHIFT™ plus Gemini content factory for "a leading textile group") | Qwen2.5-14B-Instruct fine-tuned "using LoRA with Flash Attention on H100 SXM" (FPT AI Factory case note); no numeric outcome stated | "Computer vision and smart city"; "AI engineering" | "Kiralytics SHIFT™"; "Kiralytics MATA" |

---

# PART B — PRODUCTS

## B0. Products index (https://alphv.com/products, `products`)

- **Page title:** "AI Software Products for Business | ALPHV Technologies"
- **Meta description:** "Ready-to-deploy ALPHV software: Kiralytics SHIFT rostering, MATA and TRAFFIK video analytics, EMOSI sentiment monitoring, and ALPHV Avatar and HelloGen avatars."
- **Breadcrumb:** "Home" > "Products". Badge: "Products"
- **H1:** "ALPHV software, ready to deploy"
- **Lede:** "ALPHV products package proven solutions to recurring problems, from workforce rostering to computer vision and digital avatars."
- **CTAs:** "Request a demo" (goes to /contact) and "Explore Kiralytics" (goes to /products#kiralytics)
- **Hero photo:** https://framerusercontent.com/images/ZCAVkFkuAfQ2IyjrVR2ITIeSpts.jpg, alt "Kiralytics MATA people counting on live CCTV"

**How the portfolio is grouped.** In page order:

**1. Flagships:** "Flagship products" / "Two flagships for day-to-day operations" / "Kiralytics SHIFT™ runs rostering and attendance for multi-location retail. ALPHV Avatar™ puts digital avatars to work taking orders, answering questions and screening candidates."
- **"Kiralytics SHIFT™ workforce optimiser"**
  - Copy: "Cloud-native rostering, GPS-verified attendance and workforce analytics for multi-location retail, with separate views for store managers, rostered staff and HQ admins."
  - Bullets: "Roster timeline with leave, overtime and shift-swap approvals"; "GPS-verified clock-in with geofence validation"; "Cross-branch KPIs and unified reporting for HQ"
  - CTAs: "Request a demo" / "Explore Kiralytics SHIFT™"
  - Photo: https://framerusercontent.com/images/sd83ARYag8jSEiDrWEhyZqhN0.jpg, alt "Kiralytics SHIFT Clock In screen with a GPS-verified location"
- **"ALPHV Avatar™ digital avatars"**
  - Copy: "Digital Mamak takes restaurant orders. Digital Ustaz answers questions about Islam 24/7 from the Al-Quran and Hadith. Digital Interviewer screens candidates at scale."
  - Chips: "Digital Mamak", "Digital Ustaz", "Digital Interviewer"
  - CTAs: "Book a walkthrough" / "Explore ALPHV Avatar™"
  - Photo: https://framerusercontent.com/images/flv9D5ox6KpsEukLUycpONnERM.png, alt "ALPHV Avatar Digital Ustaz interface"

**2. Kiralytics family:** "Kiralytics" / "The Kiralytics family" / "Analytics products for workforces, shop floors, roads and brands, built by ALPHV."

| Product | Category line | Copy | Bullets |
|---|---|---|---|
| "Kiralytics SHIFT™" | "Workforce optimiser" | "Cloud-native rostering, GPS-verified attendance and workforce analytics for multi-location retail." | "Separate views for store managers, rostered staff and HQ admins"; "Leave, overtime and shift-swap approvals on one roster timeline" |
| "Kiralytics MATA and TRAFFIK" | "People and traffic counting" | "Video analytics that count, classify and track on shop floors and roads, with FootfallCam as the AI hardware partner." | "Foot traffic, customer flow and occupancy on live CCTV"; "Vehicle classification, speed detection and flow analysis" |
| "Kiralytics EMOSI" | "Sentiment monitoring" | "Track brand perception across Facebook, X, Instagram, TikTok and news." | "Social: Facebook, X, Instagram and TikTok"; "News coverage alongside social channels" |

**3. Avatars:** "ALPHV avatars" / "Avatars for orders, answers and interviews" / "ALPHV Avatar™ puts digital avatars to work in specific roles. ALPHV HelloGen™ turns a 3-minute clip into a life-like video and voice avatar." CTA: "Book a walkthrough".

| Product | Category line | Copy | Bullets |
|---|---|---|---|
| "ALPHV Avatar™" | "Digital avatars" | "Digital avatars, each built for one role, from the restaurant counter to the hiring funnel." | "Digital Mamak takes restaurant orders"; "Digital Ustaz answers questions about Islam 24/7 from the Al-Quran and Hadith"; "Digital Interviewer screens candidates at scale" |
| "ALPHV HelloGen™" | "Video and voice avatars" | "Turn a 3-minute clip into a life-like avatar with lip-sync and low-latency replies." | "A life-like avatar from a 3-minute clip"; "Lip-synced video and voice"; "Low-latency replies" |

**4. Also from ALPHV** (these have no product pages): "Also from ALPHV" / "Content and sports analysis" / "AI-generated content for brands, and a real-time analysis prototype for national athletes."
- "AI content" / "AI-generated UGC and ads" / "AI-generated UGC and ads for brands, including a client reel with 50.1K views for @richdadwilliam."
- "In development" / "Kiralytics FIGHT" / "A real-time combat sports analysis prototype for national athletes, currently in development."

**Closing CTA:** "Let’s build what’s next" / "Tell us where your business needs to be. We’ll map the path to get there." Buttons: "Request a demo" / "Chat on WhatsApp".

**Other notes**
- **Schema:** the products ItemList order is "Kiralytics SHIFT™", "Kiralytics MATA and TRAFFIK", "Kiralytics EMOSI", "ALPHV Avatar™", "ALPHV HelloGen™".
- **Brands and category:** each product's JSON-LD gives brand "Kiralytics" (SHIFT, MATA and TRAFFIK, EMOSI) or "ALPHV" (Avatar, HelloGen), category "Business software", and areaServed Malaysia, Singapore and Vietnam.
- **Footer:** the site footer lists only "Kiralytics SHIFT™", "ALPHV Avatar™" and "ALPHV HelloGen™" under Products.

**One-line descriptions from the "Other ALPHV products" cards** (repeated across product pages):
- "Kiralytics SHIFT™": "Rostering, GPS-verified attendance and workforce analytics for multi-location retail."
- "Kiralytics MATA and TRAFFIK": "People counting for retail floors and traffic analytics for road planning."
- "Kiralytics EMOSI": "Sentiment monitoring across Facebook, X, Instagram, TikTok and news."
- "ALPHV Avatar™": "Digital avatars that take orders, answer questions and screen candidates."
- "ALPHV HelloGen™": "A life-like video and voice avatar from a 3-minute clip."

---

## B1. Kiralytics SHIFT™ (https://alphv.com/products/kiralytics-shift, `products__kiralytics-shift`)

- **Product mark:** "Kiralytics SHIFT™". ™ is used in the breadcrumb, headings and copy. Some alt and meta text writes "Kiralytics SHIFT" without ™ (see flag 4).
- **Category line:**
  - Hero badge: "Kiralytics"
  - Index category: "Workforce optimiser"
  - Lede wording: "cloud-native workforce optimiser"
  - JSON-LD: category "Business software", brand "Kiralytics"
- **Page title:** "Kiralytics SHIFT™: Workforce Rostering Software | ALPHV"
- **H1:** "Rostering, attendance and analytics for every branch"
- **Lede:** "Kiralytics SHIFT™ is a cloud-native workforce optimiser for multi-location retail, with separate views for store managers, rostered staff and HQ admins."
- **What it does:** "Kiralytics SHIFT™ gives multi-location retailers intelligent rostering, real-time attendance and workforce analytics."

**Features:** "Features" / "From the roster to the HQ report" / "Plan shifts, verify every clock-in and compare branches in one cloud-native workforce system."

| Feature | Copy |
|---|---|
| "Roster timeline" | "Plan shifts on a timeline, with leave, overtime and shift-swap approvals handled in the same view." |
| "GPS-verified clock-in" | "Every clock-in is GPS-verified, with geofence validation that confirms staff are at the right branch." |
| "Real-time attendance" | "Attendance updates in real time, so managers and HQ can see who is on shift at every branch." |
| "Cross-branch KPIs" | "HQ tracks cross-branch KPIs with unified reporting, so every location is measured the same way." |

**How it works (views by role):** "Three views" / "One product, three views" / "Each role works in its own view of Kiralytics SHIFT™, from the shop floor to head office."

| Role | Title | Copy |
|---|---|---|
| "Store managers" | "Plan the roster and approve changes" | "Build each branch’s roster on the timeline, then approve leave, overtime and shift-swap requests as they come in." |
| "Rostered staff" | "Clock in at the branch" | "Clock in with GPS verification and geofence validation, and send leave, overtime or shift-swap requests for approval." |
| "HQ admins" | "Compare every branch" | "Follow real-time attendance and cross-branch KPIs, with unified reporting across the whole retail network." |

- **Deployment options:** "cloud-native" is the only deployment detail stated. Anything further is not stated.
- **Integrations:** not stated.
- **Who it is for:** "Multi-location retailers." Also: "Made for retailers with many branches".
- **Where it fits:** "Where it fits" / "Made for retailers with many branches" / "Kiralytics SHIFT™ gives multi-location retailers intelligent rostering, real-time attendance and workforce analytics." / "It sits alongside ALPHV’s other retail work: people counting with Kiralytics MATA on live CCTV, and an AI content factory that automates e-commerce photoshoots for a leading textile group." Links: "Explore retail" (goes to /industries/retail) and "See Kiralytics MATA".
- **Stats:** not stated.
- **Customers or deployments named:** not stated. The textile group is mentioned only for the content factory, not as a SHIFT user.

**FAQ:** "Frequently asked questions" / "How Kiralytics SHIFT™ works for store managers, rostered staff and HQ."
- **Q: "Who is Kiralytics SHIFT™ for?"**
  A: "Multi-location retailers. Store managers, rostered staff and HQ admins each work in their own view of the same cloud-native system."
- **Q: "How is attendance verified?"**
  A: "Every clock-in is GPS-verified, with geofence validation against the branch. Attendance then updates in real time for managers and HQ."
- **Q: "Can staff swap shifts or request leave?"**
  A: "Yes. Leave, overtime and shift-swap approvals sit on the same roster timeline that store managers use to plan shifts."
- **Q: "How do we see it working?"**
  A: "Request a demo through our contact page, or message us on WhatsApp. We’ll walk you through the store manager, staff and HQ views."

**CTA**
- Hero buttons: "Request a demo" (goes to /contact) and "Chat on WhatsApp" (goes to https://wa.me/60165187740)
- Closing: "Run every branch’s roster in one system" / "Request a demo of the store manager, staff and HQ views, or ask us a question on WhatsApp."

**Photos**
- Hero: https://framerusercontent.com/images/sd83ARYag8jSEiDrWEhyZqhN0.jpg, alt "Kiralytics SHIFT™ Clock In screen showing a staff member’s location at the branch"
- Where it fits: https://framerusercontent.com/images/qqw52TmEgjXbJGDyxmDOKZBY0E.jpg, alt "A store employee checks stock on a tablet in a retail shop"

---

## B2. Kiralytics MATA and Kiralytics TRAFFIK (one shared page: https://alphv.com/products/kiralytics-mata-and-traffik, `products__kiralytics-mata-and-traffik`)

- **Product marks:** "Kiralytics MATA" and "Kiralytics TRAFFIK", together "Kiralytics MATA and TRAFFIK". Neither carries ™ anywhere on the site (confirmed). The page title uses "&": "Kiralytics MATA & TRAFFIK: Video Analytics | ALPHV".
- **Category line:**
  - Hero badge: "Kiralytics"
  - Index category: "People and traffic counting"
  - Lede: "Two Kiralytics computer vision products."
  - JSON-LD: category "Business software", brand "Kiralytics"
- **H1:** "Count people and vehicles with video analytics"
- **Lede:** "Two Kiralytics computer vision products. MATA counts foot traffic, customer flow and occupancy on live CCTV. TRAFFIK classifies vehicles, detects speed and analyses flow for road planning."

**Key facts (hero)**

| Fact | Value |
|---|---|
| "Kiralytics MATA" | "People counting on live CCTV" |
| "Kiralytics TRAFFIK" | "Traffic analytics for road planning" |
| "Built for" | "Retail floors, commercial spaces and roads" |
| "AI hardware partner" | "FootfallCam" |

**What it does, and features**
- **MATA:** "Kiralytics MATA measures foot traffic, customer flow and occupancy for retail and commercial spaces, from live CCTV."
  - "Foot traffic: how many people come in"
  - "Customer flow: how people move through a space"
  - "Occupancy: how many people are inside at once"
  - Link: "Explore retail"
- **TRAFFIK:** "Kiralytics TRAFFIK classifies vehicles, detects speed and analyses traffic flow for road planning." / "It is part of ALPHV’s computer vision and smart city work, which counts, classifies and tracks with video analytics across retail floors, roads and public spaces."
  - "Vehicle classification by type"
  - "Speed detection"
  - "Traffic flow analysis"
  - Link: "Explore computer vision"

**How it works:** "How it works" / "From video feed to numbers" / "Both products apply computer vision to video: people for MATA, vehicles for TRAFFIK."

| Step | Title | Copy |
|---|---|---|
| "Step 01" | "Connect the video" | "MATA works on live CCTV in retail and commercial spaces. TRAFFIK works on video of the road network." |
| "Step 02" | "Detect and classify" | "Computer vision detects people moving through a space, and detects and classifies vehicles on the road." |
| "Step 03" | "Count and measure" | "MATA measures foot traffic, customer flow and occupancy. TRAFFIK measures vehicle types, speed and traffic flow." |

The section continues: "For AI hardware, Kiralytics MATA and TRAFFIK work with FootfallCam, ALPHV’s hardware partner platform." Link: "See all platforms" (goes to /platforms-and-clients).

- **Deployment options and integrations:** live CCTV for MATA; video of the road network for TRAFFIK; FootfallCam as the AI hardware partner platform. From the FAQ: "For models, compute and cloud, we choose per project."
- **Who it is for:** "Retail floors, commercial spaces and roads". MATA: "retail and commercial spaces". TRAFFIK: "road planning".
- **Where it fits:** "Where it fits" / "From retail floors to smart city roads" / "Start from the industry, the service or the partners behind Kiralytics MATA and TRAFFIK."
  - "Industry Retail": "Foot traffic, customer flow and occupancy for stores, alongside Kiralytics SHIFT™ for workforce rostering."
  - "Service" "Computer vision and smart city": "Count, classify and track with video analytics for retail floors, roads and public spaces."
  - "Partners" "Platforms and clients": "The models, compute, cloud and AI hardware ALPHV works with, including FootfallCam."
- **Stats:** not stated.
- **Customers or deployments named:** not stated. FootfallCam is a partner, not a customer.

**FAQ:** "Frequently asked questions" / "How Kiralytics MATA and TRAFFIK differ, and where each one fits."
- **Q: "What is the difference between MATA and TRAFFIK?"**
  A: "MATA counts people: foot traffic, customer flow and occupancy for retail and commercial spaces. TRAFFIK analyses vehicles: classification, speed detection and flow analysis for road planning."
- **Q: "Does MATA work with CCTV?"**
  A: "Yes. Kiralytics MATA runs people counting on live CCTV, measuring foot traffic, customer flow and occupancy."
- **Q: "Which AI hardware do you work with?"**
  A: "FootfallCam is our AI hardware partner platform. For models, compute and cloud, we choose per project."
- **Q: "How do we get started?"**
  A: "Request a demo through our contact page, or message us on WhatsApp. Every engagement starts from the business case."

**CTA**
- Hero buttons: "Request a demo" / "Chat on WhatsApp"
- Closing: "Measure your floors and roads with video" / "Request a demo of Kiralytics MATA and TRAFFIK, or ask us a question on WhatsApp."

**Photos**
- MATA: https://framerusercontent.com/images/ZCAVkFkuAfQ2IyjrVR2ITIeSpts.jpg, alt "Kiralytics MATA counting people on a live CCTV feed at a service counter" (caption "Kiralytics MATA people counting on a live CCTV feed.")
- TRAFFIK: https://framerusercontent.com/images/GeOkUeemeA6fC5KcVV1yKOj5po.png, alt "Video analytics detecting and classifying vehicles on a multi-lane road" (caption "Vehicle detection and classification on a road.")
- Partner logo: https://framerusercontent.com/images/J5jOqIunemmDHXMgNYMpP34ZUig.png, alt "FootfallCam"

---

## B3. Kiralytics EMOSI (https://alphv.com/products/kiralytics-emosi, `products__kiralytics-emosi`)

- **Product mark:** "Kiralytics EMOSI", shortened to "EMOSI" in copy. It carries no ™ anywhere (confirmed).
- **Category line:**
  - Hero badge: "Kiralytics"
  - Index category: "Sentiment monitoring"
  - JSON-LD: category "Business software", brand "Kiralytics"
- **Page title:** "Kiralytics EMOSI: Brand Sentiment Monitoring | ALPHV"
- **Meta description:** "Monitor brand perception and sentiment across Facebook, X, Instagram, TikTok and news in one place with Kiralytics EMOSI, built by ALPHV in Kuala Lumpur."
- **H1:** "See how people talk about your brand"
- **Lede:** "Kiralytics EMOSI is sentiment monitoring for brand perception, across Facebook, X, Instagram, TikTok and news."

**Key facts (hero)**

| Fact | Value |
|---|---|
| "What it measures" | "Brand perception and sentiment" |
| "Social platforms" | "Facebook, X, Instagram and TikTok" |
| "Media" | "News coverage" |
| "Built by" | "ALPHV, Kuala Lumpur" |

**Features (sources):** "Sources" / "The five sources EMOSI monitors" / "Four social platforms and the news, followed for what they say about your brand."
- "Facebook" ("Social platform")
- "X" ("Social platform")
- "Instagram" ("Social platform")
- "TikTok" ("Social platform")
- "News" ("News media")

**How it works:** "How it works" / "How sentiment monitoring works" / "EMOSI follows what is said about your brand in public, then reads it for tone." CTA: "Request a demo".

| Step | Label | Title | Copy |
|---|---|---|---|
| "01" | "Collect" | "Gather what is said about your brand" | "Public posts and articles that mention your brand are gathered from Facebook, X, Instagram, TikTok and news outlets." |
| "02" | "Read" | "Read the sentiment" | "Sentiment analysis reads the tone of each mention, from praise to complaint." |
| "03" | "Follow" | "Follow brand perception" | "See how your brand is perceived across social platforms and the news, and how that changes over time." |

- **Deployment options:** not stated.
- **Integrations:** not stated, apart from the five monitored sources listed above.
- **Who it is for:** not stated as a segment. The copy speaks to the brand owner ("your brand").
- **Where it fits:** "Where it fits" / "Beyond sentiment monitoring" / "Explore the ALPHV services and industries around Kiralytics EMOSI."
  - "Service" "AI engineering": "Turn your own data into specialised AI with knowledge integration, fine-tuning and multimodal models."
  - "Service" "Data, RPA and MLOps": "Data analytics and dashboards, with MLOps that keeps models accurate in production."
  - "Industries" "Industries we serve": "Legal, insurance, healthcare, hospitality, financial services and retail."
- **Stats:** "five sources" (a count). No other stats are stated.
- **Customers or deployments named:** not stated.

**FAQ:** "Frequently asked questions" / "What Kiralytics EMOSI monitors, and how it fits with ALPHV’s other products."
- **Q: "Which sources does Kiralytics EMOSI monitor?"**
  A: "Five: Facebook, X, Instagram, TikTok and news."
- **Q: "What does EMOSI measure?"**
  A: "Brand perception. As a sentiment monitoring product, it follows the tone of what is said about your brand across those five sources."
- **Q: "Is EMOSI part of Kiralytics?"**
  A: "Yes. The Kiralytics line also includes Kiralytics SHIFT™ for workforce rostering, and MATA and TRAFFIK for people and traffic counting."
- **Q: "How do we get started?"**
  A: "Request a demo through our contact page, or message us on WhatsApp. We’ll show you how EMOSI follows your brand."

**CTA**
- Hero buttons: "Request a demo" / "Chat on WhatsApp"
- Closing: "Start monitoring how your brand is perceived" / "Request a demo of Kiralytics EMOSI, or ask us a question on WhatsApp."

**Photos.** There is no EMOSI product screenshot on the page.
- The only content image is https://framerusercontent.com/images/68vqaj3Rwa1C9elor6jbGhGY0aM.jpg, in the "How it works" steps. Its alt is empty on this page; the same file has alt "Glass office towers seen from below" on /industries.
- Social card (og:image): https://framerusercontent.com/assets/byUIdpUY3wqigz1NBFcqRWjUmvg.png

---

## B4. ALPHV Avatar™ (https://alphv.com/products/alphv-avatar, `products__alphv-avatar`)

- **Product mark:** "ALPHV Avatar™". The sub-products "Digital Mamak", "Digital Ustaz" and "Digital Interviewer" carry no ™.
- **Category line:**
  - Hero badge: "ALPHV"
  - Index category: "Digital avatars"
  - JSON-LD: category "Business software", brand "ALPHV"; isRelatedTo "Digital Ustaz" (https://digitalustaz.com/, applicationCategory "EducationalApplication")
- **Page title:** "ALPHV Avatar™: AI Digital Avatars | ALPHV Technologies"
- **Meta description:** "AI avatars: Digital Mamak takes restaurant orders, Digital Ustaz answers questions on Islam from the Quran and Hadith, Digital Interviewer screens candidates."
- **H1:** "Digital avatars for orders, answers and interviews"
- **Lede:** "ALPHV Avatar™ puts digital avatars to work: Digital Mamak takes restaurant orders, Digital Ustaz answers questions about Islam 24/7 from the Al-Quran and Hadith, and Digital Interviewer screens candidates at scale."

**Features (the three avatars):** "Three avatars" / "Three avatars, three jobs" / "Each ALPHV Avatar™ is a digital avatar with one clear task, from a restaurant order to a candidate screen."

| Segment | Avatar | Copy |
|---|---|---|
| "Restaurants" | "Digital Mamak" | "Takes restaurant orders, giving customers a digital avatar to order from." |
| "Islamic knowledge" | "Digital Ustaz" | "Your learning companion, 24/7. Ask about Islam in your own words and get answers drawn from the Al-Quran and Hadith, then check them with a certified scholar." CTA: "Try 3 free answers" (goes to https://digitalustaz.com/) |
| "Recruitment" | "Digital Interviewer" | "Screens candidates at scale, for hiring teams with many applicants to review." |

**HelloGen block on this page:** "ALPHV HelloGen™" / "Video and voice avatars from a 3-minute clip" / "ALPHV HelloGen™ creates a life-like avatar from a 3-minute clip, and the avatar replies with lip-sync and low latency." Facts: "Starts from" "A 3-minute clip"; "Creates" "A life-like video and voice avatar"; "Replies" "With lip-sync and low latency". Link: "Explore ALPHV HelloGen™".

- **How it works / deployment options:** not stated.
- **Integrations:** not stated. Digital Ustaz runs at digitalustaz.com.
- **Who it is for:**
  - Digital Mamak: "Restaurants"
  - Digital Ustaz: "Islamic knowledge", "Your learning companion"
  - Digital Interviewer: "hiring teams with many applicants to review"
- **Where it fits:** "Where it fits" / "Where ALPHV Avatar™ fits" / "The industry and services around ALPHV’s digital avatars."
  - "Industry Hospitality": "Digital Mamak takes restaurant orders, and ALPHV built an AI CRM with WhatsApp sales agents for a Singapore hospitality group."
  - "Service" "Agentic automation": "Put AI agents to work across your systems, with the tools, MCP servers and APIs they need to act safely."
  - "Service" "AI engineering": "Knowledge integration, fine-tuning and multimodal models, governed for regulated work."
- **Stats:** "Try 3 free answers" (Digital Ustaz offer); "24/7". No usage figures are stated.
- **Customers or deployments named:** Digital Ustaz (https://digitalustaz.com/) is the live deployment. No customers are named for Digital Mamak or Digital Interviewer.

**FAQ:** "Frequently asked questions" / "What ALPHV Avatar™ does, and how it relates to ALPHV HelloGen™."
- **Q: "What can ALPHV Avatar™ do?"**
  A: "It covers three digital avatars. Digital Mamak takes restaurant orders, Digital Ustaz (digitalustaz.com) answers questions about Islam 24/7 from the Al-Quran and Hadith, and Digital Interviewer screens candidates at scale."
- **Q: "How is ALPHV Avatar™ different from ALPHV HelloGen™?"**
  A: "ALPHV Avatar™ is a set of digital avatars built for specific jobs. ALPHV HelloGen™ creates a life-like video and voice avatar from a 3-minute clip, with lip-sync and low-latency replies."
- **Q: "Can we see an avatar working?"**
  A: "Yes. Book a walkthrough through our contact page, or message us on WhatsApp."

**CTA**
- Hero buttons: "Book a walkthrough" (goes to /contact) / "Chat on WhatsApp"
- Closing: "Put a digital avatar to work" / "Request a demo of Digital Mamak or Digital Interviewer, try Digital Ustaz with 3 free answers, or ask us a question on WhatsApp." Buttons: "Request a demo" / "Chat on WhatsApp".

**Photos**
- Hero: https://framerusercontent.com/images/flv9D5ox6KpsEukLUycpONnERM.png, alt "The ALPHV Avatar™ Digital Ustaz interface"
- Social card (og:image): https://framerusercontent.com/assets/UZmRdYqVAzW6DZxR7Au3LHRc2I.png

---

## B5. ALPHV HelloGen™ (https://alphv.com/products/alphv-hellogen, `products__alphv-hellogen`)

- **Product mark:** "ALPHV HelloGen™". Body copy often shortens it to "HelloGen" (see flag 4).
- **Category line:**
  - Hero badge: "ALPHV"
  - Index category: "Video and voice avatars"
  - JSON-LD: category "Business software", brand "ALPHV"
- **Page title:** "ALPHV HelloGen™: AI Video & Voice Avatars | ALPHV"
- **Meta description:** "Create a life-like AI video and voice avatar from a 3-minute clip, with lip-sync and low-latency replies. ALPHV HelloGen™ from ALPHV Technologies, Kuala Lumpur."
- **H1:** "A life-like avatar from a 3-minute clip"
- **Lede:** "ALPHV HelloGen™ creates video and voice avatars. Record a 3-minute clip, and you get a life-like avatar that replies with lip-sync and low latency."

**Key facts (hero)**

| Fact | Value |
|---|---|
| "Starts from" | "A 3-minute clip" |
| "Creates" | "A life-like video and voice avatar" |
| "Replies" | "With lip-sync and low latency" |
| "Built by" | "ALPHV, Kuala Lumpur" |

**How it works:** "How it works" / "From one clip to a talking avatar" / "Three steps, from a short recording to an avatar that replies in video and voice."

| Step | Title | Copy |
|---|---|---|
| "01" | "Record a 3-minute clip" | "HelloGen starts from a single 3-minute video clip." |
| "02" | "Your avatar is generated" | "HelloGen generates a life-like video and voice avatar from that clip." |
| "03" | "It replies with lip-sync" | "The avatar replies in video and voice, with lip-sync and low latency." |

- **Features:** as in the key facts and steps above. The index card lists "A life-like avatar from a 3-minute clip"; "Lip-synced video and voice"; "Low-latency replies".
- **Deployment options and integrations:** not stated.
- **Who it is for:** not stated.
- **Where it fits:** "Where it fits" / "Part of ALPHV’s avatar products" / "HelloGen sits alongside ALPHV Avatar™, a set of digital avatars built for specific jobs." It is followed by an ALPHV Avatar™ card: "Digital avatars for orders, answers and interviews" / "Digital Mamak takes restaurant orders, Digital Ustaz answers questions about Islam 24/7 from the Al-Quran and Hadith, and Digital Interviewer screens candidates at scale." Links: "Explore ALPHV Avatar™" / "Explore AI engineering".
- **Stats:** none for HelloGen itself. The page's "Also from ALPHV" block, which is a separate offering, shows "50.1K" "Views on a client reel for @richdadwilliam" and "AI-generated UGC produced by ALPHV". Its copy reads: "Separately from HelloGen, ALPHV produces AI-generated UGC and ads for clients, including a client reel with 50.1K views for @richdadwilliam." CTA: "Ask about AI content". Do not credit this to HelloGen.
- **Customers or deployments named:** not stated.

**FAQ:** "Frequently asked questions" / "What ALPHV HelloGen™ needs, and what the avatar can do."
- **Q: "What do we need to create an avatar?"**
  A: "A 3-minute clip. ALPHV HelloGen™ creates a life-like avatar from it."
- **Q: "Does the avatar speak?"**
  A: "Yes. HelloGen creates video and voice avatars that reply with lip-sync and low latency."
- **Q: "How is HelloGen different from ALPHV Avatar™?"**
  A: "ALPHV Avatar™ is a set of digital avatars built for specific jobs: taking restaurant orders, answering questions about Islam (Digital Ustaz, digitalustaz.com) and screening candidates. HelloGen creates a life-like video and voice avatar from a 3-minute clip."
- **Q: "How do we get started?"**
  A: "Request a demo through our contact page, or message us on WhatsApp."

**CTA**
- Hero buttons: "Request a demo" / "Chat on WhatsApp"
- Closing: "Turn a 3-minute clip into an avatar" / "Request a demo of ALPHV HelloGen™, or ask us a question on WhatsApp."

**Photos.** There is no HelloGen-specific product image on the page.
- The only content image is the ALPHV Avatar™ Digital Ustaz interface, inside the "Where it fits" card: https://framerusercontent.com/images/flv9D5ox6KpsEukLUycpONnERM.png, alt "The ALPHV Avatar™ Digital Ustaz interface"
- Social card (og:image): https://framerusercontent.com/assets/oyus1S18refzWQK7qyeiaZjXo.png
