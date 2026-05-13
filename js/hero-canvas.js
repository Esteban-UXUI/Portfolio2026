/* ============================================
   HERO CANVAS — Interactive particle field
   Mouse repels particles, they drift back.
   Theme-aware colors.
   ============================================ */

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Config
  const CONFIG = {
    particleCount: 110,
    connectionDist: 140,       // max distance to draw lines
    mouseRadius: 120,          // repulsion radius
    mouseForce: 0.35,          // push strength
    returnSpeed: 0.042,        // how fast particles drift back
    particleSpeed: 0.28,       // base drift speed
    minSize: 1,
    maxSize: 2.2,
  };

  let W, H, mouse = { x: -999, y: -999 };
  let particles = [];
  let raf;
  let isDark = document.documentElement.getAttribute('data-theme') !== 'light';

  // ── Colors based on theme ──────────────────
  function getColors() {
    isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    return {
      particle: isDark ? 'rgba(200,184,154,' : 'rgba(138,109,74,',
      line:     isDark ? 'rgba(124,155,138,' : 'rgba(74,122,98,',
      glow:     isDark ? 'rgba(200,184,154,' : 'rgba(138,109,74,',
    };
  }

  // ── Resize ────────────────────────────────
  function resize() {
    const hero = canvas.parentElement;
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  // ── Particle class ────────────────────────
  class Particle {
    constructor() { this.reset(true); }

    reset(randomY = false) {
      this.ox = Math.random() * W;          // origin x
      this.oy = randomY ? Math.random() * H : Math.random() * H;
      this.x  = this.ox;
      this.y  = this.oy;
      this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
      this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
      this.size   = CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize);
      this.alpha  = 0.2 + Math.random() * 0.5;
      this.phase  = Math.random() * Math.PI * 2; // for subtle pulse
    }

    update(t) {
      // Gentle drift of origin
      this.ox += this.vx;
      this.oy += this.vy;

      // Wrap origin
      if (this.ox < 0) this.ox = W;
      if (this.ox > W) this.ox = 0;
      if (this.oy < 0) this.oy = H;
      if (this.oy > H) this.oy = 0;

      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < CONFIG.mouseRadius && dist > 0) {
        const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * CONFIG.mouseForce * 18;
        this.y += Math.sin(angle) * force * CONFIG.mouseForce * 18;
      }

      // Spring return to origin
      this.x += (this.ox - this.x) * CONFIG.returnSpeed;
      this.y += (this.oy - this.y) * CONFIG.returnSpeed;

      // Pulse alpha slightly
      this.currentAlpha = this.alpha * (0.8 + 0.2 * Math.sin(t * 0.001 + this.phase));
    }

    draw(colors) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = colors.particle + this.currentAlpha + ')';
      ctx.fill();
    }
  }

  // ── Init particles ────────────────────────
  function initParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // ── Draw connections ──────────────────────
  function drawConnections(colors) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.connectionDist) {
          const alpha = (1 - dist / CONFIG.connectionDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = colors.line + alpha + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  // ── Mouse glow under cursor ───────────────
  function drawMouseGlow(colors) {
    if (mouse.x < 0 || mouse.x > W) return;
    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CONFIG.mouseRadius * 1.2);
    grad.addColorStop(0,   colors.glow + '0.08)');
    grad.addColorStop(0.5, colors.glow + '0.03)');
    grad.addColorStop(1,   colors.glow + '0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  // ── Render loop ───────────────────────────
  function render(t) {
    ctx.clearRect(0, 0, W, H);
    const colors = getColors();

    drawMouseGlow(colors);
    drawConnections(colors);
    particles.forEach(p => { p.update(t); p.draw(colors); });

    raf = requestAnimationFrame(render);
  }

  // ── Events ────────────────────────────────
  window.addEventListener('resize', () => { resize(); initParticles(); });

  // Mouse move on the HERO section (not whole window — better perf)
  const hero = canvas.parentElement;
  hero.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  // Touch support
  hero.addEventListener('touchmove', e => {
    const rect = canvas.getBoundingClientRect();
    const t = e.touches[0];
    mouse.x = t.clientX - rect.left;
    mouse.y = t.clientY - rect.top;
  }, { passive: true });

  // Re-init on theme change
  const themeObserver = new MutationObserver(() => { isDark = document.documentElement.getAttribute('data-theme') !== 'light'; });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // ── Boot ──────────────────────────────────
  resize();
  initParticles();
  render(0);
}
