'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const v = localStorage.getItem('alffy-cookies')
      if (v === 'accepted') { gtag('consent', 'update', { analytics_storage: 'granted' }); return }
      if (!v) setShow(true)
    } catch { setShow(false) }
  }, [])

  const accept = () => {
    try { localStorage.setItem('alffy-cookies', 'accepted') } catch {}
    gtag('consent', 'update', { analytics_storage: 'granted' })
    setShow(false)
  }

  const decline = () => {
    try { localStorage.setItem('alffy-cookies', 'declined') } catch {}
    setShow(false)
  }

  if (!show) return null

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9000,
      background: '#0F0F1E', border: '1px solid #1C1C34',
      borderRadius: 16, padding: 20, maxWidth: 340,
      boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
    }}>
      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#9A9ABB', lineHeight: 1.6, marginBottom: 14 }}>
        We use analytics cookies to improve your experience.{' '}
        <Link href="/privacy-policy" style={{ color: '#2C6FED' }}>Privacy Policy</Link>.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={accept} style={{
          flex: 1, padding: '8px 0', borderRadius: 8, border: 'none', cursor: 'pointer',
          background: '#2C6FED', color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13,
        }}>Accept</button>
        <button onClick={decline} style={{
          flex: 1, padding: '8px 0', borderRadius: 8, cursor: 'pointer',
          background: 'transparent', border: '1px solid #1C1C34', color: '#9A9ABB',
          fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13,
        }}>Decline</button>
      </div>
    </div>
  )
}
