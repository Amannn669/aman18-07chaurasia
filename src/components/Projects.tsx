
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard, { Project } from './ProjectCard';
import ShuffleText from './ShuffleText';

const projects: Project[] = [
  {
    title: 'Showcase Website',
    description: 'A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    link: '#',
  },
  {
    title: 'Interactive Dashboard',
    description: 'A data visualization dashboard using modern web technologies to present complex data.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop',
    tags: ['Next.js', 'Recharts', 'Shadcn UI'],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with features like product catalog, cart, and checkout.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    link: '#',
  },
    {
    title: 'Content Management System',
    description: 'A CMS for blogs, allowing users to create, edit, and manage their posts seamlessly.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Tiptap Editor'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary uppercase tracking-wider">
          <ShuffleText>PROJECTS</ShuffleText>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills and passion for creating cool things.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <ProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
