'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const NAV = [
  { label: 'Services', href: '/services', children: [
    { label: 'Web Design & Development',        href: '/services/web-design' },
    { label: 'SEO & Digital Marketing',          href: '/services/seo-marketing' },
    { label: 'Branding & Graphic Design',        href: '/services/branding-design' },
    { label: 'Video, Animation & Image Editing', href: '/services/media-production' },
    { label: 'Architectural Visualisation',      href: '/services/architectural-visualisation' },
    { label: 'Cybersecurity & Data Services',    href: '/services/cybersecurity-data' },
  ]},
  { label: 'Portfolio', href: '/portfolio', children: [
    { label: 'All Work',            href: '/portfolio' },
    { label: 'Web Design',          href: '/portfolio/web-design' },
    { label: 'Branding & Graphics', href: '/portfolio/branding' },
    { label: 'Video & Animation',   href: '/portfolio/video' },
  ]},
  { label: 'About', href: '/about', children: [
    { label: 'Our Story', href: '/about/story' },
    { label: 'The Team',  href: '/about/team' },
    { label: 'Why Alffy', href: '/about/why' },
  ]},
  { label: 'Blog',    href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeDrop, setActiveDrop] = useState<string | null>(null)
  const [isMobile,   setIsMobile]   = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenuOpen(false); setActiveDrop(null) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openDrop  = (l: string) => { clearTimeout(timer.current); setActiveDrop(l) }
  const closeDrop = () => { timer.current = setTimeout(() => setActiveDrop(null), 140) }

  const navBg = scrolled
    ? 'rgba(4,4,12,0.94)'
    : menuOpen ? '#04040C' : 'transparent'

  return (
    <>
      <style>{`
        .nav-link:hover { color: #2C6FED !important; }
        .drop-link:hover { color: #2C6FED !important; background: rgba(44,111,237,0.06) !important; }
        .mob-link:hover { color: #2C6FED !important; }
        .nav-cta:hover { opacity: 0.88; transform: scale(0.98); }
        .ham-bar { display: block; width: 22px; height: 1.5px; background: #E4E4F0; border-radius: 1px; transition: all 0.32s cubic-bezier(0.16,1,0.3,1); }
      `}</style>

      <nav
        role="navigation"
        aria-label="Main"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          height: 68, display: 'flex', alignItems: 'center',
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(28,28,52,0.8)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div style={{
          width: '100%', maxWidth: 1440, margin: '0 auto',
          padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" aria-label="Alffy home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <Image src="/logo-nav.png" alt="Alffy" width={34} height={34} priority style={{ borderRadius: 6 }} />
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: '#E4E4F0', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Alffy
              <span style={{ fontWeight: 400, fontSize: 11, opacity: 0.45, marginLeft: 4 }}>(Alfinega)</span>
            </span>
          </Link>

          {/* Desktop links — hidden on mobile via JS state */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {NAV.map(item => (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => item.children && openDrop(item.label)}
                  onMouseLeave={closeDrop}
                >
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-haspopup={item.children ? 'true' : undefined}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '7px 13px', borderRadius: 8, textDecoration: 'none',
                      fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 400,
                      color: '#CCCCEE',
                      background: activeDrop === item.label ? 'rgba(255,255,255,0.05)' : 'transparent',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4, marginTop: 1, transition: 'transform 0.2s', transform: activeDrop === item.label ? 'rotate(180deg)' : 'none' }}>
                        <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDrop === item.label && (
                    <div
                      onMouseEnter={() => openDrop(item.label)}
                      onMouseLeave={closeDrop}
                      style={{
                        position: 'absolute', top: 'calc(100% + 6px)', left: 0,
                        background: '#0A0A16', border: '1px solid rgba(28,28,52,0.9)',
                        borderRadius: 14, overflow: 'hidden', minWidth: 230,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                        animation: 'fadeUp 0.22s cubic-bezier(0.16,1,0.3,1) forwards',
                      }}
                    >
                      {item.children.map(c => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="drop-link"
                          onClick={() => setActiveDrop(null)}
                          style={{
                            display: 'block', padding: '10px 16px', textDecoration: 'none',
                            fontFamily: "'Outfit',sans-serif", fontSize: 13, color: '#CCCCEE',
                            transition: 'color 0.18s, background 0.18s',
                          }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            {!isMobile && (
              <Link
                href="/contact"
                className="nav-cta"
                style={{
                  padding: '9px 22px', borderRadius: 100,
                  background: 'linear-gradient(135deg,#2C6FED,#1A52C4)',
                  color: '#fff', textDecoration: 'none',
                  fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13,
                  boxShadow: '0 0 22px rgba(44,111,237,0.28)',
                  transition: 'opacity 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
                  display: 'inline-block',
                }}
              >
                Get Started
              </Link>
            )}

            {/* Hamburger — only on mobile */}
            {isMobile && (
              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(p => !p)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 8, display: 'flex', flexDirection: 'column',
                  gap: 5, alignItems: 'center', justifyContent: 'center',
                }}
              >
                <span className="ham-bar" style={{ transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
                <span className="ham-bar" style={{ transform: menuOpen ? 'scaleX(0)' : 'none', opacity: menuOpen ? 0 : 1 }} />
                <span className="ham-bar" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMobile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed', inset: 0, zIndex: 190,
            background: '#04040C',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.38s cubic-bezier(0.16,1,0.3,1)',
            overflowY: 'auto',
            paddingTop: 68,
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div style={{ padding: '24px 28px', flex: 1 }}>
            {/* Nav items with staggered appear */}
            {NAV.map((item, i) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="mob-link"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block', padding: '14px 0',
                    borderBottom: '1px solid #111120', textDecoration: 'none',
                    fontFamily: "'Syne',sans-serif", fontWeight: 700,
                    fontSize: 'clamp(1.4rem,5vw,2rem)', color: '#E4E4F0',
                    transition: 'color 0.2s',
                    opacity: 0,
                    animation: menuOpen ? `fadeUp 0.5s ${0.05 + i * 0.06}s cubic-bezier(0.16,1,0.3,1) forwards` : 'none',
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>
                    {item.children.map((c, j) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="mob-link"
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: 'block', padding: '5px 0',
                          fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#6A6A8A',
                          textDecoration: 'none', transition: 'color 0.2s',
                          opacity: 0,
                          animation: menuOpen ? `fadeUp 0.5s ${0.12 + i * 0.06 + j * 0.03}s cubic-bezier(0.16,1,0.3,1) forwards` : 'none',
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact info */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #111120', opacity: 0, animation: menuOpen ? 'fadeUp 0.5s 0.5s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}>
              <a href="mailto:contact@alfinega.com" style={{ display: 'block', color: '#2C6FED', fontFamily: "'Outfit',sans-serif", fontSize: 15, textDecoration: 'none', marginBottom: 8 }}>
                contact@alfinega.com
              </a>
              <a href="tel:+256747113059" style={{ display: 'block', color: '#6A6A8A', fontFamily: "'Outfit',sans-serif", fontSize: 14, textDecoration: 'none', marginBottom: 20 }}>
                +256 747 113 059
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'inline-block', padding: '13px 32px', borderRadius: 100,
                  background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff',
                  fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14,
                  textDecoration: 'none',
                }}
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
