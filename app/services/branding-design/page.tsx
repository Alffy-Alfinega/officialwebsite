import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Branding & Graphic Design',
  description: 'Brand identity, logos, and visual design for Ugandan businesses. Based in Kampala, Uganda.',
}

const DELIVERABLES = [
  'Logo design', 'Brand colour palettes', 'Typography systems', 'Brand guidelines',
  'Social media kits', 'Business card and stationery design', 'Packaging design mockups', 'Presentation templates',
]

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Service 03"
        title={<>Branding &<br /><span style={{ color: '#2C6FED' }}>Graphic Design.</span></>}
        subtitle="Brand identity, logos, and visual design for Ugandan businesses that need to look professional and consistent everywhere."
        variant="branding-design"
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px' }}>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 24 }}>What we deliver</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10 }}>
            {DELIVERABLES.map((d) => (
              <div key={d} style={{ display: 'flex', gap: 10, padding: '14px 16px', border: '1px solid #1C1C34', borderRadius: 10, background: '#0A0A16' }}>
                <span style={{ color: '#2C6FED', flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ padding: '32px', border: '1px solid rgba(44,111,237,0.2)', borderRadius: 16, background: 'rgba(44,111,237,0.04)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: '#E4E4F0', marginBottom: 6 }}>Ready to get started?</p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA' }}>Tell us about your project and we will send you a fixed quote within 24 hours.</p>
          </div>
          <Link href="/contact" style={{ padding: '12px 28px', borderRadius: 100, background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>Get a quote</Link>
        </div>
      </div>
    </div>
  )
}
