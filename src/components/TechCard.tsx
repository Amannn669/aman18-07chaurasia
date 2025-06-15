
import React from 'react';

interface TechCardProps {
  tech: {
    name: string;
    symbol: string;
    special?: boolean;
  };
}

const TechCard = ({ tech }: TechCardProps) => {
  const gridBg = "bg-[linear-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,hsl(var(--background))_1px)] bg-[size:2rem_2rem]";

  const frontFaceClasses = `
    z-10 font-black text-primary transition-all duration-500 group-hover:text-primary-foreground
    ${tech.special
      ? "text-7xl animate-text-glow"
      : "text-6xl group-hover:[text-shadow:0_0_15px_hsl(var(--primary))]"
    }
  `;

  const backFaceClasses = `
    z-10 font-bold text-primary transition-all duration-500 group-hover:text-primary-foreground
    ${tech.special
      ? "text-2xl animate-text-glow"
      : "text-xl group-hover:[text-shadow:0_0_10px_hsl(var(--primary))]"
    }
  `;

  return (
    <div className="group h-48 w-40 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] 
                     border-2 border-primary/20 group-hover:border-primary group-hover:shadow-[0_0_25px_hsl(var(--primary))]">
        
        {/* Front Face */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-background p-4 text-center [backface-visibility:hidden] ${gridBg}`}>
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          
          <p className={frontFaceClasses}>
            {tech.symbol}
          </p>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 flex h-full w-full items-center justify-center rounded-xl bg-background p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] ${gridBg}`}>
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors duration-500"></div>
          
          <p className={backFaceClasses}>
            {tech.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
