import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
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

export function Points() {
  const [material, geometry] = React.useMemo(() => {
    const vertices = [0, 0, 0, 0, 1, 1, 0, 1, -1];
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

export function Lines() {
  const [material, geometry] = React.useMemo(() => {
    const vertices = [0, 0, 0, 0, 1, -1, 0, 1, 1];
    const material = new THREE.PointsMaterial({ color: "red" });
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    return [material, geometry];
  }, []);

  return <line material={material} geometry={geometry} />;
}

export function LinesWithFaces() {
  const geometry = React.useMemo(() => {
    const vertices = [0, 0, 0, 0, 1, -1, 0, 1, 1];
    const uvs = [0, 0, 0, 0, 1, -1];
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    return geometry;
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial side={THREE.DoubleSide} color={"blue"} />
    </mesh>
  );
}
