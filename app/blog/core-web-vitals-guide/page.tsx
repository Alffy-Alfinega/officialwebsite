import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
export const metadata: Metadata = { title: 'Core Web Vitals for Ugandan Websites: A Plain-Language Guide' }
export default function Post() {
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero
        eyebrow="SEO · 5 min read"
        title="Core Web Vitals for Ugandan Websites: A Plain-Language Guide"
        variant="blog-vitals"
        height="40vh"
      />
      <div style={{ maxWidth:760, margin:'0 auto', padding:'48px 40px 80px' }}>
        <Link href="/blog" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textDecoration:'none', marginBottom:32, display:'inline-block' }}>← Blog</Link>
        <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#9A9ABB', lineHeight:1.9, display:'flex', flexDirection:'column', gap:20 }}>
          <p>Google uses Core Web Vitals as a direct ranking factor. Websites that score poorly will rank lower than websites that score well, all else being equal. Here is what the three metrics actually mean — in plain language, without the technical jargon.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>LCP — Largest Contentful Paint</h2>
          <p>LCP measures how long it takes for the largest visible element on the page to load. Usually this is the hero image or the main heading. Google wants LCP under 2.5 seconds. Most Ugandan business websites on shared hosting fail this metric — their hero images are not compressed, and their servers are slow to respond.</p>
          <p>Fix: Compress and convert images to WebP format. Use a CDN. Move to faster hosting or a platform like Vercel.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>INP — Interaction to Next Paint</h2>
          <p>INP replaced FID in 2024. It measures how quickly the page responds when a user taps a button, clicks a link, or interacts with any element. Google wants INP under 200 milliseconds. JavaScript-heavy WordPress sites with multiple plugins frequently fail this — the browser is too busy processing scripts to respond to user input quickly.</p>
          <p>Fix: Reduce JavaScript payload. Defer scripts that are not needed for the initial page load. Remove plugins you do not use.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>CLS — Cumulative Layout Shift</h2>
          <p>CLS measures how much the page layout shifts while loading. You have experienced a bad CLS score if you have ever tapped a button on your phone and suddenly the page jumped and you tapped something else instead. Google wants a CLS score under 0.1.</p>
          <p>Fix: Set explicit width and height attributes on all images and videos. Do not insert content above existing content after the page has loaded. Avoid injecting ads or banners that push content down.</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0' }}>How to check your scores</h2>
          <p>Go to pagespeed.web.dev and enter your website URL. Google will give you scores for mobile and desktop, flag which metrics you are failing, and explain what is causing each issue. Mobile scores are what matter most for Ugandan websites — that is where your visitors are.</p>
          <p>If your website scores below 70 on mobile, it is actively costing you rankings. The fix may be as simple as compressing your images — which takes an hour — or it may require rebuilding on faster infrastructure. Either way, it is worth addressing.</p>
        </div>
        <div style={{ marginTop:48, padding:'28px', border:'1px solid rgba(44,111,237,0.2)', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17, color:'#E4E4F0', marginBottom:8 }}>Poor Core Web Vitals hurting your rankings?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>We fix technical SEO issues and rebuild slow websites on fast infrastructure.</p>
          <Link href="/contact" style={{ padding:'11px 24px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none' }}>Talk to us</Link>
        </div>
      </div>
    </div>
  )
}
