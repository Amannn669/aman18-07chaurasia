
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import FixedResumeLink from '@/components/FixedResumeLink';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-10 animate-float" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-10 animate-float [animation-delay:-2s]" />

      <Header />
      <main className="relative z-10">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <Hero />
            <About />
            <WhatIDo />
        </div>
        
        <Projects />
        
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <Experience />
            <Contact />
        </div>
      </main>
      <FixedResumeLink />
    </div>
  );
};

export default Index;
