
import React from 'react';
import useShuffle from '@/hooks/useShuffle';

interface ShuffleLinkProps {
  href: string;
  children: string;
  className?: string;
}

const ShuffleLink: React.FC<ShuffleLinkProps> = ({ href, children, className }) => {
  const { text, shuffle, stopShuffle } = useShuffle(children);

  return (
    <a
      href={href}
      onMouseEnter={shuffle}
      onMouseLeave={stopShuffle}
      className={`font-mono ${className}`}
    >
      {text}
    </a>
  );
};

export default ShuffleLink;
