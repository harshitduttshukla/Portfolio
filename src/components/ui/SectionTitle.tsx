import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;