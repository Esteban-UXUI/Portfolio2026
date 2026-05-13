import { initTheme }        from './theme.js';
import { initLang }         from './lang.js';
import { initHeroCanvas }   from './hero-canvas.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initParallax }     from './parallax.js';
import { initNav }          from './nav.js';
import { initReveal }       from './reveal.js';
import { initCarousel }     from './carousel.js';
import { initHScroll }      from './h-scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initHeroCanvas();
  initSmoothScroll();
  initParallax();
  initNav();
  initReveal();
  initCarousel();
  initHScroll();
});
