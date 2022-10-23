import { useTexture } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

interface Iprops {
  scale: number;
  position: Vector3;
  number: 1 | 2 | 3;
}

export default function Sphere({
  scale,
  position,
  number,
}: Iprops): JSX.Element {
  const mapPicture = useTexture(
    "./textures/stoneTexture/stone_wall_diff_1k.png"
  );
  const mapDisplasement = useTexture(
    "./textures/stoneTexture/stone_wall_diff_1k.png"
  );
  const mapNormal = useTexture(
    "./textures/stoneTexture/stone_wall_diff_1k.png"
  );
  const mapRoughness = useTexture(
    "./textures/stoneTexture/stone_wall_diff_1k.png"
  );
  return (
    <mesh scale={[scale, scale, scale]} position={position}>
      {number === 3 && <sphereGeometry args={[1, 1000, 1000]} />}
      {number !== 3 && <sphereGeometry args={[1, 20, 20]} />}
      {number === 1 && <meshStandardMaterial map={mapPicture} />}
      {number === 2 && (
        <meshStandardMaterial
          map={mapPicture}
          roughnessMap={mapRoughness}
          normalMap={mapNormal}
        />
      )}
      {number === 3 && (
        <meshStandardMaterial
          map={mapPicture}
          roughnessMap={mapRoughness}
          normalMap={mapNormal}
          displacementMap={mapDisplasement}
          displacementScale={0.07}
        />
      )}
    </mesh>
  );
}
