import { ReactNode } from "react";
import { useCardTilt } from "@/hooks/useCardTilt";
import { useLanguage } from "@/context/useLanguage";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import "@/styles/card-effects.css";
import { useIsMobile } from "@/hooks/use-mobile";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  index: number;
  link: string;
};

export function ProjectCard({
  title,
  description,
  image,
  icon,
  index,
  link,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  // Use our custom tilt hook with some options
  const tiltBindings = useCardTilt(
    isMobile
      ? {
          max: 0,
          scale: 1,
          speed: 0,
          perspective: 1000,
        }
      : {
          max: 15,
          scale: 1.05,
          speed: 450,
          perspective: 1200,
        }
  );

  return (
    <div
      {...tiltBindings}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all hover:shadow-xl animate-fade-in card-3d"
      style={{
        ...tiltBindings.style,
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="backdrop-blur-sm absolute inset-0"></div>

      {/* 3D Shadow Effect */}
      <div className="card-3d-shadow"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 z-10"></div>

      {/* Background image */}
      <img
        src={image}
        alt={t(title)}
        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
      />

      {/* Light reflection effect */}
      <div className="card-shine"></div>

      {/* Icon */}
      <div className="mix-blend-luminosity absolute top-4 left-4 bg-background/90 backdrop-blur-md p-3 rounded-xl z-20 z-depth-40">
        {icon}
      </div>

      {/* Content */}
      <a
        href={link}
        className="mix-blend-luminosity absolute bottom-0 left-0 right-0 p-6 z-20 card-3d-content"
      >
        <h3 className="text-xl font-bold text-white mb-2 z-depth-30">
          {t(title)}
        </h3>
        <p className="text-white/80 mb-4 z-depth-20 h-[2em] text-ellipsis">
          {t(description)}
        </p>
        <Button variant="secondary" size="sm" className="gap-1.5 z-depth-50">
          {t("projects.view")}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
