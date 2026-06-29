'use client'

import { useState } from 'react'

type FormState = { name: string; email: string; service: string; budget: string; message: string }
const INITIAL: FormState = { name: '', email: '', service: '', budget: '', message: '' }

export default function ContactForm() {
  const [form,   setForm]   = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full border rounded-xl px-4 py-3 font-outfit text-sm placeholder-[#888] focus:border-[#2C6FED] outline-none transition-colors'
  const labelCls = 'font-mono text-[10px] uppercase tracking-widest block mb-2'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <div className="w-12 h-12 rounded-full bg-[#2C6FED]/10 border border-[#2C6FED]/30 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="#2C6FED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-syne font-bold text-xl text-white">Message sent!</h3>
        <p className="font-outfit text-sm text-[#9A9ABB] max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours at{' '}
          <span className="text-[#2C6FED]">{form.email}</span>.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm(INITIAL) }}
          className="font-mono text-[11px] text-[#8A8AAA] hover:text-[#2C6FED] transition-colors uppercase tracking-widest mt-2"
        >
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelCls} style={{ color: 'var(--text-faint)' }}>Name *</label>
          <input
            id="contact-name" type="text" name="name" required value={form.name}
            onChange={handleChange} placeholder="Your name" className={inputCls}
            style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelCls} style={{ color: 'var(--text-faint)' }}>Email *</label>
          <input
            id="contact-email" type="email" name="email" required value={form.email}
            onChange={handleChange} placeholder="your@email.com" className={inputCls}
            style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className={labelCls} style={{ color: 'var(--text-faint)' }}>Service Needed</label>
        <select id="contact-service" name="service" value={form.service} onChange={handleChange}
          className={inputCls + ' cursor-pointer'}
          style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: form.service ? 'var(--text)' : 'var(--text-faint)' }}
        >
          <option value="">Select a service...</option>
          {[
            'Website Design', 'SEO Services', 'Graphic Design', 'Branding',
            'Digital Marketing', 'Video Editing', 'Image Editing',
            '2D & 3D Animation', 'Architectural Design', 'Content Creation',
            'Cybersecurity', 'Mass Data Entry', 'Multiple / Not Sure',
          ].map((s) => <option key={s} style={{ background: 'var(--surface)', color: 'var(--text)' }}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="contact-budget" className={labelCls} style={{ color: 'var(--text-faint)' }}>Budget Range</label>
        <select id="contact-budget" name="budget" value={form.budget} onChange={handleChange}
          className={inputCls + ' cursor-pointer'}
          style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: form.budget ? 'var(--text)' : 'var(--text-faint)' }}
        >
          <option value="">Select a range...</option>
          {[
            'Under 500,000 UGX', '500,000 – 1,500,000 UGX',
            '1,500,000 – 5,000,000 UGX', '5,000,000+ UGX', "Let's discuss",
          ].map((b) => <option key={b} style={{ background: 'var(--surface)', color: 'var(--text)' }}>{b}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelCls} style={{ color: 'var(--text-faint)' }}>Message *</label>
        <textarea
          id="contact-message" name="message" required rows={5} value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          className={inputCls + ' resize-none'}
          style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
      </div>

      {status === 'error' && (
        <p className="font-outfit text-sm text-red-400">
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:contact@alfinega.com" className="text-[#2C6FED] hover:underline">
            contact@alfinega.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : 'Send Message'}
      </button>
    </form>
  )
}
