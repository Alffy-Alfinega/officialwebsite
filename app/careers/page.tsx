import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Alffy team in Kampala, Uganda. We are hiring web developers, graphic designers, and SEO specialists.',
}

const ROLES = [
  { title:'Junior Web Developer', type:'Full-time', location:'Kampala, Uganda', tags:['React','Next.js','TypeScript'], desc:'Join our dev team building websites and web apps for clients across Uganda and East Africa. You will work closely with our CTO on real client projects from day one.' },
  { title:'Graphic Designer', type:'Full-time', location:'Kampala, Uganda', tags:['Figma','Illustrator','Photoshop'], desc:'Create logos, brand identities, marketing materials, and social media graphics for a diverse portfolio of Ugandan businesses.' },
  { title:'SEO & Content Specialist', type:'Full-time', location:'Kampala, Uganda', tags:['SEO','Content Writing','Analytics'], desc:'Own the SEO and content strategy for our clients. Research keywords, write blog posts, optimise on-page elements, and track rankings.' },
]

export default function CareersPage() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'80px 40px' }}>
        <div style={{ marginBottom:56 }}>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>Careers at Alffy</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:0.92, letterSpacing:'-0.03em', color:'#E4E4F0', marginBottom:16 }}>
            Build your career<br /><span style={{ color:'#2C6FED' }}>in Kampala.</span>
          </h1>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#8A8AAA', maxWidth:520, lineHeight:1.7 }}>
            We are a small, ambitious team growing fast. If you are talented, curious, and want to do real work on real projects — we want to hear from you.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {ROLES.map(r => (
            <div key={r.title} style={{ padding:'28px 28px 32px', border:'1px solid #1C1C34', borderRadius:16, background:'#0A0A16' }}>
              <div style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:12 }}>
                <div>
                  <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:20, color:'#E4E4F0', marginBottom:6 }}>{r.title}</h2>
                  <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                    <span className="tag">{r.type}</span>
                    <span className="tag">{r.location}</span>
                    {r.tags.map(t => <span key={t} className="tag tag-blue">{t}</span>)}
                  </div>
                </div>
                <a href={`mailto:careers@alfinega.com?subject=Application: ${r.title}`} style={{
                  padding:'10px 22px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff',
                  fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13, textDecoration:'none', whiteSpace:'nowrap',
                }}>Apply Now</a>
              </div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', lineHeight:1.75 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop:48, padding:'28px', border:'1px solid #1C1C34', borderRadius:16, background:'rgba(44,111,237,0.04)' }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:16, color:'#E4E4F0', marginBottom:8 }}>Do not see a role that fits?</p>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:16 }}>
            Send a general application to <a href="mailto:careers@alfinega.com" style={{ color:'#2C6FED' }}>careers@alfinega.com</a> with your portfolio or CV and tell us what you can bring to the team.
          </p>
        </div>
      </div>
    </div>
  )
}
