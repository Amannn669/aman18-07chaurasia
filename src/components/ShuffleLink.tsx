
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
    className: `font-mono ${className}`,
  };

  if (href.startsWith('/')) {
    return (
      <Link to={href} {...commonProps}>
        {text}
      </Link>
    );
  }

  return (
    <a href={href} {...commonProps}>
      {text}
    </a>
  );
};

export default ShuffleLink;
