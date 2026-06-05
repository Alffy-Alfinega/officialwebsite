# Alffy v2 — Official Website

A complete redesign of [alffy.alfinega.com](https://alffy.alfinega.com) built from scratch with a bold editorial dark aesthetic — **blue `#2C6FED` and gold `#D4A843` on deep black `#04040C`** — featuring decorative 3D scenes built with Babylon.js, dynamically loaded on the client side.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| 3D / WebGL | Babylon.js (via @babylonjs/core) |
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
│   ├── 3d/
│   │   ├── BabylonSceneCanvas.tsx  ← Babylon.js scene (box, sphere, torus)
│   │   └── BabylonScene.tsx        ← Client-only dynamic wrapper (no SSR)
│   ├── nav/Navbar.tsx              ← Fixed nav + dropdowns + mobile menu
│   ├── layout/
│   │   ├── Footer.tsx              ← 4-column footer + newsletter
│   │   └── SmoothScrollProvider.tsx ← Lenis smooth scroll
│   ├── sections/
│   │   ├── Hero.tsx                ← Full-screen hero over Babylon.js canvas
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
SMTP_USER=contact@alfinega.com
SMTP_PASS=<your-gmail-app-password>
CONTACT_TO=contact@alfinega.com
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

## 3D Scene — How It Works

`components/3d/BabylonSceneCanvas.tsx` creates a rotating decorative scene using Babylon.js:

1. **Engine** — creates the WebGL renderer bound to a `<canvas>` element
2. **Scene** — the 3D world container
3. **ArcRotateCamera** — orbits around the scene (alpha, beta, radius)
4. **HemisphericLight** — ambient light from above
5. **Meshes** — a box, sphere, and torus with semi-transparent coloured materials
6. **Animation** — `registerBeforeRender` updates rotation/position each frame
7. **Render loop** — `engine.runRenderLoop` drives continuous rendering

The component is dynamically imported with `ssr: false` so WebGL code never runs on the server.

---

## Customisation Guide

### Add a new service

Edit the `services` arrays in `app/services/page.tsx`, `app/services/[slug]/page.tsx`, and `components/sections/ServicesSection.tsx`.

### Add a portfolio project

Edit the `projects` array in `components/sections/PortfolioGrid.tsx`.

### Add a blog post

Add a new page under `app/blog/<slug>/page.tsx` with its own `metadata` export and hardcoded content array.

### Change accent colour

Update `--blue` in `globals.css` and find/replace `#2C6FED` across the codebase.

---

## Contact

**Alffy (Alfinega)**
Makindye, Kampala, Uganda
contact@alfinega.com
+256 747 113 059
