
import React, { useRef, useState } from 'react';
import ShuffleText from './ShuffleText';
import { Barcode } from 'lucide-react';

interface TechCardProps {
  skill: string;
}

const TechCard = ({ skill }: TechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease-in-out',
    transformStyle: 'preserve-3d',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (!isHovered) setIsHovered(true);

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -20;
    const rotateY = (x / width - 0.5) * 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`,
      transition: 'transform 0.1s ease-out',
      transformStyle: 'preserve-3d',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      className="bg-secondary p-4 rounded-lg border border-border will-change-transform flex items-center justify-center min-w-[150px] min-h-[70px]"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {isHovered ? (
          <ShuffleText as="p" className="text-lg font-mono text-primary-foreground">
            {skill}
          </ShuffleText>
        ) : (
          <Barcode className="text-primary-foreground/50 w-20 h-10" />
        )}
      </div>
    </div>
  );
};

export default TechCard;
