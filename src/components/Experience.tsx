
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, ExternalLink } from 'lucide-react';

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
    role: 'Software Development Engineer',
    company: 'Darwix AI',
    year: 'NOW',
    description: 'Building production-grade AI systems — real-time call intelligence, RAG platforms, and multi-tenant ML pipelines.',
    location: 'Gurugram, India',
    period: 'September 2025 – Present',
    achievements: [
      'Architected and deployed a real-time AI call intelligence pipeline covering audio ingestion, speech-to-text transcription, NLP, and live agent nudge generation using Python, FastAPI, and WebSockets, achieving 99%+ system uptime.',
      'Engineered a hybrid Objection Detection Engine combining NLP, semantic similarity search, and LLM validation, achieving 95–98% detection accuracy and reducing false positives by 30–40% across 200+ concurrent users.',
      'Architected a production-grade multi-tenant RAG platform using a two-service microservices architecture behind an Nginx API gateway, containerized with Docker Compose and deployed on AWS ECS and AWS EKS.',
      'Built a hybrid retrieval engine combining dense vector search using FAISS and ChromaDB with BM25 keyword search at a 60/40 weighted fusion, achieving sub-500ms P95 query latency across all tenants.',
      'Implemented multi-tenant data isolation across all system layers including JWT-based company identification, per-company vector namespace separation, and metadata-filtered retrieval, ensuring zero cross-tenant data leakage.',
      'Designed a real-time call-memory system using Redis for session state management, running conversation summaries, and recent transcript windowing with MongoDB as a fallback store.',
      'Optimized real-time pipeline performance through asynchronous processing, request buffering, in-memory caching, Redis pipeline batching, and deduplication, reducing end-to-end response latency by 200–500ms.',
      'Evaluated alternative speech-to-text providers including Deepgram and ElevenLabs, identifying a 30–50% latency reduction opportunity; deployed and monitored all services using Docker, New Relic, and Grafana with automated CI/CD pipelines.',
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
            <div key={index} className={cn(
              "relative transition-all duration-500 ease-out",
              isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
            )}>
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
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1.5 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_12px_theme(colors.primary/0.3)] transition-all duration-300 group"
                          onMouseEnter={(e) => e.currentTarget.click()}
                        >
                          <ExternalLink size={12} className="group-hover:rotate-12 transition-transform" />
                          View Work Details
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[500px] max-h-[400px] overflow-y-auto scrollbar-hide p-4" side="top" align="start">
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-base font-bold flex items-center gap-2">
                              {item.role}
                              <span className="text-[10px] font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full">Current</span>
                            </h4>
                            <p className="text-sm font-semibold text-primary">{item.company}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <MapPin size={10} /> {item.location} • {item.period}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-primary uppercase tracking-wider">Key Achievements</h5>
                            <ul className="space-y-2">
                              {item.achievements?.map((achievement, i) => (
                                <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
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
