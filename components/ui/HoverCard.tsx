'use client'

import Link from 'next/link'

export function HoverCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} style={{ padding:'24px 24px 28px', border:'1px solid #1C1C34', borderRadius:16, background:'#0A0A16', textDecoration:'none', display:'block', transition:'border-color 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor='rgba(44,111,237,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor='#1C1C34')}
    >
      <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:'#E4E4F0', marginBottom:8 }}>{title}</p>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.6 }}>{desc}</p>
    </Link>
  )
}

export function HoverServiceRow({ href, n, title, desc, price }: { href: string; n: string; title: string; desc: string; price: string; icon: string }) {
  return (
    <Link href={href} style={{ display:'grid', gridTemplateColumns:'56px 1fr auto', gap:20, alignItems:'center', padding:'24px', border:'1px solid #1C1C34', borderRadius:16, background:'#0A0A16', textDecoration:'none', transition:'border-color 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor='rgba(44,111,237,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor='#1C1C34')}
    >
      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'#2C6FED' }}>{n}</span>
      <div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'clamp(1rem,2vw,1.25rem)', color:'#E4E4F0', marginBottom:6 }}>{title}</h2>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.65, maxWidth:520 }}>{desc}</p>
      </div>
      <div style={{ textAlign:'right', flexShrink:0 }}>
        <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, color:'#2C6FED', marginBottom:4, whiteSpace:'nowrap' }}>{price}</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="#2C6FED" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </Link>
  )
}

export function HoverBlogCard({ href, tag, tagColor, tagBorder, readtime, title, desc, date }: {
  href: string; tag: string; tagColor: string; tagBorder: string; readtime: string; title: string; desc: string; date: string
}) {
  return (
    <Link href={href} style={{ border:'1px solid #1C1C34', borderRadius:16, overflow:'hidden', background:'#0A0A16', textDecoration:'none', display:'flex', flexDirection:'column', transition:'border-color 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor='rgba(44,111,237,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor='#1C1C34')}
    >
      <div style={{ padding:'24px 24px 20px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, padding:'3px 10px', borderRadius:100, border:`1px solid ${tagBorder}`, color:tagColor }}>{tag}</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>{readtime} read</span>
        </div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:'#E4E4F0', lineHeight:1.3, marginBottom:10 }}>{title}</h2>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'#8A8AAA', lineHeight:1.7 }}>{desc}</p>
      </div>
      <div style={{ marginTop:'auto', padding:'14px 24px', borderTop:'1px solid #1C1C34', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#6A6A8A' }}>{date}</span>
        <span style={{ color:'#2C6FED', fontSize:14 }}>→</span>
      </div>
    </Link>
  )
}
