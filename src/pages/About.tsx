
import React from 'react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', value: 90 },
    { name: 'React & React Native', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'UI/UX Design', value: 75 },
    { name: 'Database Management', value: 70 },
  ];
  
  return (
    <PageLayout>
      {/* About Section */}
      <Section>
        <SectionTitle 
          title="About Me" 
          subtitle="My Story" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop" 
              alt="Developer Profile" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              I'm a Full-Stack Developer with a passion for creating exceptional digital experiences
            </h3>
            
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in web development, I specialize in building modern, performant applications that solve real-world problems. My journey began with a deep interest in technology and design, which led me to pursue a career in software development.
            </p>
            
            <p className="text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and creating intuitive user interfaces. My approach combines technical expertise with a deep understanding of user needs to deliver products that exceed expectations.
            </p>
            
            <div className="flex gap-4">
              <Button asChild variant="outline" className="px-6">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-secondary">
        <SectionTitle 
          title="My Experience" 
          subtitle="Work History" 
        />
        
        <div className="space-y-12">
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-px bg-border"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2020 - Present
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Senior Developer</h3>
                <div className="mb-2">
                  <span className="chip text-xs">InnovateTech</span>
                </div>
                <p className="text-muted-foreground">
                  Led frontend development for multiple client projects, implemented best practices, and mentored junior developers. Worked with React, TypeScript, and Node.js to build scalable applications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-px bg-border"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2018 - 2020
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Web Developer</h3>
                <div className="mb-2">
                  <span className="chip text-xs">CreativeStudio</span>
                </div>
                <p className="text-muted-foreground">
                  Developed responsive websites and web applications for clients across various industries. Collaborated with designers to implement pixel-perfect UIs and optimize site performance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2016 - 2018
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Junior Developer</h3>
                <div className="mb-2">
                  <span className="chip text-xs">TechStart</span>
                </div>
                <p className="text-muted-foreground">
                  Assisted in the development of web applications, fixed bugs, and implemented new features. Worked with HTML, CSS, JavaScript, and jQuery to create interactive user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle 
          title="My Skill Set" 
          subtitle="Expertise" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Technical Proficiency
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Other Skills & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Redux', 'GraphQL', 
                'REST API', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 
                'Docker', 'Git', 'Figma', 'Adobe XD', 'Jest', 'CI/CD'
              ].map((item, index) => (
                <span key={index} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-secondary">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="Learning Journey" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2014 - 2018</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground">
              University of Technology
            </p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2020</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Full-Stack Web Development</h3>
            <p className="text-muted-foreground">
              Certified by TechAcademy
            </p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2019</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">UI/UX Design Fundamentals</h3>
            <p className="text-muted-foreground">
              DesignSchool Certification
            </p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2021</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Advanced React & Redux</h3>
            <p className="text-muted-foreground">
              ReactMasters Course
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;
