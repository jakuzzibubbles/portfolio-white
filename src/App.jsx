import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      <div className="ui-circle absolute top-0 left-0 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute top-20 right-20 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute left-10 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute right-5 opacity-20 animate-pulse"></div>
      <Hero />
      <Projects />
      <footer className="text-black text-center py-4 mt-8">
        <p>&copy; 2025 Linh Nguyen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
