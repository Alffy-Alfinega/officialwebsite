// ============================================================
// Data Handling Policy Page — Explains Alffy's data practices
// This legal page covers cookies, analytics, contact form
// data, client project data, third-party services, security
// measures, and user data rights.
// Route: /data-handling
// ============================================================

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for navigation between legal pages
import Link from 'next/link'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Data Handling Policy | Alffy (Alfinega)',
  description: 'How Alffy (Alfinega) handles, stores, and protects data. Cookie policy, analytics, and your data rights.',
}

// Main component for the Data Handling Policy page. Default export.
export default function DataHandlingPage() {
  return (
    <div className="pt-[68px]">
      {/* 3D scene contained in a small corner — hidden on mobile, faded to bg */}
      <div className="absolute top-24 right-6 w-[360px] h-[360px] pointer-events-none z-0 hidden md:block">
        <BabylonScene className="w-full h-full" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 15%, var(--bg) 80%)' }} />
      </div>
      {/* Content section with constrained width (860px) for readability */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[860px] mx-auto">

        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Legal</span>
        <h1 className="font-syne font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
          Data Handling Policy
        </h1>
        <p className="font-mono text-[11px] text-[#7A7A9A] mb-12">Effective date: 1 March 2026</p>

        <div className="h-px bg-[#1C1C34] mb-12" />

        {/* Main content sections stacked vertically */}
        <div className="space-y-10">

          {/* Introductory paragraph */}
          <div>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              This Data Handling Policy explains in practical detail how Alffy (Alfinega) collects, processes, stores, and protects data. It supplements our Privacy Policy and is intended to give you clear, plain-language information about our data practices.
            </p>
          </div>

          {/* Section 1: Cookies — explains which cookies are used
              and shows them in a table */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">1. Cookies</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {['Cookie', 'Type', 'Purpose', 'Duration'].map(h => (
                      <th key={h} className="text-left py-3 pr-4 font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest border-b border-[#1C1C34]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['alffy-cookies', 'Essential', 'Stores your cookie consent preference', 'Session'],
                    ['_ga', 'Analytics', 'Google Analytics — distinguishes users', '2 years'],
                    ['_ga_*', 'Analytics', 'Google Analytics — session persistence', '2 years'],
                  ].map(([name, type, purpose, dur]) => (
                    <tr key={name} className="border-b border-[#1C1C34]/40">
                      <td className="py-3 pr-4 font-mono text-[11px] text-[#2C6FED]">{name}</td>
                      <td className="py-3 pr-4 font-outfit text-[#AAAACC] text-sm">{type}</td>
                      <td className="py-3 pr-4 font-outfit text-[#AAAACC] text-sm">{purpose}</td>
                      <td className="py-3 font-outfit text-[#AAAACC] text-sm">{dur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed text-sm">
              We use a cookie consent banner on your first visit. Analytics cookies are only set after you click &ldquo;Accept&rdquo;. You can change your preference by clearing your browser cookies and revisiting the site.
            </p>
          </div>

          {/* Section 2: Analytics — describes Google Analytics 4 usage */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">2. Analytics</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mb-3">
              We use Google Analytics 4 (GA4) to understand website traffic. GA4 collects anonymised data including: pages visited, session duration, device type, browser, approximate location (country/city level), and referral source. IP addresses are anonymised and we do not enable any advertising features in GA4.
            </p>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              GA4 data is retained for 14 months in Google Analytics. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#2C6FED] hover:text-white transition-colors">Google Analytics opt-out browser add-on</a>.
            </p>
          </div>

          {/* Section 3: Contact Form Data — how submitted data is handled */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">3. Contact Form Data</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mb-3">
              When you submit the contact form, your name, email address, and message are sent directly to our team via encrypted email. This data is:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Stored in our email inbox, which is protected by 2-factor authentication',
                'Not added to any marketing list without your explicit opt-in',
                'Retained for up to 24 months for record-keeping purposes',
                'Permanently deleted upon your written request to contact@alfinega.com',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-outfit text-[#BBBBDD] text-sm leading-relaxed">
                  <span className="text-[#2C6FED] mt-1 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Client Project Data — how client materials are stored */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">4. Client Project Data</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mb-3">
              For active client projects, we may handle business data, brand assets, photographs, customer data, and other materials shared with us to complete the project. This data is:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Stored on access-controlled cloud storage',
                'Shared only within the Alffy team on a need-to-know basis',
                'Never shared with third parties except as necessary to deliver the project',
                'Retained for 3 years after project completion, then securely deleted',
                'Available for client download/return upon request at any time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-outfit text-[#BBBBDD] text-sm leading-relaxed">
                  <span className="text-[#2C6FED] mt-1 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Third-Party Services — lists external services used */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">5. Third-Party Services</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mb-4">The following third-party services may process data in connection with our website:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {['Service', 'Purpose', 'Data Processed'].map(h => (
                      <th key={h} className="text-left py-3 pr-4 font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest border-b border-[#1C1C34]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Google Analytics 4', 'Website analytics', 'Anonymised usage data'],
                    ['Vercel', 'Website hosting', 'Request logs, IP addresses'],
                    ['Nodemailer / SMTP', 'Email delivery', 'Contact form submissions'],
                  ].map(([svc, purpose, data]) => (
                    <tr key={svc} className="border-b border-[#1C1C34]/40">
                      <td className="py-3 pr-4 font-outfit text-white text-sm">{svc}</td>
                      <td className="py-3 pr-4 font-outfit text-[#AAAACC] text-sm">{purpose}</td>
                      <td className="py-3 font-outfit text-[#AAAACC] text-sm">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Security Measures */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">6. Security Measures</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              All data transmitted to and from this website is encrypted via HTTPS/TLS. Email accounts used for client communication are protected with 2-factor authentication. Project files are stored on cloud platforms with access control. We conduct periodic access reviews to ensure only current team members retain access to client data.
            </p>
          </div>

          {/* Section 7: Your Data Rights */}
          <div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">7. Your Data Rights</h2>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2 ml-4 mb-4">
              {[
                'Request a copy of any personal data we hold about you',
                'Request correction of inaccurate personal data',
                'Request deletion of your personal data',
                'Object to the processing of your data',
                'Withdraw consent for analytics cookies at any time',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 font-outfit text-[#BBBBDD] text-sm leading-relaxed">
                  <span className="text-[#2C6FED] mt-1 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              To exercise any of these rights, email us at <a href="mailto:contact@alfinega.com" className="text-[#2C6FED] hover:text-white transition-colors">contact@alfinega.com</a>. We will respond within 30 days.
            </p>
          </div>

        </div>

        {/* Footer links to related legal pages */}
        <div className="h-px bg-[#1C1C34] mt-16 mb-8" />
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Privacy Policy</Link>
          <Link href="/terms" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Terms of Service</Link>
          <Link href="/contact" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
