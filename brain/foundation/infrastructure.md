# Infrastructure

## Deployment — Vercel

- Platform: Vercel (`vercel.json` — see [[foundation/configuration]])
- Build: `npm run build` (see [[foundation/configuration#package.json]])
- Branch auto-deploy: `alffy`

### `vercel.json` Headers

- Security: X-Content-Type-Options, X-Frame-Options (DENY), X-XSS-Protection, Referrer-Policy, Permissions-Policy, **Content-Security-Policy** (self + GA + Vercel + Google Fonts + `*.dev.alfinega.com` for portfolio iframe previews)
- Cache: fonts and `/_next/static/` — 1 year immutable

CSP is particularly relevant to [[routes/analytics]] (GA script loading) and [[routes/seo]] (structured data inline scripts).

### Redirects
- `/services/website-designing` → `/services/website-design` (301)
- `/services/seo` → `/services/seo-services` (301)

## CI/CD — GitHub Actions

`.github/workflows/indexnow.yml`: On push to `alffy` branch → wait 120s for deploy → verify site (retry ×5) → POST `/api/indexnow`.
See [[apis/indexnow]] for the API endpoint details.

## Git State

- Multi-commit history. Latest: `d56fb35 feat: migrate BabylonSceneCanvas to react-babylonjs`. See `git log --oneline` for current state.
- See [[changelog/_index]] for session history.

## License

MIT — Copyright (c) 2026 Alffy (Alfinega)

### IndexNow Verification

A file named `d9b8c7139d7c4d7a8ef313315ace4cd5.txt` lives in `public/` for domain ownership verification. See [[apis/indexnow]].
