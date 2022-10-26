import { useState } from "react";
import Tree from "./Tree";

export default function ForestOfTrees(): JSX.Element {
  return (
    <>
      {[...Array(3)].map((tree: number) => {
        const randomX = 5 - Math.round(Math.random() * 10);
        const randomZ = 5 - Math.round(Math.random() * 10);

        const randomSize = Math.random() / 10;
        return (
          <Tree
         
            scale={[randomSize, randomSize, randomSize]}
            position={[randomX, 0, randomZ]}
            rotation={[0, (-1 / randomX) * Math.PI, 0]}
          />
        );
      })}
    </>
  );
}
