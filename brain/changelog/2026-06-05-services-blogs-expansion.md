# 2026-06-05 — Service & blog content expansion; brain update

## Changes

### Services pages
- Merged 12 individual service `[slug]` routes into 6 category pages (no dynamic routing — each is a standalone page file)
- Each service page now has: expanded description, 10 features (up from 6-8), 7-8 deliverables (up from 5-6), and a new 4-step "How we work" process section
- The `allServices` array remains duplicated across all 6 page files (`app/services/{web-design,seo-marketing,branding-design,media-production,architectural-visualisation,cybersecurity-data}/page.tsx`)
- Service listings in Navbar, Footer, ServicesSection, sitemap, pricing page, blog sidebars, and layout.tsx structured data all updated to match the 6-category model

### Blog posts
- All 6 blog posts expanded with 1-2 additional sections each (deeper practical detail)
- Read times updated accordingly (listing + individual pages)

### 3D scenes (Babylon.js)
- Replaced React Three Fiber with Babylon.js (imperative API, no `@react-three/fiber`)
- Removed `babel-plugin-reactylon` (broke SSR with Turbopack)
- Renamed: `ReactylonScene` → `BabylonScene`, `ReactylonSceneCanvas` → `BabylonSceneCanvas`
- All 3D logic centralized in `components/3d/BabylonSceneCanvas.tsx` (single rotating decoration)
- Babylon.js used directly with `// @ts-nocheck` for module imports
- No more per-page scene variants — same geometry on every page

### Build
- Clean build: 36 static pages generated, zero errors
- Removed `babel.config.js` (not needed — Next.js uses SWC by default)

## Files changed (~18 files touched)
- `app/services/` — 6 service page files (data + process rendering)
- `app/blog/` — 6 blog post files (content expansion + read times)
- `app/blog/blog-content.tsx` — read time updates
- `components/3d/` — renamed files, removed R3F references
- `brain/` — this entry + updated across notes
