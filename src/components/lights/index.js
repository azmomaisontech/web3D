import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function BoxWithLight(props) {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color={"blue"}
        transparent
        opacity={0.7}
        wireframe
        metalness
        rougness={0}
        clearcoat={1}
        fog={false}
        transmission={0.5}
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 0.1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
}

export function Bulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
}
