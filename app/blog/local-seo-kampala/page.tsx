import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local SEO in Kampala: How to Rank When Customers Search Near You',
  description: 'A practical guide to local SEO in Kampala, Uganda — Google Business, citations, local keywords, and how to rank for searches near you.',
}

export default function Post() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:760, margin:'0 auto', padding:'80px 40px' }}>
        <Link href="/blog" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:40 }}>← Blog</Link>
        <div style={{ display:'flex', gap:10, marginBottom:20 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'3px 10px', borderRadius:100, border:'1px solid rgba(22,167,102,0.4)', color:'#16a766' }}>SEO</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>7 min read · May 2026</span>
        </div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1, letterSpacing:'-0.025em', color:'#E4E4F0', marginBottom:32 }}>Local SEO in Kampala: How to Rank When Customers Are Searching Near You</h1>
        <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#9A9ABB', lineHeight:1.9, display:'flex', flexDirection:'column', gap:20 }}>
          <p>Local SEO is the discipline of making your business appear in Google results when someone nearby is searching for what you offer. If someone in Ntinda types "dental clinic near me" or "best salon in Kololo", local SEO determines who appears.</p>
          <p>For most Ugandan businesses, local SEO is the highest-ROI digital marketing investment available. Here is how to do it properly.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0', marginTop:8 }}>Step 1: Claim and complete your Google Business Profile</h2>
          <p>Google Business Profile (formerly Google My Business) is the single most important asset for local SEO. It is the listing that appears in Google Maps and the map pack — the 3 businesses shown at the top of local search results.</p>
          <p>To rank well, your profile needs: accurate business name, address, and phone number; the correct primary category; a complete description with local keywords; at least 10 high-quality photos; and active review responses.</p>
          <p>Most Kampala businesses have claimed their profile but left it 40% complete. That incomplete profile is competing against fully optimised ones — and losing.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Step 2: Target local keywords on your website</h2>
          <p>Your website pages need to contain the terms people in Kampala actually search. This means using phrases like "web designer in Kampala", "accountant Nakasero", or "catering services Kololo" in your page titles, headings, and body text — not just generic terms like "professional services".</p>
          <p>The keyword "web designer" is competed globally. The keyword "web designer Kampala" is competed locally. You have a far better chance of ranking for the latter.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Step 3: Build consistent citations</h2>
          <p>A citation is any mention of your business name, address, and phone number (NAP) on a third-party website. Consistency across citations is a strong local ranking signal.</p>
          <p>For Ugandan businesses, prioritise: Yellow Pages Uganda, Uganda Business Directory, and any industry-specific directories relevant to your sector. Make sure the name, address, and phone number are identical across all of them.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Step 4: Generate and respond to reviews</h2>
          <p>Google reviews are a direct ranking factor for local search. The more reviews you have — and the more recently they were posted — the better your local rankings tend to be.</p>
          <p>The most effective strategy: ask every satisfied customer directly, in person, to leave a Google review. Most people will do it if asked at the right moment. A review request via WhatsApp immediately after a positive experience converts well.</p>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>Step 5: Make your website fast on mobile</h2>
          <p>Most Ugandan internet users browse on mobile, often on 3G or 4G networks. Google knows this. A slow website that loads in 8 seconds on mobile will rank lower than a fast one that loads in under 2 seconds.</p>
          <p>Core Web Vitals — Google's official speed metrics — are a ranking factor. If your website scores poorly, competitors with faster sites will outrank you regardless of how good your other SEO work is.</p>
        </div>
        <div style={{ marginTop:48, padding:'28px', border:'1px solid rgba(44,111,237,0.2)', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:'#E4E4F0', marginBottom:8 }}>Need help with local SEO?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>We run SEO campaigns for Kampala businesses from UGX 450,000/month.</p>
          <Link href="/services/seo-marketing" style={{ padding:'11px 24px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>See SEO packages</Link>
        </div>
      </div>
    </div>
  )
}
