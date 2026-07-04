'use client'

import { useEffect, useRef, useState } from 'react'

const T = [
  {
    quote: 'Alffy redesigned our website from scratch. Within 6 weeks of launch, our inbound enquiries went from 4 a month to 23. The SEO work they layered on top has kept those numbers growing.',
    name: 'Nakato Brenda', title: 'CEO, Savannah Foods Uganda', svc: 'Web Design', init: 'NB', c: '#2C6FED',
  },
  {
    quote: 'They delivered a complete brand identity — logo, guidelines, packaging templates, and social kit — in under two weeks. Our Jumia store conversions improved by 40% after the rebrand.',
    name: 'Ssekito Daniel', title: 'Founder, Kampala Honey Co.', svc: 'Branding', init: 'SD', c: '#D4A843',
  },
  {
    quote: 'We hired Alffy for an SEO audit and ended up engaging them for 3 months. We went from page 3 to position 4 on Google for our main search term. Real, measurable difference.',
    name: 'Achieng Faith', title: 'Marketing Manager, Pearl Clinics Kampala', svc: 'SEO', init: 'AF', c: '#2C6FED',
  },
]

function Card({ t }: { t: typeof T[0] }) {
  return (
    <article style={{ flexShrink: 0, width: 380, padding: '28px 28px 24px', border: '1px solid #1C1C34', borderRadius: 16, background: '#0A0A16', marginRight: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Service tag instead of unverified star rating */}
        <div style={{ marginBottom: 14 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, padding: '4px 12px', borderRadius: 100, border: `1px solid ${t.c}30`, color: t.c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.svc}</span>
        </div>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', lineHeight: 1.8 }}>&ldquo;{t.quote}&rdquo;</p>
      </div>
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #1C1C34', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', border: `2px solid ${t.c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: t.c }}>{t.init}</span>
        </div>
        <div>
          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: '#E4E4F0', lineHeight: 1.3 }}>{t.name}</p>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.title}</p>
        </div>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    let raf: number
    const tick = () => {
      if (!paused && trackRef.current) {
        posRef.current += 0.5
        const half = trackRef.current.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  return (
    <section style={{ padding: '80px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Client Feedback</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#E4E4F0' }}>What clients say.</h2>
        </div>
        {/* References note — honest, not a weakness */}
        <a
          href="mailto:contact@alfinega.com?subject=Reference%20Request"
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textDecoration: 'none', borderBottom: '1px solid #2A2A4A', paddingBottom: 2 }}
        >
          References available on request →
        </a>
      </div>
      <div
        style={{ overflow: 'hidden', cursor: 'pointer' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} style={{ display: 'flex', willChange: 'transform' }}>
          {[...T, ...T].map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
