import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tree(): JSX.Element {
  const treeModel = useLoader(GLTFLoader, "./models/tree.glb");

  return (
    <Suspense fallback={null}>
      <primitive object={treeModel.scene} />
    </Suspense>
  );
}
