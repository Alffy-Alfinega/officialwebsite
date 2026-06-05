// ============================================================
// Blog Content Component — Renders the interactive blog listing
// This is a 'use client' component because it uses useState
// for the category filter and handles button click events.
// Route: /blog (rendered inside BlogPage)
// ============================================================

// 'use client' directive — marks this as a Client Component,
// meaning it runs in the browser and can use React hooks like
// useState and event handlers.
'use client'

// Import Link for client-side navigation to individual blog posts
import Link from 'next/link'

// Import useState — a React hook that lets the component
// remember values (like the active category filter) across
// re-renders without losing them.
import { useState } from 'react'

// Import the 3D Babylon.js scene for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// TypeScript interface defining the shape of a blog post object
interface BlogPost {
  slug: string        // URL-friendly identifier (e.g., "why-your-ugandan-business-needs-a-website")
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  status: 'Published' | 'Draft' // Union type — only these two values are allowed
  accent: string       // Background gradient color for the card
}

// Hardcoded array of blog posts. Each post has metadata used
// for display and a slug that maps to its detail page at
// /blog/[slug].
const blogPosts: BlogPost[] = [
  {
    slug: 'why-your-ugandan-business-needs-a-website',
    title: 'Why Every Ugandan SME Needs a Professional Website in 2026',
    category: 'Web Design',
    excerpt: "Internet penetration in Uganda is growing fast. Here's why a professional website is no longer optional — and what it actually costs to get one done properly.",
    date: 'Feb 12, 2026',
    readTime: '6 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #080820, #0C0C2A)',
  },
  {
    slug: 'local-seo-kampala',
    title: 'How to Dominate Local SEO in Kampala: A Practical Guide',
    category: 'SEO Tips',
    excerpt: 'Step-by-step strategies to get your Kampala business ranking on Google Maps and local search — zero agency jargon, just practical actions.',
    date: 'Jan 28, 2026',
    readTime: '9 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #080C18, #0A1020)',
  },
  {
    slug: 'branding-kampala-startup',
    title: 'How Good Branding Helped a Kampala Startup Grow 3x',
    category: 'Branding',
    excerpt: "A real story from our client work — how a consistent brand identity transformed one Kampala business's market presence and customer trust.",
    date: 'Jan 14, 2026',
    readTime: '7 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #100818, #160A1E)',
  },
  {
    slug: 'meta-ads-east-africa-2026',
    title: 'Running Meta Ads in East Africa: What Works in 2026',
    category: 'Digital Marketing',
    excerpt: 'Audience behaviours, cost-per-click benchmarks, and creative strategies that are delivering results for East African businesses on Meta right now.',
    date: 'Jan 5, 2026',
    readTime: '8 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #0A0810, #120A18)',
  },
  {
    slug: 'nextjs-vs-wordpress-africa',
    title: 'Next.js vs WordPress: Which Is Right for Your Business?',
    category: 'Web Design',
    excerpt: "Both are excellent options — but they serve different goals. An honest, no-fluff breakdown to help you make the right call for your next website.",
    date: 'Dec 18, 2025',
    readTime: '8 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #080C1A, #0A1020)',
  },
  {
    slug: 'core-web-vitals-guide',
    title: 'Core Web Vitals Explained for Non-Developers',
    category: 'SEO Tips',
    excerpt: "Google uses page speed as a ranking factor. Here's what Core Web Vitals actually mean, why they matter, and how to improve them without technical expertise.",
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    status: 'Published',
    accent: 'linear-gradient(135deg, #080C10, #0A1018)',
  },
]

// Array of category names used for the filter buttons at the top
// of the blog listing. "All" shows every post.
const categories = ['All', 'Web Design', 'SEO Tips', 'Branding', 'Digital Marketing']

// BlogCard Component — renders a single blog post card.
// Accepts a post object and its index in the array (for numbering).
// If the post is Published, the card is wrapped in a Link so users
// can click to read the full article. Draft posts are not linked.
function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const isPublished = post.status === 'Published'

  // The card's inner content (shared between linked and unlinked versions)
  const inner = (
    <article
      className="group flex flex-col border border-[#1C1C34] rounded-2xl overflow-hidden hover:border-[#2C6FED]/40 transition-all duration-300 card-hover h-full"
      style={{ background: post.accent }}
    >
      {/* Card top section — decorative grid lines, category tag,
          status badge, and a large semi-transparent number */}
      <div className="h-32 relative overflow-hidden flex items-end p-4">
        <div className="absolute inset-0 grid-lines opacity-15" />
        {/* Hover glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: 'radial-gradient(ellipse at top, rgba(44,111,237,0.08) 0%, transparent 70%)' }}
        />
        {/* Large number watermark */}
        <span
          className="absolute right-4 top-4 font-syne font-extrabold leading-none select-none"
          style={{ fontSize: '4rem', color: 'rgba(44,111,237,0.06)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="tag">{post.category}</span>
          {/* Status badge — green for Published, blue for Draft */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wide"
            style={{
              background: isPublished ? 'rgba(34,197,94,0.1)' : 'rgba(44,111,237,0.1)',
              border: isPublished ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(44,111,237,0.2)',
              color: isPublished ? '#22c55e' : '#2C6FED',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: isPublished ? '#22c55e' : '#2C6FED' }} />
            {post.status}
          </span>
        </div>
      </div>

      {/* Card body — date, read time, title, excerpt, and "Read Article" link */}
      <div className="p-6 flex flex-col flex-1">
        {/* Date and read time row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] text-[#7A7A9A]">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#333]" />
          <span className="font-mono text-[10px] text-[#7A7A9A]">{post.readTime}</span>
        </div>
        <h2 className="font-syne font-bold text-white text-lg leading-snug mb-3 group-hover:text-[#2C6FED] transition-colors flex-1">
          {post.title}
        </h2>
        <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed mb-4">{post.excerpt}</p>
        {/* Bottom "Read Article" / "Coming Soon" link */}
        <div className="flex items-center gap-2 text-[#8A8AAA] group-hover:text-[#2C6FED] transition-colors">
          <span className="font-mono text-[11px] uppercase tracking-wide">
            {isPublished ? 'Read Article' : 'Coming Soon'}
          </span>
          {isPublished && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
    </article>
  )

  // Wrap in Link if published, plain div otherwise
  return isPublished
    ? <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">{inner}</Link>
    : <div className="flex flex-col h-full">{inner}</div>
}

// Main BlogContent component — the default export.
// Uses useState to track which category filter is active.
export default function BlogContent() {
  // activeCategory starts at 'All' — changes when a filter button is clicked
  const [activeCategory, setActiveCategory] = useState('All')
  // Filter the posts array based on the active category
  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-[68px]">
      {/* Hero + Blog Listing Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        {/* 3D background scene */}
        <div className="absolute right-0 top-0 w-1/2 h-72 pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 90% 30%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">The Blog</span>
        {/* Hero heading and subtitle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <h1
            className="font-syne font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            Insights &<br />
            <span style={{ color: '#2C6FED' }}>Resources.</span>
          </h1>
          <p className="max-w-xs font-outfit text-[#9A9ABB] text-sm leading-relaxed">
            Practical content on web design, SEO, branding, and digital marketing — written for East African businesses.
          </p>
        </div>

        <div className="h-px bg-[#1C1C34] mb-10" />

        {/* Category filter buttons — each button sets activeCategory
            when clicked, which re-filters the posts grid */}
        <div className="flex flex-wrap gap-2 mb-12" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`tag cursor-pointer transition-colors ${
                activeCategory === cat ? 'active border-[#2C6FED] text-[#2C6FED]' : 'hover:border-[#333] hover:text-[#aaa]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog posts grid — 1 column on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Newsletter CTA Section — encourages visitors to subscribe */}
        <div
          className="mt-20 p-10 md:p-16 rounded-3xl border border-[#1C1C34] text-center"
          style={{ background: 'linear-gradient(135deg, #0A0A16, #08081A)' }}
        >
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Stay updated</span>
          <h3
            className="font-syne font-extrabold text-white mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
          >
            Get notified when we publish.
          </h3>
          <p className="font-outfit text-[#9A9ABB] mb-8 max-w-sm mx-auto">
            Monthly insights on digital marketing, SEO, and web design — no spam, unsubscribe anytime.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
          >
            Stay in the Loop
          </Link>
        </div>
        </div>
      </section>
    </div>
  )
}
