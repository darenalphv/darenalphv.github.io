// Public appearances carousel: previous/next by one card, and click-to-load embeds.
// The Instagram or LinkedIn iframe is created only when the visitor asks for it.

export function mountCarousels() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    const prev = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (!track || !prev || !next) return;

    const step = () => {
      const card = track.querySelector<HTMLElement>(':scope > li');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    };

    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
      carousel.toggleAttribute('data-static', max <= 0);
    };

    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();

    carousel.querySelectorAll<HTMLButtonElement>('[data-embed-load]').forEach((button) => {
      button.addEventListener('click', () => {
        const stage = button.closest<HTMLElement>('[data-embed-stage]');
        if (!stage) return;
        const frame = document.createElement('iframe');
        frame.src = button.dataset.embedLoad!;
        frame.title = button.dataset.embedTitle ?? 'Embedded post';
        frame.allow = 'encrypted-media; picture-in-picture; fullscreen; clipboard-write';
        frame.setAttribute('allowfullscreen', '');
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        stage.classList.add('is-loaded');
        stage.replaceChildren(frame);
        frame.focus();
      });
    });
  });
}
