// @ts-nocheck
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BLUE  = '#2C6FED'
const BLUE2 = '#4A90F5'
const GOLD  = '#D4A843'

/* ─────────────────────────────────────────────
   ABOUT — Africa Globe (existing logic kept)
───────────────────────────────────────────── */
const AFRICA_POLY: [number, number][] = [
  [35.9,-5.4],[36.8,-2.0],[37.0,5.0],[37.1,10.2],[33.5,25.0],[31.2,32.3],
  [27.0,34.0],[23.5,36.5],[22.0,37.5],[18.0,40.0],[11.5,43.5],[10.5,44.0],
  [8.0,45.0],[4.5,42.0],[2.0,41.5],[-1.5,40.5],[-4.7,39.6],[-8.0,39.5],
  [-11.0,40.5],[-15.0,40.0],[-18.0,37.0],[-22.0,35.5],[-26.0,33.0],
  [-29.5,31.0],[-34.8,26.0],[-34.4,20.0],[-34.8,18.5],[-33.0,17.9],
  [-28.5,16.5],[-23.0,14.5],[-17.0,11.5],[-11.0,10.5],[-4.5,8.5],
  [0.5,8.5],[2.5,9.5],[4.0,3.5],[5.0,1.0],[5.5,-1.5],[5.0,-4.0],
  [4.5,-7.5],[3.0,-10.0],[7.5,-14.5],[10.5,-15.0],[12.0,-16.5],
  [14.5,-17.3],[15.5,-16.5],[18.0,-16.3],[20.5,-17.0],[27.5,-13.0],
  [30.0,-10.0],[35.9,-5.4],
]
function inAfrica(lat:number,lng:number):boolean{
  let inside=false;const p=AFRICA_POLY
  for(let i=0,j=p.length-1;i<p.length;j=i++){
    const[yi,xi]=p[i],[yj,xj]=p[j]
    if(((yi>lat)!==(yj>lat))&&(lng<((xj-xi)*(lat-yi))/(yj-yi)+xi))inside=!inside
  }
  return inside
}
const AC=22
function ll(lat:number,lng:number,r:number):THREE.Vector3{
  const phi=(90-lat)*(Math.PI/180),theta=(lng-AC+180)*(Math.PI/180)
  return new THREE.Vector3(-r*Math.sin(phi)*Math.cos(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.sin(theta))
}
export function AfricaGlobeScene(){
  const g=useRef<THREE.Group>(null),ar=useRef<THREE.Points>(null),
        pr=useRef<THREE.Mesh>(null),r1=useRef<THREE.Mesh>(null),r2=useRef<THREE.Mesh>(null)
  const R=1.55,N=3200
  const{worldGeo,africaGeo,outGeo,gridG}=useMemo(()=>{
    const w:number[]=[],a:number[]=[],PHI=Math.PI*(3-Math.sqrt(5))
    for(let i=0;i<N;i++){
      const y=1-(i/(N-1))*2,r=Math.sqrt(Math.max(0,1-y*y)),th=PHI*i
      const lat=Math.asin(y)*(180/Math.PI),lng=Math.atan2(Math.sin(th)*r,-Math.cos(th)*r)*(180/Math.PI)+AC
      const v=ll(lat,lng-AC,R)
      inAfrica(lat,lng)?a.push(v.x,v.y,v.z):w.push(v.x,v.y,v.z)
    }
    const outPts=AFRICA_POLY.map(([la,lo])=>ll(la,lo-AC,R*1.002))
    const wG=new THREE.BufferGeometry();wG.setAttribute('position',new THREE.BufferAttribute(new Float32Array(w),3))
    const aG=new THREE.BufferGeometry();aG.setAttribute('position',new THREE.BufferAttribute(new Float32Array(a),3))
    const oG=new THREE.BufferGeometry().setFromPoints(outPts)
    const grids:THREE.BufferGeometry[]=[]
    for(let la=-60;la<=60;la+=30){const pts=[];for(let s=0;s<=80;s++)pts.push(ll(la,((-180+(s/80)*360))-AC,R*1.001));grids.push(new THREE.BufferGeometry().setFromPoints(pts))}
    for(let lo=0;lo<360;lo+=30){const pts=[];for(let s=0;s<=80;s++)pts.push(ll(-90+(s/80)*180,lo-AC,R*1.001));grids.push(new THREE.BufferGeometry().setFromPoints(pts))}
    return{worldGeo:wG,africaGeo:aG,outGeo:oG,gridG:grids}
  },[])
  useFrame(({clock},d)=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.10;g.current.position.y=Math.sin(t*0.35)*0.12
    if(ar.current)(ar.current.material as any).opacity=0.75+Math.sin(t*1.2)*0.2
    if(pr.current){const s=1+Math.sin(t*1.2)*0.03;pr.current.scale.setScalar(s)}
    if(r1.current){r1.current.rotation.z=t*0.22;r1.current.rotation.x=Math.PI/2+Math.sin(t*0.18)*0.15}
    if(r2.current){r2.current.rotation.y=t*0.16;r2.current.rotation.z=Math.cos(t*0.14)*0.5}
  })
  return(
    <group ref={g}>
      <points geometry={worldGeo}><pointsMaterial color={BLUE} size={0.022} transparent opacity={0.70} sizeAttenuation depthWrite={false}/></points>
      <points ref={ar} geometry={africaGeo}><pointsMaterial color={BLUE2} size={0.048} transparent opacity={0.92} sizeAttenuation depthWrite={false}/></points>
      <line geometry={outGeo}><lineBasicMaterial color={BLUE} transparent opacity={0.9}/></line>
      {gridG.map((g,i)=><line key={i} geometry={g}><lineBasicMaterial color={BLUE} transparent opacity={0.42}/></line>)}
      <mesh><sphereGeometry args={[R,48,48]}/><meshBasicMaterial color="#0A0A1E" transparent opacity={0.35}/></mesh>
      <mesh ref={pr}><sphereGeometry args={[R*1.04,32,32]}/><meshBasicMaterial color={BLUE} transparent opacity={0.04} side={THREE.BackSide}/></mesh>
      <mesh ref={r1} rotation={[Math.PI/2,0,0]}><torusGeometry args={[R*1.35,0.012,6,120]}/><meshBasicMaterial color={BLUE} transparent opacity={0.55}/></mesh>
      <mesh ref={r2} rotation={[0.8,0,0]}><torusGeometry args={[R*1.65,0.008,6,120]}/><meshBasicMaterial color={BLUE} transparent opacity={0.30}/></mesh>
    </group>
  )
}

/* ─────────────────────────────────────────────
   STORY — DNA double helix
───────────────────────────────────────────── */
export function HelixScene(){
  const g=useRef<THREE.Group>(null)
  const{geo1,geo2,rungsGeo}=useMemo(()=>{
    const s1:THREE.Vector3[]=[],s2:THREE.Vector3[]=[],rungs:THREE.Vector3[]=[]
    const N=120,H=5,R=0.7
    for(let i=0;i<N;i++){
      const t=(i/(N-1))*Math.PI*6-Math.PI*3
      const y=(i/(N-1))*H-H/2
      s1.push(new THREE.Vector3(Math.cos(t)*R,y,Math.sin(t)*R))
      s2.push(new THREE.Vector3(Math.cos(t+Math.PI)*R,y,Math.sin(t+Math.PI)*R))
      if(i%8===0){rungs.push(new THREE.Vector3(Math.cos(t)*R,y,Math.sin(t)*R));rungs.push(new THREE.Vector3(Math.cos(t+Math.PI)*R,y,Math.sin(t+Math.PI)*R))}
    }
    return{geo1:new THREE.BufferGeometry().setFromPoints(s1),geo2:new THREE.BufferGeometry().setFromPoints(s2),rungsGeo:new THREE.BufferGeometry().setFromPoints(rungs)}
  },[])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.y=t*0.18;g.current.position.y=Math.sin(t*0.3)*0.1})
  return(
    <group ref={g}>
      <line geometry={geo1}><lineBasicMaterial color={BLUE} transparent opacity={0.85}/></line>
      <line geometry={geo2}><lineBasicMaterial color={BLUE2} transparent opacity={0.85}/></line>
      <lineSegments geometry={rungsGeo}><lineBasicMaterial color={BLUE} transparent opacity={0.70}/></lineSegments>
    </group>
  )
}

/* ─────────────────────────────────────────────
   TEAM — Social network nodes
───────────────────────────────────────────── */
export function NetworkScene(){
  const g=useRef<THREE.Group>(null)
  const{nodes,edges}=useMemo(()=>{
    const N=28
    const pts=Array.from({length:N},(_,i)=>{
      const phi=Math.acos(1-2*(i+0.5)/N),th=Math.PI*(1+Math.sqrt(5))*i
      return new THREE.Vector3(Math.sin(phi)*Math.cos(th)*2,Math.cos(phi)*2,Math.sin(phi)*Math.sin(th)*2)
    })
    const edgeVerts:THREE.Vector3[]=[]
    for(let i=0;i<N;i++)for(let j=i+1;j<N;j++)if(pts[i].distanceTo(pts[j])<1.8){edgeVerts.push(pts[i],pts[j])}
    return{nodes:pts,edges:new THREE.BufferGeometry().setFromPoints(edgeVerts)}
  },[])
  const refs=useMemo(()=>nodes.map(()=>useRef<THREE.Mesh>(null)),[nodes])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.12;g.current.rotation.x=Math.sin(t*0.08)*0.2
    refs.forEach((r,i)=>{if(r.current){const s=0.045+Math.sin(t*0.8+i)*0.02;r.current.scale.setScalar(s)}})
  })
  return(
    <group ref={g}>
      <lineSegments geometry={edges}><lineBasicMaterial color={BLUE} transparent opacity={0.55}/></lineSegments>
      {nodes.map((p,i)=>(
        <mesh key={i} ref={refs[i]} position={[p.x,p.y,p.z]}>
          <sphereGeometry args={[1,8,8]}/>
          <meshBasicMaterial color={i<4?GOLD:BLUE} transparent opacity={i<4?0.9:0.65}/>
        </mesh>
      ))}
    </group>
  )
}

/* ─────────────────────────────────────────────
   WHY — Shield / hexagon lattice
───────────────────────────────────────────── */
export function ShieldScene(){
  const g=useRef<THREE.Group>(null)
  const rings=useMemo(()=>{
    const all:THREE.BufferGeometry[]=[]
    for(let r=1;r<=4;r++){
      const pts:THREE.Vector3[]=[]
      const N=r*6;for(let i=0;i<=N;i++){const a=(i/N)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r*0.5,Math.sin(a)*r*0.5,0))}
      all.push(new THREE.BufferGeometry().setFromPoints(pts))
    }
    return all
  },[])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.z=t*0.08;g.current.rotation.y=Math.sin(t*0.2)*0.4
    g.current.position.y=Math.sin(t*0.35)*0.12
  })
  return(
    <group ref={g}>
      {rings.map((geo,i)=>(
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={BLUE} transparent opacity={0.35+(i*0.15)}/>
        </line>
      ))}
      <mesh rotation={[0,0,Math.PI/6]}><cylinderGeometry args={[1.4,1.6,0.04,6]}/><meshBasicMaterial color={BLUE} wireframe opacity={0.7} transparent/></mesh>
      <mesh><sphereGeometry args={[0.12,12,12]}/><meshBasicMaterial color={GOLD} transparent opacity={0.9}/></mesh>
    </group>
  )
}

/* ─────────────────────────────────────────────
   SERVICES — Orbital system (12 service nodes)
───────────────────────────────────────────── */
export function OrbitalScene(){
  const g=useRef<THREE.Group>(null)
  const orbs=useMemo(()=>Array.from({length:12},(_,i)=>({r:0.9+Math.floor(i/4)*0.7,speed:0.4-Math.floor(i/4)*0.1,phase:(i/12)*Math.PI*2,size:0.06+Math.random()*0.04})),[])
  const meshRefs=useMemo(()=>orbs.map(()=>useRef<THREE.Mesh>(null)),[orbs])
  const rings=useMemo(()=>[0.9,1.6,2.3].map(r=>{
    const pts:THREE.Vector3[]=[];for(let i=0;i<=128;i++){const a=(i/128)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,0,Math.sin(a)*r))}
    return new THREE.BufferGeometry().setFromPoints(pts)
  }),[])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.06
    orbs.forEach((o,i)=>{
      const r=meshRefs[i]
      if(!r.current)return
      const a=t*o.speed+o.phase
      r.current.position.set(Math.cos(a)*o.r,Math.sin(a*0.3)*0.2,Math.sin(a)*o.r)
      const s=o.size*(0.85+Math.sin(t+i)*0.15);r.current.scale.setScalar(s)
    })
  })
  return(
    <group ref={g} rotation={[0.3,0,0]}>
      <mesh><sphereGeometry args={[0.18,16,16]}/><meshBasicMaterial color={GOLD} transparent opacity={0.9}/></mesh>
      {rings.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.65-i*0.06}/></line>)}
      {orbs.map((o,i)=>(
        <mesh key={i} ref={meshRefs[i]}>
          <sphereGeometry args={[1,8,8]}/>
          <meshBasicMaterial color={i%3===0?GOLD:BLUE} transparent opacity={0.8}/>
        </mesh>
      ))}
    </group>
  )
}

/* ─────────────────────────────────────────────
   SERVICE/[SLUG] — Dynamic per-service mesh
───────────────────────────────────────────── */
export function ServiceSlugScene({slug}:{slug:string}){
  if(slug==='seo-services')     return <RadarScene/>
  if(slug==='branding')         return <CrystalScene/>
  if(slug==='digital-marketing')return <SignalScene/>
  if(slug==='video-editing')    return <FilmReelScene/>
  if(slug==='animation')        return <SpiralScene/>
  if(slug==='architectural-design')return <GridBoxScene/>
  if(slug==='graphic-design')   return <PrismScene/>
  if(slug==='cybersecurity')    return <ShieldScene/>
  if(slug==='data-entry')       return <DataStreamScene/>
  if(slug==='content-creation') return <TextWaveScene/>
  if(slug==='image-editing')    return <LensScene/>
  return <OrbitalScene/>   // website-design fallback
}

/* ─────────────────────────────────────────────
   PORTFOLIO — Floating frames
───────────────────────────────────────────── */
export function PortfolioScene(){
  const g=useRef<THREE.Group>(null)
  const frames=useMemo(()=>Array.from({length:6},(_,i)=>({
    pos:[Math.cos((i/6)*Math.PI*2)*2,((i%2)-0.5)*1.2,Math.sin((i/6)*Math.PI*2)*2] as [number,number,number],
    rot:[Math.random()*0.4,Math.random()*Math.PI*2,Math.random()*0.3] as [number,number,number],
    w:0.7+Math.random()*0.5,h:0.5+Math.random()*0.4
  })),[])
  const frameRefs=useMemo(()=>frames.map(()=>useRef<THREE.Group>(null)),[frames])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.08
    frameRefs.forEach((r,i)=>{if(r.current){r.current.rotation.y=Math.sin(t*0.3+i)*0.2;r.current.position.y=frames[i].pos[1]+Math.sin(t*0.4+i*1.2)*0.15}})
  })
  return(
    <group ref={g}>
      {frames.map((f,i)=>(
        <group key={i} ref={frameRefs[i]} position={f.pos} rotation={f.rot}>
          <mesh><planeGeometry args={[f.w,f.h]}/><meshBasicMaterial color="#0A0A1E" transparent opacity={0.70}/></mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(f.w,f.h)]}/>
            <lineBasicMaterial color={BLUE} transparent opacity={0.7}/>
          </lineSegments>
        </group>
      ))}
    </group>
  )
}

/* ─────────────────────────────────────────────
   PRICING — Crystals / diamonds
───────────────────────────────────────────── */
export function CrystalScene(){
  const g=useRef<THREE.Group>(null)
  const crystals=useMemo(()=>Array.from({length:7},(_,i)=>({
    pos:[Math.cos((i/7)*Math.PI*2)*1.8,(Math.random()-0.5)*1.5,Math.sin((i/7)*Math.PI*2)*1.8] as [number,number,number],
    scale:0.18+Math.random()*0.22,speed:0.2+Math.random()*0.3,phase:Math.random()*Math.PI*2
  })),[])
  const refs=useMemo(()=>crystals.map(()=>useRef<THREE.Mesh>(null)),[crystals])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.10
    refs.forEach((r,i)=>{if(!r.current)return;const c=crystals[i];r.current.rotation.y=t*c.speed+c.phase;r.current.rotation.x=t*c.speed*0.7;r.current.position.y=c.pos[1]+Math.sin(t*0.5+c.phase)*0.15})
  })
  return(
    <group ref={g}>
      {crystals.map((c,i)=>(
        <mesh key={i} ref={refs[i]} position={c.pos} scale={c.scale}>
          <octahedronGeometry args={[1,0]}/>
          <meshBasicMaterial color={i===0?GOLD:BLUE} wireframe transparent opacity={0.8}/>
        </mesh>
      ))}
      <mesh position={[0,0,0]} scale={0.35}><octahedronGeometry args={[1,0]}/><meshBasicMaterial color={GOLD} transparent opacity={0.9}/></mesh>
    </group>
  )
}

/* ─────────────────────────────────────────────
   BLOG LISTING — Floating text particles
───────────────────────────────────────────── */
export function BlogScene(){
  const g=useRef<THREE.Group>(null)
  const docs=useMemo(()=>Array.from({length:8},(_,i)=>({
    pos:[(Math.random()-0.5)*4,(Math.random()-0.5)*3,(Math.random()-0.5)*2] as [number,number,number],
    rot:[Math.random()*0.5,Math.random()*Math.PI,Math.random()*0.5] as [number,number,number],
    speed:0.15+Math.random()*0.2,phase:Math.random()*Math.PI*2
  })),[])
  const refs=useMemo(()=>docs.map(()=>useRef<THREE.Group>(null)),[docs])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.05
    refs.forEach((r,i)=>{if(!r.current)return;const d=docs[i];r.current.position.y=d.pos[1]+Math.sin(t*d.speed+d.phase)*0.3;r.current.rotation.y=d.rot[1]+t*d.speed*0.5})
  })
  return(
    <group ref={g}>
      {docs.map((d,i)=>(
        <group key={i} ref={refs[i]} position={d.pos} rotation={d.rot}>
          <mesh><planeGeometry args={[0.55,0.7]}/><meshBasicMaterial color="#0A0A1E" transparent opacity={0.35}/></mesh>
          {[0.25,0.12,-0.0,-0.12].map((y,j)=>(
            <mesh key={j} position={[0,y,0.01]}><planeGeometry args={[0.38*(j===0?1:0.7+Math.random()*0.3),0.03]}/><meshBasicMaterial color={BLUE} transparent opacity={0.55}/></mesh>
          ))}
          <lineSegments><edgesGeometry args={[new THREE.PlaneGeometry(0.55,0.7)]}/><lineBasicMaterial color={BLUE} transparent opacity={0.6}/></lineSegments>
        </group>
      ))}
    </group>
  )
}

/* ─────────────────────────────────────────────
   BLOG [SLUG] — Flowing horizontal lines
───────────────────────────────────────────── */
export function TextWaveScene(){
  const g=useRef<THREE.Group>(null)
  const lines=useMemo(()=>{
    const geos:THREE.BufferGeometry[]=[]
    for(let row=0;row<12;row++){
      const pts:THREE.Vector3[]=[],N=60,w=2.5+Math.random()*1.5,y=(row-5.5)*0.28
      for(let i=0;i<N;i++)pts.push(new THREE.Vector3(-w/2+(i/(N-1))*w,y,0))
      geos.push(new THREE.BufferGeometry().setFromPoints(pts))
    }
    return geos
  },[])
  const posRef=useRef<Float32Array|null>(null)
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=Math.sin(t*0.15)*0.3
    lines.forEach((geo,row)=>{
      const arr=geo.attributes.position.array as Float32Array
      for(let i=0;i<arr.length/3;i++){const x=arr[i*3];arr[i*3+1]+=(Math.sin(x*2+t*1.2+row*0.4)*0.015)}
      geo.attributes.position.needsUpdate=true
    })
  })
  return(
    <group ref={g}>
      {lines.map((geo,i)=>(
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={BLUE} transparent opacity={0.45+Math.sin(i)*0.1}/>
        </line>
      ))}
    </group>
  )
}

/* ─────────────────────────────────────────────
   CONTACT — Radar / signal ping rings
───────────────────────────────────────────── */
export function RadarScene(){
  const g=useRef<THREE.Group>(null)
  const ringRefs=useMemo(()=>Array.from({length:5},()=>useRef<THREE.Mesh>(null)),[])
  const sweepRef=useRef<THREE.Mesh>(null)
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.x=Math.PI*0.5
    if(sweepRef.current)sweepRef.current.rotation.z=-t*0.8
    ringRefs.forEach((r,i)=>{
      if(!r.current)return
      const phase=(t*0.5+(i/5))%1
      const scale=0.5+phase*3.5
      r.current.scale.setScalar(scale)
      ;(r.current.material as any).opacity=Math.max(0,(1-phase)*0.55)
    })
  })
  const staticRings=useMemo(()=>[0.8,1.6,2.4,3.2].map(r=>{
    const pts:THREE.Vector3[]=[];for(let i=0;i<=96;i++){const a=(i/96)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0))}
    return new THREE.BufferGeometry().setFromPoints(pts)
  }),[])
  const crossGeos=useMemo(()=>{
    const h=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-3.5,0,0),new THREE.Vector3(3.5,0,0)])
    const v=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-3.5,0),new THREE.Vector3(0,3.5,0)])
    return[h,v]
  },[])
  return(
    <group ref={g}>
      {staticRings.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.35}/></line>)}
      {crossGeos.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.35}/></line>)}
      {ringRefs.map((r,i)=>(
        <mesh key={i} ref={r} rotation={[0,0,0]}>
          <ringGeometry args={[0.5,0.52,96]}/>
          <meshBasicMaterial color={BLUE} transparent opacity={0} side={THREE.DoubleSide}/>
        </mesh>
      ))}
      <mesh ref={sweepRef}>
        <meshBasicMaterial color={BLUE} transparent opacity={0.42} side={THREE.DoubleSide}/>
        <bufferGeometry attach="geometry" {...useMemo(()=>{
          const g=new THREE.BufferGeometry()
          const v=new Float32Array([0,0,0,3.5,0,0,3.5*Math.cos(0.4),3.5*Math.sin(0.4),0])
          g.setAttribute('position',new THREE.BufferAttribute(v,3));return g
        },[])}/>
      </mesh>
      <mesh><sphereGeometry args={[0.08,12,12]}/><meshBasicMaterial color={GOLD} transparent opacity={0.9}/></mesh>
    </group>
  )
}

/* ─────────────────────────────────────────────
   CAREERS — Rising particles
───────────────────────────────────────────── */
export function CareersScene(){
  const g=useRef<THREE.Group>(null)
  const pts=useMemo(()=>{
    const count=180,arr=new Float32Array(count*3),phases=new Float32Array(count)
    for(let i=0;i<count;i++){arr[i*3]=(Math.random()-0.5)*4;arr[i*3+1]=(Math.random()-0.5)*5;arr[i*3+2]=(Math.random()-0.5)*2;phases[i]=Math.random()*Math.PI*2}
    return{arr,phases,count}
  },[])
  const geo=useMemo(()=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pts.arr.slice(),3));return g},[pts])
  const arrowGeos=useMemo(()=>Array.from({length:5},(_,i)=>{
    const x=(i-2)*0.8,pts2=[new THREE.Vector3(x,-2,0),new THREE.Vector3(x,2,0),new THREE.Vector3(x-0.2,1.6,0),new THREE.Vector3(x,2,0),new THREE.Vector3(x+0.2,1.6,0)]
    return new THREE.BufferGeometry().setFromPoints(pts2)
  }),[])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=t*0.07
    const pos=geo.attributes.position.array as Float32Array
    for(let i=0;i<pts.count;i++){
      pos[i*3+1]+=0.008
      if(pos[i*3+1]>2.5){pos[i*3+1]=-2.5;pos[i*3]=(Math.random()-0.5)*4;pos[i*3+2]=(Math.random()-0.5)*2}
    }
    geo.attributes.position.needsUpdate=true
  })
  return(
    <group ref={g}>
      <points geometry={geo}><pointsMaterial color={BLUE} size={0.045} transparent opacity={0.7} sizeAttenuation depthWrite={false}/></points>
      {arrowGeos.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.55}/></line>)}
    </group>
  )
}

/* ─────────────────────────────────────────────
   SERVICE-SPECIFIC SCENES
───────────────────────────────────────────── */

// SEO — already RadarScene above

// Digital Marketing — signal waves
export function SignalScene(){
  const g=useRef<THREE.Group>(null)
  const waveGeos=useMemo(()=>Array.from({length:6},(_,i)=>{
    const pts:THREE.Vector3[]=[],N=80,r=0.5+(i*0.4)
    for(let j=0;j<=N;j++){const a=(j/N)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0))}
    return new THREE.BufferGeometry().setFromPoints(pts)
  }),[])
  const refs=useMemo(()=>waveGeos.map(()=>useRef<THREE.Mesh>(null)),[waveGeos])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.y=Math.sin(t*0.2)*0.5;g.current.rotation.x=t*0.06;waveGeos.forEach((_,i)=>{const phase=(t*0.4+i*0.3)%1;if(refs[i].current){refs[i].current.scale.z=0.8+Math.sin(t+i)*0.5}})})
  return(
    <group ref={g} rotation={[0.5,0,0]}>
      {waveGeos.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.40+i*0.08}/></line>)}
      <mesh><sphereGeometry args={[0.1,12,12]}/><meshBasicMaterial color={GOLD} transparent opacity={0.9}/></mesh>
    </group>
  )
}

// Video editing — film reel
export function FilmReelScene(){
  const g=useRef<THREE.Group>(null)
  const{outer,inner,spokes}=useMemo(()=>{
    const mkCircle=(r:number)=>{const pts:THREE.Vector3[]=[];for(let i=0;i<=96;i++){const a=(i/96)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0))};return new THREE.BufferGeometry().setFromPoints(pts)}
    const sp:THREE.BufferGeometry[]=[]
    for(let i=0;i<8;i++){const a=(i/8)*Math.PI*2;sp.push(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(Math.cos(a)*0.4,Math.sin(a)*0.4,0),new THREE.Vector3(Math.cos(a)*1.4,Math.sin(a)*1.4,0)]))}
    return{outer:mkCircle(1.6),inner:mkCircle(0.4),spokes:sp}
  },[])
  const hole1=useMemo(()=>{const pts:THREE.Vector3[]=[];for(let i=0;i<=32;i++){const a=(i/32)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*0.18+0.8,Math.sin(a)*0.18,0))};return new THREE.BufferGeometry().setFromPoints(pts)},[])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.z=t*0.35;g.current.rotation.y=Math.sin(t*0.2)*0.5;g.current.position.y=Math.sin(t*0.3)*0.15})
  return(
    <group ref={g}>
      <line geometry={outer}><lineBasicMaterial color={BLUE} transparent opacity={0.85}/></line>
      <line geometry={inner}><lineBasicMaterial color={BLUE} transparent opacity={0.6}/></line>
      {spokes.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.70}/></line>)}
      {[0,1,2,3,4,5].map(i=>{const a=(i/6)*Math.PI*2;return <line key={i} geometry={hole1}><lineBasicMaterial color={BLUE} transparent opacity={0.5}/></line>})}
    </group>
  )
}

// Animation — 3D spiral
export function SpiralScene(){
  const g=useRef<THREE.Group>(null)
  const spirals=useMemo(()=>[1,0.6,-1,-0.6].map((dir,si)=>{
    const pts:THREE.Vector3[]=[],N=200
    for(let i=0;i<N;i++){const t=(i/(N-1))*Math.PI*8,r=0.2+t*0.08;pts.push(new THREE.Vector3(Math.cos(t*dir)*r,t*0.08-2.5,Math.sin(t*dir)*r))}
    return new THREE.BufferGeometry().setFromPoints(pts)
  }),[])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.y=t*0.15;g.current.position.y=Math.sin(t*0.25)*0.2})
  return(
    <group ref={g}>
      {spirals.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={i%2===0?BLUE:BLUE2} transparent opacity={0.65-i*0.08}/></line>)}
    </group>
  )
}

// Architectural — grid box
export function GridBoxScene(){
  const g=useRef<THREE.Group>(null)
  const grids=useMemo(()=>{
    const lines:THREE.BufferGeometry[]=[]
    for(let i=0;i<=6;i++){
      const v=i/6*2-1
      lines.push(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1,v,-1),new THREE.Vector3(1,v,-1),new THREE.Vector3(1,v,1),new THREE.Vector3(-1,v,1),new THREE.Vector3(-1,v,-1)]))
      lines.push(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(v,-1,-1),new THREE.Vector3(v,1,-1),new THREE.Vector3(v,1,1),new THREE.Vector3(v,-1,1),new THREE.Vector3(v,-1,-1)]))
    }
    return lines
  },[])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.y=t*0.12;g.current.rotation.x=t*0.07;g.current.position.y=Math.sin(t*0.3)*0.1})
  return(
    <group ref={g} scale={1.5}>
      {grids.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.42}/></line>)}
      <lineSegments><edgesGeometry args={[new THREE.BoxGeometry(2,2,2)]}/><lineBasicMaterial color={BLUE} transparent opacity={0.7}/></lineSegments>
    </group>
  )
}

// Graphic design — prism
export function PrismScene(){
  const g=useRef<THREE.Group>(null)
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.y=t*0.18;g.current.rotation.z=t*0.06;g.current.position.y=Math.sin(t*0.3)*0.15})
  return(
    <group ref={g}>
      <lineSegments><edgesGeometry args={[new THREE.CylinderGeometry(0,1.5,3,3)]}/><lineBasicMaterial color={BLUE} transparent opacity={0.8}/></lineSegments>
      <lineSegments><edgesGeometry args={[new THREE.CylinderGeometry(0,1.0,2,3)]}/><lineBasicMaterial color={BLUE2} transparent opacity={0.5}/></lineSegments>
    </group>
  )
}

// Cybersecurity — already ShieldScene above

// Data Entry — data stream columns
export function DataStreamScene(){
  const g=useRef<THREE.Group>(null)
  const columns=useMemo(()=>Array.from({length:8},(_,i)=>{
    const x=(i-3.5)*0.55,pts:THREE.Vector3[]=[]
    for(let j=0;j<20;j++)pts.push(new THREE.Vector3(x,(j-10)*0.25,0))
    return{geo:new THREE.BufferGeometry().setFromPoints(pts),phase:i*0.3}
  }),[])
  const colRefs=useMemo(()=>columns.map(()=>useRef<THREE.Points>(null)),[columns])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.y=Math.sin(t*0.15)*0.4
    colRefs.forEach((r,i)=>{if(r.current){r.current.position.y=((t*0.5+columns[i].phase)%2.5)-1.25;(r.current.material as any).opacity=0.4+Math.sin(t+i)*0.3}})
  })
  return(
    <group ref={g}>
      {columns.map((c,i)=>(
        <points key={i} ref={colRefs[i]} geometry={c.geo}>
          <pointsMaterial color={i%2===0?BLUE:BLUE2} size={0.06} transparent opacity={0.6} sizeAttenuation depthWrite={false}/>
        </points>
      ))}
    </group>
  )
}

// Image editing — lens / aperture
export function LensScene(){
  const g=useRef<THREE.Group>(null)
  const blades=useMemo(()=>Array.from({length:8},(_,i)=>{
    const a=(i/8)*Math.PI*2,r1=0.3,r2=1.4
    const geo=new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(Math.cos(a)*r1,Math.sin(a)*r1,0),
      new THREE.Vector3(Math.cos(a+0.35)*r2,Math.sin(a+0.35)*r2,0),
      new THREE.Vector3(Math.cos(a+0.65)*r2,Math.sin(a+0.65)*r2,0),
      new THREE.Vector3(Math.cos(a)*r1,Math.sin(a)*r1,0),
    ])
    return geo
  }),[])
  const rings=useMemo(()=>[0.3,0.7,1.4].map(r=>{const pts:THREE.Vector3[]=[];for(let i=0;i<=64;i++){const a=(i/64)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0))};return new THREE.BufferGeometry().setFromPoints(pts)}),[])
  useFrame(({clock})=>{if(!g.current)return;const t=clock.getElapsedTime();g.current.rotation.z=t*0.2;g.current.rotation.y=Math.sin(t*0.15)*0.5;g.current.position.y=Math.sin(t*0.3)*0.12})
  return(
    <group ref={g}>
      {blades.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.6}/></line>)}
      {rings.map((geo,i)=><line key={i} geometry={geo}><lineBasicMaterial color={BLUE} transparent opacity={0.35+i*0.15}/></line>)}
    </group>
  )
}

/* ─────────────────────────────────────────────
   LEGAL — Minimal concentric floating rings
───────────────────────────────────────────── */
export function LegalScene(){
  const g=useRef<THREE.Group>(null)
  const rings=useMemo(()=>[1.0,1.8,2.6,3.4].map(r=>{
    const pts:THREE.Vector3[]=[]
    for(let i=0;i<=96;i++){const a=(i/96)*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0))}
    return new THREE.BufferGeometry().setFromPoints(pts)
  }),[])
  useFrame(({clock})=>{
    if(!g.current)return;const t=clock.getElapsedTime()
    g.current.rotation.z=t*0.04
    g.current.rotation.x=Math.sin(t*0.12)*0.25
    g.current.position.y=Math.sin(t*0.22)*0.1
  })
  return(
    <group ref={g}>
      {rings.map((geo,i)=>(
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={BLUE} transparent opacity={0.35+(i*0.12)}/>
        </line>
      ))}
      <mesh><sphereGeometry args={[0.08,12,12]}/><meshBasicMaterial color={GOLD} transparent opacity={0.7}/></mesh>
    </group>
  )
}
