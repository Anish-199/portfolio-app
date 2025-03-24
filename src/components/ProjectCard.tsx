
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  imageUrl,
  featured = false,
}) => {
  return (
    <div 
      className={cn(
        'group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover-subtle',
        featured && 'md:col-span-2'
      )}
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="chip text-xs">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link 
          to={`/work/${id}`} 
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
