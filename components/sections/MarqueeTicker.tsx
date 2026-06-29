const items = [
  'Website Design','SEO Strategy','Brand Identity','Motion Graphics',
  '3D Animation','Digital Marketing','Content Creation','Architectural Viz',
  'Video Production','Image Editing','Cybersecurity','Mass Data Entry',
]

export default function MarqueeTicker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ borderTop:'1px solid #1C1C34', borderBottom:'1px solid #1C1C34', background:'#0A0A16', padding:'14px 0', overflow:'hidden' }}>
      <div style={{ display:'flex', gap:0, width:'max-content', animation:'marquee 40s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:32, paddingRight:32, whiteSpace:'nowrap' }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:12, textTransform:'uppercase', letterSpacing:'0.12em', color:'#6A6A8A' }}>{item}</span>
            <span style={{ color:'#2C6FED', fontSize:10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
