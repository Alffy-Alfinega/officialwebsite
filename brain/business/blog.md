# Blog (6 published)

Rendered on [[routes/map#Page Routes\|/blog]] (listing) and `/blog/{slug}` (individual page files, no dynamic `[slug]` routing).

| Title | Category | Date | Read Time | Slug |
|---|---|---|---|---|
| Why Every Ugandan SME Needs a Professional Website in 2026 | Web Design | Feb 12, 2026 | 6 min | `why-your-ugandan-business-needs-a-website` |
| How to Dominate Local SEO in Kampala: A Practical Guide | SEO Tips | Jan 28, 2026 | 9 min | `local-seo-kampala` |
| How Good Branding Helped a Kampala Startup Grow 3x | Branding | Jan 14, 2026 | 7 min | `branding-kampala-startup` |
| Running Meta Ads in East Africa: What Works in 2026 | Digital Marketing | Jan 5, 2026 | 8 min | `meta-ads-east-africa-2026` |
| Next.js vs WordPress: Which Is Right for Your Business? | Web Design | Dec 18, 2025 | 8 min | `nextjs-vs-wordpress-africa` |
| Core Web Vitals Explained for Non-Developers | SEO Tips | Dec 5, 2025 | 10 min | `core-web-vitals-guide` |

## Content architecture
- Listing: `app/blog/blog-content.tsx` — `use client` component with blog post array + category filter
- Each post: `app/blog/{slug}/page.tsx` — hardcoded content array rendered by `Block` helper component
- Same template structure across all posts (hero with BabylonScene, sidebar with ToC, author card, CTA)
- Content expanded in 2026-06-05 pass with 1-2 additional sections per post

## Data duplication
- Listing array in `app/blog/blog-content.tsx`
- Display metadata (`post` object) in each `app/blog/{slug}/page.tsx`
- Content array in each `app/blog/{slug}/page.tsx`
- Read times and slugs must match between listing and individual pages

See [[data/overview]] for full duplication map.
