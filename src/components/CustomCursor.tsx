
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const trailIdRef = useRef(0);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsMoving(true);

      // Add trail point
      const newTrailPoint: TrailPoint = {
        x: newPosition.x,
        y: newPosition.y,
        timestamp: Date.now(),
        id: trailIdRef.current++
      };

      setTrail(prev => [...prev.slice(-8), newTrailPoint]);

      // Clear moving state after delay
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);

      const target = e.target as HTMLElement;
      // Check if the cursor is over an interactive element
      if (target.closest('a, button, [role="button"], .story-link, .slick-arrow')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hide the cursor when it leaves the window
    document.addEventListener('mouseleave', () => {
        setPosition({ x: -100, y: -100 });
        setTrail([]);
    });

    // Clean up trail periodically
    const trailCleanup = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(point => now - point.timestamp < 1000));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(trailCleanup);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] w-1 h-1 rounded-full bg-primary/30 animate-ping"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            animationDelay: `${index * 50}ms`,
            animationDuration: `${800 + index * 100}ms`,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={cn(
          'fixed pointer-events-none z-[10000] w-6 h-6 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm transition-all duration-200 ease-out',
          {
            'scale-150 bg-primary/40 shadow-[0_0_20px_hsl(var(--primary))] animate-pulse': isHovering,
            'scale-125 bg-primary/30': isMoving && !isHovering,
          }
        )}
        style={{ 
          left: `${position.x - 12}px`, 
          top: `${position.y - 12}px`,
          boxShadow: isHovering 
            ? '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)/0.3)' 
            : '0 0 10px hsl(var(--primary)/0.5)'
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full bg-primary/40 animate-pulse" />
        
        {/* Rotating ring */}
        <div 
          className={cn(
            'absolute -inset-2 rounded-full border border-primary/30 animate-spin transition-all duration-300',
            { 'border-primary/60 -inset-4': isHovering }
          )}
          style={{ animationDuration: isHovering ? '1s' : '2s' }}
        />
      </div>

      {/* Hover ripple effect */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9998] w-16 h-16 rounded-full border border-primary/20 animate-ping"
          style={{ 
            left: `${position.x - 32}px`, 
            top: `${position.y - 32}px`,
            animationDuration: '1.5s'
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
