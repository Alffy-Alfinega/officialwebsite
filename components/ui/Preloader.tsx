'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#04040C',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.5s ease',
      }}
    >
      <span style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: '2.2rem', color: '#2C6FED',
        letterSpacing: '-0.03em', marginBottom: '1.5rem',
      }}>
        Alffy
      </span>
      <div style={{ width: 160, height: 2, background: '#1C1C34', borderRadius: 1, overflow: 'hidden' }}>
        <div style={{
          height: '100%', background: '#2C6FED', borderRadius: 1,
          transformOrigin: 'left', animation: 'preloaderBar 1.6s cubic-bezier(0.22,1,0.36,1) forwards',
        }} />
      </div>
    </div>
  )
}
