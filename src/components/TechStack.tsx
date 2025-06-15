
import React from 'react';
import TechCard from './TechCard';

const techStack = [
  { name: 'HTML', symbol: 'H', special: true },
  { name: 'CSS', symbol: 'C', special: true },
  { name: 'JavaScript', symbol: 'JS' },
  { name: 'React', symbol: 'R', special: true },
  { name: 'Node.js', symbol: 'N' },
  { name: 'Three.js', symbol: '3D' },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="w-full flex flex-col items-center justify-center py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wider text-foreground mb-12 animate-fade-in-down">
        MY <span className="text-primary">TECH STACK</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="animate-fade-in"
            style={{ animationDelay: `${150 * index}ms`, animationFillMode: 'backwards' }}
          >
            <TechCard tech={tech} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
