import { initTheme }    from './theme.js';
import { initLang }     from './lang.js';
import { initParallax } from './parallax.js';
import { initNav }      from './nav.js';
import { initReveal }   from './reveal.js';
import { initCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initParallax();
  initNav();
  initReveal();
  initCarousel();
});
