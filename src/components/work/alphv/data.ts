// Segment review: ALPHV Group of Companies. Page-level data only.
// Every fact is sourced from .source/content.md (dev reference, not shipped) or from content.ts,
// which is itself sourced from .source/content.md. Notes are numbered from 1 for this page only.

// Notes to the figures, in order of first appearance on the page.
export const pageNotes = [
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (the four companies; DevRel runs Developer Kaki)
  { n: 1, text: 'ALPHV Group of Companies comprises ALPHV Technologies, ALPHV Academy, ALPHV DevRel and ALPHV Recruit. Developer Kaki is a community run through ALPHV DevRel. Source: ALPHV, October 2026.' },
  // Source: .source/content.md "Achievements & recognition" (1st Malaysian 'Global Strategic Partner' of Alibaba Cloud (Feb 2025) and FPT AI Factory)
  { n: 2, text: 'First Malaysian ‘Global Strategic Partner’ of Alibaba Cloud (February 2025) and of FPT AI Factory. Source: Daren Tan, key-personnel deck and LinkedIn.' },
  // Source: .source/content.md "Achievements & recognition" (Three ALPHV entities featured in Konsortium AI Negara 2025)
  { n: 3, text: 'Three ALPHV entities featured in Konsortium AI Negara 2025. Source: Daren Tan, key-personnel deck.' },
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (Selangor AI Hackathon 2026)
  { n: 4, text: 'Selangor AI Hackathon 2026: ALPHV placed 2nd runner-up, third overall, among 26 companies, working a blind dataset on illegal dumping and waste management in three hours. Follow-up focus groups were held with 12 PBTs (local authorities) and Selangor’s waste, water, road and infrastructure departments. Source: ALPHV, 2026.' },
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (Founded Apr 2023, formerly alphatechlabs, co-founder Jeng Yee Khor) and "Experience"
  { n: 5, text: 'Founded in April 2023 by Daren Tan with co-founder Jeng Yee Khor; formerly alphatechlabs. Source: Daren Tan, LinkedIn.' },
  // Source: .source/content.md "Achievements & recognition" (Official Authorized Reseller of FootfallCam & HIKVision (Jan 2025))
  { n: 6, text: 'Official authorised reseller of FootfallCam and HIKVision since January 2025. Source: Daren Tan, LinkedIn.' },
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (Founder's stated mission)
  { n: 7, text: 'The founder’s stated mission for the group, as he wrote it on LinkedIn. Source: Daren Tan, LinkedIn.' },
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (ALPHV Academy: SIDEC, 4 Sep 2026, WIRA AI Training Series 3, full house of 50; PFCC Puchong)
  { n: 8, text: 'WIRA AI Training Series 3 with SIDEC: ‘Introduction to Claude’, 4 September 2026, a full house of 50. ALPHV Academy also delivered ‘Unlocking Productivity with Claude’ at PFCC Puchong. Source: ALPHV Academy, September 2026.' },
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (ALPHV Academy: HRDC-claimable training (since 2023))
  { n: 9, text: 'ALPHV Academy training has been HRDC-claimable since 2023, for engineers, managers and C-suite leaders. Source: ALPHV, October 2026.' },
] as const;

// Segment figures: exactly four, each citing a page note.
export const segmentFigures = [
  // Source: .source/content.md "Case study: ALPHV Group of Companies" (four companies)
  { value: '4', label: 'Group companies', note: 1 },
  // Source: .source/content.md "Achievements & recognition" (1st Malaysian Global Strategic Partner of Alibaba Cloud, Feb 2025)
  { value: '1st', label: 'Malaysian Global Strategic Partner of\u00a0Alibaba\u00a0Cloud', note: 2 },
  // Source: .source/content.md "Achievements & recognition" (three ALPHV entities, Konsortium AI Negara 2025)
  { value: '3', label: 'ALPHV entities in Konsortium AI Negara 2025', note: 3 },
  // Source: .source/content.md "Case study" (2nd runner-up among 26 companies = third place overall)
  { value: '3rd', label: 'Place of 26, Selangor AI Hackathon 2026', note: 4 },
] as const;

// The group, set as a report table. Names and descriptions come from content.ts `group`.
// Source for the roles: content.ts caseStudies line "build, train, convene and hire" and PRODUCT.md Positioning.
export const groupRoles: Record<string, string> = {
  'ALPHV Technologies': 'Build',
  'ALPHV Academy': 'Train',
  'ALPHV DevRel': 'Convene',
  'ALPHV Recruit': 'Hire',
  'Developer Kaki': 'Community',
};

// Two dated accounts of the group's work.
export const accounts = [
  {
    // Source: .source/content.md "Case study: ALPHV Group of Companies" (Selangor AI Hackathon 2026).
    // Source: .source/content.md (ALPHV Technologies LinkedIn post: all-female team; 21 Aug and 9 Sep 2026).
    id: 'hackathon',
    date: 'Aug–Sep 2026',
    title: 'Selangor AI Hackathon',
    body: [
      'An all-female ALPHV team of Nurqistina Damia, Nur Dini Izzaty and Tisha Amadea Susilo was handed a blind dataset on illegal dumping and waste management, and three hours to work with it. They placed 2nd runner-up among 26 companies.',
      'Follow-up focus groups were then held with 12 PBTs (local authorities) and Selangor’s waste, water, road and infrastructure departments.',
    ],
    result: { value: '12', label: 'PBTs in the follow-up focus groups', note: 4 },
  },
  {
    // Source: .source/content.md "Case study: ALPHV Group of Companies" (ALPHV Academy, SIDEC, WIRA AI Training Series 3)
    id: 'training',
    date: 'Sep 2026',
    title: 'Claude training with SIDEC',
    body: [
      'For WIRA AI Training Series 3 with SIDEC, ALPHV Academy delivered ‘Introduction to Claude’ on 4 September 2026 to a full house of 50.',
      'ALPHV Academy also delivered ‘Unlocking Productivity with Claude’ at PFCC Puchong.',
    ],
    result: { value: '50', label: 'Attendees, a full house', note: 8 },
  },
] as const;

// Milestones, in date order.
export const milestones = [
  // Source: .source/content.md "Case study" (Founded Apr 2023, formerly alphatechlabs, co-founder Jeng Yee Khor)
  { date: 'Apr 2023', text: 'ALPHV founded with co-founder Jeng Yee Khor (formerly alphatechlabs)', note: 5 },
  // Source: .source/content.md "Case study" (ALPHV Academy, HRDC-claimable training since 2023)
  { date: '2023', text: 'ALPHV Academy begins HRDC-claimable training', note: 9 },
  // Source: .source/content.md "Achievements & recognition" (Official Authorized Reseller, Jan 2025)
  { date: 'Jan 2025', text: 'Official authorised reseller of FootfallCam and HIKVision', note: 6 },
  // Source: .source/content.md "Achievements & recognition" (Alibaba Cloud, Feb 2025)
  { date: 'Feb 2025', text: 'First Malaysian Global Strategic Partner of Alibaba Cloud', note: 2 },
  // Source: .source/content.md "Achievements & recognition" (Konsortium AI Negara 2025)
  { date: '2025', text: 'Three ALPHV entities featured in Konsortium AI Negara', note: 3 },
  // Source: .source/content.md "Case study" (Selangor AI Hackathon 2026: 21 Aug round, 9 Sep award)
  { date: 'Aug–Sep 2026', text: '2nd runner-up among 26 companies, Selangor AI Hackathon', note: 4 },
  // Source: .source/content.md "Case study" (Introduction to Claude with SIDEC, 4 Sep 2026)
  { date: 'Sep 2026', text: '‘Introduction to Claude’ with SIDEC, WIRA AI Training Series 3', note: 8 },
] as const;
