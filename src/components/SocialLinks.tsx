
import React from 'react';
import { Instagram, Linkedin, X, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialMedia = [
    { icon: Linkedin, href: '#' },
    { icon: X, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <div className="fixed bottom-0 left-4 md:left-8 z-50 hidden md:flex flex-col items-center space-y-6">
      {socialMedia.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <social.icon size={20} />
        </a>
      ))}
      <div className="h-24 w-px bg-muted-foreground/50"></div>
    </div>
  );
};

export default SocialLinks;
