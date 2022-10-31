import { Environment, useEnvironment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Drei(): JSX.Element {
  const hdriReflection = useEnvironment({
    files: "./hdri/night.hdr",
  });

  const newRef = useRef(null);
  const newRefSelf = useRef(null);
  const refTorus = useRef(null);

  useFrame(() => {
    if (newRef.current !== null) {
      //@ts-ignore
      newRef.current.rotation.x += 0.01;
    }
    if (newRefSelf.current !== null) {
      //@ts-ignore
      newRefSelf.current.rotation.x += -0.05;
    }
    if (refTorus.current !== null) {
      //@ts-ignore
      refTorus.current.rotation.y += -0.01;
    }
  });

  return (
    <>
      <object3D ref={newRef}>
        <mesh position={[0, 2, 0]} ref={newRefSelf} castShadow>
          <torusKnotGeometry args={[0.1, 0.1, 120, 24]} />
          <meshStandardMaterial
            color={"hotpink"}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </object3D>
      <Environment map={hdriReflection} background={false} />
      <mesh ref={refTorus} position-y={2} castShadow receiveShadow>
        <torusGeometry args={[0.3, 0.05, 16, 100]} />
        <meshPhysicalMaterial metalness={0} roughness={0} transmission={.9} color={"white"}/>
      </mesh>
    </>
  );
}
