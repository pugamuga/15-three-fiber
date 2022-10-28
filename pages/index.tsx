import { PerspectiveCamera } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import MainThree from "../components/MainThree";
import Metaverse from "../components/Metaverse";
import MobileControllers from "../components/MobileControllers";

const TestLoader = ({progress}:any) => {

const loaderProgress = ((126/Number(progress))*100).toFixed(0)

  return (
    <div className=" absolute flex flex-col justify-center items-center">
      <div className="  w-24 h-24 bg-pink-500 superflex rounded-full z-60">
        <p className=" text-white font-extrabold font-lobster text-3xl">
          Loader
        </p>
      </div>
      <div className="mt-4 h-4 w-32 border-white border">
        <div
        style={{width:`${progress}%`}}
        className="h-[14px] bg-pink-500 " />
      </div>
    </div>
  );
};

const Home: NextPage = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);
  const { progress } = useProgress();

  return (
    <div className=" superflex h-screen ">
      {progress !== 101 && <TestLoader progress={progress}/>}
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
          <Suspense fallback={null}>
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
