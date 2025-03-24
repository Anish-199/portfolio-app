
import React from 'react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import PageLayout from '@/components/PageLayout';
import SkillCard from '@/components/SkillCard';
import { 
  Code, 
  Layout, 
  Database, 
  Smartphone, 
  Server, 
  Puzzle
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', value: 95 },
    { name: 'JavaScript', value: 90 },
    { name: 'TypeScript', value: 85 },
    { name: 'React', value: 90 },
    { name: 'Node.js', value: 80 },
    { name: 'SQL/NoSQL', value: 75 },
    { name: 'UI/UX Design', value: 70 },
    { name: 'Testing', value: 65 },
  ];
  
  return (
    <PageLayout>
      <Section>
        <SectionTitle 
          title="My Skills & Expertise" 
          subtitle="What I Do" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend Development"
            icon={<Layout className="h-8 w-8" />}
            description="Creating responsive, intuitive user interfaces using modern frameworks and tools like React, Vue.js, and Tailwind CSS."
          />
          
          <SkillCard 
            title="Backend Development"
            icon={<Server className="h-8 w-8" />}
            description="Building robust server-side applications with Node.js, Express, and various database technologies."
          />
          
          <SkillCard 
            title="Database Design"
            icon={<Database className="h-8 w-8" />}
            description="Designing efficient database schemas and implementing data models for both SQL and NoSQL databases."
          />
          
          <SkillCard 
            title="Mobile Development"
            icon={<Smartphone className="h-8 w-8" />}
            description="Creating cross-platform mobile applications using React Native and Flutter with native-like performance."
          />
          
          <SkillCard 
            title="API Integration"
            icon={<Puzzle className="h-8 w-8" />}
            description="Integrating third-party APIs and services to extend application functionality and features."
          />
          
          <SkillCard 
            title="Clean Code"
            icon={<Code className="h-8 w-8" />}
            description="Writing maintainable, efficient, and well-documented code following industry best practices."
          />
        </div>
      </Section>

      {/* Technologies Section */}
      <Section className="bg-secondary">
        <SectionTitle 
          title="Technical Proficiency" 
          subtitle="Technologies" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Tools & Frameworks
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '𝕋𝕊' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Vue.js', icon: '🟩' },
                { name: 'Angular', icon: '🅰️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Firebase', icon: '🔥' },
                { name: 'Redux', icon: '🔄' },
                { name: 'GraphQL', icon: '⬢' },
                { name: 'Docker', icon: '🐳' },
                { name: 'AWS', icon: '☁️' },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 rounded-lg bg-white shadow-sm">
                  <span className="mr-2">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Development Process */}
      <Section>
        <SectionTitle 
          title="My Development Process" 
          subtitle="Workflow" 
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">1</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Discovery</h3>
            <p className="text-muted-foreground">
              Understanding requirements and project goals through research and planning.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">2</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Design</h3>
            <p className="text-muted-foreground">
              Creating wireframes and prototypes to visualize the solution.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">3</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Development</h3>
            <p className="text-muted-foreground">
              Building the application with clean, efficient code and best practices.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">4</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Delivery</h3>
            <p className="text-muted-foreground">
              Testing, deployment, and ongoing support for the finished product.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Skills;
