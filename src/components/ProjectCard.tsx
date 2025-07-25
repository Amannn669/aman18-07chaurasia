
import React, { useRef, useState } from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease-in-out',
    transformStyle: 'preserve-3d',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
      transformStyle: 'preserve-3d',
    });
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
    setStyle({
      transform: 'perspective(1000px) rotateY(180deg) scale3d(1.05, 1.05, 1.05)',
      transition: 'transform 0.6s ease-in-out',
      transformStyle: 'preserve-3d',
    });
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.6s ease-in-out',
      transformStyle: 'preserve-3d',
    });
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="relative w-full h-80 will-change-transform cursor-pointer"
    >
      {/* Front of card */}
      <div className="absolute inset-0 w-full h-full bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col backface-hidden">
        <div className="aspect-video bg-secondary/20 rounded-md mb-4 overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold mb-2" style={{ transform: 'translateZ(30px)' }}>{title}</h2>
        <p className="text-muted-foreground flex-grow mb-4 text-sm" style={{ transform: 'translateZ(20px)' }}>{description}</p>
        <span className="text-primary font-semibold self-start" style={{ transform: 'translateZ(10px)' }}>
          Hover to view repository &rarr;
        </span>
      </div>

      {/* Back of card */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg flex flex-col items-center justify-center backface-hidden"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="text-center">
          <div className="mb-6">
            <Github 
              size={64} 
              className="text-primary mx-auto hover:scale-110 transition-transform duration-200 cursor-pointer" 
              onClick={handleGithubClick}
            />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">View on GitHub</p>
          {link && link !== '#' ? (
            <button
              onClick={handleGithubClick}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Open Repository
            </button>
          ) : (
            <span className="text-muted-foreground text-xs">Repository not available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
