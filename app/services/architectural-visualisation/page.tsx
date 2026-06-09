import type { Metadata } from 'next'
import Link from 'next/link'
import { BabylonScene } from '@/components/3d/BabylonScene'

const allServices = [
  { slug: 'web-design', number: '01', title: 'Web Design & Development', shortTitle: 'Web Design', tagline: 'Websites that convert visitors into customers', description: 'Modern, responsive websites built to convert visitors into loyal customers. We craft digital experiences that balance stunning visuals with intuitive UX — your brand, expressed at its absolute best. Every site is built mobile-first because over 85% of Ugandan users browse on phone. From custom UI/UX design to CMS integration and performance optimisation, we deliver websites that load fast on 4G, rank well on Google, and convert traffic into real business results.', features: ['Custom UI/UX design', 'Mobile-first responsive development', 'Next.js & React development', 'CMS integration (WordPress, Sanity)', 'Performance optimisation for 4G speeds', 'Accessibility compliance (WCAG)', 'E-commerce integration', 'SEO-ready structure & metadata', 'WhatsApp & contact form integration', 'Ongoing maintenance & support'], deliverables: ['Design mockups & wireframes', 'Fully responsive website', 'CMS training session', 'Performance & PageSpeed report', 'SEO metadata setup', 'Post-launch support (30 days)', 'Style guide documentation'], process: [{ step: '01', title: 'Discovery & Planning', desc: 'We learn your business, audience, and goals. Sitemap, competitive research, technical requirements — everything mapped before a single pixel is designed.' }, { step: '02', title: 'Design & Prototyping', desc: 'Full mockups and interactive prototypes in Figma. You review, give feedback, and approve the look and feel before development begins.' }, { step: '03', title: 'Development & Testing', desc: 'We build your site on Next.js with mobile-first responsive design, performance optimisation, and thorough cross-browser testing.' }, { step: '04', title: 'Launch & Handover', desc: 'Deploy to production, configure domain and email, train your team on the CMS, and provide a clear maintenance plan.' }] },
  { slug: 'seo-marketing', number: '02', title: 'SEO & Digital Marketing', shortTitle: 'SEO & Marketing', tagline: 'Rank higher. Reach further. Grow faster.', description: 'Comprehensive SEO and digital marketing strategies that boost your organic visibility and drive qualified traffic. From technical audits and on-page optimisation to social media management, paid ad campaigns, and content creation — we make sure your audience finds you, not your competitors. Every campaign is backed by data, optimised for ROI, and tailored to East African markets. We understand Ugandan consumer behaviour, local search patterns, and the platforms that actually move the needle here.', features: ['Technical SEO audits & on-page optimisation', 'Local SEO (Uganda & East Africa)', 'Keyword research & content strategy', 'Social media strategy & management', 'Paid advertising (Meta, Google)', 'Email marketing campaigns', 'Google Analytics 4 & conversion tracking', 'Competitor analysis & gap assessment', 'Local citation building (Yellow Pages, Google Maps)', 'Monthly performance reports & reviews'], deliverables: ['SEO audit report with fixes', 'Keyword strategy document', 'Content calendar (monthly)', 'Ad creatives & campaign setup', 'Competitor analysis report', 'Conversion tracking setup', 'Monthly analytics report', 'Quarterly optimisation roadmap'], process: [{ step: '01', title: 'Audit & Research', desc: 'Deep analysis of your current online presence — technical issues, keyword gaps, competitor activity, and audience insights.' }, { step: '02', title: 'Strategy & Planning', desc: 'A documented roadmap covering on-page optimisation, content creation, ad campaigns, and social media — aligned with your business goals.' }, { step: '03', title: 'Execution & Optimisation', desc: 'We implement the strategy: site fixes, content publishing, ad launches, social posting — continuously testing and refining what works.' }, { step: '04', title: 'Reporting & Iteration', desc: 'Monthly performance reports with clear metrics. We review, adjust, and scale the channels delivering the best ROI.' }] },
  { slug: 'branding-design', number: '03', title: 'Branding & Graphic Design', shortTitle: 'Branding & Design', tagline: 'Visual identity that sticks', description: 'Complete branding and graphic design solutions that define who you are before you say a word. We build cohesive brand identities — logo, colour, voice, and everything in between — that your audience remembers and trusts. From social media graphics to print collateral, packaging to presentations, every pixel is intentional and purpose-driven. In a crowded Ugandan market, a consistent brand identity is often the fastest way to stand out and build customer confidence.', features: ['Logo design & brand identity systems', 'Brand colour palette & typography', 'Brand voice & messaging guidelines', 'Social media graphics & templates', 'Print materials (flyers, brochures, business cards)', 'Presentations & pitch decks', 'Infographics & data visualisation', 'Stationery & collateral design', 'Rebrand strategy & migration', 'Packaging design'], deliverables: ['Logo files (all formats — PNG, SVG, EPS)', 'Brand guidelines PDF', 'Social media kit (templates)', 'Print-ready files', 'Source files (Illustrator, Figma)', 'Digital brand asset library', 'Style guide one-pager'], process: [{ step: '01', title: 'Discovery', desc: 'We dive into your business, industry, audience, and competitors. Understanding what makes you different is where great branding starts.' }, { step: '02', title: 'Concept Exploration', desc: 'Multiple design directions presented with mood boards, colour studies, and typography options. You choose the path that resonates.' }, { step: '03', title: 'Refinement & Execution', desc: 'The chosen direction is refined into a complete system — logos, colour palette, typography, patterns, and application examples.' }, { step: '04', title: 'Delivery & Guidelines', desc: 'All final files delivered in every format you need, plus a brand guidelines document so your identity stays consistent across every touchpoint.' }] },
  { slug: 'media-production', number: '04', title: 'Video, Animation & Image Editing', shortTitle: 'Media Production', tagline: 'Moving stories. Static perfection.', description: 'Professional media production services that transform your raw footage, ideas, and images into polished, narrative-driven content. We handle video editing, colour grading, motion graphics, 2D and 3D animation, and image editing — everything you need for compelling visual content across web, social, and broadcast. Whether it is a 30-second social cut or a full brand film, we deliver work that captures attention and communicates your message with clarity and impact.', features: ['Commercial & promo video editing', 'Social media video cuts & shorts', 'Colour grading & sound design', '2D motion graphics & explainer videos', '3D product animations & visual effects', 'Photo retouching & background removal', 'Product photo editing & colour correction', 'Audio mixing & voiceover integration', 'Subtitle & caption generation', 'Batch editing & format conversion'], deliverables: ['Master video file (4K)', 'Platform-optimised cuts (Instagram, TikTok, YouTube)', 'Animation files (MP4, Lottie)', 'Edited & retouched images', 'Source project files (Premiere, After Effects)', 'Thumbnail designs', 'Caption & subtitle files'], process: [{ step: '01', title: 'Brief & Concept', desc: 'We clarify your goals, audience, and message. A creative brief is developed — covering style references, script direction, and technical requirements.' }, { step: '02', title: 'Pre-Production', desc: 'Scriptwriting, storyboarding, asset gathering, and scheduling. Everything planned before production begins.' }, { step: '03', title: 'Production & Editing', desc: 'Video editing, motion graphics, sound design, colour grading — or image retouching and manipulation — executed to the agreed brief.' }, { step: '04', title: 'Review & Delivery', desc: 'You review, request revisions, and approve. Final files delivered in all required formats and resolutions.' }] },
  { slug: 'architectural-visualisation', number: '05', title: 'Architectural Visualisation', shortTitle: 'Architecture', tagline: "See it before it's built", description: 'Professional architectural visualisation that lets clients see their project before the first brick is laid. Photorealistic renders, walkthroughs, and floor plans that sell the dream and align stakeholders before construction begins. From exterior visualisation and interior renders to 3D walkthroughs and virtual staging, we bring architectural concepts to life with stunning realism that helps you win pitches, secure approvals, and reduce costly revisions during construction.', features: ['Exterior & architectural visualisation', 'Interior renders & staging', '3D walkthroughs & flythroughs', 'Floor plan design & layout', 'Landscape visualisation', 'VR-ready scene preparation', 'Material & texture library access', 'Real-time client review rounds'], deliverables: ['High-res photorealistic renders (print-ready)', 'Walkthrough animation video', 'Floor plan files (PDF & DWG)', 'VR-ready interactive scenes', 'Material & finish specification sheets', 'Lighting studies (day/night)', 'Revision set (2 rounds)'], process: [{ step: '01', title: 'Brief & Reference', desc: 'We gather architectural plans, reference images, material preferences, and project goals to understand exactly what needs to be visualised.' }, { step: '02', title: '3D Modelling', desc: 'Accurate 3D models built from your plans — every dimension, proportion, and detail matched to the architectural drawings.' }, { step: '03', title: 'Texturing & Lighting', desc: 'Realistic materials, lighting, and environment settings applied to create photorealistic scenes that feel like photographs.' }, { step: '04', title: 'Rendering & Delivery', desc: 'Final high-resolution renders produced, walkthrough animations rendered, and all files delivered in your required formats.' }] },
  { slug: 'cybersecurity-data', number: '06', title: 'Cybersecurity & Data Services', shortTitle: 'Security & Data', tagline: 'Protect your data. Manage your scale.', description: 'Comprehensive digital security and data management services that protect your business and keep your operations running smoothly. From vulnerability audits and malware protection to mass data entry and database migration, we handle the technical heavy lifting so you can focus on growing your business. Our approach is practical and risk-based — we prioritise the threats that actually affect Ugandan SMEs and implement solutions that work within your budget and technical environment.', features: ['Website security audits & hardening', 'SSL/HTTPS configuration & firewall setup', 'Malware scanning, removal & monitoring', 'Data breach risk assessment', 'Product catalogue data entry', 'Database population & migration', 'Spreadsheet & CRM data entry', 'Document digitisation & data extraction', 'Automated backup solutions', 'Employee security awareness training'], deliverables: ['Security audit report with findings', 'Vulnerability fix log & remediation plan', 'Monitoring dashboard access', 'Incident response plan document', 'Completed & validated dataset', 'QA validation report', 'Backup verification report', 'Security policy document'], process: [{ step: '01', title: 'Assessment', desc: 'We evaluate your current security posture or data situation — identifying vulnerabilities, risks, and gaps in your existing setup.' }, { step: '02', title: 'Planning & Strategy', desc: 'A clear remediation or data management plan with prioritised actions, timelines, and budget estimates.' }, { step: '03', title: 'Implementation', desc: 'Security hardening, malware cleanup, firewall configuration — or data entry, migration, and digitisation — executed methodically.' }, { step: '04', title: 'Verification & Handover', desc: 'Everything tested and verified. Detailed reports delivered along with ongoing monitoring setup or completed datasets.' }] },
]

const service = allServices.find((s) => s.slug === 'architectural-visualisation')!
const currentIndex = allServices.findIndex((s) => s.slug === 'architectural-visualisation')
const next = allServices[(currentIndex + 1) % allServices.length]
const prev = allServices[(currentIndex - 1 + allServices.length) % allServices.length]

export const metadata: Metadata = {
  title: 'Architectural Visualisation — 3D Renders | Alffy Kampala',
  description: 'Architectural visualisation and 3D rendering services in Kampala, Uganda. Photorealistic renders, walkthroughs, floor plans.',
}

export default function ArchitecturalVizPage() {
  return (
    <div className="pt-[68px]">
      <section className="relative min-h-[60vh] flex items-end overflow-x-hidden px-6 md:px-16 lg:px-24 pb-16 pt-32">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 80% at 80% 50%, transparent 0%, #04040C 82%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-widest">Services</Link>
            <span className="text-[#6A6A8A]">/</span>
            <span className="font-mono text-[11px] text-[#2C6FED] uppercase tracking-widest">{service.shortTitle}</span>
          </div>
          <span className="font-mono text-[11px] text-[#7A7A9A] block mb-4">{service.number} / {String(allServices.length).padStart(2, '0')}</span>
          <h1 className="font-syne font-extrabold text-white leading-none mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{service.title}</h1>
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
              {service.features.map((f: string) => (
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
                {service.deliverables.map((d: string) => (
                  <li key={d} className="flex items-center gap-3 font-outfit text-sm text-[#AAAACC]">
                    <span className="text-[#2C6FED] text-xs">→</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#2C6FED]/20 rounded-2xl bg-[#2C6FED]/5">
              <h3 className="font-syne font-bold text-lg text-white mb-2">Ready to get started?</h3>
              <p className="font-outfit text-sm text-[#9A9ABB] mb-5">Let&apos;s discuss your project and put together a custom plan.</p>
              <Link href="/contact" className="block w-full text-center px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <h2 className="font-syne font-bold text-2xl text-white mb-8">How we work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((p) => (
            <div key={p.step} className="p-6 border border-[#1a1a1a] rounded-2xl">
              <span className="font-mono text-[10px] text-[#2C6FED] block mb-2">{p.step}</span>
              <h3 className="font-syne font-semibold text-white text-sm mb-2">{p.title}</h3>
              <p className="font-outfit text-xs text-[#9A9ABB] leading-relaxed">{p.desc}</p>
            </div>
          ))}
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
