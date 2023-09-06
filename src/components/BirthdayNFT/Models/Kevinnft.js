/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/BirthdayNFT/kevinnft.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={4} rotation={[0, 100, 0]}>
      <mesh
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.004']}
        position={[-0.02, 0.17, 0.03]}
        rotation={[1.75, 0.12, -0.78]}
        scale={[32.63, 1, 32.63]}
      >
        <mesh
          geometry={nodes.Curve001.geometry}
          material={materials['SVGMat.004']}
          position={[0.002, 0, 0.007]}
        />
        <mesh
          geometry={nodes.Curve002.geometry}
          material={materials['SVGMat.004']}
          position={[-0.001, 0, 0.01]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/kevinnft.gltf');
