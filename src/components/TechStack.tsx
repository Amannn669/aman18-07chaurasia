
import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Stars, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import ShuffleText from './ShuffleText';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB",
  "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "R3F", "Git"
];

// Generate points on a sphere using Fibonacci lattice
const getSpherePoints = (count: number, radius: number) => {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * r * radius;
        const z = Math.sin(theta) * r * radius;
        points.push(new THREE.Vector3(x, y * radius, z));
    }
    return points;
};

const Node = ({ position, text }: { position: THREE.Vector3; text: string }) => {
    const [hovered, setHover] = useState(false);
    
    return (
        <group position={position}>
            <mesh
                onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.5 : 1}
            >
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial 
                    color={hovered ? 'hotpink' : 'hsl(var(--primary))'}
                    emissive={hovered ? 'hotpink' : 'hsl(var(--primary))'}
                    emissiveIntensity={hovered ? 4 : 1.5}
                    toneMapped={false}
                />
            </mesh>
            <Text
                position={[0, 0.45, 0]}
                fontSize={0.3}
                color={hovered ? 'hotpink' : 'hsl(var(--foreground))'}
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </group>
    );
};

const Constellation = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const radius = 5;

    const nodes = useMemo(() => {
        const points = getSpherePoints(skills.length, radius);
        return skills.map((skill, i) => ({
            position: points[i],
            text: skill
        }));
    }, []);

    const edges = useMemo(() => {
        const connections = [];
        const processedPairs = new Set<string>();

        for (let i = 0; i < nodes.length; i++) {
            const distances = [];
            for (let j = 0; j < nodes.length; j++) {
                if (i === j) continue;
                distances.push({ index: j, dist: nodes[i].position.distanceTo(nodes[j].position) });
            }
            distances.sort((a, b) => a.dist - b.dist);

            // Connect to 2 nearest neighbors
            for(let k = 0; k < 2; k++) {
              const neighborIndex = distances[k].index;
              const pairKey = [i, neighborIndex].sort((a, b) => a - b).join('-');
              if (!processedPairs.has(pairKey)) {
                connections.push({ start: nodes[i].position, end: nodes[neighborIndex].position });
                processedPairs.add(pairKey);
              }
            }
        }
        return connections;
    }, [nodes]);

    useFrame((_state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <Node key={i} position={node.position} text={node.text} />
            ))}
            {edges.map((edge, i) => (
                <Line
                    key={i}
                    points={[edge.start, edge.end]}
                    color="hsl(var(--primary))"
                    lineWidth={1}
                    transparent
                    opacity={0.3}
                />
            ))}
        </group>
    );
};


const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <ShuffleText>MY TECH STACK</ShuffleText>
      </h2>
      <div className="h-[500px] w-full">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Constellation />
          </Suspense>
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
