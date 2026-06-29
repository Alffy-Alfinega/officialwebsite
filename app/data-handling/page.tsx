import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Data Handling' }
export default function Page() {
  return (
    <div style={{ paddingTop:68, minHeight:'100vh', maxWidth:1100, margin:'0 auto', padding:'120px 40px 80px' }}>
      <h1 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'2rem',color:'#fff'}}>Data Handling</h1>
    </div>
  )
}
