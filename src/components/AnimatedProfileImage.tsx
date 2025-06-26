
import React, { useState } from 'react';

interface AnimatedProfileImageProps {
  className?: string;
}

const AnimatedProfileImage = ({ className }: AnimatedProfileImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-16 -left-8 -right-8 bottom-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Default image (new one) */}
      <img
        src="/lovable-uploads/30f0f008-c7b0-4537-9c72-8a7fcc2fc7bb.png"
        alt="Aman Chaurasia"
        className={`relative w-full h-full object-cover object-top transition-opacity duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Hover image (previous one) */}
      <img
        src="/lovable-uploads/fdd309a3-ee66-492d-b11d-f4c35c019710.png"
        alt="Aman Chaurasia"
        className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default AnimatedProfileImage;
