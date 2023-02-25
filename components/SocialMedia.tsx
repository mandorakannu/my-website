"use client";
import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

type Props = {
    classes: string;
}
export default function SocialMedia({ classes }: Props) {
  window.addEventListener("scroll", () => {
    const socialMediaIcons = document.querySelector("#scrollToTop");
    window.scrollY > 200 ? socialMediaIcons?.classList.add("hidden") : socialMediaIcons?.classList.remove("hidden");
  });
  return (
    <>
      <div className={classes} id="scrollToTop" >
        <Link href="https://github.com/Kannu-Mandora/" target="_blank">
        <AiFillGithub size={30} className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded" />
        </Link>
        <Link href="https://www.linkedin.com/in/kannu-mandora/" target="_blank">
        <AiFillLinkedin size={30} className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded" />
        </Link>
        <Link href="https://twitter.com/KannuMandora" target="_blank">
        <AiFillTwitterSquare size={30} className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded" />
        </Link>
      </div>
    </>
  );
}
