# AGENTS.md — Alffy v2

## Project Brain

Start every session by reading `brain/_index.md` to orient, then read the relevant brain notes for your task. When you discover new context not yet captured, add or update files in `brain/`. This is the shared memory for all AI sessions.

## Quick Start

```bash
npm install        # Install deps
npm run dev        # Dev server → http://localhost:3000
npm run build      # Production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

No tests or test runner exist.

## Architecture (non-obvious)

- **No data layer** — `data/` directory was deleted. All page content (services, team, blog, nav links) is inlined directly in each consuming page/component. Each page owns its data independently.
- **Blog content** lives in `app/blog/[slug]/page.tsx` (hardcoded `Record`).
- **Portfolio projects** are hardcoded in `components/sections/PortfolioGrid.tsx`.
- **No global state** — all client state is local `useState`/`useRef`.
- **CSS variables** in `globals.css` (`--bg`, `--surface`, `--border`, `--text`, `--text-muted`, etc.) are used via inline `style` props throughout — Tailwind classes alone won't always produce the right color.
- **Dark theme only** — `data-theme="dark"` on `<html>`, no light mode.
- **Path alias**: `@/*` → project root.

## R3F (3D Scenes)

- All R3F scene files use `// @ts-nocheck` at the top.
- 3D canvases are dynamically imported with `ssr: false` to avoid server-side Three.js errors.
- Each page has its own scene variant defined in `components/r3f/SceneVariants.tsx` (13 variants).
- Hero uses a separate particle wave (`ParticleWave.tsx`), not the `FloatingGeometryWrapper` path.

## Environment Variables

Required for contact form & newsletter APIs (set in Vercel or `.env.local`):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hello@alfinega.com
SMTP_PASS=<gmail-app-password>
CONTACT_TO=hello@alfinega.com
```

`INDEXNOW_SECRET` is optional (for IndexNow API auth). A `.env.example` file is committed as a template. No `.env` file is committed.

## Git & CI

- Single commit (`bf3d2b6`), all source files untracked — treat as fresh.
- GitHub Action: `.github/workflows/indexnow.yml` pings search engines on push to `alffy` branch.
- Branch for auto-deploy: `alffy`.

## Conventions

- **Styling**: `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional classes. Inline `style` props with CSS var references for dynamic theming.
- **Animations**: IntersectionObserver + inline style transitions for section entries. CSS `@keyframes` for hero text. Lenis for smooth scroll.
- **Content changes**: To add a service → edit the service arrays in `app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `components/sections/ServicesSection.tsx`. To add a blog post → edit `app/blog/page.tsx` (metadata) + content block in `app/blog/[slug]/page.tsx`. To add a portfolio project → edit the `projects` array in `components/sections/PortfolioGrid.tsx`. To add a team member → edit `app/about/page.tsx` and `app/about/team/page.tsx`. To edit nav/footer links → edit `components/nav/Navbar.tsx` and `components/layout/Footer.tsx`.
- **Prettier** configured via `.prettierrc` (no semi, single quotes, trailing commas, 120 width). Run `npx prettier --write .` to format.
- **No formatters or codegen** configured beyond PostCSS/Tailwind.
