import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ThemeProvider from './contexts/ThemeContext';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        <FloatingElements />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Terminal />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;