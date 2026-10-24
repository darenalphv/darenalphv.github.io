// Structured data (schema.org JSON-LD) for search engines and AI assistants: who Daren is, what he
// does and which profiles are his. Built from src/data/content.ts so it never drifts from the page.
import { person, socials, recognition } from '../data/content';

export const SITE = 'https://darentan.my';
export const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const malaysia = { '@type': 'Country', name: 'Malaysia' };

const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: person.name,
  alternateName: 'Tan De Zhern',
  url: `${SITE}/`,
  image: `${SITE}/daren-tan.jpg`,
  jobTitle: 'Founder & CEO',
  description:
    'Daren Tan is a Malaysian AI speaker and trainer, Founder and CEO of ALPHV Group of Companies, which builds AI, data and cloud solutions across Southeast Asia, and founder of Developer Kaki, Malaysia’s largest developer community.',
  worksFor: { '@type': 'Organization', name: person.company },
  hasOccupation: [
    { '@type': 'Occupation', name: 'Founder and CEO', occupationLocation: malaysia },
    { '@type': 'Occupation', name: 'AI speaker', occupationLocation: malaysia },
    { '@type': 'Occupation', name: 'AI trainer', occupationLocation: malaysia },
  ],
  knowsAbout: [
    'Artificial intelligence',
    'Generative AI',
    'Agentic AI',
    'Machine learning',
    'Data science',
    'Cloud computing',
    'Digital transformation',
    'AI training for teams',
    'Developer communities',
    'Hackathons',
  ],
  knowsLanguage: ['en', 'ms'],
  address: { '@type': 'PostalAddress', addressLocality: 'Kuala Lumpur', addressCountry: 'MY' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Multimedia University' },
    { '@type': 'CollegeOrUniversity', name: 'Universiti Tunku Abdul Rahman' },
  ],
  award: recognition.map((r) => `${r.title}, ${r.by} (${r.year})`),
  sameAs: socials.filter((s) => s.label !== 'WhatsApp').map((s) => s.href),
};

const communityNode = {
  '@type': 'Organization',
  '@id': `${SITE}/#developer-kaki`,
  name: 'Developer Kaki',
  description: 'Malaysia’s largest developer community.',
  url: `${SITE}/work/developer-kaki/`,
  founder: { '@id': PERSON_ID },
  foundingDate: '2019-02',
};

const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: person.name,
  inLanguage: 'en-MY',
  publisher: { '@id': PERSON_ID },
};

/** A page node about Daren, e.g. the home page as a ProfilePage. */
export const pageNode = (type: 'ProfilePage' | 'WebPage', path: string, name: string) => ({
  '@type': type,
  '@id': `${SITE}${path}#page`,
  url: `${SITE}${path}`,
  name,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  ...(type === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : {}),
});

/** The full graph for a page, as a string safe to place inside a <script> tag. */
export const graphFor = (extra: object[] = []) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': [websiteNode, personNode, communityNode, ...extra] }).replace(
    /</g,
    '\\u003c',
  );
