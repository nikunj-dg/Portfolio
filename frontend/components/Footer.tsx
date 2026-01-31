import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex flex-col justify-center items-center border-gray-300 border-2">
        <div>
            2026
        </div>
    </div>
    </>
  );
};

export default Footer;
