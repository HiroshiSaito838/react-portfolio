import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeElement, setActiveElement] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleMouseMove = (e, elementId) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setActiveElement(elementId);
  };

  const handleMouseLeave = () => {
    setActiveElement(null);
  };

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'mern', name: 'MERN Stack' },
    { id: 'shopify', name: 'Shopify' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Japanese E-Commerce Platform',
      category: 'mern',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'A full-stack e-commerce platform built with MERN stack, featuring real-time inventory management, multi-language support (Japanese/English), and integrated payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Shopify Custom Theme',
      category: 'shopify',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Custom Shopify theme development for a Japanese fashion brand, featuring unique product displays, custom checkout process, and seamless integration with Japanese payment gateways.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'SCSS', 'jQuery'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Waseda University Portal',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'A comprehensive university portal system for Waseda University, featuring student management, course registration, and real-time communication tools.',
      technologies: ['MERN Stack', 'Socket.io', 'Material-UI', 'JWT'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Shopify App Development',
      category: 'shopify',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Custom Shopify app for inventory management and order processing, specifically designed for Japanese retailers with unique business requirements.',
      technologies: ['Shopify API', 'Node.js', 'React', 'MongoDB', 'GraphQL'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp} 
            className="mb-4 relative"
            onMouseMove={(e) => handleMouseMove(e, 'header')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              Featured Work
            </span>
            {activeElement === 'header' && (
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                  left: mousePosition.x - 150,
                  top: mousePosition.y - 150,
                }}
                animate={{
                  x: mousePosition.x - 150,
                  y: mousePosition.y - 150,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              />
            )}
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            MERN Stack & Shopify Expert
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-indigo-100/80 max-w-2xl mx-auto"
          >
            Specializing in full-stack development with MERN stack and custom Shopify solutions, bringing Japanese precision to web development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={fadeInUp}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-2 rounded-full transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-zinc-900/50 text-indigo-300 hover:bg-indigo-500/20'
              }`}
              onMouseMove={(e) => handleMouseMove(e, `filter-${filter.id}`)}
              onMouseLeave={handleMouseLeave}
            >
              {filter.name}
              {activeElement === `filter-${filter.id}` && (
                <motion.div
                  className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                  }}
                  animate={{
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 100,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  handleMouseLeave();
                }}
                onMouseMove={(e) => handleMouseMove(e, `project-${project.id}`)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-indigo-100/70 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseMove={(e) => handleMouseMove(e, `live-${project.id}`)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {activeElement === `live-${project.id}` && (
                        <motion.div
                          className="absolute w-[150px] h-[150px] rounded-full pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                            left: mousePosition.x - 75,
                            top: mousePosition.y - 75,
                          }}
                          animate={{
                            x: mousePosition.x - 75,
                            y: mousePosition.y - 75,
                          }}
                          transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        />
                      )}
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseMove={(e) => handleMouseMove(e, `github-${project.id}`)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      {activeElement === `github-${project.id}` && (
                        <motion.div
                          className="absolute w-[150px] h-[150px] rounded-full pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                            left: mousePosition.x - 75,
                            top: mousePosition.y - 75,
                          }}
                          animate={{
                            x: mousePosition.x - 75,
                            y: mousePosition.y - 75,
                          }}
                          transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        />
                      )}
                    </motion.a>
                  </div>
                </div>

                {/* Project Card Light Effect */}
                {activeElement === `project-${project.id}` && (
                  <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                      left: mousePosition.x - 250,
                      top: mousePosition.y - 250,
                    }}
                    animate={{
                      x: mousePosition.x - 250,
                      y: mousePosition.y - 250,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  />
                )}

                {/* Hover Border Effect */}
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-indigo-500/20 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors duration-300 overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, 'view-more')}
            onMouseLeave={handleMouseLeave}
          >
            View All Projects
            {activeElement === 'view-more' && (
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                  left: mousePosition.x - 150,
                  top: mousePosition.y - 150,
                }}
                animate={{
                  x: mousePosition.x - 150,
                  y: mousePosition.y - 150,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 