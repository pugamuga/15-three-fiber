import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import { useState } from "react";
import MainThree from "../components/MainThree";
import Metaverse from "../components/Metaverse";

const Home: NextPage = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className=" superflex h-screen">
      <div
        onClick={() => {
          setHidden((prev) => !prev);
        }}
        className="absolute z-10 top-10 left-10 p-3 border rounded-md select-none cursor-pointer tr-500 text-black bg-white hover:text-white hover:bg-black"
      >
        <p>{hidden ? "To process" : "Back to main"}</p>
      </div>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0,0,5]}/>
        {hidden ? <MainThree /> : <Metaverse />}
      </Canvas>
    </div>
  );
};

export default Home;
