
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
    "Where others see complexity, I architect simplicity."
  ];

  const [currentQuote] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });

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

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative max-w-2xl mx-auto px-8">
        {/* Main Loading Container */}
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground font-mono text-sm font-medium">LOADING</span>
              <span className="text-muted-foreground font-mono text-sm">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
            <div className="w-full h-1 bg-secondary/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
          
          {/* Quote */}
          <div className="text-center">
            <p className="text-foreground/90 text-lg leading-relaxed font-light italic">
              "{currentQuote}"
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4">
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-float"></div>
        </div>
        <div className="absolute -top-2 -right-6">
          <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-float [animation-delay:1s]"></div>
        </div>
        <div className="absolute -bottom-6 -left-8">
          <div className="w-1 h-1 bg-secondary/70 rounded-full animate-float [animation-delay:2s]"></div>
        </div>
        <div className="absolute -bottom-4 -right-4">
          <div className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-float [animation-delay:1.5s]"></div>
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
              transform: translateY(-15px) scale(1.1);
              opacity: 0.8;
            }
          }
        `
      }} />
    </div>
  );
};

export default CodeLoader;
