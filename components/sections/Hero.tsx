// =============================================================================
// Hero.tsx — Home page hero section
// Purpose: First thing visitors see on the landing page. Features a full-screen
// 3D Babylon.js scene as background, animated headline with staggered fade-in,
// call-to-action buttons, and a stats counter bar showing yearly targets.
// =============================================================================

'use client'

// Next.js Link — client-side navigation between pages without full refresh
import Link from 'next/link'
// useState: stores values that persist across renders (like the animated counter)
// useRef: references DOM elements without causing re-renders
// useEffect: runs side-effect code (like setting up observers) after component renders
import { useEffect, useRef, useState } from 'react'
// BabylonScene: the 3D WebGL canvas rendered behind the hero content
import { BabylonScene } from '@/components/3d/BabylonScene'

// ---------------------------------------------------------------------------
// AnimatedCounter — counts from 0 up to a target number when it scrolls into view
// Uses IntersectionObserver to start the animation only once
// ---------------------------------------------------------------------------
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  // count: the current displayed number, updates every ~28ms during animation
  const [count, setCount] = useState(0)
  // ref: attaches to the <span> so we can observe when it's visible
  const ref = useRef<HTMLSpanElement>(null)
  // started: prevents the animation from re-triggering (stored in ref so it doesn't cause re-renders)
  const started = useRef(false)

  // Set up IntersectionObserver — triggers counter animation once element is visible
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // IntersectionObserver: browser API that detects when an element enters the viewport
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Only start counting if the element is visible AND we haven't started yet
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          // Divide target into 50 steps for smooth animation
          const step = target / 50
          // setInterval: runs every 28ms to increment the count
          const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else { setCount(Math.floor(start)) }
          }, 28)
        }
      },
      // threshold: 0.1 means fire when 10% of the element is visible
      { threshold: 0.1 }
    )
    obs.observe(el)
    // Cleanup: disconnect observer when component unmounts (prevents memory leaks)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className="stat-number text-4xl md:text-5xl">
      {count}{suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    // Main hero container: full viewport height, dark background
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden" style={{ background: '#04040C' }}>
      {/* 3D canvas layer — renders Babylon.js scene as full-screen background */}
      <div className="absolute inset-0">
        <BabylonScene />
      </div>

      {/* Grid line overlay — subtle background grid for visual texture */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      {/* Blue radial glow behind headline — decorative light effect behind text */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(44,111,237,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Vignette overlay — darkens edges to draw focus toward center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #04040C 100%)' }}
      />

      {/* Foreground content — stacked at the bottom of the screen */}
      <div className="relative z-10 flex flex-col justify-end pb-20 px-6 md:px-16 lg:px-24 min-h-screen max-w-[1440px] mx-auto w-full pt-[68px]">

        {/* Pre-label — location tag that fades in first */}
        <div className="mb-6 opacity-0 animate-[fadeIn_1.2s_0.1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <span className="tag active">Kampala, Uganda · Est. 2025</span>
        </div>

        {/* Big headline — three lines that fade up with staggered delays */}
        <h1
          className="font-syne font-extrabold leading-[0.9] tracking-[-0.03em] mb-8 uppercase"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
        >
          <span className="block text-white opacity-0 animate-[fadeUp_1.4s_0.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">Your Digital</span>
          <span className="block blue-glow opacity-0 animate-[fadeUp_1.4s_0.38s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ color: '#2C6FED' }}>Agency</span>
          <span className="block text-white opacity-0 animate-[fadeUp_1.4s_0.54s_cubic-bezier(0.16,1,0.3,1)_forwards]">in Kampala.</span>
        </h1>

        {/* Sub-row — description paragraph + CTA buttons side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 opacity-0 animate-[fadeUp_1.2s_0.72s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <p className="max-w-md font-outfit font-light text-lg text-[#CCCCEE] leading-relaxed">
            We build professional websites, grow search rankings, define brand identities,
            and produce compelling media — all in-house from Kampala, Uganda.
          </p>
          {/* Call-to-action button group */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="px-8 py-4 font-syne font-semibold text-sm text-white rounded-full text-center transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 font-syne font-semibold text-sm border border-[#1C1C34] text-[#ccc] rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors duration-300 text-center"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats bar — animated counters for yearly targets, fades in last */}
        <div className="mt-16 pt-8 border-t border-[#1C1C34] opacity-0 animate-[fadeIn_1.4s_1.0s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#2C6FED' }} />
            <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest">2026 Year 1 Targets</span>
          </div>
          {/* 4-column grid of stats — each counter animates on scroll */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <AnimatedCounter target={50} suffix="+" />
              <p className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mt-1">Projects Goal</p>
            </div>
            <div>
              <AnimatedCounter target={95} suffix="%" />
              <p className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mt-1">Satisfaction Target</p>
            </div>
            <div>
              <span className="stat-number text-4xl md:text-5xl">24/7</span>
              <p className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mt-1">Support Available</p>
            </div>
            <div>
              <span className="stat-number text-4xl md:text-5xl" style={{ color: '#D4A843' }}>5★</span>
              <p className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mt-1">Service Standard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — animated bar at bottom-right, hints user to scroll down */}
      <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] text-[#9A9ABB] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-[#222] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full"
            style={{ height: '40%', background: '#2C6FED', animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* In-page keyframe for the scroll indicator animation */}
      <style jsx>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
