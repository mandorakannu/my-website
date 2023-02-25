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
  return (
    <>
      <div className={classes} >
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
