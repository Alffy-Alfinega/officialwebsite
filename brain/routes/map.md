# Route Map

All routes use Next.js App Router in `app/` directory. Dark theme only — see [[foundation/design]]. Every page is wrapped in the root layout hierarchy (see [[components/overview]]).

## Page Routes (36 static pages)

BabylonScene ([[components/r3f]]) is rendered as decorative background on most pages — no per-page scene variants (same geometry everywhere).

| Route | Sitemap Priority | Business Data | Key Component |
|---|---|---|---|
| `/` | 1.0 | — | Hero, ServicesSection, etc. |
| `/services` | 0.9 | [[business/services]] | ServicesSection |
| `/services/web-design` | 0.8 | [[business/services]] | Service detail |
| `/services/seo-marketing` | 0.8 | [[business/services]] | Service detail |
| `/services/branding-design` | 0.8 | [[business/services]] | Service detail |
| `/services/media-production` | 0.8 | [[business/services]] | Service detail |
| `/services/architectural-visualisation` | 0.8 | [[business/services]] | Service detail |
| `/services/cybersecurity-data` | 0.8 | [[business/services]] | Service detail |
| `/contact` | 0.9 | — | ContactForm ([[components/overview]]) |
| `/about` | 0.8 | [[business/company]], [[business/team]] | About sections |
| `/about/story` | 0.7 | [[business/company#Timeline]] | Story sections |
| `/about/team` | 0.7 | [[business/team]] | Team grid |
| `/about/why` | 0.7 | — | WhySection |
| `/portfolio` | 0.8 | [[business/portfolio]] | PortfolioGrid |
| `/portfolio/branding` | — | [[business/portfolio]] | Portfolio detail |
| `/portfolio/video` | — | [[business/portfolio]] | Portfolio detail |
| `/portfolio/web-design` | — | [[business/portfolio]] | Portfolio detail |
| `/pricing` | 0.8 | [[business/pricing]] | PricingFAQ ([[components/overview]]) |
| `/blog` | 0.8 | [[business/blog]] | Blog list |
| `/blog/why-your-ugandan-business-needs-a-website` | 0.6 | [[business/blog]] | Blog article |
| `/blog/local-seo-kampala` | 0.6 | [[business/blog]] | Blog article |
| `/blog/branding-kampala-startup` | 0.6 | [[business/blog]] | Blog article |
| `/blog/meta-ads-east-africa-2026` | 0.6 | [[business/blog]] | Blog article |
| `/blog/nextjs-vs-wordpress-africa` | 0.6 | [[business/blog]] | Blog article |
| `/blog/core-web-vitals-guide` | 0.6 | [[business/blog]] | Blog article |
| `/careers` | 0.6 | [[business/careers]] | Careers page |
| `/privacy-policy` | 0.3 | [[business/legal]] | Legal prose |
| `/terms` | 0.3 | [[business/legal]] | Legal prose |
| `/data-handling` | 0.3 | [[business/legal]] | Legal prose |
| 404 | — | — | Custom 404 |

See [[routes/seo]] for sitemap generation and [[routes/analytics]] for per-page GA tracking.

## API Routes

| Route | Method | Purpose | Detail |
|---|---|---|---|
| `/api/contact` | POST | Contact form → email + auto-reply | [[apis/contact]] |
| `/api/newsletter` | POST | Newsletter signup | [[apis/newsletter]] |
| `/api/indexnow` | POST | IndexNow ping (Bing + Yandex) | [[apis/indexnow]] |

Shared security utilities: [[apis/overview]].
