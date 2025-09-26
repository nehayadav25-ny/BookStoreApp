import React from "react";
import book2 from "../assets/book2.jpg";

function Banner() {
  return (
    <div className="pt-[5.5rem] max-w-screen-2xl container mx-auto md:px-20 px-4 my-8 flex flex-col md:flex-row items-center justify-between">
      
      {/* Image Section - Mobile me pehle dikhana hai */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-12 order-1 md:order-2">
        <img
          src={book2}
          alt="Books"
          className="w-[350px] h-[320px] md:w-[500px] md:h-[450px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Welcome! Read, learn and dream something new{" "}
          <span className="text-pink-300">everyday with books!!!</span>
        </h1>

        <p className="text-base md:text-lg text-indigo-300 leading-relaxed">
          Books are more than just pages; they are windows to endless worlds.
          Each story inspires, teaches, and motivates us to dream bigger, think
          deeper, and grow wiser every single day!
        </p>

        <label className="input flex items-center border border-gray-300 rounded-md overflow-hidden">
          <svg
            className="h-6 w-6 mx-2 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-2 py-2 focus:outline-none"
          />
        </label>

        <button className="btn mt-3 btn-secondary px-6 py-2">Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
