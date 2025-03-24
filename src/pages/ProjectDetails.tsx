
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import Section from '@/components/Section';
import { ArrowLeft, Globe, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch this data from an API or CMS
  // This is just mockup data for demonstration
  const projectsData = {
    'project-1': {
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with advanced filtering capabilities.',
      longDescription: `
        This project is a comprehensive e-commerce solution built with React for the frontend and Node.js for the backend. It features a responsive design, advanced product filtering, user authentication, shopping cart functionality, and payment processing integration.
        
        The platform was designed with scalability in mind, using Redux for state management and MongoDB for the database. The admin dashboard allows easy product management, order tracking, and analytics.
      `,
      tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express', 'Stripe API'],
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1770&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1649577535099-1c2653e89d80?q=80&w=1770&auto=format&fit=crop',
      ],
      liveSite: 'https://example.com',
      githubRepo: 'https://github.com',
      challenges: 'Implementing a secure payment system and optimizing database queries for large product catalogs were the main challenges.',
      solutions: 'Utilized Stripe API with proper security measures and implemented database indexing and query optimization techniques.',
    },
    'project-2': {
      title: 'Portfolio Website',
      description: 'A minimalist portfolio website with smooth animations and interactions.',
      longDescription: `
        This portfolio website showcases a clean, minimalist design with subtle animations and smooth transitions. Built with React and Tailwind CSS, it features responsive layouts, optimized performance, and attention to accessibility.
        
        The site includes custom animations using Framer Motion, a contact form with validation, and a project showcase with filtering capabilities.
      `,
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1770&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1770&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1620928572464-ae6c095e20ba?q=80&w=1771&auto=format&fit=crop',
      ],
      liveSite: 'https://example.com',
      githubRepo: 'https://github.com',
      challenges: 'Creating smooth, responsive animations that work well across all devices was challenging.',
      solutions: 'Used Framer Motion with conditional rendering based on device capabilities and implemented performance optimizations.',
    },
    'project-3': {
      title: 'Mobile Banking App',
      description: 'A mobile banking application with intuitive UI and secure authentication.',
      longDescription: `
        This mobile banking application was built using React Native for cross-platform compatibility. It features secure biometric authentication, real-time transaction updates, budget tracking, and financial insights.
        
        The app integrates with banking APIs for account management and uses Firebase for backend services including authentication and real-time database functions.
      `,
      tags: ['React Native', 'Redux', 'Firebase', 'Financial API'],
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=1770&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580508174046-170816f65662?q=80&w=1770&auto=format&fit=crop',
      ],
      liveSite: 'https://example.com',
      githubRepo: 'https://github.com',
      challenges: 'Implementing secure authentication and ensuring data protection were paramount challenges.',
      solutions: 'Used biometric authentication, encrypted storage, and secure API communication protocols.',
    },
  };
  
  const project = projectsData[id as keyof typeof projectsData];
  
  if (!project) {
    return (
      <PageLayout>
        <Section>
          <div className="text-center">
            <h2 className="heading-2 mb-6">Project Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild variant="outline">
              <Link to="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </Section>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <div className="inline-block mb-3">
              <span className="chip bg-white/20 text-white backdrop-blur-sm">
                Project Case Study
              </span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <Section>
        <div className="flex justify-between items-center mb-12">
          <Button asChild variant="outline">
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="flex gap-4">
            {project.liveSite && (
              <Button asChild variant="outline" size="sm">
                <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            )}
            
            {project.githubRepo && (
              <Button asChild variant="outline" size="sm">
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="heading-2 mb-6">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div>
            <div className="glass p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.liveSite && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Live Site
                    </h4>
                    <a 
                      href={project.liveSite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline"
                    >
                      View Site <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                )}
                
                {project.githubRepo && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Repository
                    </h4>
                    <a 
                      href={project.githubRepo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline"
                    >
                      GitHub <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project Gallery */}
      <Section className="bg-secondary">
        <h2 className="heading-2 mb-8">Project Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm hover-subtle">
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Challenges and Solutions */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-3 mb-6">Challenges</h2>
            <p className="text-muted-foreground">
              {project.challenges}
            </p>
          </div>
          
          <div>
            <h2 className="heading-3 mb-6">Solutions</h2>
            <p className="text-muted-foreground">
              {project.solutions}
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Interested in working together?</h2>
          <p className="text-white/80 mb-8 text-lg">
            I'm always open to discussing new projects or partnership opportunities.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ProjectDetails;
