import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          quality={100}
          priority={true}
          src="/images/main.webp"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full pointer-events-none select-none border-2 p-0.5 border-blue-500"
        />
      </Link>
    </>
  );
}
