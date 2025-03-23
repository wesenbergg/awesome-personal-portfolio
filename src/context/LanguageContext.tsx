
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key: string]: {
    [lang in Language]: string;
  };
};

// Translation dictionary
const translations: Translations = {
  // Navbar
  'nav.home': {
    en: 'Home',
    es: 'Inicio'
  },
  'nav.about': {
    en: 'About',
    es: 'Sobre mí'
  },
  'nav.projects': {
    en: 'Projects',
    es: 'Proyectos'
  },
  'nav.experience': {
    en: 'Experience',
    es: 'Experiencia'
  },
  'nav.pricing': {
    en: 'Pricing',
    es: 'Precios'
  },
  'nav.contact': {
    en: 'Contact',
    es: 'Contacto'
  },
  
  // Hero
  'hero.greeting': {
    en: 'Hello, I\'m',
    es: 'Hola, soy'
  },
  'hero.role': {
    en: 'Software Developer',
    es: 'Desarrollador de Software'
  },
  'hero.location': {
    en: 'Based in Berlin',
    es: 'Ubicado en Berlín'
  },
  'hero.cta': {
    en: 'Get in touch',
    es: 'Contáctame'
  },
  'hero.secondary': {
    en: 'View work',
    es: 'Ver trabajo'
  },
  
  // About
  'about.title': {
    en: 'About Me',
    es: 'Sobre Mí'
  },
  'about.subtitle': {
    en: 'Get to know me better',
    es: 'Conóceme mejor'
  },
  'about.description': {
    en: 'I am a friendly Software Developer from Finland, currently based in Berlin. For 2025, I made a New Year\'s resolution to code every day.',
    es: 'Soy un amigable Desarrollador de Software de Finlandia, actualmente en Berlín. Para 2025, mi propósito de Año Nuevo es programar todos los días.'
  },
  'about.fact1': {
    en: 'Passionate to discover and learn new tech.',
    es: 'Apasionado por descubrir y aprender nuevas tecnologías.'
  },
  'about.fact2': {
    en: 'Interested in mastering AWS and UX.',
    es: 'Interesado en dominar AWS y UX.'
  },
  'about.fact3': {
    en: 'In my free time I listen to audio books.',
    es: 'En mi tiempo libre escucho audiolibros.'
  },
  
  // Projects
  'projects.title': {
    en: 'Projects',
    es: 'Proyectos'
  },
  'projects.subtitle': {
    en: 'My recent work',
    es: 'Mi trabajo reciente'
  },
  'projects.uiux.title': {
    en: 'UI/UX Design',
    es: 'Diseño UI/UX'
  },
  'projects.uiux.description': {
    en: 'Creating intuitive and beautiful user interfaces.',
    es: 'Creando interfaces de usuario intuitivas y hermosas.'
  },
  'projects.gradient.title': {
    en: 'Gradient Tool',
    es: 'Herramienta de Gradientes'
  },
  'projects.gradient.description': {
    en: 'A tool for generating beautiful gradients.',
    es: 'Una herramienta para generar hermosos gradientes.'
  },
  'projects.chess.title': {
    en: 'Chess Clock',
    es: 'Reloj de Ajedrez'
  },
  'projects.chess.description': {
    en: 'A digital chess clock for tournament play.',
    es: 'Un reloj de ajedrez digital para juegos de torneo.'
  },
  'projects.view': {
    en: 'View Project',
    es: 'Ver Proyecto'
  },
  
  // Experience
  'experience.title': {
    en: 'Experience',
    es: 'Experiencia'
  },
  'experience.subtitle': {
    en: 'My professional journey',
    es: 'Mi trayectoria profesional'
  },
  'experience.abb.title': {
    en: 'Software Developer',
    es: 'Desarrollador de Software'
  },
  'experience.abb.company': {
    en: 'ABB',
    es: 'ABB'
  },
  'experience.okrla.title': {
    en: 'Frontend Developer',
    es: 'Desarrollador Frontend'
  },
  'experience.okrla.company': {
    en: 'Okrla',
    es: 'Okrla'
  },
  'experience.telia.title': {
    en: 'Full Stack Developer',
    es: 'Desarrollador Full Stack'
  },
  'experience.telia.company': {
    en: 'Telia',
    es: 'Telia'
  },
  
  // Pricing
  'pricing.title': {
    en: 'Pricing',
    es: 'Precios'
  },
  'pricing.subtitle': {
    en: 'Simple, transparent pricing',
    es: 'Precios simples y transparentes'
  },
  'pricing.starter.title': {
    en: 'Starter',
    es: 'Inicial'
  },
  'pricing.starter.price': {
    en: '$499',
    es: '€499'
  },
  'pricing.starter.description': {
    en: 'Perfect for small projects',
    es: 'Perfecto para proyectos pequeños'
  },
  'pricing.optimal.title': {
    en: 'Optimal',
    es: 'Óptimo'
  },
  'pricing.optimal.price': {
    en: '$999',
    es: '€999'
  },
  'pricing.optimal.description': {
    en: 'Best value for most projects',
    es: 'La mejor opción para la mayoría de proyectos'
  },
  'pricing.business.title': {
    en: 'Business',
    es: 'Empresarial'
  },
  'pricing.business.price': {
    en: '$1999',
    es: '€1999'
  },
  'pricing.business.description': {
    en: 'For complex business solutions',
    es: 'Para soluciones empresariales complejas'
  },
  'pricing.contact': {
    en: 'Contact',
    es: 'Contactar'
  },
  
  // Footer
  'footer.connect': {
    en: 'Connect with me',
    es: 'Conecta conmigo'
  },
  'footer.copyright': {
    en: 'All rights reserved',
    es: 'Todos los derechos reservados'
  },
  'footer.made': {
    en: 'Made with ❤️ by Boriss',
    es: 'Hecho con ❤️ por Boriss'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
