import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: '🛒 E-Commerce Storefront',
    description:
      'Built with React, Tailwind CSS, Context API, and localStorage. Features cart persistence, product listings, and checkout simulation.',
    image: 'https://via.placeholder.com/400x200?text=E-Commerce+Project',
    github: 'https://github.com/yourusername/ecommerce-storefront',
    demo: 'https://your-ecommerce-demo.netlify.app',
  },
  {
    title: '💼 Portfolio Website',
    description:
      'Responsive personal portfolio with interactive resume, contact form, and SEO optimization. Built using React and Tailwind CSS.',
    image: 'https://via.placeholder.com/400x200?text=Portfolio+Website',
    github: 'https://github.com/yourusername/portfolio-website',
    demo: 'https://your-portfolio.netlify.app',
  },
  {
    title: '📦 Task Manager App',
    description:
      'A simple task manager built with React and Tailwind. Features add/delete tasks, localStorage persistence, and responsive layout.',
    image: 'https://via.placeholder.com/400x200?text=Task+Manager+App',
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://your-task-manager.netlify.app',
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">🚀 My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;