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

function Points() {
  const [material, geometry] = React.useMemo(() => {
    const vertices = [0, 0, 0];
    const material = new THREE.PointsMaterial({ color: "yellow" });
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    return [material, geometry];
  }, []);

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
