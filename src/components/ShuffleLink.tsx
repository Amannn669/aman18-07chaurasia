
import React from 'react';
import useShuffle from '@/hooks/useShuffle';
import { Link, useLocation } from 'react-router-dom';

interface ShuffleLinkProps {
  href: string;
  children: string;
  className?: string;
}

const ShuffleLink: React.FC<ShuffleLinkProps> = ({ href, children, className }) => {
  const { text, shuffle, stopShuffle } = useShuffle(children);
  const location = useLocation();

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

  const isHashLink = href.startsWith('/#');

  if (isHashLink || href === '/') {
    const handleNav = (e: React.MouseEvent) => {
      // If we are already on the home page, scroll to element
      if (location.pathname === '/') {
        e.preventDefault();
        const targetId = href === '/' ? 'home' : href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
      // If we are on another page, the Link component will handle navigation
    };

    return (
      <Link to={href === '/' ? '/#home' : href} onClick={handleNav} {...commonProps}>
        {text}
      </Link>
    );
  }

  return (
    <Link to={href} {...commonProps}>
      {text}
    </Link>
  );
};

export default ShuffleLink;
