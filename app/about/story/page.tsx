import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

export const metadata: Metadata = {
  title: 'Our Story — How Alffy Started | Kampala, Uganda',
  description: 'The story behind Alffy (Alfinega) — a digital agency born in Kampala, Uganda in 2025 to give East African businesses access to quality digital services.',
}

const milestones = [
  { year: 'Jan 2025', event: 'Alffy (Alfinega) incorporated in Makindye, Kampala. Core team assembled; service blueprints for web design, branding, and graphic design developed.' },
  { year: 'Mid 2025', event: 'Internal build phase. Service processes established, technology stack finalised, and initial client discovery work completed.' },
  { year: 'Late 2025', event: 'Portfolio expanded: 2D & 3D animation, architectural visualisation, video editing, SEO, digital marketing, and content creation added to capabilities.' },
  { year: 'Jan 2026', event: 'Official public launch. Alffy opens for business across Uganda and East Africa — all 12 services live and accepting new clients.' },
  { year: 'Early 2026', event: 'Launched Alffy v2 — full digital rebrand, new website, and expanded team to match growing client demand.' },
]

export default function OurStoryPage() {
  return (
    <div className="pt-[68px]">
      {/* Breadcrumb */}
      <div className="px-6 md:px-16 lg:px-24 pt-8 max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-2 font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest" aria-label="Breadcrumb">
          <Link href="/about" className="hover:text-[#2C6FED] transition-colors">About</Link>
          <span>/</span>
          <span className="text-[#2C6FED]">Our Story</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="story" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Est. 2025</span>
          <h1
            className="font-syne font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Built for Africa.<br />
            <span style={{ color: '#2C6FED' }}>Open to the world.</span>
          </h1>
          <p className="font-outfit text-lg text-[#AAAACC] leading-relaxed max-w-xl">
            Alffy was founded in 2025 with a clear mission: give every Ugandan business access to the kind of digital expertise that was previously only available to large corporations with big budgets.
          </p>
        </div>
        </div>
      </section>

      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      {/* Full story */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 font-outfit text-base text-[#BBBBDD] leading-[1.85]">
            <p>
              When we founded Alffy in Makindye, Kampala in January 2025, we noticed a gap in the market that was hard to ignore. Businesses across Uganda — from small family shops to growing startups — were being underserved. Too many agencies were selling overpriced, template-driven websites that looked nothing like the brand and performed even worse on search.
            </p>
            <p>
              We believed there was a better way. Great digital work doesn&rsquo;t have to come from abroad. It doesn&rsquo;t have to cost a small fortune. It just has to be done with care, craft, and a genuine understanding of the client&rsquo;s goals.
            </p>
            <p>
              Rather than rush to market, we spent all of 2025 preparing. We built our service frameworks, assembled an in-house team, refined our processes, and quietly tested our approach with a handful of discovery clients. We started with web design, branding, and graphic design, then expanded to cover SEO, digital marketing, video production, and animation — so the full stack was ready on launch day.
            </p>
            <p>
              In January 2026 we opened publicly. Our goal for this first year is ambitious but honest: 50+ projects delivered with 95% client satisfaction, across Uganda and East Africa. Every project we take on is an opportunity to show what&rsquo;s possible when digital craft meets local knowledge.
            </p>
            <p>
              We&rsquo;re not the biggest agency in Kampala — we&rsquo;re one of the newest. But we&rsquo;re among the most committed to doing the work properly: on time, on budget, and to a standard that holds up anywhere in the world.
            </p>
          </div>

          {/* Timeline */}
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-8 block">Our Timeline</span>
            <div className="relative pl-6 border-l border-[#1C1C34]">
              {milestones.map((m, i) => (
                <div key={i} className="mb-10 relative">
                  <span
                    className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-[#2C6FED]"
                    style={{ background: '#04040C' }}
                  />
                  <span className="font-mono text-[11px] text-[#2C6FED] uppercase tracking-widest block mb-1">{m.year}</span>
                  <p className="font-outfit text-sm text-[#AAAACC] leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-16" />
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#2C6FED' }} />
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest">2026 Year 1 Targets</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+',  label: 'Projects Goal' },
            { value: '95%',  label: 'Satisfaction Target' },
            { value: '12',   label: 'Services Offered' },
            { value: '24/7', label: 'Support Available' },
          ].map((s) => (
            <div key={s.label} className="p-6 border border-[#1C1C34] rounded-2xl text-center" style={{ background: '#0A0A16' }}>
              <p className="font-syne font-extrabold text-3xl md:text-4xl" style={{ color: '#2C6FED' }}>{s.value}</p>
              <p className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-wider mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-page nav */}
      <section className="py-12 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-24">
        <div className="h-px bg-[#1C1C34] mb-12" />
        <div className="flex flex-wrap gap-4">
          <Link href="/about/team" className="px-6 py-3 border border-[#1C1C34] text-[#AAAACC] font-syne font-semibold text-sm rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors">
            Meet the Team →
          </Link>
          <Link href="/about/why" className="px-6 py-3 border border-[#1C1C34] text-[#AAAACC] font-syne font-semibold text-sm rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors">
            Why Alffy →
          </Link>
          <Link href="/contact" className="px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  )
}
