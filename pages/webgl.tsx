import {
  Environment,
  OrbitControls,
  Plane,
  Sphere,
  useEnvironment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { AxesHelper } from "three/src/helpers/AxesHelper";
import Drei from "../components/Drei";
import Light from "../components/Light";
import Car from "../components/ThreeD-components/Car";
import MapCube from "../components/ThreeD-components/MapCube";

export default function webgl(): JSX.Element {
  // const reflectionMap = useEnvironment({
  //     files: "./hdri/night.hdr",
  //   });

  //  const reflection = useEnvironment({
  //     files:"./hdri/golf_course_sunrise_2k.hdr"
  //  })

  return (
    <div className="superflex h-screen w-full p-8 ">
      <Link href={"/"}>
        <div
          className="absolute z-30 bg-white right-10 top-8 p-3 border rounded-md select-none 
        cursor-pointer tr-500 text-black hover:text-white hover:bg-black"
        >
          Back
        </div>
      </Link>
      <div className="superflex h-full bg-white/10 w-full">
        <Canvas
        shadows
          orthographic
          camera={{ left: -5, right: 5, bottom: -5, top: 5, zoom: 150 }}
        >
          <directionalLight position={[0,2, 2]} castShadow />
          <ambientLight intensity={0.3} />
          <Drei />
          <MapCube />
          <OrbitControls />
          <axesHelper args={[5]} />
        </Canvas>
      </div>
    </div>
  );
}
