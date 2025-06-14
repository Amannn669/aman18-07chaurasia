
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        // Calculate progress from 0 to 1 as the section scrolls through the viewport
        const progress = Math.max(0, Math.min(1, (window.innerHeight - top) / (window.innerHeight + height / 2)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollProgress * -80}px)`,
    transition: 'transform 0.1s linear',
  };

  return (
    <section id="about" className="py-24" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center items-center h-96 md:h-auto" style={parallaxStyle}>
           <div className="w-full max-w-xs md:max-w-sm group transition-transform duration-300 ease-out hover:translate-x-4">
             <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <img
                  src="/lovable-uploads/087076a8-5514-468b-a1f3-4df00fbfe41a.png"
                  alt="Moncy Yohannan"
                  className="relative w-full h-full object-contain"
                />
             </div>
           </div>
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
