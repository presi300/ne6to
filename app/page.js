import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-10 left-0 bottom-0 right-0 flex items-crenter justify-center bg-white">
      <div className=" w-full h-full flex items-center justify-center">
        <img
          className=" h-full max-h-[700px] "
          src="https://i.imgur.com/d1caaHz.jpeg"
        ></img>
        <Link
          href="wordpage/Communication"
          className="absolute w-[300px] h-[120px] mb-[30px] "
        ></Link>
      </div>
    </div>
  );
}
