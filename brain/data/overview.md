# Data Layer (Removed)

> The `data/` directory was deleted (removed from disk in a cleanup pass). All static data is inlined into consuming pages and components. No shared data layer — each file owns its own copy.

## Where data lives

| Original | Inlined into | Business Reference |
|---|---|---|
| `data/services.ts` | `app/services/page.tsx`, `app/services/[slug]/page.tsx`, `components/sections/ServicesSection.tsx` | [[business/services]] |
| `data/team.ts` | `app/about/page.tsx`, `app/about/team/page.tsx` | [[business/team]] |
| `data/blog.ts` | `app/blog/page.tsx` | [[business/blog]] |
| `data/navigation.ts` | `components/nav/Navbar.tsx`, `components/layout/Footer.tsx` | [[components/overview]] |
| sitemap slugs | `app/sitemap.ts` (hardcoded) | [[routes/seo#Sitemap]] |

## Implications

| Dataset | Duplicated Across | Action Needed When Adding |
|---|---|---|
| **Services** | 4 places (page, slug, section, nav) | Update all 4 files |
| **Team** | 2 pages (about, team) | Update both files |
| **Blog** | 2 places (listing, content) | Update both files |
| **Nav links** | Navbar + Footer | Update both components |
| **ContactForm** | 1 place (its own list) | Update service list |
| **Sitemap slugs** | `app/sitemap.ts` | Add slug to hardcoded array |

The route map ([[routes/map]]) shows which pages consume which data. The component hierarchy ([[components/overview]]) shows which components render which data.
