import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
      eyes_Esfera007_1: THREE.Mesh;
      eyes_Esfera007_2: THREE.Mesh;
    };
    materials: {
      EYES: THREE.MeshStandardMaterial;
      STONE: THREE.MeshStandardMaterial;
    };
  };

export default function StoneChar(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/stoneChar.glb")as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyes_Esfera007_1.geometry}
          material={materials.EYES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyes_Esfera007_2.geometry}
          material={materials.STONE}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/stoneChar.glb");