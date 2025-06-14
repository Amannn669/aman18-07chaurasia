
import React from 'react';
import FramedBox from './FramedBox';

const WhatIDo = () => {
  return (
    <section id="work" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left uppercase tracking-wider">What I Do</h2>
          <img 
            src="https://ik.imagekit.io/yohann/my-portfolio/what-i-do-character_zJ2w2dG75.png?updatedAt=1685376043194"
            alt="3D character working on a laptop"
            className="w-full max-w-md animate-float"
          />
        </div>
        <div className="space-y-8">
          <FramedBox title="Develop">
            Started building websites with JavaScript and PHP, now I craft them with TypeScript, React, Express, Node,... and a little bit of magic!
          </FramedBox>
          <FramedBox title="Design">
            I started designing as my hobby, but like all good hobbies, it slowly crept into my career—how it won't leave me alone!
          </FramedBox>
        </div>
      </div>
    </section>
  );
};
export default WhatIDo;
