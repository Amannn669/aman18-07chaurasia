
import React, { useState } from 'react';
import professionalPortrait from '@/assets/professional-portrait.jpg';

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
      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-spin-slow group-hover:opacity-90 group-hover:animate-[spin_3s_linear_infinite] transition-all duration-300"></div>
      <div className="relative aspect-square w-full">
        {/* Default image (new one) - circular */}
        <img
          src="/lovable-uploads/30f0f008-c7b0-4537-9c72-8a7fcc2fc7bb.png"
          alt="Aman Chaurasia"
          className={`w-full h-full object-cover rounded-full shadow-[0_0_30px_black] transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />
        
        {/* Hover image (original one) - circular */}
        <img
          src={professionalPortrait}
          alt="Aman Chaurasia"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-full shadow-[0_0_40px_hsl(var(--primary))] transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default AnimatedProfileImage;
