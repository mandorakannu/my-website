"use client";
import Link from "next/link";
import React from "react";
import scollToSection from "@assets/ts/scrollToSection";
import SocialMedia from "./SocialMedia";
export default function Main() {
  return (
    <>
      <main className="flex-col-center gap-10 py-40 relative">
      <SocialMedia classes="absolute left-0 bg-gray-100 px-3 py-5 flex flex-col justify-center items-center gap-5 shadow-2xl max-md:hidden rounded-r border-2" />
        <h1 className="text-8xl max-md:text-5xl text-center">Hey, I&apos;m Kannu Mandora</h1>
        <p className="text-center text-xl leading-7 w-full text-gray-600 px-4">A Full Stack focused Web Developer building the Full Stack of Websites and Web <br /> Applications that leads to the success of the overall product. </p>
        <Link href="#Projects" className="bg-blue-400 px-10 py-3 uppercase text-white rounded tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500 border-2 cursor-default">Projects</Link>
      </main>
    </>
  );
}
