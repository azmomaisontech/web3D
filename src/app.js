import "./app.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControl } from "./components/orbit-control/index";
import { BoxWithTexture, Bulb, Floor } from "./components/texture";

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Canvas
          shadows
          style={{ backgroundColor: "#222222" }}
          camera={{ position: [1, 5, 1] }}
        >
          <React.Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <fog attach="fog" args={["white", 1, 10]} />
            <OrbitControl />
            <Bulb position={[0, 3, 0]} />
            <BoxWithTexture position={[0, 1, 0]} />
            <Floor position={[0, -0.05, 0]} />
            <axesHelper args={[5]} />
          </React.Suspense>
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
