import { motion } from "motion/react";


const Tools = () => {

  return (
    <>
    <motion.section id="skills" className="flex flex-col text-xl py-12 px-30" initial={{ opacity: 0, y: 100 }} // Initial state (hidden below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
    >
      <div className="text-4xl my-7 font-mono">Skills</div>

      <div className="grid grid-cols-6 gap-3 justify-items-center my-6">
          <div className="p-5 m-1 rounded-md shadow-md">Python</div>
          <div className="p-5 m-1 rounded-md shadow-md">C++</div>
          <div className="p-5 m-1 rounded-md shadow-md">SQL/ NoSQL</div>
          <div className="p-5 m-1 rounded-md shadow-md">FastAPI</div>
          <div className="p-5 m-1 rounded-md shadow-md">React</div>
          <div className="p-5 m-1 rounded-md shadow-md">TailwindsCSS</div>
          <div className="p-5 m-1 rounded-md shadow-md">GitHub</div>
          <div className="p-5 m-1 rounded-md shadow-md">MS Office</div>
          <div className="p-5 m-1 rounded-md shadow-md">Postman</div>
          <div className="p-5 m-1 rounded-md shadow-md">MATLAB</div>
          <div className="p-5 m-1 rounded-md shadow-md">Databricks</div>
      </div>
    </motion.section>
    </>
  );
};

export default Tools;



// Languages: Python, C/C++, R, Java, SQL, NoSQL
// Databases: MongoDB, PostgreSQL, MySQL
// Web: FastAPI, Node.js, React, Flask, Django, HTML, CSS, JavaScript, PHP, TypeScript, TailwindCSS,
// Libraries: PySpark, Pandas, NumPy, PyTorch, TensorFlow
// DevOps: Docker, Kubernetes, Azure, CI/CD, Git
// Tools: Tableau, MATLAB, Databricks, Selenium, MS Office, Postman, Arduino


