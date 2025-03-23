
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
