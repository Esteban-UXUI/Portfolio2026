/* ============================================
   CAROUSEL — Infinite auto-scroll loop
   Duplicates cards so the loop is seamless.
   Pauses on hover (via CSS).
   ============================================ */

export function initCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  // Duplicate all cards for seamless infinite loop
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}
