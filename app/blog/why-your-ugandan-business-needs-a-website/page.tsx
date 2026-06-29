import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Your Ugandan Business Needs a Website in 2026',
  description: 'Still relying on Facebook or WhatsApp for your business? Here is what you are missing and what a professional website changes.',
}

export default function Post() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:760, margin:'0 auto', padding:'80px 40px' }}>
        <Link href="/blog" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:40 }}>← Blog</Link>
        <div style={{ display:'flex', gap:10, marginBottom:20 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'3px 10px', borderRadius:100, border:'1px solid rgba(44,111,237,0.4)', color:'#2C6FED' }}>Web Design</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>5 min read · June 2026</span>
        </div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1, letterSpacing:'-0.025em', color:'#E4E4F0', marginBottom:32 }}>Why Your Ugandan Business Needs a Website in 2026</h1>

        <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#9A9ABB', lineHeight:1.9, display:'flex', flexDirection:'column', gap:20 }}>
          <p>Many Ugandan business owners ask the same question: <em style={{color:'#CCCCEE'}}>"I already have a Facebook page and a WhatsApp Business number. Why do I need a website?"</em></p>
          <p>It is a fair question. Facebook has over 3 million users in Uganda. WhatsApp is how most people communicate. For many small businesses, these platforms are where all the customer interaction happens.</p>
          <p>But here is what social media cannot do:</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0', marginTop:8 }}>1. It cannot help you rank on Google</h2>
          <p>When someone in Kampala types "accountant in Nakasero" or "best nursery school in Makindye" into Google, Facebook pages almost never appear in the top results. A well-built website with proper SEO does. Google indexes websites, not Facebook posts.</p>
          <p>If your business is not on Google, it is invisible to every customer who is not already looking for you specifically. That is a massive chunk of potential revenue you are not capturing.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>2. You do not own your social media presence</h2>
          <p>Facebook can change its algorithm tomorrow and your organic reach drops to zero. Your account can be restricted, hacked, or banned. You have no control over any of that.</p>
          <p>A website you own is yours. The domain is yours. The content is yours. Nobody can take it away or change the rules on you.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>3. It does not build professional credibility</h2>
          <p>When a potential client is deciding whether to hire a law firm, book a clinic, or engage a consulting agency, the first thing they do is Google the business. If no website exists, the first impression is that the business may not be legitimate or established.</p>
          <p>A professional website — fast, mobile-friendly, with clear services and contact information — immediately signals credibility in a way a Facebook page simply cannot.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>4. It cannot work for you while you sleep</h2>
          <p>A website is a 24/7 sales and information tool. Clients can read about your services, fill in a contact form, and get answers to their questions at 11pm on a Sunday — without you doing anything. Social media requires you to be present and active to maintain visibility.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>What a website costs vs what it earns</h2>
          <p>A starter website at Alffy costs UGX 850,000 — a one-time payment. If your website generates even one additional client per month who would not have found you otherwise, it pays for itself within weeks.</p>
          <p>For most Ugandan businesses, the question is not whether to get a website. The question is why they waited this long.</p>
        </div>

        <div style={{ marginTop:48, padding:'28px', border:'1px solid rgba(44,111,237,0.2)', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:'#E4E4F0', marginBottom:8 }}>Ready to get online?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>We build websites from UGX 850,000 — delivered in 7 days.</p>
          <Link href="/contact" style={{ padding:'11px 24px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>Start your project</Link>
        </div>
      </div>
    </div>
  )
}
