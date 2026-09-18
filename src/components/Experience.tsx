
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, BriefcaseBusiness, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string;
  location?: string;
  period?: string;
  achievements?: string[];
}

const experienceData: ExperienceItem[] = [
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
    role: 'Software Engineer – AI/ML',
    company: 'Provana',
    year: 'NOW',
    description: 'Building real-time agent-assist systems and post-call AI analytics for contact-centre operations.',
    location: 'Noida, India',
    period: 'August 2026 – Present',
    achievements: [
      'Architected and shipped a production real-time AI Nudge Generation Service for contact-centre agents: an event-driven pipeline on Azure Function Apps with an Event Hub trigger, running Google Gemini and Gemma on Vertex AI via Google ADK. It surfaces priority-tagged coaching nudges mid-call with sub-second end-to-end latency.',
      'Designed stateful multi-turn conversation handling using Google ADK session management backed by PostgreSQL, enabling context-aware nudge generation across full call lifecycles without session drift.',
      'Built dual-path nudge delivery: AI-generated responses via Gemini for dynamic triggers, plus a hardcoded template fallback for guaranteed SLA. Results stream progressively to the agent UI through Azure Web PubSub at chunk level.',
      'Engineered a five-function post-call AI analytics suite on Azure Service Bus covering Call Metrics Scoring, Behavioral Flag Detection, AI Call Overview, Call Event Detection, and Recommendations. Each function uses Vertex AI with dynamic evaluation schemas from PostgreSQL templates; outputs persist to Azure Blob Storage with Langfuse and OpenTelemetry observability.',
    ],
  },
];

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredIndex === null) return;
    const onScroll = () => setHoveredIndex(null);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hoveredIndex]);

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
            const hasAchievements = item.achievements && item.achievements.length > 0;
            return (
            <div
              key={index}
              className={cn(
              "relative transition-all duration-500 ease-out",
              isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
              )}
              onMouseLeave={() => setHoveredIndex(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setHoveredIndex(null);
                }
              }}
            >
              <div className={`sm:flex items-start justify-between ${isReversed ? 'sm:flex-row-reverse' : ''}`}>
                <div className={`sm:w-5/12 mb-6 sm:mb-0 text-left sm:text-center ${isReversed ? 'sm:text-left' : 'sm:text-right'} pl-12 sm:pl-0`}>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                  {item.location && (
                    <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1 justify-start sm:justify-center">
                      <MapPin size={12} /> {item.location}
                    </p>
                  )}
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
                  {hasAchievements && (
                     <div>
                       <Button
                         type="button"
                         variant="outline"
                         size="sm"
                         className="mt-3 h-8 border-primary/30 bg-transparent px-3 text-xs text-primary hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                         aria-expanded={hoveredIndex === index}
                         aria-controls={`experience-details-${index}`}
                         onMouseEnter={() => setHoveredIndex(index)}
                         onFocus={() => setHoveredIndex(index)}
                         onClick={() => setHoveredIndex((current) => current === index ? null : index)}
                      >
                         <BriefcaseBusiness size={13} />
                        View Work Details
                         <ChevronDown
                           size={13}
                           className={cn("transition-transform", hoveredIndex === index && "rotate-180")}
                         />
                       </Button>
                    </div>
                  )}
                </div>
              </div>
               {hasAchievements && hoveredIndex === index && (
                 <div
                   id={`experience-details-${index}`}
                   className="ml-12 mt-5 overflow-hidden rounded-md border border-primary/25 bg-popover text-popover-foreground shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-200 sm:ml-0 sm:mt-6"
                 >
                   <div className="border-b border-border bg-primary/5 px-4 py-3 sm:px-5">
                     <div className="flex flex-wrap items-center gap-2">
                       <h4 className="text-sm font-bold sm:text-base">{item.role}</h4>
                       <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Current</span>
                     </div>
                     <p className="mt-0.5 text-sm font-semibold text-primary">{item.company}</p>
                     <p className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                       <MapPin size={11} /> {item.location} <span aria-hidden="true">•</span> {item.period}
                     </p>
                   </div>
                   <div className="px-4 py-4 sm:px-5">
                     <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Key Achievements</h5>
                     <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-5">
                       {item.achievements?.map((achievement, i) => (
                         <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                           <span className="mt-0.5 shrink-0 font-semibold text-primary">{String(i + 1).padStart(2, '0')}</span>
                           <span>{achievement}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               )}
            </div>
          )})}
        </div>
      </div>

    </section>
  );
};

export default Experience;
