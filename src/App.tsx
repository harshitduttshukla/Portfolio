import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Competitions from './components/sections/Competitions';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import VideoCV from './components/sections/VideoCV';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for user preference
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Skills />
        <Projects />
        {/* <VideoCV/> */}
        <Certifications />
        <Competitions />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;