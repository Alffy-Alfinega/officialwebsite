import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Work delivered by Alffy (Alfinega) — websites, branding, and digital projects for clients across Uganda and East Africa.',
}

const PROJECTS = [
  { name:'Makindye Junior Academy', url:'https://makindyeja.dev.alfinega.com', tags:['Web Design','Education'], location:'Makindye, Kampala', desc:'A clean, mobile-first school website with a full prospectus, admissions section, gallery, and contact system.' },
  { name:'Stand-Up Africa Services', url:'https://suas.dev.alfinega.com', tags:['Web Design','NGO','French'], location:'Kampala, Uganda', desc:'Bilingual English/French website for an African NGO focused on community development and sustainable agriculture.' },
  { name:'Makindye Secondary School', url:'https://makindyess.dev.alfinega.com', tags:['Web Design','Education'], location:'Makindye, Kampala', desc:'Secondary school website featuring academic programmes, staff directory, news, and an online enquiry form.' },
  { name:'Kennedy Secondary School',  url:'https://kennedyss.dev.alfinega.com', tags:['Web Design','Education'], location:'Kampala, Uganda', desc:'SDA secondary school website with a full academic calendar, parent portal section, and event announcements.' },
  { name:'E2E Hub Africa',            url:'https://e2ehub.dev.alfinega.com',     tags:['Web Design','Consulting'], location:'Kampala, Uganda', desc:'Corporate consulting firm website with service case studies, team profiles, and a client enquiry funnel.' },
  { name:'Light High School',         url:'https://lighths.dev.alfinega.com',    tags:['Web Design','Education'], location:'Uganda', desc:'Secondary school website built for discoverability — optimised for local search terms in Google Uganda.' },
  { name:'Alffy (Alfinega)',          url:'https://alffy.alfinega.com',           tags:['Web Design','Agency','Next.js'], location:'Makindye, Kampala', desc:'Our own agency website — built on Next.js with Babylon.js 3D scenes, Tailwind CSS, and full SEO infrastructure.' },
  { name:'NAGABA Association',        url:'https://nagaba.proj.alfinega.com',    tags:['Web Design','NGO'], location:'Uganda', desc:'NGO website for NAGABA — an association serving communities across Uganda with a clear mission and donation call-to-action.' },
]

const TAG_COLORS: Record<string,string> = {
  'Web Design':'#2C6FED','Education':'#16a766','NGO':'#D4A843',
  'French':'#9333ea','Consulting':'#ea580c','Agency':'#0891b2','Next.js':'#6366f1',
}

export default function PortfolioPage() {
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero
        eyebrow="Our Work"
        title={<>8 projects.<br /><span style={{ color:'#2C6FED' }}>All live.</span></>}
        subtitle="Every project below is live on the internet right now. Click any link to see the real site, not a mockup, not a screenshot."
        variant="portfolio-hub"
      />
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'56px 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:16 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ border:'1px solid #1C1C34', borderRadius:18, overflow:'hidden', background:'#0A0A16', display:'flex', flexDirection:'column' }}>
              <div style={{ height:170, background:'linear-gradient(135deg,#0A0A16,#10101E)', display:'flex', alignItems:'center', justifyContent:'center', borderBottom:'1px solid #1C1C34', position:'relative' }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'4.5rem', color:'rgba(44,111,237,0.05)', userSelect:'none', lineHeight:1 }}>0{i+1}</span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ position:'absolute', top:12, right:12, padding:'6px 14px', borderRadius:100, border:'1px solid #1C1C34', background:'rgba(10,10,22,0.9)', color:'#CCCCEE', fontFamily:"'JetBrains Mono',monospace", fontSize:10, textDecoration:'none' }}>Live ↗</a>
              </div>
              <div style={{ padding:'20px 22px 24px', flex:1 }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:12 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, padding:'3px 10px', borderRadius:100, border:`1px solid ${TAG_COLORS[t]||'#1C1C34'}40`, color:TAG_COLORS[t]||'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.06em' }}>{t}</span>
                  ))}
                </div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:'#E4E4F0', marginBottom:6 }}>{p.name}</h2>
                <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', marginBottom:10 }}>📍 {p.location}</p>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:56, textAlign:'center', padding:'48px 40px', border:'1px solid #1C1C34', borderRadius:20, background:'#0A0A16' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0', marginBottom:10 }}>Want to be on this list?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', marginBottom:24 }}>Tell us about your project and we will get back to you within 24 hours.</p>
          <Link href="/contact" style={{ padding:'14px 36px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, textDecoration:'none' }}>Start a project</Link>
        </div>
      </div>
    </div>
  )
}
