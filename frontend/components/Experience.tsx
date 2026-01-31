import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";
import { FaPlus, FaMinus } from "react-icons/fa";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <>
    <div id="experience" className="flex flex-col justify-center text-xl py-12 px-30">
      <div className="text-4xl my-7 font-mono">Experience</div>
      <div className="flex m-6">
        <div className="text-xl py-4 px-3"><FaPlus /><FaMinus className=""/></div>
        <div className="flex flex-col">
          
          <div className="text-3xl p-2">Software Developer Intern</div>
          <div className="flex">
            <div className="p-1">Quest Global</div><div className="p-1">USA</div>
          </div>
          <div className="p-1">Feb 2025 - Jan 2026</div>
          <div className="p-1 text-xl/7 text-justify tracking-wide">
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
        <div className="text-2xl py-4 px-3"><FaPlus /><FaMinus className=""/></div>
        <div className="flex flex-col">

          <div className="text-3xl p-2">Software Developer Intern</div>
          <div className="flex">
            <div className="p-1">Wynbee</div><div className="p-1">India</div>
          </div>
          <div className="p-1">Jan 2021 - Jan 2022</div>
          <div className="p-1 text-xl/7 text-justify tracking-wide">
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
    </>
  );
};

export default Experience;
