import { Environment, useEnvironment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Drei(): JSX.Element {
  const hdriReflection = useEnvironment({
    files: "./hdri/night.hdr",
  });

const newRef = useRef(null)
const newRefSelf = useRef(null)

useFrame(()=>{
    if(newRef.current !==null){
        //@ts-ignore
    newRef.current.rotation.x +=0.01 
    }
    if(newRefSelf.current !==null){
        //@ts-ignore
        newRefSelf.current.rotation.x +=-0.05 
    }
})

  return (
    <>
      <object3D ref={newRef}>
        <Environment map={hdriReflection} background={false} />
        <mesh position={[0, 2, 0]} ref={newRefSelf} castShadow>
          <torusKnotGeometry args={[0.1, 0.1, 120, 24]} />
          <meshStandardMaterial color={"hotpink"} roughness={.2} metalness={.8}/>
        </mesh>
      </object3D>
    </>
  );
}
