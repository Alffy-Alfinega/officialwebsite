// ============================================================
// Blog Post: "Next.js vs WordPress: Which Is Right for Your Business?"
// Compares Next.js (custom React framework) and WordPress (CMS) for
// Ugandan businesses deciding on a website platform. Hardcoded content.
// ============================================================

// Metadata type — Next.js TypeScript type that validates the exported
// SEO metadata object (title, description, open graph).
import type { Metadata } from 'next'

// Link — Next.js component for internal routing with client-side
// navigation, preserving app state between pages.
import Link from 'next/link'

// BabylonScene — 3D decorative background component for the page
// header, rendered client-side via Babylon.js (WebGL).
import { BabylonScene } from '@/components/3d/BabylonScene'

// Exported metadata — Next.js automatically injects these values into
// the document <head>: page title, meta description, and Open Graph
// properties for social media preview cards.
export const metadata: Metadata = {
  title: 'Next.js vs WordPress: Which Is Right for Your Business? | Alffy Blog',
  description: "Both are excellent options — but they serve different goals. An honest, no-fluff breakdown to help you make the right call for your next website.",
  openGraph: {
    title: 'Next.js vs WordPress: Which Is Right for Your Business?',
    description: "Both are excellent options — but they serve different goals. An honest, no-fluff breakdown to help you make the right call for your next website.",
    type: 'article',
    publishedTime: 'Dec 18, 2025',
  },
}

// Block — renderer component that maps a content block object
// (h2, h3, p, ul) to the appropriate JSX element. This pattern
// separates content data from presentation markup.
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

// Display metadata rendered in the page hero (category, date, read time).
const post = {
  title: 'Next.js vs WordPress: Which Is Right for Your Business?',
  category: 'Web Design',
  date: 'Dec 18, 2025',
  readTime: '8 min read',
  excerpt: "Both are excellent options — but they serve different goals. An honest, no-fluff breakdown to help you make the right call for your next website.",
}

// Article body as typed block data. Each entry is rendered by the
// `Block` component — making the article easy to read and edit as data.
const content: { type: string; text?: string; items?: string[] }[] = [
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
  { type: 'h2', text: 'Hosting and ongoing costs' },
  { type: 'p', text: "WordPress requires shared hosting (50,000–150,000 UGX/year), premium plugins (often 100,000–300,000 UGX/year), and regular maintenance fees. A badly managed WordPress site can end up costing more annually than a Next.js site on Vercel, which has a very generous free tier and only charges for traffic beyond basic limits." },
  { type: 'ul', items: [
    'Next.js on Vercel: Free tier covers most SME traffic. Paid plans from $20/month for teams and advanced features',
    'WordPress on shared hosting: Cheap upfront but premium plugins, security, and performance add-ons accumulate quickly',
    'Headless CMS (Sanity/Contentful): Free tier available for small content teams. Paid plans from $15/month for larger needs',
    'Domain and email: Similar cost regardless of platform — approximately 60,000–120,000 UGX/year total',
  ]},
  { type: 'p', text: "When comparing total cost of ownership, do not just compare upfront development fees. A Next.js site that costs more to build but eliminates plugin subscriptions, hosting upgrades, and security maintenance is often cheaper in year two and beyond." },
]

// BlogPostPage — the React component rendered at /blog/nextjs-vs-wordpress-africa.
export default function BlogPostPage() {
  // Extract h2 headings for the table of contents sidebar.
  const headings = content.filter((b) => b.type === 'h2').map((b) => b.text!)

  return (
    // Outer wrapper with top padding for the fixed navbar.
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      {/* ----- Hero Header ----- */}
      <header className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {/* 3D decorative scene positioned on the right */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        {/* Gradient overlay to blend the scene into the background colour */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* "All Posts" breadcrumb link */}
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-[#2C6FED] uppercase tracking-widest mb-8 transition-colors" style={{ color: 'var(--text-faint)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Posts
          </Link>
          {/* Category, date, and read-time labels */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag active">{post.category}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
          </div>
          {/* Title — responsive with clamp() */}
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
            {post.title}
          </h1>
          {/* Excerpt / one-line summary */}
          <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
        </div>
      </header>

      {/* ----- Content Section ----- */}
      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* ----- Left: Article Body ----- */}
          <div className="space-y-5 max-w-[680px]">
            {content.map((b, i) => <Block key={i} b={b} i={i} />)}

            {/* ----- Author Bio ----- */}
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

            {/* ----- CTA Banner ----- */}
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

          {/* ----- Right: Sidebar ----- */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {/* Table of contents — anchor links to each h2 */}
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
                {/* Links to related service pages */}
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

