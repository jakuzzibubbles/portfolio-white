import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      <div className="ui-circle absolute top-16 left-13 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute left-5 opacity-20 animate-pulse"></div>
      
     

      <Hero />
      <Projects />
      <footer className="text-black text-center py-4 mt-8">
        <p>&copy; 2025 Linh Nguyen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
