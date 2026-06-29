'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  { n:'01', title:'Web Design & Development',        slug:'web-design',                tagline:'Websites that convert visitors into customers' },
  { n:'02', title:'SEO & Digital Marketing',         slug:'seo-marketing',             tagline:'Rank higher. Reach further. Grow faster.' },
  { n:'03', title:'Branding & Graphic Design',       slug:'branding-design',           tagline:'Visual identity that sticks' },
  { n:'04', title:'Video, Animation & Image Editing',slug:'media-production',          tagline:'Moving stories. Static perfection.' },
  { n:'05', title:'Architectural Visualisation',     slug:'architectural-visualisation',tagline:"See it before it's built" },
  { n:'06', title:'Cybersecurity & Data Services',   slug:'cybersecurity-data',        tagline:'Protect your data. Manage your scale.' },
]

function Row({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [vis, setVis] = useState(false)
  const [hov, setHov] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <Link ref={ref} href={`/services/${s.slug}`}
      style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'20px 0', borderBottom:'1px solid #1C1C34', textDecoration:'none',
        opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.55s ease ${i*0.07}s, transform 0.55s ease ${i*0.07}s, border-color 0.3s`,
        borderColor: hov ? 'rgba(44,111,237,0.3)' : '#1C1C34',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ display:'flex', alignItems:'center', gap:20 }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', width:24, flexShrink:0 }}>{s.n}</span>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.6rem)', color: hov ? '#2C6FED' : '#E4E4F0', transition:'color 0.2s' }}>{s.title}</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:20 }}>
        <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#6A6A8A', display:'none' }} className="md:block">{s.tagline}</span>
        <div style={{ width:32, height:32, borderRadius:'50%', border:`1px solid ${hov ? '#2C6FED' : '#1C1C34'}`, display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.3s', background: hov ? 'rgba(44,111,237,0.1)' : 'transparent', flexShrink:0 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke={hov ? '#2C6FED' : '#666'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  return (
    <section style={{ maxWidth:1440, margin:'0 auto', padding:'100px 40px' }}>
      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', gap:24, marginBottom:56 }}>
        <div>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12 }}>02 / What We Do</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.2rem,5vw,4.5rem)', lineHeight:0.95, letterSpacing:'-0.025em', color:'#E4E4F0' }}>
            6 services.<br /><span style={{ color:'#2C6FED' }}>One team.</span>
          </h2>
        </div>
        <div style={{ maxWidth:340 }}>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.7, marginBottom:16 }}>
            Comprehensive digital solutions from one expert agency. No outsourcing, no middlemen — just craft.
          </p>
          <Link href="/services" style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, color:'#2C6FED', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
            View all services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
      <div>{SERVICES.map((s, i) => <Row key={s.slug} s={s} i={i} />)}</div>
    </section>
  )
}
