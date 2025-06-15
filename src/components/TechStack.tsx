
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SpellbookAnimation } from './SpellbookAnimation';

const TechStack = () => {
  return (
    <section id="tech-stack">
      <div className="h-[80vh] w-full relative">
        <Canvas className="no-scrollbar" camera={{ position: [0, 0.5, 8], fov: 50 }} shadows>
          <color attach="background" args={['hsl(10, 10%, 3%)']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8a5a3c" />
          <Suspense fallback={null}>
            <SpellbookAnimation />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
