
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerGlowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const trailContainerRef = useRef<HTMLDivElement>(null);
  
  const isHoveringRef = useRef(false);
  const trailPoints = useRef<Array<{ x: number; y: number; element: HTMLDivElement; timestamp: number }>>([]);

  useEffect(() => {
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update main cursor position immediately with transform
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
      }

      // Update ripple position
      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate(${x - 32}px, ${y - 32}px)`;
      }

      // Check hover state
      const target = e.target as HTMLElement;
      const wasHovering = isHoveringRef.current;
      isHoveringRef.current = Boolean(target.closest('a, button, [role="button"], .story-link, .slick-arrow'));

      // Update hover styles
      if (cursorRef.current && isHoveringRef.current !== wasHovering) {
        if (isHoveringRef.current) {
          cursorRef.current.classList.add('scale-150', 'bg-primary/40');
          cursorRef.current.style.boxShadow = '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)/0.3)';
          if (innerGlowRef.current) {
            innerGlowRef.current.classList.add('animate-pulse');
          }
          if (ringRef.current) {
            ringRef.current.classList.add('border-primary/60', '-inset-4');
            ringRef.current.style.animationDuration = '1s';
          }
          if (rippleRef.current) {
            rippleRef.current.style.display = 'block';
          }
        } else {
          cursorRef.current.classList.remove('scale-150', 'bg-primary/40');
          cursorRef.current.style.boxShadow = '0 0 10px hsl(var(--primary)/0.5)';
          if (innerGlowRef.current) {
            innerGlowRef.current.classList.remove('animate-pulse');
          }
          if (ringRef.current) {
            ringRef.current.classList.remove('border-primary/60', '-inset-4');
            ringRef.current.style.animationDuration = '2s';
          }
          if (rippleRef.current) {
            rippleRef.current.style.display = 'none';
          }
        }
      }

      // Add trail point
      if (trailContainerRef.current && trailPoints.current.length < 8) {
        const trailElement = document.createElement('div');
        trailElement.className = 'fixed pointer-events-none z-[9999] w-1 h-1 rounded-full bg-primary/30';
        trailElement.style.transform = `translate(${x}px, ${y}px)`;
        trailElement.style.animation = 'ping 800ms cubic-bezier(0, 0, 0.2, 1) infinite';
        
        trailContainerRef.current.appendChild(trailElement);
        trailPoints.current.push({
          x,
          y,
          element: trailElement,
          timestamp: Date.now()
        });

        // Remove after animation
        setTimeout(() => {
          if (trailElement.parentNode) {
            trailElement.parentNode.removeChild(trailElement);
          }
          trailPoints.current = trailPoints.current.filter(p => p.element !== trailElement);
        }, 800);
      }
    };

    const onMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-100px, -100px)';
      }
      if (rippleRef.current) {
        rippleRef.current.style.transform = 'translate(-100px, -100px)';
      }
      // Clear trail points
      trailPoints.current.forEach(point => {
        if (point.element.parentNode) {
          point.element.parentNode.removeChild(point.element);
        }
      });
      trailPoints.current = [];
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <>
      {/* Trail container */}
      <div ref={trailContainerRef} />
      
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000] w-6 h-6 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm transition-all duration-75 ease-out"
        style={{ 
          transform: 'translate(-100px, -100px)',
          boxShadow: '0 0 10px hsl(var(--primary)/0.5)'
        }}
      >
        {/* Inner glow */}
        <div ref={innerGlowRef} className="absolute inset-1 rounded-full bg-primary/40" />
        
        {/* Rotating ring */}
        <div 
          ref={ringRef}
          className="absolute -inset-2 rounded-full border border-primary/30 animate-spin transition-all duration-300"
          style={{ animationDuration: '2s' }}
        />
      </div>

      {/* Hover ripple effect */}
      <div
        ref={rippleRef}
        className="fixed pointer-events-none z-[9998] w-16 h-16 rounded-full border border-primary/20 animate-ping"
        style={{ 
          transform: 'translate(-100px, -100px)',
          animationDuration: '1.5s',
          display: 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
