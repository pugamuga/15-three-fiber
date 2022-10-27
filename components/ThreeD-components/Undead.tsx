import { useAnimations, useGLTF } from "@react-three/drei";
import { useAnimation } from "framer-motion";
import { Suspense, useEffect } from "react";

export default function Undead(): JSX.Element {
  const undeadModel = useGLTF("./models/undeadWithAnimBlue.glb");

  const { actions } = useAnimations(undeadModel.animations, undeadModel.scene);

  undeadModel.scene.scale.set(1.2, 1.2, 1.2);

  undeadModel.scene.traverse((obj) => {
    obj.castShadow = true;
  });

  console.log(undeadModel);

  useEffect(() => {
    actions?.idleAnimation?.play();
  }, []);

  return (
    <Suspense fallback={<p className="text-white text-5xl absolute">Loading...</p>}>
      <primitive
        object={undeadModel.scene}
        metallness={1}
        position={[0, 0.04, 0]}
      />
      ;
    </Suspense>
  );
}
