'use client'

import { useRef, useEffect, useState } from 'react'

const steps = [
  { number: '01', title: 'Discovery Call', body: 'We start with a focused conversation about your goals, audience, and constraints. No fluff — just the information we need to put together a smart proposal.', duration: '1–2 days' },
  { number: '02', title: 'Strategy & Proposal', body: 'Based on discovery, we deliver a clear scope, timeline, and fixed price. No hourly billing, no scope creep surprises.', duration: '2–3 days' },
  { number: '03', title: 'Design & Build', body: 'Our team gets to work. You receive regular updates and milestone previews — so there are never any surprises at delivery.', duration: 'Project-dependent' },
  { number: '04', title: 'Review & Refine', body: "You give feedback on the deliverables. We iterate until it's exactly right. Two revision rounds are included in all packages.", duration: '3–5 days' },
  { number: '05', title: 'Launch & Support', body: 'We deploy, go live, and then stick around. Post-launch support is included, and long-term retainers are available for ongoing growth.', duration: 'Ongoing' },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-6 items-start"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border group-hover:border-[#2C6FED]/40 flex items-center justify-center transition-colors shrink-0"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          <span className="font-syne font-extrabold text-lg md:text-xl text-[#2C6FED]">{step.number}</span>
        </div>
        {index < steps.length - 1 && (
          <div className="w-px flex-1 mt-3 min-h-[40px]" style={{ background: `linear-gradient(to bottom, var(--border), transparent)` }} />
        )}
      </div>
      <div className="pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
          <p className="font-syne font-bold text-xl group-hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text)' }}>
            {step.title}
          </p>
          <span className="font-mono text-[10px] uppercase tracking-widest shrink-0" style={{ color: 'var(--text-dimmer)' }}>
            ⏱ {step.duration}
          </span>
        </div>
        <p className="font-outfit text-sm leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>{step.body}</p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div className="h-px mb-20" style={{ background: 'var(--border)' }} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <span className="font-mono text-[11px] uppercase tracking-widest mb-4 block" style={{ color: 'var(--text-faint)' }}>
            05 / Our Process
          </span>
          <h2
            className="font-syne font-extrabold leading-none mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}
          >
            How we work.<br />
            <span style={{ color: '#2C6FED' }}>No surprises.</span>
          </h2>
          <p className="font-outfit leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--text-muted)' }}>
            Every project follows the same clear, repeatable process — so you always know exactly where things stand.
          </p>
          <div className="p-5 border rounded-xl inline-flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
            <span className="w-2 h-2 rounded-full bg-[#2C6FED] animate-pulse shrink-0" />
            <span className="font-outfit text-sm" style={{ color: 'var(--text-muted)' }}>
              Average project timeline: <span className="font-medium" style={{ color: 'var(--text)' }}>2–4 weeks</span>
            </span>
          </div>
        </div>
        <div>
          {steps.map((step, i) => <Step key={step.number} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
