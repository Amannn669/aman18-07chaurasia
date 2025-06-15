
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/20 h-full flex flex-col group overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <CardTitle>{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
            <Button variant="outline" className="w-full">
              View Project <ArrowUpRight />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
