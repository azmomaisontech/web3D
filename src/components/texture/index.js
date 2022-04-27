import React from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

export function BoxWithTexture(props) {
  const ref = React.useRef();
  const texture = useLoader(THREE.TextureLoader, "/assets/wood.jpeg");
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial fog={false} map={texture} />
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
