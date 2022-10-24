import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Light(): JSX.Element | null {
  const lightRef = useRef<THREE.DirectionalLight>(null)

  useHelper(lightRef, DirectionalLightHelper, 5, "red")
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} ref={lightRef} castShadow/>
    </>
  );
}
