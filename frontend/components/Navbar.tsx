import { useEffect, useState } from "react";
import { useError } from "../context/ErrorContext";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  const listClass = "flex justify-center items-center rounded w-32 h-16 cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:shadow-xl";
  const listClass_sm = "flex justify-center items-center w-32 h-[35px] rounded cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:shadow-xl";

  return (
    <>
    <nav className="fixed top-0 z-10 flex w-full items-center backdrop-blur-md md:justify-center">
      <ul className="hidden md:flex h-16 justify-center text-xl">
        <a href="#about" className={listClass}><li>About</li></a>
        <a href="#experience" className={listClass}><li>Experience</li></a>
        <a href="#projects" className={listClass}><li>Projects</li></a>
        <a href="#tools" className={listClass}><li>Tools</li></a>
        <a href="#contact" className={listClass}><li>Contact Me</li></a>
      </ul>

      <div className="block md:hidden text-xl p-5">
        { isOpen ? (
          <BiX onClick={menuOpen} />
        ) : (
          <BiMenu onClick={menuOpen} />
        )}
      </div>

      { isOpen && (
        <div className={`fixed top-8 left-8 flex flex-col rounded-lg items-start justify-start shadow-xl px-5 py-3 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col justify-center text-xl">
            <a href="#about" className={listClass_sm}><li>About</li></a>
            <a href="#experience" className={listClass_sm}><li>Experience</li></a>
            <a href="#projects" className={listClass_sm}><li>Projects</li></a>
            <a href="#tools" className={listClass_sm}><li>Tools</li></a>
            <a href="#contact" className={listClass_sm}><li>Contact Me</li></a>
      </ul>
        </div>
      )}

    </nav>
    {/* <header className="flex justify-center items-center shadow-md h-15 w-full text-xl font-light fixed top-0 backdrop-blur-sm">
      <a href="#about" className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">About</a>
      <a href="#experience" className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Experience</a>
      <a href="#projects" className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Projects</a>
      <a href="#tools" className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Tools</a>
      <a href="#contact" className="rounded-lg hover:text-shadow-lg hover:shadow-xl hover:font-normal w-48 h-15 flex justify-center items-center">Contact</a>
    </header> */}
    </>
  );
};

export default Navbar;
