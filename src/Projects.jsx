import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import mushroomsImage from "./assets/mushrooms.png";
import valentineImage from "./assets/valentine.png";
import paralaxImage from "./assets/paralax.png";
import portfolio1Image from "./assets/portfolio1.png";

const projects = [
  {
    title: "tic tac toe",
    image: mushroomsImage,
    link: "https://shrooms.vercel.app/",
    description:
      "with a mushroom theme and a twist",
  },
  {
    title: "be my valentine",
    image: valentineImage,
    link: "https://jakuzzibubbles.github.io/be-my-valentine/",
    description: "makes me happy to code",
  },
  {
    title: "portfolio paralax",
    image: paralaxImage,
    link: "https://portfolio-linh.vercel.app/",
    description: "experimenting with threejs.",
  },
  {
    title: "portfolio react",
    image: portfolio1Image,
    link: "https://jakuzzibubbles-portfolio.vercel.app/",
    description: "built using react, vite & tailwindcss",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl text-black text-center mb-12 flex items-center justify-center gap-2 flex-wrap">
        my personal digital collection made with 🩷 & <FaReact size={30} className="text-blue-950 sm:size-24" />
        <FaHtml5 size={30} className="text-orange-600 sm:size-24" />
        <FaCss3Alt size={30} className="text-blue-500 sm:size-24" />
        <FaJsSquare size={30} className="text-yellow-500 sm:size-24" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-6 shadow-lg rounded-2xl bg-slate-900/90 w-full max-w-xs mx-auto transform transition-transform hover:scale-105"
          >
            <h2 className="text-xl text-white mb-4">{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-44 mb-4 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
