/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/BirthdayNFT/chunft.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={150} rotation={[-300, 0, 100]}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.003']} />
    </group>
  );
}

useGLTF.preload('/chunft.gltf');
