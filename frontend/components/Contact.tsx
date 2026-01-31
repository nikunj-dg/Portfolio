import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
    <div id="contact" className="flex flex-col text-xl py-12 px-30">
        <div className="text-4xl my-7 font-mono">Get in Touch</div>

        <form className="m-6">
            <div className="flex flex-col">
                <div className="mt-3">
                    <label htmlFor="name">Name</label>
                </div>
                <div className="mt-1">
                    <input id="name" name="name" className="w-128 shadow-md rounded-md border-gray-300 border h-10" type="text" value="" 
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="mt-1">
                    <input id="email" name="email" className="w-128 shadow-md rounded-md border-gray-300 border h-10" type="email" value="" 
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="mt-1">
                    <input id="phone" name="phone" className="w-128 shadow-md rounded-md border-gray-300 border h-10" type="number" value="" 
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="message">Message</label>
                </div>
                <div className="mt-1">
                    <textarea id="message" name="message" className="w-128 shadow-md rounded-md border-gray-300 border h-24" value="" 
                ></textarea>
                </div>

                <button className="bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-200 p-3 mt-3 text-md w-128">
                    Submit
                </button>
            </div>
        </form>
    </div>
    </>
  );
};

export default Contact;
