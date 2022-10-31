import {  PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function MapCube(): JSX.Element {
//     const textRef = useRef()
//     //@ts-ignore
//   useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <object3D>
      <mesh scale={[1, 1, 1]} receiveShadow position-y={1/2} castShadow>
        <boxGeometry />
        <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          
          <Dodecahedron />
        </RenderTexture>
        </meshStandardMaterial>
      </mesh>
      {/* <mesh rotation-x={(Math.PI * -1) / 2} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color={"lightblue"} />
      </mesh> */}
    </object3D>
  );
}


function Dodecahedron({props}:any) {
    const meshRef = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    //@ts-ignore
    useFrame(() => (meshRef.current.rotation.x += 0.01))
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
      </mesh>
    )
  }
  