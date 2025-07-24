import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ThemeProvider from './contexts/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        <FloatingElements />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;