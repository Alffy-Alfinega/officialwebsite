# Stack

See [[foundation/configuration]] for detailed config files and [[foundation/env]] for environment variables.

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.7 |
| Language | TypeScript (strict mode) | 5.9.3 |
| UI Library | React | 19.2.4 |
| Styling | Tailwind CSS | 3.4.19 — see [[foundation/design]] |
| PostCSS | autoprefixer | 10.4.27 |
| 3D/WebGL | React Three Fiber + drei + three | 9.5.0 / 10.7.7 / 0.183.2 — see [[components/r3f]] |
| Animation | Framer Motion | 12.36.0 — see [[foundation/design#Animations]] |
| Smooth Scroll | Lenis | 1.3.18 — see [[components/overview]] |
| Utilities | clsx + tailwind-merge | 2.1.1 / 2.6.1 |
| Email | Nodemailer | 8.0.2 — see [[apis/contact]] |
| Analytics | @vercel/analytics + @vercel/speed-insights | latest — see [[routes/analytics]] |
| Hosting | Vercel | — see [[foundation/infrastructure]] |
| Fonts | Syne (display) · Outfit (body) · JetBrains Mono (code) | Google Fonts — see [[foundation/design#Typography]] |

All dependencies are pinned in `package.json` (see [[foundation/configuration]]).
