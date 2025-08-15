import React, { useState, useRef } from 'react';
import { ExternalLink, X, Code, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import universityStatsboardScreenshot from './Screenshot 2025-05-21 114447.png';
import portfolioimg from './Screenshot 2025-05-21 120356.png';
import pricingimg from './Screenshot 2025-05-21 122514.png';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'University Stats Board',
      description:
        'A real-time dashboard for visualizing university data with interactive charts and statistics.',
      image: universityStatsboardScreenshot,
      technologies: ['React', 'Chart.js', 'TailwindCSS'],
      github: 'https://github.com/example/university-stats-board',
      live: 'https://university-stats-board.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio website to showcase my skills, projects, and experience.',
      image: portfolioimg,
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/example/portfolio-website',
      live: 'https://my-portfolio.vercel.app',
    },
    {
      title: 'Pricing Panel',
      description:
        'A dynamic pricing panel with animations and responsive design for service packages.',
      image: pricingimg,
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      github: 'https://github.com/example/pricing-panel',
      live: 'https://pricing-panel.vercel.app',
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      ref={ref}
      className={`py-20 transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 dark:bg-gray-800"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal} // close on backdrop click
        >
          <div
            className="relative w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="object-cover w-full mb-6 rounded-lg max-h-96"
            />
            <h3 className="mb-4 text-2xl font-bold">{selectedProject.title}</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {selectedProject.description}
            </p>
            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Code className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
