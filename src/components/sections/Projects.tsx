import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectModal from '../ui/ProjectModal';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Second Brain",
      description: "Implemented functionality to save YouTube videos and X (Twitter) posts for future retrieval and reference",
      fullDescription: "Second Brain is a full-stack productivity and knowledge management application designed to help users save, organize, and retrieve useful content from the web. Inspired by the Second Brain methodology, it acts as a personal repository for insightful or actionable information encountered online—particularly YouTube videos and X (Twitter) posts—to foster better learning, retention, and productivity",
      image: "/image.png",
      technologies: ["React", "Node.js", "Mongodb", "Express", "TypeScript", ],
      demoLink: "#",
      githubLink: "https://github.com/harshitduttshukla/dockerProject2"
    },
    {
      title: "Reel Pro",
      description: "A productivity and utility tool for person to organize, prioritize and track progress of Tasks.",
      fullDescription: "This comprehensive task management application helps teams collaborate efficiently by organizing work into projects, tasks, and subtasks. Features include drag-and-drop interfaces, and detailed progress reporting. The app includes role-based permissions,adding task based on the priority(high,medium,low) and updation deletion and addtion of task functionality.",
      image: "/Taskmanager.jpg",
      technologies: ["Php", "HTML", "CSS", "Mysql"],
      demoLink: "#",
      githubLink: "https://github.com/harshitduttshukla/ReelPro"
    },
    {
      title: "webinar WebPage",
      description: "A web first application for Word Count tracking, Realtime result, and personal accuracy and visualition metrics.",
      fullDescription: "This Typing Practice application helps users monitor their Typing journey with key,Accuracy logging, and word accuracy visualization. It includes customizable Typograpgy style plans,Word counting,Accuracy monitoring,error tracking. The app provides detailed analytics with progress graphs to keep users motivated.",
      image: "/kktyping.jpg",
      technologies: ["React.js", "TypeScript", "Node.js", "Mongodb","Tailwind CSS"],
      demoLink: "https://webinar-liard-two.vercel.app/",
      githubLink: "https://github.com/harshitduttshukla/webinar"
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Projects" 
          subtitle="Explore some of my recent work and personal projects"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300 flex-1"
                  >
                    View Details
                  </button>
                  
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {selectedProject !== null && (
        <ProjectModal 
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </section>
  );
};

export default Projects;