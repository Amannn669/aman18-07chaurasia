
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

interface Connection {
  from: TrailPoint;
  to: TrailPoint;
  opacity: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const trailIdRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .story-link, .slick-arrow')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Add new trail point
      const newPoint: TrailPoint = {
        x: newPosition.x,
        y: newPosition.y,
        id: trailIdRef.current++,
        timestamp: Date.now()
      };

      setTrail(prev => {
        const updated = [newPoint, ...prev.slice(0, 8)]; // Keep last 9 points
        
        // Create connections between recent points
        const newConnections: Connection[] = [];
        for (let i = 0; i < updated.length - 1; i++) {
          for (let j = i + 1; j < Math.min(i + 3, updated.length); j++) {
            const distance = Math.sqrt(
              Math.pow(updated[i].x - updated[j].x, 2) + 
              Math.pow(updated[i].y - updated[j].y, 2)
            );
            
            if (distance < 150) {
              newConnections.push({
                from: updated[i],
                to: updated[j],
                opacity: Math.max(0.1, 1 - (j - i) * 0.2)
              });
            }
          }
        }
        
        setConnections(newConnections);
        return updated;
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hide the cursor when it leaves the window
    document.addEventListener('mouseleave', () => {
      setPosition({ x: -100, y: -100 });
      setTrail([]);
      setConnections([]);
    });

    // Clean up old trail points
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(point => now - point.timestamp < 2000));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {/* SVG for neural network connections */}
      <svg
        ref={svgRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ width: '100vw', height: '100vh' }}
      >
        {connections.map((connection, index) => (
          <line
            key={`${connection.from.id}-${connection.to.id}`}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity={connection.opacity * 0.6}
            className="animate-pulse"
          />
        ))}
      </svg>

      {/* Main cursor */}
      <div
        className={cn(
          'custom-cursor',
          { 'hovered': isHovering }
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Trail nodes */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: Math.max(0.1, 1 - index * 0.15),
            transform: 'translate(-50%, -50%)',
            animation: `fade-out ${2 - index * 0.1}s ease-out forwards`
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
