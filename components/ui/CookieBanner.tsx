// ============================================================
// Cookie Banner – GDPR‑style consent dialogue.
//
// Appears at the bottom‑left (or bottom‑right on wider
// screens) when the user hasn't yet accepted or declined
// cookies. Once a choice is made, it updates Google Analytics
// consent state and stores the preference in localStorage so
// the banner doesn't show again.
// ============================================================

// 'use client' — uses browser‑only APIs (localStorage, gtag).
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  // Controls whether the banner is visible to the user.
  const [visible, setVisible] = useState(false)

  // On mount, check localStorage to see if the user already
  // made a choice. If they accepted, immediately grant GA
  // consent. If no choice exists, show the banner.
  useEffect(() => {
    try {
      const status = localStorage.getItem('alffy-cookies')
      if (status === 'accepted') {
        // User already accepted in a previous visit — grant
        // analytics storage so GA starts tracking.
        gtag('consent', 'update', { analytics_storage: 'granted' })
      } else if (!status) {
        // No choice recorded — show the banner.
        setVisible(true)
      }
      // If status === 'declined', do nothing — banner stays
      // hidden and analytics remain denied.
    } catch {
      // localStorage might be unavailable (private browsing,
      // storage quota exceeded, etc.). Hide the banner to
      // avoid blocking the UI.
      setVisible(false)
    }
  }, [])

  // Accept handler: store choice, grant consent, hide banner.
  const accept = () => {
    try { localStorage.setItem('alffy-cookies', 'accepted') } catch {}
    // Tell Google Analytics the user consented.
    gtag('consent', 'update', { analytics_storage: 'granted' })
    setVisible(false)
  }

  // Decline handler: store choice, hide banner (consent stays
  // "denied" from the default set in layout.tsx).
  const decline = () => {
    try { localStorage.setItem('alffy-cookies', 'declined') } catch {}
    setVisible(false)
  }

  // If not visible, render nothing to keep the DOM clean.
  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-desc"
      // Fixed to viewport – bottom‑left on mobile, bottom‑right
      // on md+ screens, with a high z‑index so it sits above
      // everything.
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-9999"
      style={{
        background: '#0F0F1E',
        border: '1px solid #1C1C34',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
      }}
    >
      {/* Descriptive text with a link to the privacy policy.
          `id="cookie-desc"` matches `aria-describedby` for
          accessibility. */}
      <p id="cookie-desc" className="font-outfit text-sm text-[#AAA] leading-relaxed mb-4">
        We use cookies for analytics and to improve your experience. See our{' '}
        <Link href="/privacy-policy" className="text-[#2C6FED] hover:text-white underline underline-offset-2 transition-colors">
          Privacy Policy
        </Link>.
      </p>
      {/* Two action buttons side by side. */}
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 py-2 px-4 rounded-lg font-syne font-semibold text-sm bg-[#2C6FED] text-white hover:bg-[#1A52C4] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 py-2 px-4 rounded-lg font-syne font-semibold text-sm border border-[#1C1C34] text-[#9A9ABB] hover:text-white hover:border-[#333] transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
