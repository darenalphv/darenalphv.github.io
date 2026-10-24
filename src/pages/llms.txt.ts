// llms.txt: a plain-text summary of the site for AI assistants (https://llmstxt.org).
// Built from src/data/content.ts and the media kit's full bio, so it stays in step with the pages.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { person, keyFigures, recognition, articles, talks, LINKEDIN } from '../data/content';

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).toString();
  const fullBio = (await getCollection('bios')).find((b) => b.id === 'full')?.body?.trim() ?? person.summary;

  const text = `# ${person.name}

> ${person.name} (Tan De Zhern) is a Malaysian AI speaker and trainer based in ${person.location}: ${person.role} of ${person.company}, and founder of Developer Kaki, Malaysia’s largest developer community.

${fullBio}

## Key figures

${keyFigures.map((f) => `- ${f.label}: ${f.value}`).join('\n')}

## Speaking and training

- More than 30 invited talks, including the technical AI keynote at the ASEAN AI Summit 2025.
- AI training for engineers, managers and C-suite teams through ALPHV Academy (HRDC-claimable).
- Recorded talks: ${talks.map((t) => `"${t.title}" (${t.venue}, ${t.date})`).join('; ')}.

## Recognition

${recognition.map((r) => `- ${r.year}: ${r.title} (${r.by})`).join('\n')}

## Pages

- [Home](${url('/')}): profile, key figures, group structure, recognition and media.
- [Media kit](${url('/media-kit/')}): speaker bios to copy and speaker photos to download, for event organisers.
- [ALPHV Group of Companies](${url('/work/alphv-group/')}): segment review of the group.
- [Developer Kaki](${url('/work/developer-kaki/')}): segment review of the community.

## In the press

${articles.map((a) => `- [${a.title}](${a.url}), ${a.outlet}, ${a.date}`).join('\n')}

## Contact

- [LinkedIn](${LINKEDIN})
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
