import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const fullHeading = "Hi, I'm Dhananjay Kharat";
const typingSpeed = 60;

const EnhancedHero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (currentIndex < fullHeading.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullHeading.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (currentIndex >= fullHeading.length && !showRoles) {
      setTimeout(() => {
        setShowRoles(true);
        controls.start("visible");
      }, 500);
    }
  }, [currentIndex, showRoles, controls]);

  const roles = [
    {
      title: 'DevOps',
      gradient: 'from-orange-400 via-red-500 to-pink-500',
      description: 'Infrastructure & Automation',
      delay: 0.2
    },
    {
      title: 'Cloud Enthusiast',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      description: 'Scalable Solutions',
      delay: 0.4
    },
    {
      title: 'Coder',
      gradient: 'from-purple-400 via-violet-500 to-indigo-500',
      description: 'Problem Solver',
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="terminal-grid"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left: Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Typing Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8 font-mono"
              variants={itemVariants}
            >
              <span className="text-white">{displayText.slice(0, 7)}</span>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-extrabold">
                {displayText.slice(7, 16)}
              </span>
              <span className="text-white">{displayText.slice(16, 17)}</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
                {displayText.slice(17)}
              </span>
              {currentIndex < fullHeading.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyan-400 ml-1"
                >
                  |
                </motion.span>
              )}
            </motion.h1>

            {/* Role Cards */}
            <motion.div 
              className="space-y-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-500">
                      <div className="flex items-center space-x-6">
                        <div className={`w-4 h-16 bg-gradient-to-b ${role.gradient} rounded-full group-hover:h-20 transition-all duration-500`}></div>
                        <div>
                          <h2 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent font-mono`}>
                            {role.title}
                          </h2>
                          <p className="text-gray-400 text-lg mt-1 group-hover:text-gray-300 transition-colors duration-300">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
              <motion.div 
                className="space-y-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-500">
                        <div className="flex items-center space-x-6">
                          <div className={`w-4 h-16 bg-gradient-to-b ${role.gradient} rounded-full group-hover:h-20 transition-all duration-500`}></div>
                          <div>
                            <h2 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent font-mono`}>
                              {role.title}
                            </h2>
                            <p className="text-gray-400 text-lg mt-1 group-hover:text-gray-300 transition-colors duration-300">
                              {role.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              />
              <motion.img
                src="/my.jpg"
                alt="Dhananjay Kharat"
                className="w-80 lg:w-96 h-auto object-cover rounded-2xl shadow-2xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Floating tech icons */}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              <motion.a
                href="#contact"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/dhananjay9322"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 border border-gray-600 text-white rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      <style jsx>{`
        .terminal-grid {
          background-image: 
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default EnhancedHero;