
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import ShuffleText from './ShuffleText';
import * as THREE from 'three';

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Tailwind CSS", "Figma", "Vite", "HTML5", "CSS3", "Git", 
  "Supabase", "MongoDB", "Three.js", "R3F"
];

const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  
  useEffect(() => {
    const shuffleSkills = () => {
      const shuffled = [...skills].sort(() => 0.5 - Math.random());
      setCurrentSkills(shuffled.slice(0, 6));
    };

    shuffleSkills();
    const intervalId = setInterval(shuffleSkills, 2500); // Change skills every 2.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  const textProps = {
    fontSize: 0.45,
    color: 'hsl(var(--foreground))',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial color="hsl(var(--primary))" />
      
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
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <ShuffleText>MY TECH STACK</ShuffleText>
      </h2>
      <div className="h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 7] }}>
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

