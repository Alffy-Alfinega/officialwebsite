import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

const post = {
  title: 'Core Web Vitals Explained for Non-Developers',
  category: 'SEO Tips',
  date: 'Dec 5, 2025',
  readTime: '9 min read',
  excerpt: "Google uses page speed as a ranking factor. Here's what Core Web Vitals actually mean, why they matter, and how to improve them without technical expertise.",
  content: [
    { type: 'p', text: "In 2021, Google officially made page experience a ranking factor through something called Core Web Vitals. In plain terms: if your website is slow or frustrating to use, Google will rank it lower — even if your content and backlinks are strong. For businesses in Uganda where most users are on mobile 4G, this matters more than most people realise." },
    { type: 'h2', text: 'The three Core Web Vitals and what they measure' },
    { type: 'p', text: "Largest Contentful Paint (LCP) measures how long it takes for the main content of your page to become visible. Think of it as the point where a user can actually read your headline or see your hero image. Google's target is under 2.5 seconds. Most Ugandan websites we audit score between 5 and 12 seconds on mobile — a major ranking liability." },
    { type: 'p', text: "Interaction to Next Paint (INP) measures how quickly your page responds to user actions — tapping a button, clicking a link, submitting a form. It replaced First Input Delay (FID) in 2024. The target is under 200 milliseconds. Slow INP makes a site feel sluggish and unresponsive, which drives users away." },
    { type: 'p', text: "Cumulative Layout Shift (CLS) measures visual stability — how much the page content moves around as it loads. You have experienced bad CLS when you try to tap a button and it jumps just as you press it. Google's target is a CLS score under 0.1." },
    { type: 'h2', text: 'How to check your current scores' },
    { type: 'p', text: "Go to pagespeed.web.dev and enter your website URL. Run it on mobile (the default). Google will give you scores out of 100 and flag specific issues. Focus on the 'Opportunities' and 'Diagnostics' sections — these tell you exactly what is slowing your site down." },
    { type: 'ul', items: [
      'Score 90–100: Excellent — minimal action needed',
      'Score 50–89: Needs improvement — address the top 3 flagged issues',
      'Score 0–49: Poor — significant work required, this is hurting your rankings now',
    ]},
    { type: 'h2', text: 'The most common issues on Ugandan business websites' },
    { type: 'ul', items: [
      'Uncompressed images: A single hero image over 1MB can add 3–5 seconds to LCP alone. All images should be WebP format and under 200KB',
      'Render-blocking JavaScript: Scripts that load before your content prevent the page from displaying — defer non-critical scripts',
      'No image dimensions specified: This causes layout shift as images load in and push content around',
      'Too many plugins (WordPress): Each plugin adds JavaScript and CSS that must load before the page is interactive',
      'No CDN: Hosting in a single location far from your users adds latency — a CDN serves files from servers closest to each visitor',
    ]},
    { type: 'h2', text: 'What you can do without a developer' },
    { type: 'p', text: "If you are on WordPress, install the Smush plugin to compress and convert images automatically. Use WP Rocket or LiteSpeed Cache to enable caching and defer JavaScript. These two changes alone typically improve PageSpeed scores by 20–40 points." },
    { type: 'p', text: "Before uploading any new image, run it through Squoosh (squoosh.app) — a free browser tool from Google that compresses images dramatically with no visible quality loss. A photo that was 3MB can often be reduced to 120KB without any visible difference." },
    { type: 'h2', text: 'Why this matters more in Uganda than in Europe' },
    { type: 'p', text: "Average 4G speeds in Kampala are significantly slower than in Europe or North America. A page that loads acceptably on a European connection may be unusable on Ugandan 4G. When you test your PageSpeed score, always use the mobile setting — which simulates a slow 4G connection. This is the real experience your customers have. Optimise for that, not for the desktop score." },
    { type: 'p', text: "Core Web Vitals are not a one-time fix. As you add content, plugins, and features to your site, scores can degrade. Build a habit of checking your PageSpeed score monthly and addressing any new issues that appear." },
  ],
}

export const metadata: Metadata = {
  title: 'Core Web Vitals Explained for Non-Developers | Alffy Blog',
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
