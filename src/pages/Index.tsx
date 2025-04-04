import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, ArrowDown, Code, Layout, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const Index = () => {
  // Featured projects (to be shown on the homepage)
  const featuredProjects = [
    {
      id: "project-1",
      title: "Manager in Cooperative",
      description:
        "Worked to manage and maintain all financial records of the cooperative.",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "project-2",
      title: "Social Mobilizer",
      description:
        "Acted as social mobilizer during post earthquake reconstruction.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1770&auto=format&fit=crop",
    },
    {
      id: "project-3",
      title: "Teacher",
      description:
        "Taught students in a local school and helped them to learn new things.",
      tags: ["React Native", "Redux", "Firebase"],
      imageUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section fullHeight className="flex items-center relative">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-3">
              <span className="chip">Freelance Writer</span>
            </div>
            <h1 className="heading-1 mb-6">
              Freelance Writer | Turning Ideas into Impactful Stories.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              I write poems that feel like quiet conversations with the soul.
            </p>
            <div className="flex gap-4">
              <Button asChild className="px-6">
                {/* <Link to="/work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link> */}
              </Button>
              <Button asChild variant="outline" className="px-6">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float"></div>
              <img
                src="/1742919143541.jpg"
                alt="Developer"
                className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-secondary">
        <SectionTitle title="What I Do" subtitle="Services" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layout className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Poetic Writing
            </h3>
            <p className="text-muted-foreground">
              Penning soulful verses and poetic stories that linger in the heart
              long after the last word.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Finance Manager
            </h3>
            <p className="text-muted-foreground">
              Transforming numbers into strategy—driving growth with precision
              and insight.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover-subtle">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">
              Social Influencer
            </h3>
            <p className="text-muted-foreground">
              Turning trends into trust—one authentic post at a time.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <SectionTitle title="My Recent Work" subtitle="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              featured={project.featured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="px-8">
            {/* <Link to="/work">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link> */}
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">
            Ready to get to any new adventures?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's work together to bring your ideas to life. I'm currently
            available for freelance writings and cooperations.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Index;
