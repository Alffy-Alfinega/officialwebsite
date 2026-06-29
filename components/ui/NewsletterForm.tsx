'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm() {
  const [email,    setEmail]    = useState('')
  const [status,   setStatus]   = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return <p className="font-outfit text-sm text-[#2C6FED]">✓ You&apos;re on the list!</p>
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
          aria-label="Email address for newsletter"
          className="flex-1 border rounded-full px-4 py-2.5 text-sm font-outfit placeholder-[#888] focus:border-[#2C6FED] outline-none transition-colors min-w-0 disabled:opacity-50"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 w-10 h-10 rounded-full bg-[#2C6FED] text-white flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === 'loading' ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="animate-spin">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="10" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-outfit text-xs text-red-400 mt-2 pl-1">{errorMsg}</p>
      )}
    </div>
  )
}
