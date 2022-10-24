import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Skull():JSX.Element {

const skullModel = useLoader(GLTFLoader, "./models/skull.glb")

  return (
    <Suspense fallback={null}>
      <primitive object={skullModel.scene}/>
    </Suspense>
  )
}