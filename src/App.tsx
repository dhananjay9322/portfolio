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
import BlogCaseStudies from './components/BlogCaseStudies';

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
          <BlogCaseStudies postsData={[
            {
              title: "Understanding Flask Routing",
              description: "A beginner-friendly breakdown of Flask routes with real examples.",
              tags: ["Python", "Flask"],
              type: "Blog",
              readLink: "https://yourblog.com/flask-routing",
              githubLink: "https://github.com/yourname/flask-routing-blog"
            },
            {
              title: "Deploying ML Models with Docker",
              description: "Step-by-step deployment of ML models using Docker containers.",
              tags: ["Docker", "Machine Learning"],
              type: "Case Study",
              readLink: "https://yourblog.com/ml-docker",
              githubLink: ""
            },
            {
              title: "React State Management Deep Dive",
              description: "A comprehensive guide to managing state in large React apps.",
              tags: ["React", "JavaScript"],
              type: "Blog",
              readLink: "https://yourblog.com/react-state",
              githubLink: "https://github.com/yourname/react-state-blog"
            }
          ]} />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;