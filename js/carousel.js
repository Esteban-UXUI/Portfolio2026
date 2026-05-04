/* ============================================
   CAROUSEL — duplicates items for infinite loop
   Works for both project carousel and logo track
   ============================================ */

export function initCarousel() {
  // Logo track (clients section)
  const logoTrack = document.getElementById('logo-track');
  if (logoTrack) {
    Array.from(logoTrack.children).forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      logoTrack.appendChild(clone);
    });
  }
}
