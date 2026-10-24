// View counts for the recorded talks. Read from each public YouTube page at build time, so every
// deploy (including each CMS save) refreshes them; if YouTube cannot be reached, the snapshot is used.
import { talks } from '../data/content';

// Snapshot read from YouTube on 24 Oct 2026, used when a build cannot reach YouTube.
const SNAPSHOT: { asOf: Date; views: Record<string, number> } = {
  asOf: new Date('2026-10-24T00:00:00Z'),
  views: {
    UjIK6tLkzZY: 256,
    '_3sm0zq-620': 581,
    '0BVkL-26ZGw': 1004,
    FK6OgNyYpR4: 87,
    PMRyNZWMclU: 77,
    ohfWBAdBiww: 328,
    '2pdrLFn8RUo': 297,
    OtYHCp77dEs: 1237,
    fds4s_FjLlA: 33,
  },
};

export interface TalkViews {
  views: Record<string, number>;
  total: number;
  asOf: Date;
}

async function readViews(id: string): Promise<number | undefined> {
  const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36',
      'accept-language': 'en-US,en;q=0.9',
      cookie: 'CONSENT=YES+1',
    },
    signal: AbortSignal.timeout(8000),
  });
  const match = (await res.text()).match(/"viewCount":"(\d+)"/);
  return match ? Number(match[1]) : undefined;
}

async function load(): Promise<TalkViews> {
  const read = await Promise.all(talks.map((t) => readViews(t.youtube).catch(() => undefined)));
  const live = read.every((v) => typeof v === 'number');
  const views = live
    ? Object.fromEntries(talks.map((t, i) => [t.youtube, read[i] as number]))
    : SNAPSHOT.views;
  const total = talks.reduce((sum, t) => sum + (views[t.youtube] ?? 0), 0);
  return { views, total, asOf: live ? new Date() : SNAPSHOT.asOf };
}

let cached: Promise<TalkViews> | undefined;
export const getTalkViews = () => (cached ??= load());

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const formatAsOf = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
