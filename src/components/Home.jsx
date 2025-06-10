import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <main>
      <div className="flex">
        <div className="text-slate-400 font-bold text-4xl px-25 pt-15">
          <span className="">Improving health</span>
          <br />
          <span>outcomes through</span>
          <br />
          <span>meaningful tech</span>
          <br />
          <span>innovation</span>
          <br />
          <span className="font-thin text-2xl">
            At Cogent Health, we create, innovate and implement tech-based
            solutions that are built for the purpose to meet the needs of
            independent healthcare practices.
          </span>
          <br />
        </div>

        <div className="w-300 p-20">
          <img src="./laptop.jpeg" alt="" />
        </div>
      </div>
         <div className="mb-4"></div>
      <Link
        to="/contact"
        className=" text-white text-sm bg-emerald-400 hover:bg-teal-400 rounded-4xl p-3.5 px-6 m-25"
      >
        Book a Demo
      </Link>

<div className="p-15 my-10 px-25 bg-teal-400 text-white text-sm">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Left Side: Text Content */}
    <div>
      <div className="font-bold text-xl mb-1">Intrigued by what you have seen?</div>
      <div className="font-bold text-4xl">
        Kickstart with Cogent Health<br />
      </div>
    </div>

    {/* Right Side: Button */}
    <Link to="/contact" className="mx-25 rounded-3xl border border-white bg-teal-400 text-white font-semibold px-6 py-3 hover:bg-white hover:text-teal-400 hover:px-8 transition-all duration-400 ease-in-out">
      Get In Touch
    </Link>

  </div>
</div>
<Footer/>
    </main>
  );
}

export default Home;
