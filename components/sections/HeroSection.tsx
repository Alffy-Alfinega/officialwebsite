'use client'

import Link from 'next/link'
import BabylonHero from '@/components/3d/BabylonHero'

export default function HeroSection() {
  return (
    <section style={{ height: 'min(100vh, 880px)', minHeight: 560, position: 'relative', overflow: 'hidden', background: '#04040C' }}>

      {/* 3D background */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <BabylonHero variant="home" />
      </div>

      {/* Grid overlay */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 700, height: 500, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(44,111,237,0.1) 0%, transparent 70%)',
      }} />

      {/* Edge vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 0%, rgba(4,4,12,0.9) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        maxWidth: 1440, margin: '0 auto',
        padding: '0 40px 80px',
      }}>
        <div style={{ marginBottom: 24, opacity: 0, animation: 'fadeIn 1s 0.2s forwards' }}>
          <span className="tag tag-blue">Kampala, Uganda · Est. 2025</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-syne, 'Syne', sans-serif)",
          fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          marginBottom: 32,
          color: '#E4E4F0',
          opacity: 0,
          animation: 'fadeUp 1.2s 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          Your Digital<br />
          <span className="blue-glow" style={{ color: '#2C6FED' }}>Agency</span><br />
          in Kampala.
        </h1>

        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32,
          opacity: 0, animation: 'fadeUp 1.1s 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          <div style={{ maxWidth: 420 }}>
            <p style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)", fontSize: 17, color: '#CCCCEE', lineHeight: 1.65, marginBottom: 24, fontWeight: 300 }}>
              We build websites, grow search rankings, define brand identities, and produce compelling media — all in-house from Kampala.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                padding: '14px 32px', borderRadius: 100, textDecoration: 'none',
                background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff',
                fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 600, fontSize: 14,
                boxShadow: '0 0 30px rgba(44,111,237,0.35)',
              }}>Start a Project</Link>
              <Link href="/services" style={{
                padding: '14px 32px', borderRadius: 100, textDecoration: 'none',
                border: '1px solid #1C1C34', color: '#CCCCEE',
                fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 600, fontSize: 14,
              }}>Our Services</Link>
            </div>
          </div>

          {/* Stats — real facts only */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
            {[
              { value: '8',   label: 'Live Client Sites' },
              { value: '6',   label: 'Services In-House' },
              { value: '24/7', label: 'Support Available' },
              { value: '5★',  label: 'Service Standard', gold: true },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 800, fontSize: 36,
                  color: s.gold ? '#D4A843' : '#2C6FED', lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <p style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 10, color: '#6A6A8A', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 28, right: 40, zIndex: 10, display: 'flex', alignItems: 'center', gap: 8, opacity: 0.4 }}>
        <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 10, color: '#9A9ABB', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: '#1C1C34', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: '#2C6FED', animation: 'scrollDrop 2s ease-in-out infinite' }} />
        </div>
        <style>{`@keyframes scrollDrop{0%{transform:translateY(-100%);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateY(300%);opacity:0}}`}</style>
      </div>
    </section>
  )
}
