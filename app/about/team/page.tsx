import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the leadership team at Alffy (Alfinega) — Mr. Mullo Nashiifu (CEO & Founder), Mr. Musoke Joshua Prosper (CTO), and Mrs. Mwawule Christiana (MD).',
}

const TEAM = [
  {
    name: 'Mr. Mullo Nashiifu',
    role: 'CEO & Founder',
    photo: '/team/mullo-nashiifu.jpg',
    color: '#D4A843',
    bio: [
      'Mr. Mullo Nashiifu founded Alffy (Alfinega) in January 2025 with a single conviction: Ugandan businesses deserve the same quality of digital work that global companies receive, at prices that reflect the local market.',
      'As CEO, Mr. Mullo sets the strategic direction of the agency — which services to offer, which markets to serve, and what quality standards are non-negotiable. He is the person ultimately responsible for every deliverable that leaves Alffy.',
      'His vision is to build the most trusted digital agency in East Africa — one that is known for honesty, measurable results, and craft that holds up anywhere in the world.',
    ],
    skills: ['Business Strategy', 'Agency Leadership', 'Client Relations', 'East Africa Markets', 'Digital Strategy'],
  },
  {
    name: 'Mr. Musoke Joshua Prosper',
    role: 'Chief Technology Officer',
    photo: '/team/musoke-joshua.jpg',
    color: '#2C6FED',
    bio: [
      'Mr. Musoke Joshua Prosper leads all technical work at Alffy — web architecture, development, 3D visualisation, and cybersecurity. He is the person who decides how things are built and ensures they are built to the highest technical standard.',
      'His background spans full-stack web development on Next.js, Babylon.js 3D scene engineering, and network security. The website you are viewing right now was built by Mr. Musoke from scratch.',
      'Mr. Musoke believes that Ugandan developers are as capable as any in the world. His job is to prove it, one project at a time.',
    ],
    skills: ['Next.js', 'TypeScript', 'Babylon.js', 'Cybersecurity', 'UI/UX Design', 'System Architecture'],
  },
  {
    name: 'Mrs. Mwawule Christiana',
    role: 'Managing Director',
    photo: '/team/mwawule-christiana.jpg',
    color: '#2C6FED',
    bio: [
      'Mrs. Mwawule Christiana manages the operational and commercial side of Alffy — client relationships, project delivery, brand strategy, and the day-to-day decisions that keep the agency running at its best.',
      'She is the first point of contact for most clients and the person who ensures every project stays on scope, on time, and on brief. Her approach is direct and practical: understand the goal, build a plan, follow through.',
      'Mrs. Mwawule leads SEO strategy, content direction, and the branding process from initial brief to final handover.',
    ],
    skills: ['Project Management', 'SEO Strategy', 'Brand Direction', 'Client Relations', 'Content Strategy', 'Operations'],
  },
]

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

      {/* Team cards */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {TEAM.map(m => (
            <article key={m.name} style={{ border: '1px solid #1C1C34', borderRadius: 20, overflow: 'hidden', background: '#0A0A16' }}>

              {/* Photo */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', background: '#10101E' }}>
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
                {/* Role badge overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(4,4,12,0.95) 0%, transparent 100%)',
                  padding: '40px 24px 20px',
                }}>
                  <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: m.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                    {m.role}
                  </p>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: '#E4E4F0', lineHeight: 1.2 }}>
                    {m.name}
                  </h2>
                </div>
              </div>

              {/* Bio */}
              <div style={{ padding: '24px 26px 28px' }}>
                {m.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', lineHeight: 1.8, marginBottom: i < m.bio.length - 1 ? 12 : 0 }}>{p}</p>
                ))}

                {/* Skills */}
                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {m.skills.map(s => (
                    <span key={s} style={{
                      fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
                      padding: '4px 10px', borderRadius: 100,
                      border: `1px solid ${m.color}30`, color: m.color === '#D4A843' ? '#D4A843' : '#6A6A8A',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
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
