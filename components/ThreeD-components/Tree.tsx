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

type IProps = JSX.IntrinsicElements["group"] & {
  treeType: number;
};

export default function Tree(props: IProps) {
  const { treeType } = props;

  const { nodes, materials } = useGLTF(
    `./models/high-tree-${
      treeType === 1 ? "one" : treeType === 2 ? "two" : "three"
    }.glb`
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 9.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree002.geometry||nodes.tree001.geometry||nodes.tree003.geometry}
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
