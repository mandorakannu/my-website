import Image from "next/image";
import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: "300",
});
import data from "@assets/json/projects.json";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="flex-col-center py-20 bg-white" id="Projects">
        <h2 className="text-5xl">Projects</h2>
        <hr className="h-1.5 w-8 bg-blue-400 rounded my-8" />
        <p className="text-center text-xl leading-7 w-full text-gray-600 px-4">
          Here you will find some of the personal and clients projects that I
          created with each project <br /> containing its own case study
        </p>
      </div>
      <div className="py-20" >
        {data.map((project) => (
          <div className="grid grid-cols-2 max-sm:grid-cols-1" key={project.title}>
            <Image
              src={`/images/${project.image}`}
              width={500}
              height={500}
              alt={project.title}
              title={project.title}
              className="mix-blend-multiply"
            />
            <div className="flex flex-col justify-center items-start max-sm:items-center gap-6">
              <h2 className="text-4xl">{project.title}</h2>
              <p className={`w-2/3 ${outfit.className}`}>{project.desc}</p>
              <Link href={project.link} className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500" target="_blank">View Project</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
