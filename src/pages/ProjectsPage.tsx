
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ShuffleText from '@/components/ShuffleText';

const projects = [
  {
    title: "Project One",
    description: "A very cool project that does amazing things. It's built with React, Tailwind and a lot of love.",
    imageUrl: "/lovable-uploads/cf70903c-c3f1-4ff3-b60a-5720a4884869.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Two",
    description: "Another fantastic project. This one is more about data visualization and less about user interaction.",
    imageUrl: "/lovable-uploads/1b181969-6307-4383-906a-255cf48a8049.png",
    tags: ["D3.js", "JavaScript", "SASS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Three",
    description: "The third project in the list. Focused on backend development with Node.js and Express.",
    imageUrl: "/lovable-uploads/6059cde6-2c36-495a-8ffe-be094c43dd1d.png",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "#",
  },
    {
    title: "Project Four",
    description: "A mobile application built with React Native. It's available on both iOS and Android.",
    imageUrl: "/lovable-uploads/37d517ff-c808-4bcd-8ce6-4f6f701d360f.png",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
  },
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="container mx-auto px-8 sm:px-12 lg:px-16 py-24 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary uppercase tracking-wider pt-12">
        <ShuffleText>PROJECTS</ShuffleText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
