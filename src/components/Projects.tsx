import { useLanguage } from "@/context/useLanguage";
import { Palette, Clock, Layout, Library } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { useState, useEffect, useRef } from "react";

export function Projects() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth * 0.85; // Based on min-w-[85%]
      const newActiveIndex = Math.round(scrollPosition / itemWidth);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  const scrollToProject = (index: number) => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "projects.uiux.title",
      description: "projects.uiux.description",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      icon: <Layout className="h-10 w-10 text-blue-500" />,
      link: "https://www.uiux.fi",
    },
    {
      title: "projects.gradient.title",
      description: "projects.gradient.description",
      image:
        "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop",
      icon: <Palette className="h-10 w-10 text-purple-500" />,
      link: "https://gradiendo.uiux.fi",
    },
    {
      title: "projects.chess.title",
      description: "projects.chess.description",
      image:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=2071&auto=format&fit=crop",
      icon: <Clock className="h-10 w-10 text-green-500" />,
      link: "https://chess.uiux.fi",
    },
    {
      title: "projects.utility.title",
      description: "projects.utility.description",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop",
      icon: <Library className="h-10 w-10 text-amber-500" />,
      link: "https://util.uiux.fi",
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              icon={project.icon}
              link={project.link}
              index={index}
            />
          ))}
        </div>

        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="overflow-x-auto pb-6 -mx-4 px-4 flex gap-4 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                id={`project-${index}`}
                className="snap-start min-w-[85%] flex-shrink-0"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  icon={project.icon}
                  link={project.link}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Ball indicators for mobile */}
          <div className="flex justify-center gap-2 mt-4 mb-6">
            {projects.map((_, index) => (
              <a
                key={`indicator-${index}`}
                href={`#project-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProject(index);
                  setActiveIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-gray-400/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
