import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Light(): JSX.Element | null {
  const lightRef = useRef<THREE.DirectionalLight>(null)

  useHelper(lightRef, DirectionalLightHelper, 5, "red")
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 10]} ref={lightRef} castShadow
      shadow-mapSize-height={5000}
      shadow-mapSize-width={5000}
      shadow-camera-left={-20}
      shadow-camera-right={20}
      shadow-camera-top={20}
      shadow-camera-bottom={-20}
      />
      <hemisphereLight args={["blue","green",.7]}/>
    </>
  );
}
