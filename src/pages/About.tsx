import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "JavaScript/TypeScript", value: 90 },
    { name: "React & React Native", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "UI/UX Design", value: 75 },
    { name: "Database Management", value: 70 },
  ];

  return (
    <PageLayout>
      {/* About Section */}
      <Section>
        <SectionTitle title="About Me" subtitle="My Story" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/1742918617175.jpg"
              alt="Developer Profile"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              I am A Poetic Soul with a Purposeful Journey.
            </h3>

            <p className="text-muted-foreground mb-6">
              Wordsmith | Community Builder | Educator | Eternal Explorer
            </p>

            <p className="text-muted-foreground mb-6">
              With a heart that speaks in verses and a mind wired for
              connection, I craft stories that resonate—both on the page and in
              life’s everyday interactions. My journey has been a tapestry of
              roles: <br />
              ✒️ As a Poetic Writer, I turn emotions into art—whether it’s a
              haunting stanza, a tender prose piece, or words that ignite
              change. Language, to me, is a bridge between souls. <br />
              🤝 As a Cooperative Manager, I thrived on fostering collaboration,
              balancing ledgers with empathy, and empowering communities to grow
              sustainably. (Because numbers tell stories too.)
              <br /> 📚 As a Teacher, I didn’t just share lessons—I sparked
              curiosity, believing that the best classrooms are built on
              dialogue, trust, and a touch of magic.
              <br /> 🌍 As a Traveler & Learner, I collect moments like verses:
              the rhythm of foreign streets, the silence of mountains, and the
              wisdom of strangers. Every place is a stanza; every person, a
              footnote worth remembering.
            </p>

            <div className="flex gap-4">
              <Button asChild variant="outline" className="px-6">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <a
                href="https://x.com/SaugatNazarana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://www.facebook.com/SaugatNazarana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Facebook size={24} />
              </a>

              <a
                href="mailto:saugatkumar10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-subtle text-foreground hover:text-primary"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-secondary">
        <SectionTitle title="My Experience" subtitle="Work History" />

        <div className="space-y-12">
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-px bg-border"></div>

            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2078 - 2081
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Manager in Cooperative
                </h3>
                <div className="mb-2">
                  <span className="chip text-xs">Finance</span>
                </div>
                <p className="text-muted-foreground">
                  Led the cooperative team to achieve a increase in revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-px bg-border"></div>

            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2076-2078
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Social Mobilizer
                </h3>
                <div className="mb-2">
                  <span className="chip text-xs">Reconstruction</span>
                </div>
                <p className="text-muted-foreground">
                  Work as a social mobilizer in the reconstruction of the
                  earthquake affected area.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted-foreground">
                2074-2076
              </div>
              <div className="glass rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Office Assistant
                </h3>
                <div className="mb-2">
                  <span className="chip text-xs">Cooperative</span>
                </div>
                <p className="text-muted-foreground">
                  Worked under the supervidion of manager in the cooperative to
                  enagage in the daily activities and learn financial
                  management.
                </p>
              </div>
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
              <span className="chip text-xs">2066</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Scholl Leaving Certificate(SLC)
            </h3>
            <p className="text-muted-foreground">
              Shree Seti Devi Higher Secondary School
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2069</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Intermediate
            </h3>
            <p className="text-muted-foreground">
              Bal Niketan Higher Secondary School
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2075</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Bachelors in Education
            </h3>
            <p className="text-muted-foreground">Chaitanya Multiple Campus</p>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2080</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Training on Annual and Budget Formulation.
            </h3>
            <p className="text-muted-foreground">KDSU</p>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="mb-2">
              <span className="chip text-xs">2080</span>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Training on Recovery and Daily Quency.
            </h3>
            <p className="text-muted-foreground">KDSU</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;
