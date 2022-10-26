import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tree002: THREE.Mesh;
    leaves002: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Leaves.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Tree(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/high-tree-one.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 9.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree002.geometry}
          material={materials["Material.001"]}
          material-color={"#5c340d"}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002.geometry}
            material={materials["Leaves.001"]}
            material-color={"#f29111"}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/high-tree-one.glb");
