
import React from 'react';
import Header from '@/components/Header';
import ShuffleText from '@/components/ShuffleText';
import ProjectCard from '@/components/ProjectCard';

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
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
