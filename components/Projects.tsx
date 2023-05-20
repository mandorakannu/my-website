import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import Link from "next/link";

type ProjectProps = {
  _id: string;
  title: string;
  desc: string;
  link: string;
  image?: string;
}[];

async function getLinks() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/projects`);
  const projects: ProjectProps = await res.json();
  return projects;
}

export default async function Projects() {
  const projects = await getLinks();
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
      <div className={`py-20 ${outfit.className}`}>
        {projects.map((project) => {
          return (
            <>
              <div
                key={project._id}
                className="flex justify-between items-center gap-10 px-20 py-10"
              >
                <div className="flex flex-col gap-3">
                  <h1 className="text-bold text-xl">{project.title}</h1>
                  <h2 className="text-lg font-normal text-blue-300">
                    {project.desc}
                  </h2>
                </div>
                <Link
                  href={project.link}
                  className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
                  target="_blank"
                >
                  View Project
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
