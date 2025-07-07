import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 py-8 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300 flex items-center justify-center md:justify-start space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Dhananjay Kharat</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              © 2024 All rights reserved. Built with React & TypeScript
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              DevOps • Cloud Computing • Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-30"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;