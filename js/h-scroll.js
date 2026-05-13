/* ============================================
   HORIZONTAL PINNED SCROLL
   Replicates GSAP ScrollTrigger horizontal
   scroll behavior — pure vanilla JS.

   How it works:
   1. #projects-pin gets extra height = total
      horizontal scroll distance
   2. #projects-sticky is position:sticky top:0
      so it stays in viewport
   3. As user scrolls through the extra height,
      we convert vertical progress → translateX
      on the card track
   ============================================ */

export function initHScroll() {
  const pin      = document.getElementById('projects-pin');
  const sticky   = document.getElementById('projects-sticky');
  const track    = document.querySelector('.h-track');
  const fill     = document.querySelector('.projects-progress-fill');

  if (!pin || !sticky || !track) return;

  // On mobile, skip pinning — use native horizontal scroll
  if (window.innerWidth <= 768) {
    track.style.overflowX = 'auto';
    return;
  }

  let ticking = false;

  function setup() {
    if (window.innerWidth <= 768) return;

    const trackW    = track.scrollWidth;           // total width of all cards + gaps
    const viewportW = window.innerWidth;
    const scrollDist = trackW - viewportW + 96;    // 96 = left padding (3rem * 2)

    // Give the pin wrapper enough height to scroll through
    pin.style.height = `${window.innerHeight + scrollDist}px`;

    return scrollDist;
  }

  function update() {
    const scrollDist = track.scrollWidth - window.innerWidth + 96;
    const pinRect    = pin.getBoundingClientRect();
    const pinTop     = pinRect.top;   // positive = below viewport top, negative = above

    // Progress: 0 when section enters, 1 when fully scrolled
    const progress = Math.max(0, Math.min(1, -pinTop / scrollDist));

    // Translate track left
    const tx = progress * scrollDist;
    track.style.transform = `translateX(${-tx}px)`;

    // Progress bar
    if (fill) fill.style.width = `${progress * 100}%`;

    // Active card highlight
    const cards = track.querySelectorAll('.h-card');
    const cardW = cards[0] ? cards[0].offsetWidth + 24 : 400; // 24 = gap
    const activeIdx = Math.round(tx / cardW);
    cards.forEach((card, i) => {
      card.style.opacity = Math.abs(i - activeIdx) > 2 ? '0.5' : '1';
      card.style.transition = 'opacity 0.4s';
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function onResize() {
    if (window.innerWidth <= 768) {
      pin.style.height = '';
      track.style.transform = '';
      return;
    }
    setup();
    update();
  }

  setup();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  update();
}
