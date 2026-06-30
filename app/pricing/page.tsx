import type { Metadata } from 'next'
import Link from 'next/link'
import PricingFAQ from '@/components/ui/PricingFAQ'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent UGX pricing for web design, SEO, and branding services. No hidden fees.',
}

const WEB = [
  { tier:'Starter', price:'850,000', note:'One-time', features:['5-page website','Mobile responsive','Basic SEO setup','Contact form','1 revision round','Delivered in 7 days'], cta:'Get Started', featured:false },
  { tier:'Growth', price:'2,200,000', note:'One-time', features:['15-page website','Advanced SEO setup','Blog system','Analytics integration','2 revision rounds','Priority support','Delivered in 14 days'], cta:'Most Popular', featured:true },
  { tier:'Enterprise', price:'Custom', note:'One-time', features:['Unlimited pages','Custom functionality','E-commerce capable','Full SEO strategy','Dedicated project manager','Unlimited revisions','Priority delivery'], cta:'Contact Us', featured:false },
]

const SEO = [
  { tier:'Local SEO', price:'450,000', features:['Google Business optimisation','5 target keywords','Monthly ranking report','On-page optimisation'] },
  { tier:'Growth SEO', price:'900,000', features:['15 target keywords','Content strategy','Technical SEO audit','Link building','Bi-weekly reports'] },
  { tier:'Authority SEO', price:'1,800,000', features:['Unlimited keywords','Full content production','Advanced link building','Competitor monitoring','Weekly reports'] },
]

const BRAND = [
  { tier:'Brand Starter', price:'600,000', features:['Logo design (3 concepts)','Brand colour palette','Typography system','PNG/SVG files'] },
  { tier:'Full Brand', price:'1,400,000', features:['Everything in Starter','Brand guidelines PDF','Social media kit','Business card design','Email signature'] },
  { tier:'Brand + Web', price:'3,200,000', features:['Full Brand package','10-page website','Brand applied throughout','SEO setup','Best value bundle'] },
]

const S: React.CSSProperties = { fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.6rem,3vw,2.2rem)', lineHeight:0.95, letterSpacing:'-0.02em', color:'#E4E4F0', marginBottom:32 }

export default function PricingPage() {
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero
        eyebrow="Transparent Pricing"
        title={<>No hidden fees.<br /><span style={{ color:'#2C6FED' }}>Ever.</span></>}
        subtitle="Every price is in Uganda Shillings (UGX). Fixed quotes, no hourly billing, no surprise invoices."
        variant="pricing"
      />
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'56px 40px 80px' }}>

        {/* Web */}
        <h2 style={S}>Website Design & Development</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16, marginBottom:72 }}>
          {WEB.map(p => (
            <div key={p.tier} style={{ padding:'28px 28px 32px', border:`1px solid ${p.featured ? '#2C6FED' : '#1C1C34'}`, borderRadius:16, background: p.featured ? 'rgba(44,111,237,0.05)' : '#0A0A16', position:'relative' }}>
              {p.featured && <span style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'#2C6FED', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:11, padding:'4px 14px', borderRadius:100 }}>RECOMMENDED</span>}
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:10 }}>{p.tier}</p>
              <div style={{ marginBottom:4 }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:p.price==='Custom'?32:28, color: p.featured ? '#2C6FED' : '#E4E4F0' }}>{p.price==='Custom' ? 'Custom' : `UGX ${p.price}`}</span>
              </div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:12, color:'#6A6A8A', marginBottom:20 }}>{p.note}</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
                {p.features.map(f => <li key={f} style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#9A9ABB', display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ color:'#2C6FED', fontSize:14 }}>✓</span>{f}
                </li>)}
              </ul>
              <Link href="/contact" style={{ display:'block', textAlign:'center', padding:'12px 0', borderRadius:100, textDecoration:'none', background: p.featured ? 'linear-gradient(135deg,#2C6FED,#1A52C4)' : 'transparent', color: p.featured ? '#fff' : '#2C6FED', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, border: p.featured ? 'none' : '1px solid #2C6FED' }}>{p.cta}</Link>
            </div>
          ))}
        </div>

        {/* SEO */}
        <h2 style={S}>SEO & Digital Marketing <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:400, fontSize:14, color:'#6A6A8A' }}>monthly retainer</span></h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14, marginBottom:72 }}>
          {SEO.map(p => (
            <div key={p.tier} style={{ padding:'24px 24px 28px', border:'1px solid #1C1C34', borderRadius:14, background:'#0A0A16' }}>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:10 }}>{p.tier}</p>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:26, color:'#E4E4F0', marginBottom:4 }}>UGX {p.price}</p>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:12, color:'#6A6A8A', marginBottom:18 }}>per month · 3-month minimum</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
                {p.features.map(f => <li key={f} style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#9A9ABB', display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ color:'#2C6FED' }}>✓</span>{f}
                </li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Branding */}
        <h2 style={S}>Branding & Graphic Design</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14, marginBottom:72 }}>
          {BRAND.map(p => (
            <div key={p.tier} style={{ padding:'24px 24px 28px', border:'1px solid #1C1C34', borderRadius:14, background:'#0A0A16' }}>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:10 }}>{p.tier}</p>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:26, color:'#E4E4F0', marginBottom:4 }}>UGX {p.price}</p>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:12, color:'#6A6A8A', marginBottom:18 }}>one-time</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
                {p.features.map(f => <li key={f} style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#9A9ABB', display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ color:'#D4A843' }}>✓</span>{f}
                </li>)}
              </ul>
            </div>
          ))}
        </div>

        <PricingFAQ />
      </div>
    </div>
  )
}
