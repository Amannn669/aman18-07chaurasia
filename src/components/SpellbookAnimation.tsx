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
                fontSize={isHovered ? 1.7 : 1.5}
                color={isHovered ? '#ffd700' : '#4a2c1a'}
                anchorX="center"
                anchorY="middle"
             >
                {tech.symbol}
            </Text>
            {isHovered && (
                 <>
                    <Text
                        position={[0, -0.5, 0.001]}
                        fontSize={0.4}
                        color={'#4a2c1a'}
                        anchorX="center"
                        anchorY="middle"
                    >
                        {tech.name}
                    </Text>
                    <pointLight position={[0, 0.5, 0.5]} intensity={2.5} color="#ffd700" distance={4} />
                 </>
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
            const angle = THREE.MathUtils.lerp(0, -Math.PI + 0.05, progress);
            
            page.rotation.y = angle;
            
            const bend = Math.sin(Math.abs(angle)) * 0.2;
            page.rotation.x = -bend * 0.25;
            page.position.setZ((-i * 0.01) + (bend * 0.5));
        }
    });
  });

  return (
    <group position={[0, -0.5, 0]} scale={0.6} rotation={[0.1, 0.3, 0]}>
        {/* Left Cover */}
        <mesh position={[-1.75, 0, 0.05]} castShadow receiveShadow>
            <boxGeometry args={[3.5, 5.2, 0.2]} />
            <meshStandardMaterial color="#4a2c1a" roughness={0.6} metalness={0.2}/>
        </mesh>

        {/* Right Cover */}
        <mesh position={[1.75, 0, -techStack.length * 0.01 - 0.05]} castShadow receiveShadow>
             <boxGeometry args={[3.5, 5.2, 0.2]} />
            <meshStandardMaterial color="#4a2c1a" roughness={0.6} metalness={0.2}/>
        </mesh>

        {/* Spine */}
        <mesh position={[0, 0, (-techStack.length * 0.01) / 2]} castShadow>
            <boxGeometry args={[0.15, 5.2, techStack.length * 0.01 + 0.2]} />
            <meshStandardMaterial color="#3a1c0a" roughness={0.4} metalness={0.4} />
        </mesh>

        {/* Flipping pages */}
        {techStack.map((tech, i) => (
            <group key={i} ref={el => pageRefs.current[i] = el} position={[0, 0, -i * 0.01]}>
                <mesh position={[1.75, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[3.5, 4.8, 0.02]} />
                    <meshStandardMaterial color="#f3e9d2" side={THREE.DoubleSide} roughness={0.2} />
                </mesh>
                {/* Content on the right side of the page (front) */}
                <group position={[1.75, 0, 0.011]}>
                    <PageContent tech={tech} onHover={(h) => setHovered(h ? i : null)} isHovered={hovered === i} />
                </group>
                {/* Content on the left side of the page (back) */}
                <group position={[1.75, 0, -0.011]} rotation={[0, Math.PI, 0]}>
                   <PageContent tech={tech} onHover={(h) => setHovered(h ? i : null)} isHovered={hovered === i} />
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
