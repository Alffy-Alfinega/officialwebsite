/**
 * BlogSchema — renders Article structured data for blog posts.
 *
 * Add to every blog page:
 *   <BlogSchema
 *     title="..."
 *     description="..."
 *     slug="why-your-ugandan-business-needs-a-website"
 *     datePublished="2026-06-15"
 *     dateModified="2026-06-29"
 *   />
 */
interface BlogSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
}

const BASE = 'https://alffy.alfinega.com'

export default function BlogSchema({ title, description, slug, datePublished, dateModified }: BlogSchemaProps) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'Alffy (Alfinega)',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alffy (Alfinega)',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` },
    image: `${BASE}/og-image.png`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
