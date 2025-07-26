
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
    <section id="tech-stack" className="w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-background to-background/80">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wider text-foreground mb-16 animate-fade-in-down">
        MY <span className="text-primary">TECH STACK</span>
      </h2>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-fade-in"
            style={{ animationDelay: `${200 * categoryIndex}ms`, animationFillMode: 'backwards' }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Category title */}
            <h3 className="text-xl font-bold text-primary mb-4 relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
              {category.title}
            </h3>
            
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {category.techs.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30 hover:bg-secondary/40 hover:border-secondary/60 transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${300 * categoryIndex + 50 * techIndex}ms`, animationFillMode: 'backwards' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
