
import React from 'react';

const CoffeeLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#F5F1EB] flex items-center justify-center z-50">
      <div className="relative">
        {/* Coffee Cup SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="relative z-10"
        >
          {/* Cup Base */}
          <path
            d="M25 45 L25 85 Q25 95 35 95 L75 95 Q85 95 85 85 L85 45 Z"
            fill="#8B4513"
            stroke="#6B3410"
            strokeWidth="2"
          />
          
          {/* Cup Inner Wall */}
          <path
            d="M30 45 L30 80 Q30 85 35 85 L75 85 Q80 85 80 80 L80 45 Z"
            fill="#D2B48C"
          />
          
          {/* Coffee Liquid (animated fill) */}
          <defs>
            <clipPath id="cupClip">
              <path d="M30 45 L30 80 Q30 85 35 85 L75 85 Q80 85 80 80 L80 45 Z" />
            </clipPath>
          </defs>
          
          <rect
            x="30"
            y="45"
            width="50"
            height="40"
            fill="#4A2C2A"
            clipPath="url(#cupClip)"
            className="animate-coffee-fill"
          />
          
          {/* Coffee Surface Ripples */}
          <ellipse
            cx="55"
            cy="50"
            rx="20"
            ry="3"
            fill="#3A1F1D"
            opacity="0.6"
            className="animate-ripple-1"
          />
          <ellipse
            cx="55"
            cy="52"
            rx="15"
            ry="2"
            fill="#2A1210"
            opacity="0.4"
            className="animate-ripple-2"
          />
          
          {/* Cup Handle */}
          <path
            d="M85 55 Q95 55 95 65 Q95 75 85 75"
            fill="none"
            stroke="#8B4513"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Steam Animation */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="steam-particle steam-1"></div>
          <div className="steam-particle steam-2"></div>
          <div className="steam-particle steam-3"></div>
          <div className="steam-particle steam-4"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-6">
          <div className="text-[#8B4513] font-medium text-lg tracking-wide">
            Brewing...
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-[#8B4513] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#8B4513] rounded-full animate-bounce [animation-delay:0.1s]"></div>
            <div className="w-2 h-2 bg-[#8B4513] rounded-full animate-bounce [animation-delay:0.2s]"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .steam-particle {
          position: absolute;
          width: 4px;
          height: 12px;
          background: linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0));
          border-radius: 2px;
          opacity: 0;
        }
        
        .steam-1 {
          left: -8px;
          animation: steam-rise 2s ease-in-out infinite;
        }
        
        .steam-2 {
          left: -2px;
          animation: steam-rise 2s ease-in-out infinite 0.3s;
        }
        
        .steam-3 {
          left: 4px;
          animation: steam-rise 2s ease-in-out infinite 0.6s;
        }
        
        .steam-4 {
          left: 10px;
          animation: steam-rise 2s ease-in-out infinite 0.9s;
        }
        
        @keyframes steam-rise {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(2px) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-35px) translateX(-1px) scale(0.6);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-50px) translateX(3px) scale(0.4);
            opacity: 0;
          }
        }
        
        @keyframes coffee-fill {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        
        @keyframes ripple-1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        
        @keyframes ripple-2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(0.9);
            opacity: 0.2;
          }
        }
        
        .animate-coffee-fill {
          animation: coffee-fill 3s ease-out infinite;
        }
        
        .animate-ripple-1 {
          animation: ripple-1 2s ease-in-out infinite;
        }
        
        .animate-ripple-2 {
          animation: ripple-2 2.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
};

export default CoffeeLoader;
