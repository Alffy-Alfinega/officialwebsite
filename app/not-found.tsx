import Link from 'next/link'
export default function NotFound() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:40, textAlign:'center' }}>
      <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'9rem', lineHeight:1, color:'rgba(44,111,237,0.07)', display:'block' }}>404</span>
      <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:28, color:'#fff', marginTop:-24, marginBottom:12 }}>Page not found</h1>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, color:'#8A8AAA', marginBottom:28, maxWidth:340 }}>This page doesn't exist or has moved. Head back to the home page.</p>
      <Link href="/" style={{ padding:'12px 28px', borderRadius:100, background:'linear-gradient(135deg,#2C6FED,#1A52C4)', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, textDecoration:'none' }}>Back to Home</Link>
    </div>
  )
}
