import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the team behind Alffy (Alfinega) — Musoke Joshua Prosper, CTO, and Mwawule Christiana, Managing Director.',
}

const TEAM = [
  {
    name: 'Musoke Joshua Prosper',
    role: 'Chief Technology Officer',
    init: 'MJ',
    color: '#2C6FED',
    bio: [
      'Joshua leads all technical work at Alffy — architecture, web development, 3D visualisation, and cybersecurity. He is the person who decides how things are built and makes sure they are built correctly.',
      'His background spans full-stack web development, Babylon.js 3D scenes, and network security. He built the agency website you are looking at now from scratch.',
      'Joshua believes that Ugandan developers are as capable as any in the world — they just need the right environment to prove it.',
    ],
    skills: ['Next.js', 'TypeScript', 'Babylon.js', 'Cybersecurity', 'UI/UX', 'Three.js'],
  },
  {
    name: 'Mwawule Christiana',
    role: 'Managing Director',
    init: 'MC',
    color: '#D4A843',
    bio: [
      'Christiana runs the business side of Alffy — client relationships, project management, strategy, and the day-to-day decisions that keep the agency operating smoothly.',
      'She is the person clients deal with first and most. Her approach is direct and practical: understand the client\'s actual goal, build a realistic plan to reach it, and follow through.',
      'Christiana handles SEO strategy, content direction, and the branding process from brief to final delivery.',
    ],
    skills: ['Project Management', 'SEO Strategy', 'Brand Direction', 'Client Relations', 'Content Strategy', 'Business Development'],
  },
]

export default function TeamPage() {
  return (
    <div style={{ paddingTop: 68, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 40px' }}>

        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>The Team</p>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 0.92, letterSpacing: '-0.03em', color: '#E4E4F0', marginBottom: 16 }}>
          Two people.<br /><span style={{ color: '#2C6FED' }}>All the work.</span>
        </h1>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: '#8A8AAA', maxWidth: 520, lineHeight: 1.75, marginBottom: 64 }}>
          Alffy is intentionally small right now. Every project is handled by us directly — no junior staff, no outsourcing, no account managers who barely know your project.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginBottom: 64 }}>
          {TEAM.map(m => (
            <div key={m.name} style={{ border: '1px solid #1C1C34', borderRadius: 20, overflow: 'hidden', background: '#0A0A16' }}>
              {/* Avatar header */}
              <div style={{ padding: '40px 32px 32px', background: `linear-gradient(135deg,${m.color}10,transparent)`, borderBottom: '1px solid #1C1C34' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', border: `3px solid ${m.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: `0 0 24px ${m.color}30` }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, color: m.color }}>{m.init}</span>
                </div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: '#E4E4F0', marginBottom: 4 }}>{m.name}</h2>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: m.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.role}</p>
              </div>
              {/* Bio */}
              <div style={{ padding: '28px 32px' }}>
                {m.bio.map((p, i) => (
                  <p key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', lineHeight: 1.8, marginBottom: i < m.bio.length - 1 ? 14 : 0 }}>{p}</p>
                ))}
                {/* Skills */}
                <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {m.skills.map(s => (
                    <span key={s} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, padding: '4px 12px', borderRadius: 100, border: '1px solid #1C1C34', color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring note */}
        <div style={{ padding: '32px', border: '1px solid rgba(44,111,237,0.2)', borderRadius: 16, background: 'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: '#E4E4F0', marginBottom: 10 }}>We are hiring</p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', lineHeight: 1.75, marginBottom: 18 }}>
            We are looking for a Junior Web Developer, Graphic Designer, and SEO & Content Specialist to join the team in Kampala. If you are talented and want to do real work, we want to hear from you.
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
