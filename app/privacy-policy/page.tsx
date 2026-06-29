import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy' }
export default function Page() {
  const S = { fontFamily:"'Syne',sans-serif", fontWeight:700 as const, fontSize:20, color:'#E4E4F0', marginTop:32, marginBottom:10 }
  const P = { fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.8, marginBottom:12 }
  return (
    <div style={{ paddingTop:68, minHeight:'100vh' }}>
      <div style={{ maxWidth:800, margin:'0 auto', padding:'80px 40px' }}>
        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#6A6A8A', marginBottom:14 }}>Last updated: June 2026</p>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,3.5rem)', color:'#E4E4F0', marginBottom:32 }}>Privacy Policy</h1>
        <p style={P}>This Privacy Policy describes how Alffy (Alfinega) ("we", "us") collects, uses, and protects information when you visit alffy.alfinega.com or use our services.</p>
        <h2 style={S}>What we collect</h2>
        <p style={P}>We collect information you provide directly: your name, email address, and message when you use our contact form or newsletter signup. We also collect analytics data through Google Analytics 4, including pages visited, time on site, and general geographic location (city level). No personally identifiable information is sent to Google without your consent.</p>
        <h2 style={S}>How we use it</h2>
        <p style={P}>Contact form submissions are used solely to respond to your enquiry. Newsletter email addresses are used to send our monthly insights email. Analytics data is used to understand how visitors use the site so we can improve it. We do not sell, rent, or share your data with third parties for marketing purposes.</p>
        <h2 style={S}>Cookies</h2>
        <p style={P}>We use analytics cookies (Google Analytics 4) to understand site usage. These cookies are only set after you accept the cookie banner on your first visit. You can decline cookies and the site will continue to function fully. No advertising or tracking cookies are used.</p>
        <h2 style={S}>Your rights</h2>
        <p style={P}>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make a request, email us at contact@alfinega.com. We will respond within 14 days.</p>
        <h2 style={S}>Data retention</h2>
        <p style={P}>Contact form submissions are retained for 12 months and then deleted. Newsletter subscribers remain on our list until they unsubscribe. Analytics data is retained for 26 months as per Google Analytics default settings.</p>
        <h2 style={S}>Contact</h2>
        <p style={P}>For privacy-related questions, email contact@alfinega.com or write to us at Makindye, Kampala, Uganda.</p>
      </div>
    </div>
  )
}
