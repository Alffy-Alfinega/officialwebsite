// ============================================================
// Smooth Scroll Provider
// A client component that initialises Lenis, a smooth‑scrolling
// library, and manages its animation loop.
// Wraps children without adding any DOM wrapper.
// ============================================================

// 'use client' — this file runs in the browser, not on the
// server, because it uses browser‑only APIs (requestAnimationFrame).
'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Store the Lenis instance in a ref so it persists across
  // re‑renders without causing effect re‑runs.
  const lenisRef = useRef<Lenis | null>(null)

  // Run once when the component mounts (empty dependency array).
  useEffect(() => {
    // Create a new Lenis instance with custom easing.
    const lenis = new Lenis({
      duration: 1.1,                                    // Scroll duration in seconds
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Custom ease‑out curve
      smoothWheel: true,                                // Enable smooth mouse‑wheel scrolling
    })

    lenisRef.current = lenis

    // Start a requestAnimationFrame loop that feeds the
    // current timestamp to Lenis on every frame.
    let raf: number
    const animate = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Cleanup: cancel the animation frame and destroy the
    // Lenis instance when the component unmounts.
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])   // Empty array = only run on mount

  // Render children without any wrapper element.
  return <>{children}</>
}
