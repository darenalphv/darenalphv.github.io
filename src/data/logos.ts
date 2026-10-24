// Organisation → logo file in assets/logos/. Names match the strings used in content.ts.
// Entries without a reliable logo are left out and render as a lettered tile.
const LOGOS: Record<string, string> = {
  // Experience
  'ALPHV Group of Companies': 'alphv.png',
  'Growth Charger': 'growth-charger.png',
  BASF: 'basf.png',
  'Forward School': 'forward-college.png',
  MaGIC: 'magic.png',
  'Multimedia University': 'mmu.png',
  // Qualifications and certifications
  'Universiti Tunku Abdul Rahman': 'utar.png',
  'University of Cambridge': 'cambridge.png',
  Microsoft: 'microsoft.png',
  Anthropic: 'anthropic.png',
  'Malaysian Mensa': 'mensa.png',
  // Recognition
  Favikon: 'favikon.png',
  'ASEAN Young Entrepreneurs Council': 'ayec.png',
  'Top 30 Media': 'top30-media.png',
  'Alibaba Cloud': 'alibaba-cloud.png',
  'OCBC Bank': 'ocbc.png',
  'APICTA Malaysia': 'apicta.png',
  Maybank: 'maybank.png',
  AngelHack: 'angelhack.png',
  MDEC: 'mdec.png',
  // Media coverage
  'The Star': 'the-star.png',
  'BFM 89.9': 'bfm.png',
  'Malay Mail': 'malay-mail.png',
  'Digital News Asia': 'digital-news-asia.png',
};

export const logoFor = (name: string): string | undefined => LOGOS[name];
