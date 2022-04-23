import "./app.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControl } from "./components/orbit-control/index";
import { BoxWithLight, Bulb, Floor } from "./components/lights";

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas
          shadows
          style={{ backgroundColor: "#222222" }}
          camera={{ position: [3, 3, 3] }}
        >
          <React.Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <OrbitControl />
            <Bulb position={[0, 3, 0]} />
            <BoxWithLight position={[0, 1, 1]} />
            <Floor position={[0, -0.5, 0]} />
            <axesHelper args={[5]} />
          </React.Suspense>
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
