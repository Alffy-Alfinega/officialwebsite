import type { MetadataRoute } from 'next'
const B = 'https://alffy.alfinega.com'
const now = new Date()
export default function sitemap(): MetadataRoute.Sitemap {
  const s = (p: string, pri = 0.7, freq: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') =>
    ({ url: `${B}${p}`, lastModified: now, changeFrequency: freq, priority: pri })
  return [
    s('/',1.0,'weekly'), s('/services',0.9), s('/contact',0.9), s('/about',0.8),
    s('/portfolio',0.8,'weekly'), s('/pricing',0.8), s('/blog',0.8,'weekly'), s('/careers',0.6),
    s('/services/web-design'), s('/services/seo-marketing'), s('/services/branding-design'),
    s('/services/media-production'), s('/services/architectural-visualisation'), s('/services/cybersecurity-data'),
    s('/about/story',0.6), s('/about/team',0.6), s('/about/why',0.6),
    s('/portfolio/web-design',0.6), s('/portfolio/branding',0.6), s('/portfolio/video',0.6),
    s('/blog/why-your-ugandan-business-needs-a-website',0.6), s('/blog/local-seo-kampala',0.6),
    s('/blog/branding-kampala-startup',0.6), s('/blog/meta-ads-east-africa-2026',0.6),
    s('/blog/nextjs-vs-wordpress-africa',0.6), s('/blog/core-web-vitals-guide',0.6),
    s('/privacy-policy',0.3,'yearly'), s('/terms',0.3,'yearly'), s('/data-handling',0.3,'yearly'),
  ]
}
