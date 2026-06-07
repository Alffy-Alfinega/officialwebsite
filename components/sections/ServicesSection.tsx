'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const services = [
  { slug: 'website-design', number: '01', title: 'Website Design', tagline: 'Experiences that convert' },
  { slug: 'seo-services', number: '02', title: 'SEO Services', tagline: 'Rank. Be found. Grow.' },
  { slug: 'graphic-design', number: '03', title: 'Graphic Design', tagline: 'Visual language that speaks' },
  { slug: 'branding', number: '04', title: 'Branding', tagline: 'Identity engineered for impact' },
  { slug: 'digital-marketing', number: '05', title: 'Digital Marketing', tagline: 'Campaigns built to convert' },
  { slug: 'video-editing', number: '06', title: 'Video Editing', tagline: 'Raw footage → compelling story' },
  { slug: 'image-editing', number: '07', title: 'Image Editing', tagline: 'Perfect. Every. Pixel.' },
  { slug: 'animation', number: '08', title: '2D & 3D Animation', tagline: 'Stories that move people' },
  { slug: 'architectural-design', number: '09', title: 'Architectural Design', tagline: "Vision before it's built" },
  { slug: 'content-creation', number: '10', title: 'Content Creation', tagline: 'Words that rank and resonate' },
  { slug: 'cybersecurity', number: '11', title: 'Cybersecurity', tagline: 'Protect what you have built' },
  { slug: 'data-entry', number: '12', title: 'Mass Data Entry', tagline: 'Accurate. Fast. Scalable.' },
]

type Service = typeof services[0]

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      href={`/services/${service.slug}`}
      className="group flex items-center justify-between py-5 md:py-6 border-b hover:border-[#2C6FED]/30 transition-all duration-300"
      style={{
        borderColor: 'var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s, border-color 0.3s ease`,
      }}
    >
      <div className="flex items-center gap-6">
        <span className="font-mono text-[11px] w-6 shrink-0" style={{ color: 'var(--text-dimmer)' }}>{service.number}</span>
        <p className="font-syne font-semibold text-xl md:text-2xl group-hover:text-[#2C6FED] transition-colors duration-200" style={{ color: 'var(--text)' }}>
          {service.title}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <span className="hidden md:block font-outfit text-sm group-hover:text-[#BBBBDD] transition-colors" style={{ color: 'var(--text-faint)' }}>
          {service.tagline}
        </span>
        <span className="w-8 h-8 rounded-full border group-hover:border-[#2C6FED] group-hover:bg-[#2C6FED]/10 flex items-center justify-center transition-all duration-300" style={{ borderColor: 'var(--border)' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#2C6FED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0} className="group-hover:[stroke-opacity:1] transition-all" />
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:opacity-0 transition-opacity" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest mb-3 block" style={{ color: 'var(--text-faint)' }}>02 / What We Do</span>
          <h2
            className="font-syne font-extrabold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}
          >
            12 services.<br />
            <span style={{ color: '#2C6FED' }}>One team.</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Comprehensive digital solutions from a single expert agency. No outsourcing, no middlemen — just craft.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-4 font-syne font-semibold text-sm text-[#2C6FED] hover:gap-3 transition-all"
          >
            View all services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.slug} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
