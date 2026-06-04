# Route Map

All routes use Next.js App Router in `app/` directory. Dark theme only — see [[foundation/design]]. Every page is wrapped in the root layout hierarchy (see [[components/overview]]).

## Page Routes

| Route | Sitemap Priority | R3F Scene | Business Data | Key Component |
|---|---|---|---|---|
| `/` | 1.0 | [[components/r3f#Hero Particle Wave]] | — | Hero, ServicesSection, etc. |
| `/services` | 0.9 | [[components/r3f#Scene Variants\|OrbitalScene]] | [[business/services]] | ServicesSection |
| `/services/[slug]` | 0.8 | [[components/r3f#Per-Service Slug Scenes]] | [[business/services]] | Service detail |
| `/contact` | 0.9 | [[components/r3f#Scene Variants\|RadarScene]] | — | ContactForm ([[components/overview]]) |
| `/about` | 0.8 | [[components/r3f#Scene Variants\|AfricaGlobeScene]] | [[business/company]], [[business/team]] | About sections |
| `/about/story` | 0.7 | [[components/r3f#Scene Variants\|HelixScene]] | [[business/company#Timeline]] | Story sections |
| `/about/team` | 0.7 | [[components/r3f#Scene Variants\|NetworkScene]] | [[business/team]] | Team grid |
| `/about/why` | 0.7 | [[components/r3f#Scene Variants\|ShieldScene]] | — | WhySection |
| `/portfolio` | 0.8 | [[components/r3f#Scene Variants\|PortfolioScene]] | [[business/portfolio]] | PortfolioGrid |
| `/portfolio/*` | — | — | — | Redirect to `/portfolio` |
| `/pricing` | 0.8 | [[components/r3f#Scene Variants\|CrystalScene]] | [[business/pricing]] | PricingFAQ ([[components/overview]]) |
| `/blog` | 0.8 | [[components/r3f#Scene Variants\|BlogScene]] | [[business/blog]] | Blog list |
| `/blog/[slug]` | 0.6 | [[components/r3f#Scene Variants\|TextWaveScene]] | [[business/blog]] | Blog article |
| `/careers` | 0.6 | [[components/r3f#Scene Variants\|CareersScene]] | [[business/careers]] | Careers page |
| `/privacy-policy` | 0.3 | [[components/r3f#Scene Variants\|LegalScene]] | [[business/legal]] | Legal prose |
| `/terms` | 0.3 | [[components/r3f#Scene Variants\|LegalScene]] | [[business/legal]] | Legal prose |
| `/data-handling` | 0.3 | [[components/r3f#Scene Variants\|LegalScene]] | [[business/legal]] | Legal prose |
| 404 | — | — | — | Custom 404 |

See [[routes/seo]] for sitemap generation and [[routes/analytics]] for per-page GA tracking.

## API Routes

| Route | Method | Purpose | Detail |
|---|---|---|---|
| `/api/contact` | POST | Contact form → email + auto-reply | [[apis/contact]] |
| `/api/newsletter` | POST | Newsletter signup | [[apis/newsletter]] |
| `/api/indexnow` | POST | IndexNow ping (Bing + Yandex) | [[apis/indexnow]] |

Shared security utilities: [[apis/overview]].
