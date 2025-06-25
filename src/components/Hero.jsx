import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <motion.div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('./kitties.png')" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3, ease: "easeOut" }}
      ></motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white min-h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">linh nguyen</h1>
        <div className="max-w-3xl px-4">
          <p className="text-lg font-semibold mb-8">
            Hi, I&apos;m a project manager with lots of energy and a sense of
            humor. At night, I turn into a software developer, building fun apps
            that makes me happy. Currently exploring cloud computing because...
            why not! I love swimming in the ocean, Vietnamese street food,
            and my cats, along with all things art and all things code.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 mb-6">
          <a
            href="https://github.com/jakuzzibubbles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} className="hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/jakuzzibubbles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} className="hover:text-cyan-800" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
