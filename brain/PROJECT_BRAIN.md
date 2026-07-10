# ALFFY (ALFINEGA) — PROJECT BRAIN
*Ground-up rebuild — 2026-06-29 | Last analysis: 2026-07-04*

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
| Mr. Mullo Nashiifu | CEO & Founder |
| Mr. Musoke Joshua Prosper | Lead Developer |
| Mrs. Mwawule Christiana | Managing Director |

Team members are always addressed with Mr./Mrs. titles in all written content.
Photos: /public/team/mullo-nashiifu.jpg, musoke-joshua.jpg, mwawule-christiana.jpg

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

⚠️ FLAGGED: All portfolio URLs use dev.alfinega.com / proj.alfinega.com subdomains.
These appear to be staging/development environments. Move to production domains before
using in sales conversations or publishing in case studies.

---

## 9. PRICING

### Websites (one-time UGX)
| Tier | Price |
|---|---|
| Starter | 1,000,000 – 1,125,000 |
| Growth | 2,000,000 – 2,500,000 |
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
│   │   ├── PortfolioPreview.tsx   ⚠️ MISSING — listed here but not in repo
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

## 14. SESSION LOG — 2026-06-30 CEO/Navbar/3D-Headers Update
1. Added Mr. Mullo Nashiifu as CEO & Founder — team page, about page, story timeline updated
2. All team members now addressed with Mr./Mrs. titles throughout site copy
3. Real team photos wired in from /public/team/*.jpg via next/image on team page
4. Navbar rewritten — JS-based isMobile state (window.innerWidth < 768) replaces
   reliance on Tailwind className responsive utilities, which were not reliably
   compiling. Desktop nav and hamburger now correctly toggle based on measured
   viewport width. Mobile overlay has staggered fadeUp entrance per nav item.
5. Built reusable PageHero component (components/sections/PageHero.tsx) — a
   compact 3D-backed header using the same BabylonHero/height-fix pattern as the
   homepage, with eyebrow/title/subtitle slots. Applied to all 28 non-home pages
   (was previously home-only). Each page passes an appropriate SceneVariant.

## 15. SESSION LOG — 2026-06-30 Unique 3D Scene Per Page
Every page now has its own distinct, non-shared Babylon.js scene — 29 total
(28 unique PageHero variants + home's own HeroScene). No two pages reuse the
same SceneVariant, even within the same category (e.g. each of the 6 service
pages has its own scene; each of the 6 blog posts has its own scene).

SceneVariant union fully replaced — old shared variants ('about', 'blog',
'web-design', 'branding-design', 'media-production', 'legal', etc.) are gone.
New 1:1 mapping:

| Page | Variant | Concept |
|---|---|---|
| / | home (default) | Assembling agency disciplines — panel/orb/ring/block orbiting with sweep ring |
| /about | about-hub | Leadership constellation — 3 orbiting spheres |
| /about/story | about-story | Rising spiral timeline — 5 ascending markers |
| /about/team | about-team | Fixed triangle formation — CEO + Lead Dev + MD |
| /about/why | about-why | Jagged vs smooth shape duel |
| /services | services-hub | Six distinct shapes in a ring, one per discipline |
| /services/web-design | svc-web | Stacked angled browser panels |
| /services/seo-marketing | svc-seo | Bar chart cluster + search ring |
| /services/branding-design | svc-branding | 4 irregular polyhedra, brand colors |
| /services/media-production | svc-media | Film reel + drifting play marker |
| /services/architectural-visualisation | svc-archviz | Low-poly wireframe skyline |
| /services/cybersecurity-data | svc-security | Shield + orbiting security nodes |
| /portfolio | portfolio-hub | 4x2 grid of floating frames |
| /portfolio/web-design | portfolio-web | Single large rotating wireframe panel |
| /portfolio/branding | portfolio-branding | 3 blending color swatch spheres |
| /portfolio/video | portfolio-video | Spinning reel + trailing frames |
| /blog | blog-hub | Fanned arc of 6 article panels |
| /blog/why-your-ugandan-business-needs-a-website | blog-website | Flat panel + orbiting cursor dot |
| /blog/local-seo-kampala | blog-seo | Map pin + expanding ping rings |
| /blog/branding-kampala-startup | blog-branding | 3 spheres merging/separating |
| /blog/meta-ads-east-africa-2026 | blog-ads | Pulsing ad unit + orbiting particles |
| /blog/nextjs-vs-wordpress-africa | blog-nextjs | Sharp wireframe cube vs smooth sphere duel |
| /blog/core-web-vitals-guide | blog-vitals | 3 spheres bouncing at different speeds (LCP/INP/CLS) |
| /pricing | pricing | 3-tier gem cluster (unchanged) |
| /careers | careers | Ascending staggered platforms + climbing marker (unchanged) |
| /contact | contact | Hub + 4 orbiting satellites (unchanged) |
| /privacy-policy | legal-privacy | Calm rotating lock |
| /terms | legal-terms | Calm rotating document tablet |
| /data-handling | legal-data | Orbiting data block cluster |

All scenes share the same `useAnimation` hook and palette constants (BLUE,
GOLD, GREEN, PURPLE, CYAN, RED, WHITE, GREY) for visual cohesion while being
structurally and conceptually distinct. BabylonHero/height-fix architecture
unchanged — purely additive to the scene layer.

---

## 16. CRITICAL TECHNICAL DEBT — 2026-07-04 Analysis

### 🔴 P0 — Fix Immediately

#### 1. BabylonSceneInner.tsx — Monolith Bundle (1,055 lines, 30 scenes, one file)
All 30 scene components are bundled together. Every page route loads the entire
Babylon scene library even though only one scene is ever used per page.
The correct fix is dynamic imports per scene file, or at minimum lazy loading
of the SceneContent switch using React.lazy().

**Impact**: Significant JS bundle bloat on every page. Users on slow connections
(common in Uganda/East Africa) pay the cost of 29 unused scenes on every visit.

**Fix**:
```ts
// Split each scene into its own file, load lazily:
const HomeScene = dynamic(() => import('./scenes/HomeScene'), { ssr: false })
```
Or use React.lazy() + Suspense per variant.

#### 2. Hero Stats Are Aspirational, Not Real
The home hero grid shows: "50+ 2026 Projects Goal", "95% Satisfaction Target".
These are openly labeled as *goals*, not achievements. This signals to any
discerning visitor that the company is too young to have real numbers.

**Options**:
- Remove the stat grid entirely until real numbers exist
- Replace with meaningful signals: "Founded 2025 · 8 live client sites · Uganda-based"
- Show real project count (8 portfolio entries currently)

#### 3. Portfolio URLs Are Development Subdomains
All 7 client portfolio links use `.dev.alfinega.com` or `.proj.alfinega.com`.
These look like staging environments. Potential clients clicking through will
arrive at development builds, not production sites. This is a trust killer.

**Fix**: Either move clients to production domains or build a screenshot-based
portfolio that doesn't link out to live dev URLs.

#### 4. No WhatsApp Floating CTA
WhatsApp is the primary business communication channel in Uganda and across
East Africa. The number exists in socials but there is no persistent floating
WhatsApp button on the site. This is a significant conversion gap for the
local market.

**Fix**: Add a fixed bottom-right WhatsApp button site-wide.
```tsx
<a href="https://wa.me/256747113059" style={{ position:'fixed', bottom:24, right:24, zIndex:999 }}>
```

#### 5. No Error Boundary Around Babylon Scenes
If WebGL is unavailable (blocked by hardware, browser settings, or low-end
device), the entire page can fail silently or crash. There is no fallback UI.
This affects a non-trivial percentage of East African mobile devices.

**Fix**: Wrap BabylonHero in an ErrorBoundary with a static gradient fallback.

---

### 🟡 P1 — Fix This Sprint

#### 6. Blog Is Static TSX — No CMS
Adding a new blog post requires a developer to write a `.tsx` file and commit.
The company literally sells SEO services — content velocity is the product
promise — yet the content pipeline requires engineering involvement for every post.

**Fix options (ranked)**:
1. Contentlayer or MDX files (developer writes markdown, not TSX)
2. Sanity or Payload CMS headless integration
3. Minimum: extract blog posts to a shared data file array

#### 7. No Portfolio Preview on Homepage
The brain's target file structure lists `PortfolioPreview.tsx` in sections/.
This component does not exist in the repo. The homepage (page.tsx) does not
show portfolio work. Visitors who land on the homepage never see the 8 client
projects without clicking to /portfolio.

**Fix**: Build PortfolioPreview — 3-4 featured client cards on the homepage.

#### 8. Testimonials Have No External Verification
The brain audit flagged this on 2026-06-29 (finding #7). It has not been fixed.
Anonymous testimonials on an agency site carry near-zero persuasion weight.

**Fix**: Link each testimonial to a Google Business review or LinkedIn post.
If real external reviews don't exist yet, remove the section until they do.
A missing section is less damaging than clearly unverifiable claims.

#### 9. Mixed Styling Paradigm
globals.css defines Tailwind tokens and @theme variables. Components use
almost exclusively inline styles (not Tailwind utilities). This creates:
- Maintenance inconsistency (two systems to update when tokens change)
- Larger-than-necessary style attributes in the DOM
- No benefit from Tailwind's JIT purging since utilities aren't used

**Fix decision needed**: Either commit to Tailwind utilities in components,
or commit to CSS variables + inline styles and remove the Tailwind dependency.
The current hybrid is the worst of both worlds.

#### 10. useRef<any> in BabylonSceneInner
Multiple `useRef<any>(null)` throughout BabylonSceneInner.tsx. This bypasses
TypeScript's type safety entirely for the most complex and bug-prone part of
the codebase.

**Fix**: Type refs to `AbstractMesh | null` from @babylonjs/core.

---

### 🟢 P2 — Plan for Next Sprint

#### 11. No Case Studies
The portfolio shows client names and links. There is no "Problem → Approach →
Result" narrative for any project. Case studies are the #1 sales tool for an
agency — they answer the buyer's actual question: "can they solve my problem?"

#### 12. Cybersecurity Service — Credibility Risk
A team of 3 offering cybersecurity services with no listed certifications,
credentials, or specific offerings is a credibility liability, not an asset.
Every competitor who *is* credentialed will use this against Alffy in a sales
conversation.

**Options**:
- List specific offerings + certifications prominently
- Partner with a cybersecurity specialist and white-label
- Remove the service until the credibility case is built

#### 13. No Article Schema on Blog Posts
The layout.tsx has a LocalBusiness schema. Individual blog pages have no
Article schema (author, datePublished, dateModified, headline). This is a
missed SEO opportunity, especially since the company sells SEO.

#### 14. Google Fonts External Dependency
Three font families loaded from fonts.googleapis.com. This adds:
- A DNS lookup and external request on every page load
- Potential GDPR exposure for EU visitors
- Render-blocking risk if Google's CDN has issues

**Fix**: Self-host fonts using `next/font/google` (built into Next.js).
```ts
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
```
This eliminates the external request, enables font subsetting, and is zero-config.

#### 15. No Lead Capture on Homepage
The homepage CTAs go directly to /contact. Cold traffic rarely converts to a
contact form without an intermediate capture. The newsletter form exists but is
not prominently placed on the homepage.

**Fix**: Add an inline newsletter capture or "free audit" offer to the homepage
between ServicesSection and CTASection.

---

## 17. STRENGTHS — What Is Working

1. **Tech stack is genuinely impressive** — Next.js 16, React 19, Babylon.js 9,
   TypeScript 6, Tailwind v4. This is a legitimately modern stack. The 3D scenes
   are a strong visual differentiator in the Kampala agency market.

2. **SEO foundations are solid** — schema.org LocalBusiness, OG meta, Twitter
   cards, sitemap.ts, robots.ts, IndexNow integration, GA4 with proper consent
   management. This is better SEO infrastructure than most agencies anywhere.

3. **Security headers** — vercel.json includes X-Content-Type-Options, X-Frame-
   Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy. Most agency
   sites don't bother. This signals professionalism.

4. **Brain documentation** — The brain/PROJECT_BRAIN.md file is a genuine asset.
   Session logs, architectural decisions, and known issues are all recorded.
   This is rare and valuable for a project of this age.

5. **Transparent pricing in UGX** — Publishing prices in local currency qualifies
   leads automatically and signals confidence in the product value.

6. **GA4 consent-first implementation** — Defaulting to `analytics_storage: denied`
   and gating on CookieBanner acceptance is GDPR-aware even for a Uganda-based
   company. Shows forward thinking.

7. **29 unique 3D scenes** — The conceptual differentiation per page (e.g. the
   about-team scene mirrors the actual team structure: triangle of 3) is creative
   and reinforces brand personality throughout the site.

---

## 18. OPEN ISSUES TRACKER

| ID | Severity | Issue | Status |
|---|---|---|---|
| OI-001 | 🔴 P0 | BabylonSceneInner monolith bundle | Open |
| OI-002 | 🔴 P0 | Hero stats are aspirational not real | Open |
| OI-003 | 🔴 P0 | Portfolio URLs are dev subdomains | Open |
| OI-004 | 🔴 P0 | No WhatsApp floating CTA | Open |
| OI-005 | 🔴 P0 | No error boundary on Babylon scenes | Open |
| OI-006 | 🟡 P1 | Blog is static TSX — no CMS | Open |
| OI-007 | 🟡 P1 | PortfolioPreview missing from homepage | Open |
| OI-008 | 🟡 P1 | Testimonials unverified | Open |
| OI-009 | 🟡 P1 | Mixed styling paradigm | Open |
| OI-010 | 🟡 P1 | useRef<any> throughout BabylonSceneInner | Open |
| OI-011 | 🟢 P2 | No case studies | Open |
| OI-012 | 🟢 P2 | Cybersecurity service — credibility gap | Open |
| OI-013 | 🟢 P2 | No Article schema on blog posts | Open |
| OI-014 | 🟢 P2 | Google Fonts external — use next/font/google | Open |
| OI-015 | 🟢 P2 | No lead capture on homepage | Open |

