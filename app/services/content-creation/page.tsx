import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const service = {
  slug: 'content-creation', number: '10', title: 'Content Creation', shortTitle: 'Content',
  tagline: 'Words that rank and resonate',
  description: 'Engaging, SEO-optimised content crafted for your specific audience. Blog posts, website copy, scripts, and multimedia content that builds authority and drives organic growth.',
  features: ['Blog posts & long-form articles', 'Website & landing page copy', 'Social media content', 'Video scripts', 'Email sequences', 'Product descriptions'],
  deliverables: ['Content calendar', 'Written content (all formats)', 'SEO report', 'Publishing guide'],
}

const prev = { slug: 'architectural-design', title: 'Architectural Design' }
const next = { slug: 'cybersecurity', title: 'Cybersecurity' }

export const metadata: Metadata = {
  title: 'Content Creation | Alffy — Kampala, Uganda',
  description: service.description,
}

export default function ServicePage() {
  return (
    <div className="pt-[68px]">
      <section className="relative min-h-[60vh] flex items-end overflow-x-hidden px-6 md:px-16 lg:px-24 pb-16 pt-32">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="service-slug" slug={service.slug} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 80% at 80% 50%, transparent 0%, #04040C 82%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-widest">Services</Link>
            <span className="text-[#6A6A8A]">/</span>
            <span className="font-mono text-[11px] text-[#2C6FED] uppercase tracking-widest">{service.shortTitle}</span>
          </div>
          <span className="font-mono text-[11px] text-[#7A7A9A] block mb-4">{service.number} / 12</span>
          <h1 className="font-syne font-extrabold text-white leading-none mb-4" style={{ fontSize: 'clamp(2rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{service.title}</h1>
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
              <Link href="/contact" className="block w-full text-center px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-12" />
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link href={`/services/${prev.slug}`} className="group flex items-center gap-3 p-5 border border-[#1a1a1a] rounded-xl hover:border-[#2C6FED]/30 transition-all w-full sm:w-1/2 card-hover">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#8A8AAA] group-hover:text-[#2C6FED] transition-colors"><path d="M12 8H4M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#8A8AAA] group-hover:text-[#2C6FED] transition-colors"><path d="M4 8h8M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
