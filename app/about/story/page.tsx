import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How Alffy (Alfinega) started in Kampala, Uganda and grew into a full-service digital agency.',
}

const TIMELINE = [
  { year: 'Jan 2025', title: 'Alfinega incorporated', body: 'Mr. Mullo Nashiifu registers Alfinega in Uganda with a single mission: build world-class digital services at local prices. He brings on Mr. Musoke Joshua Prosper as CTO and Mrs. Mwawule Christiana as Managing Director. The first months are spent building systems, processes, and infrastructure before taking on clients.' },
  { year: 'Mid 2025', title: 'First client projects', body: 'We take on our first web design projects — Makindye Junior Academy and Makindye Secondary School. These projects test our process and prove we can deliver professional, fast-loading websites that schools and their communities are proud of.' },
  { year: 'Late 2025', title: 'Service expansion', body: 'Client demand pushes us to formalise all six service lines: web design, SEO, branding, media production, architectural visualisation, and cybersecurity. We build out our tooling and workflows for each.' },
  { year: 'Jan 2026', title: 'Alffy brand launches publicly', body: 'We launch the Alffy brand publicly — the consumer-facing name for Alfinega\'s agency services. The new website goes live at alffy.alfinega.com and we begin active marketing across Uganda.' },
  { year: '2026 →',   title: 'Growing the team',    body: 'With 8 live projects and growing demand, we open hiring for our first three roles: Junior Web Developer, Graphic Designer, and SEO & Content Specialist. The goal is to double capacity by mid-2026.' },
]

export default function StoryPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Our Story"
        title={<>Why we started<br /><span style={{ color: '#2C6FED' }}>Alffy.</span></>}
        variant="about"
        height="44vh"
      />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 40px 80px' }}>

        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: '#9A9ABB', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 64 }}>
          <p>Uganda has no shortage of talent. What it has lacked is a digital agency that treats local clients the way international agencies treat theirs — with professional process, transparent pricing, and genuine accountability.</p>
          <p>We saw Ugandan SMEs spending money on websites that looked outdated on day one, being charged monthly retainers for SEO work nobody could explain, and working with designers who disappeared after the first payment. We saw that gap and decided to close it.</p>
          <p>Alfinega was incorporated in January 2025 with one founder and one belief: that being based in Kampala should never mean settling for less. Mr. Mullo Nashiifu spent the first months building out internal processes, tooling, and service infrastructure, and bringing on the right leadership, before taking on a single client.</p>
          <p>When we did start taking clients, we made one rule: we would not promise what we could not deliver. Every project gets a clear scope, a fixed price, a realistic timeline, and a direct line to the person doing the work.</p>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {TIMELINE.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 24, alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#2C6FED', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{item.year}</span>
                <div style={{ width: 1, flex: 1, minHeight: 48, background: i < TIMELINE.length - 1 ? '#1C1C34' : 'transparent', marginTop: 8 }} />
              </div>
              <div style={{ paddingBottom: 40 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: '#E4E4F0', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, paddingTop: 48, borderTop: '1px solid #1C1C34', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/about/team" style={{ padding: '12px 24px', borderRadius: 100, background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Meet the team</Link>
          <Link href="/contact" style={{ padding: '12px 24px', borderRadius: 100, border: '1px solid #1C1C34', color: '#CCCCEE', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Work with us</Link>
        </div>
      </div>
    </div>
  )
}
