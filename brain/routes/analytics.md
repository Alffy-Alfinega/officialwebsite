# Analytics

| Provider | Method | Details |
|---|---|---|
| Google Analytics 4 | `gtag.js` via `next/script` with consent mode | ID: `G-5EKJN7MWHC` |
| Vercel Analytics | `<Analytics />` component | Auto from `@vercel/analytics/next` |
| Vercel Speed Insights | `<SpeedInsights />` component | Auto from `@vercel/speed-insights/next` |

All are loaded in the root layout (see [[components/overview#Hierarchy]]). The CSP in [[foundation/infrastructure]] is configured to allow GA and Vercel script sources.

## GA Consent Mode v2

1. `beforeInteractive` script defaults `analytics_storage` and `ad_storage` to `'denied'`
2. Main `gtag.js` loads normally (`afterInteractive`)
3. Config runs `gtag('config', 'G-5EKJN7MWHC', { page_location })`
4. On user Accept: `CookieBanner` calls `gtag('consent', 'update', { analytics_storage: 'granted' })`
5. On reload with stored `'accepted'`: consent re-granted at mount
6. Type declarations in `types/gtag.d.ts` (see [[foundation/configuration#Type Declarations]])

## Cookie Consent

`CookieBanner` component (see [[components/overview#UI Components]]):
- Checks `localStorage.getItem('alffy-cookies')`
- If unset → shows Accept / Decline
- Accept: stores `'accepted'` + grants GA consent
- Decline: stores `'declined'` (consent stays denied)
- On mount: if previously accepted, re-grants consent

Cookie usage is documented in the privacy policy — see [[business/legal#Cookie Usage]].

## IndexNow

See [[apis/indexnow]] — search engine ping triggered by CI/CD ([[foundation/infrastructure#CI/CD]]).
