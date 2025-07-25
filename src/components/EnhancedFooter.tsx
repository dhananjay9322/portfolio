import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dhananjay9322',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dhananjay-kharat-4844222a7',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:kkharatdhananjay@gmail.com',
      label: 'Email',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-8 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left side - Copyright */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 flex items-center justify-center md:justify-start space-x-2 font-mono">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by</span>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-bold">
                Dhananjay Kharat
              </span>
            </p>
            <p className="text-gray-400 text-sm mt-1 font-mono">
              © 2024 All rights reserved. Built with React & TypeScript
            </p>
          </motion.div>
          
          {/* Center - Social Links */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Tech stack */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm font-mono">
              DevOps • Cloud Computing • Innovation
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-2 mt-1">
              <span className="text-xs text-gray-500 font-mono">Powered by</span>
              <div className="flex space-x-1">
                {['React', 'TypeScript', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" 
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center group z-30"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default EnhancedFooter;