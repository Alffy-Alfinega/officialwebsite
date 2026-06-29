'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!email) return; setStatus('loading')
    try {
      const r = await fetch('/api/newsletter', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email}) })
      setStatus(r.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#2C6FED' }}>✓ You&apos;re on the list!</p>
  )

  return (
    <form onSubmit={submit} style={{ display:'flex', gap:8 }}>
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{ flex:1, minWidth:0, background:'#0A0A16', border:'1px solid #1C1C34', borderRadius:100, padding:'10px 16px', color:'#E4E4F0', fontFamily:"'Outfit',sans-serif", fontSize:13, outline:'none' }}
      />
      <button type="submit" disabled={status==='loading'} style={{
        width:40, height:40, borderRadius:'50%', border:'none', cursor:'pointer',
        background:'#2C6FED', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}
