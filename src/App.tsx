import { Suspense, lazy, useEffect, useState } from 'react';
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

const ParticleBackground = lazy(() => import('@/components/canvas/ParticleBackground'));

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  // NEW STATE: This will hold the ID of the section currently in view
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // === NEW LOGIC: DETECT ACTIVE SECTION ON SCROLL ===
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // The section is "active" when it is 50% visible in the viewport
        rootMargin: '0px 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // Run this effect only once

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Suspense fallback={<div className="bg-[#0F172A] w-full h-full" />}>
          <ParticleBackground />
        </Suspense>
      </div>
      {/* We now pass the activeSection state to the Navbar */}
      <Navbar activeSection={activeSection} />
      
      <main>
        {/* Make sure your Hero section has an id="home" */}
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

// ... App component remains the same ...

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