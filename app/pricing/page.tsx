import type { Metadata } from 'next'
import Link from 'next/link'
import PricingFAQ from '@/components/ui/PricingFAQ'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

export const metadata: Metadata = {
  title: 'Pricing — Web Design, SEO & Branding Packages | Alffy Kampala',
  description: 'Transparent, fixed pricing for web design, SEO, branding, and digital services from Alffy (Alfinega), Kampala Uganda. Starter websites from UGX 850,000.',
}

const webPackages = [
  {
    name: 'Starter',
    price: '850,000',
    currency: 'UGX',
    period: 'one-time',
    tagline: 'For small businesses launching online.',
    features: [
      'Up to 5 pages',
      'Responsive mobile-first design',
      'Contact form',
      'Basic SEO setup',
      'CMS integration',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '2,200,000',
    currency: 'UGX',
    period: 'one-time',
    tagline: 'For growing businesses serious about converting.',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'E-commerce ready',
      'Advanced SEO setup',
      'Analytics + conversion tracking',
      'Speed optimisation',
      '90-day post-launch support',
    ],
    cta: 'Most Popular — Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: 'quote',
    tagline: 'For large organisations with complex needs.',
    features: [
      'Unlimited pages & sections',
      'Fully custom architecture',
      'API & third-party integrations',
      'Ongoing SEO retainer included',
      'Priority support SLA',
      'Dedicated account manager',
    ],
    cta: 'Request a Quote',
    highlight: false,
  },
]

const seoPackages = [
  {
    name: 'Local SEO',
    price: '450,000',
    description: 'Dominate Kampala and Uganda search results.',
    features: ['Google Business Profile optimisation', 'Local citation building', 'On-page optimisation', 'Monthly ranking report'],
  },
  {
    name: 'Growth SEO',
    price: '900,000',
    description: 'Comprehensive SEO for competitive markets.',
    features: ['Technical SEO audit', 'Keyword strategy', 'Content optimisation', 'Link building', 'Bi-weekly reports'],
  },
  {
    name: 'Authority SEO',
    price: '1,800,000',
    description: 'Full-scale SEO for national and global brands.',
    features: ['All Growth features', 'Advanced link acquisition', '4 content pieces per month', 'Competitor tracking', 'Weekly strategy calls'],
  },
]

const designPackages = [
  {
    name: 'Brand Starter',
    price: '600,000',
    period: 'one-time',
    description: 'Logo + essential brand identity.',
    features: ['3 logo concepts', 'Brand colour palette', 'Typography selection', 'All logo file formats'],
  },
  {
    name: 'Full Brand',
    price: '1,400,000',
    period: 'one-time',
    description: 'Complete brand identity system.',
    features: ['All Starter features', 'Brand guidelines document', 'Stationery design', 'Social media kit', 'Icon set'],
  },
  {
    name: 'Brand + Web',
    price: '3,200,000',
    period: 'one-time',
    description: 'Unified brand identity and website.',
    features: ['Full Brand package', 'Growth website package', 'Matching visual system', 'Launch campaign assets'],
  },
]

function WebCard({ pkg }: { pkg: typeof webPackages[0] }) {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all ${pkg.highlight ? 'border-[#2C6FED] bg-[#2C6FED]/5' : 'border-[#1C1C34] bg-[#0A0A16]'}`}>
      {pkg.highlight && (
        <span className="absolute -top-px left-6 font-mono text-[10px] uppercase tracking-widest bg-[#2C6FED] text-white px-3 py-1 rounded-b-lg">
          Recommended
        </span>
      )}
      <div className="mb-6">
        <h3 className={`font-syne font-bold text-xl mb-1 ${pkg.highlight ? 'text-[#2C6FED]' : 'text-white'}`}>{pkg.name}</h3>
        <p className="font-outfit text-xs text-[#8A8AAA] mb-4">{pkg.tagline}</p>
        <div className="flex items-end gap-1.5">
          {pkg.currency && <span className="font-mono text-xs text-[#8A8AAA] mb-1.5">{pkg.currency}</span>}
          <span className="font-syne font-extrabold text-3xl text-white">{pkg.price}</span>
          {pkg.period !== 'quote' && <span className="font-mono text-[11px] text-[#8A8AAA] mb-1">/ {pkg.period}</span>}
        </div>
      </div>
      <ul className="space-y-2.5 flex-1 mb-8">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-3 font-outfit text-sm text-[#BBBBDD]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={pkg.highlight ? 'text-[#2C6FED]' : 'text-[#7A7A9A]'}>
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`block text-center px-6 py-3.5 font-syne font-semibold text-sm rounded-full transition-all ${pkg.highlight ? 'bg-[#2C6FED] text-white hover:opacity-90' : 'border border-[#333] text-[#ccc] hover:border-[#2C6FED] hover:text-[#2C6FED]'}`}>
        {pkg.cta}
      </Link>
    </div>
  )
}

function SmallCard({ pkg }: { pkg: typeof seoPackages[0] & { period?: string } }) {
  const periodLabel = pkg.period === 'one-time' ? 'one-time' : '/ mo'
  return (
    <div className="p-6 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/25 transition-all card-hover group flex flex-col">
      <h3 className="font-syne font-bold text-lg text-white mb-0.5 group-hover:text-[#2C6FED] transition-colors">{pkg.name}</h3>
      <div className="flex items-end gap-1 mb-3">
        <span className="font-mono text-[10px] text-[#8A8AAA] mb-1">UGX</span>
        <span className="font-syne font-extrabold text-2xl text-[#2C6FED]">{pkg.price}</span>
        <span className="font-mono text-[10px] text-[#8A8AAA] mb-0.5">{periodLabel}</span>
      </div>
      <p className="font-outfit text-xs text-[#9A9ABB] mb-4 leading-relaxed">{pkg.description}</p>
      <ul className="space-y-1.5 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-outfit text-xs text-[#AAAACC]">
            <span className="text-[#2C6FED] mt-0.5 shrink-0">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="mt-5 block text-center px-4 py-2.5 font-syne font-semibold text-xs border border-[#222] text-[#9A9ABB] rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors">
        Get Started
      </Link>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="pt-[68px]">
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-64 opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="pricing" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 80% at 90% 20%, transparent 0%, var(--bg) 70%)' }} />
        <div className="relative z-10">
        {/* Header */}
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Pricing</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <h1 className="font-syne font-extrabold text-white leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}>
            Transparent.<br /><span style={{ color: '#2C6FED' }}>Fair. Clear.</span>
          </h1>
          <div className="max-w-xs">
            <p className="font-outfit text-[#9A9ABB] text-sm leading-relaxed mb-3">
              All prices shown in Ugandan Shillings. Fixed-price projects — no hourly billing, no surprises.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2C6FED] animate-pulse" />
              <span className="font-outfit text-xs text-[#8A8AAA]">Currently accepting new clients</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#1C1C34] mb-20" />

        {/* Website Packages */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-syne font-bold text-2xl text-white mb-1">Website Packages</h2>
              <p className="font-outfit text-sm text-[#9A9ABB]">One-time investment — you own everything at delivery.</p>
            </div>
            <Link href="/services/website-design" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] uppercase tracking-widest transition-colors">
              Website Design service →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {webPackages.map((pkg) => <WebCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>

        {/* SEO Packages */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-syne font-bold text-2xl text-white mb-1">SEO Packages</h2>
              <p className="font-outfit text-sm text-[#9A9ABB]">Monthly retainers — minimum 3 months, cancel anytime after.</p>
            </div>
            <Link href="/services/seo-services" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] uppercase tracking-widest transition-colors">
              SEO service →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {seoPackages.map((pkg) => <SmallCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>

        {/* Design Packages */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-syne font-bold text-2xl text-white mb-1">Design & Branding Packages</h2>
              <p className="font-outfit text-sm text-[#9A9ABB]">One-time project fees. Revisions included.</p>
            </div>
            <Link href="/services/branding" className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] uppercase tracking-widest transition-colors">
              Branding service →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {designPackages.map((pkg) => <SmallCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>

        {/* Custom Quote Banner */}
        <div className="mb-20 relative rounded-3xl border border-[#2C6FED]/20 bg-[#2C6FED]/5 p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(44,111,237,0.08) 0%, transparent 70%)' }} />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="font-mono text-[11px] text-[#2C6FED]/60 uppercase tracking-widest block mb-2">Other Services</span>
              <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-2">Video, Animation & More</h3>
              <p className="font-outfit text-sm text-[#AAAACC] max-w-md">
                Video editing, 2D/3D animation, architectural visualisation, image editing, content creation, and digital marketing campaigns are all priced per project. Get in touch to discuss scope and receive a tailored quote.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 px-8 py-4 font-syne font-semibold text-sm text-white rounded-full hover:opacity-90 transition-all text-center" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>
              Request a Custom Quote
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Have questions?</span>
            <h2 className="font-syne font-extrabold text-white leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.025em' }}>
              Everything you<br />need to know.
            </h2>
            <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed mb-6">
              Can&apos;t find your answer here? Email us at{' '}
              <a href="mailto:hello@alfinega.com" className="text-[#2C6FED] hover:underline">
                hello@alfinega.com
              </a>{' '}
              — we reply within 24 hours.
            </p>
          </div>
          <PricingFAQ />
        </div>
        </div>
      </section>
    </div>
  )
}
