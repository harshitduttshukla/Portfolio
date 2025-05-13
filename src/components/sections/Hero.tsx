import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-white dark:via-gray-900 to-secondary-500/20 z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-400/20 dark:bg-secondary-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent-400/20 dark:bg-accent-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
              Harshit Shukla
            </span>
            <br />
            <span className="text-gray-700 dark:text-gray-100">
              Aspiring Developer, Learner
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Building modern web experiences with a focus on performance, accessibility, and user experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y:.0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.a
        href="#introduction"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;