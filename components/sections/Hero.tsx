'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const HeroCanvas = dynamic(
  () => import('@/components/r3f/HeroCanvas').then((m) => m.HeroCanvas),
  { ssr: false, loading: () => null }
)

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = target / 50
          const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else { setCount(Math.floor(start)) }
          }, 28)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
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
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden" style={{ background: '#04040C' }}>
      {/* R3F Canvas */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Grid line overlay */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      {/* Blue radial glow behind headline */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(44,111,237,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #04040C 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end pb-20 px-6 md:px-16 lg:px-24 min-h-screen max-w-[1440px] mx-auto w-full pt-[68px]">

        {/* Pre-label */}
        <div className="mb-6 opacity-0 animate-[fadeIn_1.2s_0.1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <span className="tag active">Kampala, Uganda · Est. 2025</span>
        </div>

        {/* Big headline */}
        <h1
          className="font-syne font-extrabold leading-[0.9] tracking-[-0.03em] mb-8 uppercase"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
        >
          <span className="block text-white opacity-0 animate-[fadeUp_1.4s_0.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">Your Digital</span>
          <span className="block blue-glow opacity-0 animate-[fadeUp_1.4s_0.38s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ color: '#2C6FED' }}>Agency</span>
          <span className="block text-white opacity-0 animate-[fadeUp_1.4s_0.54s_cubic-bezier(0.16,1,0.3,1)_forwards]">in Kampala.</span>
        </h1>

        {/* Sub-row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 opacity-0 animate-[fadeUp_1.2s_0.72s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <p className="max-w-md font-outfit font-light text-lg text-[#CCCCEE] leading-relaxed">
            We build professional websites, grow search rankings, define brand identities,
            and produce compelling media — all in-house from Kampala, Uganda.
          </p>
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

        {/* Stats bar — 2026 Year 1 targets */}
        <div className="mt-16 pt-8 border-t border-[#1C1C34] opacity-0 animate-[fadeIn_1.4s_1.0s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#2C6FED' }} />
            <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest">2026 Year 1 Targets</span>
          </div>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] text-[#9A9ABB] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-[#222] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full"
            style={{ height: '40%', background: '#2C6FED', animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

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
