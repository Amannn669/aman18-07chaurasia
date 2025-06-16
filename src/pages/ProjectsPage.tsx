
import React from 'react';
import Header from '@/components/Header';
import ShuffleText from '@/components/ShuffleText';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project Neonoir',
    description: 'A detective RPG set in a rain-drenched, neon-lit metropolis of 2077, built with advanced storytelling AI.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'CypherDeck OS',
    description: 'A custom terminal-based OS for netrunners, focusing on security and network infiltration simulations.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Synthwave Rider',
    description: 'An endless runner game with a retro-futuristic aesthetic, featuring a high-speed light cycle on a digital highway.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Chrome Augmentations',
    description: 'An interactive WebGL showcase of fictional cybernetic enhancements and body modifications.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Data Haven',
    description: 'A decentralized, encrypted file storage system using blockchain to resist corporate surveillance.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Glitchscape',
    description: 'A generative art project that creates dynamic, cyberpunk cityscapes from random data streams.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Holo-Communicator',
    description: 'A proof-of-concept AR app that projects holographic video calls into the user\'s environment.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Replicant Dreams',
    description: 'An AI-powered storytelling engine that generates unique narratives about androids questioning their existence.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Zero-G Smuggler',
    description: 'A physics-based space trading game where you navigate asteroid fields to deliver illicit cargo.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: 'Aetherium Grid',
    description: 'A data visualization tool mapping the flow of information across a fictional global network.',
    link: '#',
    image: '/placeholder.svg'
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-12 text-center">
            <ShuffleText>PROJECTS</ShuffleText>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
