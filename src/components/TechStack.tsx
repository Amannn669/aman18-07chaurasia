
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import TechBall from './TechBall';

const skills = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS", "Figma", "Vite", "HTML5", "CSS3", "Git", "Supabase", "MongoDB", "Three.js", "R3F"];

function getFibonacciSpherePositions(samples: number, radius: number): [number, number, number][] {
    const points: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2;
        const R = Math.sqrt(1 - y * y);

        const theta = phi * i;

        const x = Math.cos(theta) * R * radius;
        const z = Math.sin(theta) * R * radius;

        points.push([x, y * radius, z]);
    }
    return points;
}

const TechStack = () => {
    const ballPositions = getFibonacciSpherePositions(skills.length, 4.5);
    
    return (
        <section id="tech-stack" className="py-20 text-center min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-12">MY TECH STACK</h2>
            <div className="w-full h-[600px]">
                <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.8} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        {skills.map((skill, i) => (
                            <TechBall key={skill} text={skill} initialPosition={ballPositions[i]} />
                        ))}
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}

export default TechStack;
