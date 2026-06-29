import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy' }
export default function Page() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh', maxWidth:1100, margin:'0 auto', padding:'120px 40px 80px' }}>
      <h1 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'2rem',color:'#fff'}}>Privacy Policy</h1>
    </div>
  )
}
