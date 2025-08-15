import React, { useState, useRef } from 'react';
import { ExternalLink, X, Code, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import universityStatsboardScreenshot from './Screenshot 2025-05-21 114447.png';
import portfolioimg from './Screenshot 2025-05-21 120356.png';
import pricingimg from './Screenshot 2025-05-21 122019.png';

const projects = [
  {
      id: 1,
      title: 'House Price Prediction',
      description: 'A machine learning project to predict house prices using Linear Regression and Random Forest Regression models.',
      image: 'https://todaysconveyancer.co.uk/wp-content/uploads/2018/07/price-index.jpg',
      tags: ['Python', 'Pandas ', 'Numpy', 'Scikit-learn', 'Seaborn', 'Matplotlib', 'Flask ', 'Joblib'],
      demoLink: 'https://house-price-prediction-l6k4.onrender.com',
      codeLink: 'https://github.com/Rahul-Nakka-23/House-price-prediction',
      category: 'aiml',
      details: 'The model is trained on a real-world dataset sourced from Kaggle and deployed via a Flask web application for user interaction.The key features are :- Predicts house prices based on multiple features Implements both Linear and Random Forest regression models, Performs extensive data preprocessing and encoding, Evaluates model performance with standard regression metrics, Deploys the trained model using Flask, Visualizes data and insights with Seaborn and Matplotlib'
    },
    {
      id: 2,
      title: 'Movie Recommendation And Rating Prediction System ',
      description: 'Movie Recommendation and Rating Prediction Web App is a great project that combines web development, machine learning, and data science',
      image: 'https://th.bing.com/th/id/OIP.5sQ452R5nempCuEL0yxRzAHaEJ?rs=1&pid=ImgDetMain',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Movie-Recommendation-Rating-Prediction-System',
      category: 'aiml',
      details: 'This project is a web-based movie recommendation system that provides personalized movie suggestions and predicts user ratings based on historical preferences and behavior. It combines machine learning algorithms with an intuitive user interface to enhance user engagement and movie discovery.The web app enables users to register, log in, explore movies, rate them, and receive tailored recommendations. It uses collaborative filtering to analyze user-movie interactions and suggest films liked by similar users, and content-based filtering to recommend movies similar to the ones a user has rated highly. A rating prediction feature forecasts how a user would likely rate a movie they haven’t seen yet.'
    },

  {
    id: 3,
    title: 'University Statsboard',
    description:
      'A statistics dashboard for university data visualization with charts and analytics.',
    image: universityStatsboardScreenshot,
    tags: ['React', 'Chart.js', 'API'],
    demoLink: '#',
    codeLink: '#',
    category: 'web',
    details:
      'Built with React and Chart.js, this project visualizes university data in interactive charts. The application fetches data from APIs and dynamically updates graphs for better insights.',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    image: portfolioimg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    codeLink: '#',
    category: 'web',
    details:
      'This responsive portfolio site is designed with HTML, CSS, and JavaScript to highlight personal achievements and work. It features smooth animations and a contact form.',
  },
  {
    id: 5,
    title: 'Pricing Panel',
    description: 'A responsive pricing panel for product or service plans.',
    image: pricingimg,
    tags: ['HTML', 'CSS', 'Flexbox'],
    demoLink: '#',
    codeLink: '#',
    category: 'web',
    details:
      'This project implements a clean and modern pricing table using Flexbox layout. It adapts to different screen sizes and is easy to customize.',
  },
  {
      id: 6,
      title: 'Density Based Traffic Lights',
      description: 'This project implements a smart traffic light system using ultrasonic sensors to dynamically manage traffic signals based on vehicle presence. The system uses LEDs to simulate traffic lights and buttons for manual overrides.',
      tags: ['Arduino IDE', 'Ultrasonic sensors', 'LEDs', 'Arduino-compatible microcontroller'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Density-based-traffic-lights',
      category: 'core',
      details: 'A density-based traffic light system using IoT devices leverages ultrasonic sensors connected to a microcontroller like Arduino to detect the number of vehicles at an intersection. These sensors are placed at specific points on the road to measure the distance between the sensor and the nearest object (vehicle), allowing the system to estimate vehicle count or queue length in real time. Based on this data, the Arduino processes the input and adjusts the traffic signal duration dynamically—longer green lights for roads with higher vehicle density and shorter for those with less traffic. This smart traffic management system reduces unnecessary waiting time, improves fuel efficiency, and helps ease urban congestion.'
    },

  {
    id: 7,
    title: 'Calculator Using DOSBox',
    description:
      'A simple calculator program built for DOS environment using Assembly language.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DOSBox_icon.svg/1200px-DOSBox_icon.svg.png',
    tags: ['Assembly', 'DOSBox', 'x86'],
    demoLink: '#',
    codeLink: 'https://github.com/Rahul-Nakka-23/Calculator-Dosbox',
    category: 'core',
    details:
      'This calculator program performs basic arithmetic operations (addition, subtraction, multiplication, division) in DOS environment using x86 Assembly. It runs inside DOSBox emulator for compatibility.',
  },
  {
    id: 8,
    title: 'Radar Like Object Detection System',
    description:
      'An ultrasonic radar system using Arduino, servo motor, and ultrasonic sensor with real-time visualization.',
    image:
      'https://cdn3.vectorstock.com/i/1000x1000/24/67/radar-blip-detection-of-objects-on-the-vector-18662467.jpg',
    tags: [
      'Arduino Uno',
      'Ultrasonic Sensor (HC-SR04)',
      'Servo Motor (SG90)',
      'Processing',
    ],
    demoLink: '#',
    codeLink: 'https://github.com/Rahul-Nakka-23/Radar-Detection-System',
    category: 'core',
    details:
      'This project creates a radar-like object detection system using Arduino Uno, HC-SR04 ultrasonic sensor, and a servo motor. The servo sweeps the sensor from 0° to 180°, measuring distances. Data is sent to a Processing sketch to create a real-time radar display on screen. Applications include robotics, security systems, and obstacle detection.',
  },
  {
      id: 9,
      title: 'Image Processing ',
      description: 'This projects contains a simple MATLAB script that reads an image, converts it to grayscale, and displays both the original and grayscale images side by side.',
      image: processimg,
      tags: ['MATLAB'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Image-processing-',
      category: 'core',
      details: 'This project demonstrates a basic yet essential image processing technique — converting a color image to grayscale using MATLAB. The program reads a colored image, processes it to remove color information using the rgb2gray() function, and then displays both the original and the grayscale images side by side for comparison.The purpose of this project is to illustrate how color data can be simplified for tasks such as edge detection, object recognition, and further image analysis. Grayscale images reduce computational load and are often used in the initial stages of computer vision and machine learning pipelines.',
    },

];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Development' },
  { id: 'core', name: 'Core' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { ref, inView } = useInView();

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const parseDetailsForRendering = (details: string) => {
    const bulletPointRegex = /•\s(.*?)(?=\n|$)/g;
    const bulletPoints = details.match(bulletPointRegex);
    const plainText = details.replace(bulletPointRegex, '').trim();

    return (
      <>
        {plainText && <p className="mb-2">{plainText}</p>}
        {bulletPoints && (
          <ul className="list-disc ml-5 space-y-1">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point.replace('• ', '')}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Projects
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent border-gray-400 text-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Eye className="w-4 h-4 mr-1" /> View
                  </button>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                      <Code className="w-4 h-4 mr-1" /> Code
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== '#' && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full relative p-6 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <div className="mb-4">
                {parseDetailsForRendering(selectedProject.details)}
              </div>
              <div className="flex space-x-4">
                {selectedProject.codeLink && (
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
                  >
                    <Code className="w-4 h-4 mr-1" /> Code
                  </a>
                )}
                {selectedProject.demoLink && selectedProject.demoLink !== '#' && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
