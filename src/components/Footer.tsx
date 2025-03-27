
import { useLanguage } from '@/context/useLanguage';
import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display">Boriss.</h3>
            <p className="text-muted-foreground">
              Software Developer based in Berlin, Finland-born with a passion for clean code and beautiful design.
            </p>
            <div className="flex items-center space-x-3">
              <a href="mailto:contact@boriss.dev" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 mr-1.5" />
                contact@boriss.dev
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4 mr-1.5" />
                Berlin, Germany
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">{t('footer.connect')}</h4>
            <div className="flex items-center space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground">{t('footer.made')}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© {currentYear} Boriss. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
