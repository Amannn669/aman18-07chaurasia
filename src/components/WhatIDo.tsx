
import React, { useState, useEffect, useRef } from 'react';
import FramedBox from './FramedBox';
import { TypeAnimation } from 'react-type-animation';

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

  return (
    <section id="work" className="py-24" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left uppercase tracking-wider">What I Do</h2>
          <img 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-while-sitting-on-chair-7088924-5777478.png"
            alt="Character working at a desk"
            className="w-full max-w-md animate-float"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FramedBox title="Full Stack">
            <div className="flex flex-col gap-4">
              {isVisible && (
                <TypeAnimation
                  sequence={[
                    '// Building from scratch...', 1500,
                    'const frontend = createReactApp();', 1000,
                    'const backend = setupNodeServer();', 1000,
                    'connect(frontend, backend);', 2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                  repeat={Infinity}
                />
              )}
              <p className="text-muted-foreground min-h-[5.5rem]">
                Crafting seamless experiences from database to UI, I build robust and scalable full-stack applications.
              </p>
            </div>
          </FramedBox>
          <FramedBox title="Generative AI">
             <div className="flex flex-col gap-4">
                {isVisible && (
                  <TypeAnimation
                    sequence={[
                      '// Tapping into creative AI...', 1500,
                      'import { LLM } from "ai-models";', 1000,
                      'const model = new LLM("gpt-4");', 1000,
                      'model.generate("new ideas ✨");', 2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                    repeat={Infinity}
                  />
                )}
                <p className="text-muted-foreground min-h-[5.5rem]">
                  Developing innovative applications that leverage the power of generative models to create, reason, and assist.
                </p>
            </div>
          </FramedBox>
          <FramedBox title="Machine Learning">
            <div className="flex flex-col gap-4">
              {isVisible && (
                <TypeAnimation
                  sequence={[
                    '// Uncovering data insights...', 1500,
                    'import { train } from "ml-library";', 1000,
                    'const model = train(trainingData);', 1000,
                    'const predictions = model.predict(newData);', 2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                  repeat={Infinity}
                />
              )}
              <p className="text-muted-foreground min-h-[5.5rem]">
                From data analysis to predictive modeling, I build intelligent systems that learn from data and drive decisions.
              </p>
            </div>
          </FramedBox>
          <FramedBox title="AI Workflow">
             <div className="flex flex-col gap-4">
                {isVisible && (
                  <TypeAnimation
                    sequence={[
                      '// Automating with intelligence...', 1500,
                      'const workflow = createAIAgent();', 1000,
                      'workflow.integrate(["OpenAI", "Zapier"]);', 1000,
                      'workflow.run();', 2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                    repeat={Infinity}
                  />
                )}
                <p className="text-muted-foreground min-h-[5.5rem]">
                  Expert in integrating cutting-edge AI tools into business workflows to boost productivity and unlock new capabilities.
                </p>
            </div>
          </FramedBox>
        </div>
      </div>
    </section>
  );
};
export default WhatIDo;

