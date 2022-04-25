import React from "react";
import { useFrame } from "@react-three/fiber";

export function BoxWithLight(props) {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"blue"} />
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
