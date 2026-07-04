import type { Metadata } from 'next'
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar        from '@/components/nav/Navbar'
import Footer        from '@/components/layout/Footer'
import LenisProvider from '@/components/layout/LenisProvider'
import Preloader     from '@/components/ui/Preloader'
import CookieBanner  from '@/components/ui/CookieBanner'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { Analytics }    from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

// ─── Self-hosted fonts via next/font ──────────────────────────────────────────
// Eliminates the external Google Fonts request, improves LCP, removes GDPR risk.
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const GA   = 'G-5EKJN7MWHC'
const BASE = 'https://alffy.alfinega.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default:  'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    template: '%s | Alffy (Alfinega)',
  },
  description: 'Alffy (Alfinega) is a full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing across East Africa.',
  keywords: [
    'web design Uganda','web design Kampala','SEO agency Uganda','digital agency Kampala',
    'branding Uganda','digital marketing East Africa','Alfinega','Alffy',
    'graphic design Kampala','video editing Uganda','website design Uganda',
  ],
  openGraph: {
    title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
    description: 'Full-service digital agency in Kampala, Uganda.',
    url: BASE, siteName: 'Alffy (Alfinega)', locale: 'en_UG', type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card:'summary_large_image', site:'@Alffy_Alfinega', images:['/og-image.png'] },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
  alternates: { canonical: BASE },
}

const ld = {
  '@context':'https://schema.org','@type':'LocalBusiness',
  name:'Alffy (Alfinega)', url: BASE,
  telephone:'+256747113059', email:'contact@alfinega.com',
  foundingDate:'2025-01-01',
  address:{ '@type':'PostalAddress', streetAddress:'Makindye', addressLocality:'Kampala', addressCountry:'UG' },
  logo:`${BASE}/logo.png`, image:`${BASE}/og-image.png`,
  priceRange:'$$',
  sameAs:[
    'https://www.instagram.com/alffy.alfinega',
    'https://www.facebook.com/alffyalfinega',
    'https://x.com/Alffy_Alfinega',
    'https://www.linkedin.com/company/alfinega',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#04040C" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>
        {/* GA4 consent — denied by default, CookieBanner grants on accept */}
        <Script id="ga-consent-default" strategy="beforeInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied'});
        `}</Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','${GA}');
        `}</Script>

        <Preloader />
        <LenisProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
