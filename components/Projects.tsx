import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import Link from "next/link";

export default function Projects(): JSX.Element {
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
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">Kannu Mandora Tech Blogs</h1>
              <h2 className="text-lg font-normal text-blue-300">
              Kannu Mandora Tech Blogs is a complex project and it is based on MERN Stack.
              </h2>
            </div>
            <Link
              href="https://mandorakannu.me/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">Shri Ram College</h1>
              <h2 className="text-lg font-normal text-blue-300">
              Shri Ram College is a MERN Stack College project based on Students, teachers and admins.
              </h2>
            </div>
            <Link
              href="https://shriramcollege.cyclic.cloud/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">Covid Stats Checker</h1>
              <h2 className="text-lg font-normal text-blue-300">
              Covid Stats Checker is a simple project based on React.Js. It shows the stats of Covid-19 in any country.
              </h2>
            </div>
            <Link
              href="https://covid.mandorakannu.tech/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">Second Portfolio</h1>
              <h2 className="text-lg font-normal text-blue-300">
              Simple React.Js Website for my second portfolio.
              </h2>
            </div>
            <Link
              href="https://main.mandorakannu.tech/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">Weather App</h1>
              <h2 className="text-lg font-normal text-blue-300">
              Weather App is a simple project based on React.Js. It shows the weather of any city.
              </h2>
            </div>
            <Link
              href="https://weather.mandorakannu.tech/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-bold text-xl">GitHub Profile Finder</h1>
              <h2 className="text-lg font-normal text-blue-300">
              GitHub Profile Finder is a simple project based on React.Js. It shows the profile of any GitHub user.
              </h2>
            </div>
            <Link
              href="https://githubfinder.mandorakannu.tech/"
              className="bg-blue-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
    </>
  );
}
