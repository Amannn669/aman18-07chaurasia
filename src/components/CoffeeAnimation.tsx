
import React from 'react';
import { Coffee, Code } from 'lucide-react';

interface CoffeeAnimationProps {
  isVisible: boolean;
}

const Steam = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={`absolute top-[20%] left-1/2 -translate-x-1/2 w-1/2 h-16 flex justify-center items-end gap-1.5 transition-opacity duration-1000 ${
      isVisible ? 'opacity-50 delay-[3500ms]' : 'opacity-0'
    }`}
  >
    <div className="w-1 h-8 bg-foreground/50 rounded-full animate-steam" style={{ animationDelay: '0s' }}></div>
    <div className="w-1 h-12 bg-foreground/50 rounded-full animate-steam" style={{ animationDelay: '0.5s' }}></div>
    <div className="w-1 h-6 bg-foreground/50 rounded-full animate-steam" style={{ animationDelay: '1s' }}></div>
  </div>
);

const CoffeeAnimation = ({ isVisible }: CoffeeAnimationProps) => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <Steam isVisible={isVisible} />
      {/* The cup icon */}
      <Coffee className="absolute w-full h-full text-foreground/80" strokeWidth={1} />
      
      {/* The liquid container, positioned to be inside the cup */}
      <div className="absolute top-[38%] left-[21%] w-[58%] h-[54%] overflow-hidden" style={{ borderRadius: '0 0 40px 40px' }}>
        {/* The filling liquid */}
        <div 
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-900 to-amber-700 transition-all duration-[3000ms] ease-in-out delay-500 ${
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
