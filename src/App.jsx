import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      <div className="ui-circle absolute top-10 left-5 sm:left-10 md:left-20 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute top-24 left-16 sm:left-32 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute top-40 left-24 sm:left-48 opacity-20 animate-pulse"></div>

      <Hero />
      <Projects />
      <footer className="text-black text-center py-4 mt-8">
        <a
          href="./LinhNguyen.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-900 text-2xl font-semibold hover:underline"
        >
          view resume
        </a>
        <p>&copy; 2025 Linh Nguyen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
