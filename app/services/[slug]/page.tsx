import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const services = [
  { slug: 'website-design', number: '01', title: 'Website Design', shortTitle: 'Web Design', tagline: 'Experiences that convert', description: 'Modern, responsive websites built to convert visitors into loyal customers. We craft digital experiences that balance stunning visuals with intuitive UX — your brand, expressed at its absolute best.', features: ['Custom UI/UX design', 'Mobile-first responsive development', 'Next.js & React development', 'CMS integration (WordPress, Sanity)', 'Performance optimisation', 'Accessibility compliance'], deliverables: ['Design mockups', 'Responsive website', 'CMS training', 'Post-launch support'] },
  { slug: 'seo-services', number: '02', title: 'SEO Services', shortTitle: 'SEO', tagline: 'Rank. Be found. Grow.', description: 'Comprehensive SEO strategies that boost your organic visibility and drive qualified traffic. From technical audits to content optimisation, we make sure your audience finds you — not your competitors.', features: ['Technical SEO audits', 'On-page optimisation', 'Local SEO (Uganda & East Africa)', 'Keyword research & strategy', 'Link building', 'Monthly performance reports'], deliverables: ['SEO audit report', 'Keyword strategy doc', 'Monthly ranking reports', 'Actionable roadmap'] },
  { slug: 'graphic-design', number: '03', title: 'Graphic Design', shortTitle: 'Graphics', tagline: 'Visual language that speaks', description: 'Eye-catching graphics that narrate your brand story with precision. From social media content to print collateral, every pixel is intentional.', features: ['Social media graphics', 'Print materials (flyers, brochures)', 'Presentations & pitch decks', 'Infographics & data visualisation', 'Display advertising', 'Icon & illustration sets'], deliverables: ['Print-ready files', 'Web-optimised assets', 'Source files', 'Style guide'] },
  { slug: 'branding', number: '04', title: 'Branding', shortTitle: 'Branding', tagline: 'Identity engineered for impact', description: 'Complete branding solutions that define who you are before you say a word. We build cohesive brand identities — logo, colour, voice, and everything in between — that your audience remembers.', features: ['Logo design & variations', 'Brand colour palette', 'Typography system', 'Brand voice & messaging', 'Brand guidelines document', 'Stationery & collateral design'], deliverables: ['Logo files (all formats)', 'Brand guidelines PDF', 'Asset library', 'Stationery pack'] },
  { slug: 'digital-marketing', number: '05', title: 'Digital Marketing', shortTitle: 'Marketing', tagline: 'Campaigns built to convert', description: 'Strategic digital marketing that reaches your audience where they live. From social media management to paid ad campaigns, we deliver measurable ROI — not vanity metrics.', features: ['Social media strategy & management', 'Paid advertising (Meta, Google)', 'Email marketing campaigns', 'Analytics & conversion tracking', 'Influencer coordination', 'Content calendar planning'], deliverables: ['Campaign strategy deck', 'Ad creatives', 'Monthly analytics report', 'Optimisation roadmap'] },
  { slug: 'video-editing', number: '06', title: 'Video Editing', shortTitle: 'Video', tagline: 'Raw footage → compelling story', description: 'Professional video editing that transforms your raw footage into polished, narrative-driven content. We handle colour grading, motion graphics, sound, and everything else that separates good from great.', features: ['Commercial & promo videos', 'Social media video cuts', 'Colour grading & correction', 'Motion graphics & titles', 'Sound design & mixing', 'Multi-format delivery'], deliverables: ['Master video file', 'Platform-optimised cuts', 'Project file', 'Thumbnail designs'] },
  { slug: 'image-editing', number: '07', title: 'Image Editing', shortTitle: 'Photo Edit', tagline: 'Perfect. Every. Pixel.', description: 'High-quality image editing and enhancement for web, social media, and print. We handle everything from basic retouching to complex composites — your visuals, elevated.', features: ['Product photo retouching', 'Background removal & replacement', 'Colour correction', 'Photo compositing', 'Batch editing', 'Format conversion & compression'], deliverables: ['Edited image files', 'Web & print formats', 'Original backups'] },
  { slug: 'animation', number: '08', title: '2D & 3D Animation', shortTitle: 'Animation', tagline: 'Stories that move people', description: 'Captivating 2D and 3D animations that breathe life into your ideas. From explainer videos and motion graphics to full 3D renders, we make the complex beautifully simple.', features: ['2D motion graphics', '3D product animations', 'Explainer videos', 'Animated logos & intros', 'Character animation', 'Visual effects (VFX)'], deliverables: ['Animation files', 'Source project files', 'Platform-ready exports'] },
  { slug: 'architectural-design', number: '09', title: 'Architectural Design', shortTitle: 'Architecture', tagline: "Vision before it's built", description: 'Professional architectural visualisation that lets clients see their project before the first brick is laid. Photorealistic renders, walkthroughs, and floor plans that sell the dream.', features: ['Exterior visualisation', 'Interior renders', '3D walkthroughs & flythroughs', 'Floor plan design', 'Landscape visualisation', 'Virtual staging'], deliverables: ['High-res renders', 'Walkthrough video', 'Floor plan files', 'VR-ready scenes'] },
  { slug: 'content-creation', number: '10', title: 'Content Creation', shortTitle: 'Content', tagline: 'Words that rank and resonate', description: 'Engaging, SEO-optimised content crafted for your specific audience. Blog posts, website copy, scripts, and multimedia content that builds authority and drives organic growth.', features: ['Blog posts & long-form articles', 'Website & landing page copy', 'Social media content', 'Video scripts', 'Email sequences', 'Product descriptions'], deliverables: ['Content calendar', 'Written content (all formats)', 'SEO report', 'Publishing guide'] },
  { slug: 'cybersecurity', number: '11', title: 'Cybersecurity', shortTitle: 'Security', tagline: 'Protect what you have built', description: 'Comprehensive digital security services that protect your business, website, and customer data. From vulnerability audits to ongoing monitoring, we keep threats out before they get in.', features: ['Website security audits', 'SSL & HTTPS configuration', 'Malware scanning & removal', 'Firewall setup & hardening', 'Data breach risk assessment', 'Security monitoring & alerts'], deliverables: ['Security audit report', 'Vulnerability fix log', 'Monitoring dashboard', 'Incident response plan'] },
  { slug: 'data-entry', number: '12', title: 'Mass Data Entry', shortTitle: 'Data Entry', tagline: 'Accurate. Fast. Scalable.', description: 'Professional mass data entry services for businesses that need large volumes of data processed quickly and accurately. From product catalogues to database migration, we handle the volume so you can focus on the business.', features: ['Product catalogue data entry', 'Database population & migration', 'Spreadsheet & CRM data entry', 'Document digitisation', 'Form processing & data extraction', 'Quality assurance & validation'], deliverables: ['Completed dataset', 'QA validation report', 'Structured file exports', 'Error log & corrections'] },
]

function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return { title: `${service.title} | Alffy — Kampala, Uganda`, description: service.description }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const next = services[(currentIndex + 1) % services.length]
  const prev = services[(currentIndex - 1 + services.length) % services.length]

  return (
    <div className="pt-[68px]">
      <section className="relative min-h-[60vh] flex items-end overflow-x-hidden px-6 md:px-16 lg:px-24 pb-16 pt-32">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="service-slug" slug={slug} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 80% at 80% 50%, transparent 0%, #04040C 82%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-widest">Services</Link>
            <span className="text-[#6A6A8A]">/</span>
            <span className="font-mono text-[11px] text-[#2C6FED] uppercase tracking-widest">{service.shortTitle}</span>
          </div>
          <span className="font-mono text-[11px] text-[#7A7A9A] block mb-4">{service.number} / {String(services.length).padStart(2, '0')}</span>
          <h1
            className="font-syne font-extrabold text-white leading-none mb-4"
            style={{
              fontSize: 'clamp(2rem, 7vw, 6.5rem)',
              letterSpacing: '-0.03em',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {service.title}
          </h1>
          <p className="font-syne font-semibold text-xl md:text-2xl" style={{ color: '#2C6FED' }}>{service.tagline}</p>
        </div>
      </section>

      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-syne font-bold text-2xl text-white mb-6">Overview</h2>
            <p className="font-outfit text-[#BBBBDD] text-lg leading-relaxed mb-10">{service.description}</p>
            <h3 className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-5">What&apos;s included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 border border-[#1a1a1a] rounded-xl">
                  <span className="mt-0.5 w-4 h-4 rounded-full border border-[#2C6FED]/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C6FED]" />
                  </span>
                  <span className="font-outfit text-sm text-[#BBBBDD]">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 border border-[#1a1a1a] rounded-2xl">
              <h3 className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4">Deliverables</h3>
              <ul className="space-y-2.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 font-outfit text-sm text-[#AAAACC]">
                    <span className="text-[#2C6FED] text-xs">→</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#2C6FED]/20 rounded-2xl bg-[#2C6FED]/5">
              <h3 className="font-syne font-bold text-lg text-white mb-2">Ready to get started?</h3>
              <p className="font-outfit text-sm text-[#9A9ABB] mb-5">Let&apos;s discuss your project and put together a custom plan.</p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-12" />
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link href={`/services/${prev.slug}`} className="group flex items-center gap-3 p-5 border border-[#1a1a1a] rounded-xl hover:border-[#2C6FED]/30 transition-all w-full sm:w-1/2 card-hover">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#8A8AAA] group-hover:text-[#2C6FED] transition-colors">
              <path d="M12 8H4M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <span className="font-mono text-[10px] text-[#7A7A9A] block uppercase tracking-widest">Previous</span>
              <span className="font-syne font-semibold text-sm text-[#BBBBDD] group-hover:text-white transition-colors">{prev.title}</span>
            </div>
          </Link>
          <Link href={`/services/${next.slug}`} className="group flex items-center justify-end gap-3 p-5 border border-[#1a1a1a] rounded-xl hover:border-[#2C6FED]/30 transition-all w-full sm:w-1/2 text-right card-hover">
            <div>
              <span className="font-mono text-[10px] text-[#7A7A9A] block uppercase tracking-widest">Next</span>
              <span className="font-syne font-semibold text-sm text-[#BBBBDD] group-hover:text-white transition-colors">{next.title}</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#8A8AAA] group-hover:text-[#2C6FED] transition-colors">
              <path d="M4 8h8M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
