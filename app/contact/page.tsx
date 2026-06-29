import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Alffy — start a project or request a quote. Based in Kampala, Uganda.',
}

const INFO = [
  { icon:'📧', label:'Email',    value:'contact@alfinega.com', href:'mailto:contact@alfinega.com' },
  { icon:'📞', label:'Phone',    value:'+256 747 113 059',      href:'tel:+256747113059' },
  { icon:'📍', label:'Location', value:'Makindye, Kampala, Uganda', href:null },
  { icon:'⏰', label:'Response', value:'Within 24 hours',      href:null },
]

export default function ContactPage() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'80px 40px' }}>
        <div style={{ marginBottom:56 }}>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>Get In Touch</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:0.92, letterSpacing:'-0.03em', color:'#E4E4F0', marginBottom:16 }}>
            {"Let's build something"}<br /><span style={{ color:'#2C6FED' }}>great together.</span>
          </h1>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:16, color:'#8A8AAA', maxWidth:480, lineHeight:1.7 }}>
            Tell us about your project. We will get back to you within 24 hours with a clear next step.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:64 }}>
          <ContactForm />
          <div>
            <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:32 }}>
              {INFO.map(i => (
                <div key={i.label} style={{ display:'flex', alignItems:'center', gap:16, padding:'18px 20px', border:'1px solid #1C1C34', borderRadius:12, background:'#0A0A16' }}>
                  <span style={{ fontSize:20 }}>{i.icon}</span>
                  <div>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:4 }}>{i.label}</p>
                    {i.href
                      ? <a href={i.href} style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#2C6FED', textDecoration:'none' }}>{i.value}</a>
                      : <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#E4E4F0' }}>{i.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/256747113059" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:12, padding:'16px 20px', borderRadius:12, background:'linear-gradient(135deg,#075E54,#128C7E)', textDecoration:'none' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <div>
                <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, color:'#fff' }}>Message us on WhatsApp</p>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)' }}>Fastest response</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
