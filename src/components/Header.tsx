
import React from 'react';
import ShuffleLink from './ShuffleLink';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm animate-fade-in-down">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 flex justify-between items-center h-20 relative">
        <ShuffleLink href="/" className="text-4xl font-bold story-link">AMAN.DEV</ShuffleLink>
        <nav className="flex items-center space-x-6 md:space-x-10 text-xl md:text-2xl">
          <ShuffleLink href="/#about" className="story-link">ABOUT</ShuffleLink>
          <ShuffleLink href="/#work" className="story-link">WORK</ShuffleLink>
          <ShuffleLink href="/projects" className="story-link">PROJECTS</ShuffleLink>
          <ShuffleLink href="/#experience" className="story-link">EXPERIENCE</ShuffleLink>
          <ShuffleLink href="/#contact" className="story-link">CONTACT</ShuffleLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
