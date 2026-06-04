'use client'

import { useState } from 'react'

const faqs = [
  { q: 'Are there any hidden fees?', a: 'Never. Every proposal includes a fixed total price. The only time costs change is if you expand the project scope, and we always discuss that before proceeding.' },
  { q: 'Can I pay in instalments?', a: 'Yes. For projects over 1,000,000 UGX, we offer a 50% deposit / 50% on completion structure. For larger projects, we can arrange custom payment schedules.' },
  { q: 'Do prices include hosting and domain?', a: 'Web packages include setup and configuration, but ongoing hosting (~150,000 UGX/year) and domain (~50,000 UGX/year) are billed separately — you own those assets directly.' },
  { q: 'What is the minimum engagement?', a: 'There is no minimum for one-off projects. SEO retainers have a 3-month minimum to give strategies enough time to show results.' },
  { q: 'Do you offer discounts for startups or NGOs?', a: 'Yes. We offer a 15% discount for registered NGOs and early-stage startups. Reach out via the contact form and mention your organisation type.' },
  { q: 'Can I upgrade my package later?', a: 'Absolutely. Many clients start with Starter and upgrade to Growth as their business scales. Existing work is credited toward the upgrade cost.' },
]

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-8">
        Pricing FAQs
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors ${open === i ? 'border-[#2C6FED]/30' : 'border-[#1a1a1a]'}`}
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left group"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
            >
              <span className={`font-syne font-semibold text-sm transition-colors ${open === i ? 'text-[#2C6FED]' : 'text-white group-hover:text-[#2C6FED]'}`}>
                {faq.q}
              </span>
              <span
                className={`font-mono text-sm ml-4 shrink-0 transition-all duration-200 ${open === i ? 'text-[#2C6FED] rotate-45' : 'text-[#8A8AAA]'}`}
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open === i ? '200px' : '0px' }}
            >
              <p className="font-outfit text-sm text-[#9A9ABB] leading-relaxed px-5 pb-5">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
