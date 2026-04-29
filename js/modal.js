/* ============================================
   LANGUAGE MODAL
   - Shows on every browser session (sessionStorage)
   - Applies saved lang preference (localStorage)
   - Close on: backdrop click, X button, or lang choice
   - Trap focus inside modal for accessibility
   ============================================ */

import { applyLanguage } from './i18n.js';

export function initModal() {
  const saved = localStorage.getItem('portfolio-lang');

  // Always apply saved language preference if exists
  if (saved) applyLanguage(saved);

  // Show modal every new session (sessionStorage resets on browser close)
  const shownThisSession = sessionStorage.getItem('modal-shown');
  if (shownThisSession) return;

  const backdrop = document.getElementById('lang-modal');
  if (!backdrop) return;

  // Mark shown for this session
  sessionStorage.setItem('modal-shown', '1');
  backdrop.classList.remove('hidden');

  // Focus trap — move focus to modal on open
  const closeBtn = document.getElementById('modal-close');
  setTimeout(() => closeBtn && closeBtn.focus(), 600);

  // ── Bind language buttons ──────────────────
  document.getElementById('lang-en').addEventListener('click', () => choose('en'));
  document.getElementById('lang-es').addEventListener('click', () => choose('es'));

  // ── Close button (X) ──────────────────────
  closeBtn && closeBtn.addEventListener('click', dismiss);

  // ── Click outside modal box ───────────────
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) dismiss();
  });

  // ── Escape key ────────────────────────────
  document.addEventListener('keydown', onKeyDown);

  function onKeyDown(e) {
    if (e.key === 'Escape') dismiss();
  }

  function choose(lang) {
    applyLanguage(lang);
    close();
  }

  function dismiss() {
    // Close without changing language (keeps previous or default)
    close();
  }

  function close() {
    document.removeEventListener('keydown', onKeyDown);
    backdrop.classList.add('hidden');
    setTimeout(() => backdrop.remove(), 350);
  }
}
