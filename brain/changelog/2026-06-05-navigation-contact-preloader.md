# 2026-06-05 — Nav restructure, email migration, font size reduction, preloader

## Changes

### Navbar
- Reduced navLinks to 5 items: Home, Services, Portfolio, About, Pricing
- Removed Contact from navLinks
- Removed separate "Contact" text link on desktop nav right side
- "Get Started" button href changed from `/pricing` to `/contact`
- All 5 nav items render in desktop nav (removed `navLinks.slice(0, -1)`)
- Mobile menu email changed from hello@alfinega.com to contact@alfinega.com
- File: `components/nav/Navbar.tsx`

### Email migration
- All hello@alfinega.com → contact@alfinega.com (24 source files + docs/brain)
- Contact API route: CONTACT_TO fallback updated, auto-reply email body updated
- Newsletter API route: CONTACT_TO fallback updated, email footer signature updated
- `.env.example`: SMTP_USER and CONTACT_TO set to contact@alfinega.com
- README.md and AGENTS.md env examples updated
- Structured data (app/layout.tsx): email field updated
- All display email references updated (Footer, ContactForm, Navbar mobile menu, contact page, pricing page, terms page, privacy policy, data handling page)
- Careers page: application emails changed to careers@alfinega.com

### Hero font size reduced
- Hero headline: `clamp(3.5rem, 11vw, 10rem)` → `clamp(2.5rem, 7vw, 5.5rem)`
- File: `components/sections/Hero.tsx`

### All other page h1 font sizes standardized
- Services, About, Contact pages: `clamp(3rem, 8vw, 7rem)` → `clamp(2.5rem, 7vw, 5.5rem)`
- Careers, Pricing, Blog listing, Portfolio pages: `clamp(3rem, 7vw, 6rem)` → `clamp(2.5rem, 7vw, 5.5rem)`
- All 6 service detail pages: `clamp(2rem, 7vw, 6.5rem)` → `clamp(2rem, 6vw, 4.5rem)`

### Page Preloader
- New file: `components/ui/PagePreloader.tsx`
- 'use client' component with useEffect-based removal
- Shows "Alffy" in Syne 800, brand blue, centered on dark background with animated loading bar
- Loading bar animation `preloaderBar` added to `app/globals.css` (scaleX 0→1 over 1.8s)
- Added to root layout below body, before SmoothScrollProvider
- Extra 600ms display after mount before fade-out

### Build
- Build confirms 36/36 static pages, zero errors

## Files changed (~36 files touched)
- `components/nav/Navbar.tsx`
- `components/ui/PagePreloader.tsx` (new)
- `components/sections/Hero.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/services/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/careers/page.tsx`
- `app/pricing/page.tsx`
- `app/blog/page.tsx`
- `app/portfolio/page.tsx`
- `app/services/*/page.tsx` (6 service detail pages)
- `app/api/contact/route.ts`
- `app/api/newsletter/route.ts`
- `.env.example`
- Various display email references across pages
- `brain/` — this entry + updated across notes
