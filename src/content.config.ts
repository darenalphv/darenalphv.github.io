import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Public appearances: Instagram reels and posts, and LinkedIn posts, managed in Pages CMS (.pages.yml).
// One Markdown file per appearance; the pasted link is turned into an official embed by src/lib/embeds.ts.
const appearances = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/appearances' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    event: z.string().optional(),
    date: z.coerce.date(),
    poster: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { appearances };
