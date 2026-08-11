# SlushTec Website

Official studio site for **[slushtec.com](https://slushtec.com)**.

## Stack

- [Astro 7](https://astro.build) + TypeScript
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- SEO-ready layouts and meta components

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   # SEO, Header, Footer
  layouts/      # BaseLayout
  pages/        # index, about, projects, contact
  styles/       # global CSS + brand tokens (@theme)
public/         # robots.txt, favicon, future OG images
```

## Brand tokens

Defined in `src/styles/global.css` via `@theme`:

| Token | Hex | Role |
|-------|-----|------|
| iron | `#0f0e0d` | Background |
| warm-earth | `#de865b` | Primary accent |
| golden-glow | `#e8bd79` | Highlights / headings |
| burnt-adobe | `#904d2b` | Secondary |
| sage | `#659176` | Success / secondary accent |
| surface | `#1c1814` | Cards / borders |

## Deploy

Recommended: Vercel, Netlify, or Cloudflare Pages.  
Point the domain `slushtec.com` (and `www`) at the deployment.

## Next steps (content fill)

- [ ] Real logo / mark (visual identity priority)
- [ ] Open Graph default image (`public/og-default.png`)
- [ ] Expanded project copy + screenshots when ready
- [ ] Optional personal background section on About
- [ ] JSON-LD Organization schema

---

*SlushTec — permanent score, structured conflict, lock after the call.*
