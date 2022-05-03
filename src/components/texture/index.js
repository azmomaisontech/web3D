import React from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export function BoxWithTexture(props) {
  const ref = React.useRef();
  const texture = useTexture("/assets/wood.jpeg");
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={ref} {...props} receiveShadow castShadow>
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial fog={false} map={texture} />
    </mesh>
  );
}

export function Background() {
  const { gl } = useThree();
  const texture = useTexture("/assets/autoshop.jpeg");
  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
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
