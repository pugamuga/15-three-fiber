import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CameraOrbitController } from "../utils/CameraOrbitController";

export default function Metaverse(): JSX.Element {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (boxRef.current !== null) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      <CameraOrbitController />
      <ambientLight intensity={0.1} />
      <directionalLight color={"violet"} position={[0, 0, 5]} />
      <axesHelper args={[-10]} />
      <axesHelper args={[10]} />
      <mesh ref={boxRef} scale={[2, 1, 1]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
