
import React from 'react';
import Header from '@/components/Header';
import ShuffleText from '@/components/ShuffleText';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: '🎯 Smart Academic Risk Predictor',
    description: 'Developed a full-stack ML pipeline to predict academic risk with 92% model accuracy. Automated training and deployment with Python-based workflows and Dockerized services on AWS.',
    link: 'https://github.com/aman18Chaurasia/mlproject',
    image: '/placeholder.svg'
  },
  {
    title: '🚀 NASA Data Pipeline Automator',
    description: 'Designed a lightweight data pipeline using Apache Airflow, reducing job runtime by 80%. Configured GitHub Actions for automated ETL deployment with 99.9% operational uptime.',
    link: 'https://github.com/aman18Chaurasia/airflow-nasa-etl-pipeline',
    image: '/placeholder.svg'
  },
  {
    title: '💰 AI-Powered Price Predictor',
    description: 'Developed an end-to-end ML model to predict mobile phone prices with 95% accuracy. Used AWS SageMaker for training and deployment; leveraged S3 for scalable data storage.',
    link: '#',
    image: '/placeholder.svg'
  },
  {
    title: '✨ Lightning-Fast Portfolio',
    description: 'Created a high-performance portfolio using React and TypeScript, achieving 97+ Lighthouse scores. Modern design with responsive layouts and smooth animations.',
    link: 'https://github.com/aman18Chaurasia/Portfolio',
    image: '/placeholder.svg'
  },
  {
    title: '📚 Epic Story Generator',
    description: 'AI-powered story generation application that creates unique origin stories based on text and images. Multiple story variations with creative narrative generation capabilities.',
    link: 'https://github.com/aman18Chaurasia/origi-story-generation',
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
