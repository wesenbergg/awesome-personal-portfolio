import { useLanguage } from "@/context/useLanguage";
import { Palette, Clock, Layout } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useRef } from "react";
import { useCircularCursor } from "@/hooks/useCircularCursor";

export function Projects() {
  const { t } = useLanguage();
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Initialize the circular cursor for the projects section with more visible options
  useCircularCursor("#projects", {
    size: 28,
    color: "rgba(128, 128, 128, 0.7)",
    opacity: 1,
    transitionDuration: 80,
    mixBlendMode: "normal",
    hoverScale: 1.5,
    zIndex: 9999,
  });

  // Implement a simpler direct DOM cursor as a fallback
  useEffect(() => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.style.cursor = "none";
      projectsSection.classList.add("cursor-none");

      // Create a simple cursor element
      const cursor = document.createElement("div");
      cursor.style.position = "fixed";
      cursor.style.width = "28px";
      cursor.style.height = "28px";
      cursor.style.borderRadius = "50%";
      cursor.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
      cursor.style.opacity = "0.8";
      cursor.style.pointerEvents = "none";
      cursor.style.zIndex = "9999";
      cursor.style.transform = "translate(-50%, -50%)";
      cursor.style.transition = "transform 0.1s ease";
      cursor.style.border = "2px solid white";
      cursor.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

      document.body.appendChild(cursor);
      cursorRef.current = cursor;

      // Track mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          const { clientX, clientY } = e;

          // Check if in projects section
          const rect = projectsSection.getBoundingClientRect();
          const isInSection =
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom;

          cursorRef.current.style.opacity = isInSection ? "0.8" : "0";
          cursorRef.current.style.left = `${clientX}px`;
          cursorRef.current.style.top = `${clientY}px`;

          // Add slight scale effect when moving
          cursorRef.current.style.transform = `translate(-50%, -50%) scale(${
            isInSection ? 1 : 0
          })`;
        }
      };

      // Add click effect
      const handleMouseDown = () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform =
            "translate(-50%, -50%) scale(0.8)";
          cursorRef.current.style.backgroundColor = "rgba(160, 160, 160, 0.8)";
        }
      };

      const handleMouseUp = () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
          cursorRef.current.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
        }
      };

      // Add event listeners
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      // Cleanup
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        if (cursorRef.current) {
          document.body.removeChild(cursorRef.current);
          cursorRef.current = null;
        }
        if (projectsSection) {
          projectsSection.style.cursor = "auto";
          projectsSection.classList.remove("cursor-none");
        }
      };
    }
  }, []);

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
    <section id="projects" className="cursor-none" style={{ cursor: "none" }}>
      <div className="section-container">
        <div className="text-left mb-12">
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
