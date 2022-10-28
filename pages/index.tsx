import { PerspectiveCamera } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import MainThree from "../components/MainThree";
import Metaverse from "../components/Metaverse";
import MobileControllers from "../components/MobileControllers";

const Home: NextPage = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html className=" absolute z-50 text-white text-3xl font-extrabold w-96">
        {progress} % loaded
      </Html>
    );
  }

  return (
    <div className=" superflex h-screen ">
      <div
        onClick={() => {
          setHidden((prev) => !prev);
        }}
        className="absolute z-10 top-8 left-8 p-3 border rounded-md select-none cursor-pointer tr-500 text-black bg-white hover:text-white hover:bg-black"
      >
        <p>{hidden ? "To process" : "Back to main"}</p>
      </div>
      <div className="w-[90vw] md:h-[90vh] h-[70vh] mb-24 md:mb-0 border-2 rounded-md bg-black">
        <Canvas shadows>
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            {hidden ? <MainThree /> : <Metaverse />}
          </Suspense>
        </Canvas>
      </div>
      <div className=" absolute h-[120px] bottom-4 w-[90vw] md:hidden">
        <MobileControllers />
      </div>
    </div>
  );
};

export default Home;
