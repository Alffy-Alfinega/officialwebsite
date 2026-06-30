import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing',
  description: 'SEO and digital marketing services in Kampala, Uganda. Rank higher on Google, grow organic traffic, and convert visitors into customers. From UGX 450,000/month.',
}

const DELIVERABLES = [
  'Keyword research for Ugandan and East African search terms',
  'On-page SEO — titles, meta descriptions, headings, schema markup',
  'Technical SEO audit — speed, crawlability, indexing, Core Web Vitals',
  'Google Business Profile optimisation for local search',
  'Content strategy and SEO blog writing',
  'Link building and citation building',
  'Google Analytics 4 setup and conversion tracking',
  'Monthly ranking reports with clear interpretation',
]

const TIERS = [
  { name:'Local SEO', price:'450,000', features:['Google Business optimisation','5 target keywords','Monthly ranking report','On-page optimisation','3-month minimum'] },
  { name:'Growth SEO', price:'900,000', features:['15 target keywords','Content strategy','Technical SEO audit','Link building','Bi-weekly reports','3-month minimum'], hot:true },
  { name:'Authority SEO', price:'1,800,000', features:['Unlimited keywords','Full content production','Advanced link building','Competitor monitoring','Weekly reports','Priority support'] },
]

export default function SeoPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Service 02"
        title={<>SEO & Digital<br /><span style={{ color: '#2C6FED' }}>Marketing.</span></>}
        subtitle="Getting found on Google is not magic. It is a technical and content discipline. We do the research, fix the technical problems, produce the content, and track the results every month, in plain language."
        variant="svc-seo"
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px' }}>

        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#6A6A8A', marginBottom: 56, padding: '12px 16px', border: '1px solid #1C1C34', borderRadius: 10, display: 'inline-block' }}>
          ⏱ SEO takes time. We require a minimum 3-month engagement so strategies have room to produce measurable results.
        </p>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 24 }}>What we deliver</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10 }}>
            {DELIVERABLES.map(d => (
              <div key={d} style={{ display: 'flex', gap: 10, padding: '14px 16px', border: '1px solid #1C1C34', borderRadius: 10, background: '#0A0A16' }}>
                <span style={{ color: '#2C6FED', flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 8 }}>Monthly retainer pricing</h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', marginBottom: 24 }}>All prices in UGX, billed monthly.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {TIERS.map(t => (
              <div key={t.name} style={{ padding: '24px 24px 28px', border: `1px solid ${t.hot ? '#2C6FED' : '#1C1C34'}`, borderRadius: 16, background: t.hot ? 'rgba(44,111,237,0.05)' : '#0A0A16', position: 'relative' }}>
                {t.hot && <span style={{ position: 'absolute', top: -11, left: 20, background: '#2C6FED', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 10, padding: '3px 12px', borderRadius: 100 }}>RECOMMENDED</span>}
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{t.name}</p>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, color: t.hot ? '#2C6FED' : '#E4E4F0', marginBottom: 2 }}>UGX {t.price}</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: '#6A6A8A', marginBottom: 16 }}>per month</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                  {t.features.map(f => <li key={f} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', display: 'flex', gap: 8 }}><span style={{ color: '#2C6FED' }}>✓</span>{f}</li>)}
                </ul>
                <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '11px 0', borderRadius: 100, background: t.hot ? 'linear-gradient(135deg,#2C6FED,#1A52C4)' : 'transparent', color: t.hot ? '#fff' : '#2C6FED', border: t.hot ? 'none' : '1px solid #2C6FED', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Get started</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
