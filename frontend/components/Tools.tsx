import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Tools = () => {
  const navigate = useNavigate();

  return (
    <>
    <section id="tools" className="flex flex-col text-xl py-12 px-30">
      <div className="text-4xl my-7 font-mono">Skills</div>

      <div className="grid grid-cols-6 gap-3 justify-items-center my-6">
          <div className="p-5 m-1 rounded-md shadow-md">Python</div>
          <div className="p-5 m-1 rounded-md shadow-md">C++</div>
          <div className="p-5 m-1 rounded-md shadow-md">SQL/ NoSQL</div>
          <div className="p-5 m-1 rounded-md shadow-md">PostgreSQL</div>
          <div className="p-5 m-1 rounded-md shadow-md">MongoDB</div>
          <div className="p-5 m-1 rounded-md shadow-md">FastAPI</div>
          <div className="p-5 m-1 rounded-md shadow-md">HTMLm CSS, JS</div>
          <div className="p-5 m-1 rounded-md shadow-md">React</div>
          <div className="p-5 m-1 rounded-md shadow-md">Typescript</div>
          <div className="p-5 m-1 rounded-md shadow-md">TailwindsCSS</div>
          <div className="p-5 m-1 rounded-md shadow-md">GitHub</div>
          <div className="p-5 m-1 rounded-md shadow-md">MS Office</div>
          <div className="p-5 m-1 rounded-md shadow-md">Postman</div>
          <div className="p-5 m-1 rounded-md shadow-md">MATLAB</div>
          <div className="p-5 m-1 rounded-md shadow-md">Databricks</div>
          <div className="p-5 m-1 rounded-md shadow-md">Pandas & Numpy</div>
      </div>
    </section>
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


