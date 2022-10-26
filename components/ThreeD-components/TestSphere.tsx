import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Suzanne: THREE.Mesh;
  };
  materials: {};
};

export default function TestSphere(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/suzanne.gltf")as unknown as GLTFResult;

//   const texturePath = "./textures/skullTexture/clean_pebbles";

//   const mapPicture = useTexture(`${texturePath}_diff_1k.png`);
//   const mapDisplasement = useTexture(`${texturePath}_disp_1k.png`);
//   const mapNormal = useTexture(`${texturePath}_nor_gl_1k.png`);
//   const mapRoughness = useTexture(`${texturePath}_rough_1k.png`);

const texturePath = "./textures/brickTexture/brick_moss_001";

const mapPicture = useTexture(`${texturePath}_diff_1k.png`);
const mapDisplasement = useTexture(`${texturePath}_disp_1k.png`);
const mapNormal = useTexture(`${texturePath}_nor_gl_1k.png`);
const mapRoughness = useTexture(`${texturePath}_rough_1k.png`);



  console.log(materials[""].color)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, .8, -0.04]}
        // material-map={mapPicture}
        // material-roughnessMap={mapRoughness}
        // material-normalMap={mapNormal}
        // material-displacementMap={mapDisplasement}
        // material-displacementScale={0.07}
        material-wireframe={false}
      />
    </group>
  );
}

useGLTF.preload("/suzanne.gltf");