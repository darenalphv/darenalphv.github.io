// Turns a pasted Instagram or LinkedIn link into the platform's own embed, without an API key.
// Instagram: /reel/<code>/ or /p/<code>/ (optionally after a username) → /<type>/<code>/embed/captioned/
// LinkedIn: any link carrying urn:li:activity|share|ugcPost:<id>, or a /posts/…-activity-<id>-… link
//           → /embed/feed/update/urn:li:<type>:<id>

export interface Embed {
  platform: 'instagram' | 'linkedin' | 'link';
  label: string; // e.g. "Instagram reel"
  site: string; // e.g. "Instagram"
  href: string; // where "Open on …" goes
  embedUrl?: string; // iframe src, when the link can be embedded
}

export function parseEmbed(link: string): Embed {
  let url: URL;
  try {
    url = new URL(link.trim());
  } catch {
    return { platform: 'link', label: 'Link', site: 'the web', href: link };
  }
  const host = url.hostname.replace(/^(www|m)\./, '');
  const path = decodeURIComponent(url.pathname);

  if (host === 'instagram.com' || host === 'instagr.am') {
    const m = path.match(/^\/(?:[^/]+\/)?(reels?|p|tv)\/([A-Za-z0-9_-]+)/);
    if (m) {
      const type = m[1].startsWith('reel') ? 'reel' : m[1];
      const base = `https://www.instagram.com/${type}/${m[2]}/`;
      return {
        platform: 'instagram',
        label: type === 'reel' ? 'Instagram reel' : 'Instagram post',
        site: 'Instagram',
        href: base,
        embedUrl: `${base}embed/captioned/`,
      };
    }
  }

  if (host === 'linkedin.com' || host.endsWith('.linkedin.com')) {
    const urn = path.match(/urn:li:(activity|share|ugcPost):(\d{10,})/) ?? path.match(/-(activity|share|ugcPost)-(\d{10,})/);
    if (urn) {
      return {
        platform: 'linkedin',
        label: 'LinkedIn post',
        site: 'LinkedIn',
        href: link,
        embedUrl: `https://www.linkedin.com/embed/feed/update/urn:li:${urn[1]}:${urn[2]}`,
      };
    }
  }

  return { platform: 'link', label: 'Link', site: host || 'the web', href: link };
}
