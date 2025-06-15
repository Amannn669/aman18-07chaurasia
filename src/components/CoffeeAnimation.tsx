
import React, { useState, useEffect, useRef } from 'react';

const CoffeeAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="w-48 h-48 relative">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <clipPath id="cup-mask-for-coffee">
            <path d="M20 85 V30 H 80 V 85 C 80 95 20 95 20 85 Z" />
          </clipPath>
        </defs>
        {/* Cup */}
        <path
          d="M20 85 V30 C20 20 80 20 80 30 V85 C80 95 20 95 20 85 Z"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
          fill="hsl(var(--background))"
        />
        {/* Handle */}
        <path
          d="M80 45 C 95 50, 95 70, 80 75"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Coffee liquid */}
        <g clipPath="url(#cup-mask-for-coffee)">
          <rect
            x="20"
            y="30"
            width="60"
            height="55"
            className={`fill-primary origin-bottom transition-transform duration-[3000ms] ease-out ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          />
        </g>
        {/* Steam */}
        <g className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: isVisible ? '2500ms' : '0s'}}>
          <path d="M40 28 C 40 23, 45 23, 45 28" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" className="animate-steam" style={{animationDelay: '0s'}}/>
          <path d="M52 28 C 52 23, 57 23, 57 28" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" className="animate-steam" style={{animationDelay: '0.5s'}}/>
          <path d="M64 28 C 64 23, 69 23, 69 28" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" className="animate-steam" style={{animationDelay: '1s'}}/>
        </g>
      </svg>
    </div>
  );
};

export default CoffeeAnimation;
