"use client";
import Logo from "@components/Logo";
import Link from "next/link";
import React,{useState} from "react";

export default function Mobilebar() {
  const [opacity, setOpacity] = useState<string>("opacity-0");
  const showHamber = () => {
    if (opacity === "opacity-0") {
      setOpacity("opacity-100");
    } else {
      setOpacity("opacity-0");
    }
  }
  return (
    <>
      <div className="flex justify-between items-center px-3 py-4 sticky top-0 sm:hidden uppercase bg-white border-b-2 border-black">
        <div className="flex-row-center gap-3">
          <Logo />
          <Link href="/">Kannu Mandora</Link>
        </div>
        <div className="space-y-2 rotate-180" onClick={showHamber}>
          <span className="block w-5 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </div>
      </div>
      <div className={`uppercase text-end list-none relative w-full z-50 bg-red-500 transition-all delay-100 ${opacity} bg-white`}>
        <ul className="absolute bg-white w-full px-6 shadow-md" >
          <li className="my-6">
            <Link href="/">Home</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#About">About</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Projects">Projects</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Contact">Contact</Link>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
