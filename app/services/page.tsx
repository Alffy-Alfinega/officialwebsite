import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const services = [
  { slug: 'website-design', number: '01', title: 'Website Design', description: 'Modern, responsive websites built to convert visitors into loyal customers. We craft digital experiences that balance stunning visuals with intuitive UX — your brand, expressed at its absolute best.', features: ['Custom UI/UX design', 'Mobile-first responsive development', 'Next.js & React development', 'CMS integration (WordPress, Sanity)', 'Performance optimisation', 'Accessibility compliance'] },
  { slug: 'seo-services', number: '02', title: 'SEO Services', description: 'Comprehensive SEO strategies that boost your organic visibility and drive qualified traffic. From technical audits to content optimisation, we make sure your audience finds you — not your competitors.', features: ['Technical SEO audits', 'On-page optimisation', 'Local SEO (Uganda & East Africa)', 'Keyword research & strategy', 'Link building', 'Monthly performance reports'] },
  { slug: 'graphic-design', number: '03', title: 'Graphic Design', description: 'Eye-catching graphics that narrate your brand story with precision. From social media content to print collateral, every pixel is intentional.', features: ['Social media graphics', 'Print materials (flyers, brochures)', 'Presentations & pitch decks', 'Infographics & data visualisation', 'Display advertising', 'Icon & illustration sets'] },
  { slug: 'branding', number: '04', title: 'Branding', description: 'Complete branding solutions that define who you are before you say a word. We build cohesive brand identities — logo, colour, voice, and everything in between — that your audience remembers.', features: ['Logo design & variations', 'Brand colour palette', 'Typography system', 'Brand voice & messaging', 'Brand guidelines document', 'Stationery & collateral design'] },
  { slug: 'digital-marketing', number: '05', title: 'Digital Marketing', description: 'Strategic digital marketing that reaches your audience where they live. From social media management to paid ad campaigns, we deliver measurable ROI — not vanity metrics.', features: ['Social media strategy & management', 'Paid advertising (Meta, Google)', 'Email marketing campaigns', 'Analytics & conversion tracking', 'Influencer coordination', 'Content calendar planning'] },
  { slug: 'video-editing', number: '06', title: 'Video Editing', description: 'Professional video editing that transforms your raw footage into polished, narrative-driven content. We handle colour grading, motion graphics, sound, and everything else that separates good from great.', features: ['Commercial & promo videos', 'Social media video cuts', 'Colour grading & correction', 'Motion graphics & titles', 'Sound design & mixing', 'Multi-format delivery'] },
  { slug: 'image-editing', number: '07', title: 'Image Editing', description: 'High-quality image editing and enhancement for web, social media, and print. We handle everything from basic retouching to complex composites — your visuals, elevated.', features: ['Product photo retouching', 'Background removal & replacement', 'Colour correction', 'Photo compositing', 'Batch editing', 'Format conversion & compression'] },
  { slug: 'animation', number: '08', title: '2D & 3D Animation', description: 'Captivating 2D and 3D animations that breathe life into your ideas. From explainer videos and motion graphics to full 3D renders, we make the complex beautifully simple.', features: ['2D motion graphics', '3D product animations', 'Explainer videos', 'Animated logos & intros', 'Character animation', 'Visual effects (VFX)'] },
  { slug: 'architectural-design', number: '09', title: 'Architectural Design', description: 'Professional architectural visualisation that lets clients see their project before the first brick is laid. Photorealistic renders, walkthroughs, and floor plans that sell the dream.', features: ['Exterior visualisation', 'Interior renders', '3D walkthroughs & flythroughs', 'Floor plan design', 'Landscape visualisation', 'Virtual staging'] },
  { slug: 'content-creation', number: '10', title: 'Content Creation', description: 'Engaging, SEO-optimised content crafted for your specific audience. Blog posts, website copy, scripts, and multimedia content that builds authority and drives organic growth.', features: ['Blog posts & long-form articles', 'Website & landing page copy', 'Social media content', 'Video scripts', 'Email sequences', 'Product descriptions'] },
  { slug: 'cybersecurity', number: '11', title: 'Cybersecurity', description: 'Comprehensive digital security services that protect your business, website, and customer data. From vulnerability audits to ongoing monitoring, we keep threats out before they get in.', features: ['Website security audits', 'SSL & HTTPS configuration', 'Malware scanning & removal', 'Firewall setup & hardening', 'Data breach risk assessment', 'Security monitoring & alerts'] },
  { slug: 'data-entry', number: '12', title: 'Mass Data Entry', description: 'Professional mass data entry services for businesses that need large volumes of data processed quickly and accurately. From product catalogues to database migration, we handle the volume so you can focus on the business.', features: ['Product catalogue data entry', 'Database population & migration', 'Spreadsheet & CRM data entry', 'Document digitisation', 'Form processing & data extraction', 'Quality assurance & validation'] },
]

export const metadata: Metadata = {
  title: 'Services — Web Design, SEO, Branding & More | Alffy',
  description: 'All 12 services from Alffy (Alfinega), Kampala Uganda: web design, SEO, branding, graphic design, video editing, 2D & 3D animation, architectural design, digital marketing, image editing, content creation, cybersecurity, mass data entry.',
}

export default function ServicesPage() {
  return (
    <div className="pt-[68px]">
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="services" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Services</span>
            <h1
              className="font-syne font-extrabold text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
            >
              Everything you<br />
              <span style={{ color: '#2C6FED' }}>need to grow.</span>
            </h1>
          </div>
          <p className="max-w-sm font-outfit text-[#9A9ABB] leading-relaxed">
            12 specialist services. One cohesive team. From brand identity to search domination — we handle the full digital picture.
          </p>
        </div>
        <div className="mt-8 h-px bg-[#1C1C34]" />
      </section>

      <section className="pb-24 md:pb-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative p-8 md:p-10 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/30 transition-all duration-300 overflow-hidden card-hover"
            >
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
