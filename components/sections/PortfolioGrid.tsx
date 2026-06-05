// =============================================================================
// PortfolioGrid.tsx — Portfolio / projects filterable grid
// Purpose: Displays client projects in a card grid with category filtering.
// Each card can lazy-load a live iframe preview of the deployed site.
// Used on the portfolio/work page.
// =============================================================================

'use client'

// useState: tracks the currently active filter category
// useRef: references DOM element for IntersectionObserver and ResizeObserver
// useEffect: sets up observers on mount
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
// cn: utility that merges Tailwind class names (clsx + tailwind-merge)
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// LivePreview — embeds a scaled-down live website preview inside a project card
// Uses IntersectionObserver to defer loading (doesn't load until near viewport)
// Uses ResizeObserver to scale the 1280px-wide iframe to fit the card container
// ---------------------------------------------------------------------------
function LivePreview({ url, title }: { url: string; title: string }) {
  // loaded: tracks whether the iframe's onLoad event has fired
  const [loaded, setLoaded] = useState(false)
  // visible: becomes true when the card enters the viewport (triggers iframe creation)
  const [visible, setVisible] = useState(false)
  // scale: calculated ratio to shrink the 1280px-wide iframe into the card width
  const [scale, setScale] = useState(0.3)
  // containerRef: the parent div whose width determines the scale factor
  const containerRef = useRef<HTMLDivElement>(null)

  // Only load the iframe when the card scrolls into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // rootMargin: '200px' means trigger when the element is 200px outside the viewport
    // (loads the iframe slightly before the user scrolls to it — perceived as instant)
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
    // ResizeObserver: fires whenever the container's dimensions change
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
          // sandbox restricts what the iframe can do (no forms, no popups, no top nav)
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          className={`absolute top-0 left-0 border-0 pointer-events-none transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: '1280px',
            height: '960px',
            // CSS scale transforms shrink the 1280px layout into the card width
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

// Filter categories that appear as tab buttons
const categories = ['All Work', 'Web Design', 'Education', 'Non-Profit & NGO', 'Product']

// ---------------------------------------------------------------------------
// Projects data — hardcoded array of portfolio items
// Each project has identifying info, metadata, and styling fields (accent gradient, color)
// ---------------------------------------------------------------------------
const projects = [
  {
    id: 1,
    title: 'Makindye Junior Academy',
    url: 'https://makindyeja.dev.alfinega.com',
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
    id: 2,
    title: 'Stand-Up Africa Services',
    url: 'https://suas.dev.alfinega.com',
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
    id: 3,
    title: 'Makindye Secondary School',
    url: 'https://makindyess.dev.alfinega.com',
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
    id: 4,
    title: 'Kennedy Secondary School',
    url: 'https://kennedyss.dev.alfinega.com',
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
    id: 5,
    title: 'E2E Hub Africa',
    url: 'https://e2ehub.dev.alfinega.com',
    category: 'Web Design',
    subCategory: 'Non-Profit & NGO',
    tags: ['Consulting', 'Transformation', 'Multi-Page'],
    year: '2025',
    location: 'Kampala, Uganda',
    description: 'Corporate website for a pan-African transformation consultancy — 360° services, impact metrics, ecosystem pillars, and partnership portal with a bold professional identity.',
    accent: 'linear-gradient(135deg, #0A1008, #082018)',
    accentColor: '#10B981',
    status: 'Live',
  },
  {
    id: 6,
    title: 'Light High School',
    url: 'https://lighths.dev.alfinega.com',
    category: 'Web Design',
    subCategory: 'Education',
    tags: ['Secondary School', 'Custom CSS', 'Multi-Page'],
    year: '2025',
    location: 'Seguku, Uganda',
    description: 'Full secondary school website for a Seguku-based institution — O-Level & A-Level academics, news, events, admissions flow, testimonial carousel, and modern multi-page layout.',
    accent: 'linear-gradient(135deg, #100A08, #1A0E08)',
    accentColor: '#D4A843',
    status: 'Live',
  },
  {
    id: 7,
    title: 'Alffy (Alfinega)',
    url: 'https://alffy.alfinega.com',
    category: 'Web Design',
    subCategory: 'Product',
    tags: ['Next.js', 'Babylon.js', 'Agency Site'],
    year: '2026',
    location: 'Kampala, Uganda',
    description: 'The Alffy agency website — a living showcase of design, SEO, branding, and media capabilities with interactive 3D hero, client testimonials, full service catalog, and process timeline.',
    accent: 'linear-gradient(135deg, #040810, #0C1220)',
    accentColor: '#2C6FED',
    status: 'Live',
  },
  {
    id: 8,
    title: 'NAGABA Association',
    url: 'https://nagaba.proj.alfinega.com',
    category: 'Web Design',
    subCategory: 'Non-Profit & NGO',
    tags: ['NGO', 'Community', 'Multi-Page'],
    year: '2025',
    location: 'Western Uganda',
    description: 'Community-based organisation website for a western Uganda NGO — HIV/AIDS awareness, women & youth empowerment, skills training, and donation/volunteer portal with a warm, mission-driven design.',
    accent: 'linear-gradient(135deg, #0A1008, #141A08)',
    accentColor: '#65A30D',
    status: 'Live',
  },
]

// ---------------------------------------------------------------------------
// ProjectCard — a single project card
// Shows a live preview thumbnail on the top half, project details on the bottom
// Opens the project URL in a new tab when clicked
// ---------------------------------------------------------------------------
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
      {/* Visual header — 4:3 aspect ratio region for the live preview + overlays */}
      <div className="aspect-[4/3] relative overflow-hidden flex items-end justify-start p-4">
        {/* Live site preview iframe (only for 'Live' projects) */}
        {p.status === 'Live' && (
          <LivePreview url={p.url} title={p.title} />
        )}

        {/* Grid line texture overlay */}
        <div className="absolute inset-0 grid-lines opacity-15" />

        {/* Accent glow — subtle color wash from top-left */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse at 30% 30%, ${p.accentColor}18 0%, transparent 65%)` }}
        />

        {/* Big number watermark (e.g. "01", "02") */}
        <span
          className="absolute right-3 top-3 font-syne font-extrabold leading-none select-none"
          style={{ fontSize: '5rem', color: `${p.accentColor}0B` }}
        >
          {String(p.id).padStart(2, '0')}
        </span>

        {/* Title watermark — very faint text centered behind the preview */}
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

        {/* Hover glow — brightens on card hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${p.accentColor}0D 0%, transparent 70%)` }}
        />

        {/* Bottom row: status badge + arrow button */}
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

          {/* Arrow circle — slides up and fades in on hover */}
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

      {/* Card body — project details */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title row + year */}
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

        {/* Location */}
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: p.accentColor }}>
          {p.location}
        </p>

        {/* Description */}
        <p className="font-outfit text-[13px] mb-4 leading-relaxed flex-1" style={{ color: 'rgba(228,228,240,0.5)' }}>
          {p.description}
        </p>

        {/* Tech / category tags */}
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
  // active: tracks which filter tab is currently selected
  const [active, setActive] = useState('All Work')

  // filtered: the subset of projects matching the active category
  const filtered = active === 'All Work'
    ? projects
    : projects.filter((p) => p.category === active || p.subCategory === active)

  return (
    <div>
      {/* Filter tabs — buttons that set the active category */}
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

      {/* Project card grid — responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
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

