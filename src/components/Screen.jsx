/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Sousinho (https://sketchfab.com/sousinho)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/hanging-security-tv-081a29a9cd2943cfb9b664e04addd81f
Title: Hanging security TV
*/

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

const ScreenModel = (props) => {
  const { nodes, materials } = useGLTF("/models/hanging_security_tv.glb");
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <group scale={0.01}>
        <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_TV_T_Security_TV_0.geometry}
            material={materials.T_Security_TV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_TV_base_T_Security_TV_0.geometry}
            position={[0.053, 0.005, -0.011]}
          >
            <Html transform>
              <h3 style={{ color: "black", backgroundColor: "red" }}>
                Hello 3DD
              </h3>
            </Html>
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TV_Pole_T_Security_TV_0.geometry}
          material={materials.T_Security_TV}
          position={[873.135, 421.981, -1889.989]}
          rotation={[-1.569, 0, 0.038]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/hanging_security_tv.glb");

export default ScreenModel;
