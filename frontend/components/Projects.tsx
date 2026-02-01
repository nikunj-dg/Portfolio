import { motion } from "motion/react";
import { projects } from "../src/data/content";

const Projects = () => {

  return (
    <>
    <motion.section id="#projects" className="flex flex-col py-12 px-30"
      initial={{ opacity: 0, y: 100 }} // Initial state (hidden below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
    >
      <div className="text-4xl my-7 font-mono">Projects</div>
    
      <div className="flex flex-wrap text-xl m-6 text-xl">
        {projects.map((project, idx) => (
          <div key={idx} className="border-black-300 border-2 rounded-lg m-10 bg-white">
            <div className="p-3 border-b-2 border-black-500"><a href={project.link} target="_blank">{project.title}</a></div>
            <div className="p-3">{project.description}</div>
            <div className="p-3">{project.tech}</div>
          </div>
        ))}
      </div>
    </motion.section>
    </>
  );
};

export default Projects;
