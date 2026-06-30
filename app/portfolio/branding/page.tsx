import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = { title: 'Branding Portfolio' }

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Portfolio"
        title="Branding Portfolio"
        subtitle="Brand identities and visual systems we have created for businesses across Uganda."
        variant="portfolio-branding"
        height="42vh"
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 40px 80px' }}>
        <Link href="/portfolio" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>← All work</Link>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: '#8A8AAA', maxWidth: 500, lineHeight: 1.75, marginBottom: 32 }}>These projects are part of our full portfolio. View the complete portfolio to see all live work.</p>
        <Link href="/portfolio" style={{ padding: '12px 28px', borderRadius: 100, background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>View all projects</Link>
      </div>
    </div>
  )
}
