# Alffy v2 — Project Brain

> **Project:** `alffy-v2` — Official website for Alffy (Alfinega) Digital Agency  
> **URL:** [https://alffy.alfinega.com](https://alffy.alfinega.com)  
> **Stack:** Next.js 16 + TypeScript 5.9 + Tailwind 3.4 + React 19.2  
> **Git:** Single commit (`bf3d2b6`), all files untracked  
> **License:** MIT (2026 Alffy / Alfinega)

---

## Map of Content

### Foundation
- [[foundation/stack]] — Tech stack table with versions
- [[foundation/configuration]] — package.json, tsconfig, next.config, postcss, tailwind, prettier, types
- [[foundation/design]] — Colors, typography, animations, CSS custom properties
- [[foundation/infrastructure]] — Vercel deployment, CSP headers, CI/CD, git state
- [[foundation/env]] — Environment variables reference

### Routes & Pages
- [[routes/map]] — All 21 routes, metadata, sitemap priority
- [[routes/seo]] — SEO metadata, sitemap, robots, OG, structured data
- [[routes/analytics]] — GA4 consent mode, Vercel Analytics, cookie consent

### Components
- [[components/overview]] — Navbar, footer, sections, UI components, styling patterns
- [[components/r3f]] — All React Three Fiber scenes (13 variants + particle wave)

### APIs
- [[apis/overview]] — Shared utilities, rate limiting, CSRF
- [[apis/contact]] — Contact form endpoint
- [[apis/newsletter]] — Newsletter endpoint
- [[apis/indexnow]] — IndexNow search engine ping

### Data
- [[data/overview]] — Data layer status (service/team/blog data inlining)

### Business
- [[business/company]] — Company info, timeline, targets
- [[business/services]] — All 12 services catalog
- [[business/pricing]] — Pricing packages (web, SEO, brand)
- [[business/team]] — Team members and open roles
- [[business/portfolio]] — Portfolio projects (6)
- [[business/blog]] — Blog posts (6 published)
- [[business/careers]] — Open positions and culture
- [[business/legal]] — Privacy, terms, data handling

### History
- [[changelog/_index]] — Change log

---

## Quick Links

| Area | Key File(s) |
|---|---|
| Root layout | `app/layout.tsx` |
| Homepage | `app/page.tsx`, `components/sections/Hero.tsx` |
| Services | `app/services/page.tsx`, `app/services/[slug]/page.tsx` |
| Blog listing + content | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| Portfolio projects | `components/sections/PortfolioGrid.tsx` |
| Team pages | `app/about/page.tsx`, `app/about/team/page.tsx` |
| Nav / Footer | `components/nav/Navbar.tsx`, `components/layout/Footer.tsx` |
| API security utils | `lib/api-utils.ts` |
| 3D scenes | `components/r3f/SceneVariants.tsx` |
| Design tokens | `tailwind.config.ts` + `app/globals.css` |

---

## File Count

| Category | Count |
|---|---|
| Pages (app router) | 21 |
| Components | 19 |
| R3F (3D) | 6 |
| Data files | 0 |
| Config files | 8 |
| API routes | 3 |
| Library utilities | 2 (`lib/utils.ts`, `lib/api-utils.ts`) |
| Type declarations | 2 (`types/r3f.d.ts`, `types/gtag.d.ts`) |
| **Total source** | **~65 files** |
