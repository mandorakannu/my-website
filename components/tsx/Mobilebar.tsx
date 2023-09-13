"use client";
import Logo from "@components/Logo";
import Link from "next/link";
import scollToSection from "@assets/ts/scrollToSection";
import SocialMedia from "@components/SocialMedia";

export default function Mobilebar() {
  const showHamber = () => {
    document.getElementById("hambar")?.classList.toggle("hidden");
  }
  return (
    <>
      <div className="flex justify-between items-center px-3 py-4 sticky top-0 z-50 sm:hidden uppercase bg-white border-b border-blue-400">
        <div className="flex-row-center gap-3">
          <Logo />
          <Link href="/" onClick={()=> window.scrollTo(0,0)} >Kannu Mandora</Link>
        </div>
        <div className="space-y-2 rotate-180" onClick={showHamber}>
          <span className="block w-5 h-0.5 bg-blue-400"></span>
          <span className="block w-8 h-0.5 bg-blue-400"></span>
        </div>
      </div>
      <div className="uppercase text-end list-none relative w-full z-50 transition-all delay-100 sm:hidden bg-white hidden" id="hambar">
        <ul className="fixed bg-white w-full px-6 shadow-md" >
          <li className="my-6">
            <Link href="/" onClick={()=>scollToSection("")} className="active:text-blue-500" >Home</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#About" className="active:text-blue-500" >About</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="https://www.mandorakannu.me" className="active:text-blue-500" >My Blogs</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Projects"  className="active:text-blue-500" >Projects</Link>
          </li>
          <hr />
          <li className="my-6">
            <Link href="/#Contact" className="active:text-blue-500" >Contact</Link>
          </li>
          <hr />
          <li className="my-6">
            <SocialMedia classes="flex justify-end items-end gap-5" />
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
