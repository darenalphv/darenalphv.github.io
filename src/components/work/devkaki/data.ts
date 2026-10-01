// Developer Kaki segment review: every fact on /work/developer-kaki/.
// Kept beside the page's components (not in src/data/content.ts) so the page owns its own notes.
// Nothing here may be added without a source in .source/content.md.

// Notes to this page's figures, numbered from 1 in order of first appearance.
// Every superscript on the page resolves here.
export const pageNotes = [
  // Source: .source/content.md, "Case study: Developer Kaki" (founded Feb 2019; 72,000+ members;
  // anchored on Facebook, spilling into LinkedIn, WhatsApp, XiaoHongShu and in-person events)
  {
    n: 1,
    text: 'Developer Kaki membership, 72,000+, anchored on its Facebook group and extending to LinkedIn, WhatsApp, XiaoHongShu and in-person events. Founded February 2019. Source: Developer Kaki, October 2026.',
  },
  // Source: .source/content.md, "Case study: Developer Kaki" (curated job postings, 5,000+ roles surfaced)
  {
    n: 2,
    text: 'More than 5,000 roles surfaced through curated job postings shared with the community. Source: Developer Kaki, October 2026.',
  },
  // Source: .source/content.md, "Case study: Developer Kaki" (JOBS by Developer Kaki portal: 5,000
  // registered users; licensed employment agency; evolved from FB group to web portal)
  {
    n: 3,
    text: 'JOBS by Developer Kaki, the community’s web jobs portal, operated under an employment-agency licence: 5,000 registered users. Payments verified through the portal are set out in note 4. Source: JOBS by Developer Kaki, October 2026.',
  },
  // Source: .source/content.md, "Case study: Developer Kaki" (MYR50.5k verified transacted via
  // payment gateway (Payex-Xendit) 2023–2026)
  {
    n: 4,
    text: 'MYR 50.5k in transactions on JOBS by Developer Kaki, verified through the Payex-Xendit payment gateway, 2023 to 2026. Source: JOBS by Developer Kaki.',
  },
  // Source: Daren Tan's LinkedIn, his own description of Developer Kaki (quoted with attribution;
  // supplied with the page brief, not yet recorded in .source/content.md)
  {
    n: 5,
    text: '“The most candid tech career signal in Malaysia”: Daren Tan’s own description of Developer Kaki. Source: Daren Tan, LinkedIn.',
  },
  // Source: .source/content.md, "Case study: Developer Kaki" ("Build with IBM Bob + Mini Hackathon"
  // with IBM & Tec D Malaysia, 28 Sep 2026, Plaza IBM, 100 seats)
  {
    n: 6,
    text: '“Build with IBM Bob + Mini Hackathon”, held with IBM and Tec D Malaysia at Plaza IBM on 28 September 2026, with 100 seats.',
  },
  // Source: .source/content.md, "Achievements & recognition" (Co-Founder, Hackathon Kaki,
  // 10,200+ members, est. Sep 2017)
  {
    n: 7,
    text: 'Hackathon Kaki, co-founded by Daren Tan in September 2017: 10,200+ members. Source: Hackathon Kaki, October 2026.',
  },
] as const;

// The segment figures strip: exactly four, each citing a page note.
// "MYR 50.5k" is too wide for the strip at phone width, so the currency moves into the label.
export const segmentFigures = [
  // Source: .source/content.md, "Case study: Developer Kaki" (72,000+ members)
  { value: '72,000+', label: 'Members', note: 1 },
  // Source: .source/content.md, "Case study: Developer Kaki" (5,000+ roles surfaced)
  { value: '5,000+', label: 'Roles surfaced through curated job postings', note: 2 },
  // Source: .source/content.md, "Case study: Developer Kaki" (JOBS by Developer Kaki: 5,000 registered users)
  { value: '5,000', label: 'Registered users on JOBS by Developer Kaki', note: 3 },
  // Source: .source/content.md, "Case study: Developer Kaki" (MYR50.5k verified via Payex-Xendit, 2023–2026)
  { value: '50.5k', label: 'MYR verified through the jobs portal', note: 4 },
] as const;

// DevRel partners, set as plain type (no logos).
// Source: .source/content.md, "Case study: Developer Kaki" (DevRel with TNG Digital, Alibaba Cloud, AWS, Microsoft)
export const partners = ['TNG Digital', 'Alibaba Cloud', 'AWS', 'Microsoft'] as const;

// The most recent community event on record.
// Source: .source/content.md, "Case study: Developer Kaki"
export const event = {
  title: 'Build with IBM Bob + Mini Hackathon',
  with: 'IBM and Tec D Malaysia',
  date: '28 September 2026',
  venue: 'Plaza IBM',
  seats: '100',
  note: 6,
} as const;

// The sister community.
// Source: .source/content.md, "Achievements & recognition" (Hackathon Kaki, 10,200+ members, est. Sep 2017)
export const sister = {
  name: 'Hackathon Kaki',
  since: 'September 2017',
  members: '10,200+',
  note: 7,
} as const;

// Milestones. Only sourced dates.
export const milestones = [
  // Source: .source/content.md, "Achievements & recognition" (Hackathon Kaki est. Sep 2017)
  { date: 'Sep 2017', text: 'Daren co-founds Hackathon Kaki, the sister community to Developer Kaki.', note: 7 },
  // Source: .source/content.md, "Case study: Developer Kaki" (Founded Feb 2019)
  { date: 'Feb 2019', text: 'Daren founds Developer Kaki as a Facebook group.', note: 1 },
  // Source: .source/content.md, "Case study: Developer Kaki" (evolved from FB group to web portal;
  // and Daren's post: B2B/manual transfers ran 2023–2025 while the FB group transitioned to the web portal)
  { date: '2023–2025', text: 'Jobs move from the Facebook group to a web portal, JOBS by Developer Kaki, with payments through the Payex-Xendit gateway.', note: 4 },
  // Source: .source/content.md, "Case study: Developer Kaki" (5,000 registered users; MYR50.5k verified 2023–2026)
  { date: '2026', text: 'JOBS by Developer Kaki reaches 5,000 registered users and MYR 50.5k in verified payments.', note: 3 },
  // Source: .source/content.md, "Case study: Developer Kaki" (28 Sep 2026, Plaza IBM, 100 seats)
  { date: 'Sep 2026', text: 'Build with IBM Bob + Mini Hackathon, with IBM and Tec D Malaysia at Plaza IBM: 100 seats.', note: 6 },
] as const;
