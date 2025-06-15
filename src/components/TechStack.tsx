
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import ShuffleText from './ShuffleText';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB",
  "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "R3F", "Git"
];

const Cube = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  
  useEffect(() => {
    const shuffleSkills = () => {
      const shuffled = [...skills].sort(() => 0.5 - Math.random());
      setCurrentSkills(shuffled.slice(0, 6));
    };

    shuffleSkills();
    const intervalId = setInterval(shuffleSkills, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.1;
      ring1Ref.current.rotation.y -= delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.15;
      ring2Ref.current.rotation.y += delta * 0.2;
    }
  });

  const textProps = {
    fontSize: 0.45,
    color: 'hsl(var(--foreground))',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <group>
      <group ref={groupRef}>
        <mesh>
          <boxGeometry args={[3.5, 3.5, 3.5]} />
          <meshStandardMaterial 
            color="hsl(var(--primary))" 
            metalness={0.7}
            roughness={0.1}
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
      </group>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5, 0.02, 16, 100]} />
        <meshStandardMaterial color="hsl(var(--primary))" emissive="hsl(var(--primary))" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        <torusGeometry args={[5.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="hsl(var(--primary))" emissive="hsl(var(--primary))" emissiveIntensity={2} toneMapped={false} />
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
      <div className="h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <Cube />
          </Suspense>
          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
