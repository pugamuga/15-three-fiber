import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { OrbitControls, Stats } from "@react-three/drei";
import Sphere from "./Sphere";

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
      <ambientLight intensity={0.5} />
      <directionalLight  position={[0, 10, 10]} />
      {/* <mesh visible={true} ref={boxRef} scale={[1, 1, 1]} position={[0,0,0]}>
        <boxGeometry />
        <meshStandardMaterial wireframe/>
      </mesh> */}
      {/* <Sphere number={1} scale={0.8} position={[-2, 0, 0]} /> */}
      <Sphere number={2} scale={0.5} position={[0, 1, 0]} texture={"wood"}/>
      {/* <Sphere number={3} scale={0.8} position={[2, 0, 0]} texture={"rock"}/> */}
      <mesh rotation-x={Math.PI*-1/2}>
        <planeBufferGeometry args={[5,5]}/>
        <meshStandardMaterial color={"#230f3f"}/>
      </mesh>
    </>
  );
}
