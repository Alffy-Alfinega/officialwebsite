// ============================================================
// Navbar – top navigation bar that appears on every page.
//
// Features:
//   - Fixed at top with transparent background, turns solid
//     + blurred on scroll.
//   - Desktop: horizontal links with dropdown menus on hover.
//   - Mobile: hamburger button toggles an overlay menu.
//   - Closes on Escape key or link click.
//   - Locks body scroll when mobile menu is open.
// ============================================================

// 'use client' — this component uses browser‑only features
// (scroll events, refs, state).
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// Navigation link data. Links with a `children` array render as
// dropdown menus on desktop and expandable sub‑lists on mobile.
const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Design & Development',      href: '/services/web-design' },
      { label: 'SEO & Digital Marketing',        href: '/services/seo-marketing' },
      { label: 'Branding & Graphic Design',      href: '/services/branding-design' },
      { label: 'Video, Animation & Image Edits', href: '/services/media-production' },
      { label: 'Architectural Visualisation',    href: '/services/architectural-visualisation' },
      { label: 'Cybersecurity & Data Services',  href: '/services/cybersecurity-data' },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'All Work',            href: '/portfolio' },
      { label: 'Web Design',          href: '/portfolio/web-design' },
      { label: 'Branding & Graphics', href: '/portfolio/branding' },
      { label: 'Video & Animation',   href: '/portfolio/video' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story',  href: '/about/story' },
      { label: 'The Team',   href: '/about/team' },
      { label: 'Why Alffy',  href: '/about/why' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
]

// Utility function for conditional class names.
import { cn } from '@/lib/utils'

export default function Navbar() {
  // ---- State variables ----
  // Whether the user has scrolled past 40px (used to show
  // the solid/blurred background).
  const [scrolled, setScrolled] = useState(false)
  // Whether the mobile menu overlay is open.
  const [menuOpen, setMenuOpen] = useState(false)
  // Which dropdown label is currently expanded (null = none).
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  // Timer ref for the dropdown close delay (gives user time
  // to move from parent to child menu).
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // ---- Effects ----

  // Listen for scroll events to toggle `scrolled` state.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when the user presses Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock/unlock body scroll when mobile menu toggles.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    // Reset on unmount so scroll isn't left locked.
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ---- Dropdown helpers ----

  // Show a dropdown immediately (cancels any pending close).
  const openDrop = (label: string) => {
    clearTimeout(dropdownTimer.current)
    setActiveDropdown(label)
  }
  // Hide the dropdown after a 120ms delay – this gives the
  // cursor time to travel from the parent <li> into the
  // dropdown <div> without the menu disappearing.
  const closeDrop = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      {/* ---- Desktop / mobile nav bar ---- */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
        )}
        style={scrolled ? { background: 'var(--bg-nav)', borderColor: 'var(--border)' } : {}}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">

          {/* ---- Logo ---- */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Alffy (Alfinega) — Home">
            <Image
              src="/logo-nav.png"
              alt="Alffy (Alfinega) logo"
              width={36}
              height={36}
              className="transition-all duration-300 group-hover:opacity-85"
              priority   // Load immediately; this is above the fold
            />
            <span className="font-syne font-bold text-[15px] tracking-tight select-none" style={{ color: 'var(--text)' }}>
              Alffy <span className="opacity-50 font-normal text-[12px]">(Alfinega)</span>
            </span>
          </Link>

          {/* ---- Desktop links (hidden on mobile) ---- */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && openDrop(link.label)}
                onMouseLeave={closeDrop}
                role="none"
              >
                <Link
                  href={link.href}
                  role="menuitem"
                  aria-haspopup={link.children ? 'menu' : undefined}
                  aria-expanded={activeDropdown === link.label ? 'true' : undefined}
                  className={cn(
                    'px-4 py-2 text-sm font-outfit hover:text-white transition-colors rounded-md hover:bg-white/5',
                    activeDropdown === link.label && 'bg-white/5'
                  )}
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label}
                  {/* Dropdown indicator arrow */}
                  {link.children && <span className="ml-1 text-[10px] opacity-50" aria-hidden="true">▾</span>}
                </Link>

                {/* Dropdown sub‑menu (only when active). The
                    onMouseEnter/Leave overrides the parent's
                    timers so the menu stays open while hovering
                    the sub‑items. */}
                {link.children && activeDropdown === link.label && (
                  <div
                    role="menu"
                    className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden shadow-2xl min-w-[200px] border"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                    onMouseEnter={() => openDrop(link.label)}
                    onMouseLeave={closeDrop}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="flex items-center px-4 py-2.5 text-sm hover:text-[#2C6FED] transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ---- Right side: Contact link + CTA + hamburger ---- */}
          <div className="flex items-center gap-3">
            {/* Desktop‑only "Get Started" button (gradient) */}
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2 text-sm font-syne font-semibold rounded-full text-white transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)', boxShadow: '0 0 16px rgba(44,111,237,0.25)' }}
            >
              Get Started
            </Link>

            {/* ---- Mobile hamburger button ---- */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {/* Three horizontal bars that animate into an X
                  when `menuOpen` is true. */}
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && 'rotate-45 translate-y-[6.5px]')} style={{ background: 'var(--text)' }} />
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && 'opacity-0')} style={{ background: 'var(--text)' }} />
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && '-rotate-45 -translate-y-[6.5px]')} style={{ background: 'var(--text)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ---- Mobile menu overlay ---- */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 flex flex-col pt-[68px] transition-transform duration-300',
          menuOpen ? 'translate-x-0' : 'translate-x-full'   // Slide in from the right
        )}
        style={{ background: 'var(--bg)' }}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {/* Render every nav link as a full‑width row. */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-syne font-semibold text-2xl border-b hover:text-[#2C6FED] transition-colors"
                  style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
                >
                  {link.label}
                </Link>
                {/* Sub‑links indented below the parent. */}
                {link.children && (
                  <div className="pl-4 mt-2 mb-3 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1.5 text-sm hover:text-[#2C6FED] transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact info + CTA at the bottom of the mobile menu. */}
          <div className="mt-8 space-y-3 pb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-faint)' }}>Get in touch</p>
             <a href="mailto:contact@alfinega.com" className="block font-outfit" style={{ color: '#2C6FED' }}>contact@alfinega.com</a>
            <a href="tel:+256747113059" className="block font-outfit transition-colors hover:text-white" style={{ color: 'var(--text-muted)' }}>+256 747 113 059</a>
            <p className="font-outfit text-sm" style={{ color: 'var(--text-dimmer)' }}>Makindye, Kampala, Uganda</p>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-4 px-6 py-3 font-syne font-semibold text-sm text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
