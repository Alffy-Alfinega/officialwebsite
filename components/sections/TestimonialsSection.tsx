'use client'

import { useRef, useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'Alffy redesigned our website from scratch. Within 6 weeks of launch, our inbound enquiries went from 4 a month to 23. The SEO work they layered on top has kept those numbers growing.',
    author: 'Nakato Brenda', title: 'CEO, Savannah Foods Uganda', service: 'Website Design',
    initials: 'NB', color: '#2C6FED', bg: 'linear-gradient(135deg, #0D1E3D, #0A1628)',
  },
  {
    quote: 'They delivered a complete brand identity — logo, guidelines, packaging templates, and social kit — in under two weeks. Our Jumia store conversions improved by 40% after the rebrand.',
    author: 'Ssekito Daniel', title: 'Founder, Kampala Honey Co.', service: 'Branding',
    initials: 'SD', color: '#D4A843', bg: 'linear-gradient(135deg, #2A1E08, #1C1408)',
  },
  {
    quote: 'We hired Alffy for an SEO audit and ended up engaging them for 3 months. We went from page 3 to position 4 on Google for our main search term. Real, measurable difference.',
    author: 'Achieng Faith', title: 'Marketing Manager, Pearl Clinics Kampala', service: 'SEO',
    initials: 'AF', color: '#2C6FED', bg: 'linear-gradient(135deg, #0C1435, #080E28)',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#D4A843" aria-hidden="true">
          <path d="M6 1l1.39 2.81L10.5 4.27 8.25 6.47l.53 3.07L6 8.03l-2.78 1.51.53-3.07L1.5 4.27l3.11-.46L6 1z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials, color, bg }: { initials: string; color: string; bg: string }) {
  return (
    <div className="shrink-0 relative" style={{ width: 44, height: 44 }} aria-hidden="true">
      <div className="absolute inset-0 rounded-full" style={{ border: `2px solid ${color}`, opacity: 0.35 }} />
      <div className="absolute inset-[3px] rounded-full flex items-center justify-center" style={{ background: bg, border: `1px solid ${color}30` }}>
        <span className="font-syne font-extrabold select-none tracking-tight" style={{ fontSize: 13, color, letterSpacing: '0.05em' }}>{initials}</span>
      </div>
      <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 10px ${color}30` }} />
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <article
      className="shrink-0 w-[340px] md:w-[400px] p-7 border rounded-2xl mr-4 flex flex-col justify-between"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div>
        <StarRating />
        <blockquote className="font-outfit text-sm leading-[1.8]" style={{ color: 'var(--text-muted)' }}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-5 pt-5 border-t flex items-center justify-between gap-3" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <Avatar initials={t.initials} color={t.color} bg={t.bg} />
          <div>
            <p className="font-syne font-semibold text-sm leading-tight" style={{ color: 'var(--text)' }}>{t.author}</p>
            <p className="font-mono text-[10px] uppercase tracking-wide mt-0.5" style={{ color: 'var(--text-faint)' }}>{t.title}</p>
          </div>
        </div>
        <span
          className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-[9px] font-mono font-medium uppercase tracking-wide"
          style={{ border: `1px solid ${t.color}30`, color: t.color, background: `${t.color}0D` }}
        >
          {t.service}
        </span>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const posRef   = useRef(0)
  const rafRef   = useRef<number | undefined>(undefined)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const speed = 0.5
    const animate = () => {
      if (!paused) {
        posRef.current += speed
        const halfW = track.scrollWidth / 2
        if (posRef.current >= halfW) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [paused])

  return (
    <section className="py-20 md:py-28 overflow-x-hidden" aria-label="Client testimonials">
      <div className="px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest mb-3 block" style={{ color: 'var(--text-faint)' }}>Client Feedback</span>
            <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
              What clients say.
            </h2>
          </div>
          <div className="flex gap-8">
            {[{ v: '5★', l: 'Standard', c: '#D4A843' }, { v: '50+', l: '2026 Goal' }, { v: '95%', l: 'Target' }].map(({ v, l, c }) => (
              <div key={l} className="text-center">
                <p className="font-syne font-bold text-2xl" style={{ color: c || 'var(--text)' }}>{v}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--text-faint)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="marquee-wrapper cursor-pointer select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex will-change-transform">
          {testimonials.map((t, i) => <TestimonialCard key={`a${i}`} t={t} />)}
          {testimonials.map((t, i) => (
            <div key={`b${i}`} aria-hidden="true"><TestimonialCard t={t} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
