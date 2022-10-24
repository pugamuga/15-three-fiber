import { useTexture, TransformControls } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

interface Iprops {
  scale: number;
  position: Vector3;
  number: 1 | 2 | 3;
  texture: "wood" | "rock" | "stone" | "metal";
}

export default function Sphere({
  scale,
  position,
  number,
  texture,
}: Iprops): JSX.Element {
  texture;

  let texturePath;

  if (texture === "stone") {
    texturePath = "./textures/stoneTexture/stone_wall";
  }
  if (texture === "rock") {
    texturePath = "./textures/rockTexture/slab_tiles";
  }
  if (texture === "wood") {
    texturePath = "./textures/woodTexture/wood_table_001";
  }
  if (texture === "metal") {
    texturePath = "./textures/metalTexture/metal_plate";
  }

  const mapPicture = useTexture(`${texturePath}_diff_1k.png`);
  const mapDisplasement = useTexture(`${texturePath}_disp_1k.png`);
  const mapNormal = useTexture(`${texturePath}_nor_gl_1k.png`);
  const mapRoughness = useTexture(`${texturePath}_rough_1k.png`);
  return (
    <TransformControls>
      <mesh scale={[scale, scale, scale]} position={position} castShadow>
        {number === 3 && <sphereGeometry args={[1, 100, 100]} />}
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
    </TransformControls>
  );
}
