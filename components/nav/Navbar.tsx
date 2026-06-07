'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Website Design',      href: '/services/website-design' },
      { label: 'SEO Services',         href: '/services/seo-services' },
      { label: 'Graphic Design',       href: '/services/graphic-design' },
      { label: 'Branding',             href: '/services/branding' },
      { label: 'Digital Marketing',    href: '/services/digital-marketing' },
      { label: 'Video Editing',        href: '/services/video-editing' },
      { label: 'Image Editing',        href: '/services/image-editing' },
      { label: '2D & 3D Animation',    href: '/services/animation' },
      { label: 'Architectural Design', href: '/services/architectural-design' },
      { label: 'Content Creation',     href: '/services/content-creation' },
      { label: 'Cybersecurity',        href: '/services/cybersecurity' },
      { label: 'Mass Data Entry',      href: '/services/data-entry' },
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
  { label: 'Blog',    href: '/blog' },
  { label: 'Contact', href: '/contact' },
]
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const openDrop = (label: string) => {
    clearTimeout(dropdownTimer.current)
    setActiveDropdown(label)
  }
  const closeDrop = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
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

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Alffy (Alfinega) — Home">
            <Image
              src="/logo-nav.png"
              alt="Alffy (Alfinega) logo"
              width={36}
              height={36}
              className="transition-all duration-300 group-hover:opacity-85"
              priority
            />
            <span className="font-syne font-bold text-[15px] tracking-tight select-none" style={{ color: 'var(--text)' }}>
              Alffy <span className="opacity-50 font-normal text-[12px]">(Alfinega)</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.slice(0, -1).map((link) => (
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
                  {link.children && <span className="ml-1 text-[10px] opacity-50" aria-hidden="true">▾</span>}
                </Link>

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

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:block text-sm font-outfit transition-colors hover:text-[#2C6FED]"
              style={{ color: 'var(--text-faint)' }}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2 text-sm font-syne font-semibold rounded-full text-white transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)', boxShadow: '0 0 16px rgba(44,111,237,0.25)' }}
            >
              Get Started
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && 'rotate-45 translate-y-[6.5px]')} style={{ background: 'var(--text)' }} />
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && 'opacity-0')} style={{ background: 'var(--text)' }} />
              <span className={cn('block w-5 h-[1.5px] transition-all duration-300', menuOpen && '-rotate-45 -translate-y-[6.5px]')} style={{ background: 'var(--text)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 flex flex-col pt-[68px] transition-transform duration-300',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ background: 'var(--bg)' }}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8">
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

          <div className="mt-8 space-y-3 pb-8">
            <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-faint)' }}>Get in touch</p>
            <a href="mailto:hello@alfinega.com" className="block font-outfit" style={{ color: '#2C6FED' }}>hello@alfinega.com</a>
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
