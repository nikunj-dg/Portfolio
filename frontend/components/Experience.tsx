import { useState } from "react";
import { useError } from "../context/ErrorContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "motion/react";
import { experience } from "../src/data/content";

const Experience = () => {
<<<<<<< HEAD
  const [open, setOpen] = useState(-1); 
=======
  const navigate = useNavigate();
  const [open, setOpen] = useState(0); 
>>>>>>> 023593ae5787abb263aee2ada9b939f8661da2ac

  return (
    <>
    <motion.section id="experience" className="flex flex-col justify-center text-xl md:py-12 md:px-30 py-6 px-15"
      initial={{ opacity: 0, y: 100 }} // Initial state (hidden below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
    >
      <div className="text-4xl my-7 font-mono">Experience</div>
<<<<<<< HEAD
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
=======
      <div className="flex m-6">
        <div className="text-xl py-4 px-3">
          {open === 1 ? ( <FaMinus onClick={() => setOpen(0)} /> ) : ( <FaPlus onClick={() => setOpen(1)} /> )}
        </div>
        <div className="flex flex-col">
          
          <div className="text-3xl p-2">Software Developer Intern</div>
          <div className="flex">
            <div className="p-1">Quest Global</div><div className="p-1">USA</div>
          </div>
          <div className="p-1">Feb 2025 - Jan 2026</div>
          <div className={`p-1 text-xl/7 text-justify tracking-wide transition-all duration-300 ${ open === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="list-disc list-outside ml-5">
              <li>
                Developed a RAG based GenAI web chatbot using React, OpenAI, LangChain, llamaindex and SQL with user authentication, chat history, and real-time responses. Designed a scalable architecture, including RESTful APIs and asynchronous query handling, to support concurrent users.
              </li>
              <li>
                Automated ETL pipeline for data extraction, wrangling, chunking, embedding, and indexing and storing using Databricks Workflow, reducing manual effort by 70%. Coded custom Python script for SVD file parsing, achieving 100% extraction accuracy.
              </li>
              <li>
                Evaluated and tuned model performance using prompt engineering, BERTScore and ROUGE metrics; achieved an average evaluation score of 75%, with 35% response improvement.
              </li>
              <li>
                Created detailed technical documentation for the application and API usage; participated in client meetings to demonstrate functionality and address feedback effectively during reviews.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex m-6">
        <div className="text-2xl py-4 px-3">
          {open === 2 ? ( <FaMinus onClick={() => setOpen(0)} /> ) : ( <FaPlus onClick={() => setOpen(2)} /> )}
        </div>
        <div className="flex flex-col">

          <div className="text-3xl p-2">Software Developer Intern</div>
          <div className="flex">
            <div className="p-1">Wynbee</div><div className="p-1">India</div>
          </div>
          <div className="p-1">Jan 2021 - Jan 2022</div>
          <div className={`p-1 text-xl/7 text-justify tracking-wide transition-all duration-300 ${ open === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="list-disc list-outside ml-5">
              <li>
                Collaborated cross functionally to integrate APIs improving feature delivery by 20%. Participated in agile sprints to coordinate CI/CD implementation via GitHub Actions and Jenkins, debugging and code reviews for an app with 10K+ users.
              </li>
              <li>
                Conducted end-to-end testing using Jest and Postman, and optimized application modules, resolving 150+ defects and improving overall product reliability by 15%.
              </li>
              <li>
                Monitored using Prometheus and Grafana for performance and alerting for potential bottlenecks. Developed analytics dashboards using Tableau to visualize activity trends, and sales performance, enabling data-driven insights.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 023593ae5787abb263aee2ada9b939f8661da2ac
    </>
  );
};

export default Experience;

