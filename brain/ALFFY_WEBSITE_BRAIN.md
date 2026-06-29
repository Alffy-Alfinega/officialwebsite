# Alffy Website — Brain / Knowledge Map
*Last updated: 2026-06-28*

## Project Identity
- **Company:** Alffy (Alfinega) — digital agency, Kampala Uganda
- **Repo:** github.com/Alffy-Alfinega/officialwebsite
- **Branch:** `alffy`
- **Backup branch:** `backup/pre-rewrite` (commit 403fc6a — stable, pre-rewrite)
- **Live URL:** https://alffy.alfinega.com

## Stack
- Next.js 16.2.9 (App Router, Turbopack)
- React 19.2.7 (with React 19 use client directives)
- TypeScript 6.0.3
- Tailwind CSS 4.3.1 + @tailwindcss/postcss
- @babylonjs/core 9.14.0 (imperative, useEffect pattern — NOT react-babylonjs)
- react-babylonjs 4.0.2 (installed but BROKEN for height reasons — DO NOT USE for canvas)
- framer-motion 12.42.0
- Lenis 1.3.25 (smooth scroll)
- Vercel Analytics + Speed Insights
- nodemailer (contact + newsletter APIs)

## Critical Technical Fact — 3D Canvas
The `<Engine>` component from react-babylonjs renders its own canvas internally.
When `style={{ width:'100%', height:'100%' }}` is applied, the height resolves to 0
unless a measured pixel height exists in every ancestor.

**WORKING PATTERN (use this):**
```tsx
// BabylonSceneCanvas.tsx
const canvasRef = useRef<HTMLCanvasElement>(null)
useEffect(() => {
  const engine = new Engine(canvas, true, {...})
  // imperative scene build
  engine.runRenderLoop(() => scene.render())
}, [variant])
return <canvas ref={canvasRef} className="w-full h-full" />
```

**BROKEN PATTERN (never use):**
```tsx
<Engine style={{ width:'100%', height:'100%' }}>
  <Scene>...</Scene>
</Engine>
```

## Design System (CSS vars in :root)
| Token | Value |
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
| --tag-border | #2A2A4A |
| --tag-color | #9090B8 |

Fonts: Syne (headings), Outfit (body), JetBrains Mono (mono)
Loaded via Google Fonts `<link>` in layout.tsx

## Routes (36 total static + 3 API)
- / (home)
- /about, /about/story, /about/team, /about/why
- /services, /services/web-design, /services/seo-marketing
- /services/branding-design, /services/media-production
- /services/architectural-visualisation, /services/cybersecurity-data
- /portfolio, /portfolio/web-design, /portfolio/branding, /portfolio/video
- /blog + 6 blog posts
- /pricing, /careers, /contact
- /privacy-policy, /terms, /data-handling
- /api/contact, /api/newsletter, /api/indexnow
- /sitemap.ts, /robots.ts

## 3D Scene Variants (15)
home, about, contact, services, web-design, seo-marketing,
branding-design, media-production, arch-vis, cybersecurity,
blog, portfolio, pricing, careers, legal

Each variant: ArcRotateCamera, HemisphericLight, MeshBuilder primitives,
registerBeforeRender animation loop, transparent clearColor.

## Component Map
```
app/
  layout.tsx          ← Root: GA4, JSON-LD, fonts, providers
  page.tsx            ← Home: Hero + Marquee + Services + Why + Testimonials + Process + CTA
  globals.css         ← Tailwind v4 @theme + :root vars + keyframes

components/
  3d/
    BabylonScene.tsx        ← SSR-safe dynamic() wrapper
    BabylonSceneCanvas.tsx  ← Imperative Engine/Scene (15 variants)
  nav/Navbar.tsx            ← Fixed nav, scroll-aware, dropdowns, mobile overlay
  layout/
    Footer.tsx              ← 4-col: brand + services + company + newsletter
    SmoothScrollProvider.tsx ← Lenis init
  sections/
    Hero.tsx                ← Full-screen, 3D bg, animated headline, stats bar
    MarqueeTicker.tsx       ← CSS marquee
    ServicesSection.tsx     ← 6 rows with IntersectionObserver slide-in
    WhySection.tsx          ← 6 cards grid
    TestimonialsSection.tsx ← RAF horizontal scroll marquee
    ProcessSection.tsx      ← 5-step sticky layout
    CTASection.tsx          ← CTA banner
    PortfolioGrid.tsx       ← Filterable grid + live iframe previews
  ui/
    PagePreloader.tsx       ← Fades out after 600ms
    CookieBanner.tsx        ← GDPR, GA4 consent
    ContactForm.tsx         ← 5-field form → /api/contact
    NewsletterForm.tsx      ← Email → /api/newsletter
    PricingFAQ.tsx          ← Accordion
    Logo.tsx                ← Logo with size variants

lib/
  utils.ts      ← cn() (clsx + tailwind-merge)
  api-utils.ts  ← checkRateLimit, isAllowedOrigin, validateBodySize
```

## Key Decisions & Lessons
1. react-babylonjs <Engine> breaks hero height → use imperative useEffect always
2. Tailwind v4: @theme block in globals.css, @import 'tailwindcss', postcss plugin
3. All custom colors/fonts in @theme generate utility classes (font-syne, etc.)
4. `z-9999` used for preloader/cookie banner (custom z-index, not Tailwind default)
5. Animations inline: `animate-[fadeUp_1.4s_0.2s_cubic-bezier(...)]` arbitrary values
6. Google Fonts loaded via <link> in layout.tsx head, not next/font
7. GA4 consent mode defaults to denied; CookieBanner grants on accept
8. vercel.json: CSP headers, 2 redirects (seo and website-designing)
9. Portfolio uses live iframe previews with IntersectionObserver lazy load

## Session Log
| Date | Action |
|---|---|
| 2026-06-18 | stability push (403fc6a) — last known good state |
| 2026-06-28 | Tailwind v4 migration, deps update |
| 2026-06-28 | react-babylonjs migration attempt → BROKE hero |
| 2026-06-28 | Reverted to imperative useEffect pattern |
| 2026-06-28 | Created backup/pre-rewrite branch |
| 2026-06-28 | FULL REWRITE — see below |

## Rewrite Goals
- Keep all content, routes, APIs identical
- Fix the 3D canvas height problem permanently
- Consolidate duplicate CSS variable definitions
- Remove react-babylonjs (broken for this use case)
- Keep imperative Babylon.js pattern
- Clean, production-ready code
