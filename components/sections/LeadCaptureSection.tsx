'use client'

import { useState } from 'react'

/**
 * LeadCaptureSection — homepage lead capture between Services and Testimonials.
 *
 * Offers a free SEO/website audit. Captures email via the /api/newsletter endpoint
 * already used by NewsletterForm. Low friction — one field, clear value prop.
 */
export default function LeadCaptureSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) { setMsg('Enter a valid email address.'); setStatus('error'); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'homepage-lead-capture' }),
      })
      if (res.ok) {
        setStatus('success')
        setMsg("We'll send your free audit within 24 hours.")
        setEmail('')
      } else {
        setStatus('error')
        setMsg('Something went wrong. Try again or WhatsApp us.')
      }
    } catch {
      setStatus('error')
      setMsg('Network error. Try again or WhatsApp us.')
    }
  }

  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px 80px' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 40,
        padding: '48px 56px', border: '1px solid #1C1C34', borderRadius: 20, background: '#0A0A16',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle glow */}
        <div style={{ position: 'absolute', top: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,111,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 480 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#2C6FED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Free · No commitment</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.4rem)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#E4E4F0', marginBottom: 12 }}>
            Get a free website audit.
          </h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: '#8A8AAA', lineHeight: 1.65 }}>
            We review your current site or online presence — speed, SEO, mobile, and design — and send you a concrete list of improvements. No pitch, no invoice.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1, flex: '1 1 320px', maxWidth: 420 }}>
          {status === 'success' ? (
            <div style={{ padding: '24px', border: '1px solid rgba(44,111,237,0.3)', borderRadius: 14, background: 'rgba(44,111,237,0.06)', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: '#E4E4F0', marginBottom: 6 }}>Request received.</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: '#8A8AAA' }}>{msg}</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setMsg('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                style={{
                  width: '100%', padding: '14px 18px', borderRadius: 12,
                  border: `1px solid ${status === 'error' ? 'rgba(220,50,50,0.5)' : '#1C1C34'}`,
                  background: '#04040C', color: '#E4E4F0',
                  fontFamily: "'Outfit',sans-serif", fontSize: 15,
                  outline: 'none',
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{
                  padding: '14px', borderRadius: 12, border: 'none', cursor: status === 'loading' ? 'wait' : 'pointer',
                  background: 'linear-gradient(135deg,#2C6FED,#1A52C4)', color: '#fff',
                  fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14,
                  opacity: status === 'loading' ? 0.7 : 1, transition: 'opacity 0.2s',
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Get My Free Audit'}
              </button>
              {msg && status === 'error' && (
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#DC3232', textAlign: 'center' }}>{msg}</p>
              )}
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#4A4A6A', textAlign: 'center', letterSpacing: '0.04em' }}>
                No spam. We reply within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
