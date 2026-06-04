export default function MarqueeTicker() {
  const items = [
    'Website Design',
    'SEO Strategy',
    'Brand Identity',
    'Motion Graphics',
    '3D Animation',
    'Digital Marketing',
    'Content Creation',
    'Architectural Viz',
    'Video Production',
    'Image Editing',
    'Cybersecurity',
    'Mass Data Entry',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="border-y py-4 overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: 'marquee 40s linear infinite', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-syne font-semibold text-sm uppercase tracking-[0.12em]" style={{ color: 'var(--text-faint)' }}>
              {item}
            </span>
            <span className="text-xs" style={{ color: '#2C6FED' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
