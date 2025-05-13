import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const Introduction: React.FC = () => {
  const paragraphs = [
    "Hello! I'm Harshit Shukla, a passionate software developer with expertise in building modern web applications and solving complex problems.",
    "I blend creativity with technical skills to craft intuitive user experiences that make a difference. My goal is to create software that not only functions flawlessly but also delights users.",
    "With a strong foundation in computer science and a keen eye for design, I strive to bridge the gap between functionality and aesthetics in everything I build."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="introduction" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Introduction & Summary" />
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index} 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;