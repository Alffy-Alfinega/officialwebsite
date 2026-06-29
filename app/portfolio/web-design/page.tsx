import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Web Design Portfolio' }
export default function Page() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'80px 40px' }}>
        <Link href="/portfolio" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:32 }}>← All work</Link>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.2rem,5vw,4rem)', lineHeight:0.92, letterSpacing:'-0.03em', color:'#E4E4F0', marginBottom:16 }}>Web Design Portfolio</h1>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#8A8AAA', maxWidth:500, lineHeight:1.75, marginBottom:40 }}>Projects in this category are part of our full portfolio. View the complete portfolio to see all live work.</p>
        <Link href="/portfolio" style={{ padding:'12px 28px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>View all projects</Link>
      </div>
    </div>
  )
}
