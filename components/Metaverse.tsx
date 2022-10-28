import { Environment, useEnvironment, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import  { BoxHelper } from "three";
import * as THREE from "three";
import { OrbitControls, Stats } from "@react-three/drei";
import Light from "./Light";
import Ground from "./Ground";

import Undead from "./ThreeD-components/Undead";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Metaverse(): JSX.Element {
  const boxRef = useRef<THREE.Mesh>(null);
  const testing = false;



  if (testing) {
    useHelper(boxRef, BoxHelper, "hotpink");
  }

  useFrame(() => {
    if (boxRef.current !== null) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.z += 0.01;
    }
  });

  const hdriReflection = useEnvironment({
    files: "./hdri/night.hdr",
  });

  return (
    <>
      {/* <CameraOrbitController /> */}
      {testing && (
        <>
          <Stats />
          <axesHelper args={[-10]} />
          <axesHelper args={[10]} />
          <gridHelper args={[10, 10]} />
        </>
      )}
      <Environment map={hdriReflection} background={false} />
      {/* <OrbitControls /> */}
      <Light />
     
      <Undead />
      <Ground color={"#41ab53"} />
    </>
  );
}
