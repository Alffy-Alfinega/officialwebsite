'use client'

import { useState } from 'react'

const FAQS = [
  { q: 'Are there hidden fees?', a: 'Never. Every proposal includes a fixed total. Costs only change if you expand scope — and we always discuss that first.' },
  { q: 'Can I pay in instalments?', a: 'Yes. Projects over 1,000,000 UGX can be split 50% deposit / 50% on completion. Larger projects can have custom schedules.' },
  { q: 'Does pricing include hosting and domain?', a: 'Website packages include setup. Ongoing hosting (~150,000 UGX/year) and domain (~50,000 UGX/year) are billed separately — you own them.' },
  { q: 'Is there a minimum engagement?', a: 'No minimum for one-off projects. SEO retainers have a 3-month minimum to show results.' },
  { q: 'Do you offer NGO or startup discounts?', a: 'Yes — 15% off for registered NGOs and early-stage startups. Mention your org type when you reach out.' },
  { q: 'Can I upgrade my package later?', a: 'Absolutely. Existing work is credited toward upgrades. Many clients start Starter and grow into Growth.' },
]

export default function PricingFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <div>
      <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:28, color:'#fff', marginBottom:24 }}>FAQs</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{ border:`1px solid ${open===i ? 'rgba(44,111,237,0.3)' : '#1C1C34'}`, borderRadius:12, overflow:'hidden', transition:'border-color 0.3s' }}>
            <button onClick={() => setOpen(open===i ? null : i)} style={{
              width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
              padding:'16px 20px', background:'transparent', border:'none', cursor:'pointer', textAlign:'left',
            }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, color: open===i ? '#2C6FED' : '#E4E4F0' }}>{f.q}</span>
              <span style={{ color: open===i ? '#2C6FED' : '#8A8AAA', fontSize:18, transform: open===i ? 'rotate(45deg)' : 'none', transition:'transform 0.2s', marginLeft:16, flexShrink:0 }}>+</span>
            </button>
            <div style={{ maxHeight: open===i ? 200 : 0, overflow:'hidden', transition:'max-height 0.3s ease' }}>
              <p style={{ padding:'0 20px 16px', fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#9A9ABB', lineHeight:1.7 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
