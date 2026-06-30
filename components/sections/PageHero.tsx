'use client'

// PageHero — shared 3D header component for all non-home pages.
// Uses the correct height: 50vh with explicit pixel chain so react-babylonjs
// Engine canvas renders correctly. Never use min-h-* here.

import dynamic from 'next/dynamic'
import type { SceneVariant } from '@/components/3d/BabylonHero'

const BabylonHero = dynamic(() => import('@/components/3d/BabylonHero'), { ssr: false, loading: () => null })

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  variant?: SceneVariant
  height?: string
}

export default function PageHero({ eyebrow, title, subtitle, variant = 'home', height = '52vh' }: PageHeroProps) {
  return (
    <section
      style={{
        height,
        minHeight: 320,
        position: 'relative',
        overflow: 'hidden',
        background: '#04040C',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* 3D canvas — absolute fill, explicit height chain */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <BabylonHero variant={variant} />
      </div>

      {/* Blueprint grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(44,111,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(44,111,237,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Blue radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 300, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(44,111,237,0.1) 0%, transparent 70%)',
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 30%, rgba(4,4,12,0.85) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 1200, margin: '0 auto',
        padding: '0 40px 48px',
      }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#2C6FED',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12,
            opacity: 0, animation: 'fadeIn 0.8s 0.1s forwards',
          }}
        >
          {eyebrow}
        </p>
        <h1
          style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem,5.5vw,4.2rem)',
            lineHeight: 0.95, letterSpacing: '-0.03em',
            color: '#E4E4F0', marginBottom: subtitle ? 16 : 0,
            opacity: 0, animation: 'fadeUp 1s 0.2s cubic-bezier(0.16,1,0.3,1) forwards',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: "'Outfit',sans-serif", fontSize: 16, color: '#8A8AAA',
              maxWidth: 520, lineHeight: 1.7, fontWeight: 300,
              opacity: 0, animation: 'fadeUp 1s 0.38s cubic-bezier(0.16,1,0.3,1) forwards',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
