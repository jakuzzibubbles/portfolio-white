import { useState, useEffect } from "react";
import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import LoadingScreen from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssetsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [assetsLoaded]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-white min-h-screen relative">
      {/* <div className="ui-circle absolute top-64 left-5 sm:left-10 md:left-20 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute top-80 left-16 sm:left-32 opacity-20 animate-pulse"></div>
      <div className="ui-circle absolute top-96 left-24 sm:left-48 opacity-20 animate-pulse"></div> */}

      <Hero />
      <Projects />
      <footer className="text-black text-center py-4 mt-8">
        {/* <a
          href="./Linh Nguyen Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl bg-slate-700 border-2 px-4 rounded-lg transition duration-300 hover:bg-slate-200/80 hover:text-slate-900"
        >
          view resume
        </a> */}
        <p className="mt-8">&copy; 2025 Linh Nguyen.</p>
      </footer>
    </div>
  );
};

export default App;
