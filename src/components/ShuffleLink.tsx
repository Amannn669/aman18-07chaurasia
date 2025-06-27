
import React from 'react';
import useShuffle from '@/hooks/useShuffle';
import { Link, useLocation } from 'react-router-dom';

interface ShuffleLinkProps {
  href: string;
  children: string;
  className?: string;
  onClick?: () => void;
}

const ShuffleLink: React.FC<ShuffleLinkProps> = ({ href, children, className, onClick }) => {
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
        onClick={onClick}
        {...commonProps}
      >
        {text}
      </a>
    );
  }

  const isHashLink = href.startsWith('/#');

  if (isHashLink || href === '/') {
    const handleNav = (e: React.MouseEvent) => {
      // Close mobile menu first if onClick is provided
      if (onClick) {
        onClick();
      }
      
      // If we are already on the home page, scroll to element
      if (location.pathname === '/') {
        e.preventDefault();
        const targetId = href === '/' ? 'home' : href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          // Add a small delay to allow mobile menu to close first
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    return (
      <Link to={href === '/' ? '/#home' : href} onClick={handleNav} {...commonProps}>
        {text}
      </Link>
    );
  }

  return (
    <Link to={href} onClick={onClick} {...commonProps}>
      {text}
    </Link>
  );
};

export default ShuffleLink;
