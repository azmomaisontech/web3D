import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

export function OrbitControl() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}
