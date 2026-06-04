'use client'

import { useRef, useEffect, useState } from 'react'

const reasons = [
  { number: '01', title: 'Africa-Rooted, Globally Competitive', body: 'Based in Kampala, Uganda — we understand local market behaviour, mobile-first internet patterns, and East African business context. Our output holds up anywhere in the world.' },
  { number: '02', title: 'Full-Service Under One Roof', body: 'No outsourcing. No handoffs. Web design, SEO, branding, video, animation, and content — all handled by one cohesive in-house team from brief to delivery.' },
  { number: '03', title: 'Results, Not Just Deliverables', body: 'We obsess over measurable outcomes — more organic traffic, more enquiries, stronger brand recall. Every decision is tied to your business goals, not just aesthetics.' },
  { number: '04', title: 'Transparent, Always', body: 'Fixed pricing, clear timelines, and regular progress updates. You get WhatsApp access to your project team throughout. No surprises, no scope creep, no silence.' },
  { number: '05', title: 'Modern Tech Stack', body: 'We build on Next.js for fast, SEO-ready websites. We design in Figma for precise, handoff-ready visuals. And we use AI-assisted workflows — for copy, imagery, and QA — to ship better work faster without cutting corners.' },
  { number: '06', title: 'Post-Launch Partnership', body: 'Launching is day one, not the finish line. We offer ongoing support retainers covering content updates, SEO reporting, performance monitoring, and design iterations.' },
]

function Card({ item, index }: { item: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="p-6 md:p-8 border rounded-2xl hover:border-[#2C6FED]/30 transition-all duration-300 group card-hover"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, border-color 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)`,
        background: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
    >
      <span className="font-mono text-[11px] block mb-4" style={{ color: 'var(--text-dimmer)' }}>{item.number}</span>
      <p className="font-syne font-bold text-lg mb-3 group-hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text)' }}>
        {item.title}
      </p>
      <p className="font-outfit text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.body}</p>
    </div>
  )
}

export default function WhySection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <span className="font-mono text-[11px] uppercase tracking-widest mb-3 block" style={{ color: 'var(--text-faint)' }}>
          03 / Why Alffy
        </span>
        <h2
          className="font-syne font-extrabold"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.025em', lineHeight: '1', color: 'var(--text)' }}
        >
          Built different.<br />
          <span style={{ color: '#2C6FED' }}>Delivered better.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((r, i) => <Card key={r.number} item={r} index={i} />)}
      </div>
    </section>
  )
}
