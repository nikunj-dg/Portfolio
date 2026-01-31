import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
    <div id="projects" className="flex flex-col py-12 px-30">
      <div className="text-4xl my-7 font-mono">Projects</div>
    
      <div className="flex flex-wrap text-xl m-6 text-xl">
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Facial Recognition</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">RNN</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
        <div className="border-black-300 border-2 rounded-lg m-10 bg-white">
          <div className="p-3 border-b-2 border-black-500">Parables App</div>
          <div className="p-3">Body</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
