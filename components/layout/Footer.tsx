import Link from 'next/link'
import Image from 'next/image'
const footerLinks = {
  services: [
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
  company: [
    { label: 'About Us',    href: '/about' },
    { label: 'Our Story',   href: '/about/story' },
    { label: 'The Team',    href: '/about/team' },
    { label: 'Portfolio',   href: '/portfolio' },
    { label: 'Blog',        href: '/blog' },
    { label: 'Pricing',     href: '/pricing' },
    { label: 'Careers',     href: '/careers' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Data Handling',   href: '/data-handling' },
  ],
}
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group" aria-label="Alffy (Alfinega) home">
              <Image
                src="/logo-nav.png"
                alt="Alffy (Alfinega) logo"
                width={40}
                height={40}
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
              <span className="font-syne font-bold text-[15px] tracking-tight select-none" style={{ color: 'var(--text)' }}>
                Alffy <span className="opacity-50 font-normal text-[12px]">(Alfinega)</span>
              </span>
            </Link>
            <p className="font-outfit text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--text-faint)' }}>
              Web design, SEO, branding, and creative media for businesses in Uganda and East Africa.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@alfinega.com"
                className="block font-outfit text-sm hover:text-white transition-colors"
                style={{ color: '#2C6FED' }}
              >
                hello@alfinega.com
              </a>
              <a
                href="tel:+256747113059"
                className="block font-outfit text-sm hover:text-[#2C6FED] transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                +256 747 113 059
              </a>
              <p className="font-outfit text-sm" style={{ color: 'var(--text-dimmer)' }}>Makindye, Kampala, Uganda</p>
            </div>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/alfinega', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alfinega', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md border flex items-center justify-center hover:text-[#2C6FED] hover:border-[#2C6FED]/40 transition-colors"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest mb-5 font-semibold" style={{ color: 'var(--text-faint)' }}>Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest mb-5 font-semibold" style={{ color: 'var(--text-faint)' }}>Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-outfit text-sm hover:text-[#2C6FED] transition-colors" style={{ color: 'var(--text-muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest mb-5 font-semibold" style={{ color: 'var(--text-faint)' }}>Newsletter</p>
            <p className="font-outfit text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              Monthly insights on design, SEO, and digital marketing.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ borderColor: 'var(--border-2, var(--border))' }}>
          <p className="font-mono text-[11px]" style={{ color: 'var(--text-dimmer)' }}>
            © {new Date().getFullYear()} Alffy (Alfinega). Est. 2025. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {footerLinks.legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] hover:text-[#2C6FED] transition-colors uppercase tracking-wide"
                style={{ color: 'var(--text-dimmer)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
