// ============================================================
// Root layout — wraps every page in the app.
// Sets up HTML structure, fonts, Google Analytics, structured
// data (JSON-LD), and global providers (smooth scroll, nav,
// footer, cookie banner).
//
// Next.js uses this file (by convention) as the top-level
// layout that all route pages render inside.
// ============================================================

// Import the Metadata type from Next.js so we can type-check our
// SEO / social‑sharing metadata object exported below.
import type { Metadata } from 'next'
// Script component lets us load third‑party scripts (<script>
// tags) with fine‑grained control over when they execute.
import Script from 'next/script'
// Global CSS file — imported here so it applies to all pages.
import './globals.css'
// Custom components used on every page:
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import CookieBanner from '@/components/ui/CookieBanner'
import PagePreloader from '@/components/ui/PagePreloader'
// Vercel's first‑party analytics & speed‑insight scripts.
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Next.js special export: `metadata` is read by Next.js to
// generate <title>, <meta>, Open‑Graph, Twitter Card, favicon,
// and other <head> tags automatically.
export const metadata: Metadata = {
  // Base URL used to resolve relative URLs in metadata fields.
  metadataBase: new URL('https://alffy.alfinega.com'),
  // `title` can be a plain string or an object with `default`
  // (fallback) and `template` (inserted by child pages).
  title: {
    default: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    template: '%s | Alffy (Alfinega) — Kampala, Uganda',
  },
  description:
    'Alffy (Alfinega) is a digital agency in Kampala, Uganda delivering web design, SEO, branding, animation, and digital marketing across East Africa.',
  // The `<meta name="keywords">` tag — less important for SEO
  // today but still included for completeness.
  keywords: [
    'web design Uganda', 'web design Kampala', 'SEO agency Kampala', 'SEO Uganda',
    'digital agency Uganda', 'digital agency Kampala', 'branding Kampala', 'branding Uganda',
    '3D animation Uganda', 'digital marketing East Africa', 'digital marketing Uganda',
    'graphic design Kampala', 'video editing Uganda', 'website design Uganda',
    'Alfinega', 'Alffy', 'Makindye Kampala agency', 'content creation Uganda',
    'architectural design Uganda', 'image editing Uganda',
  ],
  // Open‑Graph metadata — controls how the page appears when
  // shared on Facebook, LinkedIn, Discord, etc.
  openGraph: {
    title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing for businesses across East Africa.',
    url: 'https://alffy.alfinega.com',
    siteName: 'Alffy (Alfinega)',
    locale: 'en_UG',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Alffy (Alfinega) Digital Agency — Kampala, Uganda' }],
  },
  // Twitter Card metadata — controls how the page looks in
  // tweets (summary card with large image).
  twitter: {
    card: 'summary_large_image',
    title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing.',
    images: ['/og-image.png'],
    site: '@alfinega',
    creator: '@alfinega',
  },
  // Favicons and Apple touch icon served from the /public folder.
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png',  sizes: '32x32',             type: 'image/png' },
      { url: '/favicon-16x16.png',  sizes: '16x16',             type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  // Link to the PWA manifest (also in /public).
  manifest: '/manifest.json',
  // Robots meta tag — tells search engines to index and follow links.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Canonical URL — prevents duplicate‑content issues.
  alternates: {
    canonical: 'https://alffy.alfinega.com',
  },
}

// Google Analytics measurement ID.
const GA_ID = 'G-5EKJN7MWHC'

// Structured data object (JSON‑LD format) that tells search
// engines this is a LocalBusiness — includes address, phone,
// opening hours, services, and social links. This powers rich
// results in Google (knowledge panel, local search).
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://alffy.alfinega.com',
  name: 'Alffy (Alfinega)',
  alternateName: ['Alffy', 'Alfinega'],
  description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, 3D animation, video editing, graphic design, and digital marketing.',
  url: 'https://alffy.alfinega.com',
  telephone: '+256747113059',
  email: 'contact@alfinega.com',
  foundingDate: '2025-01-01',
  image: 'https://alffy.alfinega.com/og-image.png',
  logo: 'https://alffy.alfinega.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Makindye',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.2886,
    longitude: 32.5825,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Agency Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Digital Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Graphic Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video, Animation & Image Editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architectural Visualisation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity & Data Services' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/alffyalfinega',
    'https://www.instagram.com/alffy.alfinega',
    'https://x.com/Alffy_Alfinega',
    'https://www.tiktok.com/@alffy.alfinega',
    'https://www.linkedin.com/company/alfinega',
    'https://wa.me/256747113059',
  ],
}

// The RootLayout component receives `children` – whatever page
// content Next.js is rendering for the current route. The layout
// itself does not re‑render on navigation (only `children`
// changes), so state like the cookie banner is preserved.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `data-theme="dark"` is a CSS selector hook used in
    // globals.css to apply dark‑theme colours everywhere.
    <html lang="en" data-theme="dark">
      <head>
        {/* Preconnect to Google Fonts servers so the font
            downloads start as early as possible. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load three font families used across the site. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Inject the JSON‑LD structured data inline inside a
            <script type="application/ld+json"> tag. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Sets the browser chrome/tab‑bar colour on mobile. */}
        <meta name="theme-color" content="#04040C" />
      </head>
      <body>
        {/* ---- Google Analytics: Consent Mode ---- */}
        {/* Runs before the page renders: sets default consent to
            "denied". Later the CookieBanner updates this to
            "granted" if the user accepts. */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});`}
        </Script>
        {/* Load the Google Analytics gtag library (after
            page is interactive so it doesn't block rendering). */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        {/* Initialise gtag and send the first pageview. */}
        <Script id="ga-config" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_location:window.location.href});`}
        </Script>

        {/* Page preloader — fades out after hydration */}
        <PagePreloader />

        {/* Wrap page content in the smooth‑scroll provider
            (Lenis). Inside: navbar, main content, footer, and
            cookie banner. */}
        <SmoothScrollProvider>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <CookieBanner />
        </SmoothScrollProvider>

        {/* Vercel analytics & speed‑insights scripts – these
            are placed outside the smooth‑scroll wrapper
            because they don't need Lenis. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
