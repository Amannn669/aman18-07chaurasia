
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  const [isStandout, setIsStandout] = useState(false);

  const defaultClass = "bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500";
  const standoutClass = "text-primary drop-shadow-[0_0_6px_hsl(var(--primary))]";

  return (
    <TypeAnimation
      sequence={[
        () => { setIsStandout(false); },
        'DESIGNER',
        1500,
        'DEVELOPER',
        1500,
        'GEN AI ENTHUSIAST',
        1500,
        'AI/ML ENTHUSIAST',
        1500,
        () => { setIsStandout(true); },
        'A PROUD CITIZEN',
        2500,
      ]}
      wrapper="span"
      speed={50}
      className={isStandout ? standoutClass : defaultClass}
      repeat={Infinity}
      cursor={true}
    />
  );
};

export default AnimatedText;
