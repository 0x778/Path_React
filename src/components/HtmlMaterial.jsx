import  { useRef, useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
function HtmlMaterial({ geometry, htmlContent, scale = 1 }) {
  const meshRef = useRef();
  const { camera } = useThree();
  const [domPosition, setDomPosition] = useState([0, 0, 0]);

  // Update the HTML position when the mesh or camera changes
useEffect(() => {
  if (meshRef.current && camera) {
    const meshPosition = new THREE.Vector3();
    meshRef.current.getWorldPosition(meshPosition);
      const projected = meshPosition.project(camera);
      setDomPosition([(projected.x * scale)+2, projected.y * scale, -projected.z * scale]);
    
  }
}, [camera, scale]);

  return (
    <>
      {/* Render the mesh */}
      <mesh ref={meshRef}  geometry={geometry}>
\        <meshBasicMaterial color="transparent" />
          <planeGeometry args={[4, 4]} />
      {/* Render HTML content */}
      <Html position={domPosition} transform >
        <div
          style={{
            width: '200px',
            backgroundColor: 'rgba(255, 2, 255, 0.9)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {htmlContent}
        </div>
      </Html>
      </mesh>
    </>
  );
}

export default HtmlMaterial;
