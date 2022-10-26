import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Icosphere001_1: THREE.Mesh;
    Icosphere001_2: THREE.Mesh;
    Icosphere001_3: THREE.Mesh;
  };
  materials: {
    gemstone: THREE.MeshStandardMaterial;
    handle: THREE.MeshStandardMaterial;
    BLADE: THREE.MeshStandardMaterial;
  };
};

export function Sword(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/sword.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.02, 0.18]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials.gemstone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials.handle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_3.geometry}
          material={materials.BLADE}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sword.glb");
