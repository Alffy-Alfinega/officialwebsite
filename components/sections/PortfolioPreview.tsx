import Link from 'next/link'

const FEATURED = [
  {
    n: '01',
    name: 'E2E Hub Africa',
    url: 'https://e2ehub.dev.alfinega.com',
    tags: ['Web Design', 'Consulting'],
    desc: 'Corporate consulting website with service case studies, team profiles, and a client enquiry funnel.',
    color: '#2C6FED',
  },
  {
    n: '02',
    name: 'Stand-Up Africa Services',
    url: 'https://suas.dev.alfinega.com',
    tags: ['Web Design', 'NGO', 'Bilingual'],
    desc: 'Bilingual English/French website for a pan-African NGO focused on sustainable development.',
    color: '#D4A843',
  },
  {
    n: '03',
    name: 'Makindye Junior Academy',
    url: 'https://makindyeja.dev.alfinega.com',
    tags: ['Web Design', 'Education'],
    desc: 'Mobile-first school website with prospectus, admissions flow, gallery, and contact system.',
    color: '#2C6FED',
  },
]

export default function PortfolioPreview() {
  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px 100px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48 }}>
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>03 / Selected Work</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#E4E4F0' }}>
            Live.<br /><span style={{ color: '#2C6FED' }}>Right now.</span>
          </h2>
        </div>
        <Link href="/portfolio" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: '#2C6FED', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          View all 8 projects
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
        {FEATURED.map((p) => (
          <div key={p.name} style={{ border: '1px solid #1C1C34', borderRadius: 18, overflow: 'hidden', background: '#0A0A16', display: 'flex', flexDirection: 'column', transition: 'border-color 0.25s' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(44,111,237,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1C1C34')}
          >
            {/* Project number header */}
            <div style={{ height: 120, background: 'linear-gradient(135deg,#0A0A16,#10101E)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #1C1C34', position: 'relative' }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '4rem', color: `${p.color}08`, userSelect: 'none', lineHeight: 1 }}>{p.n}</span>
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                style={{ position: 'absolute', top: 12, right: 12, padding: '6px 14px', borderRadius: 100, border: '1px solid #1C1C34', background: 'rgba(10,10,22,0.9)', color: '#CCCCEE', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textDecoration: 'none' }}>
                Live ↗
              </a>
            </div>

            <div style={{ padding: '20px 22px 24px', flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, padding: '3px 10px', borderRadius: 100, border: `1px solid ${p.color}35`, color: p.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: '#E4E4F0', marginBottom: 8 }}>{p.name}</h3>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
