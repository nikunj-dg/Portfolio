import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-center items-center shadow-md h-15 w-full text-xl font-light fixed top-0 backdrop-blur-sm">
      <a href="#about"><div className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">About</div></a>
      <a href="#experience"><div className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Experience</div></a>
      <a href="#projects"><div className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Projects</div></a>
      <a href="#tools"><div className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Tools</div></a>
      <a href="#contact"><div className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Contact</div></a>
    </div>
    </>
  );
};

export default Navbar;
