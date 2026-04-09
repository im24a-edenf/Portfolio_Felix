import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Background3D = lazy(() => import('./components/Background3D'));

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-navy text-slate-200 selection:bg-maroon selection:text-white font-sans">

      {/* 3D Background - Loaded lazily to ensure performance */}
      <Suspense fallback={<div className="fixed inset-0 bg-navy z-0" />}>
        <Background3D />
      </Suspense>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col">
        <Navigation />

        <main className="flex-grow">
          <Hero />

          {/* Subtle separator using gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-maroon/30 to-transparent my-10 opacity-30" />

          <About />
          <Skills />
          <Projects />
        </main>

        <Contact />
      </div>
    </div>
  );
};

export default App;