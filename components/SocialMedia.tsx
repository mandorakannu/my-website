"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

type Props = {
  classes: string;
};
export default function SocialMedia({ classes }: Props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const hideOnScroll = document.getElementById("hideOnScroll");
      window.scrollY > 200
        ? hideOnScroll?.classList.add("hidden")
        : hideOnScroll?.classList.remove("hidden");
    });
  }, []);

  return (
    <>
      <div className={classes} id="hideOnScroll">
        <Link href="https://github.com/Kannu-Mandora/" target="_blank">
          <AiFillGithub
            size={30}
            className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/kannu-mandora/" target="_blank">
          <AiFillLinkedin
            size={30}
            className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded"
          />
        </Link>
        <Link href="https://twitter.com/KannuMandora" target="_blank">
          <AiFillTwitterSquare
            size={30}
            className="hover:bg-blue-200 transition-all delay-100 p-1 scale-125 rounded"
          />
        </Link>
      </div>
    </>
  );
}
