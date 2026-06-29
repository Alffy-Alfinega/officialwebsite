'use client'

import { useEffect, useRef, useState } from 'react'

const REASONS = [
  { n:'01', title:'Africa-Rooted, Globally Competitive', body:'Based in Kampala — we understand local market behaviour, mobile-first internet patterns, and East African business context. Our output holds up anywhere in the world.' },
  { n:'02', title:'Full-Service Under One Roof',         body:'No outsourcing. No handoffs. Web, SEO, branding, video, animation, and content — all handled by one cohesive in-house team from brief to delivery.' },
  { n:'03', title:'Results, Not Just Deliverables',      body:'We obsess over measurable outcomes — more organic traffic, more enquiries, stronger brand recall. Every decision is tied to your business goals, not just aesthetics.' },
  { n:'04', title:'Transparent, Always',                 body:'Fixed pricing, clear timelines, regular updates, and WhatsApp access to your project team throughout. No surprises, no scope creep, no silence.' },
  { n:'05', title:'Modern Tech Stack',                   body:'We build on Next.js for fast, SEO-ready websites, design in Figma, and use AI-assisted workflows to ship better work faster — without cutting corners.' },
  { n:'06', title:'Post-Launch Partnership',             body:'Launching is day one, not the finish line. We offer ongoing support retainers covering updates, SEO reporting, performance monitoring, and design iterations.' },
]

function Card({ r, i }: { r: typeof REASONS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="card-hover" style={{
      padding:'28px 28px 32px', border:'1px solid #1C1C34', borderRadius:16,
      background:'#0A0A16',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${i*0.08}s, transform 0.6s ease ${i*0.08}s`,
    }}>
      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', display:'block', marginBottom:14 }}>{r.n}</span>
      <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:'#E4E4F0', marginBottom:10 }}>{r.title}</p>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.75 }}>{r.body}</p>
    </div>
  )
}

export default function WhySection() {
  return (
    <section style={{ maxWidth:1440, margin:'0 auto', padding:'80px 40px' }}>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12 }}>03 / Why Alffy</p>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4.5vw,4rem)', lineHeight:0.95, letterSpacing:'-0.025em', color:'#E4E4F0' }}>
          Built different.<br /><span style={{ color:'#2C6FED' }}>Delivered better.</span>
        </h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:14 }}>
        {REASONS.map((r, i) => <Card key={r.n} r={r} i={i} />)}
      </div>
    </section>
  )
}
