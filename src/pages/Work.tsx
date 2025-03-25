// import React, { useState } from "react";
// import Section from "@/components/Section";
// import SectionTitle from "@/components/SectionTitle";
// import PageLayout from "@/components/PageLayout";
// import ProjectCard from "@/components/ProjectCard";

// const Work = () => {
//   const allProjects = [
//     {
//       id: "project-1",
//       title: "E-commerce Platform",
//       description:
//         "A fully responsive e-commerce platform with advanced filtering capabilities.",
//       tags: ["React", "Node.js", "MongoDB"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop",
//       category: "web",
//       featured: true,
//     },
//     {
//       id: "project-2",
//       title: "Portfolio Website",
//       description:
//         "A minimalist portfolio website with smooth animations and interactions.",
//       tags: ["React", "Tailwind CSS", "Framer Motion"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1770&auto=format&fit=crop",
//       category: "web",
//     },
//     {
//       id: "project-3",
//       title: "Mobile Banking App",
//       description:
//         "A mobile banking application with intuitive UI and secure authentication.",
//       tags: ["React Native", "Redux", "Firebase"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop",
//       category: "mobile",
//     },
//     {
//       id: "project-4",
//       title: "Task Management Tool",
//       description:
//         "A productivity app for managing tasks, projects, and team collaboration.",
//       tags: ["Vue.js", "Express", "PostgreSQL"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop",
//       category: "web",
//     },
//     {
//       id: "project-5",
//       title: "Health & Fitness Tracker",
//       description:
//         "A cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
//       tags: ["Flutter", "Firebase", "Health API"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1771&auto=format&fit=crop",
//       category: "mobile",
//     },
//     {
//       id: "project-6",
//       title: "Restaurant Booking System",
//       description:
//         "A reservation system for restaurants with real-time availability updates.",
//       tags: ["React", "Node.js", "MongoDB"],
//       imageUrl:
//         "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1772&auto=format&fit=crop",
//       category: "web",
//     },
//   ];

//   const [filter, setFilter] = useState("all");

//   const filteredProjects =
//     filter === "all"
//       ? allProjects
//       : allProjects.filter((project) => project.category === filter);

//   return (
//     <PageLayout>
//       <Section>
//         <SectionTitle title="My Projects" subtitle="Portfolio" />

//         <div className="flex justify-center mb-12">
//           <div className="inline-flex p-1 rounded-lg bg-secondary">
//             <button
//               onClick={() => setFilter("all")}
//               className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
//                 filter === "all"
//                   ? "bg-white text-foreground shadow-sm"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               All Projects
//             </button>
//             <button
//               onClick={() => setFilter("web")}
//               className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
//                 filter === "web"
//                   ? "bg-white text-foreground shadow-sm"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               Web Apps
//             </button>
//             <button
//               onClick={() => setFilter("mobile")}
//               className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
//                 filter === "mobile"
//                   ? "bg-white text-foreground shadow-sm"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               Mobile Apps
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredProjects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               id={project.id}
//               title={project.title}
//               description={project.description}
//               tags={project.tags}
//               imageUrl={project.imageUrl}
//               featured={project.featured}
//             />
//           ))}
//         </div>
//       </Section>
//     </PageLayout>
//   );
// };

// export default Work;
