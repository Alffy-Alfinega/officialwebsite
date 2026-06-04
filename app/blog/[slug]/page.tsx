import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'

interface Props {
  params: Promise<{ slug: string }>
}

const posts: Record<string, {
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: { type: string; text?: string; items?: string[] }[]
}> = {
  'why-your-ugandan-business-needs-a-website': {
    title: 'Why Every Ugandan SME Needs a Professional Website in 2026',
    category: 'Web Design',
    date: 'Feb 12, 2026',
    readTime: '5 min read',
    excerpt: "Internet penetration in Uganda is growing fast. Here's why a professional website is no longer optional — and what it actually costs to get one done properly.",
    content: [
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
      { type: 'p', text: "The digital economy in Uganda is accelerating. Businesses that invest in a professional online presence now will have a compounding advantage over those that wait. The cost of not having a website is already higher than the cost of building one." },
    ],
  },

  'local-seo-kampala': {
    title: 'How to Dominate Local SEO in Kampala: A Practical Guide',
    category: 'SEO Tips',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    excerpt: 'Step-by-step strategies to get your Kampala business ranking on Google Maps and local search — zero agency jargon, just practical actions.',
    content: [
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
      { type: 'p', text: "Local SEO is not a one-time task — it compounds over months. Businesses that start now will have a significant advantage over those that wait for competition to force their hand." },
    ],
  },

  'branding-kampala-startup': {
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
  },

  'meta-ads-east-africa-2026': {
    title: 'Running Meta Ads in East Africa: What Works in 2026',
    category: 'Digital Marketing',
    date: 'Jan 5, 2026',
    readTime: '7 min read',
    excerpt: 'Audience behaviours, cost-per-click benchmarks, and creative strategies that are delivering results for East African businesses on Meta right now.',
    content: [
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
    ],
  },

  'nextjs-vs-wordpress-africa': {
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
  },

  'core-web-vitals-guide': {
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
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Article Not Found | Alffy Blog' }
  return {
    title: `${post.title} | Alffy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  const title = post?.title ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const headings = post?.content.filter((b) => b.type === 'h2').map((b) => b.text!) ?? []

  return (
    <div className="pt-[68px]" style={{ background: 'var(--bg)' }}>
      {/* Hero */}
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
          {post && (
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tag active">{post.category}</span>
              <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
              <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>·</span>
              <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>{post.readTime}</span>
            </div>
          )}
          <h1 className="font-syne font-extrabold leading-tight max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
            {title}
          </h1>
          {post && <p className="mt-5 font-outfit text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>}
        </div>
      </header>

      <div className="px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">

          {/* Content */}
          <div className="space-y-5 max-w-[680px]">
            {post ? (
              <>
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
              </>
            ) : (
              <p className="font-outfit text-lg" style={{ color: 'var(--text-muted)' }}>This article is coming soon. Check back shortly.</p>
            )}

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

          {/* Sidebar */}
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
