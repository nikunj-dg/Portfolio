import { useEffect, useState } from "react";
import { useError } from "../context/ErrorContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { motion } from "motion/react";

const About = () => {

  return (
    <>
    <div id="about" className="flex flex-col justify-center items-center h-screen">
      <motion.div initial={{y: -50, opacity:0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay:0.3}}>
        <div className="text-5xl font-medium font-mono text-7xl">
            Nikunj Gohil
        </div>
      </motion.div>
        
      <div className="h-10"></div>
      <motion.div initial={{y: 50, opacity:0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay:0.3}}>
        <div className="max-w-256 text-xl/9 text-center tracking-wide">
          Expertise in Full-Stack Development, Generative AI and Data Engineering. Experienced in building data pipelines, microservices for developing scalable applications, using Python,
          Databricks, and Azure. Adept at working in Agile environments with strong analytical, leadership, and communication skills that drive innovation and collaboration.
        </div>
        <ul className="flex justify-center text-3xl mt-3">
          <a href="#" target="_blank" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500"><li><FaLinkedin /></li></a>
          <a href="#" target="_blank" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100"><li><FaGithub /></li></a>
          <a href="#" download="" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100"><li><TiDocumentText /></li></a>
        </ul>
    </motion.div>
    </div>
    </>
  );
};

export default About;
