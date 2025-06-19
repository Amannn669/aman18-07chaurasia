
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
          size={24}
        />
        <Moon 
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
          size={24}
        />
      </div>
      
      {/* Animated background glow */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-yellow-400/20 group-hover:bg-yellow-400/30' 
          : 'bg-blue-400/20 group-hover:bg-blue-400/30'
      } opacity-0 group-hover:opacity-100`} />
    </button>
  );
};

export default ThemeToggle;
