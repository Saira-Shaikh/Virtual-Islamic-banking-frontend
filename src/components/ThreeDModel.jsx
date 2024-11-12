import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HandModel } from "./Model";

function ThreeDModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <HandModel />
      </Suspense>
    </Canvas>
  );
}

export default ThreeDModel;
