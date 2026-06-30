import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the leadership team at Alffy (Alfinega) — Mr. Mullo Nashiifu (CEO & Founder), Mr. Musoke Joshua Prosper (Lead Developer), and Mrs. Mwawule Christiana (Managing Director).',
}

const CEO = {
  name: 'Mullo Nashiifu',
  role: 'CEO & Founder',
  category: 'Leadership',
  photo: '/team/mullo-nashiifu.jpg',
  bio: 'Founded Alffy to bridge the gap between world-class digital craft and the East African market. Leads company vision, client strategy, and hands-on development — because the best agency founders never stop building.',
  tags: ['Strategy', 'Full-Stack Development', 'Business Growth'],
}

const LEADS = [
  {
    name: 'Musoke Joshua Prosper',
    role: 'Lead Developer',
    category: 'Technology',
    photo: '/team/musoke-joshua.jpg',
    bio: 'Leads all technical strategy, architecture, and engineering across Alffy. Oversees every build from stack selection to deployment — ensuring performance, scalability, and clean code ship on every project.',
    tags: ['Technical Leadership', 'Full-Stack Engineering', 'System Architecture'],
  },
  {
    name: 'Mwawule Christiana',
    role: 'Managing Director',
    category: 'Operations',
    photo: '/team/mwawule-christiana.jpg',
    bio: 'Runs day-to-day operations, client relationships, and project delivery across Alffy. Keeps every project on scope, on budget, and on deadline — while making sure the team has what it needs to do its best work.',
    tags: ['Operations', 'Client Management', 'Project Delivery'],
  },
]

const labelStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#6A6A8A',
  textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8,
}
const tagStyle = (active = false): React.CSSProperties => ({
  fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
  padding: '4px 11px', borderRadius: 100,
  border: `1px solid ${active ? 'rgba(212,168,67,0.35)' : '#1C1C34'}`,
  color: active ? '#D4A843' : '#6A6A8A',
  textTransform: 'uppercase', letterSpacing: '0.06em',
})

export default function TeamPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Leadership Team"
        title={<>The people<br /><span style={{ color: '#2C6FED' }}>behind the work.</span></>}
        subtitle="Three leaders. Every project handled directly, no junior staff, no outsourcing, no account managers who barely know your brief."
        variant="about-team"
        height="46vh"
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px 80px' }}>

        {/* CEO — featured, full-width, separate class from the leads below */}
        <article style={{
          border: '1px solid rgba(212,168,67,0.25)', borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(212,168,67,0.05), rgba(10,10,22,1) 60%)',
          padding: '36px 40px', marginBottom: 24,
          display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start',
        }}>
          <div style={{
            position: 'relative', width: 140, height: 140, borderRadius: 18,
            overflow: 'hidden', flexShrink: 0, background: '#10101E',
            border: '1px solid rgba(212,168,67,0.3)',
          }}>
            <Image src={CEO.photo} alt={CEO.name} fill sizes="140px" style={{ objectFit: 'cover' }} />
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ ...labelStyle, color: '#D4A843' }}>{CEO.category}</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.3rem)', color: '#E4E4F0', marginBottom: 4, letterSpacing: '-0.02em' }}>
              {CEO.name}
            </h2>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#2C6FED', marginBottom: 16 }}>{CEO.role}</p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#9A9ABB', lineHeight: 1.8, maxWidth: 620, marginBottom: 18 }}>
              {CEO.bio}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CEO.tags.map(t => <span key={t} style={tagStyle(true)}>{t}</span>)}
            </div>
          </div>
        </article>

        {/* Leads — Lead Developer + Managing Director, equal-weight pair */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {LEADS.map(m => (
            <article key={m.name} style={{ border: '1px solid #1C1C34', borderRadius: 20, background: '#0A0A16', padding: '28px 28px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ position: 'relative', width: 56, height: 56, borderRadius: 12, overflow: 'hidden', flexShrink: 0, background: '#10101E' }}>
                  <Image src={m.photo} alt={m.name} fill sizes="56px" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={labelStyle}>{m.category}</p>
                </div>
              </div>

              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 19, color: '#E4E4F0', marginBottom: 4 }}>
                {m.name}
              </h2>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#2C6FED', marginBottom: 14 }}>{m.role}</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.8, marginBottom: 18 }}>
                {m.bio}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {m.tags.map(t => <span key={t} style={tagStyle()}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>

        {/* Hiring note */}
        <div style={{ marginTop: 40, padding: '28px 32px', border: '1px solid rgba(44,111,237,0.2)', borderRadius: 16, background: 'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: '#E4E4F0', marginBottom: 8 }}>We are hiring</p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', lineHeight: 1.75, marginBottom: 16 }}>
            We are looking for a Junior Web Developer, Graphic Designer, and SEO & Content Specialist to join the team in Kampala.
          </p>
          <Link href="/careers" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: '#2C6FED', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            See open roles
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
