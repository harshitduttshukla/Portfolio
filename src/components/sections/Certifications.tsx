import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      organization: "Johns Hopkins University",
      date: "May 14, 2024",
      icon: "/Johns_Hopkins_University_HTML_CSS_JS.jpg",
      link: "https://coursera.org/verify/754MWQN7KA9P"
    },
    {
      title: "IBM DevOps and Software Engineering",
      organization: "Coursera",
      date: "Novemember 2024",
      icon: "/CourseraIBM_devops_certificate.jpg",
      link: "https://coursera.org/verify/professional-cert/9SOKGL57EJPE"
    },
    {
      title: "Cloud Computing",
      organization: "NPTEL",
      date: "August 2024",
      icon: "/couldComputingneptalCertificate.jpg",
      link: "#"
    },
    {
      title: "Datastructure and Algorithms",
      organization: "Cipher School",
      date: "Feburary 2025",
      icon: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications & Courses" 
          subtitle="Professional certifications and courses I've completed"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex"
              variants={itemVariants}
            >
              <div className="w-1/3 overflow-hidden">
                <img 
                  src={cert.icon} 
                  alt={cert.organization} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-2/3 p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {cert.title}
                </h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                  <Award size={14} className="mr-1" />
                  <span>{cert.organization}</span>
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline text-sm"
                >
                  <span className="mr-1">View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;