
import React from 'react';

interface TechCardProps {
  tech: {
    name: string;
    symbol: string;
  };
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="group h-48 w-40 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-secondary/20 border border-border/20 p-4 text-center [backface-visibility:hidden]">
          <p className="text-6xl font-black text-primary">{tech.symbol}</p>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-xl bg-secondary/30 border border-border/20 p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-xl font-bold">{tech.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
