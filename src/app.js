import React from "react";
import "./app.css";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function OrbitControl() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

function Box(props) {
  const meshRef = React.useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas
          style={{ background: "#222222" }}
          camera={{ position: [3, 3, 3] }}
        >
          <OrbitControl />
          <Box position={[1, 1, 0]} />
          <axesHelper args={[5]} />
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
