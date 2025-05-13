import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { 
  Code, Database, Globe, Server, 
  Paintbrush, LayoutGrid, Terminal, Workflow 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={28} />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        // { name: "Next.js", level: 80 },
        { name: "CSS/SCSS", level: 90 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={28} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        // { name: "GraphQL", level: 70 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "SQL", level: 80 },
        // { name: "Redis", level: 65 }
      ]
    },
    {
      title: "DevOps",
      icon: <Workflow size={28} />,
      skills: [
        { name: "Docker", level: 75 },
        // { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 }
      ]
    },
    // {
    //   title: "Design",
    //   icon: <Paintbrush size={28} />,
    //   skills: [
    //     { name: "Figma", level: 85 },
    //     { name: "UI/UX", level: 80 },
    //     { name: "Adobe XD", level: 70 },
    //     { name: "Responsive Design", level: 90 },
    //     { name: "Design Systems", level: 75 }
    //   ]
    // },
    {
      title: "Tools",
      icon: <Terminal size={28} />,
      skills: [
        { name: "VS Code", level: 95 },
        // { name: "Webpack", level: 75 },
        { name: "Vite", level: 85 },
        { name: "Postman", level: 90 },
        { name: "npm/yarn", level: 90 }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-md text-primary-600 dark:text-primary-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;