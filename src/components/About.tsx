import { useLanguage } from "@/context/useLanguage";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const facts = [
    {
      key: "about.fact1",
      icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />,
    },
    {
      key: "about.fact2",
      icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />,
    },
    {
      key: "about.fact3",
      icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />,
    },
  ];

  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg">{t("about.description")}</p>

            <div className="space-y-4 mt-6">
              {facts.map((fact, index) => (
                <div
                  key={fact.key}
                  className="flex items-start py-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {fact.icon}
                  <p>{t(fact.key)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden relative backdrop-blur-sm border border-border/50 shadow-xl animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <img
                src="/images/setup.webp"
                alt="About Boriss"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
