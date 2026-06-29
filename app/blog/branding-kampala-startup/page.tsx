import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Branding for Kampala Startups: What to Invest In First' }
export default function Post() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:760, margin:'0 auto', padding:'80px 40px' }}>
        <Link href="/blog" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', marginBottom:40, display:'inline-block' }}>← Blog</Link>
        <div style={{ display:'flex', gap:10, marginBottom:20, marginTop:16 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'3px 10px', borderRadius:100, border:'1px solid rgba(212,168,67,0.4)', color:'#D4A843' }}>Branding</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>6 min read</span>
        </div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1, color:'#E4E4F0', marginBottom:32 }}>Branding for Kampala Startups: What to Invest In First</h1>
        <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#9A9ABB', lineHeight:1.9, display:'flex', flexDirection:'column', gap:20 }}>
          <p>Building a brand in Kampala is not about spending the most money. It is about spending it in the right order.</p>
          <p>Most Kampala startups get a logo first. That is not wrong — but it is incomplete. Here is the order that actually produces a coherent brand.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Name first</h2>
          <p>A business name that is hard to pronounce, already taken on social media, or too generic will create problems no logo can fix. Before you pay anyone for design work, check availability as a domain, on Instagram, Facebook, and X. A name you can own everywhere is a name you can build on.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Logo second</h2>
          <p>A logo is a symbol. A brand is the complete visual system that makes your business instantly recognisable. Do not stop at the logo. The logo is the starting point, not the destination.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Colour palette and typography</h2>
          <p>Two or three colours used consistently everywhere. One font for headings, one for body text. These two elements, applied consistently, build more brand recognition than any elaborate visual identity that gets used inconsistently.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Guidelines before you hire anyone else</h2>
          <p>Most startups treat each design job as a one-off — one person for the logo, another for Facebook posts, another for flyers. The result looks like three different businesses. A simple brand guidelines document, even four pages, gives everyone the same rulebook. This is why guidelines are included in every Alffy branding package.</p>
        </div>
        <div style={{ marginTop:48, padding:'28px', border:'1px solid rgba(44,111,237,0.2)', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:'#E4E4F0', marginBottom:8 }}>Need a brand for your startup?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>We build brand identities from UGX 600,000.</p>
          <Link href="/services/branding-design" style={{ padding:'11px 24px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>See branding packages</Link>
        </div>
      </div>
    </div>
  )
}
