/* ============================================
   MAIN ENTRY POINT
   Import and initialize all modules
   ============================================ */

import { initParallax } from './parallax.js';
import { initNav }      from './nav.js';
import { initReveal }   from './reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initNav();
  initReveal();
});
