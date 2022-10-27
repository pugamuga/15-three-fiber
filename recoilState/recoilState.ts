import { atom } from "recoil";

interface IProps {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    shift: boolean;
    jump: boolean;
  }

export const buttonsState = atom<IProps>({
    key:"buttonsState",
    default:{
        forward: false,
        backward: false,
        left: false,
        right: false,
        shift: false,
        jump: false,
      }
})

