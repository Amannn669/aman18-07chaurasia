
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
    <div className="flex justify-center items-center space-x-6 py-12">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
