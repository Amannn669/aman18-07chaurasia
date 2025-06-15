
```tsx
import React from 'react';

interface AnimatedProfileImageProps {
  className?: string;
}

const AnimatedProfileImage = ({ className }: AnimatedProfileImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1.5 bg-primary rounded-full blur-xl opacity-75 animate-spin-slow"></div>
      <div className="relative aspect-square w-full">
        <img
          src="/lovable-uploads/cf70903c-c3f1-4ff3-b60a-5720a4884869.png"
          alt="Aman Chaurasia"
          className="w-full h-full object-cover rounded-full shadow-[0_0_30px_black]"
        />
      </div>
    </div>
  );
};

export default AnimatedProfileImage;
```
