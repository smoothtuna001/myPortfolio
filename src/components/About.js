// src/components/About.js

import React from "react";
import hero from "../images/ERlogomark.png"

export default function About() {
  return (
    <section id="about" className="bg-gray-800">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md: lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm First Last!
          </h1>
          <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
            I'm a UX designer at Brown with a passion for design.
          </h3>
          <p className="mb-8 leading-relaxed">
            Welcome to my website. I'm going to add some more descriptive text here once the webpage doesn't have to be anonymous.
            I can also use a photo that's actually of me instead of this stock photo.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Say Hi!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-900 py-2 px-6 border border-gray-600 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
          
        </div>
        <div className="flex flex-wrap justify-center">
          <div className=" ">
          <img src={hero} alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
        </div>
</div>
      </div>
    </section>
  );
}