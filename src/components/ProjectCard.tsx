
import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card-container relative h-80 perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`project-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isHovered ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="project-card-face project-card-front absolute inset-0 bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col justify-center backface-hidden">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Back of card */}
        <div className="project-card-face project-card-back absolute inset-0 bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors group"
          >
            <Github size={64} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
