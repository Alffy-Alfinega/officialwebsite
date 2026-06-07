import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

export const metadata: Metadata = {
  title: 'Why Alffy — What Makes Us Different | Kampala Digital Agency',
  description: 'Why businesses in Uganda and East Africa choose Alffy for web design, SEO, and branding. Full-service, honest, results-focused.',
}

const reasons = [
  {
    number: '01',
    title: 'Africa-Rooted, Globally Competitive',
    body: 'Based in Kampala, Uganda — we understand the local market, local internet behaviour, and local business context. We deliver work that holds up against any international standard.',
    detail: 'Understanding where your customer is searching from, what device they\'re using, and what price sensitivity they have is something you can\'t outsource. We live and work in this market.',
  },
  {
    number: '02',
    title: 'Full-Service Under One Roof',
    body: 'Web design, SEO, branding, video, animation, content — all handled in-house. No freelance handoffs, no outsourced components, no broken-telephone briefing chains.',
    detail: 'When everything is in one place, your brand stays consistent. The person who designed your logo knows your website. The person who built your site writes your SEO content. It makes a visible difference.',
  },
  {
    number: '03',
    title: 'Results Over Deliverables',
    body: 'We don\'t celebrate deliverables. We celebrate outcomes — more organic traffic, more enquiries, stronger brand recognition. Every decision we make is tied to a measurable goal.',
    detail: 'Before any project begins, we agree on what success looks like. Not "a nice-looking website" but "20% more contact form submissions within 90 days." That clarity changes how we work.',
  },
  {
    number: '04',
    title: 'Transparent, Always',
    body: 'Clear timelines, fixed pricing, honest communication. We tell you what\'s realistic. We don\'t oversell. And we never disappear mid-project.',
    detail: 'You\'ll receive regular progress updates, clear documentation, and access to your project team via WhatsApp. If something is taking longer than expected, you\'ll hear from us before you have to ask.',
  },
  {
    number: '05',
    title: 'Modern Technology Stack',
    body: 'We build on Next.js, design in Figma, animate in Blender and After Effects, and track performance with data-driven SEO tools. Your project won\'t be built on a page builder.',
    detail: 'The tools matter. A Next.js site loads faster than a WordPress template, ranks better on Core Web Vitals, and can scale without hitting a wall. We make choices that serve your long-term interests.',
  },
  {
    number: '06',
    title: 'Post-Launch Partnership',
    body: 'We don\'t disappear after delivery. Ongoing support, updates, and optimisation are available for every client — whether that\'s a quick content change or a full SEO growth campaign.',
    detail: 'Launching a website is day one, not the finish line. We offer monthly retainer options for clients who want continuous improvement — SEO reporting, content publishing, design updates, and more.',
  },
]

export default function WhyAlffyPage() {
  return (
    <div className="pt-[68px]">
      {/* Breadcrumb */}
      <div className="px-6 md:px-16 lg:px-24 pt-8 max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-2 font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest" aria-label="Breadcrumb">
          <Link href="/about" className="hover:text-[#2C6FED] transition-colors">About</Link>
          <span>/</span>
          <span className="text-[#2C6FED]">Why Alffy</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="why" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10 max-w-3xl">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Why Choose Us</span>
          <h1
            className="font-syne font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Built different.<br />
            <span style={{ color: '#2C6FED' }}>Delivered better.</span>
          </h1>
          <p className="font-outfit text-lg text-[#AAAACC] leading-relaxed max-w-xl">
            There are a lot of agencies. Here is a straight answer to why clients in Uganda and East Africa choose Alffy — and keep coming back.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="space-y-0">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className="py-12 border-b border-[#1C1C34] grid grid-cols-1 lg:grid-cols-3 gap-6 group"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-[11px] text-[#7A7A9A] block mb-3">{r.number}</span>
                <h2 className="font-syne font-bold text-2xl text-white group-hover:text-[#2C6FED] transition-colors duration-300">
                  {r.title}
                </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="font-outfit text-base text-[#BBBBDD] leading-relaxed mb-4">{r.body}</p>
                <p className="font-outfit text-sm text-[#8A8AAA] leading-relaxed border-l-2 border-[#1C1C34] pl-4 group-hover:border-[#2C6FED]/40 transition-colors duration-300">
                  {r.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-16" />
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-6 block">Honest Comparison</span>
        <h2
          className="font-syne font-extrabold text-white mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          Alffy vs. the alternatives.
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 pr-6 font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest border-b border-[#1C1C34]">Feature</th>
                <th className="text-center py-3 px-6 font-mono text-[10px] text-[#2C6FED] uppercase tracking-widest border-b border-[#1C1C34]">Alffy</th>
                <th className="text-center py-3 px-6 font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest border-b border-[#1C1C34]">Freelancer</th>
                <th className="text-center py-3 px-6 font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest border-b border-[#1C1C34]">Int&apos;l Agency</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Local market knowledge',   '✓', 'Varies', '✗'],
                ['Full-service in-house',    '✓', '✗',      '✓'],
                ['Fixed project pricing',    '✓', 'Varies', '✗'],
                ['24/7 WhatsApp support',    '✓', 'Varies', '✗'],
                ['Post-launch support',      '✓', '✗',      '✓'],
                ['East Africa SEO focus',    '✓', 'Varies', '✗'],
                ['Affordable for SMEs',      '✓', '✓',      '✗'],
              ].map(([feat, alffy, free, intl]) => (
                <tr key={feat} className="border-b border-[#1C1C34]/50 hover:bg-[#0A0A16]/50 transition-colors">
                  <td className="py-3 pr-6 font-outfit text-[#BBBBDD]">{feat}</td>
                  <td className="py-3 px-6 text-center font-syne font-semibold" style={{ color: alffy === '✓' ? '#2C6FED' : '#555' }}>{alffy}</td>
                  <td className="py-3 px-6 text-center font-outfit text-[#8A8AAA]">{free}</td>
                  <td className="py-3 px-6 text-center font-outfit text-[#8A8AAA]">{intl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-28">
        <div className="h-px bg-[#1C1C34] mb-12" />
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-syne font-semibold text-white text-xl mb-1">Convinced? Let&apos;s talk.</p>
            <p className="font-outfit text-sm text-[#9A9ABB]">Free discovery call. No commitment. Just an honest conversation about your project.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about/team" className="px-6 py-3 border border-[#1C1C34] text-[#AAAACC] font-syne font-semibold text-sm rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors">
              Meet the Team →
            </Link>
            <Link href="/contact" className="px-6 py-3 font-syne font-semibold text-sm text-white rounded-full" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
