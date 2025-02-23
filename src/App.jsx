import { useState, useEffect } from "react";
import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import LoadingScreen from "./components/Loading";
// import Learnings from "./components/Learnings";
import Testimonials from "./components/Testimonials";

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
      {/* <Learnings /> */}
      <Testimonials />
      <footer className="text-yellow-900 text-center py-4 mt-8">
        <p className="mt-8">
          &copy; 2025{" "}
          <a
            href="mailto:dieulinhnguyenberlin@gmail.com"
            className="text-yellow-900 hover:underline"
          >
            dieulinhnguyenberlin@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
