import { useError } from "../context/ErrorContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { motion } from "motion/react";
import { about } from "../src/data/content";

const About = () => {

  return (
    <>
    <section id="about" className="flex flex-col justify-center items-center h-screen">
      <motion.div initial={{y: -50, opacity:0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay:0.3}}>
        <div className="text-5xl font-medium font-mono text-7xl">
            {about.name}
        </div>
      </motion.div>
        
      <div className="h-10"></div>
      <motion.div initial={{y: 50, opacity:0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay:0.3}}>
        <div className="max-w-256 text-xl/9 text-center tracking-wide">
          {about.description}
        </div>
        <ul className="flex justify-center text-3xl mt-3">
          <a href="#" target="_blank" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500"><li><FaLinkedin /></li></a>
          <a href="#" target="_blank" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100"><li><FaGithub /></li></a>
          <a href="#" download="" className="m-3 opacity-70 transition-all duration-300 hover:opacity-100"><li><TiDocumentText /></li></a>
        </ul>
      </motion.div>
    </section>
    </>
  );
};

export default About;
