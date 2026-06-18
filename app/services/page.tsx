// ============================================================
// Services Page — Lists all 12 services Alffy offers
// This is the main services landing page. Each service is
// shown as a card with its number, title, description, and
// top features. Clicking a card navigates to the service's
// detail page at /services/[slug].
// Route: /services
// ============================================================

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for client-side navigation to service detail pages
import Link from 'next/link'

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Array of 6 merged service categories. Each service has a slug,
// display number, title, description, and features for the listing cards.
const services = [
  { slug: 'web-design', number: '01', title: 'Web Design & Development', description: 'Modern, responsive websites built to convert visitors into customers. Custom UI/UX, mobile-first development, CMS integration, and performance optimisation — your brand at its absolute best.', features: ['Custom UI/UX design', 'Mobile-first development', 'Next.js & React', 'CMS integration', 'Performance optimisation', 'E-commerce'] },
  { slug: 'seo-marketing', number: '02', title: 'SEO & Digital Marketing', description: 'Rank higher and reach further with technical SEO, local SEO, paid ads, social media management, and content marketing — all tailored to East African markets.', features: ['Technical SEO', 'Local SEO (Uganda/East Africa)', 'Paid ads (Meta, Google)', 'Social media management', 'Content marketing', 'Analytics & reporting'] },
  { slug: 'branding-design', number: '03', title: 'Branding & Graphic Design', description: 'Cohesive brand identities and stunning visuals — logos, colour systems, brand guidelines, social media graphics, print materials, and presentations.', features: ['Logo & identity systems', 'Brand guidelines', 'Social media graphics', 'Print materials', 'Presentations', 'Infographics'] },
  { slug: 'media-production', number: '04', title: 'Video, Animation & Image Editing', description: 'Polished video content, 2D/3D animation, and professional image editing. Commercials, explainers, product edits, and social media cuts — all from one team.', features: ['Video editing & grading', '2D motion graphics', '3D product animation', 'Photo retouching', 'Background removal', 'Batch editing'] },
  { slug: 'architectural-visualisation', number: '05', title: 'Architectural Visualisation', description: 'Photorealistic renders, 3D walkthroughs, floor plans, and virtual staging that let clients see their project before the first brick is laid.', features: ['Exterior visualisation', 'Interior renders', '3D walkthroughs', 'Floor plan design', 'Virtual staging', 'VR-ready scenes'] },
  { slug: 'cybersecurity-data', number: '06', title: 'Cybersecurity & Data Services', description: 'Protect your business with security audits, malware protection, and firewall hardening — and manage data at scale with professional data entry and migration.', features: ['Security audits', 'Malware removal & monitoring', 'Firewall & SSL setup', 'Data breach assessment', 'Mass data entry', 'Database migration'] },
]

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Services — Web Design, SEO, Branding & More | Alffy Kampala',
  description: '6 core service categories from Alffy (Alfinega), Kampala Uganda: web design, SEO & digital marketing, branding & graphic design, video & animation, architectural visualisation, cybersecurity & data services.',
}

// Main component for the Services page. Default export.
export default function ServicesPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        {/* 3D background scene */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene variant="services" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Services</span>
            <h1
              className="font-syne font-extrabold text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              Everything you<br />
              <span style={{ color: '#2C6FED' }}>need to grow.</span>
            </h1>
          </div>
          <p className="max-w-sm font-outfit text-[#9A9ABB] leading-relaxed">
            6 core capabilities. One cohesive team. From brand identity to search domination — we handle the full digital picture.
          </p>
        </div>
        <div className="mt-8 h-px bg-[#1C1C34]" />
      </section>

      {/* Services Grid Section — renders a 2-column grid of service cards */}
      <section className="pb-24 md:pb-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            // Each card is a Link that navigates to the service detail page
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative p-8 md:p-10 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/30 transition-all duration-300 overflow-hidden card-hover"
            >
              {/* Large semi-transparent number watermark */}
              <span
                className="absolute -right-2 -bottom-4 font-syne font-extrabold text-[8rem] select-none pointer-events-none leading-none transition-colors"
                style={{ color: 'rgba(44,111,237,0.04)' }}
              >
                {service.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[11px] block mb-5" style={{ color: '#6B6B8A' }}>{service.number}</span>
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-[#2C6FED] transition-colors">
                  {service.title}
                </h2>
                <p className="font-outfit text-sm mb-6 leading-relaxed line-clamp-2" style={{ color: '#8A8AAA' }}>
                  {service.description}
                </p>
                {/* Up to 3 feature tags displayed on the card */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wide"
                      style={{ border: '1px solid #2A2A4A', color: '#9090B8', background: 'rgba(44,111,237,0.05)' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                {/* "Learn more" link with arrow icon */}
                <div className="flex items-center gap-2 font-syne font-semibold text-sm text-[#2C6FED] group-hover:gap-3 transition-all">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section — bottom banner for visitors who are unsure what they need */}
      <section className="pb-24 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="rounded-3xl border border-[#1C1C34] bg-[#0A0A16] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-2">
              Not sure what you need?
            </h3>
            <p className="font-outfit text-sm text-[#9A9ABB]">
              Tell us about your project and we&apos;ll recommend the right service mix.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 font-syne font-semibold text-sm bg-[#2C6FED] text-black rounded-full hover:bg-white transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
