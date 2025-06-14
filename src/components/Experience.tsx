
import React from 'react';

const experienceData = [
  {
    role: 'Senior web developer',
    company: 'Blue Cube Digital',
    year: '2017',
    description: 'Developed and managed web projects, including frontend/backend, CMS dashboards, and responsive, accessible web pages with PHP, MySQL, and JavaScript.',
  },
  {
    role: 'Associate Solution Leader',
    company: 'Brane Enterprises',
    year: '2020',
    description: 'Built web features, product prototypes, and reusable components/microservices, implemented UI improvements and 3D UI interface compatible with Typescript.',
  },
  {
    role: 'Freelance & Upskilling',
    company: 'Freelance',
    year: 'NOW',
    description: 'During this period, I worked as a freelancer for various clients, providing 3D and web services, while actively upskilling also in multiple areas increasing my Techstack.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
        My career & experience
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute w-px h-full bg-primary/20 top-0 left-1/2 -translate-x-1/2 hidden md:block" />
        <div className="space-y-16">
          {experienceData.map((item, index) => (
            <div key={index} className="relative">
              <div className="md:flex items-start">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-background border-2 border-primary absolute left-1/2 top-0 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="md:w-5/12 md:pl-8 mt-12 md:mt-0 text-center md:text-left">
                  <p className="font-black text-3xl text-muted-foreground mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
