import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleCursor from '@/components/ParticleCursor';
import MouseFollower from '@/components/MouseFollower';

const Index = () => {
  return (
    <main className="relative overflow-hidden cursor-none">
      <ParticleCursor />
      <MouseFollower />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
