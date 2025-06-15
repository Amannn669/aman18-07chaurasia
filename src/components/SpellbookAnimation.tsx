
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useScroll, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';

const techStack = [
  { name: 'HTML', symbol: 'H' },
  { name: 'CSS', symbol: 'C' },
  { name: 'JavaScript', symbol: 'JS' },
  { name: 'React', symbol: 'R' },
  { name: 'Node.js', symbol: 'N' },
  { name: 'Three.js', symbol: '3D' },
];

const PageContent = ({ tech, onHover, isHovered }: { tech: { name: string, symbol: string }, onHover: (hovered: boolean) => void, isHovered: boolean }) => {
    return (
        <group
            onPointerOver={(e) => { e.stopPropagation(); onHover(true); }}
            onPointerOut={() => onHover(false)}
        >
             <Text
                position={[0, 1, 0.001]}
                fontSize={1.5}
                color={isHovered ? '#ffd700' : '#4a2c1a'}
                anchorX="center"
                anchorY="middle"
             >
                {tech.symbol}
            </Text>
            {isHovered && (
                 <Text
                    position={[0, -0.5, 0.001]}
                    fontSize={0.4}
                    color={'#4a2c1a'}
                    anchorX="center"
                    anchorY="middle"
                >
                    {tech.name}
                </Text>
            )}
        </group>
    )
}

function Book() {
  const scroll = useScroll();
  const [hovered, setHovered] = useState<number | null>(null);
  const pageRefs = useRef<(THREE.Group | null)[]>([]);
  
  useFrame(() => {
    const offset = scroll.offset;
    pageRefs.current.forEach((page, i) => {
        if(page) {
            const pageStartOffset = i / (techStack.length);
            const progress = THREE.MathUtils.smoothstep(offset, pageStartOffset, pageStartOffset + 1 / techStack.length);
            page.rotation.y = THREE.MathUtils.lerp(0, -Math.PI + 0.02, progress);
        }
    });
  });

  return (
    <group position={[0, -0.5, 0]} scale={0.6} rotation={[0.1, 0.3, 0]}>
        {/* Left Cover */}
        <mesh position={[-1.75, 0, 0.05]} castShadow receiveShadow>
            <boxGeometry args={[3.5, 5, 0.2]} />
            <meshStandardMaterial color="#4a2c1a" roughness={0.6} metalness={0.2}/>
        </mesh>

        {/* Right Cover */}
        <mesh position={[1.75, 0, -techStack.length * 0.01 - 0.05]} castShadow receiveShadow>
             <boxGeometry args={[3.5, 5, 0.2]} />
            <meshStandardMaterial color="#4a2c1a" roughness={0.6} metalness={0.2}/>
        </mesh>

        {/* Flipping pages */}
        {techStack.map((_, i) => (
            <group key={i} ref={el => pageRefs.current[i] = el} position={[0, 0, -i * 0.01]}>
                <mesh position={[1.75, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[3.5, 4.8, 0.02]} />
                    <meshStandardMaterial color="#f3e9d2" side={THREE.DoubleSide} roughness={0.2} />
                </mesh>
                {/* Content on the right side of the page (front) */}
                <group position={[1.75, 0, 0.011]}>
                    {techStack[i + 1] && <PageContent tech={techStack[i + 1]} onHover={(h) => setHovered(h ? i + 1 : null)} isHovered={hovered === i + 1} />}
                </group>
                {/* Content on the left side of the page (back) */}
                <group position={[-1.75, 0, 0.011]} rotation={[0, Math.PI, 0]}>
                   <PageContent tech={techStack[i]} onHover={(h) => setHovered(h ? i : null)} isHovered={hovered === i} />
                </group>
            </group>
        ))}
    </group>
  );
}

export const SpellbookAnimation = () => {
    return (
        <ScrollControls pages={techStack.length} damping={0.15}>
            <Book />
        </ScrollControls>
    )
}
