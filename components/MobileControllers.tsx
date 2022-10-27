import { AiOutlineArrowDown } from "react-icons/ai";
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

export default function MobileControllers(): JSX.Element {
  const [input, setInput] = useRecoilState<IProps>(buttonsState);
  return (
    <div className=" text-white flex select-none">
      <div className="w-1/2 h-full p-4  flex justify-center flex-col items-center">
        {/* ------UP------- */}
        <div
          onKeyPress={() => {
            console.log("Down");
          }}
          onKeyUp={() => {
            console.log("Up");
          }}
          className=" bg-white/20 text-center py-1  rounded-md border-2  superflex h-10 w-10 tr-300 hover:scale-90"
        >
          <AiOutlineArrowDown className="rotate-180" />
        </div>
        {/* ------UP------- */}
        <div className=" flex w-full justify-between pt-2">
          {/* ------Left------- */}
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex tr-300 hover:scale-90">
            <AiOutlineArrowDown className="rotate-90 " />
          </div>
          {/* ------Left------- */}
          {/* ------Down------- */}
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex tr-300 hover:scale-90">
            <AiOutlineArrowDown className="" />
          </div>
          {/* ------Down------- */}
          {/* ------Right------- */}
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex tr-300 hover:scale-90">
            <AiOutlineArrowDown className="rotate-[-90deg]" />
          </div>
          {/* ------Right------- */}
        </div>
      </div>
      <div className="w-1/2 p-4 flex flex-col h-full space-y-4">
        <div
          onClick={() => {
            setInput((prev) => ({ ...prev, jump: true }));
            setTimeout(() => {
              setInput((prev) => ({ ...prev, jump: false }));
            }, 1000);
          }}
          className=" bg-white/20 text-center py-1  rounded-md border-2 tr-300 hover:scale-90"
        >
          Jump
        </div>
        <button
          onPointerUp={() => {
            setInput((prev) => ({ ...prev, jump: false }));
          }}
          onPointerDown={() => {
            setInput((prev) => ({ ...prev, jump: true }));
          }}
          className=" bg-white/20 text-center py-1  rounded-md border-2 tr-300 hover:scale-90"
        >
          Run
        </button>
      </div>
    </div>
  );
}
