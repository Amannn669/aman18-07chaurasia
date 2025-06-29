
import React from 'react';
import TechCard from './TechCard';

const techStack = [
  { name: 'Python', symbol: 'PY', special: true },
  { name: 'LangChain', symbol: 'LC', special: true },
  { name: 'HuggingFace', symbol: 'HF' },
  { name: 'AWS', symbol: 'AWS', special: true },
  { name: 'MLflow', symbol: 'ML' },
  { name: 'Docker', symbol: 'DK' },
  { name: 'Airflow', symbol: 'AF' },
  { name: 'DVC', symbol: 'DVC' },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="w-full flex flex-col items-center justify-center py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wider text-foreground mb-12 animate-fade-in-down">
        MY <span className="text-primary">TECH STACK</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="animate-fade-in relative group"
            style={{ 
              animationDelay: `${150 * index}ms`, 
              animationFillMode: 'backwards',
              zIndex: techStack.length - index,
              transform: `translateX(${index % 2 === 0 ? '-8px' : '8px'}) translateY(${index % 3 === 0 ? '-4px' : '4px'})`
            }}
          >
            <div className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:z-50 relative">
              <TechCard tech={tech} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
