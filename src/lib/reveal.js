function animateCount(el) {
  const end = parseFloat(el.dataset.count);
  const dec = +(el.dataset.decimals || 0);
  const suf = el.dataset.suffix || '';
  const dur = 1400;
  let t0;
  const step = t => {
    if (t0 === undefined) t0 = t;
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = (end * e).toFixed(dec) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** Plays the entry animations (bar widths, ring dashes, counters…) for everything inside `root`. */
export function activate(root) {
  root.querySelectorAll('[data-w]').forEach(e => (e.style.width = e.dataset.w));
  root.querySelectorAll('[data-h]').forEach((e, i) => { e.style.transitionDelay = i * 30 + 'ms'; e.style.height = e.dataset.h; });
  root.querySelectorAll('[data-dash]').forEach(e => e.setAttribute('stroke-dasharray', e.dataset.dash));
  root.querySelectorAll('.waffle span').forEach(e => e.classList.toggle('on', e.dataset.on === '1'));
  root.querySelectorAll('[data-count]').forEach(e => { if (!e.dataset.done) { e.dataset.done = 1; animateCount(e); } });
}

/** Reveals every `.reveal` element under `root` as it scrolls into view. Returns a cleanup function. */
export function initReveal(root = document) {
  const els = root.querySelectorAll('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => { el.classList.add('in'); activate(el); });
    return () => {};
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      activate(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
  return () => io.disconnect();
}
