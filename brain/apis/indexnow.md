# POST /api/indexnow

## Purpose
Notify Bing + Yandex of URL changes via IndexNow protocol. Part of the SEO strategy ([[routes/seo]]).

## Auth (optional)
If `INDEXNOW_SECRET` env var is set (see [[foundation/env]]), requires `Authorization: Bearer <secret>` header.

## Request (optional body)
```json
{ "urls": ["https://alffy.alfinega.com/about", ...] }
```
If no body or empty URLs, pulls all URLs from the sitemap (`app/sitemap.ts` — see [[routes/seo#Sitemap]]).

## Behavior
1. Submits to `www.bing.com/indexnow` and `yandex.com/indexnow`
2. Payload: `{ host, key: INDEXNOW_KEY, keyLocation, urlList }`
3. URLs come from the route map ([[routes/map]]) when not explicitly provided

## IndexNow Key
`d9b8c7139d7c4d7a8ef313315ace4cd5` (hardcoded). Key file lives in `public/` for domain verification (see [[foundation/infrastructure#IndexNow Verification]]).

## CI/CD
GitHub Action `.github/workflows/indexnow.yml` triggers on push to `alffy` branch — see [[foundation/infrastructure#CI/CD]].
