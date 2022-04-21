import "./app.css";
import React from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function CameraControl() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

function Box(props) {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color={"blue"} />
    </mesh>
  );
}

function Points({ count = 1 }) {
  const vertices = new Float32Array(count * 3);
  for (let x = 0; x < count * 3; x++) {
    vertices[x] = 0;
  }
  const material = new THREE.PointsMaterial({ color: "white", size: 1 });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  return <points material={material} geometry={geometry} />;
}

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas
          style={{ backgroundColor: "#222222" }}
          camera={{ position: [3, 3, 3] }}
        >
          <React.Suspense fallback={null}>
            <CameraControl />
            <Box position={[0, 1, 1]} />
            <Points />
            <axesHelper args={[5]} />
          </React.Suspense>
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
