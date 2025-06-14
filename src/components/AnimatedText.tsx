
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Creative DEVELOPER',
        1500,
        'A Creative DESIGNER',
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
