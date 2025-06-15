
import React from 'react';
import ShuffleText from './ShuffleText';
import TechCard from './TechCard';

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Tailwind CSS", "Figma", "Vite", "HTML5", "CSS3", "Git", 
  "Supabase", "MongoDB", "Three.js", "R3F"
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <ShuffleText>MY TECH STACK</ShuffleText>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <TechCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
