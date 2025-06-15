
import React from 'react';
import useShuffle from '@/hooks/useShuffle';
import { Link } from 'react-router-dom';

interface ShuffleLinkProps {
  href: string;
  children: string;
  className?: string;
}

const ShuffleLink: React.FC<ShuffleLinkProps> = ({ href, children, className }) => {
  const { text, shuffle, stopShuffle } = useShuffle(children);

  const commonProps = {
    onMouseEnter: shuffle,
    onMouseLeave: stopShuffle,
    className: `font-mono ${className}`
  };

  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      to={href}
      {...commonProps}
    >
      {text}
    </Link>
  );
};

export default ShuffleLink;
