import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import Box from "../components/ThreeD-components/Box";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

const CameraOrbitController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const Home: NextPage = (): JSX.Element => {
  return (
    <div className=" superflex h-screen">
      <div className=" absolute top-5 z-10">
        <h1 className="font-extrabold bg-white ">Canvas 3D</h1>
      </div>
      <div className=" w-96 h-96 bg-violet-500/10 border border-black rounded-full">
        <Canvas>
          <ambientLight />
          <CameraOrbitController />
          <pointLight position={[5, 5, 5]} />
          <axesHelper args={[-10]} />
          <axesHelper args={[10]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
