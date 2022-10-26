import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    iris: THREE.Mesh;
    iris_1: THREE.Mesh;
  };
  materials: {
    ["sclera cornea"]: THREE.MeshStandardMaterial;
    iris: THREE.MeshStandardMaterial;
  };
};

export default function Eye(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/eye.glb")as unknown as GLTFResult;

  console.log(materials.iris)
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.02, 3.98, 0.08]}
        rotation={[Math.PI / 2, 0, 0.35]}
        scale={1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iris.geometry}
          material={materials["sclera cornea"]}
        //   material-wireframe
        material-color={"white"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iris_1.geometry}
          material={materials.iris}
          material-color={"red"}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/eye.glb");