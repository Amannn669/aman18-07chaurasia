
import React from 'react';

const techCategories = [
  {
    title: "Languages & Libraries",
    techs: ["Python", "Pandas", "Scikit-learn", "Flask", "SQL", "Bash", "HTML", "CSS", "JavaScript", "Node.js"]
  },
  {
    title: "Machine Learning",
    techs: ["Supervised Learning", "Unsupervised Learning", "PyTorch", "TensorFlow", "AWS SageMaker"]
  },
  {
    title: "Generative AI & NLP",
    techs: ["LangChain", "Hugging Face", "Prompt Engineering", "OpenAI"]
  },
  {
    title: "Data Science",
    techs: ["EDA", "Feature Engineering", "Data Visualization", "Statistics"]
  },
  {
    title: "MLOps & Pipelines",
    techs: ["MLflow", "Apache Airflow", "DVC", "CI/CD", "Docker", "Kubernetes"]
  },
  {
    title: "Tools & Platforms",
    techs: ["Git", "AWS", "Grafana", "Tableau", "Excel", "Dagshub", "Linux"]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative w-full py-24 overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_hsl(var(--primary)/0.05)_180deg,_transparent_360deg)] animate-[spin_20s_linear_infinite]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground mb-4 animate-fade-in">
            TECH <span className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.8)]">ARSENAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-60" />
        </div>
        
        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${150 * categoryIndex}ms`, animationFillMode: 'backwards' }}
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-background/20 via-background/10 to-background/5 backdrop-blur-xl border border-primary/20 
                            group-hover:border-primary/40 transition-all duration-700 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2),_inset_0_0_40px_hsl(var(--primary)/0.05)]" />
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              
              {/* Card content */}
              <div className="relative p-8 h-full">
                {/* Category icon/accent */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.8)] animate-pulse" />
                
                {/* Category title */}
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground mb-8 tracking-wide">
                  {category.title}
                </h3>
                
                {/* Tech skills grid */}
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="relative group/skill animate-fade-in overflow-hidden"
                      style={{ animationDelay: `${200 * categoryIndex + 80 * techIndex}ms`, animationFillMode: 'backwards' }}
                    >
                      {/* Liquid glass base layer */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-xl border border-primary/20" />
                      
                      {/* Liquid wave effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 opacity-60
                                      animate-[liquid-wave_2s_ease-in-out_infinite] group-hover/skill:animate-[liquid-wave_1.5s_ease-in-out_infinite]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent 
                                      animate-[liquid-ripple_3s_ease-in-out_infinite] delay-500" />
                      </div>
                      
                      {/* Glass reflection layers */}
                      <div className="absolute inset-0 rounded-2xl">
                        {/* Top reflection */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl 
                                      opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
                        {/* Side reflection */}
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/10 to-transparent rounded-l-2xl 
                                      opacity-0 group-hover/skill:opacity-100 transition-opacity duration-700 delay-200" />
                        {/* Liquid distortion overlay */}
                        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10 
                                      opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 
                                      animate-[liquid-distort_4s_ease-in-out_infinite]" />
                      </div>
                      
                      {/* Outer glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-lg opacity-0 group-hover/skill:opacity-80 
                                    transition-all duration-500 -z-10 scale-125 group-hover/skill:animate-[liquid-glow_2s_ease-in-out_infinite]" />
                      
                      {/* Main skill chip */}
                      <span className="relative block px-4 py-2.5 text-sm font-bold text-foreground/90 group-hover/skill:text-primary 
                                     rounded-2xl border border-primary/30 group-hover/skill:border-primary/60
                                     transition-all duration-500 cursor-pointer z-10
                                     group-hover/skill:scale-110 group-hover/skill:-translate-y-1 
                                     group-hover/skill:shadow-[0_0_30px_hsl(var(--primary)/0.5),_inset_0_0_20px_hsl(var(--primary)/0.1)]
                                     backdrop-blur-sm bg-gradient-to-br from-background/60 to-background/20">
                        {tech}
                      </span>
                      
                      {/* Liquid shimmer waves */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                      translate-x-[-200%] group-hover/skill:translate-x-[200%] transition-transform duration-1000 ease-out
                                      animate-[liquid-shimmer_2s_ease-in-out_infinite]" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-transparent 
                                      translate-x-[200%] group-hover/skill:translate-x-[-200%] transition-transform duration-1200 ease-out delay-300" />
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute top-1 right-2 w-1 h-1 rounded-full bg-primary/80 opacity-0 group-hover/skill:opacity-100 
                                    transition-opacity duration-500 animate-[float_3s_ease-in-out_infinite]" />
                      <div className="absolute bottom-2 left-1 w-0.5 h-0.5 rounded-full bg-secondary/60 opacity-0 group-hover/skill:opacity-100 
                                    transition-opacity duration-700 animate-[float_4s_ease-in-out_infinite] delay-1000" />
                    </div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent 
                              group-hover:via-primary/80 transition-all duration-500" />
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/80 transition-colors duration-500 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 group-hover:border-primary/80 transition-colors duration-500 rounded-br-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
