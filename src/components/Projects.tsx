import { useLanguage } from "@/context/useLanguage";
import { ExternalLink, Palette, Clock, Layout } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "projects.uiux.title",
      description: "projects.uiux.description",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      icon: <Layout className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "projects.gradient.title",
      description: "projects.gradient.description",
      image:
        "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop",
      icon: <Palette className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "projects.chess.title",
      description: "projects.chess.description",
      image:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=2071&auto=format&fit=crop",
      icon: <Clock className="h-10 w-10 text-green-500" />,
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              icon={project.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
