import { Canvas } from '@react-three/fiber'
import './App.css'
import Env from './components/Env'
import { Environment, GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { useRef } from 'react'
import MacModel from './components/Mac'
function App() {

const container = useRef()
  return (
    <>
    <div ref={container} className='w-full h-full'>

    <Canvas
    shadows
    flat
    linear
    // style={{pointerEvents:"none"}}
    // eventSource={container}
    >
      {/* <ScrollControls pages={10} damping={1}> */}
    <GizmoHelper alignment='bottom-left' scale={100} margin={[80, 80]}>
        <GizmoViewcube/>
        <GizmoViewport/>
    </GizmoHelper>
    <gridHelper/>
    <axesHelper/>
    <OrbitControls/>
    <directionalLight/>
    {/* <line path={} color={'white'} linewidth={10} ref={lineRef}/> */}
    <PerspectiveCamera makeDefault position={[0, 1, 10]} fov={50} />
    <color attach={'background'} args={['#123456']} />
    <Environment preset='sunset'/>
    {/* <group rotation={[0 , 0 ,0]} position={[40,0,40]} scale={2}> */}
    {/* <MacModel portal={container}/> */}
      {/* <Env/> */}
      {/* </ScrollControls> */}
      <MacModel/>
    </Canvas>
      </div>
    </>
  )
}

export default App
