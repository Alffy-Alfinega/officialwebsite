# Alffy v2 — Official Website

A complete redesign of [alffy.alfinega.com](https://alffy.alfinega.com) built from scratch with a bold editorial dark aesthetic — **blue `#2C6FED` and gold `#D4A843` on deep black `#04040C`** — and an interactive R3F (React Three Fiber) particle wave hero.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| 3D / WebGL | React Three Fiber + Three.js |
| Animation | Framer Motion |
| Fonts | Syne (display) · Outfit (body) · JetBrains Mono (via next/font) |
| Email | Nodemailer (SMTP) |
| Analytics | Vercel Analytics + Speed Insights + Google Analytics (GA4) |
| Deployment | Vercel |

---

## Project Structure

```
alffy-v2/
├── app/
│   ├── page.tsx                    ← Homepage (7 sections)
│   ├── layout.tsx                  ← Root layout + next/font + GA + structured data
│   ├── globals.css                 ← Design system variables + utilities
│   ├── sitemap.ts                  ← Auto-generated sitemap from data files
│   ├── robots.ts                   ← SEO robots file
│   ├── not-found.tsx               ← Custom 404 page
│   ├── api/
│   │   ├── contact/route.ts        ← Contact form API (Nodemailer SMTP)
│   │   └── newsletter/route.ts     ← Newsletter signup API
│   ├── services/
│   │   ├── page.tsx                ← All 12 services list
│   │   └── [slug]/page.tsx         ← Individual service detail page
│   ├── portfolio/page.tsx          ← Portfolio grid with category filtering
│   ├── about/
│   │   ├── page.tsx                ← About overview (stats, timeline, team)
│   │   ├── story/page.tsx          ← Origin story
│   │   ├── team/page.tsx           ← Team grid
│   │   └── why/page.tsx            ← Why choose Alffy
│   ├── pricing/page.tsx            ← Web, SEO, and design packages + FAQ
│   ├── blog/
│   │   ├── page.tsx                ← Blog listing (6 posts)
│   │   └── [slug]/page.tsx         ← Individual blog post
│   ├── contact/page.tsx            ← Contact form + info
│   ├── careers/page.tsx            ← Job openings
│   └── [privacy-policy|terms|data-handling]/
├── components/
│   ├── r3f/
│   │   ├── ParticleWave.tsx        ← 16,384-particle instanced wave mesh (128×128)
│   │   ├── HeroCanvas.tsx          ← R3F Canvas wrapper for hero
│   │   ├── FloatingGeometry.tsx    ← Africa globe with 3,200 Fibonacci points
│   │   ├── SceneVariants.tsx       ← 13+ unique 3D scenes per route
│   │   ├── SceneCanvas.tsx         ← Route-based scene switcher
│   │   └── FloatingGeometryWrapper.tsx  ← Client boundary (no SSR)
│   ├── nav/Navbar.tsx              ← Fixed nav + dropdowns + mobile menu
│   ├── layout/
│   │   ├── Footer.tsx              ← 4-column footer + newsletter
│   │   └── SmoothScrollProvider.tsx ← Lenis smooth scroll
│   ├── sections/
│   │   ├── Hero.tsx                ← Full-screen hero over R3F canvas
│   │   ├── ServicesSection.tsx     ← Animated 12-service list
│   │   ├── PortfolioGrid.tsx       ← 6 real projects with filtering
│   │   ├── WhySection.tsx          ← 6-card reasons grid
│   │   ├── TestimonialsSection.tsx ← Auto-scrolling testimonial carousel
│   │   ├── ProcessSection.tsx      ← 5-step process visualisation
│   │   ├── MarqueeTicker.tsx       ← Infinite scroll ticker
│   │   └── CTASection.tsx          ← Bottom CTA banner
│   └── ui/
│       ├── ContactForm.tsx         ← Contact form (client, with API call)
│       ├── NewsletterForm.tsx      ← Newsletter signup (client)
│       ├── CookieBanner.tsx        ← Cookie consent (localStorage)
│       ├── PricingFAQ.tsx          ← Accordion FAQ component
│       └── Logo.tsx                ← Logo with size variants
├── data/
│   ├── services.ts                 ← All 12 services (single source of truth)
│   ├── blog.ts                     ← Blog post metadata
│   ├── navigation.ts              ← Nav + footer link structure
│   └── team.ts                    ← Team roles and bios
└── lib/utils.ts                   ← cn() helper (clsx + tailwind-merge)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

### Required for contact form and newsletter emails

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hello@alfinega.com
SMTP_PASS=xxxx xxxx xxxx xxxx   # Gmail App Password (not your normal password)
CONTACT_TO=hello@alfinega.com
```

### Analytics (optional)

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Vercel auto-deploys from the `alffy` branch. Add your environment variables in **Vercel → Settings → Environment Variables**.

---

## Design System

| Token | Value |
|---|---|
| Background | `#04040C` |
| Surface | `#0A0A16` / `#10101E` |
| Border | `#1C1C34` |
| Primary accent | `#2C6FED` (blue) |
| Secondary accent | `#D4A843` (gold) |
| Text | `#E4E4F0` / `#CCCCEE` / `#8A8AAA` |
| Display font | Syne 400–800 |
| Body font | Outfit 300–600 |
| Mono font | JetBrains Mono 400–500 |

### CSS custom properties (in `globals.css`)

```css
--bg, --surface, --border, --text, --text-muted, --text-faint
--blue, --blue-dim, --gold
```

---

## R3F Hero — How It Works

`components/r3f/ParticleWave.tsx` renders a **128×128 instanced mesh** (16,384 sphere particles) that:

1. **Base wave** — four overlapping sine/cosine wave layers with per-particle phase randomness
2. **Mouse ripple** — on mouse move, a dampened radial ripple emanates from the cursor position
3. **Depth fog** — Three.js fog fades particles into the background
4. **Performance** — uses `instancedMesh` for a single draw call; dpr capped at 1.5

The Canvas is dynamically imported with `ssr: false` and wrapped with an absolute-positioned div so text layers above it.

---

## Customisation Guide

### Add a new service

Edit `data/services.ts` — the service page, sitemap, nav dropdown, and contact form all auto-update.

### Add a portfolio project

Edit the `projects` array in `components/sections/PortfolioGrid.tsx`.

### Add a blog post

Add metadata to `data/blog.ts` and content to `app/blog/[slug]/page.tsx`.

### Change accent colour

Update `--blue` in `globals.css` and find/replace `#2C6FED` across the codebase.

---

## Contact

**Alffy (Alfinega)**
Makindye, Kampala, Uganda
hello@alfinega.com
+256 747 113 059
