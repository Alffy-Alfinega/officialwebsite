'use client'

import { useState } from 'react'

const SERVICES = [
  'Website Design','SEO Services','Graphic Design','Branding',
  'Digital Marketing','Video Editing','Image Editing',
  '2D & 3D Animation','Architectural Design','Content Creation',
  'Cybersecurity','Mass Data Entry','Multiple / Not Sure',
]
const BUDGETS = [
  'Under 500,000 UGX','500,000 – 1,500,000 UGX',
  '1,500,000 – 5,000,000 UGX','5,000,000+ UGX',"Let's discuss",
]

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#0A0A16', border: '1px solid #1C1C34',
  borderRadius: 10, padding: '12px 16px', color: '#E4E4F0',
  fontFamily: "'Outfit',sans-serif", fontSize: 14, outline: 'none',
}
const labelStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
  textTransform: 'uppercase', letterSpacing: '0.1em',
  color: '#8A8AAA', display: 'block', marginBottom: 6,
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', service:'', budget:'', message:'' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(r.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div style={{ padding: '40px 0' }}>
      <div style={{ width:48,height:48,borderRadius:'50%',background:'rgba(44,111,237,0.1)',border:'1px solid rgba(44,111,237,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16 }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#2C6FED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:22, color:'#fff', marginBottom:8 }}>Message sent!</h3>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#9A9ABB' }}>We&apos;ll reply to <span style={{color:'#2C6FED'}}>{form.email}</span> within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input required style={inputStyle} value={form.name} onChange={set('name')} placeholder="Your name" />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input required type="email" style={inputStyle} value={form.email} onChange={set('email')} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Service</label>
        <select style={inputStyle} value={form.service} onChange={set('service')}>
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s} style={{background:'#0A0A16'}}>{s}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Budget</label>
        <select style={inputStyle} value={form.budget} onChange={set('budget')}>
          <option value="">Select a range...</option>
          {BUDGETS.map(b => <option key={b} style={{background:'#0A0A16'}}>{b}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea required rows={5} style={{...inputStyle, resize:'none'}} value={form.message} onChange={set('message')} placeholder="Tell us about your project..." />
      </div>
      {status === 'error' && <p style={{color:'#f87171',fontSize:13,fontFamily:"'Outfit',sans-serif"}}>Something went wrong. Email us at contact@alfinega.com</p>}
      <button type="submit" disabled={status==='sending'} style={{
        padding:'14px 0', borderRadius:100, border:'none', cursor:'pointer',
        background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff',
        fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14,
        opacity: status==='sending' ? 0.6 : 1,
      }}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
