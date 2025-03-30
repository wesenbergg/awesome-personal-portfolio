import { useLanguage } from "@/context/useLanguage";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/10 text-sm font-medium">
              <MapPin className="h-3.5 w-3.5 mr-1.5" /> {t("hero.location")}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-muted-foreground text-2xl md:text-3xl font-medium mb-2">
                {t("hero.greeting")}
              </span>
              Boriss
              <span className="block text-muted-foreground text-2xl md:text-3xl font-medium mt-2">
                {t("hero.role")}
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              I made a New Year's resolution for 2025 to code every day. Follow
              my journey as I build products that solve real problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full group">
                <a href="#contact">
                  {t("hero.cta")}
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <a href="#projects">{t("hero.secondary")}</a>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://linkedin.com/in/wesenbergg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/wesenbergg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/wesenbergg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative lg:h-[550px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="absolute inset-0 scale-[0.8] rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-pulse"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse blur-2xl"></div>
              <div className="relative h-full w-full animate-blur-in">
                <img
                  src="/images/profile.webp"
                  alt="Boriss"
                  className="rounded-3xl object-cover w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
