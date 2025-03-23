
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const facts = [
    { key: 'about.fact1', icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> },
    { key: 'about.fact2', icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> },
    { key: 'about.fact3', icon: <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> }
  ];

  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('about.title')}</h2>
          <p className="text-muted-foreground">{t('about.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg">
              {t('about.description')}
            </p>
            
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
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop" 
                alt="About Boriss" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
