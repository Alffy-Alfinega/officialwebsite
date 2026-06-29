import type { Metadata } from 'next'
import Link from 'next/link'
import { HoverCard } from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Alffy (Alfinega) is a digital agency founded in Kampala, Uganda in 2025 delivering web design, SEO, branding, and media production across East Africa.',
}

const STATS = [
  { v:'2025', l:'Year Founded' }, { v:'8+', l:'Projects Delivered' },
  { v:'6', l:'Services Offered' }, { v:'UG', l:'Proudly Ugandan' },
]
const VALUES = [
  { title:'Craft over shortcuts',    body:'Every deliverable is built specifically for the client. No cheap templates, no cookie-cutter solutions.' },
  { title:'Honest communication',    body:'Fixed quotes, clear timelines, direct updates. If something changes, you hear from us before it affects your project.' },
  { title:'Local roots, global bar', body:'We understand the Ugandan market. The quality of our work is judged against the best agencies anywhere in the world.' },
  { title:'Measurable outcomes',     body:'We care about results — more traffic, more conversions, stronger brand recognition — not just aesthetics.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <section style={{ maxWidth:1200, margin:'0 auto', padding:'80px 40px 60px' }}>
        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>About Alffy</p>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:0.92, letterSpacing:'-0.03em', color:'#E4E4F0', marginBottom:24 }}>
          A digital agency<br /><span style={{ color:'#2C6FED' }}>built in Kampala.</span>
        </h1>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:17, color:'#8A8AAA', maxWidth:560, lineHeight:1.75 }}>
          We started Alffy because we saw Ugandan businesses being underserved — paying for mediocre websites, locked into bloated retainers, working with agencies that outsourced everything. We decided to do it differently.
        </p>
      </section>

      <section style={{ borderTop:'1px solid #1C1C34', borderBottom:'1px solid #1C1C34', background:'#0A0A16' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 40px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:24 }}>
          {STATS.map(s => (
            <div key={s.l} style={{ textAlign:'center' }}>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:36, color:'#2C6FED', lineHeight:1 }}>{s.v}</p>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:6 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth:1200, margin:'0 auto', padding:'72px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:64, alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>Who We Are</p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,3.5vw,3rem)', lineHeight:1, letterSpacing:'-0.025em', color:'#E4E4F0', marginBottom:20 }}>Small team.<br />Big output.</h2>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.8, marginBottom:16 }}>
              Alffy was founded in January 2025 by Musoke Joshua Prosper and Mwawule Christiana under the parent company Alfinega. We launched publicly in January 2026 with a clear mission: give Ugandan businesses access to agency-grade digital work at fair local prices.
            </p>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.8, marginBottom:28 }}>
              We are based in Makindye, Kampala. Everything — web design, SEO, branding, video, animation, cybersecurity — is handled in-house. No outsourcing, no corners cut.
            </p>
            <Link href="/about/story" style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, color:'#2C6FED', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
              Read our full story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ padding:'20px 22px', border:'1px solid #1C1C34', borderRadius:14, background:'#0A0A16' }}>
                <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:14, color:'#E4E4F0', marginBottom:6 }}>{v.title}</p>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth:1200, margin:'0 auto', padding:'0 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
          <HoverCard href="/about/story" title="Our Story"  desc="How Alffy started and where we are going." />
          <HoverCard href="/about/team"  title="The Team"   desc="Meet the two people behind the work." />
          <HoverCard href="/about/why"   title="Why Alffy"  desc="What makes us different from every other agency." />
        </div>
      </section>
    </div>
  )
}
