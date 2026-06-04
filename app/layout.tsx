import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import CookieBanner from '@/components/ui/CookieBanner'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://alffy.alfinega.com'),
  title: {
    default: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    template: '%s | Alffy (Alfinega) — Kampala, Uganda',
  },
  description:
    'Alffy (Alfinega) is a digital agency in Kampala, Uganda delivering web design, SEO, branding, animation, and digital marketing across East Africa.',
  keywords: [
    'web design Uganda', 'web design Kampala', 'SEO agency Kampala', 'SEO Uganda',
    'digital agency Uganda', 'digital agency Kampala', 'branding Kampala', 'branding Uganda',
    '3D animation Uganda', 'digital marketing East Africa', 'digital marketing Uganda',
    'graphic design Kampala', 'video editing Uganda', 'website design Uganda',
    'Alfinega', 'Alffy', 'Makindye Kampala agency', 'content creation Uganda',
    'architectural design Uganda', 'image editing Uganda',
  ],
  openGraph: {
    title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing for businesses across East Africa.',
    url: 'https://alffy.alfinega.com',
    siteName: 'Alffy (Alfinega)',
    locale: 'en_UG',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Alffy (Alfinega) Digital Agency — Kampala, Uganda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing.',
    images: ['/og-image.png'],
    site: '@alfinega',
    creator: '@alfinega',
  },
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png',  sizes: '32x32',             type: 'image/png' },
      { url: '/favicon-16x16.png',  sizes: '16x16',             type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://alffy.alfinega.com',
  },
}

const GA_ID = 'G-5EKJN7MWHC'

// LocalBusiness structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://alffy.alfinega.com',
  name: 'Alffy (Alfinega)',
  alternateName: ['Alffy', 'Alfinega'],
  description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, 3D animation, video editing, graphic design, and digital marketing.',
  url: 'https://alffy.alfinega.com',
  telephone: '+256747113059',
  email: 'hello@alfinega.com',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D & 3D Animation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mass Data Entry' } },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/alfinega',
    'https://www.instagram.com/alfinega',
    'https://twitter.com/alfinega',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="theme-color" content="#04040C" />
      </head>
      <body>
        {/* Google Analytics — consent mode: default denied, updated on accept */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_location:window.location.href});`}
        </Script>
        <SmoothScrollProvider>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <CookieBanner />
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
