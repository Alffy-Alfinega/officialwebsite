import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Cybersecurity & Data Services',
  description: 'Website security audits, SSL configuration, vulnerability assessments, and mass data digitisation for businesses in Uganda and East Africa.',
}

const WEB_SECURITY = [
  { title: 'Website Security Audit', desc: 'We scan your site for known vulnerabilities using industry-standard tools and deliver a written findings report with prioritised remediation steps.' },
  { title: 'SSL & Security Headers', desc: 'Full implementation of HTTPS, HSTS, CSP, X-Frame-Options, and related headers. We configure, verify, and document the setup.' },
  { title: 'Vulnerability Assessment', desc: 'Systematic check of your web application against the OWASP Top 10. We test, document, and explain each finding in plain language.' },
  { title: 'Phishing Awareness Training', desc: 'A practical 1–2 hour session for your team covering how phishing works, how to spot it, and what to do when targeted. Delivered remotely or in person in Kampala.' },
]

const DATA_SERVICES = [
  { title: 'Mass Data Entry & Digitisation', desc: 'Converting paper records, scanned documents, or legacy spreadsheets into clean, structured digital data. Priced per record — no vague hourly billing.' },
  { title: 'Database Organisation & Cleanup', desc: 'Deduplication, normalisation, and restructuring of existing datasets. We work in Excel, Google Sheets, Airtable, or SQL depending on your setup.' },
  { title: 'Digital Records Management', desc: 'Setting up organised folder structures, naming conventions, and access protocols for document management — particularly for NGOs and schools.' },
]

// ─── Scope clarity — what we don't do ─────────────────────────────────────────
const OUT_OF_SCOPE = [
  'Enterprise penetration testing or red team engagements',
  'SOC2, ISO 27001, or PCI-DSS certification audits',
  'Network infrastructure or physical security assessment',
  'Managed security operations (SIEM, MDR, 24/7 monitoring)',
]

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Service 06"
        title={<>Cybersecurity &<br /><span style={{ color: '#2C6FED' }}>Data Services.</span></>}
        subtitle="Practical web security audits and data digitisation services for Ugandan and East African businesses. No enterprise jargon, no inflated scope."
        variant="svc-security"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px' }}>

        {/* Web Security */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>01</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 24, color: '#E4E4F0', marginBottom: 28 }}>Website & Application Security</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {WEB_SECURITY.map((s) => (
              <div key={s.title} style={{ padding: '20px 20px 22px', border: '1px solid #1C1C34', borderRadius: 12, background: '#0A0A16' }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, color: '#E4E4F0', marginBottom: 8 }}>{s.title}</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Services */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>02</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 24, color: '#E4E4F0', marginBottom: 28 }}>Data Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {DATA_SERVICES.map((s) => (
              <div key={s.title} style={{ padding: '20px 20px 22px', border: '1px solid #1C1C34', borderRadius: 12, background: '#0A0A16' }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, color: '#E4E4F0', marginBottom: 8 }}>{s.title}</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#8A8AAA', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honest scope — what we don't do */}
        <section style={{ marginBottom: 56, padding: '28px 28px 28px', border: '1px solid #1C1C34', borderRadius: 16, background: '#0A0A16' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#D4A843', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Scope boundary — what we don't do</p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA', marginBottom: 16, lineHeight: 1.65 }}>
            We are a digital agency, not a dedicated cybersecurity firm. We are clear about what is and is not in scope so you make the right choice for your organisation.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {OUT_OF_SCOPE.map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#6A6A8A' }}>
                <span style={{ color: '#D4A843', flexShrink: 0 }}>—</span>{item}
              </li>
            ))}
          </ul>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#6A6A8A', marginTop: 16 }}>
            For enterprise security requirements, we are happy to refer you to a specialist firm.
          </p>
        </section>

        {/* CTA */}
        <div style={{ padding: '32px', border: '1px solid rgba(44,111,237,0.2)', borderRadius: 16, background: 'rgba(44,111,237,0.04)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: '#E4E4F0', marginBottom: 6 }}>Ready to get started?</p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA' }}>Describe your needs and we will send you a fixed-price quote within 24 hours.</p>
          </div>
          <Link href="/contact" style={{ padding: '12px 28px', borderRadius: 100, background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>Get a quote</Link>
        </div>
      </div>
    </div>
  )
}
