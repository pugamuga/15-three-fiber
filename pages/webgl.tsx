import Link from "next/link";

export default function webgl(): JSX.Element {
  return (
    <div className="superflex h-screen w-full p-8 ">
      <Link href={"/"}>
        <div
          className="absolute z-30 bg-white right-10 top-8 p-3 border rounded-md select-none 
        cursor-pointer tr-500 text-black hover:text-white hover:bg-black"
        >
          Back
        </div>
      </Link>
      <div className="superflex h-full bg-white/10 w-full">

      </div>
    </div>
  );
}
