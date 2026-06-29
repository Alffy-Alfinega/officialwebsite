# ALFFY (ALFINEGA) — PROJECT BRAIN
*Ground-up rebuild — 2026-06-29*

---

## 1. BUSINESS IDENTITY
| Field | Value |
|---|---|
| Brand | Alffy (Alfinega) |
| Type | Full-service digital agency |
| Location | Makindye, Kampala, Uganda |
| Founded | January 2025 |
| Public Launch | January 2026 |
| Live URL | https://alffy.alfinega.com |
| Email | contact@alfinega.com |
| Phone | +256 747 113 059 |
| Tagline | Your Digital Agency in Kampala |
| GA4 | G-5EKJN7MWHC |

---

## 2. TEAM
| Name | Role |
|---|---|
| Musoke Joshua Prosper | Chief Technology Officer |
| Mwawule Christiana | Managing Director |

---

## 3. SERVICES (6 CORE)
| # | Title | Slug |
|---|---|---|
| 01 | Web Design & Development | web-design |
| 02 | SEO & Digital Marketing | seo-marketing |
| 03 | Branding & Graphic Design | branding-design |
| 04 | Video, Animation & Image Editing | media-production |
| 05 | Architectural Visualisation | architectural-visualisation |
| 06 | Cybersecurity & Data Services | cybersecurity-data |

---

## 4. TECH STACK (ALL LATEST — NON-NEGOTIABLE)
| Package | Version |
|---|---|
| next | ^16.2.9 |
| react | ^19.2.7 |
| react-dom | ^19.2.7 |
| react-babylonjs | ^4.0.2 |
| @babylonjs/core | ^9.14.0 |
| @babylonjs/gui | ^9.14.0 |
| typescript | ^6.0.3 |
| tailwindcss | ^4.3.1 |
| @tailwindcss/postcss | ^4.3.1 |
| lenis | ^1.3.25 |
| clsx | ^2.1.1 |
| tailwind-merge | ^3.6.0 |
| nodemailer | ^9.0.1 |
| @vercel/analytics | ^2.0.1 |
| @vercel/speed-insights | ^2.0.0 |

---

## 5. CRITICAL: react-babylonjs <Engine> HEIGHT FIX

The Engine component from react-babylonjs renders:
`<canvas style={{ width: '100%', height: '100%' }} />`

`height: 100%` resolves to ZERO unless every DOM ancestor has an explicit pixel height.

### WORKING PATTERN ✅
```tsx
// section MUST use height: 100vh — NOT min-h-screen
<section style={{ height: '100vh', position: 'relative' }}>
  <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    <Engine antialias style={{ width: '100%', height: '100%' }}>
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        {/* JSX scene tree */}
      </Scene>
    </Engine>
  </div>
</section>
```

### BROKEN PATTERN ❌
```tsx
<section className="min-h-screen relative">
  <div className="absolute inset-0">
    <Engine style={{ width: '100%', height: '100%' }}>
```
`min-h-screen` does NOT give `height: 100%` children a computed pixel value.
The canvas collapses to 0px height. The hero disappears.

### Rule
- ALWAYS `height: 100vh` (or explicit px) on the section containing Engine
- ALWAYS `height: 100%` on the absolute div wrapping Engine
- Engine itself gets `style={{ width: '100%', height: '100%' }}`

---

## 6. DESIGN SYSTEM

### Colors
| Token | Hex |
|---|---|
| --bg | #04040C |
| --bg-nav | rgba(4,4,12,0.92) |
| --surface | #0A0A16 |
| --surface-2 | #10101E |
| --border | #1C1C34 |
| --text | #E4E4F0 |
| --text-muted | #CCCCEE |
| --text-faint | #8A8AAA |
| --text-dimmer | #7A7A9A |
| --blue | #2C6FED |
| --blue-dim | #1A52C4 |
| --gold | #D4A843 |

### Typography
| Role | Font | Weight |
|---|---|---|
| Headings | Syne | 700/800 |
| Body | Outfit | 300/400/500 |
| Labels/Mono | JetBrains Mono | 400/500 |

Loaded via Google Fonts `<link>` in layout.tsx `<head>`.

---

## 7. ROUTE MAP

### Pages
```
/                                    — Home
/services                            — Services hub
/services/web-design
/services/seo-marketing
/services/branding-design
/services/media-production
/services/architectural-visualisation
/services/cybersecurity-data
/portfolio                           — Filterable work grid
/portfolio/web-design
/portfolio/branding
/portfolio/video
/about
/about/story
/about/team
/about/why
/pricing
/blog
/blog/why-your-ugandan-business-needs-a-website
/blog/local-seo-kampala
/blog/branding-kampala-startup
/blog/meta-ads-east-africa-2026
/blog/nextjs-vs-wordpress-africa
/blog/core-web-vitals-guide
/careers
/contact
/privacy-policy
/terms
/data-handling
```

### API
```
POST /api/contact
POST /api/newsletter
POST /api/indexnow
```

### Next.js Special
```
/sitemap.xml  — app/sitemap.ts
/robots.txt   — app/robots.ts
```

---

## 8. PORTFOLIO PROJECTS
| # | Client | URL | Tags |
|---|---|---|---|
| 1 | Makindye Junior Academy | https://makindyeja.dev.alfinega.com | Web, Education |
| 2 | Stand-Up Africa Services | https://suas.dev.alfinega.com | Web, NGO, French |
| 3 | Makindye Secondary School | https://makindyess.dev.alfinega.com | Web, Education |
| 4 | Kennedy Secondary School | https://kennedyss.dev.alfinega.com | Web, Education |
| 5 | E2E Hub Africa | https://e2ehub.dev.alfinega.com | Web, Consulting |
| 6 | Light High School | https://lighths.dev.alfinega.com | Web, Education |
| 7 | Alffy (Alfinega) | https://alffy.alfinega.com | Web, Agency |
| 8 | NAGABA Association | https://nagaba.proj.alfinega.com | Web, NGO |

---

## 9. PRICING

### Websites (one-time UGX)
| Tier | Price |
|---|---|
| Starter | 850,000 |
| Growth | 2,200,000 |
| Enterprise | Custom |

### SEO (monthly UGX)
| Tier | Price |
|---|---|
| Local | 450,000/mo |
| Growth | 900,000/mo |
| Authority | 1,800,000/mo |

### Branding (one-time UGX)
| Tier | Price |
|---|---|
| Brand Starter | 600,000 |
| Full Brand | 1,400,000 |
| Brand + Web | 3,200,000 |

---

## 10. OPEN ROLES (3)
1. Junior Web Developer — apply to careers@alfinega.com
2. Graphic Designer — apply to careers@alfinega.com
3. SEO & Content Specialist — apply to careers@alfinega.com

---

## 11. SOCIALS
| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/alffy.alfinega |
| Facebook | https://www.facebook.com/alffyalfinega |
| X (Twitter) | https://x.com/Alffy_Alfinega |
| TikTok | https://www.tiktok.com/@alffy.alfinega |
| LinkedIn | https://www.linkedin.com/company/alfinega |
| WhatsApp | https://wa.me/256747113059 |

---

## 12. FILE STRUCTURE (TARGET)
```
/
├── brain/
│   └── PROJECT_BRAIN.md
├── public/                  (preserved — logos, favicons, OG)
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── about/page.tsx + story/ team/ why/
│   ├── services/page.tsx + 6 sub-pages
│   ├── portfolio/page.tsx + 3 sub-pages
│   ├── blog/page.tsx + 6 posts
│   ├── pricing/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── data-handling/page.tsx
│   └── api/
│       ├── contact/route.ts
│       ├── newsletter/route.ts
│       └── indexnow/route.ts
├── components/
│   ├── 3d/
│   │   └── BabylonHero.tsx   (react-babylonjs declarative, height fix applied)
│   ├── nav/
│   │   └── Navbar.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── LenisProvider.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeTicker.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Preloader.tsx
│       ├── CookieBanner.tsx
│       ├── ContactForm.tsx
│       ├── NewsletterForm.tsx
│       └── PricingFAQ.tsx
├── lib/
│   ├── utils.ts
│   └── api-utils.ts
├── types/
│   └── gtag.d.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── vercel.json
```

---

## 13. ADDIE FINDINGS (from live site audit 2026-06-29)
1. /pricing served a different (old) version of the site — different nav, email, dead links
2. Hero stat counters frozen at 0+ and 0% — animation never fired
3. Blog missing from main nav entirely
4. Careers missing from main nav
5. Team section had no photos — letter avatars only
6. Blog page CTA sent users to /contact instead of newsletter inline capture
7. Testimonials had no external verification (no Google/LinkedIn links)

All 7 issues are fixed in this rebuild.
