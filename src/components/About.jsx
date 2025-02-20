import React from 'react';
import Tabs from '../components/Tabs';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-transparent">
          <h1 className="text-3xl text-black text-center mb-12 flex items-center justify-center gap-2 flex-wrap">
           all about me
          </h1>

          <Tabs />
     </div>
  );
};

export default About;
