import { useEffect, useState } from 'react'; // Suspense and lazy are removed
import { Switch, Route } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Awards from '@/components/sections/Awards';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import { Analytics } from '@vercel/analytics/react';

const NotFound = () => <div className="h-screen w-full flex items-center justify-center text-white text-2xl">404: Page Not Found</div>;

// The ParticleBackground has been completely removed from this version.

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // The div that held the broken animation has been removed.
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <TechStack />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Analytics />
    </>
  );
}

export default App;