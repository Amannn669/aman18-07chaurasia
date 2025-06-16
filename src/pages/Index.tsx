
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import FixedResumeLink from '@/components/FixedResumeLink';
import TechStack from '@/components/TechStack';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-10 animate-float" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-10 animate-float [animation-delay:-2s]" />

      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <Hero />
        <About />
        <WhatIDo />
      </main>
      <TechStack />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <Experience />
        <Contact />
      </main>
      <FixedResumeLink />
    </div>
  );
};

export default Index;
