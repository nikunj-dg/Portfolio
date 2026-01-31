import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
    <div id="about" className="flex flex-col justify-center items-center h-dvh">
        <div className="text-5xl font-medium font-mono text-7xl">
            Nikunj Gohil
        </div>
        <div className="h-10"></div>
        <div className="w-256 text-xl/9 text-center tracking-wide">
          Expertise in Full-Stack Development, Generative AI and Data Engineering. Experienced in building data pipelines, microservices for developing scalable applications, using Python,
          Databricks, and Azure. Adept at working in Agile environments with strong analytical, leadership, and communication skills that drive innovation and collaboration.
        </div>
        <div className="flex text-3xl mt-3">
        <div className="m-3"><FaLinkedin /></div>
        <div className="m-3"><FaGithub /></div>
      </div>
    </div>
    </>
  );
};

export default About;
