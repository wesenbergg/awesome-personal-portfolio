import React, { createContext, useState, ReactNode } from "react";

type Language = "en" | "fi";

type Translations = {
  [key: string]: {
    [lang in Language]: string;
  };
};

// Translation dictionary
const translations: Translations = {
  // Navbar
  "nav.home": {
    en: "Home",
    fi: "Etusivu",
  },
  "nav.about": {
    en: "About",
    fi: "Tietoa",
  },
  "nav.projects": {
    en: "Projects",
    fi: "Projektit",
  },
  "nav.experience": {
    en: "Experience",
    fi: "Kokemus",
  },
  "nav.pricing": {
    en: "Pricing",
    fi: "Hinnoittelu",
  },
  "nav.contact": {
    en: "Contact",
    fi: "Ota yhteyttä",
  },

  // Hero
  "hero.greeting": {
    en: "Hello, I'm",
    fi: "Hei, olen",
  },
  "hero.role": {
    en: "Software Developer",
    fi: "Ohjelmistokehittäjä",
  },
  "hero.location": {
    en: "Based in Helsinki",
    fi: "Helsinki",
  },
  "hero.cta": {
    en: "Get in touch",
    fi: "Ota yhteyttä",
  },
  "hero.secondary": {
    en: "View work",
    fi: "Katso töitäni",
  },
  "hero.resolution": {
    en: "I made a New Year's resolution for 2025 to code every day. Follow my journey as I build products that solve real problems.",
    fi: "Tein uudenvuodenlupauksen vuodelle 2025 koodata joka päivä. Seuraa matkaani kun rakennan tuotteita, jotka ratkaisevat todellisia ongelmia.",
  },

  // About
  "about.title": {
    en: "About Me",
    fi: "Tietoa minusta",
  },
  "about.subtitle": {
    en: "Get to know me better",
    fi: "Tutustu minuun paremmin",
  },
  "about.description": {
    en: "I am a friendly Software Developer from Finland, currently based in Helsinki. For 2025, I made a New Year's resolution to code every day.",
    fi: "Olen ystävällinen ohjelmistokehittäjä Suomesta, tällä hetkellä asun Helsingissä. Vuodelle 2025 tein uudenvuodenlupauksen koodata joka päivä.",
  },
  "about.fact1": {
    en: "Passionate to discover and learn new tech.",
    fi: "Intohimoinen löytämään ja oppimaan uutta teknologiaa.",
  },
  "about.fact2": {
    en: "Interested in mastering AWS and UX.",
    fi: "Kiinnostunut hallitsemaan AWS:ää ja UX:ää.",
  },
  "about.fact3": {
    en: "In my free time I listen to audio books.",
    fi: "Vapaa-ajallani kuuntelen äänikirjoja.",
  },

  // Projects
  "projects.title": {
    en: "Projects",
    fi: "Projektit",
  },
  "projects.subtitle": {
    en: "My recent work",
    fi: "Viimeaikaiset työni",
  },
  "projects.uiux.title": {
    en: "UI/UX Design",
    fi: "UI/UX Suunnittelu",
  },
  "projects.uiux.description": {
    en: "Creating intuitive and beautiful user interfaces.",
    fi: "Luon intuitiivisia ja kauniita käyttöliittymiä.",
  },
  "projects.gradient.title": {
    en: "Gradient Tool",
    fi: "Väriliuku-työkalu",
  },
  "projects.gradient.description": {
    en: "A tool for generating beautiful gradients.",
    fi: "Työkalu kauniiden väriliukujen luomiseen.",
  },
  "projects.chess.title": {
    en: "Chess Clock",
    fi: "Shakkikello",
  },
  "projects.chess.description": {
    en: "A digital chess clock for tournament play.",
    fi: "Digitaalinen shakkikello turnauspelaamiseen.",
  },
  "projects.view": {
    en: "View Project",
    fi: "Katso projekti",
  },

  // Experience
  "experience.title": {
    en: "Experience",
    fi: "Kokemus",
  },
  "experience.subtitle": {
    en: "My professional journey",
    fi: "Ammatillinen matkani",
  },
  "experience.novatron.title": {
    en: "Software Developer",
    fi: "Ohjelmistokehittäjä",
  },
  "experience.novatron.company": {
    en: "NOVATRON",
    fi: "NOVATRON",
  },
  "experience.buutti.title": {
    en: "IT consultant",
    fi: "IT-konsultti",
  },
  "experience.buutti.company": {
    en: "Buutti",
    fi: "Buutti",
  },
  "experience.solteq.title": {
    en: "Frontend Developer",
    fi: "Front end -kehittäjä",
  },
  "experience.solteq.company": {
    en: "Solteq",
    fi: "Solteq",
  },
  "experience.novatron.description": {
    en: "Developed enterprise software solutions for industrial automation systems. Led a team of developers to create scalable applications.",
    fi: "Kehitin yritysohjelmistoratkaisuja teollisuusautomaatiojärjestelmiin. Johdin kehittäjätiimiä skaalautuvien sovellusten luomisessa.",
  },
  "experience.buutti.description": {
    en: "Built responsive user interfaces and implemented modern frontend patterns. Worked closely with designers to create pixel-perfect UIs.",
    fi: "Rakensin responsiivisia käyttöliittymiä ja toteutin moderneja frontend-malleja. Työskentelin tiiviisti suunnittelijoiden kanssa luodakseni pikselintarkkoja käyttöliittymiä.",
  },
  "experience.solteq.description": {
    en: "Developed full-stack applications using React, Node.js and AWS. Implemented CI/CD pipelines and automated testing frameworks.",
    fi: "Kehitin full-stack-sovelluksia käyttäen React-, Node.js- ja AWS-teknologioita. Toteutin CI/CD-putkia ja automatisoituja testausympäristöjä.",
  },

  // Pricing
  "pricing.title": {
    en: "Pricing",
    fi: "Hinnoittelu",
  },
  "pricing.subtitle": {
    en: "Simple, transparent pricing",
    fi: "Yksinkertainen, läpinäkyvä hinnoittelu",
  },
  "pricing.starter.title": {
    en: "Starter",
    fi: "Aloituspaketti",
  },
  "pricing.starter.price": {
    en: "$499",
    fi: "499€",
  },
  "pricing.starter.description": {
    en: "Perfect for small projects",
    fi: "Täydellinen pienille projekteille",
  },
  "pricing.optimal.title": {
    en: "Optimal",
    fi: "Optimaalinen",
  },
  "pricing.optimal.price": {
    en: "$999",
    fi: "999€",
  },
  "pricing.optimal.description": {
    en: "Best value for most projects",
    fi: "Paras vastine useimmille projekteille",
  },
  "pricing.business.title": {
    en: "Business",
    fi: "Yritys",
  },
  "pricing.business.price": {
    en: "$1999",
    fi: "1999€",
  },
  "pricing.business.description": {
    en: "For complex business solutions",
    fi: "Monimutkaisiin yritysratkaisuihin",
  },
  "pricing.contact": {
    en: "Contact",
    fi: "Ota yhteyttä",
  },

  // Contact
  "contact.title": {
    en: "Get in Touch",
    fi: "Ota yhteyttä",
  },
  "contact.subtitle": {
    en: "Have a question or want to work together? Drop me a line!",
    fi: "Onko sinulla kysyttävää tai haluatko tehdä yhteistyötä? Lähetä viesti!",
  },
  "contact.emailLabel": {
    en: "Your Email",
    fi: "Sähköpostiosoitteesi",
  },
  "contact.emailPlaceholder": {
    en: "name@example.com",
    fi: "nimi@esimerkki.com",
  },
  "contact.send": {
    en: "Send Message",
    fi: "Lähetä viesti",
  },
  "contact.sending": {
    en: "Sending...",
    fi: "Lähetetään...",
  },
  "contact.privacy": {
    en: "I'll never share your email with anyone else.",
    fi: "En koskaan jaa sähköpostiasi kenenkään muun kanssa.",
  },
  "contact.success": {
    en: "Message Sent!",
    fi: "Viesti lähetetty!",
  },
  "contact.successMessage": {
    en: "I'll get back to you as soon as possible.",
    fi: "Palaan asiaan mahdollisimman pian.",
  },

  // Footer
  "footer.connect": {
    en: "Connect with me",
    fi: "Ota yhteyttä",
  },
  "footer.copyright": {
    en: "AI rights reserved",
    fi: "Kaikki oikeudet pidätetään",
  },
  "footer.made": {
    en: "Pair coded with ❤️ by AI",
    fi: "Tehnyt ❤️ Boriss & AI",
  },
  "footer.githubStats": {
    en: "GitHub Stats",
    fi: "GitHub Tilastot",
  },
  "footer.stars": {
    en: "stars",
    fi: "tähteä",
  },
  "footer.forks": {
    en: "forks",
    fi: "haarautumaa",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

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
