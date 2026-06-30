import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
export const metadata: Metadata = { title: 'Data Handling Policy' }
export default function Page() {
  const S = { fontFamily:"'Syne',sans-serif", fontWeight:700 as const, fontSize:20, color:'#E4E4F0', marginTop:32, marginBottom:10 }
  const P = { fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.8, marginBottom:12 }
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero eyebrow="Last updated: June 2026" title="Data Handling Policy" variant="legal" height="36vh" />
      <div style={{ maxWidth:800, margin:'0 auto', padding:'48px 40px 80px' }}>
        <p style={P}>This policy applies specifically to clients engaging Alffy (Alfinega) for data entry, database management, or any service involving the handling of third-party data.</p>
        <h2 style={S}>Confidentiality</h2>
        <p style={P}>All client data shared with Alffy (Alfinega) for the purpose of data entry or processing is treated as strictly confidential. We do not share, sell, or disclose client data to any third party under any circumstances. Staff who handle client data sign confidentiality agreements before beginning work.</p>
        <h2 style={S}>Data security</h2>
        <p style={P}>Client data is stored in encrypted form during the project period. Access is restricted to team members directly assigned to the project. Data is transferred only via secure, encrypted channels. Physical storage of printed data is not permitted.</p>
        <h2 style={S}>Data retention</h2>
        <p style={P}>Client data is retained only for the duration of the project plus 30 days to allow for quality review and corrections. After this period, all copies of client data are permanently deleted from our systems. We can confirm deletion in writing on request.</p>
        <h2 style={S}>Accuracy</h2>
        <p style={P}>We commit to a 99.5% accuracy rate on all data entry work. Projects are QA-reviewed before delivery. If errors are identified after delivery that fall within our accuracy commitment, we will correct them at no additional charge within 7 days of notification.</p>
        <h2 style={S}>Contact</h2>
        <p style={P}>For data handling enquiries, email contact@alfinega.com.</p>
      </div>
    </div>
  )
}
