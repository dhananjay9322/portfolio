import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
    { id: 'blogs', label: 'Blogs & Case Studies' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900/90 border-r border-gray-800 z-40 flex flex-col transition-transform duration-300 md:translate-x-0 md:sticky md:h-screen md:w-64"
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-white">
          <span className="text-orange-500">D</span>hananjay
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Sidebar content */}
      <nav className={`flex-1 flex flex-col pt-8 md:pt-12 px-4 space-y-2 md:space-y-4 ${isOpen ? '' : 'hidden md:flex'}`}> 
        <div className="hidden md:block text-2xl font-bold text-white mb-8 pl-2">
          <span className="text-orange-500">D</span>hananjay
        </div>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative text-left px-2 py-2 rounded-lg text-white font-medium hover:text-orange-500 transition-colors duration-300 focus:outline-none ${
              activeSection === item.id ? 'text-orange-500' : ''
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
            )}
          </button>
        ))}
        <div className="flex-1"></div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 self-start mb-4"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </aside>
  );
};

export default Navbar;