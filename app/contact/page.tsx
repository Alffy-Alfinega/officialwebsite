import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

export const metadata: Metadata = {
  title: 'Contact Alffy — Start a Project | Kampala, Uganda',
  description: 'Get in touch with Alffy (Alfinega). Start a project, request a quote, or ask a question. Based in Kampala, Uganda — we respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="pt-[68px]">
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="contact" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Contact</span>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-16">
          <h1
            className="font-syne font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            {"Let's build"}<br />
            <span style={{ color: '#2C6FED' }}>something.</span>
          </h1>
          <div className="max-w-sm space-y-6 lg:pt-4">
            <div>
              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-1">Email</span>
              <a href="mailto:hello@alfinega.com" className="font-outfit hover:text-white transition-colors" style={{ color: '#2C6FED' }}>
                hello@alfinega.com
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-1">Phone / WhatsApp</span>
              <a href="tel:+256747113059" className="font-outfit text-white hover:text-[#2C6FED] transition-colors">
                +256 747 113 059
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-1">Location</span>
              <p className="font-outfit text-[#9A9ABB]">Makindye, Kampala, Uganda</p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-2">Response Time</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#2C6FED' }} />
                <span className="font-outfit text-sm text-[#AAAACC]">Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#1C1C34] mb-16" />

        {/* Contact form */}
        <ContactForm />

        {/* FAQ */}
        <div className="mt-24">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-6 block">Common Questions</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'How quickly can you start?', a: 'Most projects kick off within 3–5 business days of signing. For urgent work, contact us and we\'ll do our best to accommodate.' },
              { q: 'Do you work with clients outside Uganda?', a: 'Yes. We work with clients across East Africa and internationally. All communication and delivery is remote-friendly.' },
              { q: 'What does a typical website project cost?', a: 'Our website packages start at UGX 850,000 for a 5-page site and scale based on scope. We provide a fixed-price quote after a brief discovery call.' },
              { q: 'Do you offer payment plans?', a: 'Yes. We typically work on a 50% upfront, 50% on delivery basis for new clients, with milestone-based plans available for larger projects.' },
            ].map((item) => (
              <div key={item.q} className="p-6 border border-[#1C1C34] rounded-2xl" style={{ background: '#0A0A16' }}>
                <h3 className="font-syne font-semibold text-white text-base mb-2">{item.q}</h3>
                <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
