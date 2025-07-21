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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12 flex flex-col items-center lg:items-start">
            {/* New Photo Above Name */}
            <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img
                src="/public/20250706_132407(1).jpg"
                alt="Dhananjay Kharat"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            {/* Main Title */}
            <div className="space-y-8 w-full">
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-center lg:text-left">
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

              {/* Description */}
              {showRoles && (
                <div className="transform transition-all duration-1000 delay-1000 translate-y-0 opacity-100">
                  <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed text-center lg:text-left">
                    Passionate about <span className="text-orange-400 font-semibold">cloud technologies</span>, 
                    <span className="text-blue-400 font-semibold"> containerization</span>, and building 
                    <span className="text-purple-400 font-semibold"> scalable infrastructure</span>. 
                    Currently pursuing B.Sc. (Hons) Computer Science.
                  </p>
                </div>
              )}

              {/* Contact Info */}
              {showRoles && (
                <div className="transform transition-all duration-1000 delay-1200 translate-y-0 opacity-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:kkharatdhananjay@gmail.com"
                      className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-105 group border border-gray-700 hover:border-orange-500/50"
                    >
                      <Mail className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:animate-bounce" />
                      <span className="text-gray-300 group-hover:text-white font-medium">kkharatdhananjay@gmail.com</span>
                    </a>
                    <a
                      href="tel:9322339303"
                      className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-105 group border border-gray-700 hover:border-blue-500/50"
                    >
                      <Phone className="w-6 h-6 text-blue-500 group-hover:text-blue-400 group-hover:animate-bounce" />
                      <span className="text-gray-300 group-hover:text-white font-medium">9322339303</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Social Links */}
              {showRoles && (
                <div className="transform transition-all duration-1000 delay-1400 translate-y-0 opacity-100">
                  <div className="flex space-x-6 justify-center lg:justify-start">
                    <a
                      href="https://www.instagram.com/dhanu.kharat.45?igsh=MTU2b2owM29wdnRoMg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-rose-500/20 transition-all duration-300 hover:scale-110 group border border-gray-700 hover:border-pink-500/50"
                    >
                      <Instagram className="w-7 h-7 text-gray-300 group-hover:text-pink-500 group-hover:animate-pulse" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dhananjay-kharat-4844222a7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 hover:scale-110 group border border-gray-700 hover:border-blue-500/50"
                    >
                      <Linkedin className="w-7 h-7 text-gray-300 group-hover:text-blue-500 group-hover:animate-pulse" />
                    </a>
                    <a
                      href="https://github.com/dhananjay9322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-gray-500/20 hover:to-gray-600/20 transition-all duration-300 hover:scale-110 group border border-gray-700 hover:border-gray-500/50"
                    >
                      <Github className="w-7 h-7 text-gray-300 group-hover:text-white group-hover:animate-pulse" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Remove Right Side Old Photo */}
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