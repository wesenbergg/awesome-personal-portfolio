import { useState } from "react";
import { useLanguage } from "@/context/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal, Mail, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export function Contact() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: t("contact.success"),
        description: t("contact.successMessage"),
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            {t("contact.title") || "Get in Touch"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle") ||
              "Have a question or want to work together? Drop me a line!"}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="glass-morphism rounded-2xl p-8 shadow-lg animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2 text-primary/80" />
                  {t("contact.emailLabel") || "Your Email"}
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder={
                      t("contact.emailPlaceholder") || "name@example.com"
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl pl-4 pr-12 py-6 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/50 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 animate-pulse" />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    t("contact.sending") || "Sending..."
                  ) : (
                    <>
                      {t("contact.send") || "Send Message"}
                      <SendHorizontal className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {t("contact.privacy") ||
                "I'll never share your email with anyone else."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
