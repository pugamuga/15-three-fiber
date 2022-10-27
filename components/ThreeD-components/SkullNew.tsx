import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
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

interface SkullType {
  position: {
    x: number;
    z: number;
  };
  box: number;
}

interface Iprops {
  boundarySize: number;
  count: number;
}

export default function SkullNew(props: JSX.IntrinsicElements["group"] | any) {
  const [skulls, setSkulls] = useState<SkullType[]>([]);

  const { boundarySize, count } = props;

  const getRandomPosition = (skullArray: SkullType[], boundary: number) => {
    skullArray.forEach((skull: SkullType, index: number) => {
      skull.position.x =25- Math.random() * 50;
      skull.position.z =25- Math.random() * 50;
    });

    setSkulls(skullArray);
  };

  useEffect(() => {
    const tempSkulls: SkullType[] = [];

    for (let i = 0; i < count; i++) {
      tempSkulls.push({ position: { x: 0, z: 0 }, box: 1 });
    }
    getRandomPosition(tempSkulls, boundarySize);
  }, [boundarySize, count]);

  const { nodes, materials } = useGLTF(
    "./models/skull.glb"
  ) as unknown as GLTFResult;

  const [colorSkull, setcolorSkull] = useState("#230f3f");

  return (
    <>
      {skulls.map((skull: SkullType, index: number) => {
        return (
          <group key={index} {...props} dispose={null} scale={[.1,.1,.1]} rotation={[Math.PI*-(1/8),0,0]} position={[skull.position.x,-0.2,skull.position.z]}>
            <mesh
              onClick={() => {
                if (colorSkull === "#230f3f") {
                  setcolorSkull("#5c0d0d");
                }
                if (colorSkull === "#5c0d0d") {
                  setcolorSkull("#230f3f");
                }
              }}
              material-metalness={0.3}
              material-roughness={0.0}
              castShadow
              receiveShadow
              geometry={nodes["12140_Skull_v3_L2"].geometry}
              material={materials["12140_Skull_v3"]}
              material-color={colorSkull}
              // material-wireframe
            />
          </group>
        );
      })}
    </>
  );
}

useGLTF.preload("/skull.glb");
