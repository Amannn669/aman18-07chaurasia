
import React from 'react';

const CodeLoader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Main Loading Pill */}
        <div className="bg-card border border-border rounded-full px-8 py-4 shadow-2xl min-w-[300px] relative overflow-hidden">
          {/* Progress Bar Background */}
          <div className="absolute inset-0 bg-secondary/20 rounded-full"></div>
          
          {/* Animated Progress Bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full progress-fill"></div>
          
          {/* Loading Content */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-foreground font-mono text-lg font-medium">LOADING</span>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground font-mono text-sm progress-percentage">0%</span>
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-12 -left-8">
          <div className="w-2 h-2 bg-primary rounded-full opacity-60 animate-float"></div>
        </div>
        <div className="absolute -top-8 -right-12">
          <div className="w-3 h-3 bg-accent rounded-full opacity-40 animate-float [animation-delay:1s]"></div>
        </div>
        <div className="absolute -bottom-10 -left-6">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full opacity-70 animate-float [animation-delay:2s]"></div>
        </div>
        <div className="absolute -bottom-6 -right-8">
          <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-float [animation-delay:3s]"></div>
        </div>
        
        {/* Subtitle */}
        <div className="text-center mt-8">
          <div className="text-muted-foreground text-sm font-mono opacity-70">
            Initializing creative experience...
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes progress-fill {
            0% {
              width: 0%;
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
            100% {
              width: 100%;
              opacity: 0.9;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-20px) scale(1.1);
              opacity: 1;
            }
          }
          
          @keyframes percentage-count {
            0% { content: '0%'; }
            25% { content: '25%'; }
            50% { content: '50%'; }
            75% { content: '75%'; }
            100% { content: '100%'; }
          }
          
          .progress-fill {
            animation: progress-fill 4s ease-out infinite;
          }
          
          .progress-percentage {
            position: relative;
          }
          
          .progress-percentage::after {
            content: '0%';
            animation: percentage-count 4s step-end infinite;
          }
          
          @keyframes percentage-count {
            0% { content: '0%'; }
            20% { content: '23%'; }
            40% { content: '47%'; }
            60% { content: '71%'; }
            80% { content: '89%'; }
            95% { content: '99%'; }
            100% { content: '100%'; }
          }
        `
      }} />
    </div>
  );
};

export default CodeLoader;
