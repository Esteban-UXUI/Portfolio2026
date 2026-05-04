/* ============================================
   LANGUAGE SWITCHER — inline in nav
   ============================================ */
import { applyLanguage } from './i18n.js';

export function initLang() {
  const saved = localStorage.getItem('portfolio-lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}
