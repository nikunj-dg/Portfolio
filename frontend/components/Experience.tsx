import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "motion/react";
import { experience } from "../src/data/content";

const Experience = () => {
  const [open, setOpen] = useState(-1); 

  return (
    <>
    <motion.section id="#experience" className="flex flex-col justify-center text-xl md:py-12 md:px-30 py-6 px-15"
      initial={{ opacity: 0, y: 100 }} // Initial state (hidden below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
    >
      <div className="text-4xl my-7 font-mono">Experience</div>
      {experience.map((experience, idx) => (
        <div key={idx} className="flex m-6">
          <div className="text-xl py-4 px-3">
            {open === idx ? ( <FaMinus onClick={() => setOpen(-1)} /> ) : ( <FaPlus onClick={() => setOpen(idx)} /> )}
          </div>
          <div className="flex flex-col">
            
            <div className="text-3xl p-2">{experience.title}</div>
            <div className="flex">
              <div className="p-1">{experience.company}</div><div className="p-1">{experience.location}</div>
            </div>
            <div className="p-1">{experience.dates}</div>
            <div className={`p-1 text-xl/7 text-justify tracking-wide transition-all duration-300 ${ open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="list-disc list-outside ml-5">
                {experience.description.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      
    </motion.section>
    </>
  );
};

export default Experience;

