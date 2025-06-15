
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 bg-primary/20" />
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-16 animate-enter">
              <div className="absolute w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center top-1 left-4 md:left-6 -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <Card className="border-primary/20 hover:border-primary/60 transition-colors duration-300 shadow-lg shadow-primary/5 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <CardTitle className="text-xl text-primary-foreground">{item.role}</CardTitle>
                      <CardDescription className="text-primary pt-1 font-semibold">{item.company}</CardDescription>
                    </div>
                    <div className="text-lg font-bold text-muted-foreground whitespace-nowrap">{item.year}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
