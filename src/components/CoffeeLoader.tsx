
import React from 'react';

const CoffeeLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#F5F1EB] to-[#E8E0D6] flex items-center justify-center z-50">
      <div className="relative">
        {/* Coffee Cup SVG - Much Larger */}
        <svg
          width="200"
          height="220"
          viewBox="0 0 200 220"
          className="relative z-10"
        >
          {/* Gradients and Effects */}
          <defs>
            {/* Cup gradient */}
            <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="30%" stopColor="#A0522D" />
              <stop offset="70%" stopColor="#654321" />
              <stop offset="100%" stopColor="#5D4037" />
            </linearGradient>
            
            {/* Coffee gradient */}
            <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3E2723" />
              <stop offset="30%" stopColor="#4A2C2A" />
              <stop offset="70%" stopColor="#2E1A16" />
              <stop offset="100%" stopColor="#1A0E0A" />
            </linearGradient>
            
            {/* Foam gradient */}
            <radialGradient id="foamGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#F5F5DC" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#DEB887" stopOpacity="0.5" />
            </radialGradient>
            
            {/* Cup shadow */}
            <filter id="cupShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="8" dy="12" stdDeviation="6" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
            
            {/* Inner shadow */}
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="2" dy="4"/>
              <feGaussianBlur stdDeviation="3"/>
              <feComposite operator="over"/>
            </filter>
            
            {/* Coffee clip path */}
            <clipPath id="cupClip">
              <path d="M50 75 L50 160 Q50 175 65 175 L135 175 Q150 175 150 160 L150 75 Z" />
            </clipPath>
          </defs>
          
          {/* Cup Base with shadow */}
          <path
            d="M40 75 L40 160 Q40 180 60 180 L140 180 Q160 180 160 160 L160 75 Z"
            fill="url(#cupGradient)"
            filter="url(#cupShadow)"
            stroke="#5D4037"
            strokeWidth="3"
          />
          
          {/* Cup Inner Wall */}
          <path
            d="M50 75 L50 160 Q50 175 65 175 L135 175 Q150 175 150 160 L150 75 Z"
            fill="#DEB887"
            stroke="#8B4513"
            strokeWidth="2"
          />
          
          {/* Coffee Liquid with advanced animation */}
          <rect
            x="50"
            y="75"
            width="100"
            height="100"
            fill="url(#coffeeGradient)"
            clipPath="url(#cupClip)"
            className="coffee-fill"
          />
          
          {/* Coffee foam layer */}
          <ellipse
            cx="100"
            cy="85"
            rx="45"
            ry="8"
            fill="url(#foamGradient)"
            className="coffee-foam"
          />
          
          {/* Coffee surface ripples - multiple layers */}
          <ellipse
            cx="100"
            cy="88"
            rx="35"
            ry="4"
            fill="#3A1F1D"
            opacity="0.6"
            className="ripple-1"
          />
          <ellipse
            cx="100"
            cy="90"
            rx="25"
            ry="3"
            fill="#2A1210"
            opacity="0.4"
            className="ripple-2"
          />
          <ellipse
            cx="100"
            cy="92"
            rx="15"
            ry="2"
            fill="#1A0A08"
            opacity="0.3"
            className="ripple-3"
          />
          
          {/* Cup Handle - More detailed */}
          <path
            d="M160 90 Q175 90 175 105 Q175 120 160 120"
            fill="none"
            stroke="url(#cupGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M160 95 Q170 95 170 105 Q170 115 160 115"
            fill="none"
            stroke="#DEB887"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Cup rim highlight */}
          <ellipse
            cx="100"
            cy="75"
            rx="50"
            ry="8"
            fill="none"
            stroke="#F5DEB3"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
        
        {/* Enhanced Steam Animation */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="steam-particle steam-1"></div>
          <div className="steam-particle steam-2"></div>
          <div className="steam-particle steam-3"></div>
          <div className="steam-particle steam-4"></div>
          <div className="steam-particle steam-5"></div>
          <div className="steam-particle steam-6"></div>
        </div>
        
        {/* Loading Text with enhanced styling */}
        <div className="text-center mt-8">
          <div className="text-[#8B4513] font-bold text-2xl tracking-wide mb-2 text-shadow">
            Brewing Perfect Coffee...
          </div>
          <div className="text-[#A0522D] text-sm mb-4 opacity-80">
            Please wait while we prepare your experience
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-3 h-3 bg-[#8B4513] rounded-full animate-bounce shadow-lg"></div>
            <div className="w-3 h-3 bg-[#A0522D] rounded-full animate-bounce [animation-delay:0.2s] shadow-lg"></div>
            <div className="w-3 h-3 bg-[#654321] rounded-full animate-bounce [animation-delay:0.4s] shadow-lg"></div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 w-64 h-2 bg-[#E8E0D6] rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full progress-bar"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .steam-particle {
            position: absolute;
            width: 6px;
            height: 20px;
            background: linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.3), rgba(255,255,255,0));
            border-radius: 3px;
            opacity: 0;
            filter: blur(0.5px);
          }
          
          .steam-1 {
            left: -15px;
            animation: advanced-steam-rise 3s ease-in-out infinite;
          }
          
          .steam-2 {
            left: -8px;
            animation: advanced-steam-rise 3s ease-in-out infinite 0.3s;
          }
          
          .steam-3 {
            left: -1px;
            animation: advanced-steam-rise 3s ease-in-out infinite 0.6s;
          }
          
          .steam-4 {
            left: 6px;
            animation: advanced-steam-rise 3s ease-in-out infinite 0.9s;
          }
          
          .steam-5 {
            left: 13px;
            animation: advanced-steam-rise 3s ease-in-out infinite 1.2s;
          }
          
          .steam-6 {
            left: 20px;
            animation: advanced-steam-rise 3s ease-in-out infinite 1.5s;
          }
          
          @keyframes advanced-steam-rise {
            0% {
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.8;
            }
            30% {
              transform: translateY(-25px) translateX(3px) scale(0.9) rotate(5deg);
              opacity: 0.9;
            }
            50% {
              transform: translateY(-45px) translateX(-2px) scale(0.7) rotate(-3deg);
              opacity: 0.6;
            }
            70% {
              transform: translateY(-65px) translateX(4px) scale(0.5) rotate(8deg);
              opacity: 0.3;
            }
            85% {
              transform: translateY(-80px) translateX(-1px) scale(0.3) rotate(-2deg);
              opacity: 0.1;
            }
            100% {
              transform: translateY(-100px) translateX(2px) scale(0.1) rotate(5deg);
              opacity: 0;
            }
          }
          
          @keyframes coffee-fill {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(0%);
              opacity: 1;
            }
          }
          
          @keyframes coffee-foam {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.9;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
          
          @keyframes ripple-1 {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.6;
            }
            33% {
              transform: scale(1.15) rotate(2deg);
              opacity: 0.4;
            }
            66% {
              transform: scale(0.95) rotate(-1deg);
              opacity: 0.7;
            }
          }
          
          @keyframes ripple-2 {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.4;
            }
            40% {
              transform: scale(0.85) rotate(-2deg);
              opacity: 0.6;
            }
            80% {
              transform: scale(1.1) rotate(1deg);
              opacity: 0.2;
            }
          }
          
          @keyframes ripple-3 {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.1;
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
          
          .coffee-fill {
            animation: coffee-fill 4s ease-out infinite;
          }
          
          .coffee-foam {
            animation: coffee-foam 4s ease-out infinite 2s;
          }
          
          .ripple-1 {
            animation: ripple-1 3s ease-in-out infinite 1s;
          }
          
          .ripple-2 {
            animation: ripple-2 3.5s ease-in-out infinite 1.5s;
          }
          
          .ripple-3 {
            animation: ripple-3 4s ease-in-out infinite 2s;
          }
          
          .progress-bar {
            animation: progress-fill 4s ease-out infinite;
          }
          
          .text-shadow {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
        `
      }} />
    </div>
  );
};

export default CoffeeLoader;
