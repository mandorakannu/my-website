import React from "react";
import Logo from "@components/Logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="px-10 py-6 flex justify-between items-center uppercase shadow-md sticky top-0 bg-white z-50 max-sm:hidden">
        <div className="flex-row-center">
          <Logo />
          <Link href="/" className="text-lg mx-2">
            Kannu Mandora
          </Link>
        </div>
        <div className="flex-row-center gap-10">
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="#About" className="text-lg">
            About
          </Link>
          <Link href="#Projects" className="text-lg">
            Projects
          </Link>
          <Link href="#Contact" className="text-lg">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
