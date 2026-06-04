import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div
        className="relative rounded-3xl overflow-hidden border p-12 md:p-20"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(44,111,237,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest mb-4 block" style={{ color: 'var(--text-faint)' }}>
              Ready to start?
            </span>
            <h2
              className="font-syne font-extrabold leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.025em', color: 'var(--text)' }}
            >
              Let&apos;s build something<br />
              <span style={{ color: '#2C6FED' }}>extraordinary.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 font-syne font-semibold text-sm text-white rounded-full hover:opacity-90 transition-all duration-200 text-center"
              style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 font-syne font-semibold text-sm rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors duration-200 text-center border"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
