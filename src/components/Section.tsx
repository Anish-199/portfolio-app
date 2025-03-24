
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children,
  fullHeight = false
}) => {
  return (
    <section 
      id={id}
      className={cn(
        'section-container',
        fullHeight && 'min-h-screen flex flex-col justify-center',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
