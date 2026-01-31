import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Experience from "../components/Experience";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const { showError } = useError();
  const navigate = useNavigate();

  return (
    <>
    <div className="flex flex-col relative bg-gradient-to-b from-stone-50 to-slate-200">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default Home;
