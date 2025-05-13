import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <button
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
                onClick={onClose}
              >
                <X className="text-gray-700 dark:text-gray-300" size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="flex space-x-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;