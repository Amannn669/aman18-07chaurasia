
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import ShuffleLink from './ShuffleLink';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm animate-fade-in-down">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex justify-between items-center h-16 md:h-20">
        <ShuffleLink href="/" className="text-2xl md:text-4xl font-bold story-link">AMAN.DEV</ShuffleLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <nav className="flex items-center space-x-6 lg:space-x-10 text-xl lg:text-2xl">
            <ShuffleLink href="/#about" className="story-link">ABOUT</ShuffleLink>
            <ShuffleLink href="/#work" className="story-link">WORK</ShuffleLink>
            <ShuffleLink href="/projects" className="story-link">PROJECTS</ShuffleLink>
            <ShuffleLink href="/#experience" className="story-link">EXPERIENCE</ShuffleLink>
            <ShuffleLink href="/#contact" className="story-link">CONTACT</ShuffleLink>
            <ShuffleLink href="https://shorturl.at/DmHDH" className="story-link">RESUME</ShuffleLink>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-foreground hover:bg-muted transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
              <Plus size={24} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border">
          <nav className="flex flex-col items-center py-6 space-y-4 text-xl">
            <ShuffleLink 
              href="/#about" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </ShuffleLink>
            <ShuffleLink 
              href="/#work" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WORK
            </ShuffleLink>
            <ShuffleLink 
              href="/projects" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJECTS
            </ShuffleLink>
            <ShuffleLink 
              href="/#experience" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EXPERIENCE
            </ShuffleLink>
            <ShuffleLink 
              href="/#contact" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </ShuffleLink>
            <ShuffleLink 
              href="https://shorturl.at/DmHDH" 
              className="story-link py-2 px-4 w-full text-center hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESUME
            </ShuffleLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
