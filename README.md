# Gaafolhu — Miniature Studies

Minimal architectural showcase. Next.js 14, no UI framework, JSON CMS.

## Run
```
"C:\Program Files\nodejs\npm.cmd" install
"C:\Program Files\nodejs\npm.cmd" run dev
```
Open http://localhost:3000

## How to add real Facebook content
Facebook blocks auto-scraping (returns 400 without login), so:

1. Open https://www.facebook.com/gaafolhu on desktop
2. For each model: save best 1-3 photos to `public/works/<slug>/01.jpg`
3. Edit `data/models.json`: replace `title`, `scale`, `material`, `dimensions`, `year`, `description`, `image` → `/works/<slug>/01.jpg`
4. `images` array = detail gallery.

That's your "admin panel" for now — one file, under 20 items. Later we can plug Decap CMS / Sanity on top of the same file without redesign.

## Design language
- Paper #FAFAF7, ink #1A1A1A, hairlines, mono labels (JetBrains Mono) + light grotesk (Inter)
- Index as architectural register: N° / Title / Scale / Material / Year
- Interactions: hover-preview in list, list/grid toggle, category filter, quiet transitions. No cart, showcase-only.
