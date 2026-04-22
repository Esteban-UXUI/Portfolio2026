/* ============================================
   PARALLAX ENGINE
   ============================================ */

const parallaxEls = [];

export function initParallax() {
  document.querySelectorAll('[data-speed]').forEach(el => {
    parallaxEls.push({ el, speed: parseFloat(el.dataset.speed), type: 'hero' });
  });

  document.querySelectorAll('.section-bg-text').forEach(el => {
    parallaxEls.push({ el, speed: parseFloat(el.dataset.speed || 0.05), type: 'section', section: el.closest('section') });
  });

  const dotSections = ['#about', '#clients', '#experience'];
  dotSections.forEach(sel => {
    const sec = document.querySelector(sel);
    if (!sec) return;
    const container = document.createElement('div');
    container.className = 'parallax-dots';
    sec.prepend(container);
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement('div');
      dot.className = 'pdot';
      const x = Math.random() * 100, y = Math.random() * 100;
      const speed = 0.03 + Math.random() * 0.12;
      const size = 1 + Math.random() * 3;
      dot.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;`;
      container.appendChild(dot);
      parallaxEls.push({ el: dot, speed, type: 'section', section: sec });
    }
  });

  let ticking = false, lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => { applyParallax(lastScrollY); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  applyParallax(window.scrollY);
}

function applyParallax(sy) {
  parallaxEls.forEach(({ el, speed, type, section }) => {
    let translateY = 0;
    if (type === 'hero') {
      translateY = -(sy * speed);
    } else if (type === 'section' && section) {
      const rect = section.getBoundingClientRect();
      translateY = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
    }
    el.style.transform = `translateY(${translateY}px)`;
  });
}
