
import React from 'react';
import AnimatedProfileImage from './AnimatedProfileImage';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center items-center">
           <AnimatedProfileImage className="w-full max-w-xs md:max-w-sm animate-float [animation-delay:-2s]" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary uppercase tracking-wider">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a creative developer & designer with a passion for blending technical expertise with creative edge. Driven by curiosity, I always try to explore and learn new skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
