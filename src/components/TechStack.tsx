
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 animate-fade-in">
            <span className="text-foreground">TECH</span> <span className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.8)]">ARSENAL</span>
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
                      className="relative group/skill animate-fade-in"
                      style={{ animationDelay: `${200 * categoryIndex + 80 * techIndex}ms`, animationFillMode: 'backwards' }}
                    >
                      {/* Skill chip background layers */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 opacity-40 group-hover/skill:opacity-80 transition-opacity duration-300" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm" />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 -z-10 scale-110" />
                      
                      {/* Main skill chip */}
                      <span className="relative block px-4 py-2.5 text-sm font-bold text-foreground/90 group-hover/skill:text-primary 
                                     rounded-2xl border border-primary/30 group-hover/skill:border-primary/60
                                     transition-all duration-300 cursor-pointer 
                                     group-hover/skill:scale-110 group-hover/skill:-translate-y-1 group-hover/skill:shadow-[0_0_25px_hsl(var(--primary)/0.4)]
                                     backdrop-blur-sm">
                        {tech}
                      </span>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent 
                                      translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700 ease-out" />
                      </div>
                      
                      {/* Particle effect */}
                      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-primary/60 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 animate-pulse" />
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
