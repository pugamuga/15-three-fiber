import { useTexture } from "@react-three/drei";

interface IProps {
  color?: string;
}

export default function Ground({ color }: IProps): JSX.Element {
  const texturePath = "./textures/brickTexture/brick_moss_001";

  const mapPicture = useTexture(`${texturePath}_diff_1k.png`);
  const mapDisplasement = useTexture(`${texturePath}_disp_1k.png`);
  const mapNormal = useTexture(`${texturePath}_nor_gl_1k.png`);
  const mapRoughness = useTexture(`${texturePath}_rough_1k.png`);

  return (
    <mesh rotation-x={(Math.PI * -1) / 2} receiveShadow>
      <planeBufferGeometry args={[10, 10, 128, 128]} />
      <meshStandardMaterial
        map={mapPicture}
        roughnessMap={mapRoughness}
        normalMap={mapNormal}
        displacementMap={mapDisplasement}
        displacementScale={0.07}
      />
    </mesh>
  );
}
