import React from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export function BoxWithTexture(props) {
  const ref = React.useRef();
  const texture = useTexture("/assets/wood.jpeg");
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  const onPointerDown = React.useCallback((e) => {
    if (e.object.active) {
      e.object.active = undefined;
      window.activeMesh = undefined;
    } else {
      // Not advisable. using this for test purposes.
      // use proper state instead
      window.activeMesh = e.object;
      e.object.active = true;
    }
  }, []);

  const onPointerEnter = React.useCallback((e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  }, []);

  const onPointerLeave = React.useCallback((e) => {
    if (!e.object.active) {
      e.object.scale.x = 1;
      e.object.scale.y = 1;
      e.object.scale.z = 1;
    }
  }, []);

  return (
    <mesh
      ref={ref}
      {...props}
      receiveShadow
      castShadow
      onPointerDown={onPointerDown}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial fog={false} map={texture} />
    </mesh>
  );
}

export function Background() {
  const { gl } = useThree();
  const texture = useTexture("/assets/autoshop.jpeg");
  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
}

export function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 0.1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
}

export function Bulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
}
