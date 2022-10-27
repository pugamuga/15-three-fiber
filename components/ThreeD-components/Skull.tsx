import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Skull(): JSX.Element {
  const skullModel = useLoader(GLTFLoader, "./models/skull.glb");

  const hdriReflection = useEnvironment({
    files: "./hdri/golf_course_sunrise_2k.hdr",
  });

  skullModel.scene.traverse((obj)=>{
    if(obj.type ==="Mesh"){
        obj.castShadow =true
    }
  })



  console.log(skullModel)

  return (
    <Suspense fallback={<p className=" absolute text-3xl">Loading...</p>}>
      <primitive
        object={skullModel.scene}
        scale={[0.05, 0.05, 0.05]}
        position={[0, 1, 0]}
        
      />
    </Suspense>
  );
}
