'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const services = [
  { slug: 'web-design',              number: '01', title: 'Web Design & Development',        tagline: 'Websites that convert visitors into customers' },
  { slug: 'seo-marketing',           number: '02', title: 'SEO & Digital Marketing',         tagline: 'Rank higher. Reach further. Grow faster.' },
  { slug: 'branding-design',         number: '03', title: 'Branding & Graphic Design',       tagline: 'Visual identity that sticks' },
  { slug: 'media-production',        number: '04', title: 'Video, Animation & Image Editing', tagline: 'Moving stories. Static perfection.' },
  { slug: 'architectural-visualisation', number: '05', title: 'Architectural Visualisation', tagline: "See it before it's built" },
  { slug: 'cybersecurity-data',      number: '06', title: 'Cybersecurity & Data Services',   tagline: 'Protect your data. Manage your scale.' },
]

type Service = typeof services[0]

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref     = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
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
            6 services.<br />
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
