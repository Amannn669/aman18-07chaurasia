
import React from 'react';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <div className="flex justify-center md:justify-start items-center space-x-6 py-8">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target={social.name === 'Email' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={social.name}
          className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
