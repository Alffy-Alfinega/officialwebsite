# Data Layer (Removed)

> The `data/` directory was deleted (removed from disk in a cleanup pass). All static data is inlined into consuming pages and components. No shared data layer — each file owns its own copy.

## Where data lives

| Original | Inlined into | Business Reference |
|---|---|---|
| `data/services.ts` | `app/services/page.tsx`, `app/services/{6-categories}/page.tsx` (each has full array), `components/sections/ServicesSection.tsx` | [[business/services]] |
| `data/team.ts` | `app/about/page.tsx`, `app/about/team/page.tsx` | [[business/team]] |
| `data/blog.ts` | `app/blog/blog-content.tsx` (listing) + each `app/blog/{slug}/page.tsx` (content + display metadata) | [[business/blog]] |
| `data/navigation.ts` | `components/nav/Navbar.tsx`, `components/layout/Footer.tsx` | [[components/overview]] |
| sitemap slugs | `app/sitemap.ts` (hardcoded) | [[routes/seo#Sitemap]] |

## Implications

| Dataset | Duplicated Across | Action Needed When Adding |
|---|---|---|
| **Services** | 8+ places (listing, 6 category pages all have full array, section, nav, footer, sitemap, layout.tsx structured data, pricing, blog sidebars) | Update ALL files — see [[business/services]] |
| **Team** | 2 pages (about, team) | Update both files |
| **Blog** | 7+ places (listing array + 6 individual page metadata + content) | Update slug in listing + create page file |
| **Nav links** | Navbar + Footer | Update both components |
| **ContactForm** | 1 place (own list) | Update service list |
| **Sitemap slugs** | `app/sitemap.ts` | Add/remove slug from hardcoded array |

The route map ([[routes/map]]) shows which pages consume which data. The component hierarchy ([[components/overview]]) shows which components render which data.
