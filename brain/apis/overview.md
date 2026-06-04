# API Routes

All in `app/api/` using Next.js Route Handlers. Environment variables are documented in [[foundation/env]].

## Shared Security Utilities (`lib/api-utils.ts`)

Used by [[apis/contact]] and [[apis/newsletter]]:
- `checkRateLimit(key)` — in-memory Map, 10 req/min per IP (keyed on `x-forwarded-for`)
- `isAllowedOrigin(request)` — checks Origin/Referer against `alffy.alfinega.com` and `localhost:3000`
- `validateBodySize(body)` — rejects payloads >10KB

Rate limiting is CSRF protection for serverless functions. The CSP header in [[foundation/infrastructure]] provides an additional layer.

## Endpoints

| Route | Method | Purpose | Detail |
|---|---|---|---|
| `/api/contact` | POST | Contact form → email + auto-reply | [[apis/contact]] |
| `/api/newsletter` | POST | Newsletter signup | [[apis/newsletter]] |
| `/api/indexnow` | POST | Bing + Yandex IndexNow ping | [[apis/indexnow]] |

These routes are disallowed in `robots.txt` — see [[routes/seo#Robots]].
