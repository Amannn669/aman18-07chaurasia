
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" className="text-xl font-bold">MONCY.DEV</a>
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="text-muted-foreground hidden md:block">connect@moncy.dev</span>
          <nav className="flex items-center space-x-3 md:space-x-6 text-sm md:text-base">
            <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-primary transition-colors">WORK</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
