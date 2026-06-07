import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const post = {
  title: 'Next.js vs WordPress: Which Is Right for Your Business?',
  category: 'Web Design',
  date: 'Dec 18, 2025',
  readTime: '6 min read',
  excerpt: "Both are excellent options — but they serve different goals. An honest, no-fluff breakdown to help you make the right call for your next website.",
  content: [
    { type: 'p', text: "Two platforms dominate the web in 2026: WordPress powers roughly 43% of all websites globally, while Next.js has become the framework of choice for modern, performance-first web development. If you are planning a new website for your Ugandan business, understanding the difference will save you money and frustration." },
    { type: 'h2', text: 'What WordPress actually is' },
    { type: 'p', text: "WordPress is a content management system — software that lets non-technical users create and manage website content through a visual editor. It is powerful, mature, and has a vast ecosystem of themes and plugins. For businesses that need to update content regularly without developer help, WordPress is genuinely excellent." },
    { type: 'ul', items: [
      'Easy for non-technical staff to update content, add blog posts, and manage products',
      'Huge plugin ecosystem — e-commerce, SEO, forms, bookings all have ready-made solutions',
      'Lower upfront development cost for standard business websites',
      'Requires regular maintenance, security updates, and plugin management',
      'Performance can degrade with too many plugins — optimisation requires expertise',
    ]},
    { type: 'h2', text: 'What Next.js actually is' },
    { type: 'p', text: "Next.js is a React framework for building web applications. It is code-first, meaning a developer builds the site from scratch — there is no visual editor or plugin marketplace. What you get instead is a site engineered precisely to your requirements, with performance, SEO, and scalability built in from the foundation." },
    { type: 'ul', items: [
      'Significantly faster load times — critical for users on Ugandan 4G connections',
      'Better Core Web Vitals scores, which Google rewards with higher rankings',
      'No plugin bloat or security vulnerabilities from third-party code',
      'Full flexibility — any feature, any design, any integration',
      'Requires a developer for content updates unless a CMS is integrated separately',
      'Higher upfront development cost for equivalent functionality',
    ]},
    { type: 'h2', text: 'Which one should you choose?' },
    { type: 'p', text: "Choose WordPress if: you need to update content frequently yourself, you have a limited budget, or you need standard functionality that plugins can handle — e-commerce, bookings, membership sites." },
    { type: 'p', text: "Choose Next.js if: performance and SEO are critical to your business, you are building something with custom functionality, your brand requires a precise and distinctive design, or you are willing to invest more upfront for a superior long-term result." },
    { type: 'p', text: "At Alffy, we build on Next.js for most client projects — because in our market, page speed on mobile is not optional. A site that loads in 1.5 seconds will convert at two to three times the rate of a site that loads in 4 seconds, and most Ugandan users are on mobile 4G. That performance gap is the difference between a website that works and one that doesn't." },
    { type: 'h2', text: 'The hybrid approach' },
    { type: 'p', text: "Many of our clients get the best of both: a Next.js frontend for performance and design, connected to a headless CMS like Sanity or Contentful for easy content management. You get the speed of a custom-built site with the ease of a WordPress-style editor. It costs more to set up but pays dividends in organic traffic and conversion over time." },
  ],
}

export const metadata: Metadata = {
  title: 'Next.js vs WordPress: Which Is Right for Your Business? | Alffy Blog',
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
