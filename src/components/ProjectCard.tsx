
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
      className="project-card-container relative h-80 perspective-1000 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`project-card-inner relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${isHovered ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="project-card-face project-card-front absolute inset-0 bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col justify-center backface-hidden hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bottom-0 group-hover:right-0 transition-all duration-700" />
        </div>

        {/* Back of card */}
        <div className="project-card-face project-card-back absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-purple-500/20 border border-primary/30 rounded-lg p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-all duration-300 group/link relative z-10"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
            <Github size={64} className="group-hover/link:scale-125 group-hover/link:rotate-12 transition-all duration-300 relative" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
