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
