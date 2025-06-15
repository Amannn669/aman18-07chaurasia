
import React from 'react';
import useShuffle from '@/hooks/useShuffle';

interface ShuffleTextProps {
  children: string;
  as?: React.ElementType;
  className?: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({ children, as: Component = 'span', className }) => {
  const { text, shuffle, stopShuffle } = useShuffle(children);

  return (
    <Component
      onMouseEnter={shuffle}
      onMouseLeave={stopShuffle}
      className={className}
    >
      {text}
    </Component>
  );
};

export default ShuffleText;
