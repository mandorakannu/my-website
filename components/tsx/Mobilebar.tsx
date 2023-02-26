"use client";
import Logo from "@components/Logo";
import Link from "next/link";
import React,{useState} from "react";

export default function Mobilebar() {
  const [visible, setVisible] = useState<string>("hidden");
  const showHamber = () => {
    if (visible === "hidden") {
      setVisible("block");
    } else {
      setVisible("hidden");
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
      <div className={`uppercase text-end list-none relative w-full z-50 transition-all delay-100 ${visible} bg-white`}>
        <ul className="fixed bg-white w-full px-6 shadow-md" >
          <li className="my-6">
            <Link href="/" className="active:text-blue-500" >Home</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#About" className="active:text-blue-500" >About</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Projects" className="active:text-blue-500" >Projects</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Contact" className="active:text-blue-500" >Contact</Link>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
