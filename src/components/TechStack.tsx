
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import ShuffleText from './ShuffleText';
import * as THREE from 'three';

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Tailwind CSS", "Figma", "Vite", "HTML5", "CSS3", "Git", 
  "Supabase", "MongoDB", "Three.js", "R3F"
];

const Cube = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const previousPointer = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const shuffleSkills = () => {
      const shuffled = [...skills].sort(() => 0.5 - Math.random());
      setCurrentSkills(shuffled.slice(0, 6));
    };

    shuffleSkills();
    const intervalId = setInterval(shuffleSkills, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.x += delta * 0.05;
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    previousPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging) {
      e.stopPropagation();
      setIsDragging(false);
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    e.stopPropagation();
    const deltaX = e.clientX - previousPointer.current.x;
    const deltaY = e.clientY - previousPointer.current.y;

    if (groupRef.current) {
      groupRef.current.rotation.y += deltaX * 0.005;
      groupRef.current.rotation.x += deltaY * 0.005;
    }
    
    previousPointer.current = { x: e.clientX, y: e.clientY };
  };

  const textProps = {
    fontSize: 0.45,
    color: 'hsl(var(--foreground))',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <group 
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerOut}
      onPointerMove={handlePointerMove}
    >
      <mesh>
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        <meshStandardMaterial 
          color="hsl(var(--primary))" 
          metalness={0.6}
          roughness={0.2}
        />
        
        {currentSkills.length > 0 && (
          <>
            <Text position={[0, 0, 1.76]} {...textProps}>{currentSkills[0]}</Text>
            <Text position={[0, 0, -1.76]} rotation={[0, Math.PI, 0]} {...textProps}>{currentSkills[1]}</Text>
            <Text position={[1.76, 0, 0]} rotation={[0, Math.PI / 2, 0]} {...textProps}>{currentSkills[2]}</Text>
            <Text position={[-1.76, 0, 0]} rotation={[0, -Math.PI / 2, 0]} {...textProps}>{currentSkills[3]}</Text>
            <Text position={[0, 1.76, 0]} rotation={[-Math.PI / 2, 0, 0]} {...textProps}>{currentSkills[4]}</Text>
            <Text position={[0, -1.76, 0]} rotation={[Math.PI / 2, 0, 0]} {...textProps}>{currentSkills[5]}</Text>
          </>
        )}
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5, 0.05, 16, 100]} />
        <meshStandardMaterial color="hsl(var(--foreground))" roughness={0.1} metalness={0.9} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="hsl(var(--foreground))" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <ShuffleText>MY TECH STACK</ShuffleText>
      </h2>
      <div className="h-[400px] w-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Cube />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
