
import React, { useState, useEffect } from 'react';
import { Accordion } from "@/components/ui/accordion";
import FramedBox from './FramedBox';
import ShuffleText from './ShuffleText';

const whatIDoData = [
  {
    title: 'Web Development',
    description: 'I specialize in creating dynamic and responsive websites, focusing on user experience and performance. Using modern technologies like React, I build everything from simple landing pages to complex web applications.'
  },
  {
    title: '3D & Graphics',
    description: 'With a strong background in 3D modeling and graphics, I bring ideas to life with stunning visuals. I am proficient in tools like Blender and can create assets for games, animations, and interactive web experiences.'
  },
  {
    title: 'UI/UX Design',
    description: 'I design intuitive and engaging user interfaces. My process involves understanding user needs to create seamless and enjoyable interactions, ensuring the final product is both beautiful and functional.'
  }
];

const WhatIDo = () => {
  const [accordionValue, setAccordionValue] = useState<string | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const { top } = experienceSection.getBoundingClientRect();
        // When the top of the experience section is well into the viewport, close the accordion
        if (top < window.innerHeight * 0.7 && accordionValue) {
          setAccordionValue(undefined);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [accordionValue]);

  return (
    <section id="what-i-do" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary uppercase tracking-wider">
        <ShuffleText>What I do</ShuffleText>
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-6"
          value={accordionValue}
          onValueChange={setAccordionValue}
        >
          {whatIDoData.map((item, index) => (
            <FramedBox key={index} title={item.title} value={`item-${index + 1}`}>
              {item.description}
            </FramedBox>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WhatIDo;
