
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

  // Disable animations on mobile for better performance and layout
  const isMobile = window.innerWidth < 768;
  
  const maxHorizontalTranslation = isMobile ? 0 : 96;
  const horizontalTranslationOnScroll = scrollProgress * maxHorizontalTranslation;
  const horizontalTranslationOnHover = isHovered && !isMobile ? maxHorizontalTranslation : 0;
  
  const finalHorizontalTranslation = Math.max(horizontalTranslationOnScroll, horizontalTranslationOnHover);

  const imageContainerStyle = {
    transform: isMobile 
      ? 'translateY(0px) translateX(0px)' 
      : `translateY(${scrollProgress * -120}px) translateX(${finalHorizontalTranslation}px)`,
    transition: 'transform 0.5s ease-out',
  };

  return (
    <section id="about" className="py-16 sm:py-24" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center h-64 md:h-auto order-2 md:order-1">
           <div 
             className="w-full max-w-xs md:max-w-sm group relative"
             style={imageContainerStyle}
             onMouseEnter={() => !isMobile && setIsHovered(true)}
             onMouseLeave={() => !isMobile && setIsHovered(false)}
           >
             <div className="relative z-10">
                <div className="absolute -top-16 -left-8 -right-8 bottom-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <img
                  src="/lovable-uploads/60691428-0224-4453-9008-443e11680826.png"
                  alt="Aman Chaurasia"
                  className="relative w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-background to-transparent"></div>
             </div>
           </div>
        </div>
        <div className="text-center md:text-left order-1 md:order-2">
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
