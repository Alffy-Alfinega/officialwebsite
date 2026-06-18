// ============================================================
// Careers Page — Lists open job roles at Alffy
// This page shows the company values, open positions with
// requirements, perks, and a spontaneous application CTA.
// Route: /careers
// ============================================================

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import Link for client-side navigation
import Link from 'next/link'

// Import the 3D Babylon.js scene component for background decoration
import { BabylonScene } from '@/components/3d/BabylonScene'

// Metadata for SEO — sets <title> and <meta name="description">
export const metadata: Metadata = {
  title: 'Careers — Join the Alffy Team | Kampala, Uganda',
  description: 'Work at Alffy (Alfinega), a growing digital agency in Kampala, Uganda. See open roles in web design, SEO, animation, and more.',
}

// Array of open job roles. Each role has title, type, location,
// department, a description, required qualifications, and
// nice-to-have qualifications.
const openRoles = [
  {
    title: 'Junior Web Developer',
    type: 'Full-time',
    location: 'Makindye, Kampala (On-site / Hybrid)',
    dept: 'Engineering',
    description: 'We\'re looking for a junior developer comfortable with HTML, CSS, JavaScript, and basic React. You\'ll work alongside our lead developer building client websites on Next.js, and gradually take on more ownership as your skills grow.',
    requirements: [
      'Solid understanding of HTML5, CSS3, and JavaScript (ES6+)',
      'Familiarity with React or willingness to learn quickly',
      'Basic understanding of responsive design and mobile-first development',
      'Attention to detail and willingness to ask questions',
      'Portfolio of at least 2 personal or client projects',
    ],
    niceToHave: ['Experience with Next.js or Tailwind CSS', 'Basic knowledge of Git', 'Interest in web performance and SEO'],
  },
  {
    title: 'Graphic Designer',
    type: 'Full-time',
    location: 'Makindye, Kampala (On-site)',
    dept: 'Design',
    description: 'We need a skilled graphic designer to handle a high volume of client work across print, digital, and social media. You\'ll work on brand identities, marketing materials, social content, and packaging — often under tight deadlines.',
    requirements: [
      'Proficient in Adobe Illustrator and Photoshop (Figma is a plus)',
      'Strong understanding of typography, colour, and layout',
      'Ability to work quickly without compromising quality',
      'Experience handling multiple client projects simultaneously',
      'Portfolio demonstrating range across brand and digital design',
    ],
    niceToHave: ['Experience with brand identity projects', 'Basic video/motion skills', 'Familiarity with print production specs'],
  },
  {
    title: 'SEO & Content Specialist',
    type: 'Full-time',
    location: 'Makindye, Kampala (Hybrid)',
    dept: 'Growth',
    description: 'You\'ll manage SEO campaigns for multiple clients — handling technical audits, on-page optimisation, keyword strategy, and content planning. You should be comfortable reporting to clients and explaining SEO results in plain language.',
    requirements: [
      'Demonstrable experience running SEO campaigns with measurable results',
      'Comfortable using tools like Google Search Console, Ahrefs, or SEMrush',
      'Strong written English — you\'ll write and edit blog content and on-page copy',
      'Understanding of technical SEO (site speed, Core Web Vitals, schema)',
      'Ability to manage multiple client accounts independently',
    ],
    niceToHave: ['Experience with East African or emerging market SEO', 'Google Analytics 4 certification', 'Local SEO / Google Business Profile experience'],
  },
]

// Array of company values shown as icon + title + body cards
const values = [
  {
    icon: '🎯',
    title: 'Craft Over Volume',
    body: 'We take on work we can do properly. Quality matters more than throughput — and we protect that even under pressure.',
  },
  {
    icon: '🤝',
    title: 'Direct Communication',
    body: 'No politics, no passive-aggression. If something\'s wrong, we say it. If something\'s good, we say that too.',
  },
  {
    icon: '📈',
    title: 'Room to Grow',
    body: 'We\'re an early-stage agency. The team you join now will likely have more senior responsibilities in 12 months than most agencies would give you in 3 years.',
  },
  {
    icon: '🌍',
    title: 'Building Something Real',
    body: 'Every project we deliver improves how a Ugandan or East African business shows up online. That matters.',
  },
]

// Array of perk descriptions shown in the "Why join us" section
const perks = [
  'Competitive salary benchmarked against Kampala market rates',
  'Hybrid working options (role-dependent)',
  'Direct exposure to multiple disciplines — no siloed work',
  'Skills development budget for courses and tools',
  'Early team member status — your work shapes the culture',
  'WhatsApp-based team communication (no bloated meetings)',
]

// Main component for the Careers page. Default export.
export default function CareersPage() {
  return (
    <div className="pt-[68px]">

      {/* Hero Section — headline with number of open roles */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <BabylonScene variant="careers" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, var(--bg) 82%)' }} />
        <div className="relative z-10">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Careers</span>
        <h1
          className="font-syne font-extrabold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
        >
          Join the<br />
          <span style={{ color: '#2C6FED' }}>Alffy team.</span>
        </h1>
        <p className="max-w-lg font-outfit text-lg text-[#AAAACC] leading-relaxed mb-8">
          We&rsquo;re a small, focused digital agency in Kampala building the kind of work that East African businesses deserve. If you care about craft and want to grow fast, read on.
        </p>
        {/* Info tags */}
        <div className="flex flex-wrap gap-3">
          <span className="tag active">Kampala, Uganda</span>
          <span className="tag">{openRoles.length} Open Roles</span>
          <span className="tag">Est. 2025</span>
        </div>
        </div>
      </section>

      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      {/* Values Section — 4-column grid showing company values */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-6 block">What We Stand For</span>
        <h2
          className="font-syne font-extrabold text-white mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          How we work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/25 transition-colors"
              style={{ background: '#07071280' }}
            >
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3 className="font-syne font-bold text-white text-base mb-2">{v.title}</h3>
              <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      {/* Open Roles Section — iterates over openRoles array and renders
          an expandable card for each position */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-6 block">Open Positions</span>
        <h2
          className="font-syne font-extrabold text-white mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          {openRoles.length} roles available now.
        </h2>

        <div className="space-y-6">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="border border-[#1C1C34] rounded-2xl overflow-hidden hover:border-[#2C6FED]/30 transition-colors"
              style={{ background: '#07071280' }}
            >
              {/* Role header — title, dept, type, location, and Apply button */}
              <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="tag">{role.dept}</span>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-mono font-medium uppercase tracking-wide"
                      style={{ background: 'rgba(44,111,237,0.1)', border: '1px solid rgba(44,111,237,0.2)', color: '#2C6FED' }}
                    >
                      {role.type}
                    </span>
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-1">{role.title}</h3>
                  <p className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-wide">{role.location}</p>
                </div>
                {/* Apply button opens the user's email client with a pre-filled subject */}
                <a
                  href={`mailto:careers@alfinega.com?subject=Application: ${encodeURIComponent(role.title)}&body=Hi Alffy team,%0A%0AI'm applying for the ${encodeURIComponent(role.title)} role.%0A%0A[Tell us about yourself and attach your CV / portfolio]`}
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all self-start"
                  style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
                >
                  Apply Now
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Role body — description, requirements list, nice-to-haves */}
              <div className="px-7 md:px-8 pb-8 border-t border-[#1C1C34]">
                <p className="font-outfit text-[#BBBBDD] text-sm leading-relaxed mt-6 mb-6 max-w-2xl">
                  {role.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Requirements column */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 font-outfit text-[#AAAACC] text-sm leading-relaxed">
                          <span style={{ color: '#2C6FED' }} className="mt-1 shrink-0">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Nice-to-have column */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest mb-3">Nice to Have</h4>
                    <ul className="space-y-2">
                      {role.niceToHave.map((r) => (
                        <li key={r} className="flex items-start gap-2 font-outfit text-[#9A9ABB] text-sm leading-relaxed">
                          <span className="text-[#6A6A8A] mt-1 shrink-0">+</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-[#1C1C34] mx-6 md:mx-16 lg:mx-24" />

      {/* Perks Section — grid of benefit items with checkmark icons */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-6 block">What You Get</span>
        <h2
          className="font-syne font-extrabold text-white mb-10"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          Why join us.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk) => (
            <div
              key={perk}
              className="flex items-start gap-3 p-5 border border-[#1C1C34] rounded-xl"
              style={{ background: '#07071280' }}
            >
              {/* Checkmark circle icon */}
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(44,111,237,0.12)', border: '1px solid rgba(44,111,237,0.25)' }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <path d="M1.5 4l2 2 3-3" stroke="#2C6FED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className="font-outfit text-sm text-[#AAAACC] leading-relaxed">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spontaneous Application Section — banner encouraging candidates
          to apply even if their role isn't listed */}
      <section className="py-12 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-28">
        <div
          className="p-10 md:p-14 rounded-3xl border border-[#1C1C34] text-center"
          style={{ background: 'linear-gradient(135deg, #0A0A16, #08081A)' }}
        >
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Don&rsquo;t see your role?</span>
          <h3
            className="font-syne font-extrabold text-white mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
          >
            Send a spontaneous application.
          </h3>
          <p className="font-outfit text-[#9A9ABB] mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            If you&rsquo;re talented, proactive, and align with how we work — we want to hear from you regardless of whether there&rsquo;s a posted role.
          </p>
          {/* Mailto link for unsolicited applications */}
          <a
            href="mailto:careers@alfinega.com?subject=Spontaneous Application — [Your Role]&body=Hi Alffy team,%0A%0AI'd like to introduce myself and explore whether there's a fit.%0A%0A[Tell us about yourself and attach your CV / portfolio]"
            className="inline-block px-8 py-3 font-syne font-semibold text-sm text-white rounded-full transition-all"
            style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
          >
            careers@alfinega.com →
          </a>
        </div>
      </section>

    </div>
  )
}
