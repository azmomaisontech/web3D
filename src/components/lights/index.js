import React from "react";
import { useFrame } from "@react-three/fiber";

export function BoxWithLight(props) {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"blue"} />
    </mesh>
  );
}

export function Floor(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
}
