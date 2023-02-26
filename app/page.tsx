import About from "@components/About";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Main />
      <About />
      <Projects />
    </>
  );
}
