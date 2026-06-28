# 2026-06-28 — Session Audit

## Status
Brain loaded. Full repo surveyed. Awaiting task directive.

## What was reviewed
- `brain/_index.md` — project map
- `app/page.tsx`, `app/layout.tsx` — homepage + root layout
- `components/sections/Hero.tsx` — hero structure
- `brain/business/services.md` — 6-category services
- `brain/business/pricing.md` — UGX pricing tables
- `brain/foundation/infrastructure.md` — Vercel + CI/CD
- `brain/changelog/_index.md` — history
- `git log` — 10 commits, latest: `403fc6a stability push`

## Open Issues Flagged (pre-task)
1. **Data duplication** — services data lives in 7+ places with no single source of truth (see [[data/overview]])
2. **3D stack instability** — R3F was migrated in, then reverted, then Babylon.js added — 3 commits just on this (risk: fragility)
3. **Redirects in vercel.json** point to stale slugs (`/services/seo` → `/services/seo-services`) — slug is now `seo-marketing`, redirect chain may be broken
4. **Git state** — brain note says "single commit" but git log shows 10 commits — brain note is stale

## Tags
#session #audit #2026-06-28

## Completed (all 4 tasks)

1. **vercel.json** — fixed `/services/seo` → `/services/seo-marketing` redirect (was stale `/seo-services`)
2. **package.json** — all deps bumped to latest: Next 16.2.9, React 19.2.7, @babylonjs/core 9.14.0, framer-motion 12.42.0, lenis 1.3.25, tailwind-merge 3.6.0, nodemailer 9.0.1, TS 6.0.3, @types/node 26.0.1, autoprefixer 10.5.2, postcss 8.5.15
3. **Tailwind v4 migration** — `postcss.config.mjs` updated to `@tailwindcss/postcss`; `app/globals.css` migrated from `@tailwind base/components/utilities` to `@import "tailwindcss"; @config "../tailwind.config.ts"`
4. **BabylonSceneCanvas.tsx** — full rewrite to `react-babylonjs 4.0.2` declarative renderer; all 15 scene variants ported; `useBeforeRender` hook for animations; `<Engine>/<Scene>/<arcRotateCamera>/<hemisphericLight>` JSX; zero TS errors

## New packages
- `react-babylonjs@4.0.2`
- `@babylonjs/gui@9.14.0` (peer dep)
- `@tailwindcss/postcss@4.3.1`

## Commits
- `1f58b86` fix: broken redirect
- `0e194ed` chore: deps + Tailwind v4
- `d56fb35` feat: react-babylonjs migration

## Completed (all 4 tasks)

1. `vercel.json` — fixed `/services/seo` → `/services/seo-marketing` (was stale `/seo-services`)
2. `package.json` — all deps latest: Next 16.2.9, React 19.2.7, Babylon 9.14.0, Tailwind 4.3.1, framer-motion 12.42.0, TS 6.0.3, etc.
3. `postcss.config.mjs` + `app/globals.css` — Tailwind v4 migration (`@tailwindcss/postcss`, `@import "tailwindcss"`)
4. `components/3d/BabylonSceneCanvas.tsx` — full rewrite to react-babylonjs 4.0.2; all 15 variants; zero TS errors

New packages: `react-babylonjs@4.0.2`, `@babylonjs/gui@9.14.0`, `@tailwindcss/postcss@4.3.1`

## Tailwind v4 Fix (post-breakage)

**Root cause of broken CSS:** I ran a manual v3→v4 migration without using the official upgrade tool. The `@config "../tailwind.config.ts"` directive was incorrect — Tailwind v4 does not read JS config files. All custom theme tokens were silently dropped.

**Fix applied:**
1. Installed `tailwindcss@4.3.1` + `@tailwindcss/postcss@4.3.1`
2. Ran the **official** `npx @tailwindcss/upgrade@4` tool — it migrated 5 template files (deprecated class syntax) and `postcss.config.mjs`
3. Added a proper `@theme {}` block to `globals.css` with all custom tokens from `tailwind.config.ts` translated to v4 CSS variable format (`--font-*`, `--color-*`, `--text-*`, `--animate-*`)
4. Corrected font declarations to use actual font names (`'Syne'`, `'Outfit'`, `'JetBrains Mono'`) since they're loaded via Google Fonts `<link>`, not `next/font` CSS vars
5. `next build` passes clean — all 36 routes rendered

**Lesson:** Never manually migrate Tailwind major versions. Always use `npx @tailwindcss/upgrade`.
