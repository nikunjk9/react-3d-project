/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 earth.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/


import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const mesh = useRef();
  const newDelhiRef = useRef(); // Reference for New Delhi
  const { nodes, materials } = useGLTF('/earth.gltf')

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001; // Adjust rotation speed if needed
    }
  });

  const radius = 1.128;
  const lat = (29.2000 * Math.PI) / 180; // Latitude in radians
  const lon = (13.4090 * Math.PI) / 180; // Longitude in radians

  // Correct Cartesian coordinates
  const x = radius * Math.cos(lat) * Math.sin(lon);
  const y = radius * Math.sin(lat);
  const z = -radius * Math.cos(lat) * Math.cos(lon);

  return (
    <group ref={mesh} {...props} dispose={null}>
      {/* Globe */}
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.128}
      />

      {/* New Delhi Glow */}
      <mesh ref={newDelhiRef} position={[x, y, z]} scale={[0.09, 0.09, 0.09]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial
          emissive="#FF0000"
          emissiveIntensity={5}
          color="#FF0000"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/earth.gltf");

