import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import Link from "next/link";

export default function Projects(): JSX.Element {
  const links = [
    {
      title: "Kannu Mandora Tech Blogs",
      description:
        "Kannu Mandora Tech Blogs is a complex project and it is based on MERN Stack.",
      link: "https://mandorakannu.me/",
    },
    {
      title: "Shri Ram College",
      description:
        "Shri Ram College is a MERN Stack College project based on Students, teachers and admins.",
      link: "https://shriramcollege.cyclic.cloud/",
    },
    {
      title: "Covid Stats Checker",
      description:
        "Covid Stats Checker is a simple project based on React.Js. It shows the stats of Covid-19 in any country.",
      link: "https://covid.mandorakannu.tech/",
    },
    {
      title: "MK Store",
      description:
        "MK Store is a simple project based on Next.Js. It is a E-Commerce website.",
      link: "https://mandorakannu.rocks/",
    },
    {
      title: "API Ninja Hub",
      description:
        "API Ninja Hub is a simple project based on Next.Js. It is a API website.",
      link: "https://api.mandorakannu.tech/",
    },
  ];
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
        {links.map((element) => (
          <div
            key={element.title}
            className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">{element.title}</h1>
              <h2 className="text-lg font-normal text-blue-600">
                {element.description}
              </h2>
            </div>
            <Link
              href={element.link}
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
