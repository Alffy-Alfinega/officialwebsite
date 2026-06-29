import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ maxWidth:1440, margin:'0 auto', padding:'40px 40px 100px' }}>
      <div className="grid-bg" style={{ position:'relative', border:'1px solid #1C1C34', borderRadius:24, padding:'72px 56px', background:'#0A0A16', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(44,111,237,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1, display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:40 }}>
          <div>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>Ready to start?</p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4.5vw,3.8rem)', lineHeight:0.95, letterSpacing:'-0.025em', color:'#E4E4F0' }}>
              Let&apos;s build something<br /><span style={{ color:'#2C6FED' }}>extraordinary.</span>
            </h2>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            <Link href="/contact" style={{
              padding:'15px 36px', borderRadius:100, textDecoration:'none',
              background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff',
              fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14,
              boxShadow:'0 0 28px rgba(44,111,237,0.35)',
            }}>Start Your Project</Link>
            <Link href="/pricing" style={{
              padding:'15px 36px', borderRadius:100, textDecoration:'none',
              border:'1px solid #1C1C34', color:'#CCCCEE',
              fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14,
            }}>See Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
