import "./app.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/geometry";
import { OrbitControl } from "./components/orbit-control";

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
            <Box position={[0, 1, 1]} />
            <axesHelper args={[5]} />
          </React.Suspense>
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
