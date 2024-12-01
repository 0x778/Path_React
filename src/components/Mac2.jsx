import { Clone, Html, Mask, useGLTF } from '@react-three/drei'
import About from '../Sections/About'
import { useFrame } from '@react-three/fiber'

const MacModel2 = (props) => {
  const { nodes, materials } = useGLTF('/models/mac-draco.glb')

  useFrame(() => {
    // Add any frame-specific operations if necessary
  })

  return (
    <group {...props} dispose={null} scale={0.1}>
      <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
        <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          {/* Original meshes */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials['matte.001']}
          />

          {/* Cloned mesh with Mask and Html */}
          {/* <Clone object={nodes.Cube008_2}> */}
            {/* Mask to constrain the visibility of Html */}
            <Mask id={1} >
              {/* <mesh> */}
                {/* <planeGeometry args={[3, 2]} /> */}
                {/* <meshBasicMaterial color="black" stencilWrite stencilRef={1} /> */}
              {/* </mesh> */}

            {/* Html content constrained by the mask */}
            <Html
              transform
              rotation-x={-Math.PI / 2}
              position={[0, 0.2, 0.2]}
              distanceFactor={5}
              center={true}
              pointerEvents="auto"
            >
              <div
                style={{
                  width: "300px",
                  height: "150px",
                  overflow: "auto", // Makes the content scrollable
                  color: "pink",
                  backgroundColor: "blue",
                  fontSize: "12px", // Adjust font size for readability
                  border: "2px solid white",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                onPointerDown={(e) => e.stopPropagation()} // Prevent events from propagating
              >
                <p>Macbook</p>
                <About />
                <p>Scrollable content...</p>
                <p>More text here...</p>
                <p>And even more content...</p>
              </div>
            </Html>
              </Mask>
          {/* </Clone> */}
        </group>
      </group>

      {/* Remaining parts of the model */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.027, 1.201]}
      />
    </group>
  )
}

useGLTF.preload('/models/mac-draco.glb')
export default MacModel2
