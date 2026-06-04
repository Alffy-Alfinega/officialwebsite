# 2026-06-04 — Security, tooling & data cleanup

## Affected Areas

| Area | Files Changed | Links |
|---|---|---|
| GA Consent | `app/layout.tsx`, `CookieBanner.tsx`, `types/gtag.d.ts` | [[routes/analytics]] |
| API Security | `lib/api-utils.ts`, `app/api/contact/route.ts`, `app/api/newsletter/route.ts`, `vercel.json` | [[apis/overview]], [[foundation/infrastructure]] |
| Tooling | `package.json`, `.prettierrc`, `.env.example` | [[foundation/configuration]] |
| Data Cleanup | `data/` (removed), `app/about/page.tsx`, `app/about/team/page.tsx` | [[data/overview]] |
| Brain Structure | All brain files reorganized | [[_index]] |

## Changes Made

### Google Analytics Consent Mode
- GA now uses Google Consent Mode v2: defaults `analytics_storage` to `'denied'`, updated to `'granted'` only on user Accept
- CookieBanner grants consent on accept; re-grants on reload if previously accepted
- Added `types/gtag.d.ts` for global `gtag()` type declaration

### API Security
- Added rate limiting (10 req/min per IP) to contact + newsletter endpoints
- Added origin CSRF check (rejects requests not from allowed domains)
- Added 10KB body size limit
- Hoisted nodemailer transport to module scope (avoids cold-start per request)
- Created `lib/api-utils.ts` for shared security utilities
- Added Content-Security-Policy header to `vercel.json`

### Developer Tooling
- Added `npm run typecheck` script (`tsc --noEmit`)
- Created `.prettierrc` (no semi, single quotes, trailing commas, 120 width)
- Created `.env.example` committing all required env vars as template

### Data Cleanup
- Removed empty `data/` directory from disk
- Removed 8 empty `name: ''` placeholder team entries from about pages

### Brain Restructure
- Reorganized brain/ from 11 flat files into 20 files across 7 subdirectories
- Each file now links to related files via `[[wikilinks]]`
