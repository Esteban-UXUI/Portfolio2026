/* ============================================
   THEME — Dark / Light mode toggle
   ============================================ */

export function initTheme() {
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(saved, false);

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
}

function setTheme(theme, animate = true) {
  if (!animate) {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('portfolio-theme', theme);
}
