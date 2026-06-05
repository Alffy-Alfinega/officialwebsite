// ============================================================
// Terms of Service Page — Legal page for using Alffy's services
// Covers services, client responsibilities, proposals,
// payments, intellectual property, revisions, confidentiality,
// warranties, termination, website use, governing law, etc.
// Route: /terms
// ============================================================

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for navigation between legal pages
import Link from 'next/link'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Terms of Service | Alffy (Alfinega)',
  description: 'Terms and conditions for using Alffy (Alfinega) services and website.',
}

// Effective date constant — easy to update when terms change
const EFFECTIVE = '1 March 2026'

// Main component for the Terms of Service page. Default export.
export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-mono text-[11px] text-[#7A7A9A] mb-12">Effective date: {EFFECTIVE}</p>

        <div className="h-px bg-[#1C1C34] mb-12" />

        <div className="space-y-10">

          {/* Introductory paragraph — explains what the Terms cover */}
          <div>
            <p className="font-outfit text-[#BBBBDD] leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at alffy.alfinega.com and any services provided by Alffy (Alfinega) (&ldquo;Alffy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing the website or engaging our services, you agree to these Terms in full. If you do not agree, please do not use our website or services.
            </p>
          </div>

          {/* Array of policy sections — each has a title and body text.
              Mapped over to render each section as a heading + paragraph. */}
          {[
            {
              title: '1. Services',
              text: 'Alffy provides digital agency services including, but not limited to: website design and development, search engine optimisation (SEO), brand identity design, graphic design, digital marketing, video editing, image editing, 2D and 3D animation, architectural visualisation, and content creation. The specific scope of services for any engagement is defined in a written proposal or service agreement accepted by both parties.'
            },
            {
              title: '2. Client Responsibilities',
              text: 'Clients are responsible for: (a) providing accurate and complete project information at the start of the engagement; (b) responding to requests for feedback, approvals, or additional information within agreed timelines; (c) ensuring they have the rights to use any materials, assets, logos, or content provided to Alffy for use in a project; (d) making payments in accordance with the agreed schedule.'
            },
            {
              title: '3. Proposals and Agreements',
              text: 'All project engagements are based on a written proposal that defines the scope, deliverables, timeline, and price. A project begins only after written acceptance of the proposal (email acceptance is valid) and receipt of the agreed deposit payment. Changes to the agreed scope during a project may result in revised pricing and timelines, which will be communicated in writing before additional work is undertaken.'
            },
            {
              title: '4. Payments',
              text: 'Payment terms are defined in the project proposal. Standard terms are 50% deposit upon project commencement and 50% upon final delivery, unless otherwise agreed. Invoices are due within 7 days of issue unless otherwise specified. Late payments may attract interest at 2% per month on the outstanding balance. Alffy reserves the right to suspend work on any project where payment is overdue by more than 14 days.'
            },
            {
              title: '5. Intellectual Property',
              text: 'Upon receipt of full payment, the client receives full ownership of the final deliverables created specifically for their project (custom designs, code, written content). Alffy retains ownership of any pre-existing tools, frameworks, templates, or methodologies used in the course of delivering the project. Alffy retains the right to display completed work in its portfolio unless the client requests otherwise in writing.'
            },
            {
              title: '6. Revisions',
              text: 'Project proposals specify the number of revision rounds included. Additional revisions beyond the agreed scope may be charged at the applicable hourly or daily rate. Revisions are distinct from error corrections — any errors attributable to Alffy will be corrected at no additional charge within the agreed project warranty period of 30 days following final delivery.'
            },
            {
              title: '7. Confidentiality',
              text: 'Alffy treats all client information, project briefs, business data, and materials shared in the course of a project as confidential. We will not disclose this information to third parties without client consent, except as required by law or as necessary to deliver the project (e.g., sharing with our own team members). Clients should not share sensitive business data that is not relevant to the project.'
            },
            {
              title: '8. Warranties and Liability',
              text: 'Alffy warrants that services will be performed with reasonable skill and care. We do not warrant specific commercial outcomes (such as a particular search ranking position or number of enquiries) as these depend on factors outside our control. To the maximum extent permitted by applicable law, Alffy\'s total liability for any claim arising from our services is limited to the total fees paid for the specific service giving rise to the claim.'
            },
            {
              title: '9. Termination',
              text: 'Either party may terminate a project engagement with 14 days written notice. Upon termination, the client is liable for payment for all work completed up to the termination date, calculated on a pro-rata basis. The deposit is non-refundable. If termination is due to Alffy\'s material breach, a fair refund of any overpaid amounts will be issued within 30 days.'
            },
            {
              title: '10. Website Use',
              text: 'You may use the alffy.alfinega.com website for personal and commercial research purposes. You may not: copy or scrape website content without written permission; use the website in any way that causes damage or disruption; use the website to transmit spam, harmful content, or illegal material. Alffy reserves the right to restrict access to the website at any time.'
            },
            {
              title: '11. Governing Law',
              text: 'These Terms are governed by the laws of the Republic of Uganda. Any disputes arising from these Terms or from a service engagement shall first be subject to good-faith negotiation. If not resolved, disputes shall be referred to mediation or the courts of Uganda.'
            },
            {
              title: '12. Changes to These Terms',
              text: 'We may update these Terms from time to time. We will update the effective date above and notify active clients of significant changes by email. Continued use of the website or our services after changes constitutes acceptance of the updated Terms.'
            },
            {
              title: '13. Contact',
              text: 'For questions about these Terms, contact us at:\n\nAlffy (Alfinega)\nMakindye, Kampala, Uganda\ncontact@alfinega.com\n+256 747 113 059'
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-syne font-bold text-xl text-white mb-4">{section.title}</h2>
              <p className="font-outfit text-[#BBBBDD] text-base leading-relaxed whitespace-pre-line">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Footer links to related legal pages */}
        <div className="h-px bg-[#1C1C34] mt-16 mb-8" />
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Privacy Policy</Link>
          <Link href="/data-handling" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Data Handling Policy</Link>
          <Link href="/contact" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-wide">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
