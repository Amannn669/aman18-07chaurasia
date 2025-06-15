
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import ShuffleText from './ShuffleText';

const projectsData = [
  {
    title: "Portfolio V1",
    description: "My first personal portfolio website built with React and Tailwind CSS.",
    imageUrl: "/lovable-uploads/087076a8-5514-468b-a1f3-4df00fbfe41a.png",
    link: "#"
  },
  {
    title: "Creative Agency Landing",
    description: "A modern and sleek landing page for a creative agency.",
    imageUrl: "/lovable-uploads/1b181969-6307-4383-906a-255cf48a8049.png",
    link: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "A feature-rich dashboard for managing an online store.",
    imageUrl: "/lovable-uploads/37d517ff-c808-4bcd-8ce6-4f6f701d360f.png",
    link: "#"
  },
  {
    title: "AI Chatbot Interface",
    description: "An intuitive UI for an AI-powered customer service chatbot.",
    imageUrl: "/lovable-uploads/6059cde6-2c36-495a-8ffe-be094c43dd1d.png",
    link: "#"
  },
  {
    title: "Project Epsilon",
    description: "A travel booking platform with integrated maps.",
    imageUrl: "/lovable-uploads/cf70903c-c3f1-4ff3-b60a-5720a4884869.png",
    link: "#"
  }
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-65%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="absolute left-0 top-0 p-8 sm:p-12 lg:p-16 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider">
            <ShuffleText>Featured Work</ShuffleText>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 pl-[5vw] pr-[5vw]">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
