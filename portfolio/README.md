# Esteban UXUI — Portfolio

Senior UX/UI Designer personal portfolio. One-page, dark mode, with parallax effects.

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main HTML (only markup, no styles/scripts inline)
├── css/
│   ├── variables.css       ← CSS custom properties, reset, shared animations
│   ├── nav.css             ← Navigation bar styles
│   ├── hero.css            ← Hero section + parallax orbs + grid lines
│   ├── sections.css        ← About, Skills, Clients, Experience, Contact, Footer
│   └── responsive.css      ← Media queries (mobile + tablet)
├── js/
│   ├── main.js             ← Entry point — imports and initializes all modules
│   ├── parallax.js         ← Parallax engine (hero layers + section bg + dots)
│   ├── nav.js              ← Nav active link on scroll
│   └── reveal.js           ← Scroll reveal (IntersectionObserver)
├── assets/
│   └── images/
│       └── esteban.jpg     ← Profile photo
└── README.md
```

## 🚀 How to run locally

Just open `index.html` in a browser — no build step needed.

> **Note:** The JS uses ES Modules (`type="module"`).
> For local dev, use a simple server:
> ```bash
> npx serve .
> # or
> python3 -m http.server 8080
> ```
> Then open http://localhost:8080

## 🌐 Deploy to GitHub Pages

1. Push all files to a GitHub repo
2. Go to Settings → Pages → Deploy from branch `main` / root
3. Your site will be live at `https://username.github.io/repo-name`

## ✏️ How to update content

| What to change | Where |
|---|---|
| Your name, title, bio | `index.html` → `#about` section |
| Clients | `index.html` → `#clients` section |
| Experience | `index.html` → `#experience` section |
| Colors / fonts | `css/variables.css` → `:root` block |
| Parallax speed | `data-speed` attribute in `index.html` |
| Add new sections | New HTML in `index.html` + CSS in `sections.css` |
| Profile photo | Replace `assets/images/esteban.jpg` |
