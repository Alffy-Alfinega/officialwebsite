import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Next.js vs WordPress for African Business Websites' }
export default function Post() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:760, margin:'0 auto', padding:'80px 40px' }}>
        <Link href="/blog" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', marginBottom:40, display:'inline-block' }}>← Blog</Link>
        <div style={{ display:'flex', gap:10, marginBottom:20, marginTop:16 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'3px 10px', borderRadius:100, border:'1px solid rgba(44,111,237,0.4)', color:'#2C6FED' }}>Web Design</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>6 min read</span>
        </div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1, color:'#E4E4F0', marginBottom:32 }}>Next.js vs WordPress for African Business Websites</h1>
        <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#9A9ABB', lineHeight:1.9, display:'flex', flexDirection:'column', gap:20 }}>
          <p>We build on Next.js. When clients ask why, we give them an honest answer rather than a sales pitch. Here is the real comparison.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Speed on African networks</h2>
          <p>This is the most important factor for businesses in Uganda and East Africa. Most visitors are on mobile, often on 3G or 4G connections. A WordPress site with a standard theme and a handful of plugins typically loads in 4 to 8 seconds. A Next.js site, properly built, loads in under 2 seconds on the same connection.</p>
          <p>Google penalises slow websites in search rankings. Your audience abandons slow websites before they read a single word. Speed is not a technical vanity metric — it directly affects how many customers reach and engage with your content.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Security</h2>
          <p>WordPress powers over 40% of the web, which makes it the most attacked CMS on the internet. A WordPress site that is not actively maintained — plugins updated, security patches applied, backups running — is a site that will eventually be compromised. We have seen this happen to Ugandan business websites multiple times.</p>
          <p>Next.js sites have no database, no plugin ecosystem, and no admin login page to brute-force. The attack surface is dramatically smaller.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Maintenance cost over time</h2>
          <p>WordPress requires ongoing maintenance: plugin updates, theme updates, PHP updates, hosting management, and regular backups. If something breaks after an update — which happens frequently — you either need a developer to fix it or you pay a maintenance retainer.</p>
          <p>A Next.js site deployed on Vercel has no server to manage, no database to maintain, and automatic scaling. The total cost of ownership over three years is significantly lower.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>When WordPress still makes sense</h2>
          <p>WordPress is a reasonable choice when the client needs to manage their own content extensively and cannot afford a developer for content updates. The WordPress admin interface is genuinely easier for non-technical users than a custom Next.js CMS setup.</p>
          <p>For purely content-driven sites — blogs, news publications, and magazines — WordPress with a lightweight theme is a defensible choice. For business websites where performance and security are priorities, Next.js is better in almost every respect.</p>
        </div>
        <div style={{ marginTop:48, padding:'28px', border:'1px solid rgba(44,111,237,0.2)', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:'#E4E4F0', marginBottom:8 }}>Want a fast, modern website?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>We build on Next.js. From UGX 850,000, delivered in 7 days.</p>
          <Link href="/services/web-design" style={{ padding:'11px 24px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>See web design packages</Link>
        </div>
      </div>
    </div>
  )
}
