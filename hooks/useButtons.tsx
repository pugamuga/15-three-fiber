import { useEffect, useState } from "react";

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
  const [input, setInput] = useState<IProps>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
  });

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
    setInput((prev) => ({ ...prev, [findKey(e.code)]: true }));
  };
  const handlerKeyUp = (e: any) => {
    setInput((prev) => ({ ...prev, [findKey(e.code)]: false }));
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
