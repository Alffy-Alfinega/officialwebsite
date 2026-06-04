'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function LivePreview({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [scale, setScale] = useState(0.3)
  const containerRef = useRef<HTMLDivElement>(null)

  // Only load the iframe when the card scrolls into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Scale the 1280px iframe to fit the container width
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setScale(el.offsetWidth / 1280)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {visible && (
        <iframe
          src={url}
          title={`Live preview of ${title}`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          className={`absolute top-0 left-0 border-0 pointer-events-none transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: '1280px',
            height: '960px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        />
      )}
      {/* Dim overlay to blend with dark theme */}
      {loaded && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(4,4,12,0.12)' }} />
      )}
    </div>
  )
}

const categories = ['All Work', 'Web Design', 'Education', 'Non-Profit & NGO', 'Product']

const projects = [
  {
    id: 1,
    title: 'Ajey Cjey',
    url: 'https://ajeycjey.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Non-Profit & NGO',
    tags: ['Gospel Platform', 'HTML/CSS', 'YouTube'],
    year: '2025',
    location: 'Uganda',
    description: 'Gospel and Christian media platform for youth — light-ray hero, Scripture marquee, and full content showcase for a Uganda-based YouTube ministry.',
    accent: 'linear-gradient(135deg, #0A0808, #1A1008)',
    accentColor: '#D4A843',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Makindye Junior Academy',
    url: 'https://makindyeja.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Education',
    tags: ['Primary School', 'Bootstrap', 'Multi-Page'],
    year: '2025',
    location: 'Kampala, Uganda',
    description: 'Full multi-page website for a Kampala primary school — academics, admissions, gallery, news, and parent resources built on Bootstrap 5.',
    accent: 'linear-gradient(135deg, #081018, #0A1A28)',
    accentColor: '#2C6FED',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Stand-Up Africa Services',
    url: 'https://suas.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Non-Profit & NGO',
    tags: ['Corporate', 'French', 'Bootstrap'],
    year: '2025',
    location: 'Goma, DR Congo',
    description: 'Corporate site for a Congolese multi-sector development company — mining, agro-pastoral, education, and health services. Full French localisation.',
    accent: 'linear-gradient(135deg, #0A1008, #121A08)',
    accentColor: '#D4A843',
    status: 'Live',
  },
  {
    id: 4,
    title: 'Makindye Secondary School',
    url: 'https://makindyess.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Education',
    tags: ['Secondary School', 'Custom CSS', 'Multi-Page'],
    year: '2025',
    location: 'Kampala, Uganda',
    description: 'Premium secondary school website for a 60+ year institution — academics, admissions, news, student portal, and responsive multi-page architecture.',
    accent: 'linear-gradient(135deg, #080A18, #0C1028)',
    accentColor: '#2C6FED',
    status: 'Live',
  },
  {
    id: 5,
    title: 'Kennedy Secondary School',
    url: 'https://kennedyss.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Education',
    tags: ['SDA School', 'Poppins', 'Multi-Page'],
    year: '2025',
    location: 'Entebbe Road, Uganda',
    description: "Website for a Seventh-day Adventist secondary school on Entebbe Road — featuring the school's award-winning choirs, stats, admissions flow, and testimonials.",
    accent: 'linear-gradient(135deg, #080C10, #0A1018)',
    accentColor: '#2C6FED',
    status: 'Live',
  },
  {
    id: 6,
    title: 'EDUCOM',
    url: 'https://educom.proj.alfinega.com',
    category: 'Product',
    subCategory: 'Product',
    tags: ['Next.js', 'SaaS', 'Alfinega Initiative'],
    year: '2026',
    location: 'Global',
    description: 'The operating system for global education — 35+ modules covering academic management, communication, marketplace, AI, 3D, and zero-trust security. Built for 3B+ users.',
    accent: 'linear-gradient(135deg, #040810, #07101E)',
    accentColor: '#2C6FED',
    status: 'In Development',
  },
]

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl border border-[#1C1C34] overflow-hidden hover:border-[#2C6FED]/40 transition-all duration-300 card-hover flex flex-col"
      style={{ background: p.accent, animationDelay: `${index * 0.04}s` }}
      aria-label={`View ${p.title} — opens in new tab`}
    >
      {/* Visual header */}
      <div className="aspect-[4/3] relative overflow-hidden flex items-end justify-start p-4">
        {/* Live site preview */}
        {p.status === 'Live' && (
          <LivePreview url={p.url} title={p.title} />
        )}

        <div className="absolute inset-0 grid-lines opacity-15" />

        {/* Accent glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse at 30% 30%, ${p.accentColor}18 0%, transparent 65%)` }}
        />

        {/* Big number watermark */}
        <span
          className="absolute right-3 top-3 font-syne font-extrabold leading-none select-none"
          style={{ fontSize: '5rem', color: `${p.accentColor}0B` }}
        >
          {String(p.id).padStart(2, '0')}
        </span>

        {/* Title watermark */}
        <span
          className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-center px-6 leading-tight"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'rgba(228,228,240,0.05)' }}
        >
          {p.title}
        </span>

        {/* Bottom gradient for readability over screenshot */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(4,4,12,0.85) 0%, transparent 100%)' }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${p.accentColor}0D 0%, transparent 70%)` }}
        />

        {/* Bottom row: status + arrow */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wide"
            style={{
              background: p.status === 'Live' ? 'rgba(34,197,94,0.12)' : `${p.accentColor}1A`,
              border: p.status === 'Live' ? '1px solid rgba(34,197,94,0.3)' : `1px solid ${p.accentColor}40`,
              color: p.status === 'Live' ? '#22c55e' : p.accentColor,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: p.status === 'Live' ? '#22c55e' : p.accentColor }}
            />
            {p.status}
          </span>

          <div
            className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            style={{ background: `${p.accentColor}1A`, border: `1px solid ${p.accentColor}4D` }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke={p.accentColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2 gap-2">
          <p
            className="font-syne font-bold text-[17px] group-hover:text-[#2C6FED] transition-colors leading-tight"
            style={{ color: 'rgba(228,228,240,0.92)' }}
          >
            {p.title}
          </p>
          <span className="font-mono text-[10px] shrink-0 mt-0.5" style={{ color: 'rgba(228,228,240,0.3)' }}>
            {p.year}
          </span>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: p.accentColor }}>
          {p.location}
        </p>

        <p className="font-outfit text-[13px] mb-4 leading-relaxed flex-1" style={{ color: 'rgba(228,228,240,0.5)' }}>
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wide"
              style={{ border: `1px solid ${p.accentColor}30`, color: `${p.accentColor}CC`, background: `${p.accentColor}0D` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function PortfolioGrid() {
  const [active, setActive] = useState('All Work')

  const filtered = active === 'All Work'
    ? projects
    : projects.filter((p) => p.category === active || p.subCategory === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-syne font-medium transition-all duration-200',
              active === cat
                ? 'text-white border border-[#2C6FED]'
                : 'border border-[#1C1C34] text-[#9A9ABB] hover:text-white hover:border-[#2C6FED]/40',
            )}
            style={active === cat ? { background: 'linear-gradient(135deg, rgba(44,111,237,0.15), rgba(26,82,196,0.08))' } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {/* Live sites note */}
      <p className="mt-8 font-mono text-[11px] text-[#7A7A9A] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
        All Live projects link directly to the deployed client site — click any card to visit.
      </p>
    </div>
  )
}

