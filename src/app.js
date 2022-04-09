import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./app.css";

function Box() {
  const meshRef = React.useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas style={{ background: "#222222" }}>
          <Box />
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
