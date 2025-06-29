
import React, { useState, useEffect } from 'react';

const CodeLoader = () => {
  const quotes = [
    "I don't just train models — I train perspectives to evolve with code.",
    "Between zeros and ones, I find the silence where ideas breathe.",
    "If thought had syntax, mine would compile into meaning.",
    "Some build apps to solve problems; I build to shift behaviors.",
    "I engineer machines, but I'm in the business of changing minds.",
    "Code is poetry written in logic's language.",
    "Every algorithm tells a story; I choose which stories to tell.",
    "In the symphony of data, I conduct the meaningful melodies.",
    "I don't just debug code — I debug the future.",
    "Where others see complexity, I architect simplicity.",
    "My models learn patterns, but I teach them wisdom.",
    "Between compilation and execution, magic happens.",
    "I write code that writes the future.",
    "Data flows through my algorithms like thoughts through consciousness.",
    "Every bug I fix makes the digital world a little more human."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(() => {
    return Math.floor(Math.random() * quotes.length);
  });
  
  const [fadeClass, setFadeClass] = useState('opacity-100');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFadeClass('opacity-0');
      
      setTimeout(() => {
        setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
        setFadeClass('opacity-100');
      }, 300);
    }, 3000);

    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-1 bg-muted/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out animate-pulse"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
          <div className="text-muted-foreground font-mono text-sm font-medium">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </div>
        
        {/* Animated Quote */}
        <div className="relative min-h-[120px] flex items-center justify-center">
          <p 
            className={`text-foreground text-2xl md:text-3xl leading-relaxed font-light italic max-w-3xl transition-opacity duration-300 ${fadeClass}`}
          >
            "{quotes[currentQuoteIndex]}"
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-1.5 h-1.5 bg-accent/30 rounded-full animate-float [animation-delay:1s]"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <div className="w-1 h-1 bg-muted-foreground/40 rounded-full animate-float [animation-delay:2s]"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3">
          <div className="w-2.5 h-2.5 bg-primary/20 rounded-full animate-float [animation-delay:1.5s]"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-20px) scale(1.2);
              opacity: 0.8;
            }
          }
        `
      }} />
    </div>
  );
};

export default CodeLoader;
