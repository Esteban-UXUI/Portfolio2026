/* ============================================
   MAIN ENTRY POINT
   ============================================ */

import { initParallax } from './parallax.js';
import { initNav }      from './nav.js';
import { initReveal }   from './reveal.js';
import { initCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initNav();
  initReveal();
  initCarousel();
});
