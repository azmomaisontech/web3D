import "./app.css";
import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControl } from "./components/orbit-control/index";
import { Background, BoxWithTexture, Bulb, Floor } from "./components/texture";

export default function App() {
  const pickColor = React.useCallback((e) => {
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.backgroundColor
    );
  }, []);
  return (
    <React.StrictMode>
      <div className="app">
        <div className="color-picker">
          <div
            style={{
              width: "5em",
              height: "5em",
              backgroundColor: "green",
            }}
            onClick={pickColor}
          />
          <div
            style={{
              width: "5em",
              height: "5em",
              backgroundColor: "red",
            }}
            onClick={pickColor}
          />
          <div
            style={{
              width: "5em",
              height: "5em",
              backgroundColor: "black",
            }}
            onClick={pickColor}
          />
        </div>
        <Canvas
          shadows
          style={{ backgroundColor: "#222222" }}
          camera={{ position: [3, 3, 3] }}
        >
          <ambientLight intensity={0.2} />
          <fog attach="fog" args={["white", 1, 10]} />
          <OrbitControl />
          <React.Suspense fallback={null}>
            <Background />
          </React.Suspense>
          <React.Suspense fallback={null}>
            <BoxWithTexture position={[0, 1, 0]} />
          </React.Suspense>
          <React.Suspense fallback={null}>
            <BoxWithTexture position={[-3, 1, 2]} />
          </React.Suspense>
          <Bulb position={[0, 3, 0]} />
          <Floor position={[0, -0.05, 0]} />
          <axesHelper args={[5]} />
        </Canvas>
      </div>
    </React.StrictMode>
  );
}
