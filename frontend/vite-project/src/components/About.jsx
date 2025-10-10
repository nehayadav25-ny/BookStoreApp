import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-10 text-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8">
        About Our Bookstore
      </h1>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center">
        Welcome to <span className="font-semibold text-blue-300">My Bookstore</span> — 
        your one-stop destination for all kinds of books!  
        We aim to bring readers closer to stories, knowledge, and creativity.
      </p>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center mt-6">
        From timeless classics to modern bestsellers, we have a wide collection 
        for every book lover. Our mission is to make reading more accessible, 
        enjoyable, and affordable for everyone.
      </p>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center mt-6">
        Thank you for being a part of our reading community! ❤️📚
      </p>

      <div className="mt-10 border-t border-gray-700 pt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} My Bookstore. All rights reserved.
      </div>
    </div>
    </>
  );
}

export default About;
