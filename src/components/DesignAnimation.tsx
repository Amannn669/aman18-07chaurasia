
import React from 'react';

const DesignAnimation = () => {
  return (
    <div className="relative h-20 w-full flex items-center justify-center overflow-hidden mb-4">
      <div 
        className="absolute w-8 h-8 bg-primary/70 rounded-full animate-float" 
        style={{ animationDelay: '0s', left: '30%' }}
      ></div>
      <div 
        className="absolute w-10 h-10 bg-pink-500/70 rounded-full animate-float" 
        style={{ animationDelay: '-1.5s', left: '50%' }}
      ></div>
      <div 
        className="absolute w-6 h-6 bg-sky-500/70 rounded-full animate-float" 
        style={{ animationDelay: '-3s', left: '70%' }}
      ></div>
    </div>
  );
};

export default DesignAnimation;
