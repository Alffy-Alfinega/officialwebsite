'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Services', href: '/services', children: [
    { label: 'Web Design & Development',       href: '/services/web-design' },
    { label: 'SEO & Digital Marketing',         href: '/services/seo-marketing' },
    { label: 'Branding & Graphic Design',       href: '/services/branding-design' },
    { label: 'Video, Animation & Image Editing',href: '/services/media-production' },
    { label: 'Architectural Visualisation',     href: '/services/architectural-visualisation' },
    { label: 'Cybersecurity & Data Services',   href: '/services/cybersecurity-data' },
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
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeDrop,setActiveDrop]= useState<string|null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>|undefined>(undefined)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const open  = (l: string) => { clearTimeout(timer.current); setActiveDrop(l) }
  const close = ()          => { timer.current = setTimeout(() => setActiveDrop(null), 130) }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 68,
        display: 'flex', alignItems: 'center',
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(4,4,12,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1C1C34' : '1px solid transparent',
      }}>
        <div style={{ maxWidth:1440, width:'100%', margin:'0 auto', padding:'0 40px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
            <Image src="/logo-nav.png" alt="Alffy logo" width={36} height={36} priority />
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:15, color:'#E4E4F0', letterSpacing:'-0.02em' }}>
              Alffy <span style={{ fontWeight:400, fontSize:12, opacity:0.5 }}>(Alfinega)</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display:'flex', alignItems:'center', gap:4 }} className="hidden md:flex">
            {NAV.map(item => (
              <div key={item.label} style={{ position:'relative' }}
                onMouseEnter={() => item.children && open(item.label)}
                onMouseLeave={close}
              >
                <Link href={item.href} style={{
                  display:'flex', alignItems:'center', gap:4,
                  padding:'8px 14px', borderRadius:8, textDecoration:'none',
                  fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#CCCCEE',
                  background: activeDrop===item.label ? 'rgba(255,255,255,0.04)' : 'transparent',
                  transition:'color 0.2s, background 0.2s',
                }}>
                  {item.label}
                  {item.children && <span style={{ fontSize:9, opacity:0.5 }}>▾</span>}
                </Link>
                {item.children && activeDrop === item.label && (
                  <div
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={close}
                    style={{
                      position:'absolute', top:'100%', left:0, marginTop:4,
                      background:'#0A0A16', border:'1px solid #1C1C34',
                      borderRadius:12, overflow:'hidden', minWidth:220,
                      boxShadow:'0 16px 48px rgba(0,0,0,0.6)',
                    }}
                  >
                    {item.children.map(c => (
                      <Link key={c.href} href={c.href} onClick={() => setActiveDrop(null)} style={{
                        display:'block', padding:'10px 16px', textDecoration:'none',
                        fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#CCCCEE',
                        transition:'color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color='#2C6FED')}
                      onMouseLeave={e => (e.currentTarget.style.color='#CCCCEE')}
                      >{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <Link href="/contact" className="hidden md:block" style={{
              padding:'9px 22px', borderRadius:100,
              background:'linear-gradient(135deg,#2C6FED,#1A52C4)',
              color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:13,
              textDecoration:'none', boxShadow:'0 0 20px rgba(44,111,237,0.3)',
            }}>
              Get Started
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background:'none', border:'none', cursor:'pointer', padding:8, display:'flex', flexDirection:'column', gap:5 }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display:'block', width:22, height:1.5, background:'#E4E4F0', borderRadius:1,
                  transition:'all 0.3s',
                  transform: menuOpen
                    ? i===0 ? 'rotate(45deg) translate(4px,4px)' : i===2 ? 'rotate(-45deg) translate(4px,-4px)' : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className="md:hidden" style={{
        position:'fixed', inset:0, zIndex:90, background:'#04040C',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        paddingTop:68, overflowY:'auto',
      }}>
        <div style={{ padding:'24px 28px' }}>
          {NAV.map(item => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setMenuOpen(false)} style={{
                display:'block', padding:'14px 0',
                borderBottom:'1px solid #1C1C34', textDecoration:'none',
                fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#E4E4F0',
              }}>{item.label}</Link>
              {item.children && (
                <div style={{ paddingLeft:16, paddingTop:8, paddingBottom:8 }}>
                  {item.children.map(c => (
                    <Link key={c.href} href={c.href} onClick={() => setMenuOpen(false)} style={{
                      display:'block', padding:'6px 0',
                      fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', textDecoration:'none',
                    }}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop:32, paddingTop:24, borderTop:'1px solid #1C1C34' }}>
            <a href="mailto:contact@alfinega.com" style={{ display:'block', color:'#2C6FED', fontFamily:"'Outfit',sans-serif", marginBottom:8, textDecoration:'none' }}>contact@alfinega.com</a>
            <a href="tel:+256747113059" style={{ display:'block', color:'#8A8AAA', fontFamily:"'Outfit',sans-serif", textDecoration:'none' }}>+256 747 113 059</a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
              display:'inline-block', marginTop:20, padding:'12px 28px', borderRadius:100,
              background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff',
              fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, textDecoration:'none',
            }}>Start a Project →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
