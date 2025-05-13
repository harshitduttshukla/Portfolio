import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Phone, MapPin, Download, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, text: "harshitshukla6388@gmail.com", href: "mailto:harshitshukla6388@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 6388293612", href: "tel:+916388293612" },
    { icon: <MapPin size={20} />, text: "Punjab, India", href: "#" }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/harshitshukla2/" },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/harshitduttshukla" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/Harshitshukla63" }
  ];

  const inputVariants = {
    focus: { scale: 1.01, boxShadow: "0 0 0 2px rgba(14, 165, 233, 0.3)" }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Get in touch for opportunities, collaborations, or just to say hello"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none resize-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-md flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300 w-full sm:w-auto disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {formStatus === 'success' && (
                <motion.div 
                  className="px-4 py-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  className="px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect With Me
            </h4>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <motion.a
                href="/Harshit_CV.pdf"
                download
                className="flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;