import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";

function BlackModel({ rotation }) {
  const { scene } = useGLTF("/dynamic_i_phone_mockup.gltf");

  // Load the image as a texture
  const imageTexture = useLoader(TextureLoader, "./Rectangle 25.png"); // Ensure correct path

  // Log mesh names for debugging
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log(child.name); // Log to see mesh names

      // Apply black color as default
      child.material.color.set("#000000");

      // Apply texture to the "Boolean_2" mesh
      if (child.name === "Boolean_2") {
        console.log("Applying texture to Boolean_2"); // Debugging line
        child.material.map = imageTexture; // Apply the image texture
        child.material.needsUpdate = true; // Ensure the material updates
      }
    }
  });

  return <primitive object={scene} scale={0.75} rotation={rotation} />;
}

function ThreeDModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <mesh>
          <BlackModel />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

export default ThreeDModel;
