
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center items-center">
           <img 
              src="https://ik.imagekit.io/yohann/my-portfolio/about-character_EUpC5Uu03.png?updatedAt=1685376043132" 
              alt="3D character reading a book" 
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
