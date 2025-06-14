
import React, { useState, useEffect, useRef } from 'react';
import FramedBox from './FramedBox';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';

const WhatIDo = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const boxesConfig = [
    {
      title: 'Full Stack',
      column: 1,
      sequence: [
        '// Building from scratch...', 1500,
        'const frontend = createReactApp();', 1000,
        'const backend = setupNodeServer();', 1000,
        'connect(frontend, backend);', 2500,
      ],
      description: 'Crafting seamless experiences from database to UI, I build robust and scalable full-stack applications.',
    },
    {
      title: 'Generative AI',
      column: 2,
      sequence: [
        '// Tapping into creative AI...', 1500,
        'import { LLM } from "ai-models";', 1000,
        'const model = new LLM("gpt-4");', 1000,
        'model.generate("new ideas ✨");', 2500,
      ],
      description: 'Developing innovative applications that leverage the power of generative models to create, reason, and assist.',
    },
    {
      title: 'Machine Learning',
      column: 1,
      sequence: [
        '// Uncovering data insights...', 1500,
        'import { train } from "ml-library";', 1000,
        'const model = train(trainingData);', 1000,
        'const predictions = model.predict(newData);', 2500,
      ],
      description: 'From data analysis to predictive modeling, I build intelligent systems that learn from data and drive decisions.',
    },
    {
      title: 'AI Workflow',
      column: 2,
      sequence: [
        '// Automating with intelligence...', 1500,
        'const workflow = createAIAgent();', 1000,
        'workflow.integrate(["OpenAI", "Zapier"]);', 1000,
        'workflow.run();', 2500,
      ],
      description: 'Expert in integrating cutting-edge AI tools into business workflows to boost productivity and unlock new capabilities.',
    },
  ];

  const col1Boxes = boxesConfig.filter(b => b.column === 1);
  const col2Boxes = boxesConfig.filter(b => b.column === 2);

  const renderBoxColumn = (boxes: typeof boxesConfig) => {
    const isAnyInColHovered = boxes.some(b => b.title === hoveredBox);
    return (
      <div className="flex flex-col gap-8">
        {boxes.map(box => {
          const isHovered = hoveredBox === box.title;
          return (
            <div
              key={box.title}
              onMouseEnter={() => setHoveredBox(box.title)}
              className={cn(
                "transition-all duration-500 ease-in-out h-full",
                {
                  "flex-1": !isAnyInColHovered || isHovered,
                  "flex-none h-24 overflow-hidden": isAnyInColHovered && !isHovered,
                }
              )}
            >
              <FramedBox title={box.title}>
                <div className="flex flex-col gap-4">
                  {isVisible && (
                    <TypeAnimation
                      sequence={box.sequence}
                      wrapper="span"
                      speed={50}
                      className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                      repeat={Infinity}
                    />
                  )}
                  <p className="text-muted-foreground">{box.description}</p>
                </div>
              </FramedBox>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="work" className="py-24" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left uppercase tracking-wider">What I Do</h2>
          <img 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-while-sitting-on-chair-7088924-5777478.png"
            alt="Character working at a desk"
            className="w-full max-w-md animate-float"
          />
        </div>
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          onMouseLeave={() => setHoveredBox(null)}
        >
          {renderBoxColumn(col1Boxes)}
          {renderBoxColumn(col2Boxes)}
        </div>
      </div>
    </section>
  );
};
export default WhatIDo;
