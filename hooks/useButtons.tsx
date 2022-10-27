import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { buttonsState } from "../recoilState/recoilState";

interface IProps {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  shift: boolean;
  jump: boolean;
}
interface IPropsKeys {
  KeyW: string;
  KeyS: string;
  KeyA: string;
  KeyD: string;
  ShiftLeft: string;
  Space: string;
}

export default function useButtons(): IProps {
  const [input, setInput] = useRecoilState<IProps>(buttonsState);

  const keys: IPropsKeys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    Space: "jump",
  };

  const findKey = (key: string) => {
    //@ts-ignore:next-line
    return keys[key];
  };

  const handlerKeyDown = (e: any) => {
    if (e.code !== "Space") {
      setInput((prev) => ({ ...prev, [findKey(e.code)]: true }));
    } else if (e.code === "Space") {
      setInput((prev) => ({ ...prev, [findKey(e.code)]: true }));
      setTimeout(() => {
        setInput((prev) => ({ ...prev, [findKey(e.code)]: false }));
      }, 1000);
    }
  };
  const handlerKeyUp = (e: any) => {
    if (e.code !== "Space") {
      setInput((prev) => ({ ...prev, [findKey(e.code)]: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerKeyDown);
    document.addEventListener("keyup", handlerKeyUp);

    return () => {
      document.removeEventListener("keydown", handlerKeyDown);
      document.removeEventListener("keyup", handlerKeyUp);
    };
  }, []);

  return input;
}
