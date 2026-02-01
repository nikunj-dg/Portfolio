import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { navbar } from "../src/data/content";

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
        {navbar.map((sect, idx) => (
          <a href={sect.href} className={listClass}><li key={idx}>{sect.section}</li></a>
        ))}
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
            {navbar.map((sect, idx) => (
              <a href={sect.href} className={listClass_sm}><li key={idx}>{sect.section}</li></a>
            ))}
      </ul>
        </div>
      )}

    </nav>
    </>
  );
};

export default Navbar;
