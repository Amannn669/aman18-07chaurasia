
import React, { useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease-in-out',
    transformStyle: 'preserve-3d',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
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

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-in-out',
      transformStyle: 'preserve-3d',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col group will-change-transform"
    >
      <div className="aspect-video bg-secondary/20 rounded-md mb-4 overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-2xl font-bold mb-2" style={{ transform: 'translateZ(30px)' }}>{title}</h2>
      <p className="text-muted-foreground flex-grow mb-4" style={{ transform: 'translateZ(20px)' }}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline self-start" style={{ transform: 'translateZ(10px)' }}>
        View Project &rarr;
      </a>
    </div>
  );
};

export default ProjectCard;
