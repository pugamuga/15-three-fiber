import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["12140_Skull_v3_L2"]: THREE.Mesh;
  };
  materials: {
    ["12140_Skull_v3"]: THREE.MeshStandardMaterial;
  };
};

export default function SkullNew(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/skull.glb"
  ) as unknown as GLTFResult;

  const [colorSkull, setcolorSkull] = useState("#230f3f");

  const texturePath = "./textures/skullTexture/clean_pebbles";

  const mapPicture = useTexture(`${texturePath}_diff_1k.png`);
  const mapDisplasement = useTexture(`${texturePath}_disp_1k.png`);
  const mapNormal = useTexture(`${texturePath}_nor_gl_1k.png`);
  const mapRoughness = useTexture(`${texturePath}_rough_1k.png`);

  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={() => {
          if (colorSkull === "#230f3f") {
            setcolorSkull("#5c0d0d");
          }
          if (colorSkull === "#5c0d0d") {
            setcolorSkull("#230f3f");
          }
        }}
        material-metalness={.3}
        material-roughness={.0}
        castShadow
        receiveShadow
        geometry={nodes["12140_Skull_v3_L2"].geometry}
        material={materials["12140_Skull_v3"]}
        material-color={colorSkull}
      />
    </group>
  );
}

useGLTF.preload("/skull.glb");
