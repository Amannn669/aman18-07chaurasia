
import React from 'react';
import AnimatedText from './AnimatedText';
import { Download } from 'lucide-react';
import AnimatedProfileImage from './AnimatedProfileImage';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Hello! I'm <br />
            <span className="font-black text-5xl md:text-6xl lg:text-7xl">AMAN CHAURASIA</span>
          </h1>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 h-16 md:h-20 flex items-center justify-center md:justify-start">
            <AnimatedText />
          </div>
          <SocialLinks />
        </div>
        <div className="flex justify-center items-center">
            <AnimatedProfileImage className="w-full max-w-xs md:max-w-sm animate-float" />
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
