/* ============================================
   LANGUAGE MODAL
   Shows on first visit, saves to localStorage
   ============================================ */

import { applyLanguage } from './i18n.js';

export function initModal() {
  const saved = localStorage.getItem('portfolio-lang');

  // If language already chosen, apply it and skip modal
  if (saved) {
    applyLanguage(saved);
    return;
  }

  // Show modal
  const backdrop = document.getElementById('lang-modal');
  if (!backdrop) return;
  backdrop.classList.remove('hidden');

  // Bind buttons
  document.getElementById('lang-en').addEventListener('click', () => choose('en'));
  document.getElementById('lang-es').addEventListener('click', () => choose('es'));

  function choose(lang) {
    applyLanguage(lang);
    backdrop.classList.add('hidden');
    setTimeout(() => backdrop.remove(), 400);
  }
}
