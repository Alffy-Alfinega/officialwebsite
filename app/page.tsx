// ============================================================
// Home page (route: /).
// Composes the landing page from multiple section components,
// each responsible for one visual block (hero, marquee,
// services, why us, testimonials, process, CTA).
// ============================================================

// Metadata type for type‑safe SEO metadata exports.
import type { Metadata } from 'next'
// Each of these section components lives in components/sections/
// and encapsulates its own markup, styles, and logic.
import HeroSection from '@/components/sections/Hero'
import MarqueeTicker from '@/components/sections/MarqueeTicker'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

// Page‑level metadata – overrides or merges with the root
// layout's `title.template` and `description`.
export const metadata: Metadata = {
  title: 'Alffy — Web Design, SEO & Digital Agency | Kampala, Uganda',
  description:
    'Alffy is a Kampala-based digital agency offering web design, SEO, branding, animation, and digital marketing for businesses across Uganda and East Africa.',
}

export default function HomePage() {
  return (
    // React Fragment – groups children without adding an extra
    // DOM node. Each section is a full‑width block stacked
    // vertically.
    <>
      <HeroSection />       {/* Large hero with headline, subtext, and CTA */}
      <MarqueeTicker />     {/* Auto‑scrolling brand / tech logos */}
      <ServicesSection />   {/* Grid of services offered */}
      <WhySection />        {/* "Why choose us" value props */}
      <TestimonialsSection /> {/* Client quotes / reviews */}
      <ProcessSection />    {/* Step‑by‑step how‑it‑works */}
      <CTASection />        {/* Final call‑to‑action banner */}
    </>
  )
}
