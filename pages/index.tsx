import { PerspectiveCamera } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import MainThree from "../components/MainThree";
import Metaverse from "../components/Metaverse";
import MobileControllers from "../components/MobileControllers";
import { customProgress } from "../utils/CustomProgressFunction";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface IProps {
  progress: number | undefined;
}

const TestLoader = ({ progress }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="  w-24 h-24 bg-sky-700 superflex rounded-full ">
        <p className=" text-white font-extrabold font-lobster text-3xl">
          Loader
        </p>
      </div>
      <div className="mt-4 h-4 w-32 border-white border">
        <div
          style={{ width: `${progress}%` }}
          className="h-[14px] bg-sky-700 "
        />
      </div>
    </div>
  );
};

const Home: NextPage = (): any => {
  const [hidden, setHidden] = useState(false);
  const { progress } = useProgress();
  const [progressState, setProgressState] = useState<number>(0);
  console.log(progressState);

  const myInterval = setTimeout(() => {
    if (progress < 90) {
      if (progress > progressState) {
        setProgressState(Number(progress.toFixed(0)));
      } else {
        setProgressState(progressState + 1);
      }
    }
  }, 100);

  const mySecondInterval = setTimeout(() => {
    if (progress >= 90 && progress < 100) {
      setProgressState(progressState + 1);
    } else if (progress === 100) {
      setProgressState(100);
    }
  }, 100);

  // const badInternetInterval = setTimeout(() => {
  //   if (progressState >= 90 && progress < 90) {
  //     setProgressState(Number(progress.toFixed(0)));
  //   }
  // });

  if (progressState >= 100) {
    clearInterval(myInterval);
    clearInterval(mySecondInterval);
    // clearInterval(badInternetInterval);
  }

  return (
    <div className=" superflex h-screen relative ">
      <Link href={"/webgl"}>
        <div className="absolute z-30 bg-white right-10 top-8 p-3 border rounded-md select-none cursor-pointer tr-500 text-black hover:text-white hover:bg-black">
          WebGl
        </div>
      </Link>
      <AnimatePresence>
        {progressState < 99 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute z-30 transform top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 select-none"
          >
            <TestLoader progress={progressState} />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => {
          setHidden((prev) => !prev);
        }}
        className="absolute z-20 top-8 left-8 p-3 border rounded-md select-none cursor-pointer tr-500 text-black bg-white hover:text-white hover:bg-black"
      >
        <p>{hidden ? "To process" : "Back to main"}</p>
      </div>
      <div
        className="w-[90vw] md:h-[90vh] h-[70vh]  md:mb-0 border-2 rounded-md bg-black
             absolute z-10 transform top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
      >
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            {hidden ? (
              <MainThree />
            ) : (
              <Metaverse progressState={progressState} />
            )}
          </Suspense>
        </Canvas>
      </div>
      <AnimatePresence>
        {progressState < 99 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="cover"
            className="w-[90vw] md:h-[90vh] h-[70vh]  md:mb-0 border-2 rounded-md bg-black
             absolute z-10 transform top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
          />
        )}
      </AnimatePresence>
      <div className=" absolute h-[120px] bottom-4 w-[90vw] md:hidden">
        <MobileControllers />
      </div>
    </div>
  );
};

export default Home;
