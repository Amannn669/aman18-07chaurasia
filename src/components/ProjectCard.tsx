
import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="w-[80vw] md:w-[45vw] lg:w-[30vw] h-auto aspect-[4/3] shrink-0 bg-card/30 backdrop-blur-md border-border/20 flex flex-col overflow-hidden group">
      <div className="relative w-full h-2/3 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow justify-between bg-card/50">
        <div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <CardDescription className="text-sm mt-1 text-muted-foreground">{description}</CardDescription>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4">
          <Button variant="outline" className="w-full">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
