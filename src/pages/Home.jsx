import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe";
import About from "../components/About/About";
import Statistics from "../components/Statistics/Statistics";
import Features from "../components/Features/Features";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <About />
        <Statistics />
        <Features />
        {/* <AboutMe />
        <Skills />
        <Projects />
        <Contact /> */}
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
