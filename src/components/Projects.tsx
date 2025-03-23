
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, Palette, Clock, Layout } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'projects.uiux.title',
      description: 'projects.uiux.description',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
      icon: <Layout className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'projects.gradient.title',
      description: 'projects.gradient.description',
      image: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop',
      icon: <Palette className="h-10 w-10 text-purple-500" />
    },
    {
      title: 'projects.chess.title',
      description: 'projects.chess.description',
      image: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=2071&auto=format&fit=crop',
      icon: <Clock className="h-10 w-10 text-green-500" />
    }
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('projects.title')}</h2>
          <p className="text-muted-foreground">{t('projects.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 z-10"></div>
              <img 
                src={project.image} 
                alt={t(project.title)} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md p-3 rounded-xl z-20">
                {project.icon}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{t(project.title)}</h3>
                <p className="text-white/80 mb-4">{t(project.description)}</p>
                <Button variant="secondary" size="sm" className="gap-1.5">
                  {t('projects.view')}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
