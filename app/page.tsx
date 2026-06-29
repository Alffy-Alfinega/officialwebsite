import type { Metadata } from 'next'
import HeroSection         from '@/components/sections/HeroSection'
import MarqueeTicker       from '@/components/sections/MarqueeTicker'
import ServicesSection     from '@/components/sections/ServicesSection'
import WhySection          from '@/components/sections/WhySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection      from '@/components/sections/ProcessSection'
import CTASection          from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Alffy (Alfinega) — Web Design, SEO & Digital Agency | Kampala, Uganda',
  description: 'Full-service digital agency in Kampala, Uganda — web design, SEO, branding, animation, and digital marketing for businesses across East Africa.',
}

export default function Home() {
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
