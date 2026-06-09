// ============================================================
// Portfolio Branding Sub-page — Placeholder that redirects
// This page is a stub that immediately redirects visitors back
// to the main /portfolio page. It exists as a potential future
// URL for a filtered "Branding" portfolio view.
// Route: /portfolio/branding
// ============================================================

// Import Metadata for setting page-level meta tags
import type { Metadata } from 'next'

// Import redirect from Next.js navigation — tells the browser
// to go to a different URL immediately
import { redirect } from 'next/navigation'

// Metadata: tell search engines not to index this page
// (index: false) and not to follow links on it (follow: false)
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

// The page component — immediately redirects to /portfolio
export default function Page() { redirect('/portfolio') }
