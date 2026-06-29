import { MetadataRoute } from 'next'

const serviceSlugs = [
  'web-design', 'seo-marketing', 'branding-design',
  'media-production', 'architectural-visualisation', 'cybersecurity-data',
]

const blogSlugs = [
  'why-your-ugandan-business-needs-a-website', 'local-seo-kampala',
  'branding-kampala-startup', 'meta-ads-east-africa-2026',
  'nextjs-vs-wordpress-africa', 'core-web-vitals-guide',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alffy.alfinega.com'
  const now  = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                     lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/story`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/team`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/why`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/portfolio`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/pricing`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/careers`,        lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/data-handling`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
