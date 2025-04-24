import { useLanguage } from "@/context/useLanguage";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const plans = [
    {
      title: "pricing.starter.title",
      price: "pricing.starter.price",
      description: "pricing.starter.description",
      features: [
        "Single project",
        "Basic support",
        "1 revision round",
        "Delivery in 2 weeks",
      ],
    },
    {
      title: "pricing.optimal.title",
      price: "pricing.optimal.price",
      description: "pricing.optimal.description",
      popular: true,
      features: [
        "Up to 3 projects",
        "Priority support",
        "3 revision rounds",
        "Delivery in 1 week",
        "Source code included",
      ],
    },
    {
      title: "pricing.business.title",
      price: "pricing.business.price",
      description: "pricing.business.description",
      features: [
        "Unlimited projects",
        "24/7 support",
        "Unlimited revisions",
        "Delivery in 3 days",
        "Source code included",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-secondary/50">
      <div className="section-container">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground">{t("pricing.subtitle")}</p>
        </div>

        {/* Mobile Tabs */}
        <div className="flex md:hidden mb-6 overflow-x-auto scrollbar-hide">
          {plans.map((plan, index) => (
            <button
              key={plan.title}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                activeTab === index
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t(plan.title)}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all ${
                plan.popular
                  ? "md:scale-105 md:-translate-y-2 relative z-10 border-primary/50 shadow-lg"
                  : ""
              } animate-scale-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 text-xs font-medium rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{t(plan.title)}</h3>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">{t(plan.price)}</div>
                  <p className="text-muted-foreground">{t(plan.description)}</p>
                </div>

                <ul className="space-y-3 py-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {t("pricing.contact")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scrollable Cards */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className={cn(
                  "w-[280px] bg-card border rounded-2xl overflow-hidden shadow-sm transition-all",
                  activeTab === index ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 text-xs font-medium rounded-bl-lg">
                    Popular
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{t(plan.title)}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{t(plan.price)}</div>
                    <p className="text-muted-foreground">
                      {t(plan.description)}
                    </p>
                  </div>

                  <ul className="space-y-3 py-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {t("pricing.contact")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
