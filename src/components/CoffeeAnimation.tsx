
import React from 'react';
import { Coffee, Code } from 'lucide-react';

interface CoffeeAnimationProps {
  isVisible: boolean;
}

const CoffeeAnimation = ({ isVisible }: CoffeeAnimationProps) => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* The cup icon */}
      <Coffee className="absolute w-full h-full text-foreground/80" strokeWidth={1} />
      
      {/* The liquid container, positioned to be inside the cup */}
      <div className="absolute top-[22%] w-[62%] h-[48%] overflow-hidden rounded-b-xl">
        {/* The filling liquid */}
        <div 
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-900 to-amber-700 transition-all duration-[3000ms] ease-out delay-500 ${
            isVisible ? 'h-full' : 'h-0'
          }`}
        ></div>
      </div>

      {/* The code logo on the cup */}
      <Code className="absolute w-16 h-16 text-foreground/70 opacity-80" strokeWidth={1.5} />
    </div>
  );
};

export default CoffeeAnimation;
