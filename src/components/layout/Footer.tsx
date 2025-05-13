import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/harshitduttshukla', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/harshitshukla2/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/Harshitshukla63', label: 'X' },
    { icon: <Mail size={20} />, href: 'mailto:harshitshuka6388@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Harshit Shukla</h3>
            <p className="text-gray-600 dark:text-gray-300">Aspiring Developer, Learner</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} BlueOceanWhale. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;