
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  description,
  className,
}) => {
  return (
    <div className={cn(
      'group p-6 rounded-lg bg-card hover:bg-white transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-xl hover-subtle',
      className
    )}>
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SkillCard;
