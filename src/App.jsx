import { useState, useEffect } from "react";
import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
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
      <Hero />
      <Projects />
      <About />
      <footer className="text-black text-center py-4 mt-8">
        <p className="mt-8">&copy; 2025 linh nguyen</p>
      </footer>
    </div>
  );
};

export default App;
