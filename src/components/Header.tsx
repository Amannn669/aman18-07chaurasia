
import React from 'react';
import ShuffleLink from './ShuffleLink';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" className="text-xl font-bold story-link">AMAN.DEV</a>
        <nav className="flex items-center space-x-6 md:space-x-10 text-sm md:text-base">
          <ShuffleLink href="#about" className="story-link hover:text-primary transition-colors">ABOUT</ShuffleLink>
          <ShuffleLink href="#work" className="story-link hover:text-primary transition-colors">WORK</ShuffleLink>
          <ShuffleLink href="#experience" className="story-link hover:text-primary transition-colors">EXPERIENCE</ShuffleLink>
          <ShuffleLink href="#contact" className="story-link hover:text-primary transition-colors">CONTACT</ShuffleLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
