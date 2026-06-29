'use client'

import { useEffect, useRef, useState } from 'react'

const T = [
  { quote:'Alffy redesigned our website from scratch. Within 6 weeks of launch, our inbound enquiries went from 4 a month to 23. The SEO work they layered on top has kept those numbers growing.', name:'Nakato Brenda', title:'CEO, Savannah Foods Uganda', svc:'Web Design', init:'NB', c:'#2C6FED' },
  { quote:'They delivered a complete brand identity — logo, guidelines, packaging templates, and social kit — in under two weeks. Our Jumia store conversions improved by 40% after the rebrand.', name:'Ssekito Daniel', title:'Founder, Kampala Honey Co.', svc:'Branding', init:'SD', c:'#D4A843' },
  { quote:'We hired Alffy for an SEO audit and ended up engaging them for 3 months. We went from page 3 to position 4 on Google for our main search term. Real, measurable difference.', name:'Achieng Faith', title:'Marketing Manager, Pearl Clinics Kampala', svc:'SEO', init:'AF', c:'#2C6FED' },
]

function Card({ t }: { t: typeof T[0] }) {
  return (
    <article style={{ flexShrink:0, width:380, padding:'28px 28px 24px', border:'1px solid #1C1C34', borderRadius:16, background:'#0A0A16', marginRight:14, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
      <div>
        <div style={{ display:'flex', gap:3, marginBottom:14 }}>
          {Array.from({length:5}).map((_,i) => <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#D4A843"><path d="M6 1l1.39 2.81L10.5 4.27 8.25 6.47l.53 3.07L6 8.03l-2.78 1.51.53-3.07L1.5 4.27l3.11-.46L6 1z"/></svg>)}
        </div>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#9A9ABB', lineHeight:1.8 }}>&ldquo;{t.quote}&rdquo;</p>
      </div>
      <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid #1C1C34', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:38, height:38, borderRadius:'50%', border:`2px solid ${t.c}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:12, color:t.c }}>{t.init}</span>
          </div>
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, color:'#E4E4F0', lineHeight:1.3 }}>{t.name}</p>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.05em' }}>{t.title}</p>
          </div>
        </div>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'4px 10px', borderRadius:100, border:`1px solid ${t.c}40`, color:t.c, whiteSpace:'nowrap', flexShrink:0 }}>{t.svc}</span>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    let raf: number
    const tick = () => {
      if (!paused && trackRef.current) {
        posRef.current += 0.5
        const half = trackRef.current.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  return (
    <section style={{ padding:'80px 0', overflow:'hidden' }}>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 40px 40px' }}>
        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12 }}>Client Feedback</p>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,3.5rem)', lineHeight:0.95, letterSpacing:'-0.02em', color:'#E4E4F0' }}>What clients say.</h2>
      </div>
      <div
        style={{ overflow:'hidden', cursor:'pointer' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} style={{ display:'flex', willChange:'transform' }}>
          {[...T,...T].map((t,i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
