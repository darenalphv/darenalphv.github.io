// Single source of truth for every fact on the site.
// Everything here is sourced (see .source/content.md); nothing may be added without a source.

export const LINKEDIN = 'https://www.linkedin.com/in/daren-tan/';
// Direct line to Daren on WhatsApp (+60 16-518 7740), added at Daren's request.
export const WHATSAPP = 'https://wa.me/60165187740';

export const person = {
  name: 'Daren Tan',
  role: 'Founder & Chief Executive Officer',
  company: 'ALPHV Group of Companies',
  location: 'Kuala Lumpur, Malaysia',
  summary:
    'Daren Tan leads ALPHV Group of Companies, which builds AI, data and cloud solutions for businesses across Southeast Asia, and founded Developer Kaki, Malaysia’s largest developer community.',
};

// Notes to the figures. Every figure on the site cites one of these by number.
export const notes = [
  { n: 1, text: 'Developer Kaki membership, 82,000+ across its Facebook community, LinkedIn, WhatsApp and events. Source: Developer Kaki, October 2026.' },
  { n: 2, text: 'ALPHV Group of Companies comprises ALPHV Technologies, ALPHV Academy, ALPHV DevRel and ALPHV Recruit. Source: ALPHV, October 2026.' },
  { n: 3, text: 'Ten years in technology across CTO, data science, teaching and research roles in Singapore, China and Malaysia, 2016 to 2026.' },
  { n: 4, text: 'More than 30 invited talks, alongside 20+ hackathon judging panels and 10 hackathon podium finishes.' },
  { n: 5, text: 'First Malaysian ‘Global Strategic Partner’ of Alibaba Cloud (February 2025) and of FPT AI Factory.' },
  { n: 6, text: 'Three ALPHV entities featured in Konsortium AI Negara 2025.' },
  { n: 7, text: 'Ranked #7 in Favikon’s Top 50 Tech Creators on LinkedIn, Malaysia, 2026.' },
  { n: 8, text: 'Press coverage: eight features in The Star (2016 to 2026) and three interviews on BFM 89.9, each linked in the Media section, October 2026.' },
  { n: 9, text: 'Technical AI keynote, ASEAN AI Summit 2025, to more than 200 attendees. Source: Daren Tan, LinkedIn, October 2026.' },
] as const;

export const keyFigures = [
  { value: '82,000+', label: 'Developer Kaki members', note: 1 },
  { value: '4', label: 'Group companies', note: 2 },
  { value: '10', label: 'Years in technology', note: 3 },
  { value: '30+', label: 'Talks delivered', note: 4 },
] as const;

// Group structure. kind: 'company' = owned, solid line; 'community' = dashed line.
// url: each company's own site (given by Daren, 2026-10-24); Developer Kaki links to its segment review.
export const group = {
  parent: 'ALPHV Group of Companies',
  members: [
    { name: 'ALPHV Technologies', url: 'https://alphv.com', kind: 'company', does: 'Web and mobile, computer vision, data science and engineering, AI/ML and GenAI, DevOps and MLOps, from concept to deployment.' },
    { name: 'ALPHV Academy', url: 'https://academy.alphv.com', kind: 'company', does: 'HRDC-claimable training since 2023 for engineers, managers and C-suite leaders.' },
    { name: 'ALPHV DevRel', url: 'https://devrel.alphv.com', kind: 'company', does: 'Developer relations, campaigns and hackathons with technology partners.' },
    { name: 'ALPHV Recruit', url: 'https://recruit.alphv.com', kind: 'company', does: 'Tech recruitment and headhunting across Malaysia and Southeast Asia.' },
    { name: 'Developer Kaki', url: '/work/developer-kaki/', kind: 'community', does: 'Malaysia’s largest developer community, run through ALPHV DevRel.' },
  ],
} as const;

export const experience = [
  { from: '2023', to: 'Present', org: 'ALPHV Group of Companies', place: 'Kuala Lumpur', role: 'Founder & Chief Executive Officer' },
  { from: '2023', to: '2025', org: 'Growth Charger', place: 'Kuala Lumpur', role: 'Director (Technology)' },
  { from: '2021', to: '2023', org: 'BASF', place: 'Kuala Lumpur', role: 'Digital Transformation Specialist (Data Science)' },
  { from: '2020', to: '2023', org: 'Forward School', place: 'Penang', role: 'Data Science Instructor, then Lead Instructor' },
  { from: '2019', to: '2021', org: 'MGH Hospitality', place: 'Singapore', role: 'Chief Technology Officer' },
  { from: '2019', to: '2021', org: 'MaGIC', place: 'Cyberjaya', role: 'Assistant Manager, Tech & Innovation' },
  { from: '2018', to: '2019', org: 'Wunder Travel', place: 'Singapore', role: 'Chief Technology Officer' },
  { from: '2018', to: '2018', org: 'Bitcurate', place: 'Shanghai', role: 'Chief Technology Officer & Co-Founder' },
  { from: '2017', to: '2018', org: 'BIBIT.COM.MY', place: 'Malaysia', role: 'Technical Specialist' },
  { from: '2016', to: '2020', org: 'Multimedia University', place: 'Cyberjaya', role: 'Research Scholar, TM Big Data Project' },
] as const;

export const communities = [
  { name: 'Developer Kaki', role: 'Founder', since: '2019', size: '82,000+ members' },
  { name: 'Hackathon Kaki', role: 'Co-Founder', since: '2017', size: '10,200+ members' },
] as const;

export const qualifications = [
  { title: 'Master of Science in Information Technology (Data Science) by Research', by: 'Multimedia University', years: '2016–2020' },
  { title: 'Bachelor of Science in Computer Science', by: 'Universiti Tunku Abdul Rahman', years: '2012–2016' },
  { title: 'Digital Disruption: Digital Transformation Strategies', by: 'University of Cambridge', years: '2020' },
] as const;

export const certifications = [
  {
    title: '5× Microsoft Certified',
    org: 'Microsoft',
    by: 'Azure AI Engineer Associate, Azure Data Scientist Associate, Azure Fundamentals, AI Fundamentals, Data Fundamentals',
    years: '2022–2023',
  },
  {
    title: 'Anthropic courses',
    org: 'Anthropic',
    by: 'Building with the Claude API, Claude Code in Action, Introduction to Model Context Protocol',
    years: '2026',
  },
  { title: 'Certified Member', org: 'Malaysian Mensa', by: 'Malaysian Mensa', years: '2024' },
] as const;

export const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Bahasa Malaysia', level: 'Native' },
  { name: 'Mandarin', level: 'Limited working' },
  { name: 'Cantonese', level: 'Limited working' },
  { name: 'Hokkien', level: 'Limited working' },
  { name: 'French', level: 'Limited working' },
] as const;

export const recognition = [
  { year: '2026', title: '#7, Top 50 Tech Creators on LinkedIn, Malaysia', by: 'Favikon' },
  { year: '2025', title: 'ASEAN Young Entrepreneur Award', by: 'ASEAN Young Entrepreneurs Council' },
  { year: '2025', title: 'Top 30 Young Entrepreneur Award', by: 'Top 30 Media' },
  { year: '2025', title: 'First Malaysian Global Strategic Partner', by: 'Alibaba Cloud' },
  { year: '2025', title: 'Three ALPHV entities in Konsortium AI Negara', by: 'Konsortium AI Negara' },
  { year: '2019', title: 'Champion, OCBC × MMU Digithon', by: 'OCBC Bank' },
  { year: '2018', title: 'Silver Award, MMU-Research, Innovation, Commercialization, Entrepreneurship, Showcase (MMU-RICES)', by: 'Multimedia University' },
  { year: '2017', title: '1st Place, TADHack Kuala Lumpur', by: 'TADHack' },
  { year: '2016', title: 'Merit Prize, 17th MSC Malaysia APICTA Awards', by: 'APICTA Malaysia' },
  { year: '2016', title: '1st Runner-Up, Maybank Data Hackathon', by: 'Maybank' },
  { year: '2016', title: '1st Runner-Up, Startup Weekend KL', by: 'Startup Weekend' },
  { year: '2016', title: '2nd Runner-Up, AngelHack KL (Big Data Analytics)', by: 'AngelHack' },
  { year: '2016', title: '4th Place, MDEC Big App Challenge 3.0', by: 'MDEC' },
] as const;

export const press = [
  { name: 'The Star', times: '8×' },
  { name: 'BFM 89.9', times: '3×' },
  { name: 'Malay Mail', times: '' },
  { name: 'Digital News Asia', times: '' },
] as const;

// News articles and interviews featuring Daren (links given by Daren, 2026-10-24; dates from the URLs).
export const articles = [
  { outlet: 'The Star', date: '29 Jun 2026', title: 'The role of AI agents in the workplace: Expectations vs reality', url: 'https://www.thestar.com.my/tech/tech-news/2026/06/29/the-role-of-ai-agents-in-the-workplace-expectations-vs-reality' },
  { outlet: 'The Star', date: '1 Sep 2025', title: 'The rise of vibe coding: Programming made easy with AI', url: 'https://www.thestar.com.my/tech/tech-news/2025/09/01/the-rise-of-vibe-coding-programming-made-easy-with-ai' },
  { outlet: 'The Star', date: '17 Mar 2025', title: 'Coding 101: Is AI rewriting the rules?', url: 'https://www.thestar.com.my/tech/2025/03/17/coding-101-is-ai-rewriting-the-rules' },
  { outlet: 'The Star', date: '10 Feb 2025', title: 'Reporting bugs without backlash: Towards fixing flaws without fear', url: 'https://www.thestar.com.my/tech/tech-news/2025/02/10/reporting-bugs-without-backlash-towards-fixing-flaws-without-fear' },
  { outlet: 'Malay Mail', date: '7 Aug 2024', title: 'Navigating the tech startup challenge: Two technopreneurs share their stories', url: 'https://www.malaymail.com/news/malaysia/2024/08/07/navigating-the-tech-startup-challenge-two-technopreneurs-share-their-stories/145060' },
  { outlet: 'The Star', date: '27 Nov 2023', title: 'Cracking the code: Meet the Malaysians programming a new career path for themselves', url: 'https://www.thestar.com.my/tech/tech-news/2023/11/27/cracking-the-code-meet-the-malaysians-programming-a-new-career-path-for-themselves' },
  { outlet: 'The Star', date: '26 Jun 2023', title: 'Thriving together: How social media is helping communities cultivate connections', url: 'https://www.thestar.com.my/tech/tech-news/2023/06/26/thriving-together-how-social-media-is-helping-communities-cultivate-connections' },
  { outlet: 'The Star', date: '11 Dec 2017', title: 'Hackathon heroes emerge', url: 'https://www.thestar.com.my/metro/metro-news/2017/12/11/hackathon-heroes-emerge-team-of-former-utar-students-take-the-crown-in-tadhack-kl-2017-with-marketin' },
  { outlet: 'The Star', date: '14 Nov 2016', title: 'Former varsity student creates travel app to assist senior citizens and the handicapped', url: 'https://www.thestar.com.my/metro/community/2016/11/14/former-varsity-student-creates-travel-app-to-assist-senior-citizens-and-the-handicapped' },
] as const;

export const appearances = [
  'Technical AI keynote, ASEAN AI Summit 2025 (200+ attendees)',
  'Panelist, Agentic AI Panel, MDEC MDX 2025',
  'Fireside chat, KiniTV, as a local rising tech CEO',
] as const;

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daren-tan/' },
  { label: 'WhatsApp', href: WHATSAPP },
  { label: 'Threads', href: 'https://www.threads.com/@darentandz' },
  { label: 'Instagram', href: 'https://www.instagram.com/darentandz/' },
  { label: 'Facebook', href: 'https://www.facebook.com/heisdaren' },
] as const;

export const onAir = [
  { show: 'Open For Business', title: 'How This Freelancer Dev Built a Fast-Growing Tech Biz', date: '27 Feb 2025', length: '37 min', url: 'https://www.bfm.my/content/podcast/how-this-freelancer-dev-built-a-fast-growing-tech-biz' },
  { show: 'Tech Talk', title: 'Shadow AI & The True Cost Of LLMs', date: '12 Mar 2026', length: '33 min', url: 'https://www.bfm.my/content/podcast/shadow-ai-and-the-true-cost-of-llms' },
  { show: 'Tech Talk', title: '$100K AI Bills? 4 Drivers of Token Bill Shock', date: '19 Mar 2026', length: '34 min', url: 'https://www.bfm.my/content/podcast/dollar100k-ai-bills-4-drivers-of-token-bill-shock' },
] as const;

export const talks = [
  { date: '19 Sep 2025', title: 'Tech, Trust & Tomorrow with ALPHV', venue: 'KiniTV LIVE Fireside Chat, MDEC MDX 2025', youtube: 'UjIK6tLkzZY' },
  { date: '13 Aug 2025', title: 'Building Scalable & Autonomous Systems in ASEAN via Agentic AI & MCPs', venue: 'ASEAN AI Malaysia Summit 2025', youtube: '_3sm0zq-620' },
  { date: '28 Jun 2021', title: 'The ABCs of Hackathons', venue: 'Sunway Tech Club', youtube: '0BVkL-26ZGw' },
  { date: '23 Sep 2020', title: 'Would I Learn Data Science Again — If I Had to Start Over?', venue: 'Forward College', youtube: 'FK6OgNyYpR4' },
  { date: '11 Sep 2020', title: 'How AI Helps Spotify Win in the Music Streaming World', venue: 'Forward College', youtube: 'PMRyNZWMclU' },
  { date: '29 Jul 2020', title: 'Tips on Early Stages of Your Tech Career', venue: 'Developer Student Clubs', youtube: 'ohfWBAdBiww' },
  { date: '6 Jul 2020', title: 'How to Start a Tech Startup', venue: 'HELP Tech Club', youtube: '2pdrLFn8RUo' },
  { date: '25 Jun 2020', title: 'How to Win Hackathons 101', venue: 'Google Developer Student Club UM', youtube: 'OtYHCp77dEs' },
  { date: '28 Apr 2020', title: 'Tips in Early Stages of Your Tech Career', venue: 'Xiamen University Tech Club', youtube: 'fds4s_FjLlA' },
] as const;

export const caseStudies = [
  { slug: 'alphv-group', name: 'ALPHV Group of Companies', line: 'Four companies, one ecosystem: build, train, convene and hire.' },
  { slug: 'developer-kaki', name: 'Developer Kaki', line: 'From a Facebook group to Malaysia’s largest developer community and its own jobs portal.' },
] as const;

export const nav = [
  { label: 'Key Figures', href: '/#key-figures' },
  { label: 'Group Structure', href: '/#group-structure' },
  { label: 'Profile', href: '/#profile' },
  { label: 'Recognition', href: '/#recognition' },
  { label: 'Media', href: '/#media' },
] as const;
