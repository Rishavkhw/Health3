import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className=" shadow-md py-4 px-5 flex items-center justify-between">
      {/* Left: Logo */}
      <div className=" font-bold bg-clip-text text-transparent pl-25">
        <span className="text-slate-400 font-mono text-3xl">Cogent</span><span className="text-slate-400 font-thin text-3xl">Health</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="space-x-5 ml-auto mr-10">
        {/* <Link
          to="/home"
          className="text-1xl font-semibold text-gray-700 hover:text-red-600"
        >
          Home
        </Link> */}
                <Link
          to="/about"
          className="text-1xl font-semibold text-gray-700 hover:text-slate-400 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/products"
          className="text-1xl font-semibold text-gray-700 hover:text-slate-400 transition duration-300"
        >
          Our Products
        </Link>
        <Link
          to="/blogs"
          className="text-1xl font-semibold text-gray-700 hover:text-slate-400 transition duration-300"
        >
          Blogs
        </Link>

        <Link
          to="/career"
          className="font-semibold text-gray-700 hover:text-slate-400 transition duration-300"
        >
          Career
        </Link>
      </div>

      <Link
        to="/contact"
        className="flex font-bold text-white bg-emerald-400 hover:bg-teal-400 rounded-4xl p-2 px-8 mr-25"
      >
        <span className="">Contact</span>
             <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl pl-1" />

      </Link>
    </nav>
  );
}

export default Navbar;
