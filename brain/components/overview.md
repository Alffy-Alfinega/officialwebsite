# Component Architecture

The hierarchy is rendered by [[routes/map#Root Layout\|app/layout.tsx]] which wraps every page. Styling follows [[foundation/design]].

## Hierarchy
```
RootLayout
├── PagePreloader (brand loading screen, 600ms display + fade)
├── SmoothScrollProvider (Lenis — [[foundation/stack]])
├── Navbar (fixed, dropdowns + mobile slide-out)
├── <main>{children}</main>
│   └── [Page Component] — see [[routes/map]]
│       ├── BabylonScene (decorative 3D background) — see [[components/r3f]]
│       └── [Section Components]
├── Footer (4-column grid + newsletter)
├── CookieBanner — analytics consent ([[routes/analytics]])
├── Vercel <Analytics /> + <SpeedInsights />
└── Google Analytics (gtag.js) — [[routes/analytics]]
```

## Components

### Navigation
| Component | File | Type | Data Source |
|---|---|---|---|
| Navbar | `components/nav/Navbar.tsx` | Client | Hardcoded service links (see [[data/overview]]) |
| Footer | `components/layout/Footer.tsx` | Server | Hardcoded service links + newsletter ([[apis/newsletter]]) |

### Layout
| Component | File | Notes |
|---|---|---|
| SmoothScrollProvider | `components/layout/SmoothScrollProvider.tsx` | Lenis, duration 1.1, RAF loop |

### Homepage Sections
| Component | File | Related Data |
|---|---|---|
| Hero | `components/sections/Hero.tsx` | R3F particle wave ([[components/r3f#Hero Particle Wave]]) |
| MarqueeTicker | `components/sections/MarqueeTicker.tsx` | All 12 services ([[business/services]]) |
| ServicesSection | `components/sections/ServicesSection.tsx` | Service data ([[data/overview]]) |
| WhySection | `components/sections/WhySection.tsx` | — |
| TestimonialsSection | `components/sections/TestimonialsSection.tsx` | — |
| ProcessSection | `components/sections/ProcessSection.tsx` | — |
| CTASection | `components/sections/CTASection.tsx` | Links to [[routes/map#Page Routes\|/contact]] |

### UI Components
| Component | File | API Endpoint |
|---|---|---|
| Logo | `components/ui/Logo.tsx` | — |
| ContactForm | `components/ui/ContactForm.tsx` | [[apis/contact]] |
| NewsletterForm | `components/ui/NewsletterForm.tsx` | [[apis/newsletter]] |
| CookieBanner | `components/ui/CookieBanner.tsx` | — (localStorage + [[routes/analytics]]) |
| PagePreloader | `components/ui/PagePreloader.tsx` | — |
| PricingFAQ | `components/ui/PricingFAQ.tsx` | Pricing data ([[business/pricing]]) |

## State Management
- No global state library — local `useState` + `useRef`
- Cookie consent via `localStorage` (see [[routes/analytics#Cookie Consent]])
- Form state managed locally

## Styling Patterns
- `cn()` utility: `twMerge(clsx(inputs))` for conditional classes — from `@/lib/utils`
- CSS custom properties via inline `style` props — see [[foundation/design]]
- `tag` class, `card-hover`, `grid-lines` — see [[foundation/design#Utility Classes]]
