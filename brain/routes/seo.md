# SEO

## Metadata Strategy

All pages export `metadata: Metadata` (see [[routes/map]] for per-page details). Root layout defaults:
```ts
metadataBase: new URL('https://alffy.alfinega.com')
title: { default: '...', template: '%s | Alffy (Alfinega) — Kampala, Uganda' }
```

The CSP in [[foundation/infrastructure]] must allow the inline structured data script.

## Sitemap (`app/sitemap.ts`)

Dynamic with 3 sources: static pages (15), service slugs (12 from [[business/services]]), blog slugs (6 from [[business/blog]]).

Priority tiers:
- 1.0: Homepage
- 0.9: Services, Contact
- 0.8: About, Portfolio, Pricing, Blog
- 0.7: About sub-pages
- 0.6: Careers, Blog posts
- 0.3: Legal pages ([[business/legal]])

## Robots (`app/robots.ts`)
```
allow: /, disallow: /api/, /admin/
sitemap: https://alffy.alfinega.com/sitemap.xml
```
The `/api/` disallow covers the endpoints in [[apis/overview]].

## Canonical URLs
Root layout: `<link rel="canonical" href="https://alffy.alfinega.com" />`. Blog articles use `metadataBase` default.

## Open Graph / Twitter
Full OG tags in root layout: `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale` (`en_UG`), `og:image` (1200×630). Twitter card: `summary_large_image` with `@alfinega` handle.

## Structured Data
LocalBusiness schema injected via `<script type="application/ld+json">` in root layout `<head>`. Covers name, address (Makindye, Kampala, UG — see [[business/company]]), geo, hours, 10-service OfferCatalog (see [[business/services]]), social links. The CSP ([[foundation/infrastructure]]) allows `'unsafe-inline'` for this script tag.
