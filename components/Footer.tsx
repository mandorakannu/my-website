import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Outfit } from "next/font/google";
const outfit = Outfit({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});
export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
      <footer className={`p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ${outfit.className}`}>
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex-row-center gap-5" >
            <Logo />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Kannu Mandora
            </span>
            </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <Link href="#About" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="#Projects" className="mr-4 hover:underline md:mr-6">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#Contact" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {year} &nbsp;
          <Link href="https://mandorakannu.tech" className="hover:underline">
            Kannu Mandora
          </Link>™
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
