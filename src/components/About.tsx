
import React, { useState, useEffect, useRef } from 'react';
import ShuffleText from './ShuffleText';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
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

  const maxHorizontalTranslation = 64; // Moves more to the right
  const horizontalTranslationOnScroll = scrollProgress * maxHorizontalTranslation;
  const horizontalTranslationOnHover = isHovered ? maxHorizontalTranslation : 0;
  
  const finalHorizontalTranslation = Math.max(horizontalTranslationOnScroll, horizontalTranslationOnHover);

  const imageContainerStyle = {
    transform: `translateY(${scrollProgress * -80}px) translateX(${finalHorizontalTranslation}px)`,
    transition: 'transform 0.5s ease-out', // Slower and seamless transition
  };

  return (
    <section id="about" className="py-24" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center h-56 md:h-auto">
           <div 
             className="w-full max-w-xs md:max-w-sm group"
             style={imageContainerStyle}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
           >
             <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <img
                  src="/lovable-uploads/643796d8-041f-488a-8b7a-fb6a5f1df235.png"
                  alt="Aman Chaurasia"
                  className="relative w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div>
             </div>
           </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary uppercase tracking-wider">
            <ShuffleText>ABOUT ME</ShuffleText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a creative developer & designer with a passion for blending technical expertise with creative edge. Driven by curiosity, I always try to explore and learn new skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
