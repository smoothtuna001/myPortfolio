// src/components/About.js

import React from "react";
import hero from "../images/table.jpg"

export default function About() {
  return (
    <section id="about" className="bg-gray-800">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm XXXX
          </h1>
          <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            I'm a UX designer at Brown
          </h3>
          <p className="mb-8 leading-relaxed">
            Here is some more description text about me. Scroll down to see some of my recent projects.
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src={hero}
            className="object-cover object-center rounded"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}