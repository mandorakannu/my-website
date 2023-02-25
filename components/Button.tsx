import Link from "next/link";
import React from "react";

interface Props {
    text: string;
    link: string;
    classes?: string;
}
export default function Button({text, link, classes}: Props) {
  return <Link
      href={link}
      className={`bg-blue-400 px-10 py-3 uppercase text-white rounded tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500 border-2 cursor-default ${classes}`}
    >
      {text}
    </Link>
 
}
