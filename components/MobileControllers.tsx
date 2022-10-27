import { AiOutlineArrowDown } from "react-icons/ai";

export default function MobileControllers(): JSX.Element {
  return (
    <div className=" text-white flex">
      <div className="w-1/2 h-full p-4  flex justify-center flex-col items-center">
        <div className=" bg-white/20 text-center py-1  rounded-md border-2  superflex h-10 w-10">
          <AiOutlineArrowDown className="rotate-180"/>
        </div>
        <div className=" flex w-full justify-between pt-2">
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex">
          <AiOutlineArrowDown className="rotate-90"/>
          </div>
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex">
          <AiOutlineArrowDown className=""/>
          </div>
          <div className=" bg-white/20 text-center py-1  rounded-md border-2 h-10 w-10 superflex">
            
            <AiOutlineArrowDown className="rotate-[-90deg]"/>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 flex flex-col h-full space-y-4">
        <div className=" bg-white/20 text-center py-1  rounded-md border-2 ">
          Jump
        </div>
        <div className=" bg-white/20 text-center py-1  rounded-md border-2 ">
          Run
        </div>
      </div>
    </div>
  );
}
