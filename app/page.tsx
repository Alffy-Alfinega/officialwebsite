import type { Metadata } from 'next'
import HeroSection from '@/components/sections/Hero'
import MarqueeTicker from '@/components/sections/MarqueeTicker'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Alffy — Web Design, SEO & Digital Agency | Kampala, Uganda',
  description:
    'Alffy is a Kampala-based digital agency offering web design, SEO, branding, animation, and digital marketing for businesses across Uganda and East Africa.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
