import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const post = {
  title: 'How Good Branding Helped a Kampala Startup Grow 3x',
  category: 'Branding',
  date: 'Jan 14, 2026',
  readTime: '6 min read',
  excerpt: "A real story from our client work — how a consistent brand identity transformed one Kampala business's market presence and customer trust.",
  content: [
    { type: 'p', text: "In mid-2025, a Kampala-based honey and natural foods business came to us with a problem most small businesses in Uganda quietly share: their product was excellent, their prices were competitive, but their brand looked like it had been put together in a hurry — because it had been." },
    { type: 'h2', text: 'The starting point: a business with no visual identity' },
    { type: 'p', text: "The business had a name, a handwritten logo, and inconsistent packaging across their product range. Their Jumia store looked different from their Instagram, which looked different from the stickers on their jars. There was no consistent colour palette, no typography, no brand guidelines. Every touchpoint communicated something slightly different." },
    { type: 'p', text: "The founder knew something was wrong. She was getting traffic but poor conversion. People were landing on her Jumia page, looking at the products, and leaving. The product photos were good. The pricing was reasonable. Something else was failing." },
    { type: 'h2', text: 'What we built: a full brand identity system' },
    { type: 'p', text: "We started with discovery — understanding who her customers actually were, what she wanted the brand to feel like, and what separated her products from supermarket alternatives. The answer was clear: this was premium, natural, locally-sourced honey positioned for urban Ugandan consumers who cared about quality and origin." },
    { type: 'ul', items: [
      '3 logo concepts rooted in Ugandan natural imagery, refined to a final mark',
      'A warm earth-tone colour palette — amber, deep green, cream — that read as premium and natural',
      'Typography pairing: a clean serif for the brand name, a readable sans-serif for body copy',
      'Full brand guidelines document covering usage rules, don\'ts, and colour codes',
      'Packaging templates for all product sizes, ready for the printer',
      'A social media visual kit: post templates, story frames, highlight covers',
    ]},
    { type: 'h2', text: 'The results: measurable and fast' },
    { type: 'p', text: "Within six weeks of relaunching the Jumia store with the new packaging and photography, conversion improved by 40%. The same traffic that had been bouncing was now converting. Nothing else had changed — same products, same prices, same platform. Only the brand." },
    { type: 'p', text: "Three months later, the business had secured placement in two Kampala supermarkets — something the founder had been trying to achieve for over a year. She told us the buyer's exact words: 'Your packaging looks like it belongs on our shelves.'" },
    { type: 'h2', text: 'What this means for your business' },
    { type: 'p', text: "Branding is not a luxury reserved for large companies. For a small business in Uganda, a consistent, professional brand identity is often the single fastest lever for improving conversion and opening doors. You are not just buying a logo — you are buying the ability to compete in spaces that previously would have turned you away." },
    { type: 'p', text: "The investment for a full brand identity at Alffy starts at 600,000 UGX. For most businesses, it pays for itself within the first month of improved conversion." },
  ],
}

export const metadata: Metadata = {
  title: 'How Good Branding Helped a Kampala Startup Grow 3x | Alffy Blog',
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    type: 'article',
    publishedTime: post.date,
  },
}

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

export default function BlogPostPage() {
  const headings = post.content.filter((b) => b.type === 'h2').map((b) => b.text!)

  return (
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      <header className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="blog-slug" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-[#2C6FED] uppercase tracking-widest mb-8 transition-colors" style={{ color: 'var(--text-faint)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Posts
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag active">{post.category}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
          </div>
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>{post.title}</h1>
          <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
        </div>
      </header>

      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          <div className="space-y-5 max-w-[680px]">
            {post.content.map((b, i) => <Block key={i} b={b} i={i} />)}
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

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
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
                <div className="mt-8 p-4 border rounded-xl space-y-1.5" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-faint)' }}>Related Services</p>
                  <Link href="/services/seo-services" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>SEO Services →</Link>
                  <Link href="/services/website-design" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>Website Design →</Link>
                  <Link href="/services/content-creation" className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>Content Creation →</Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
