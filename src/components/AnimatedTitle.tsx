
import React from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className, as: Component = 'div' }) => {
  return (
    <Component className={className}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block opacity-0 animate-reveal-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

export default AnimatedTitle;
