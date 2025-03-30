import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/context/useLanguage";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItemsRef = useRef<Record<string, HTMLElement | null>>({});
  const indicatorRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const sectionIds = navLinks.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth animation for the pill indicator
  useEffect(() => {
    if (
      !indicatorRef.current ||
      !activeSection ||
      !navItemsRef.current[activeSection]
    )
      return;

    const activeElement = navItemsRef.current[activeSection];
    const indicatorElement = indicatorRef.current;

    if (activeElement) {
      indicatorElement.style.left = `${activeElement.offsetLeft}px`;
      indicatorElement.style.width = `${activeElement.offsetWidth}px`;
      indicatorElement.style.opacity = "1";
    } else {
      indicatorElement.style.opacity = "0";
    }
  }, [activeSection]);

  // Handle smooth scrolling for navigation links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close mobile menu if open
      if (mobileMenuOpen) setMobileMenuOpen(false);

      // Smooth scroll to target
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the fixed navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
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
          <div className="hidden md:flex items-center space-x-1 relative py-1">
            <div
              ref={indicatorRef}
              className="nav-indicator h-8 slide-transition"
              style={{
                left: navItemsRef.current[activeSection]?.offsetLeft ?? 0,
                width: navItemsRef.current[activeSection]?.offsetWidth ?? 0,
              }}
            />
            <ul className="flex space-x-1">
              {navLinks.map((link, index) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      ref={(el) => (navItemsRef.current[sectionId] = el)}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border border-transparent hover:border-border/50 backdrop-blur-sm block ${
                        isActive
                          ? "text-primary font-semibold"
                          : "hover:bg-background/80 hover:shadow-sm"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
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
              <ul className="flex flex-col space-y-1 relative">
                <div
                  className="nav-indicator left-0 w-full slide-transition rounded-lg"
                  style={{
                    top:
                      navLinks.findIndex(
                        (link) => link.href.substring(1) === activeSection
                      ) *
                        48 +
                      8,
                    opacity: activeSection ? 1 : 0,
                    height: activeSection ? "36px" : "0px",
                    position: "absolute",
                    transform: "translateY(0)",
                    zIndex: -1,
                  }}
                />
                {navLinks.map((link, index) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <li
                      key={link.href}
                      className="animate-slide-up relative"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-primary font-semibold"
                            : "hover:bg-background/80"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
