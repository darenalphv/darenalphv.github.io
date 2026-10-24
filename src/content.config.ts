import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS saves an emptied optional field as "", so read "" as not set.
const blank = (v: unknown) => (v === '' ? undefined : v);

// Public appearances, managed in Pages CMS (.pages.yml). One Markdown file per appearance.
// A pasted Instagram or LinkedIn link is turned into an official embed by src/lib/embeds.ts;
// an appearance without a link (a talk with only stage photos) shows its poster alone.
// `precision` says how much of `date` is known: the card shows "2 Nov 2024", "Apr 2024" or "2024".
const appearances = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/appearances' }),
  schema: z.object({
    title: z.string(),
    url: z.preprocess(blank, z.string().url().optional()),
    event: z.string().optional(),
    date: z.coerce.date(),
    precision: z.preprocess(blank, z.enum(['day', 'month', 'year']).default('day')),
    poster: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Media kit (/media-kit/), also in Pages CMS. Bios: one file per version, the text is the body.
const bios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bios' }),
  schema: z.object({
    label: z.string(),
    note: z.preprocess(blank, z.string().optional()),
    order: z.number().default(0),
  }),
});

// Speaker photos: `image` is "/speaker-photos/<file>" from the CMS, matched to src/assets/speaker-photos.
const speakerPhotos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/speaker-photos' }),
  schema: z.object({
    caption: z.string(),
    image: z.string(),
    credit: z.preprocess(blank, z.string().optional()),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { appearances, bios, speakerPhotos };
