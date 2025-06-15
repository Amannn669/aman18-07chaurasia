
import React, { useState, useEffect, useRef } from 'react';
import { Accordion } from '@/components/ui/accordion';
import FramedBox from './FramedBox';
import { TypeAnimation } from 'react-type-animation';

const techStack = [
  { name: 'HTML', description: 'Building the structural foundation of web pages.' },
  { name: 'CSS', description: 'Applying styles and creating visually appealing layouts.' },
  { name: 'JavaScript', description: 'Enabling dynamic and interactive user experiences.' },
  { name: 'React', description: 'Developing modern, component-based user interfaces.' },
  { name: 'Node.js', description: 'Building fast and scalable server-side applications.' },
  { name: 'Three.js', description: 'Crafting immersive 3D graphics and animations for the web.' },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="tech-stack" className="py-24" ref={sectionRef}>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wider text-foreground">
          MY <span className="text-primary">TECH STACK</span>
        </h2>
        <Accordion type="single" collapsible className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {techStack.map((tech, index) => (
            <FramedBox key={tech.name} title={tech.name} value={`item-${index + 1}`}>
              <div className="flex flex-col gap-4">
                {isVisible && (
                  <TypeAnimation
                    sequence={[
                      `// Exploring ${tech.name}...`, 1500,
                      'const skill = "mastered";', 1000,
                      `console.log(\`Proficiency in ${tech.name}: \${skill}\`);`, 2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                    repeat={Infinity}
                  />
                )}
                <p className="text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </FramedBox>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TechStack;
