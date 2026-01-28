import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Home = () => {
  const { showError } = useError();
  const navigate = useNavigate();

  return (
    <>
    <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-100 to-white items-center">
      Portfolio
    </div>
    </>
  );
};

export default Home;
