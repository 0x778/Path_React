import { Canvas } from '@react-three/fiber'
import './App.css'
import Env from './components/Env'
import { ScrollControls } from '@react-three/drei'

function App() {


  return (
    <>
    <Canvas>
      <ScrollControls pages={10} damping={1}>
  
      <Env/>
      </ScrollControls>
    </Canvas>
    </>
  )
}

export default App
