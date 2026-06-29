import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Blog' }
export default function Page() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh', maxWidth:1100, margin:'0 auto', padding:'100px 40px 80px' }}>
      <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,5vw,4rem)', lineHeight:0.95, letterSpacing:'-0.025em', color:'#E4E4F0', marginBottom:20 }}>Blog</h1>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.7 }}>Content coming soon.</p>
    </div>
  )
}
