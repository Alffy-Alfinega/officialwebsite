import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Web Design & Development',
  description: 'Professional website design and development in Kampala, Uganda. Built on Next.js. Fast, mobile-first, SEO-ready. From UGX 850,000.',
}

const WHAT = [
  'Custom website design — no templates, no page builders',
  'Next.js development for speed and SEO',
  'Mobile-first, responsive across all screen sizes',
  'Contact forms, booking systems, and custom functionality',
  'Google Analytics 4 integration and tracking setup',
  'On-page SEO setup including metadata, schema, and sitemaps',
  'Performance optimised — Core Web Vitals compliant',
  'SSL, security headers, and production deployment',
]

const PROCESS = [
  { n:'01', t:'Discovery',   b:'We start with a call to understand your business, your goals, and your audience. We look at your competitors and define what success looks like for the project.' },
  { n:'02', t:'Wireframes',  b:'Before we write a line of code, we map out every page in Figma. You see the layout and information structure before the design begins.' },
  { n:'03', t:'Design',      b:'We apply your brand identity — or build one — across the full design. You review and approve before development starts.' },
  { n:'04', t:'Development', b:'We build on Next.js. Clean code, fast load times, and a codebase that is easy to maintain and extend later.' },
  { n:'05', t:'Launch',      b:'We deploy, test across devices and browsers, and go live. Post-launch support is included.' },
]

const TIERS = [
  { name:'Starter', price:'850,000', note:'One-time', features:['5 pages','Mobile responsive','Contact form','Basic SEO','7-day delivery','1 revision round'] },
  { name:'Growth',  price:'2,200,000', note:'One-time', features:['15 pages','Blog system','Advanced SEO','Analytics setup','14-day delivery','2 revision rounds','Priority support'], hot:true },
  { name:'Enterprise', price:'Custom', note:'One-time', features:['Unlimited pages','Custom features','E-commerce','Dedicated PM','Flexible delivery','Unlimited revisions'] },
]

export default function WebDesignPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Service 01"
        title={<>Web Design &<br /><span style={{ color: '#2C6FED' }}>Development.</span></>}
        subtitle="Websites built on Next.js, not WordPress, not Wix, not a template. Fast-loading, mobile-first, properly coded sites that rank on Google and convert visitors into customers."
        variant="svc-web"
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px' }}>

        {/* What is included */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 24 }}>What is included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10 }}>
            {WHAT.map(w => (
              <div key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', border: '1px solid #1C1C34', borderRadius: 10, background: '#0A0A16' }}>
                <span style={{ color: '#2C6FED', flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', lineHeight: 1.6 }}>{w}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing tiers */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 24 }}>Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {TIERS.map(t => (
              <div key={t.name} style={{ padding: '24px 24px 28px', border: `1px solid ${t.hot ? '#2C6FED' : '#1C1C34'}`, borderRadius: 16, background: t.hot ? 'rgba(44,111,237,0.05)' : '#0A0A16', position: 'relative' }}>
                {t.hot && <span style={{ position: 'absolute', top: -11, left: 20, background: '#2C6FED', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 10, padding: '3px 12px', borderRadius: 100 }}>MOST POPULAR</span>}
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{t.name}</p>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 26, color: t.hot ? '#2C6FED' : '#E4E4F0', marginBottom: 2 }}>{t.price === 'Custom' ? 'Custom' : `UGX ${t.price}`}</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: '#6A6A8A', marginBottom: 18 }}>{t.note}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 22 }}>
                  {t.features.map(f => <li key={f} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', display: 'flex', gap: 8 }}><span style={{ color: '#2C6FED' }}>✓</span>{f}</li>)}
                </ul>
                <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '11px 0', borderRadius: 100, background: t.hot ? 'linear-gradient(135deg,#2C6FED,#1A52C4)' : 'transparent', color: t.hot ? '#fff' : '#2C6FED', border: t.hot ? 'none' : '1px solid #2C6FED', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Get started</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#E4E4F0', marginBottom: 24 }}>Our process</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESS.map((p, i) => (
              <div key={p.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid #1C1C34', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: '#2C6FED' }}>{p.n}</span>
                  </div>
                  {i < PROCESS.length - 1 && <div style={{ width: 1, minHeight: 32, background: '#1C1C34', margin: '4px 0' }} />}
                </div>
                <div style={{ paddingBottom: 24 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: '#E4E4F0', marginBottom: 6 }}>{p.t}</p>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.75 }}>{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
