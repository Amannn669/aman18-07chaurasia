
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  {
    title: 'Another Great Project',
    description: 'A full-stack e-commerce site with features like product catalog, cart, and checkout.',
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop',
    tags: ['Vue.js', 'Express', 'MongoDB'],
    link: '#',
  },
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });
  
  const [scrollableWidth, setScrollableWidth] = useState(0);

  useEffect(() => {
    const calculateWidths = () => {
      if (carouselRef.current) {
        const parent = carouselRef.current.parentElement;
        const parentWidth = parent ? parent.offsetWidth : 0;
        const scrollWidth = carouselRef.current.scrollWidth;
        const newScrollableWidth = scrollWidth - parentWidth;
        setScrollableWidth(newScrollableWidth > 0 ? newScrollableWidth : 0);
      }
    };
    
    calculateWidths();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateWidths, 100);
    };

    window.addEventListener('resize', handleResize);

    const mutationObserver = new MutationObserver(calculateWidths);
    if(carouselRef.current) {
        mutationObserver.observe(carouselRef.current, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      mutationObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollableWidth]);
  
  const height = scrollableWidth > 0 ? `${scrollableWidth + window.innerHeight}px` : 'auto';

  return (
    <section id="projects" ref={targetRef} className="relative" style={{ height }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16 h-full flex flex-col justify-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary uppercase tracking-wider">
              <ShuffleText>PROJECTS</ShuffleText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills and passion for creating cool things.
            </p>
          </div>
          
          <div className="relative">
            <motion.div ref={carouselRef} style={{ x }} className="flex gap-8">
              {projects.map((project, index) => (
                <div key={index} className="w-[80vw] md:w-[45vw] lg:w-[30vw] xl:w-[23vw] shrink-0">
                  <div className="h-full">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
