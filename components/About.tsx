import React from "react";
import Card from "./Card";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwindcss",
    "JavaScript",
    "React.Js",
    "Next.Js",
    "Node.Js",
    "Express.Js",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
  ];
  return (
    <>
      <div className="flex-col-center py-20 bg-slate-100" id="About" >
        <h2 className="text-5xl">ABOUT ME</h2>
        <hr className="h-1.5 w-8 bg-blue-400 rounded my-8" />
        <p className="text-center text-xl leading-7 w-full text-gray-600">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br /> of programming and technology
        </p>
      </div>
      <div className="flex-row-around gap-10 px-10 py-20 bg-slate-100">
        <div className="w-1/2">
          <h3 className="text-4xl">Get to know me!</h3>
          <div className="my-10 flex-col-center gap-5">
            <p className="leading-7 w-full text-gray-600">
              I&apos;m a Full Stack [MERN STACK] Web Developer building the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              Projects section.
            </p>
            <p className="leading-7 w-full text-gray-600">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p className="leading-7 w-full text-gray-600">
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-4xl mb-14">My Skills</h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} skills={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
