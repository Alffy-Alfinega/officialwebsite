import type { Metadata } from 'next'
import { HoverBlogCard } from '@/components/ui/HoverCard'
import NewsletterForm from '@/components/ui/NewsletterForm'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on web design, SEO, branding, and digital marketing from Alffy (Alfinega) in Kampala, Uganda.',
}

const POSTS = [
  { slug:'why-your-ugandan-business-needs-a-website', title:'Why Your Ugandan Business Needs a Website in 2026', date:'June 2026', tag:'Web Design', tagColor:'#2C6FED', tagBorder:'rgba(44,111,237,0.4)', read:'5 min', desc:'Still relying on Facebook or WhatsApp? Here is what you are losing — and what a proper website changes.' },
  { slug:'local-seo-kampala', title:'Local SEO in Kampala: How to Rank When Customers Are Searching Near You', date:'May 2026', tag:'SEO', tagColor:'#16a766', tagBorder:'rgba(22,167,102,0.4)', read:'7 min', desc:'A practical guide to getting your Kampala business to the top of Google local results.' },
  { slug:'branding-kampala-startup', title:'Branding for Kampala Startups: What to Invest In First', date:'May 2026', tag:'Branding', tagColor:'#D4A843', tagBorder:'rgba(212,168,67,0.4)', read:'6 min', desc:'Logo first? Name first? Guidelines first? We break down what actually matters at each stage.' },
  { slug:'meta-ads-east-africa-2026', title:'Meta Ads in East Africa 2026: What Is Working Right Now', date:'April 2026', tag:'Marketing', tagColor:'#ea580c', tagBorder:'rgba(234,88,12,0.4)', read:'8 min', desc:'Facebook and Instagram ad strategies producing results for East African businesses right now.' },
  { slug:'nextjs-vs-wordpress-africa', title:'Next.js vs WordPress for African Business Websites', date:'March 2026', tag:'Web Design', tagColor:'#2C6FED', tagBorder:'rgba(44,111,237,0.4)', read:'6 min', desc:'We build on Next.js, not WordPress. Here is the honest case for why — and when WordPress still makes sense.' },
  { slug:'core-web-vitals-guide', title:'Core Web Vitals for Ugandan Websites: A Plain-Language Guide', date:'February 2026', tag:'SEO', tagColor:'#16a766', tagBorder:'rgba(22,167,102,0.4)', read:'5 min', desc:'Google ranks fast websites higher. Here is what Core Web Vitals measure and how to fix them.' },
]

export default function BlogPage() {
  return (
    <div style={{ minHeight:'100vh' }}>
      <PageHero
        eyebrow="Alffy Blog"
        title={<>Insights from<br /><span style={{ color:'#2C6FED' }}>Kampala.</span></>}
        subtitle="Practical articles on web design, SEO, branding, and digital marketing, written for Ugandan and East African businesses."
        variant="blog"
      />
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'56px 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:16, marginBottom:64 }}>
          {POSTS.map(p => (
            <HoverBlogCard key={p.slug} href={`/blog/${p.slug}`} tag={p.tag} tagColor={p.tagColor} tagBorder={p.tagBorder} readtime={p.read} title={p.title} desc={p.desc} date={p.date} />
          ))}
        </div>
        <div style={{ padding:'40px', border:'1px solid #1C1C34', borderRadius:20, background:'#0A0A16' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:32, alignItems:'center' }}>
            <div>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:20, color:'#E4E4F0', marginBottom:8 }}>Stay in the loop</p>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', lineHeight:1.7 }}>Monthly articles on design, SEO, and digital marketing for East African businesses. No spam.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
