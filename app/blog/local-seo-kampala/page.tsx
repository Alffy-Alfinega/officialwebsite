// ============================================================
// Blog Post: "How to Dominate Local SEO in Kampala: A Practical Guide"
// A step-by-step guide for Kampala business owners on ranking in
// Google Maps and local search. Content is hardcoded in this file.
// ============================================================

// Metadata type — used by Next.js to type-check the SEO metadata object
// that populates <title>, <meta>, and Open Graph tags.
import type { Metadata } from 'next'

// Link — Next.js built-in component for internal navigation with
// client-side routing (no full page reloads).
import Link from 'next/link'

// BabylonScene — renders a 3D animated background scene in the header
// using Babylon.js. Imported as a client component (no SSR).
import { BabylonScene } from '@/components/3d/BabylonScene'

// Next.js metadata — this object defines the page title, description,
// and Open Graph fields for social media preview cards.
export const metadata: Metadata = {
  title: 'How to Dominate Local SEO in Kampala: A Practical Guide | Alffy Blog',
  description: 'Step-by-step strategies to get your Kampala business ranking on Google Maps and local search — zero agency jargon, just practical actions.',
  openGraph: {
    title: 'How to Dominate Local SEO in Kampala: A Practical Guide',
    description: 'Step-by-step strategies to get your Kampala business ranking on Google Maps and local search — zero agency jargon, just practical actions.',
    type: 'article',
    publishedTime: 'Jan 28, 2026',
  },
}

// Block — utility component that converts a typed content block
// (h2, h3, p, ul) into the appropriate JSX element. This is shared
// logic used across all blog post pages.
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

// Display metadata rendered visually on the page (category, date, etc.).
// This is different from the `metadata` export above — that one is for <head>.
const post = {
  title: 'How to Dominate Local SEO in Kampala: A Practical Guide',
  category: 'SEO Tips',
  date: 'Jan 28, 2026',
  readTime: '9 min read',
  excerpt: 'Step-by-step strategies to get your Kampala business ranking on Google Maps and local search — zero agency jargon, just practical actions.',
}

// Article body content as typed block objects.
// Each entry is rendered by the `Block` component above.
const content: { type: string; text?: string; items?: string[] }[] = [
  { type: 'p', text: "Local SEO is one of the highest-ROI marketing investments a Kampala business can make. When someone searches 'restaurant in Kampala' or 'accountant Ntinda', the businesses that appear in the Local Pack — the map results at the top of Google — capture the majority of clicks. Here is how to get there." },
  { type: 'h2', text: 'Step 1: Claim and optimise your Google Business Profile' },
  { type: 'p', text: "Your Google Business Profile (GBP) is the single most important local SEO asset. If you have not claimed yours, do it today at business.google.com. Once claimed, fill every field completely: business name exactly as it appears on your signage, physical address with the correct district, all relevant categories, business hours, phone number, and website URL." },
  { type: 'p', text: "Add real photos — at minimum your shopfront, interior, team, and products or work examples. Profiles with photos receive significantly more direction requests and website clicks than those without. Update your hours for public holidays, and use the Posts feature to publish offers and news weekly." },
  { type: 'h2', text: 'Step 2: Build consistent NAP citations across the web' },
  { type: 'p', text: "NAP stands for Name, Address, Phone. Google cross-references your business details across directories to verify legitimacy. Inconsistencies — even small ones like 'Plot 14' vs '14 Kampala Road' — can hurt your rankings." },
  { type: 'ul', items: [
    'List your business on Yellow Pages Uganda with identical NAP details',
    'Submit to KampalaOnline and relevant industry directories',
    'Ensure your website footer, contact page, and GBP all show exactly the same information',
    'Check existing listings for outdated information and request corrections',
  ]},
  { type: 'h2', text: 'Step 3: Optimise your website for local keywords' },
  { type: 'p', text: "Your website needs to tell Google explicitly where you operate and what you do. This means including your city and neighbourhood in your title tags — for example, 'Web Design Services Kampala | Alffy' — and creating dedicated service area pages if you cover multiple districts." },
  { type: 'ul', items: [
    'Add your full address and phone number in your website footer on every page',
    'Create a dedicated Contact page with an embedded Google Map',
    'Add LocalBusiness structured data (schema markup) to your homepage',
    'Write at least one page mentioning each neighbourhood or district you serve',
    'Include local landmarks and context in your copy where natural',
  ]},
  { type: 'h2', text: 'Step 4: Build a genuine review strategy' },
  { type: 'p', text: "Reviews are one of the strongest local ranking signals. After every completed project or successful transaction, send your client a WhatsApp message with a direct link to your Google review page — you can generate this link from your GBP dashboard. Even 10 to 15 genuine 5-star reviews will move you meaningfully in local results." },
  { type: 'p', text: "Respond to every review — positive and negative. Google rewards active profiles. A thoughtful response to a negative review often impresses potential customers more than the review itself would have damaged you." },
  { type: 'h2', text: 'Step 5: Create locally relevant content' },
  { type: 'p', text: "A blog or resources section covering topics relevant to businesses in Uganda signals to Google that your site is a local authority. Topics like 'How to register a business in Uganda', 'Best accounting software for Ugandan SMEs', or 'How to apply for URSB certification' attract exactly the kind of Kampala business owner who is also your potential client." },
  { type: 'h2', text: 'Measuring your local SEO progress' },
  { type: 'ul', items: [
    'Check your Google Business Profile Insights monthly — track search views, direction requests, phone calls, and website clicks',
    'Monitor your Google Search Console for branded and location-based search impressions in your target districts',
    'Track phone call and WhatsApp enquiry volume before and after your local SEO efforts — increases in direct enquiries are a strong signal',
    'Use Google Maps in incognito mode to check where your business ranks for your target keywords (e.g. "car wash Ntinda")',
    'Re-audit your NAP citations quarterly to ensure no inconsistencies have crept in on third-party directories',
  ]},
  { type: 'p', text: "Local SEO is not a one-time task — it compounds over months. Businesses that start now will have a significant advantage over those that wait for competition to force their hand." },
]

// BlogPostPage — main component rendered at /blog/local-seo-kampala.
export default function BlogPostPage() {
  // Extract h2 headings to generate a sticky table-of-contents sidebar.
  const headings = content.filter((b) => b.type === 'h2').map((b) => b.text!)

  return (
    // Top-level wrapper — pt-[68px] prevents content from hiding behind the fixed navbar.
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      {/* ----- Hero Header ----- */}
      <header className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {/* 3D scene on the right side of the header (purely decorative) */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        {/* Fade gradient to blend the 3D scene into the background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Back navigation to /blog */}
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-[#2C6FED] uppercase tracking-widest mb-8 transition-colors" style={{ color: 'var(--text-faint)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Posts
          </Link>
          {/* Post category, date, and read time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag active">{post.category}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
          </div>
          {/* Article title — responsive font scaling */}
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
            {post.title}
          </h1>
          {/* Subtitle / excerpt */}
          <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
        </div>
      </header>

      {/* ----- Content Wrapper ----- */}
      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* ----- Main Article ----- */}
          <div className="space-y-5 max-w-[680px]">
            {content.map((b, i) => <Block key={i} b={b} i={i} />)}

            {/* ----- Author Card ----- */}
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

            {/* ----- CTA ----- */}
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

          {/* ----- Sidebar (hidden on mobile) ----- */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {/* Table of Contents — scroll-linked anchor links */}
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
                {/* Related Services sidebar links */}
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

