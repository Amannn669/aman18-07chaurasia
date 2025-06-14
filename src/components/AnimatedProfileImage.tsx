
import React from 'react';

interface AnimatedProfileImageProps {
  className?: string;
}

const AnimatedProfileImage = ({ className }: AnimatedProfileImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-spin-slow"></div>
      <div className="relative aspect-square w-full">
        <img
          src="/lovable-uploads/6059cde6-2c36-495a-8ffe-be094c43dd1d.png"
          alt="Moncy Yohannan"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default AnimatedProfileImage;
