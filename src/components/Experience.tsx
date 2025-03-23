
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'experience.abb.title',
      company: 'experience.abb.company',
      period: '2022 - Present',
      description: 'Developed enterprise software solutions for industrial automation systems. Led a team of developers to create scalable applications.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg'
    },
    {
      title: 'experience.okrla.title',
      company: 'experience.okrla.company',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and implemented modern frontend patterns. Worked closely with designers to create pixel-perfect UIs.',
      logo: 'https://placehold.co/200x200/e9e9e9/808080?text=Okrla'
    },
    {
      title: 'experience.telia.title',
      company: 'experience.telia.company',
      period: '2018 - 2020',
      description: 'Developed full-stack applications using React, Node.js and AWS. Implemented CI/CD pipelines and automated testing frameworks.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Telia_Company_Logo.svg'
    }
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('experience.title')}</h2>
          <p className="text-muted-foreground">{t('experience.subtitle')}</p>
        </div>
        
        <div className="space-y-10 relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 md:-ml-[1px] w-[2px] bg-border" />
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-primary bg-background z-10" />
                <div className="space-y-2">
                  <div className="inline-flex items-center bg-primary/10 rounded-full py-1 px-3 text-sm">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold">{t(exp.title)}</h3>
                  <div className="flex items-center gap-2 md:justify-end">
                    <img 
                      src={exp.logo} 
                      alt={t(exp.company)} 
                      className="h-6 object-contain" 
                    />
                    <span className="font-medium">{t(exp.company)}</span>
                  </div>
                </div>
              </div>
              
              <div className={`md:text-left ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                  <p>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
