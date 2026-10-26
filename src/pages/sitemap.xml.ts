// sitemap.xml, built from the pages in src/pages so new pages are listed without editing this file.
import type { APIRoute } from 'astro';

// The booking pages under ./book/ are unlisted: shared by link only, so they stay out of the sitemap.
const pages = Object.keys(import.meta.glob('./**/*.astro')).filter((file) => !file.startsWith('./book/'));

// "./index.astro" → "/", "./media-kit.astro" → "/media-kit/", "./work/alphv-group.astro" → "/work/alphv-group/"
const pathFor = (file: string) => file.slice(1).replace(/index\.astro$/, '').replace(/\.astro$/, '/');

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(pathFor)
    .sort()
    .map((path) => `  <url><loc>${new URL(path, site)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
