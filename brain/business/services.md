# Services Catalog (6 categories, merged from 12)

Rendered on [[routes/map#Page Routes\|/services]], `/services/{category}`, the homepage ServicesSection ([[components/overview]]), Navbar, and Footer.

The 12 original services were merged into 6 categories to reduce page count and improve navigation. Each category has its own page file (no dynamic `[slug]` routing) at `app/services/{slug}/page.tsx`.

| # | Category | Slug | Short Title | Key Services Merged |
|---|---|---|---|---|
| 1 | Web Design & Development | `web-design` | Web Design | Website design, development, CMS, e-commerce |
| 2 | SEO & Digital Marketing | `seo-marketing` | SEO & Marketing | SEO, paid ads, social media, content |
| 3 | Branding & Graphic Design | `branding-design` | Branding & Design | Branding, graphic design, print |
| 4 | Video, Animation & Image Editing | `media-production` | Media Production | Video, animation, image editing |
| 5 | Architectural Visualisation | `architectural-visualisation` | Architecture | Arch viz, floor plans, walkthroughs |
| 6 | Cybersecurity & Data Services | `cybersecurity-data` | Security & Data | Security audits, data entry, migration |

## Page structure (duplicated data)
Each of the 6 page files contains the full `allServices` array (same data duplicated across files) plus a "How we work" 4-step process section specific to that category.

## Data duplication
Service data is duplicated across:
- `app/services/page.tsx` (listing cards)
- `app/services/{slug}/page.tsx` (6 files, each has the full array)
- `components/sections/ServicesSection.tsx` (homepage cards)
- `components/nav/Navbar.tsx` (nav links)
- `components/layout/Footer.tsx` (footer links)
- `app/sitemap.ts` (SEO)
- `app/layout.tsx` (structured data JSON-LD)

See [[data/overview]] for the full duplication map.

## Key Differentiators
- Africa-rooted, globally competitive (see [[business/company]])
- Full-service under one roof (no outsourcing)
- Fixed pricing, clear timelines ([[business/pricing]])
- 24/7 WhatsApp support ([[business/company#Company]])
- Modern tech stack ([[foundation/stack]])
- Each category page includes a process section explaining the 4-step workflow
