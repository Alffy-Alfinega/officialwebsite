'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  { n:'01', title:'Discovery Call',      time:'1–2 days',  body:'A focused conversation about your goals, audience, and constraints. We ask the right questions to put together a smart proposal.' },
  { n:'02', title:'Strategy & Proposal', time:'2–3 days',  body:'Clear scope, fixed timeline, and a fixed price. No hourly billing, no surprise invoices.' },
  { n:'03', title:'Design & Build',      time:'Project-dependent', body:'Our team gets to work. You get regular milestone previews so there are never any surprises at delivery.' },
  { n:'04', title:'Review & Refine',     time:'3–5 days',  body:'You give feedback. We iterate until it\'s exactly right. Two revision rounds are included in all packages.' },
  { n:'05', title:'Launch & Support',    time:'Ongoing',   body:'We deploy, go live, and then stick around. Post-launch support is included. Long-term retainers available.' },
]

function Step({ s, i }: { s: typeof STEPS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ display:'grid', gridTemplateColumns:'60px 1fr', gap:20, alignItems:'start', opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(20px)', transition:`opacity 0.6s ease ${i*0.1}s, transform 0.6s ease ${i*0.1}s` }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ width:52, height:52, borderRadius:14, border:'1px solid #1C1C34', background:'#0A0A16', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:16, color:'#2C6FED' }}>{s.n}</span>
        </div>
        {i < STEPS.length-1 && <div style={{ width:1, flex:1, minHeight:40, marginTop:8, background:'linear-gradient(to bottom,#1C1C34,transparent)' }} />}
      </div>
      <div style={{ paddingBottom:40 }}>
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:8, marginBottom:10 }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:'#E4E4F0' }}>{s.title}</p>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em' }}>⏱ {s.time}</span>
        </div>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', lineHeight:1.75, maxWidth:480 }}>{s.body}</p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section style={{ maxWidth:1440, margin:'0 auto', padding:'80px 40px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:64 }}>
        <div style={{ position:'sticky', top:100, alignSelf:'start' }}>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12 }}>05 / Our Process</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,3.5rem)', lineHeight:0.95, letterSpacing:'-0.025em', color:'#E4E4F0', marginBottom:20 }}>
            How we work.<br /><span style={{ color:'#2C6FED' }}>No surprises.</span>
          </h2>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', lineHeight:1.75, marginBottom:24, maxWidth:320 }}>
            Every project follows the same clear, repeatable process — so you always know exactly where things stand.
          </p>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 16px', border:'1px solid #1C1C34', borderRadius:10 }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#2C6FED', animation:'pulse-ring 2s ease infinite', display:'block' }} />
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA' }}>
              Average timeline: <strong style={{ color:'#E4E4F0' }}>2–4 weeks</strong>
            </span>
          </div>
        </div>
        <div>{STEPS.map((s, i) => <Step key={s.n} s={s} i={i} />)}</div>
      </div>
    </section>
  )
}
