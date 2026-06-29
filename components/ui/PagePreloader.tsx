'use client'

import { useEffect } from 'react'

export default function PagePreloader() {
  useEffect(() => {
    const el = document.getElementById('preloader')
    if (!el) return
    const timer = setTimeout(() => {
      el.style.opacity = '0'
      el.style.pointerEvents = 'none'
      setTimeout(() => el.remove(), 700)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#04040C',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        transition: 'opacity 0.6s ease',
      }}
    >
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '2.5rem',
        color: '#2C6FED',
        letterSpacing: '-0.03em',
        marginBottom: '1.25rem',
      }}>
        Alffy
      </span>
      <div style={{
        width: '180px', height: '2px',
        background: '#1C1C34',
        borderRadius: '1px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: '#2C6FED',
          borderRadius: '1px',
          transformOrigin: 'left center',
          animation: 'preloaderBar 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }} />
      </div>
    </div>
  )
}
