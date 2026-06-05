// ============================================================
// Portfolio Page — Shows selected delivered projects
// Displays a hero section with a heading, a portfolio grid
// (rendered by PortfolioGrid component), and a CTA to start
// a project.
// Route: /portfolio
// ============================================================

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for client-side navigation
import Link from 'next/link'

// Import the PortfolioGrid component — renders the grid of
// project cards with project data defined inside that component.
import PortfolioGrid from '@/components/sections/PortfolioGrid'

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Portfolio — Web Design & Digital Projects | Alffy',
  description: 'Real delivered work from Alffy (Alfinega) — school websites, corporate sites, gospel platforms, and product development across Uganda, East Africa, and beyond.',
}

// Main component for the Portfolio page. Default export.
export default function PortfolioPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero + Portfolio Grid Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        {/* 3D background scene */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />

        <div className="relative z-10">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Our Work</span>
          {/* Heading and subtitle */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <h1
              className="font-syne font-extrabold leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}
            >
              Selected<br />
              <span style={{ color: '#2C6FED' }}>Projects.</span>
            </h1>
            <p className="max-w-xs font-outfit text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Live delivered work across Uganda, East Africa, and Central Africa — web design, education platforms, and product development.
            </p>
          </div>

          <div className="h-px mb-14" style={{ background: 'var(--border)' }} />

          {/* Portfolio grid — renders project cards from PortfolioGrid component */}
          <PortfolioGrid />

          {/* CTA Section — encourages visitors to start their own project */}
          <div className="mt-20 p-10 md:p-14 border rounded-3xl" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-faint)' }}>Start Your Project</span>
                <h3 className="font-syne font-bold text-2xl md:text-3xl" style={{ color: 'var(--text)' }}>
                  Want work like this?
                </h3>
                <p className="font-outfit text-sm mt-2 max-w-md" style={{ color: 'var(--text-muted)' }}>
                  Tell us what you need. We respond with a clear proposal within 24 hours — no commitment required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 font-syne font-semibold text-sm text-white rounded-full text-center transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
                >
                  Start a Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
