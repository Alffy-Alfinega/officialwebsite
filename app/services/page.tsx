import type { Metadata } from 'next'
import Link from 'next/link'
import { HoverServiceRow } from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web design, SEO, branding, video, architectural visualisation, and cybersecurity services in Kampala, Uganda.',
}

const SERVICES = [
  { n:'01', slug:'web-design',                title:'Web Design & Development',         icon:'🌐', price:'From UGX 850,000',    desc:'Fast, modern Next.js websites. Mobile-first, SEO-ready, and built to last. From 5-page business sites to complex multi-page platforms.' },
  { n:'02', slug:'seo-marketing',             title:'SEO & Digital Marketing',          icon:'📈', price:'From UGX 450,000/mo',  desc:'Keyword research, on-page optimisation, technical SEO, and link building. Monthly ranking reports in plain language.' },
  { n:'03', slug:'branding-design',           title:'Branding & Graphic Design',        icon:'🎨', price:'From UGX 600,000',    desc:'Logo design, brand guidelines, typography systems, and visual identity. Everything a business needs to look professional and consistent.' },
  { n:'04', slug:'media-production',          title:'Video, Animation & Image Editing', icon:'🎬', price:'Custom',              desc:'Video editing, 2D and 3D animation, motion graphics, and image editing. Media that tells your story across every platform.' },
  { n:'05', slug:'architectural-visualisation',title:'Architectural Visualisation',      icon:'🏗️', price:'Custom',              desc:'Photorealistic 3D renders and walkthroughs of architectural designs. Used by developers, architects, and real estate businesses.' },
  { n:'06', slug:'cybersecurity-data',        title:'Cybersecurity & Data Services',    icon:'🔒', price:'Custom',              desc:'Security audits, vulnerability assessments, mass data entry, and digital data management. Keeping your business and its data safe.' },
]

export default function ServicesPage() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'80px 40px' }}>
        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>What We Do</p>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:0.92, letterSpacing:'-0.03em', color:'#E4E4F0', marginBottom:16 }}>
          6 services.<br /><span style={{ color:'#2C6FED' }}>All in-house.</span>
        </h1>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#8A8AAA', maxWidth:520, lineHeight:1.75, marginBottom:56 }}>
          Every service is delivered entirely in-house by our team in Kampala. No outsourcing, no subcontractors. You get direct access to the people doing the actual work.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {SERVICES.map(s => (
            <HoverServiceRow key={s.slug} href={`/services/${s.slug}`} n={s.n} title={s.title} desc={s.desc} price={s.price} icon={s.icon} />
          ))}
        </div>
        <div style={{ marginTop:48, padding:'32px', border:'1px solid #1C1C34', borderRadius:16, background:'rgba(44,111,237,0.04)', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:24 }}>
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:'#E4E4F0', marginBottom:8 }}>Not sure which service you need?</p>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA' }}>Tell us your goal. We will recommend the right combination.</p>
          </div>
          <Link href="/contact" style={{ padding:'12px 28px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none', whiteSpace:'nowrap' }}>Talk to us</Link>
        </div>
      </div>
    </div>
  )
}
