
import React, { useState, useRef } from 'react';

interface ShuffleLinkProps {
  href: string;
  children: string;
  className?: string;
}

const ShuffleLink: React.FC<ShuffleLinkProps> = ({ href, children, className }) => {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const originalText = children;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((_letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(originalText);
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`font-mono ${className}`}
    >
      {displayText}
    </a>
  );
};

export default ShuffleLink;
