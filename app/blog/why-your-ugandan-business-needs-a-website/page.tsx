// ============================================================
// Blog Post: "Why Every Ugandan SME Needs a Professional Website in 2026"
// Makes the case for professional web presence for Ugandan small
// businesses — covering credibility, cost, and ROI. Hardcoded content.
// ============================================================

// Metadata type — imported from Next.js to provide TypeScript types
// for the SEO metadata object that controls <head> tags.
import type { Metadata } from 'next'

// Link — Next.js component for internal navigation with client-side
// transitions (avoids full page reloads when moving between pages).
import Link from 'next/link'

// BabylonScene — a 3D animated background component rendered in the
// hero section using the Babylon.js WebGL library (client-side only).
import { BabylonScene } from '@/components/3d/BabylonScene'

// Next.js metadata — this object populates the page <title>,
// <meta name="description">, and Open Graph tags for social previews.
// Exporting it as `metadata` is a Next.js convention for SEO.
export const metadata: Metadata = {
  title: 'Why Every Ugandan SME Needs a Professional Website in 2026 | Alffy Blog',
  description: "Internet penetration in Uganda is growing fast. Here's why a professional website is no longer optional — and what it actually costs to get one done properly.",
  openGraph: {
    title: 'Why Every Ugandan SME Needs a Professional Website in 2026',
    description: "Internet penetration in Uganda is growing fast. Here's why a professional website is no longer optional — and what it actually costs to get one done properly.",
    type: 'article',
    publishedTime: 'Feb 12, 2026',
  },
}

// Block — renders a single content block from the article data array.
// Each block has a type (h2, h3, p, ul) and optional text or list items.
// This keeps article content as clean data rather than inline JSX.
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

// Display metadata shown in the page hero section (category, date, etc.).
// This is separate from the Next.js `metadata` SEO export above.
const post = {
  title: 'Why Every Ugandan SME Needs a Professional Website in 2026',
  category: 'Web Design',
  date: 'Feb 12, 2026',
  readTime: '6 min read',
  excerpt: "Internet penetration in Uganda is growing fast. Here's why a professional website is no longer optional — and what it actually costs to get one done properly.",
}

// The article body — an array of typed content blocks.
// The `Block` component above converts each block into rendered HTML.
const content: { type: string; text?: string; items?: string[] }[] = [
  { type: 'p', text: "Uganda's internet penetration crossed 52% in 2025 — and it is growing fast. With over 16 million Ugandans now online, the question for any business owner is no longer whether to have a website, but what kind of website will actually work." },
  { type: 'h2', text: 'The credibility problem every offline business faces' },
  { type: 'p', text: "When a potential customer hears about your business — from a friend, a Facebook post, or a roadside sign — the first thing they do is search for you online. If nothing comes up, or they find a poorly-maintained Facebook page, trust is immediately eroded. A professional website solves this instantly. It signals permanence, legitimacy, and professionalism before you have said a single word to the prospect." },
  { type: 'h2', text: 'What a professional website actually does for your business' },
  { type: 'ul', items: [
    'Works 24/7 as a sales and marketing asset — even when you are asleep',
    'Builds credibility with first-time visitors through design, testimonials, and portfolio',
    'Collects leads and enquiries automatically via contact forms and WhatsApp integrations',
    'Ranks on Google for relevant searches, bringing you organic traffic at zero ongoing cost',
    'Provides a central hub for all your digital channels — social media, email, ads',
    'Lets you present pricing, services, and FAQs without repeating yourself to every enquiry',
  ]},
  { type: 'h2', text: 'Facebook pages are not enough — here is why' },
  { type: 'p', text: "Many Ugandan SMEs rely entirely on Facebook as their digital presence. This is understandable — it is free, familiar, and your customers are already there. But a Facebook page is not a business asset you own. Meta can change its algorithm, restrict your reach, or ban your account. A website is yours. No algorithm between you and your customer." },
  { type: 'p', text: "Beyond ownership, websites rank on Google. Facebook pages rarely do. When someone searches 'printing services Kampala' or 'lawyer Ntinda', Google returns websites — not Facebook pages. If you are not indexed, you simply do not exist in that search." },
  { type: 'h2', text: 'The cost question — what does it actually take?' },
  { type: 'p', text: "A professionally built website from Alffy starts at 850,000 UGX for a 5-page site — less than two months of a single employee's salary, delivering returns indefinitely. The Growth package at 2,200,000 UGX includes e-commerce capability, advanced SEO, and 90 days of post-launch support. Compare that to the cost of a single month of radio advertising and the ROI becomes obvious." },
  { type: 'h2', text: 'What to look for when hiring a web partner in Uganda' },
  { type: 'ul', items: [
    'Ask to see live examples of their work — and check those sites actually load fast on a 4G connection',
    'Look for transparent, fixed pricing — no hourly billing or surprise invoices',
    'Ensure the team understands the local market, not just international design trends',
    'Check that they offer post-launch support — a website needs maintenance',
    'Verify they can handle SEO from day one, not as an afterthought',
  ]},
  { type: 'h2', text: 'What type of website does your business need?' },
  { type: 'ul', items: [
    'Service business (lawyer, accountant, consultant): A 5-page site with services, about, contact, blog, and a booking or enquiry form. Focus on trust signals — testimonials, credentials, and case studies',
    'Retail or restaurant: A site with menu, location, hours, online ordering or reservation system, and a gallery. Mobile-first is non-negotiable — most customers will browse on phone',
    'E-commerce (physical products): A full online store with product catalogue, cart, payment gateway integration, shipping calculator, and inventory management',
    'Portfolio or creative (photographer, artist, architect): A visually-driven site with a gallery, project case studies, and a contact form. Speed and image optimisation are critical',
  ]},
  { type: 'p', text: "The digital economy in Uganda is accelerating. Businesses that invest in a professional online presence now will have a compounding advantage over those that wait. The cost of not having a website is already higher than the cost of building one." },
]

// BlogPostPage — the main component rendered at /blog/why-your-ugandan-business-needs-a-website.
export default function BlogPostPage() {
  // Build sidebar table of contents from all h2-level headings.
  const headings = content.filter((b) => b.type === 'h2').map((b) => b.text!)

  return (
    // Root wrapper — pt-[68px] clears the fixed top navigation bar.
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      {/* ----- Hero / Page Header ----- */}
      <header className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {/* Decorative 3D animation (right half of header) */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene variant="blog" className="w-full h-full" />
        </div>
        {/* Fade gradient — makes the 3D scene smoothly transition into the background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Back link to the full blog listing */}
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-[#2C6FED] uppercase tracking-widest mb-8 transition-colors" style={{ color: 'var(--text-faint)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Posts
          </Link>
          {/* Category badge, publication date, and read time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag active">{post.category}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
          </div>
          {/* Page title — fluid typography via clamp() */}
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
            {post.title}
          </h1>
          {/* Subtitle / excerpt */}
          <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
        </div>
      </header>

      {/* ----- Main Content Layout ----- */}
      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* ----- Left Column: Article Text ----- */}
          <div className="space-y-5 max-w-[680px]">
            {content.map((b, i) => <Block key={i} b={b} i={i} />)}

            {/* ----- About the Author Card ----- */}
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

            {/* ----- Call to Action ----- */}
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

          {/* ----- Right Column: Sidebar (hidden on mobile) ----- */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {/* Jump-to-section table of contents */}
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
                {/* Cross-links to Alffy's service pages */}
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
