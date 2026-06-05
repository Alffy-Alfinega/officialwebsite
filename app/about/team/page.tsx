// ============================================================
// Team Page — Introduces the people behind Alffy
// This sub-page of /about shows the CEO in a featured card,
// the rest of the team in a grid, culture values, and a
// "join us" call-to-action.
// Route: /about/team
// ============================================================

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Next.js Image component for optimized image loading
// (lazy loading, responsive sizes, blur placeholder)
import Image from 'next/image'

// Import Link for client-side navigation between pages
import Link from 'next/link'

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// TypeScript interface defining the shape of a TeamMember object
interface TeamMember {
  name: string
  role: string
  dept: string
  bio: string
  shortBio: string
  skills: string[]
  image?: string // optional — if missing, a letter avatar is shown
}

// CEOMember extends TeamMember with an extra "tagline" field.
// This uses TypeScript's "extends" to inherit all TeamMember fields
// and add new ones without repeating them.
interface CEOMember extends TeamMember {
  tagline: string
}

// Single CEO object with all fields including the tagline
const ceo: CEOMember = {
  name: 'Mullo Nashiifu',
  role: 'CEO & Founder',
  dept: 'Leadership',
  tagline: 'Building the digital agency East Africa deserves.',
  shortBio: 'Founded Alffy to bridge the gap between world-class digital craft and the East African market.',
  bio: 'Founded Alffy to bridge the gap between world-class digital craft and the East African market. Leads company vision, client strategy, and hands-on development — because the best agency founders never stop building.',
  skills: ['Strategy', 'Full-Stack Development', 'Business Growth'],
  image: '/team/mullo-nashiifu.jpg',
}

// Array of remaining team members (non-CEO)
const team: TeamMember[] = [
  {
    name: 'Musoke Joshua Prosper',
    role: 'Chief Technology Officer',
    dept: 'Technology',
    shortBio: 'Leads all technical strategy, architecture, and engineering across Alffy.',
    bio: 'Leads all technical strategy, architecture, and engineering across Alffy. Oversees every build from stack selection to deployment — ensuring performance, scalability, and clean code ship on every project.',
    skills: ['Technical Leadership', 'Full-Stack Engineering', 'System Architecture'],
    image: '/team/musoke-joshua.jpg',
  },
  {
    name: 'Mwawule Christiana',
    role: 'Managing Director',
    dept: 'Operations',
    shortBio: 'Runs day-to-day operations, client relationships, and project delivery across Alffy.',
    bio: 'Runs day-to-day operations, client relationships, and project delivery across Alffy. Keeps every project on scope, on budget, and on deadline — while making sure the team has what it needs to do its best work.',
    skills: ['Operations', 'Client Management', 'Project Delivery'],
    image: '/team/mwawule-christiana.jpg',
  },

]

// Metadata for SEO — sets the browser tab title and meta description
export const metadata: Metadata = {
  title: 'Our Team — The People Behind Alffy | Kampala, Uganda',
  description: 'Meet the Alffy team — designers, developers, SEO strategists, and creatives based in Kampala, Uganda delivering digital work across East Africa.',
}

// Main component for the Team page. This is the default export.
export default function TeamPage() {
  return (
    // Outer wrapper with top padding for the fixed navbar
    <div className="pt-[68px]">
      {/* Breadcrumb navigation: About > The Team */}
      <div className="px-6 md:px-16 lg:px-24 pt-8 max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-2 font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest" aria-label="Breadcrumb">
          <Link href="/about" className="hover:text-[#2C6FED] transition-colors">About</Link>
          <span>/</span>
          <span className="text-[#2C6FED]">The Team</span>
        </nav>
      </div>

      {/* Hero Section — large heading with 3D background */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10 max-w-3xl">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">The People</span>
          <h1
            className="font-syne font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            The people<br />
            <span style={{ color: '#2C6FED' }}>behind the work.</span>
          </h1>
          <p className="font-outfit text-lg text-[#AAAACC] leading-relaxed max-w-xl">
            Alffy is built on in-house expertise. Every discipline under one roof — no outsourcing the parts that matter.
          </p>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      {/* CEO Card Section — a large featured card for the CEO
          with photo, name, role, biography, and skills */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl border border-[#2C6FED]/30"
          style={{ background: 'linear-gradient(135deg, #0A0A16 0%, #0D0D20 50%, #0A0F1A 100%)' }}
        >
          {/* Subtle blue gradient glow in the top-right */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(44,111,237,0.3), transparent 70%)' }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
            {/* CEO Photo */}
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-[#2C6FED]/40 shadow-lg shadow-[#2C6FED]/10">
                <Image
                  src={ceo.image!}    // "!" tells TS it's definitely not undefined
                  alt={`${ceo.name}, ${ceo.role} at Alffy`}
                  width={416}
                  height={416}
                  className="w-full h-full object-cover"
                  priority             // Load this image first (above-the-fold)
                />
              </div>
            </div>

            {/* CEO Info — department, name, role, bio, skill tags */}
            <div className="text-center md:text-left flex-1">
              <span className="font-mono text-[10px] text-[#2C6FED] uppercase tracking-widest mb-2 block">{ceo.dept}</span>
              <p className="font-syne font-extrabold text-white text-2xl md:text-3xl mb-1">{ceo.name}</p>
              <p className="font-outfit text-[#2C6FED] text-sm font-medium mb-4">{ceo.role}</p>
              <p className="font-outfit text-[#AAAACC] text-base leading-relaxed mb-6 max-w-xl">{ceo.bio}</p>

              {/* Skills displayed as small pill-shaped badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {ceo.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full"
                    style={{ background: 'rgba(44,111,237,0.12)', color: '#5A8FF0', border: '1px solid rgba(44,111,237,0.2)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section — cards for the remaining team members */}
      <section className="pb-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.role}
              className="p-7 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/40 transition-all duration-300 card-hover group"
              style={{ background: '#0A0A16' }}
            >
              {/* Avatar — shows the real photo if available, otherwise
                  shows the first letter of the role as a fallback */}
              {member.image ? (
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-5 border border-[#2C6FED]/25">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Alffy`}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(44,111,237,0.15), rgba(26,82,196,0.05))',
                    border: '1px solid rgba(44,111,237,0.25)',
                  }}
                >
                  <span className="font-syne font-extrabold text-xl" style={{ color: '#2C6FED' }}>
                    {member.role[0]}
                  </span>
                </div>
              )}

              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-1">{member.dept}</span>
              {member.name && (
                <p className="font-syne font-bold text-white text-lg mb-0.5 group-hover:text-[#2C6FED] transition-colors">{member.name}</p>
              )}
              <p className="font-outfit text-[#2C6FED] text-xs font-medium mb-3">{member.role}</p>
              <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed mb-5">{member.bio}</p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((s) => (
                  <span key={s} className="tag text-[10px]">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section — "How We Work" values displayed in a
          two-column layout with text on the left and feature
          cards on the right */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">How We Work</span>
            <h2
              className="font-syne font-extrabold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              One team, one brief, one standard.
            </h2>
            <div className="space-y-4 font-outfit text-[#AAAACC] text-base leading-relaxed">
              <p>We don&rsquo;t have account managers who pass your brief to a separate creative team who pass it to a separate development team. That broken-telephone model is how work loses quality.</p>
              <p>At Alffy, the person you brief is the person who does the work. Communication is direct, revision cycles are fast, and nothing gets lost in translation.</p>
              <p>Every project starts with a proper discovery conversation. We ask uncomfortable questions about your business goals — not just what you want to see on screen, but what you need it to achieve.</p>
            </div>
          </div>
          {/* Feature cards showing culture values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '⚡', title: 'Direct Communication', body: 'No account managers. Talk straight to the people building your project.' },
              { icon: '🎯', title: 'Goal-First Thinking', body: 'Every design decision is tied to a measurable business outcome.' },
              { icon: '🔒', title: 'Fixed Pricing', body: 'Scoped, quoted, agreed. No hourly billing, no surprise invoices.' },
              { icon: '📞', title: '24/7 Support', body: 'WhatsApp access to your project team throughout and after delivery.' },
            ].map((item) => (
              <div key={item.title} className="p-5 border border-[#1C1C34] rounded-xl" style={{ background: '#0A0A16' }}>
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="font-syne font-semibold text-white text-sm mb-1">{item.title}</p>
                <p className="font-outfit text-xs text-[#8A8AAA] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section — a bottom banner with links to careers
          and contact pages for interested candidates */}
      <section className="py-12 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-24">
        <div className="h-px bg-[#1C1C34] mb-12" />
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-syne font-semibold text-white text-lg mb-1">Interested in joining the team?</p>
            <p className="font-outfit text-sm text-[#9A9ABB]">We&rsquo;re always open to talented people who care about craft.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/careers" className="px-6 py-3 border border-[#1C1C34] text-[#AAAACC] font-syne font-semibold text-sm rounded-full hover:border-[#2C6FED] hover:text-[#2C6FED] transition-colors">
              View Openings →
            </Link>
            <Link href="/contact" className="px-6 py-3 font-syne font-semibold text-sm text-white rounded-full" style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}>
              Work With Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
