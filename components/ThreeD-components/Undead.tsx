import { useAnimations, useGLTF } from "@react-three/drei";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Undead(): JSX.Element {
  const undeadModel = useGLTF("./models/undeadWithAnimBlue.glb");

  const { actions } = useAnimations(undeadModel.animations, undeadModel.scene);

  console.log(undeadModel);

  useEffect(() => {
    actions?.idleAnimation?.play();
  }, []);

  return <primitive object={undeadModel.scene} metallness={1} position={[0,0.04,0]}/>;
}
