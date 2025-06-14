
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center items-center">
           <img 
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-standing-with-a-book-and-a-cup-of-coffee-8376046-6646490.png" 
              alt="3D Character" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg animate-float [animation-delay:-2s]"
            />
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
