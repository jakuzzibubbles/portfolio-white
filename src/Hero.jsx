import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-black min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Linh Nguyen</h1>

      <div className="max-w-3xl px-4">
        <p className="text-lg mb-8">
          Hi, I&apos;m a project manager with lots of energy and a sense of
          humor. In my free time, I turn into a software developer, building
          useful and fun apps and exploring the cloud because I enjoy working
          with code. I love swimming in the ocean, Vietnamese street food, cats,
          and exploring the universe, along with all things art and code.
        </p>
      </div>
      <div className="flex space-x-6 mt-4 mb-6">
        <a
          href="https://github.com/jakuzzibubbles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/jakuzzi263/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
