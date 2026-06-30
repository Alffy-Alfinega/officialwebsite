import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Why Alffy',
  description: 'What makes Alffy different from other digital agencies in Uganda and East Africa.',
}

const REASONS = [
  { n: '01', title: 'We are based here, not abroad', body: 'We understand the Ugandan internet landscape — how people browse on mobile data, which payment systems work, what copy resonates in the local market. An agency in London does not know this. We do.' },
  { n: '02', title: 'No outsourcing. Ever.',          body: 'Every project is handled by us directly. We do not farm work out to freelancers, overseas contractors, or cheaper studios. When you hire Alffy, the people who pitch the project are the people who deliver it.' },
  { n: '03', title: 'Fixed prices, not hourly',        body: 'Hourly billing is a trap. It incentivises slow work and punishes clients for asking questions. We quote a fixed price before we start. That number does not change unless you change the scope.' },
  { n: '04', title: 'We measure results',              body: 'We set up Google Analytics, track keyword rankings, and report on real metrics. You will know exactly what your investment is doing. We do not hide behind vanity metrics.' },
  { n: '05', title: 'Modern tech, properly used',      body: 'We build with Next.js, not WordPress with 30 plugins. We design in Figma, not Canva. We use tools that produce fast, maintainable, scalable output — because shortcuts cost you money later.' },
  { n: '06', title: 'You talk to the people doing the work', body: 'No account managers, no ticketing systems, no "your request has been forwarded". You have WhatsApp access to the people directly working on your project throughout.' },
  { n: '07', title: 'We are growing with you',         body: 'Our clients are not one-and-done projects. We offer ongoing support retainers so that as your business grows, your digital presence grows with it. We want to be your long-term partner, not just a vendor.' },
  { n: '08', title: 'We are honest about what we cannot do', body: 'If a project is outside our current capability, we say so. We would rather lose a job than promise something we cannot deliver. That policy has earned us more repeat business than any pitch ever could.' },
]

export default function WhyPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Why Alffy"
        title={<>Why agencies fail.<br /><span style={{ color: '#2C6FED' }}>Why we do not.</span></>}
        subtitle="Most agency failures come from the same three places: overpromising, outsourcing, and disappearing after payment. We have built Alffy around avoiding all three."
        variant="about"
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14, marginBottom: 64 }}>
          {REASONS.map(r => (
            <div key={r.n} style={{ padding: '24px 26px 28px', border: '1px solid #1C1C34', borderRadius: 16, background: '#0A0A16' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#2C6FED', display: 'block', marginBottom: 12 }}>{r.n}</span>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: '#E4E4F0', marginBottom: 10 }}>{r.title}</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.8 }}>{r.body}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '48px 0', borderTop: '1px solid #1C1C34' }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: '#8A8AAA', marginBottom: 24 }}>Ready to see the difference?</p>
          <Link href="/contact" style={{ padding: '14px 36px', borderRadius: 100, background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Start a project</Link>
        </div>
      </div>
    </div>
  )
}
