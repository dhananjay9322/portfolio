import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Instagram, Linkedin, Github, Download, Cloud, Server, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);
  const fullText = "Hi, I'm Dhananjay Kharat";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!showRoles) {
        setTimeout(() => setShowRoles(true), 500);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText, showRoles]);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = [
    {
      title: 'DevOps',
      icon: Server,
      gradient: 'from-orange-400 via-red-500 to-pink-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      description: 'Infrastructure & Automation',
      delay: 'delay-200'
    },
    {
      title: 'Cloud Enthusiast',
      icon: Cloud,
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      description: 'Scalable Solutions',
      delay: 'delay-500'
    },
    {
      title: 'Coder',
      icon: Code,
      gradient: 'from-purple-400 via-violet-500 to-indigo-500',
      bgGradient: 'from-purple-500/20 to-indigo-500/20',
      description: 'Problem Solver',
      delay: 'delay-700'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left side: Text content */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            {/* Main Title */}
            <div className="space-y-8 w-full">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                {displayText.includes("Dhananjay Kharat") ? (
                  <>
                    <span className="neon-text">{displayText.split("Dhananjay Kharat")[0]}</span>
                    <span className="gradient-text">Dhananjay Kharat</span>
                  </>
                ) : (
                  <span className="neon-text">{displayText}</span>
                )}
              </h1>

              {/* Role Cards */}
              {showRoles && (
                <div className="space-y-6">
                  {roles.map((role, index) => (
                    <div
                      key={role.title}
                      className={`transform transition-all duration-1000 ${role.delay} ${
                        showRoles ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
                      }`}
                    >
                      <div className={`relative group cursor-pointer`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${role.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-70`}></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-500 group-hover:scale-105">
                          <div className="flex items-center space-x-6">
                            <div className={`p-4 rounded-xl bg-gradient-to-r ${role.gradient} shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-12`}>
                              <role.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                                {role.title}
                              </h2>
                              <p className="text-gray-400 text-lg mt-1 group-hover:text-gray-300 transition-colors duration-300">
                                {role.description}
                              </p>
                            </div>
                            <div className={`w-2 h-16 bg-gradient-to-b ${role.gradient} rounded-full group-hover:h-20 transition-all duration-500`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: Photo */}
          <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border-4 border-gray-700/50 mb-8 lg:mb-0">
            <img
              src="/20250706_132407(1).jpg"
              alt="Dhananjay Kharat"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
      >
        <div className="p-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
          <ChevronDown className="w-8 h-8 text-white group-hover:animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default Hero;