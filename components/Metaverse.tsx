import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { OrbitControls, Stats } from "@react-three/drei";
import Sphere from "./Sphere";
import Light from "./Light";
import Ground from "./Ground";
import Tree from "./ThreeD-components/Tree";

export default function Metaverse(): JSX.Element {
  const boxRef = useRef<THREE.Mesh>(null);
  const testing = true;

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
      <OrbitControls />
      <Light/>
      {/* <mesh visible={true} ref={boxRef} scale={[1, 1, 1]} position={[0,0,0]}>
        <boxGeometry />
        <meshStandardMaterial wireframe/>
      </mesh> */}
      {/* <Sphere number={1} scale={0.8} position={[-2, 0, 0]} /> */}
      <Sphere number={2} scale={0.5} position={[0, 1, 0]} texture={"metal"}/>
      {/* <Sphere number={3} scale={0.8} position={[2, 0, 0]} texture={"rock"}/> */}
      <Tree/>
     <Ground color={"#41ab53"}/>
    </>
  );
}
