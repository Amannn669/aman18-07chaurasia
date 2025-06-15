
```tsx
import React from 'react';
import AnimatedText from './AnimatedText';
import AnimatedProfileImage from './AnimatedProfileImage';
import SocialLinks from './SocialLinks';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
            <AnimatedProfileImage className="w-full max-w-xs md:max-w-sm" />
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-10 h-10 text-primary animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
```
