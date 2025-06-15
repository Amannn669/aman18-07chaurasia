
import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Billboard } from '@react-three/drei';
import * as THREE from 'three';

const TechBall = ({ text, initialPosition }: { text: string, initialPosition: [number, number, number] }) => {
  const [hovered, setHovered] = useState(false);
  const scaleRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    const targetScale = hovered ? 1.2 : 1;
    if (scaleRef.current) {
      scaleRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={initialPosition}>
      <Float speed={1.75} rotationIntensity={0.2} floatIntensity={1.5}>
        <group
          ref={scaleRef}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
          onPointerOut={() => setHovered(false)}
        >
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial
              color={hovered ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'}
              roughness={0.4}
              metalness={0.1}
            />
          </mesh>
          <Billboard>
            <Text
              position={[0, 0, 1]}
              fontSize={0.25}
              color="hsl(var(--primary-foreground))"
            >
              {text}
            </Text>
          </Billboard>
        </group>
      </Float>
    </group>
  );
};

export default TechBall;
