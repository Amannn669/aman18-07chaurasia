
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
           <div className="w-full max-w-xs md:max-w-sm aspect-square">
             <img
               src="/lovable-uploads/37d517ff-c808-4bcd-8ce6-4f6f701d360f.png"
               alt="Moncy Yohannan"
               className="w-full h-full object-cover rounded-full"
             />
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
