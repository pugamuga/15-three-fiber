import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tree(): JSX.Element {
  const treeModel = useLoader(GLTFLoader, "./models/tree.glb");

 treeModel.scene.traverse((obj)=>{
    if(obj.type ==="Mesh"){
        obj.castShadow = true
    }
 })

  return (
    <Suspense fallback={null}>
      <primitive object={treeModel.scene} scale={[.1,.1,.1]} position={[2,0,0]}/>
    </Suspense>
  );
}
