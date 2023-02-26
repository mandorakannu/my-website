import Link from "next/link";
import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function Main() {
  return (
    <>
      <SocialMedia classes="fixed top-1/2 bg-white px-3 h-40 flex flex-col justify-center items-center gap-5 shadow-md max-md:hidden rounded" />
      <main className="background-image-glass flex-col-center gap-10 py-40">
        <h1 className="text-8xl">Hey, I&apos;m Kannu Mandora</h1>
        <p className="text-center text-xl leading-7 w-full text-gray-600">A Full Stack focused Web Developer building the Full Stack of Websites and Web <br /> Applications that leads to the success of the overall product. </p>
        <Button text="Projects" link="/#Projects" />
      </main>
    </>
  );
}
