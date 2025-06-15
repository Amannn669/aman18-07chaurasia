
import React, { useState, useEffect, useRef } from 'react';
import FramedBox from './FramedBox';
import { TypeAnimation } from 'react-type-animation';
import { Accordion } from '@/components/ui/accordion';
// We are removing ShuffleText from here.

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
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wider text-foreground">
          WHAT I <span className="text-primary">DO</span>
        </h2>
        <Accordion type="single" collapsible className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FramedBox title="Full Stack" value="item-1">
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
              <p className="text-muted-foreground">
                Crafting seamless experiences from database to UI, I build robust and scalable full-stack applications.
              </p>
            </div>
          </FramedBox>
          <FramedBox title="Generative AI" value="item-2">
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
                <p className="text-muted-foreground">
                  Developing innovative applications that leverage the power of generative models to create, reason, and assist.
                </p>
            </div>
          </FramedBox>
          <FramedBox title="Machine Learning" value="item-3">
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
              <p className="text-muted-foreground">
                From data analysis to predictive modeling, I build intelligent systems that learn from data and drive decisions.
              </p>
            </div>
          </FramedBox>
          <FramedBox title="AI Workflow" value="item-4">
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
                <p className="text-muted-foreground">
                  Expert in integrating cutting-edge AI tools into business workflows to boost productivity and unlock new capabilities.
                </p>
            </div>
          </FramedBox>
        </Accordion>
      </div>
    </section>
  );
};
export default WhatIDo;
