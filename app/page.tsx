import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Main />
      <About />
      {/* @ts-ignore */}
      {/* Upper comment is used because production build is fail */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
