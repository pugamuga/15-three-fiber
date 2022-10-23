import { Vector3 } from "@react-three/fiber";

interface Iprops {
  scale: number;
  position: Vector3
}

export default function Sphere({ scale, position }: Iprops): JSX.Element {
  return (
    <mesh scale={[scale, scale, scale]} position={position}>
      <sphereGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
