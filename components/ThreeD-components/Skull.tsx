import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Skull():JSX.Element {

const skullModel = useLoader(GLTFLoader, "./models/skull.glb")

const hdriReflection = useEnvironment({files:"./hdri/golf_course_sunrise_2k.hdr"})

  return (
    <Suspense fallback={null}>
      <primitive object={skullModel.scene} scale={[.05,.05,.05]} position={[0,0,0]} />
    </Suspense>
  )
}