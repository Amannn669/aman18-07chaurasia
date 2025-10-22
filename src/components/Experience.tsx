
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    role: 'B.Tech Student',
    company: 'IIIT Raichur',
    year: '2022',
    description: 'Embarked on my computer science journey at the Indian Institute of Information Technology, Raichur.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Self-Taught',
    year: '2023',
    description: 'Acquired comprehensive skills in full-stack web development through self-directed learning.',
  },
  {
    role: 'Cultural Secretary',
    company: 'IIIT Raichur Student Council',
    year: '2024',
    description: 'Led and organized campus-wide cultural events, honing leadership and team management skills.',
  },
  {
    role: 'AI/ML Practitioner',
    company: 'Industry Projects',
    year: '2025',
    description: 'Applying AI/ML knowledge to real-world industry projects, creating impactful solutions.',
  },
  {
    role: 'Data Science Intern',
    company: 'Krutanic',
    year: '2025',
    description: 'Worked as a data science intern, applying data analysis and machine learning techniques to solve business problems.',
  },
  {
    role: 'AI Intern',
    company: 'Darwix AI',
    year: 'NOW',
    description: 'Working as an AI intern, applying machine learning and artificial intelligence solutions to real-world problems.',
  },
];

// Progress percentages for when each milestone becomes active
const milestoneThresholds = [5, 20, 35, 55, 75, 95];

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
      // Adjust progress calculation to ensure it reaches 100% more smoothly
      const newProgress = Math.max(0, Math.min(100, scrollPercent * 120));

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
    <section id="experience" className="py-16 sm:py-24 lg:py-32" ref={sectionRef}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center px-4">
        My <span className="text-primary">career</span> & <span className="text-primary">experience</span>
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute w-px h-full bg-primary/20 top-0 left-4 sm:left-1/2 sm:-translate-x-1/2">
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
        <div className="space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const isActive = index <= activeMilestone;
            return (
            <div key={index} className={cn(
              "relative transition-all duration-500 ease-out",
              isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
            )}>
              <div className={`sm:flex items-start justify-between ${isReversed ? 'sm:flex-row-reverse' : ''}`}>
                <div className={`sm:w-5/12 mb-6 sm:mb-0 text-left sm:text-center ${isReversed ? 'sm:text-left' : 'sm:text-right'} pl-12 sm:pl-0`}>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                
                <div className={cn(
                  "w-8 h-8 rounded-full bg-background border-2 flex items-center justify-center absolute left-0 top-0 sm:left-1/2 sm:-translate-x-1/2 shrink-0 z-10 transition-all duration-500",
                  isActive ? "border-primary scale-110 shadow-[0_0_12px_theme(colors.primary)]" : "border-muted-foreground/30"
                )}>
                  <div className={cn(
                    "w-3 h-3 rounded-full transition-all duration-500",
                    isActive ? "bg-primary" : "bg-muted-foreground/30"
                  )} />
                </div>

                <div className={`sm:w-5/12 mt-6 sm:mt-0 text-left sm:text-center ${isReversed ? 'sm:text-right' : 'sm:text-left'} pl-12 sm:pl-0`}>
                  <p className="font-black text-2xl sm:text-3xl text-muted-foreground mb-2">{item.year}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
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
