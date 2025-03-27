import { useLanguage } from "@/context/useLanguage";
import { Button } from "@/components/ui/button";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fi" : "en"));
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full bg-background/50 backdrop-blur-sm transition-transform hover:scale-110 px-3"
    >
      <span className="text-sm font-medium">
        {language === "en" ? "FI" : "EN"}
      </span>
    </Button>
  );
}
