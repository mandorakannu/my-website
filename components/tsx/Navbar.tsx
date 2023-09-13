"use client";
import React from "react";
import Logo from "@components/Logo";
import Link from "next/link";
import scollToSection from "@assets/ts/scrollToSection";
export default function Navbar() {
  return (
    <>
      <div className="px-10 py-6 flex justify-between items-center uppercase shadow-md sticky top-0 bg-white z-50 max-sm:hidden">
        <div className="flex-row-center">
          <Logo />
          <Link href="/" onClick={()=> window.scrollTo(0,0)} className="text-lg mx-2">
            Kannu Mandora
          </Link>
        </div>
        <div className="flex-row-center gap-10">
          <Link href="/" onClick={()=> scollToSection("")} className="text-lg hover:text-blue-500 transition-all delay-100">
            Home
          </Link>
          <a href="#About" className="text-lg hover:text-blue-500 transition-all delay-100">
            About
          </a>
          <Link href="https://www.mandorakannu.me" target="_blank" className="text-lg hover:text-blue-500 transition-all delay-100">
            My Blogs
          </Link>
          <a href="#Projects" className="text-lg hover:text-blue-500 transition-all delay-100">
            Projects
          </a>
          <a href="#Contact" className="text-lg hover:text-blue-500 transition-all delay-100">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
