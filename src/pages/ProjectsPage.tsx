
import React from 'react';
import Header from '@/components/Header';
import ShuffleText from '@/components/ShuffleText';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project. It showcases my skills in X, Y, and Z.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project. It highlights my ability to do A, B, and C.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project. This was a challenging but rewarding experience.',
    link: '#',
    image: '/placeholder.svg'
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            <ShuffleText>PROJECTS</ShuffleText>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-secondary/10 border border-border/20 rounded-lg p-6 flex flex-col group hover:border-primary/50 transition-all duration-300">
                    <div className="aspect-video bg-secondary/20 rounded-md mb-4 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline self-start">
                        View Project &rarr;
                    </a>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
