import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";

const Contact = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
                    <input id="name" name="name" className="w-128 shadow-md rounded-md border-gray-300 border p-3" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} 
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="mt-1">
                    <input id="email" name="email" className="w-128 shadow-md rounded-md border-gray-300 border p-3" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="mt-1">
                    <input id="phone" name="phone" className="w-128 shadow-md rounded-md border-gray-300 border p-3" type="number" value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                ></input>
                </div>

                <div className="mt-3">
                    <label htmlFor="message">Message</label>
                </div>
                <div className="mt-1">
                    <textarea id="message" name="message" className="w-128 shadow-md rounded-md border-gray-300 border h-24 p-3" value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                </div>

                <button className="bg-gray-600 rounded-md shadow-md hover:shadow-xl transition duration-200 p-3 mt-3 text-md text-white w-128">
                    Submit
                </button>
            </div>
        </form>
    </div>
    </>
  );
};

export default Contact;
