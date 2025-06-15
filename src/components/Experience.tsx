
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    role: 'Senior web developer',
    company: 'Blue Cube Digital',
    year: '2017',
    description: 'Developed and managed web projects, including frontend/backend, CMS dashboards, and responsive, accessible web pages with PHP, MySQL, and JavaScript.',
  },
  {
    role: 'Associate Solution Leader',
    company: 'Brane Enterprises',
    year: '2020',
    description: 'Built web features, product prototypes, and reusable components/microservices, implemented UI improvements and 3D UI interface compatible with Typescript.',
  },
  {
    role: 'Freelance & Upskilling',
    company: 'Freelance',
    year: 'NOW',
    description: 'During this period, I worked as a freelancer for various clients, providing 3D and web services, while actively upskilling also in multiple areas increasing my Techstack.',
  },
];

// Progress percentages for when each milestone becomes active
const milestoneThresholds = [5, 40, 75];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      const scrollPercent = (screenHeight - top) / (screenHeight + height);
      const newProgress = Math.max(0, Math.min(100, scrollPercent * 100));

      setProgress(newProgress);

      let newActiveMilestone = -1;
      for (let i = milestoneThresholds.length - 1; i >= 0; i--) {
        if (newProgress >= milestoneThresholds[i]) {
          newActiveMilestone = i;
          break;
        }
      }
      setActiveMilestone(newActiveMilestone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
        My career & experience
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute w-px h-full bg-primary/20 top-0 left-1/2 -translate-x-1/2 hidden md:block">
           <div
            className="w-full bg-primary shadow-[0_0_8px_theme(colors.primary)]"
            style={{ height: `${progress}%`, transition: 'height 0.1s linear' }}
          />
          <div 
             className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_4px_theme(colors.primary)] animate-neon-pulse"
             style={{
               top: `${progress}%`,
               left: '50%',
               transform: 'translate(-50%, -50%)',
               transition: 'top 0.1s linear',
               opacity: progress > 1 ? 1 : 0
             }}
           />
        </div>
        <div className="space-y-16">
          {experienceData.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const isActive = index <= activeMilestone;
            return (
            <div key={index} className={cn(
              "relative transition-all duration-500 ease-out",
              isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
            )}>
              <div className={`md:flex items-start justify-between ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-5/12 mb-6 md:mb-0 text-center ${isReversed ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                
                <div className={cn(
                  "w-8 h-8 rounded-full bg-background border-2 flex items-center justify-center mx-auto md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 shrink-0 z-10 transition-all duration-500",
                  isActive ? "border-primary scale-110 shadow-[0_0_12px_theme(colors.primary)]" : "border-muted-foreground/30"
                )}>
                  <div className={cn(
                    "w-3 h-3 rounded-full transition-all duration-500",
                    isActive ? "bg-primary" : "bg-muted-foreground/30"
                  )} />
                </div>

                <div className={`md:w-5/12 mt-6 md:mt-0 text-center ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="font-black text-3xl text-muted-foreground mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Experience;
