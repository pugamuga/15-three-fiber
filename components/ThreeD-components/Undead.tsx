import { useGLTF } from "@react-three/drei";

export default function Undead(): JSX.Element {
  const undeadModel = useGLTF("./models/undeadWithAnimGreen.glb");

  return <primitive object={undeadModel.scene} />;
}
