import React, { useRef } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

export function HandModel(props) {
  const imageTexture = useTexture("./mobileDisplay.png");
  const { nodes, material, geometry } = useGLTF("./models/handModel.glb");
  console.log(imageTexture);
  return (
    <group {...props} dispose={null}>
      <group position={[1.473, 0.856, -4.39]} scale={0.01}>
        <group position={[1.797, -0.842, -215.255]} rotation={[0, -0.285, 0]}>
          <group
            position={[-127.797, -549.158, 290.881]}
            rotation={[0.454, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hand001.geometry}
              material={nodes.hand001.material}
              position={[-181.592, 8.78, -12.299]}
              rotation={[-0.355, 0, -0.661]}
              scale={3.36}
            />
            <group
              position={[126.483, 492.97, -254.241]}
              rotation={[-0.742, 0, 0]}
              scale={0.65}
            >
              <group position={[0, 0, -1.945]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Body001.geometry}
                  material={nodes.Body001.material}
                  position={[0, 0, 1.945]}
                  scale={1.429}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Boolean_2.geometry}
                  material={nodes.Boolean_2.material}
                  position={[0.357, 358.929, 17.26]}
                  rotation={[0.323, 0, 0]}
                  scale={1.538}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Front.geometry}
                  material={nodes.Front.material}
                  position={[0, 0, 18.074]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={1.429}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Place_your_image_here_2001.geometry}
                  position={[0, 0.5, 17.531]}
                >
                  <meshBasicMaterial transparent opacity={1} />
                  {/* Ensure the decal is targeting the correct mesh and adjust scale */}
                  <Decal
                    mesh={nodes.Place_your_image_here_2001} // specify the target mesh
                    position={[0, 0.95, 1]} // Fine-tune position if necessary
                    rotation={[0, 0, 0]} // Adjust rotation if needed
                    scale={[1.5, 1.5, 1.5]} // Increase scale if needed to avoid cutting
                    map={imageTexture}
                    transparent
                    opacity={1} // Set opacity to see through decal if needed
                    polygonOffset
                    polygonOffsetFactor={1}
                  />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/handModel.glb");
