
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import ShuffleText from './ShuffleText';
import { SpellbookAnimation } from './SpellbookAnimation';

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 flex justify-center items-baseline gap-x-2">
        <span><ShuffleText>MY</ShuffleText></span>
        <span className="text-primary"><ShuffleText>SPELLS</ShuffleText></span>
      </h2>
      <p className="mb-8 text-muted-foreground">Scroll to turn the pages.</p>
      <div className="h-[600px] w-full relative">
        <Canvas camera={{ position: [0, 0.5, 8], fov: 50 }} shadows>
          <color attach="background" args={['hsl(10, 10%, 3%)']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8a5a3c" />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={20} speed={0.4} color="gold" />
            <SpellbookAnimation />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
