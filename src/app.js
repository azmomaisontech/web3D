import "./app.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControl } from "./components/orbit-control/index";
import { BoxWithLight, Floor } from "./components/lights";

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas
          style={{ backgroundColor: "#222222" }}
          camera={{ position: [3, 3, 3] }}
        >
          <React.Suspense fallback={null}>
            <OrbitControl />
            <BoxWithLight position={[0, 1, 1]} />
            <Floor />
            <axesHelper args={[5]} />
          </React.Suspense>
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
