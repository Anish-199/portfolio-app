
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className 
}) => {
  return (
    <div 
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {subtitle && (
        <div className="inline-block mb-3">
          <span className="chip">{subtitle}</span>
        </div>
      )}
      <h2 className="heading-2 mb-4">{title}</h2>
      <div className={cn(
        'h-1 w-16 bg-primary rounded-full',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )} />
    </div>
  );
};

export default SectionTitle;
