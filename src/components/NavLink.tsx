
import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="story-link hover:text-primary transition-colors flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <Lock className="animate-spin" size={14} />}
      <span>{children}</span>
    </a>
  );
};

export default NavLink;
