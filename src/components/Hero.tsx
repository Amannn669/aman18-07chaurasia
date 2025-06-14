
import React from 'react';
import AnimatedText from './AnimatedText';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Hello! I'm <br />
            <span className="font-black text-5xl md:text-6xl lg:text-7xl">MONCY YOHANNAN</span>
          </h1>
          <AnimatedText />
        </div>
        <div className="flex justify-center items-center">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1080" 
              alt="A cool robot" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg animate-float"
            />
        </div>
      </div>
      <div className="absolute bottom-10 right-4 md:right-8 z-50 hidden md:flex items-center space-x-2">
        <a href="#resume" className="font-bold tracking-widest text-sm hover:text-primary transition-colors">
          RESUME
        </a>
        <Download size={16} className="text-primary"/>
      </div>
    </section>
  );
};

export default Hero;
