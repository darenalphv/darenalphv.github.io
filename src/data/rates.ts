// Rates and terms for the unlisted booking pages, /book/malaysia/ and /book/international/.
// Shared by link only: no page links here, and the two markets never link to each other.
// Set by Daren on 2026-10-26 from a review of his profile against market benchmarks (.source/content.md).

export const BOOKING_EMAIL = 'daren@alphv.com';

export type Option = {
  id: string;
  name: string;
  detail: string;
  amount: number;
  unit: string;
  // shown as "From …" when the price is a floor rather than fixed
  from?: boolean;
};

export type Service = {
  id: 'consulting' | 'workshops' | 'keynotes';
  name: string;
  sub: string;
  intro: string;
  topicsLabel: string;
  topics: ReadonlyArray<{ title: string; where?: string }>;
  options: Option[];
  footnote?: string;
};

export type Market = {
  slug: 'malaysia' | 'international';
  // currency as printed before each amount
  currency: 'RM' | 'USD';
  period: string;
  line: string;
  description: string;
  services: Service[];
  terms: ReadonlyArray<{ label: string; value: string }>;
};

const consulting = {
  id: 'consulting',
  name: 'Consulting',
  sub: 'One-to-one advice, by the hour',
  intro:
    'Direct advice for founders and leadership teams on AI and digital transformation, from someone whose company builds and runs these systems.',
  topicsLabel: 'Typical questions',
  topics: [
    { title: 'Which AI use cases to fund first, and which to drop' },
    { title: 'Solution architecture and build-or-buy reviews' },
    { title: 'Technical due diligence for investors and accelerators' },
    { title: 'LLM costs, governance and shadow AI' },
  ],
} as const;

const workshops = {
  id: 'workshops',
  name: 'Workshops',
  sub: 'Facilitated sessions for your team',
  intro:
    'Working sessions for leadership and delivery teams. Each one ends with something the team can use: a ranked list of use cases, a roadmap or a working prototype.',
  topicsLabel: 'Formats',
  topics: [
    { title: 'AI strategy and use-case discovery' },
    { title: 'Digital transformation roadmap' },
    { title: 'AI-led design thinking, from problem to prototype' },
    { title: 'Hands-on: build a working AI agent' },
  ],
} as const;

// Talk titles are Daren's own, from .source/content.md (Past talks, On air).
const keynotes = {
  id: 'keynotes',
  name: 'Keynotes',
  sub: 'Talks for conferences and company events',
  intro:
    'Keynotes, panels and fireside chats on applied AI, shaped to your audience and theme.',
  topicsLabel: 'Recent talks',
  topics: [
    { title: 'Building Scalable & Autonomous Systems in ASEAN via Agentic AI & MCPs', where: 'ASEAN AI Malaysia Summit 2025' },
    { title: 'AI for Insurance Superagents', where: 'Great Eastern New Gen Awards 2026' },
    { title: 'Shadow AI & the True Cost of LLMs', where: 'BFM 89.9 Tech Talk, 2026' },
  ],
} as const;

export const markets: Market[] = [
  {
    slug: 'malaysia',
    currency: 'RM',
    period: '2026 rates · Malaysia',
    line: 'Consulting, workshops and keynotes on AI and digital transformation, for organisations in Malaysia.',
    description:
      'Rates and booking for Daren Tan’s consulting, workshops and keynotes on AI and digital transformation, for organisations in Malaysia.',
    services: [
      {
        ...consulting,
        options: [
          { id: 'consult-session', name: 'Advisory session', detail: 'One hour, online or at your office in the Klang Valley.', amount: 1200, unit: 'per session' },
          { id: 'consult-package', name: '10-hour package', detail: 'Ten hours to use within three months, booked as you need them.', amount: 9500, unit: 'per package' },
          { id: 'consult-retainer', name: 'Monthly advisory', detail: 'Up to eight hours a month, with a three-month minimum.', amount: 7500, unit: 'per month' },
        ],
      },
      {
        ...workshops,
        options: [
          { id: 'workshop-half', name: 'Half day', detail: 'Four hours, for up to 25 participants.', amount: 6000, unit: 'per group' },
          { id: 'workshop-full', name: 'Full day', detail: 'Seven hours, for up to 25 participants.', amount: 10500, unit: 'per group' },
          { id: 'workshop-exec', name: 'Executive or custom programme', detail: 'For boards and C-suite teams, or a programme designed from scratch.', amount: 14000, unit: 'per day', from: true },
        ],
        footnote: 'Half-day and full-day workshops can run as HRDC-claimable training through ALPHV Academy.',
      },
      {
        ...keynotes,
        options: [
          { id: 'keynote-live', name: 'In-person keynote', detail: 'Up to 45 minutes with Q&A, in the Klang Valley.', amount: 8000, unit: 'per talk', from: true },
          { id: 'keynote-virtual', name: 'Virtual keynote', detail: 'Up to 45 minutes with Q&A, on your platform.', amount: 5000, unit: 'per talk', from: true },
          { id: 'keynote-panel', name: 'Panel or fireside chat', detail: 'Up to 60 minutes, in person or virtual.', amount: 3500, unit: 'per session', from: true },
        ],
      },
    ],
    terms: [
      { label: 'Prices', value: 'In ringgit, excluding SST. Valid to 31 December 2026.' },
      { label: 'Travel', value: 'Included within the Klang Valley. Elsewhere in Malaysia, travel and accommodation are billed at cost.' },
      { label: 'Payment', value: 'A 50% deposit confirms the date, and the balance is due within 14 days of delivery. Retainers are billed monthly in advance.' },
      { label: 'Changes', value: 'Reschedule at least 14 days ahead and the deposit moves to the new date. A cancellation within 14 days forfeits the deposit.' },
      { label: 'Groups', value: 'Workshop prices cover up to 25 participants. Larger groups are quoted separately.' },
      { label: 'Language', value: 'English or Bahasa Malaysia.' },
    ],
  },
  {
    slug: 'international',
    currency: 'USD',
    period: '2026 rates · International',
    line: 'Consulting, workshops and keynotes on AI and digital transformation, for organisations outside Malaysia.',
    description:
      'Rates and booking for Daren Tan’s consulting, workshops and keynotes on AI and digital transformation, for organisations outside Malaysia.',
    services: [
      {
        ...consulting,
        options: [
          { id: 'consult-session', name: 'Advisory session', detail: 'One hour, online.', amount: 400, unit: 'per session' },
          { id: 'consult-package', name: '10-hour package', detail: 'Ten hours to use within three months, booked as you need them.', amount: 3300, unit: 'per package' },
          { id: 'consult-retainer', name: 'Monthly advisory', detail: 'Up to eight hours a month, with a three-month minimum.', amount: 2500, unit: 'per month' },
        ],
      },
      {
        ...workshops,
        options: [
          { id: 'workshop-half', name: 'Half day', detail: 'Four hours, for up to 25 participants.', amount: 3000, unit: 'per group' },
          { id: 'workshop-full', name: 'Full day', detail: 'Seven hours, for up to 25 participants.', amount: 5000, unit: 'per group' },
          { id: 'workshop-exec', name: 'Executive or custom programme', detail: 'For boards and C-suite teams, or a programme designed from scratch.', amount: 7000, unit: 'per day', from: true },
        ],
      },
      {
        ...keynotes,
        options: [
          { id: 'keynote-live', name: 'In-person keynote', detail: 'Up to 45 minutes with Q&A, plus travel.', amount: 5000, unit: 'per talk', from: true },
          { id: 'keynote-virtual', name: 'Virtual keynote', detail: 'Up to 45 minutes with Q&A, on your platform.', amount: 2500, unit: 'per talk', from: true },
          { id: 'keynote-panel', name: 'Panel or fireside chat', detail: 'Up to 60 minutes, in person or virtual.', amount: 1500, unit: 'per session', from: true },
        ],
      },
    ],
    terms: [
      { label: 'Prices', value: 'In US dollars, net of withholding tax and bank charges. Valid to 31 December 2026.' },
      { label: 'Travel', value: 'Return flights, accommodation and ground transport are booked by you or billed at cost.' },
      { label: 'Payment', value: 'A 50% deposit confirms the date, and the balance is due within 14 days of delivery. Retainers are billed monthly in advance.' },
      { label: 'Changes', value: 'Reschedule at least 14 days ahead and the deposit moves to the new date. A cancellation within 14 days forfeits the deposit.' },
      { label: 'Groups', value: 'Workshop prices cover up to 25 participants. Larger groups are quoted separately.' },
      { label: 'Time zone', value: 'Based in Kuala Lumpur (GMT+8). Online sessions are scheduled to suit your team.' },
    ],
  },
];

// "RM 10,500", "USD 5,000"
export const price = (market: Market, amount: number) => `${market.currency} ${amount.toLocaleString('en-US')}`;

// Notes to the figures in the booking pages' track record, numbered from 1 for these pages only.
// Texts follow content.ts notes 4, 5 and 9 and the ALPHV segment review's notes 11 and 12.
export const bookNotes = [
  { n: 1, text: '2026 programmes: Great Eastern (more than 500 agency leaders), Amway Malaysia and Silverlake Axis. Source: ALPHV, October 2026.' },
  { n: 2, text: 'A SIDEC workshop at which each of 150 SME participants built a working AI agent. Source: ALPHV, October 2026.' },
  { n: 3, text: 'More than 30 invited talks, alongside 20+ hackathon judging panels and 10 hackathon podium finishes.' },
  { n: 4, text: 'Technical AI keynote, ASEAN AI Summit 2025, to more than 200 attendees. Source: Daren Tan, LinkedIn, October 2026.' },
  { n: 5, text: 'First Malaysian ‘Global Strategic Partner’ of Alibaba Cloud (February 2025) and of FPT AI Factory.' },
] as const;
