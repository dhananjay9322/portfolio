import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, Instagram, Linkedin, Github, Download, Cloud, Server, Code } from 'lucide-react';

const fullHeading = "Hi, I'm Dhananjay Kharat";
const typingSpeed = 60;

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);

  useEffect(() => {
    if (currentIndex < fullHeading.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullHeading.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!showRoles) {
      setTimeout(() => setShowRoles(true), 500);
    }
  }, [currentIndex, showRoles]);

  // Split the heading for gradient styling
  const getStyledHeading = () => {
    // Find the indices for Dhananjay and Kharat
    const dhanaIdx = displayText.indexOf('Dhananjay');
    const kharatIdx = displayText.indexOf('Kharat');
    if (dhanaIdx === -1) return <span>{displayText}</span>;
    const before = displayText.slice(0, dhanaIdx);
    const dhana = displayText.slice(dhanaIdx, dhanaIdx + 9);
    const afterDhana = displayText.slice(dhanaIdx + 9, kharatIdx);
    const kharat = displayText.slice(kharatIdx, kharatIdx + 6);
    const after = displayText.slice(kharatIdx + 6);
    return (
      <span>
        {before}
        <span className="gradient-orange-pink font-extrabold">{dhana}</span>
        {afterDhana}
        <span className="gradient-blue-purple font-extrabold">{kharat}</span>
        {after}
      </span>
    );
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
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* Starry background (canvas or pseudo-element) is handled by FloatingElements */}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
          {/* Left: Heading and roles */}
          <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
            {/* Typing Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-center md:text-left relative">
              <span>{getStyledHeading()}</span>
              <span className="typing-cursor">|</span>
            </h1>

            {/* Role Cards */}
            {showRoles && (
              <div className="space-y-6 w-full max-w-xl">
                {roles.map((role, index) => (
                  <div
                    key={role.title}
                    className={`transform transition-all duration-1000 ${role.delay} ${showRoles ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`}
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

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end items-start md:items-start mb-8 md:mb-0">
            <div className="relative profile-img-container profile-img-lower md:mt-8">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 p-1 shadow-2xl profile-img">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="/profile.jpg"
                    alt="Dhananjay Kharat"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Floating icon for extra effect (optional) */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                <Server className="w-8 h-8 text-white" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group z-20"
      >
        <div className="p-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
          <ChevronDown className="w-8 h-8 text-white group-hover:animate-pulse" />
        </div>
      </button>

      {/* Custom styles for gradients, glow, typing, and responsiveness */}
      <style>{`
        .gradient-orange-pink {
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        .gradient-blue-purple {
          background: linear-gradient(90deg, #00c3ff, #8b5cf6);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        .typing-cursor {
          display: inline-block;
          color: #fff;
          font-weight: 900;
          font-size: 1em;
          margin-left: 2px;
          animation: blink-cursor 0.7s steps(1) infinite;
        }
        @keyframes blink-cursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .profile-img-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .profile-img-lower {
          margin-top: 2.5rem;
        }
        @media (min-width: 768px) {
          .profile-img-container {
            align-items: flex-start;
          }
          .profile-img {
            margin-top: 0;
          }
          .profile-img-lower {
            margin-top: 4.5rem;
          }
        }
        @media (max-width: 767px) {
          .profile-img {
            margin-top: 2rem;
            margin-bottom: 0;
          }
          .profile-img-lower {
            margin-top: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;