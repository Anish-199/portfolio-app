import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import PageLayout from "@/components/PageLayout";
import SkillCard from "@/components/SkillCard";
import {
  Code,
  Layout,
  Database,
  Smartphone,
  Server,
  Puzzle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "React", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "SQL/NoSQL", value: 75 },
    { name: "UI/UX Design", value: 70 },
    { name: "Testing", value: 65 },
  ];

  return (
    <PageLayout>
      <Section>
        <SectionTitle title="My Skills & Expertise" subtitle="What I Do" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title="Poetry"
            icon={<Layout className="h-8 w-8" />}
            description="Poetry and writing free poems that feel like quiet conversations with the soul."
          />

          <SkillCard
            title="Conversation Skill"
            icon={<Server className="h-8 w-8" />}
            description="Engaged in conversation and communication with any mates."
          />

          <SkillCard
            title="Teaching"
            icon={<Database className="h-8 w-8" />}
            description="Have quite good experience in teaching and learning new things."
          />
        </div>
      </Section>

      {/* Technologies Section */}
      {/* <Section className="bg-secondary">
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
      </Section> */}

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
              Understanding requirements and criterias of the work through
              research and planning.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">2</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Enhance Plans
            </h3>
            <p className="text-muted-foreground">
              Creating prototypes to visualize the ideas.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">3</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Implementation
            </h3>
            <p className="text-muted-foreground">
              Executing the plans based on the requirements.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">4</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Delivery</h3>
            <p className="text-muted-foreground">
              Providing a user friendly and quite a good outcome either it be a
              service or any solutions.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Skills;
