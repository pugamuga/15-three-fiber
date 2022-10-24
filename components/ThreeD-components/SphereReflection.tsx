import { Sphere, useEnvironment } from "@react-three/drei";

export default function SphereReflection(): JSX.Element {
  

  return (
    <Sphere args={[1, 24, 24]} position={[0, 1, 0]} >
      <meshStandardMaterial roughness={0.1} metalness={1}  />

    </Sphere>
  );
}
