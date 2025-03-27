import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/context/useLanguage";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-lg border-b shadow-sm"
          : "py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold font-display transition-all duration-300 hover:scale-105 hover:text-primary"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Boriss.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium rounded-full hover:bg-background/80 hover:shadow-sm transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <div className="glass-morphism-light px-2 py-1 rounded-full flex items-center space-x-2">
              <LanguageSelector />
              <div className="w-px h-5 bg-border/50"></div>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm hover:bg-background/70 hover:shadow-md transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-slide-down">
            <div className="glass-morphism rounded-xl p-2 shadow-sm">
              <ul className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <a
                      href={link.href}
                      className="block px-4 py-2.5 text-base font-medium rounded-lg hover:bg-background/80 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
