// Motion grammar for The Annual Report. Everything is visible without this file; it only adds
// one authored cover entrance, figures that roll digit by digit in fixed tabular positions,
// group-structure connectors that draw, quiet row reveals, and Lenis scroll.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'expo.out';

function smoothScroll() {
  if (reduce) return;
  const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // in-page anchors land below the sticky header
  document.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link || link.origin !== location.origin || link.pathname !== location.pathname) return;
    const target = link.hash && document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    lenis.scrollTo(target as HTMLElement, { offset: -((header?.offsetHeight ?? 0) + 16) });
    history.pushState(null, '', link.hash);
  });
}

function coverEntrance() {
  const plate = document.querySelector<HTMLElement>('[data-cover-plate]');
  if (!plate || reduce) return;
  const name = plate.querySelector('.name');
  const lines = plate.querySelectorAll('.period, .title span, .caption');
  const field = plate.querySelector('[data-cover-field]');
  const tl = gsap.timeline({ defaults: { ease: EASE } });
  if (field) tl.from(field, { opacity: 0, duration: 2.4, ease: 'power2.out' }, 0);
  if (name) tl.from(name, { yPercent: 18, clipPath: 'inset(0 0 100% 0)', duration: 1.1 }, 0.05);
  tl.from(lines, { y: 14, opacity: 0, duration: 0.9, stagger: 0.07 }, 0.3);
}

// Each digit becomes a column of 0–9 that rolls to its value; separators stay put.
function rollFigures() {
  const figures = document.querySelectorAll<HTMLElement>('[data-figure] .digits');
  figures.forEach((el) => {
    const text = el.textContent ?? '';
    el.setAttribute('aria-label', text);
    el.textContent = '';
    const columns: { strip: HTMLElement; digit: number }[] = [];
    for (const ch of text) {
      if (/\d/.test(ch)) {
        const cell = document.createElement('span');
        cell.className = 'roll-cell';
        cell.setAttribute('aria-hidden', 'true');
        const strip = document.createElement('span');
        strip.className = 'roll-strip';
        strip.textContent = '0123456789';
        cell.append(strip);
        el.append(cell);
        columns.push({ strip, digit: Number(ch) });
      } else {
        const sep = document.createElement('span');
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = ch;
        el.append(sep);
      }
    }
    const land = () => columns.forEach(({ strip, digit }) => gsap.set(strip, { yPercent: -digit * 10 }));
    if (reduce) {
      land();
      return;
    }
    columns.forEach(({ strip }) => gsap.set(strip, { yPercent: 0 }));
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () =>
        columns.forEach(({ strip, digit }, i) =>
          gsap.to(strip, {
            yPercent: -digit * 10,
            duration: 1.1 + (columns.length - i) * 0.12,
            ease: 'power4.out',
            delay: 0.15,
          }),
        ),
    });
  });
}

function drawStructure() {
  const chart = document.querySelector<HTMLElement>('[data-structure-chart]');
  if (!chart || reduce) return;
  const stem = chart.querySelector('.stem');
  const buses = chart.querySelectorAll('.bus');
  const drops = chart.querySelectorAll('.drop');
  const nodes = chart.querySelectorAll('.members .node');
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: { trigger: chart, start: 'top 85%', once: true },
  });
  if (stem) tl.from(stem, { scaleY: 0, transformOrigin: '50% 0%', duration: 0.35 });
  tl.from(buses, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.7, stagger: 0.45 }, '>-0.05');
  tl.from(drops, { scaleY: 0, transformOrigin: '50% 0%', duration: 0.3, stagger: 0.12 }, '<0.1');
  tl.from(nodes, { opacity: 0, y: 8, duration: 0.6, stagger: 0.12, ease: EASE }, '<0.1');
}

// Strong report rules draw across as their block arrives.
function drawRules() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-draw]').forEach((rule) => {
    if (rule.closest('[data-structure-chart]')) return;
    gsap.from(rule, {
      scaleX: 0,
      transformOrigin: '0% 50%',
      duration: 1.1,
      ease: EASE,
      scrollTrigger: { trigger: rule, start: 'top 90%', once: true },
    });
  });
}

function revealRows() {
  if (reduce) return;
  const groups = new Map<Element, HTMLElement[]>();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const parent = el.parentElement ?? document.body;
    groups.set(parent, [...(groups.get(parent) ?? []), el]);
  });
  groups.forEach((items, parent) => {
    gsap.from(items, {
      opacity: 0,
      y: 12,
      duration: 0.8,
      ease: EASE,
      stagger: 0.05,
      scrollTrigger: { trigger: parent, start: 'top 88%', once: true },
    });
  });
}

function headerRule() {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  if (!header) return;
  ScrollTrigger.create({
    start: 'top -40',
    onToggle: (self) => header.toggleAttribute('data-scrolled', self.isActive),
  });
}

smoothScroll();
coverEntrance();
rollFigures();
drawStructure();
drawRules();
revealRows();
headerRule();
