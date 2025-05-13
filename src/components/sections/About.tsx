import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const photoUrl = "/profile_photo2.jpg";
  
  const interests = [
    { icon: <Briefcase size={24} />, title: "Professional", description: "I'm passionate about web development, software architecture, and creating elegant solutions to complex problems." },
    { icon: <GraduationCap size={24} />, title: "Educational", description: "I going to get a degree in Computer Science and continuously expand my knowledge through courses and self-learning." },
    { icon: <Heart size={24} />, title: "Personal", description: "Outside of coding, I enjoy learning, photography, and imporving to projects in my free time." }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-lg transform translate-x-4 translate-y-4 z-0"></div>
              <img 
                src={photoUrl} 
                alt="Harshit shukla" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10 object-cover"
              />
            </div>
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Journey
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I started my programming journey in 2022 and have since honed my skills across various technologies and domains. My approach to software development is holistic, focusing on both technical excellence and the experience.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              What drives me is the opportunity to create meaningful applications that solve real problems. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-primary-500 mb-3">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;