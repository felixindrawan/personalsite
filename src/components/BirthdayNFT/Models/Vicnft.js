/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/BirthdayNFT/vicnft.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={175} rotation={[0, 50, 0]}>
      <mesh
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.003']}
        rotation={[1.41, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/vicnft.gltf');
