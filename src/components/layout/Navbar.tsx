import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          Portfolio
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.ul 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            <motion.a
              href="#contact"
              className="px-5 py-2 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-white rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Contact Me
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;