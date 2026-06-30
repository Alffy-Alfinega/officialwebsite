import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
export const metadata: Metadata = { title: 'Terms of Service' }
export default function Page() {
  const S = { fontFamily:"'Syne',sans-serif", fontWeight:700 as const, fontSize:20, color:'#E4E4F0', marginTop:32, marginBottom:10 }
  const P = { fontFamily:"'Outfit',sans-serif", fontSize:15, color:'#8A8AAA', lineHeight:1.8, marginBottom:12 }
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero eyebrow="Last updated: June 2026" title="Terms of Service" variant="legal" height="36vh" />
      <div style={{ maxWidth:800, margin:'0 auto', padding:'48px 40px 80px' }}>
        <p style={P}>By engaging Alffy (Alfinega) for any service, you agree to the following terms. These terms govern the relationship between Alffy (Alfinega) and any client ("you").</p>
        <h2 style={S}>Scope of work</h2>
        <p style={P}>All projects begin with a written proposal that defines the scope, deliverables, timeline, and fixed price. Work begins only after written approval of the proposal and receipt of the agreed deposit. Any changes to scope after approval are subject to a written change order and may affect price and timeline.</p>
        <h2 style={S}>Payment</h2>
        <p style={P}>Projects under UGX 1,000,000 are billed in full before work begins. Projects over UGX 1,000,000 require a 50% deposit before work begins and 50% on final delivery. We accept mobile money (MTN and Airtel), bank transfer, and cash. Work will not be delivered or made live until payment is complete.</p>
        <h2 style={S}>Revisions</h2>
        <p style={P}>The number of revision rounds included in each package is specified in your proposal. Revisions must be submitted in a single consolidated document or message per round. Additional revision rounds beyond those included will be billed at UGX 80,000 per round.</p>
        <h2 style={S}>Intellectual property</h2>
        <p style={P}>Upon full payment, all creative work produced for your project becomes your property. Alffy (Alfinega) retains the right to display completed work in our portfolio unless you request otherwise in writing.</p>
        <h2 style={S}>Limitation of liability</h2>
        <p style={P}>Alffy (Alfinega) is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use any deliverable. Our total liability is limited to the amount paid for the specific project in question.</p>
        <h2 style={S}>Governing law</h2>
        <p style={P}>These terms are governed by the laws of Uganda. Any disputes shall be subject to the jurisdiction of the courts of Kampala, Uganda.</p>
      </div>
    </div>
  )
}
