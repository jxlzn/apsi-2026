# APSI 2026 — Svelte + Vite

The Business Times Insights: Asia Pacific Sustainability Index 2026 report page.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serves dist/ locally
```

`vite.config.js` uses `base: './'`, so `dist/` can be uploaded to any sub-path (e.g. `/specials/apsi-2026/`).

## Structure

- `public/images/` — hero GIFs, served as-is
- `src/app.css` — global styles
- `src/App.svelte` — page layout
- `src/lib/components/` — header, hero, shared section pieces
- `src/lib/sections/` — one component per report section
- `src/lib/charts/` — chart components and `data.js` with all chart figures
- `src/lib/reveal.js` — scroll-in reveal and count-up animations
