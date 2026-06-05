// ============================================================
// Blog Post: "Running Meta Ads in East Africa: What Works in 2026"
// A guide to Facebook/Instagram advertising for East African
// businesses — covering audience behaviour, CPC benchmarks, and
// creative strategy. Content is hardcoded in this file.
// ============================================================

// Metadata type — TypeScript type from Next.js for the SEO metadata
// object that populates the page's <head> section.
import type { Metadata } from 'next'

// Link — Next.js component for client-side navigation between pages
// (replaces <a> tags for internal links, avoiding full page reloads).
import Link from 'next/link'

// BabylonScene — a custom 3D WebGL animation rendered in the page
// header as a decorative background element.
import { BabylonScene } from '@/components/3d/BabylonScene'

// Next.js metadata export — defines <title>, <meta name="description">,
// and Open Graph tags for social sharing (Facebook, Twitter, WhatsApp).
export const metadata: Metadata = {
  title: 'Running Meta Ads in East Africa: What Works in 2026 | Alffy Blog',
  description: 'Audience behaviours, cost-per-click benchmarks, and creative strategies that are delivering results for East African businesses on Meta right now.',
  openGraph: {
    title: 'Running Meta Ads in East Africa: What Works in 2026',
    description: 'Audience behaviours, cost-per-click benchmarks, and creative strategies that are delivering results for East African businesses on Meta right now.',
    type: 'article',
    publishedTime: 'Jan 5, 2026',
  },
}

// Block — renders a single piece of content (heading, paragraph, list)
// into the matching JSX element. Keeps the article content data-driven.
function Block({ b, i }: { b: { type: string; text?: string; items?: string[] }; i: number }) {
  if (b.type === 'h2') return <h2 key={i} id={b.text?.toLowerCase().replace(/\s+/g, '-')} className="font-syne font-bold text-2xl text-white mt-12 mb-4 scroll-mt-24" style={{ color: 'var(--text)' }}>{b.text}</h2>
  if (b.type === 'h3') return <h3 key={i} className="font-syne font-bold text-xl mt-8 mb-3" style={{ color: 'var(--text)' }}>{b.text}</h3>
  if (b.type === 'p') return <p key={i} className="font-outfit leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.text}</p>
  if (b.type === 'ul') return (
    <ul key={i} className="space-y-2 my-2">
      {b.items?.map((item, j) => (
        <li key={j} className="flex items-start gap-3 font-outfit text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2C6FED] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
  return null
}

// Display metadata (visible in the page hero, separate from SEO tags).
const post = {
  title: 'Running Meta Ads in East Africa: What Works in 2026',
  category: 'Digital Marketing',
  date: 'Jan 5, 2026',
  readTime: '8 min read',
  excerpt: 'Audience behaviours, cost-per-click benchmarks, and creative strategies that are delivering results for East African businesses on Meta right now.',
}

// The article body as an array of content blocks (type, text, items).
// The `Block` component above maps each entry to the correct HTML.
const content: { type: string; text?: string; items?: string[] }[] = [
  { type: 'p', text: "Meta advertising — Facebook and Instagram — remains the most cost-effective paid channel for reaching consumers in Uganda and East Africa. With CPCs significantly lower than Western markets and mobile penetration growing fast, businesses that know how to run Meta ads well have a significant advantage. Here is what is working in 2026." },
  { type: 'h2', text: 'Understanding the East African Meta audience' },
  { type: 'p', text: "Over 85% of Meta users in Uganda access the platform on mobile. Your ads must be designed for the phone first — not adapted from desktop. Short copy, vertical or square video, and a thumb-stopping first frame are non-negotiable. Text-heavy creative that works in print will fail here." },
  { type: 'p', text: "Ugandan users are active in the morning commute window (7–9am), lunch hour (12–2pm), and evening (7–10pm). Running ads outside these windows without specific reason wastes budget. Use Meta's ad scheduling feature to concentrate delivery during peak engagement periods." },
  { type: 'h2', text: 'Audience targeting strategies that work' },
  { type: 'ul', items: [
    'Layered interest targeting: combine broad categories (e.g. "small business owners") with local geographic targeting at district level for Kampala audiences',
    'Lookalike audiences built from your customer list or website visitors consistently outperform cold interest targeting at scale',
    'WhatsApp engagement audiences — target people who have messaged your WhatsApp Business number — convert at very high rates in Uganda',
    'Retargeting website visitors with a specific offer closes the loop between organic discovery and paid conversion',
    'Avoid overly narrow audiences below 50,000 — Meta\'s algorithm needs room to optimise',
  ]},
  { type: 'h2', text: 'Creative that converts in the Ugandan market' },
  { type: 'p', text: "Social proof is disproportionately powerful in the East African market. Video testimonials from real Ugandan customers outperform polished studio ads almost every time. If you have a client willing to speak on camera for 30 seconds about a genuine result, that is your best creative asset — not a designed banner." },
  { type: 'p', text: "Swahili or Luganda in your copy — even a single line — dramatically improves engagement with local audiences. It signals that the ad is for them specifically, not a generic regional campaign. Test it against English-only creative and watch the engagement difference." },
  { type: 'h2', text: 'Benchmarks for Uganda in 2026' },
  { type: 'ul', items: [
    'Average CPC for Kampala-targeted campaigns: UGX 180–450 depending on industry',
    'Average CPM (cost per 1,000 impressions): UGX 4,000–12,000',
    'Lead generation campaigns targeting business owners: UGX 3,500–8,000 per lead',
    'E-commerce ROAS benchmark for well-optimised campaigns: 3x–5x',
    'Video completion rates for 15-second mobile-optimised video: 35–55%',
  ]},
  { type: 'h2', text: 'The one mistake that kills most campaigns' },
  { type: 'p', text: "The most common mistake we see from Ugandan businesses running their own Meta ads is sending traffic to a Facebook page instead of a website. You lose the ability to track conversions, retarget visitors, or capture leads properly. A professional website with a contact form or WhatsApp integration is the difference between ad spend that compounds and ad spend that vanishes." },
  { type: 'h2', text: 'When to scale your campaign' },
  { type: 'p', text: "Do not increase your budget until you have a campaign that is consistently profitable at a small spend. A good rule of thumb: run at least 5,000 UGX per day for a minimum of 7 days without changing anything. If your cost-per-lead or ROAS is within your target range, then increase budget by no more than 20% every 3–4 days. Scaling too fast causes Meta's algorithm to reset its learning phase, and you will see performance drop before it recovers." },
  { type: 'p', text: "Also consider seasonal timing. In Uganda, Q1 (January–March) and Q3 (August–October) tend to have lower CPMs because fewer advertisers are running. Q4 (November–December) is competitive and expensive. Plan your campaign calendar to test and learn in lower-cost periods, then scale into high-demand seasons with proven creatives." },
]

// BlogPostPage — main component rendered at /blog/meta-ads-east-africa-2026.
export default function BlogPostPage() {
  // Build table-of-contents data from h2 headings in the article.
  const headings = content.filter((b) => b.type === 'h2').map((b) => b.text!)

  return (
    // Outer container — top padding accounts for the fixed navigation bar height.
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      {/* ----- Hero / Page Header ----- */}
      <header className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {/* Decorative 3D scene (Babylon.js) — right half of header */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        {/* Radial gradient to transition the 3D scene into the solid background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Back link to the blog list */}
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-[#2C6FED] uppercase tracking-widest mb-8 transition-colors" style={{ color: 'var(--text-faint)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Posts
          </Link>
          {/* Category badge, publish date, read time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag active">{post.category}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
          </div>
          {/* Headline — clamp() for fluid responsiveness */}
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
            {post.title}
          </h1>
          {/* Excerpt / subtitle */}
          <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
        </div>
      </header>

      {/* ----- Main Content Area ----- */}
      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* ----- Article Body (left column) ----- */}
          <div className="space-y-5 max-w-[680px]">
            {content.map((b, i) => <Block key={i} b={b} i={i} />)}

            {/* ----- Author Bio Box ----- */}
            <div className="mt-14 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-4 p-6 border rounded-2xl" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
                <div className="w-12 h-12 rounded-full bg-[#2C6FED]/10 border border-[#2C6FED]/20 flex items-center justify-center shrink-0">
                  <span className="font-syne font-bold text-[#2C6FED]">A</span>
                </div>
                <div>
                  <p className="font-syne font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>Written by the Alffy Team</p>
                  <p className="font-outfit text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                    Practical guides on web design, SEO, and digital marketing — written by the people who do the work every day at Alffy (Alfinega), Kampala.
                  </p>
                </div>
              </div>
            </div>

            {/* ----- Call to Action Banner ----- */}
            <div className="mt-6 p-8 border border-[#2C6FED]/20 bg-[#2C6FED]/5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <h3 className="font-syne font-bold mb-1" style={{ color: 'var(--text)' }}>Need help with this?</h3>
                <p className="font-outfit text-sm" style={{ color: 'var(--text-faint)' }}>Our team is ready to get started on your project.</p>
              </div>
              <Link href="/contact" className="shrink-0 px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90 text-center" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* ----- Sidebar (right column, hidden on mobile) ----- */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {/* In-article navigation links */}
                <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-faint)' }}>In this article</h4>
                <nav className="space-y-1">
                  {headings.map((h) => (
                    <a key={h} href={`#${h.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors py-1.5 border-l-2 hover:border-[#2C6FED] pl-3 leading-snug"
                      style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
                      {h}
                    </a>
                  ))}
                </nav>
                {/* Related service links */}
                <div className="mt-8 p-4 border rounded-xl space-y-1.5" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-faint)' }}>Related Services</p>
                  <Link href="/services/seo-marketing" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>SEO & Digital Marketing →</Link>
                  <Link href="/services/web-design" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>Web Design & Development →</Link>
                  <Link href="/services/branding-design" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>Branding & Graphic Design →</Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}

