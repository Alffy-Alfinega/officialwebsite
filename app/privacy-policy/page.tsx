// ============================================================
// Privacy Policy Page — Legal page explaining data collection
// Covers information collected, how it's used, legal basis,
// data sharing, retention, user rights, security, and more.
// Route: /privacy-policy
// ============================================================

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for navigation between legal pages
import Link from 'next/link'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Privacy Policy | Alffy (Alfinega)',
  description: 'Privacy policy for Alffy (Alfinega). How we collect, use, and protect your personal data.',
}

// Constants used throughout the policy text — defined at the top
// so they're easy to find and update if details change.
const EFFECTIVE = '1 March 2026'
const COMPANY   = 'Alffy (Alfinega)'
const EMAIL     = 'contact@alfinega.com'
const ADDRESS   = 'Makindye, Kampala, Uganda'

// Main component for the Privacy Policy page. Default export.
export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-mono text-[11px] text-[#7A7A9A] mb-12">Effective date: {EFFECTIVE}</p>

        <div className="h-px bg-[#1C1C34] mb-12" />

        <div className="space-y-10">

          {/* Introductory section — defines who Alffy is and links to the website */}
          <div>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              {COMPANY} (&ldquo;Alffy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at <a href="https://alffy.alfinega.com" className="text-[#2C6FED] hover:text-white transition-colors">alffy.alfinega.com</a>. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
            </p>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed mt-4">
              By using our website or services, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use our website.
            </p>
          </div>

          {/* Array of policy sections — each has a title and an
              array of content items (each with optional sub-heading
              and text body). This array is mapped over to render
              each section dynamically. */}
          {[
            {
              title: '1. Information We Collect',
              content: [
                { sub: '1.1 Information you provide directly', text: 'When you fill in our contact form, enquiry form, or newsletter sign-up, we collect: your name, email address, phone number (if provided), company name (if provided), and the content of your message.' },
                { sub: '1.2 Information collected automatically', text: 'When you visit our website, we automatically collect: your IP address, browser type and version, pages visited and time spent, referring URL, and device type. This data is collected via Google Analytics (GA4) and is anonymised where possible.' },
                { sub: '1.3 Cookies', text: 'We use essential cookies to make the website function, and analytics cookies (with your consent) to understand how visitors use the site. You can accept or decline non-essential cookies using the cookie notice shown on your first visit. See our Data Handling Policy for full details.' },
              ],
            },
            {
              title: '2. How We Use Your Information',
              content: [
                { sub: '2.1 To respond to enquiries', text: 'When you contact us via the website, we use your name and email address to reply to your message. We retain this correspondence for up to 24 months unless you request earlier deletion.' },
                { sub: '2.2 To send project-related communications', text: 'For active clients, we use your contact details to communicate about your project — proposals, invoices, progress updates, and deliverables.' },
                { sub: '2.3 To improve our website', text: 'Analytics data helps us understand which pages are most useful, where visitors drop off, and how to improve the overall experience. This data does not personally identify you.' },
                { sub: '2.4 Marketing', text: 'We do not send unsolicited marketing emails. If you have subscribed to our newsletter, you may unsubscribe at any time using the link in any email we send.' },
              ],
            },
            {
              title: '3. Legal Basis for Processing',
              content: [
                { sub: '', text: 'We process your personal data under the following legal bases: (a) Contractual necessity — when processing is required to deliver services you have engaged us for. (b) Legitimate interests — for analytics and improving our website, where these interests are not overridden by your rights. (c) Consent — for cookies and newsletter subscriptions, which you can withdraw at any time.' },
              ],
            },
            {
              title: '4. Data Sharing',
              content: [
                { sub: '', text: 'We do not sell your personal data. We may share your information with trusted third-party service providers who assist in running our business, including: Google Analytics (website analytics), our email service provider (for sending project correspondence), and our cloud storage provider (for storing project files). These providers are contractually bound to handle your data securely and in accordance with applicable law.' },
              ],
            },
            {
              title: '5. Data Retention',
              content: [
                { sub: '', text: 'We retain contact form submissions for 24 months. Client project data (briefs, files, correspondence) is retained for 3 years after project completion, unless a longer period is required by law or agreed with the client. Analytics data is retained according to the default Google Analytics retention settings (14 months). You may request deletion of your data at any time.' },
              ],
            },
            {
              title: '6. Your Rights',
              content: [
                { sub: '', text: 'You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data ("right to be forgotten"); object to processing based on legitimate interests; withdraw consent at any time (this does not affect processing already carried out). To exercise any of these rights, contact us at ' + EMAIL + '. We will respond within 30 days.' },
              ],
            },
            {
              title: '7. Data Security',
              content: [
                { sub: '', text: 'We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our website is served over HTTPS. Contact form data is transmitted securely and stored on access-controlled systems.' },
              ],
            },
            {
              title: '8. International Transfers',
              content: [
                { sub: '', text: 'Our website may be accessed from, and some of our service providers are based outside Uganda. Where data is transferred internationally, we ensure appropriate safeguards are in place in accordance with applicable data protection law.' },
              ],
            },
            {
              title: "9. Children's Privacy",
              content: [
                { sub: '', text: 'Our website and services are not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at ' + EMAIL + '.' },
              ],
            },
            {
              title: '10. Changes to This Policy',
              content: [
                { sub: '', text: 'We may update this Privacy Policy from time to time. We will update the effective date at the top of this page and, where changes are significant, notify active clients by email. Continued use of the website after changes constitutes acceptance of the updated policy.' },
              ],
            },
            {
              title: '11. Contact Us',
              content: [
                { sub: '', text: `For questions about this Privacy Policy or to exercise your data rights, contact us at:\n\n${COMPANY}\n${ADDRESS}\nEmail: ${EMAIL}\nPhone: +256 747 113 059` },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-syne font-bold text-xl text-white mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <div key={i}>
                    {item.sub && <p className="font-syne font-semibold text-sm text-[#AAAACC] mb-1">{item.sub}</p>}
                    <p className="font-outfit text-[#BBBBDD] text-base leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer links to related legal pages */}
        <div className="h-px bg-[#1C1C34] mt-16 mb-8" />
        <div className="flex flex-wrap gap-4">
          <Link href="/terms" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Terms of Service</Link>
          <Link href="/data-handling" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Data Handling Policy</Link>
          <Link href="/contact" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
