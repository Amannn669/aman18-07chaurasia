
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        'DESIGNER',
        1500,
        'DEVELOPER',
        1500,
        'GEN AI ENTHUSIAST',
        1500,
        'AI/ML ENTHUSIAST',
        1500,
        'PROUD CITIZEN',
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
