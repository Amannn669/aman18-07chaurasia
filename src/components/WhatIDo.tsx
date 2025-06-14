
import React, { useState, useEffect, useRef } from 'react';
import FramedBox from './FramedBox';
import { TypeAnimation } from 'react-type-animation';
import DesignAnimation from './DesignAnimation';

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
        <div className="space-y-8">
          <FramedBox title="Develop">
            <div className="flex flex-col gap-4">
              {isVisible && (
                <TypeAnimation
                  sequence={[
                    '// From JavaScript & PHP...',
                    1500,
                    'const portfolio = createAwesomeSite();',
                    1000,
                    'portfolio.use(React, TypeScript, Node);',
                    1000,
                    'portfolio.add("a little bit of magic ✨");',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-muted-foreground font-mono whitespace-pre-wrap h-24"
                  repeat={Infinity}
                />
              )}
              <p className="text-muted-foreground">
                Started building websites with JavaScript and PHP, now I craft them with TypeScript, React, Express, Node,... and a little bit of magic!
              </p>
            </div>
          </FramedBox>
          <FramedBox title="Design">
             <div className="flex flex-col gap-4">
                {isVisible && <DesignAnimation />}
                <p className="text-muted-foreground">
                  I started designing as my hobby, but like all good hobbies, it slowly crept into my career—how it won't leave me alone!
                </p>
            </div>
          </FramedBox>
        </div>
      </div>
    </section>
  );
};
export default WhatIDo;
