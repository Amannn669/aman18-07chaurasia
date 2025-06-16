
import React from 'react';

const CodeLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background to-secondary flex items-center justify-center z-50">
      <div className="relative">
        {/* Terminal Window */}
        <div className="bg-card border border-border rounded-lg shadow-2xl w-96 h-64 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-secondary h-8 flex items-center px-4 border-b border-border">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-muted-foreground text-sm font-mono">terminal</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm text-foreground bg-card h-full">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-primary">$</span>
                <span className="ml-2 text-foreground">npm run build</span>
              </div>
              
              <div className="text-green-400 typing-line">
                Building application...
              </div>
              
              <div className="text-blue-400 typing-line-2">
                Compiling TypeScript files...
              </div>
              
              <div className="text-yellow-400 typing-line-3">
                Bundling assets...
              </div>
              
              <div className="text-purple-400 typing-line-4">
                Optimizing build...
              </div>
              
              <div className="flex items-center mt-4">
                <div className="loading-dots text-primary">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute -top-8 -left-8">
          <div className="code-float code-float-1 text-primary font-mono text-lg opacity-60">{'<>'}</div>
        </div>
        <div className="absolute -top-4 -right-8">
          <div className="code-float code-float-2 text-secondary font-mono text-lg opacity-60">{'{ }'}</div>
        </div>
        <div className="absolute -bottom-8 -left-4">
          <div className="code-float code-float-3 text-accent font-mono text-lg opacity-60">{'[ ]'}</div>
        </div>
        <div className="absolute -bottom-4 -right-8">
          <div className="code-float code-float-4 text-primary font-mono text-lg opacity-60">{'( )'}</div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-8">
          <div className="text-foreground font-bold text-2xl tracking-wide mb-2">
            Loading Portfolio...
          </div>
          <div className="text-muted-foreground text-sm mb-4 opacity-80">
            Initializing creative experience
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 w-96 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full progress-bar"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .typing-line {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(20) infinite;
          }
          
          .typing-line-2 {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(25) infinite 0.5s;
          }
          
          .typing-line-3 {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(18) infinite 1s;
          }
          
          .typing-line-4 {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(20) infinite 1.5s;
          }
          
          @keyframes typing {
            0% { 
              width: 0;
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              width: 100%;
              opacity: 1;
            }
            100% { 
              width: 100%;
              opacity: 0.7;
            }
          }
          
          .loading-dots span {
            animation: dots 1.5s infinite;
          }
          
          .loading-dots span:nth-child(2) {
            animation-delay: 0.3s;
          }
          
          .loading-dots span:nth-child(3) {
            animation-delay: 0.6s;
          }
          
          @keyframes dots {
            0%, 60%, 100% {
              opacity: 0.3;
            }
            30% {
              opacity: 1;
            }
          }
          
          .code-float {
            animation: float-around 4s ease-in-out infinite;
          }
          
          .code-float-1 {
            animation-delay: 0s;
          }
          
          .code-float-2 {
            animation-delay: 1s;
          }
          
          .code-float-3 {
            animation-delay: 2s;
          }
          
          .code-float-4 {
            animation-delay: 3s;
          }
          
          @keyframes float-around {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.6;
            }
            25% {
              transform: translateY(-10px) rotate(5deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(5px) rotate(-3deg);
              opacity: 1;
            }
            75% {
              transform: translateY(-5px) rotate(7deg);
              opacity: 0.7;
            }
          }
          
          @keyframes progress-fill {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
          
          .progress-bar {
            animation: progress-fill 4s ease-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default CodeLoader;
