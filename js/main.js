/* ============================================
   MAIN ENTRY POINT
   ============================================ */

import { initParallax } from './parallax.js';
import { initNav }      from './nav.js';
import { initReveal }   from './reveal.js';
import { initCarousel } from './carousel.js';
import { initTheme }    from './theme.js';
import { initModal }    from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initModal();
  initParallax();
  initNav();
  initReveal();
  initCarousel();
});
