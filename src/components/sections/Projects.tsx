import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['all', 'web', 'mobile', 'design'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      longDescription: 'Complete e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and optimized for performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management tool with real-time updates.',
      longDescription: 'Team collaboration platform with real-time task updates, project management features, team communication tools, and advanced reporting capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      category: 'mobile',
      description: 'Beautiful weather app with location-based forecasts.',
      longDescription: 'Native mobile application providing accurate weather forecasts, location-based services, weather alerts, and beautiful animated weather visualizations.',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'API Integration', 'Geolocation'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity for a tech startup.',
      longDescription: 'Comprehensive brand identity including logo design, color palette, typography, business cards, letterheads, and brand guidelines for a technology startup.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'Illustrator', 'Branding'],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Responsive portfolio website with smooth animations.',
      longDescription: 'Modern portfolio website featuring smooth animations, responsive design, contact forms, and optimized performance. Built with React and Framer Motion.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness tracking with workout plans.',
      longDescription: 'Complete fitness application with workout tracking, meal planning, progress analytics, social features, and personalized training programs.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Health Kit', 'Charts'],
      github: '#',
      live: '#',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps, and design projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-600 to-teal-600 text-white shadow-lg'
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
              }`}
              data-cursor="pointer"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="group relative bg-[var(--surface)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.button
                        onClick={() => setSelectedProject(project.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        data-cursor="pointer"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        data-cursor="pointer"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        data-cursor="pointer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[var(--surface)] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-[var(--text-secondary)] mb-6">{project.longDescription}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 px-6 py-3 bg-[var(--border)] rounded-lg hover:bg-[var(--text-secondary)] hover:text-white transition-colors duration-200"
                            data-cursor="pointer"
                          >
                            <Github className="w-5 h-5" />
                            <span>Code</span>
                          </motion.a>
                          <motion.a
                            href={project.live}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                            data-cursor="pointer"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;