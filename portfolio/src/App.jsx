import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Overview from "./components/Overview";
import ProjectPortfolio from "./components/ProjectPortfolio";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing option
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <AboutMe />
      <Overview />
      <ProjectPortfolio />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
