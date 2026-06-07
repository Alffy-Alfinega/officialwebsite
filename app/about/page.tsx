import type { Metadata } from 'next'
import Link from 'next/link'
import { FloatingGeometryWrapper } from '@/components/r3f/FloatingGeometryWrapper'
interface TeamMember {
  name: string
  role: string
  dept: string
  shortBio: string
  bio: string
  skills: string[]
  image?: string
}

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

export const metadata: Metadata = {
  title: 'About Us — Alffy Digital Agency | Kampala, Uganda',
  description: 'Alffy (Alfinega) is a full-service digital agency founded in Kampala, Uganda in January 2025. Web design, SEO, branding, animation, and creative media for East African businesses.',
}

const milestones = [
  { year: 'Jan 2025', event: 'Alffy (Alfinega) incorporated in Makindye, Kampala. Core team assembled; foundations laid across web design, branding, and graphic design.' },
  { year: 'Mid 2025', event: 'Development and testing phase. Service frameworks built, internal processes established, early client discovery work conducted.' },
  { year: 'Late 2025', event: 'Added 2D & 3D animation, architectural visualisation, video editing, and content creation to the service portfolio.' },
  { year: 'Jan 2026', event: 'Official public launch. Alffy opens to clients across Uganda and East Africa — web design, SEO, branding, and all 12 services now live.' },
  { year: '2026', event: 'Launched Alffy v2 — a complete digital rebrand and new online presence to match our growing capabilities.' },
]

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-100 pointer-events-none">
          <FloatingGeometryWrapper className="w-full h-full" variant="about" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 90% 50%, transparent 0%, #04040C 82%)' }}
        />
        {/* Blue ambient glow */}
        <div
          className="absolute left-0 top-1/4 pointer-events-none"
          style={{ width: '500px', height: '400px', background: 'radial-gradient(ellipse, rgba(44,111,237,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">About Alffy</span>
          <h1
            className="font-syne font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            We make the<br />
            <span style={{ color: '#2C6FED' }}>digital world</span><br />
            work for you.
          </h1>
          <p className="max-w-lg font-outfit text-[#AAAACC] text-lg leading-relaxed">
            Alffy is a full-service digital agency based in Kampala, Uganda. We partner with businesses to design, build, and grow their digital presence — professionally and affordably.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="tag active">Est. 2025</span>
            <span className="tag">Kampala, Uganda</span>
            <span className="tag">12 Services</span>
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section id="story" className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Our Story</span>
            <h2
              className="font-syne font-extrabold text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Built for the African market. Open to the world.
            </h2>
            <div className="space-y-5 font-outfit text-[#AAAACC] text-base leading-relaxed">
              <p>Alffy was founded in January 2025 from a simple observation: businesses in Uganda and across East Africa were being underserved by the digital agency landscape. Too many providers were offering generic, template-driven work that didn&rsquo;t reflect the ambition of local brands.</p>
              <p>We spent 2025 building the right foundations — assembling the team, developing our service frameworks, and testing our process before opening to clients. In January 2026 we launched publicly, and we&rsquo;re now delivering for clients across Uganda and East Africa.</p>
              <p>As a newly-launched agency, our goal for 2026 is clear: deliver 50+ projects with 95% client satisfaction, building a reputation on craft and honest communication. Every project we take on is a chance to show what&rsquo;s possible when digital expertise meets local knowledge.</p>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#2C6FED' }} />
                <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest">2026 Year 1 Targets</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Projects Goal', value: '50+' },
                  { label: 'Satisfaction Target', value: '95%' },
                  { label: 'Support Available', value: '24/7' },
                  { label: 'Services Offered', value: '12' },
                ].map((stat) => (
                  <div key={stat.label} className="p-5 border border-[#1C1C34] rounded-xl">
                    <p className="font-syne font-extrabold text-3xl" style={{ color: '#2C6FED' }}>{stat.value}</p>
                    <p className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-8 block">Timeline</span>
            <div className="relative pl-6 border-l border-[#1C1C34]">
              {milestones.map((m, i) => (
                <div key={i} className="mb-10 relative">
                  <span
                    className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-[#2C6FED]"
                    style={{ background: '#04040C' }}
                  />
                  <span className="font-mono text-[11px] text-[#2C6FED] uppercase tracking-widest block mb-1">{m.year}</span>
                  <p className="font-outfit text-sm text-[#AAAACC] leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="h-px bg-[#1C1C34] mb-16" />
        <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">The Team</span>
        <h2
          className="font-syne font-extrabold text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          The people behind the work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.role}
              className="p-6 border border-[#1C1C34] rounded-2xl hover:border-[#2C6FED]/30 transition-all duration-300 card-hover group"
              style={{ background: '#0A0A16' }}
            >
              {/* Role avatar */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(44,111,237,0.15), rgba(26,82,196,0.05))', border: '1px solid rgba(44,111,237,0.2)' }}
              >
                <span className="font-syne font-bold text-lg" style={{ color: '#2C6FED' }}>
                  {member.role[0]}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8A8AAA] uppercase tracking-widest block mb-1">{member.dept}</span>
              {member.name ? (
                <>
                  <p className="font-syne font-semibold text-white text-lg mb-0.5 group-hover:text-[#2C6FED] transition-colors">{member.name}</p>
                  <p className="font-outfit text-xs text-[#2C6FED] font-medium mb-2">{member.role}</p>
                </>
              ) : (
                <p className="font-syne font-semibold text-white text-lg mb-2 group-hover:text-[#2C6FED] transition-colors">{member.role}</p>
              )}
              <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed">{member.shortBio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-32">
        <div
          className="p-10 md:p-16 rounded-3xl border border-[#1C1C34] text-center"
          style={{ background: 'linear-gradient(135deg, #0A0A16, #08081A)' }}
        >
          <span className="font-mono text-[11px] text-[#8A8AAA] uppercase tracking-widest mb-4 block">Work with us</span>
          <h3
            className="font-syne font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Ready to start your project?
          </h3>
          <p className="font-outfit text-[#AAAACC] mb-8 max-w-md mx-auto">
            Tell us what you need. We&rsquo;ll come back with a clear proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
