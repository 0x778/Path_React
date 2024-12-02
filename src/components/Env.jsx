import { Environment, GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import ScreenModel from './Screen'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import HtmlMaterial from './HtmlMaterial';

function Env() {
    const NB_POINTS = 1000 ; 
    const curve = useMemo(()=>{
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-2, 0, 10),
            new THREE.Vector3(-1, 0, 8),
            new THREE.Vector3(0, 0, 5),
            new THREE.Vector3(0, 0, 3),
        ],false,"catmullrom")
        return curve
    })

    const linePoints = useMemo(()=>{
        return curve.getPoints(NB_POINTS)
    },[curve])


    const cam = useRef();
    const scroll = useScroll();
    const lineRef= useRef();
useFrame(() => {
  // const curPointIndex = Math.min(Math.round(scroll.offset * linePoints.length),linePoints.length - 1)
  // const curpoint = linePoints[curPointIndex]
    // cam.current.position.copy(curpoint)
  
  // cam.current.position.z = (scroll.offset * 100);

  // cam.current.lookAt(lineRef)
})
  return (
    <>
    <GizmoHelper alignment='bottom-left' scale={100} margin={[80, 80]}>
        <GizmoViewcube/>
        <GizmoViewport/>
    </GizmoHelper>
    <gridHelper/>
    <axesHelper/>
    <OrbitControls/>
    <directionalLight/>
    {/* <line path={linePoints} color={'white'} linewidth={10} ref={lineRef}/> */}
    <PerspectiveCamera makeDefault ref={cam} position={[0, 1, 10]} fov={50} />
    <color attach={'background'} args={['#123456']} />
    <Environment preset='sunset'/>
    {/* <group rotation={[0 , 0 ,0]} position={[40,0,40]} scale={2}> */}
    {/* <MacModel/> */}
    {/* <ScreenModel/> */}
    
     <HtmlMaterial  htmlContent={<div style={{  color: 'black' , backgroundColor: "red"}}>
            <h3>Hello 3D!</h3>
            <input type="text" placeholder="Type here..." />
          </div>}/>

    {/* </group> */}
    <ScreenModel/>
    </>
  )
}

export default Env