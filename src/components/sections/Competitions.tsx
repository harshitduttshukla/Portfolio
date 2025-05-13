import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';

const Competitions: React.FC = () => {
  const competitions = [
    // {
    //   title: "International Coding Challenge",
    //   type: "Competitive Programming",
    //   date: "October 2023",
    //   location: "Online",
    //   achievement: "Gold Medal",
    //   description: "Solved 8 out of 10 algorithmic problems, finishing in the top 5% among 2000+ participants globally.",
    //   technologies: ["C++", "Data Structures", "Algorithms"]
    // },
    // {
    //   title: "Global Hackathon 2023",
    //   type: "Hackathon",
    //   date: "July 2023",
    //   location: "San Francisco, CA",
    //   achievement: "1st Place",
    //   description: "Led a team of 4 to build an AI-powered accessibility tool for visually impaired users, winning the grand prize among 120 teams.",
    //   technologies: ["React", "TensorFlow.js", "Node.js", "WebRTC"]
    // },
    {
      title: "Celesta WebaThon",
      type: "Hackathon",
      date: "March 2024",
      location: "Lovely Professional University Campus",
      achievement: "Participation certificate",
      description: "Designed and implemented a responsive web application for finding and detecting the plants based on the medical property within a 48-hour timeframe.",
      technologies: ["React.js", "Tailwind CSS", "Teachable Machine","AI/ML models"]
    },
    // {
    //   title: "AI/ML Challenge",
    //   type: "Machine Learning",
    //   date: "November 2022",
    //   location: "Online",
    //   achievement: "Top 10 Finalist",
    //   description: "Developed a machine learning model for predicting energy consumption patterns with 94% accuracy.",
    //   technologies: ["Python", "PyTorch", "Pandas", "scikit-learn"]
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="competitions" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Competitive Programming & Hackathons" 
          subtitle="My achievements in coding competitions and hackathons"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {competitions.map((competition, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3">
                    {competition.type === "Hackathon" ? (
                      <Trophy size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {competition.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{competition.date}</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{competition.location}</span>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm inline-block">
                  <Trophy size={14} className="mr-1" />
                  <span>{competition.achievement}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {competition.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {competition.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;