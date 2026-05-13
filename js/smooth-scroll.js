/* ============================================
   SCROLL SKEW EFFECT
   Sections skew on scroll velocity.
   Inner content counter-skews so text is
   always straight — only the section border/
   background warps.
   ============================================ */

export function initSmoothScroll() {
  const sections = document.querySelectorAll(
    '#about, #skills, #projects, #clients, #experience'
  );

  // Inner content selectors — these counter-skew
  const innerSelectors = [
    '#about .about-grid', '#about .section-label', '#about .section-bg-text',
    '#skills .skills-grid', '#skills .section-label', '#skills .section-bg-text',
    '#projects .section-header', '#projects .projects-bento', '#projects .section-bg-text',
    '#clients .clients-header', '#clients .logo-carousel-wrap', '#clients .section-bg-text',
    '#experience .exp-list', '#experience .section-label', '#experience .section-bg-text',
  ];

  const inners = innerSelectors
    .map(s => document.querySelector(s))
    .filter(Boolean);

  let lastScrollY = window.scrollY;
  let currentSkew = 0;
  let targetSkew  = 0;
  let ticking     = false;
  const SKEW_MAX  = 3.5;   // max degrees
  const SKEW_EASE = 0.1;   // how fast skew decays back to 0

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, mn, mx) { return Math.min(Math.max(v, mn), mx); }

  function update() {
    const scrollY = window.scrollY;
    const delta   = scrollY - lastScrollY;
    lastScrollY   = scrollY;

    // Velocity maps to skew — down = negative skew, up = positive
    targetSkew = clamp(-delta * 0.18, -SKEW_MAX, SKEW_MAX);

    // Decay target toward 0
    targetSkew = lerp(targetSkew, 0, 0.35);

    // Smooth current toward target
    currentSkew = lerp(currentSkew, targetSkew, SKEW_EASE + 0.06);

    const skew = parseFloat(currentSkew.toFixed(4));

    // Apply skew to section wrappers
    sections.forEach(section => {
      section.style.transform = `skewY(${skew}deg)`;
      section.style.transformOrigin = 'center center';
    });

    // Counter-skew inner content so text stays upright
    inners.forEach(el => {
      el.style.transform = `skewY(${-skew}deg)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Cleanup on resize
  window.addEventListener('resize', () => {
    sections.forEach(s => { s.style.transform = ''; });
    inners.forEach(el => { el.style.transform = ''; });
    currentSkew = 0;
    targetSkew  = 0;
  });
}
