import React from "react";

import mushroomsImage from "./assets/mushrooms.png";
import valentineImage from "./assets/valentine.png";
import paralaxImage from "./assets/paralax.png";
import portfolio1Image from "./assets/portfolio1.png";

const projects = [
  {
    title: "Tic Tac Toe",
    image: mushroomsImage,
    link: "https://shrooms.vercel.app/",
  },
  {
    title: "Be My Valentine",
    image: valentineImage,
    link: "https://jakuzzibubbles.github.io/be-my-valentine/",
  },
  {
    title: "Portfolio Paralax",
    image: paralaxImage,
    link: "https://portfolio-linh.vercel.app/",
  },
  {
    title: "Portfolio React",
    image: portfolio1Image,
    link: "https://jakuzzibubbles-portfolio.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl text-black text-center mb-8">Made with 🩷</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center p-6 shadow-lg rounded-2xl bg-slate-900/90 w-full max-w-xs mx-auto"
          >
            <h2 className="text-xl text-white mb-4">
              {project.title}
            </h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-44 mb-4 rounded-lg object-cover"
            />
            <a
              href={project.link}
              className="text-lg text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
