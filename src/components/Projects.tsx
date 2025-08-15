import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, X, Code, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import universityStatsboardScreenshot from './Screenshot 2025-05-21 114447.png';
import portfolioimg from './Screenshot 2025-05-21 120356.png';
import pricingimg from './Screenshot 2025-05-21 122019.png';
import processimg from './Screenshot 2025-05-21 123111.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
  details: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Cleanup scroll lock on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const projects: Project[] = [
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
      title: 'Dashboard',
      description: 'A dashboard built with HTML and CSS provides a structured and visually appealing interface to display key information and statistics in one place. It uses layout techniques, colors, and styling to organize data panels, charts, and navigation elements for easy user interaction.',
      image: universityStatsboardScreenshot,
      tags: ['HTML', 'CSS'],
      demoLink: 'https://rahul-nakka-23.github.io/Dashboard/',
      codeLink: 'https://github.com/Rahul-Nakka-23/Dashboard',
      category: 'frontend',
      details: 'A responsive dashboard using HTML and CSS is a web interface designed to display important data and controls in an organized and visually appealing manner, while adapting smoothly to different screen sizes such as desktops, tablets, and smartphones. It typically includes components like a navigation sidebar, top header, information cards, and data tables, all arranged using flexible layout techniques like CSS Flexbox or Grid. Media queries are used to adjust styles and layout based on the device’s screen width, ensuring optimal readability and usability. The dashboard may also feature interactive elements such as hover effects and smooth transitions to enhance the user experience.'

    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'A demo portfolio webiste desinged using HTML and CSS',
      image: portfolioimg,
      tags: ['HTML', 'CSS'],
      demoLink: 'https://rahul-nakka-23.github.io/Portfolio-demo/',
      codeLink: 'https://github.com/Rahul-Nakka-23/Portfolio-demo',
      category: 'frontend',
      details: 'A responsive portfolio website using HTML and CSS is a web interface designed to display personal information to showcase you skills and projects with a unique style '
    },
    {
      id: 5,
      title: 'Density Based Traffic Lights',
      description: 'This project implements a smart traffic light system using ultrasonic sensors to dynamically manage traffic signals based on vehicle presence. The system uses LEDs to simulate traffic lights and buttons for manual overrides.',
      tags: ['Arduino IDE', 'Ultrasonic sensors', 'LEDs', 'Arduino-compatible microcontroller'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Density-based-traffic-lights',
      category: 'core',
      details: 'A density-based traffic light system using IoT devices leverages ultrasonic sensors connected to a microcontroller like Arduino to detect the number of vehicles at an intersection. These sensors are placed at specific points on the road to measure the distance between the sensor and the nearest object (vehicle), allowing the system to estimate vehicle count or queue length in real time. Based on this data, the Arduino processes the input and adjusts the traffic signal duration dynamically—longer green lights for roads with higher vehicle density and shorter for those with less traffic. This smart traffic management system reduces unnecessary waiting time, improves fuel efficiency, and helps ease urban congestion.'
    },
    {
      id: 6,
      title: 'Pricing Panel Project',
      description: 'This project showcases the prices of the some items',
      image: pricingimg,
      tags: ['HTML', 'CSS'],
      demoLink: 'https://rahul-nakka-23.github.io/Pricing-panel-project/',
      codeLink: 'https://github.com/Rahul-Nakka-23/Pricing-panel-project',
      category: 'frontend',
      details: 'This project is a responsive pricing panel designed using HTML and CSS, showcasing three different service tiers: Personal, Small Team, and Enterprise. Each panel presents a clean and visually structured layout that highlights the pricing, features, and a call-to-action button for each plan. It is fully responsive, ensuring the layout adapts seamlessly across desktop, tablet, and mobile screens.Each card features a modern design with illustrations, a feature list, bold pricing display, and action buttons such as "Sign Up" or "Free Trial." CSS Flexbox/Grid is used to arrange the cards side-by-side, while media queries ensure responsiveness. The visual design uses light backgrounds with a prominent blue accent to maintain clarity and professionalism.',
    },
    {
      id: 7,
      title: 'Image Processing ',
      description: 'This projects contains a simple MATLAB script that reads an image, converts it to grayscale, and displays both the original and grayscale images side by side.',
      image: processimg,
      tags: ['MATLAB'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Image-processing-',
      category: 'core',
      details: 'This project demonstrates a basic yet essential image processing technique — converting a color image to grayscale using MATLAB. The program reads a colored image, processes it to remove color information using the rgb2gray() function, and then displays both the original and the grayscale images side by side for comparison.The purpose of this project is to illustrate how color data can be simplified for tasks such as edge detection, object recognition, and further image analysis. Grayscale images reduce computational load and are often used in the initial stages of computer vision and machine learning pipelines.',
    },
    {
      id: 8,
      title: 'Calculator Using Dosbox',
      description: 'This is a simple assembly program that performs basic arithmetic operations (addition, subtraction, multiplication, and division) on two single-digit numbers. The program takes user input for two numbers and the operation to perform, then displays the result.',
      image: 'https://www.maketecheasier.com/assets/uploads/2019/12/dosbox-opening-screen-user-interface.jpg',
      tags: ['Assembly Language (x86 architecture)', 'MASM ', 'DOS Interrupts (INT 21h) '],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Calculator',
      category: 'core',
      details: 'This project is a simple calculator written in x86 assembly language that performs basic arithmetic operations—addition, subtraction, multiplication, and division—on two single-digit numbers. It utilizes DOS interrupts to manage user input and output via the terminal. The program prompts the user to enter the first number, select an arithmetic operator (`+`, `-`, `*`, `/`), and then enter the second number. Using interrupt `INT 21h`, it reads the user’s input, processes the selected operation, and displays the result. This project showcases key assembly language concepts such as register manipulation (using `AL`, `BL`, `CL`, `DL`), conditional branching with instructions like `CMP`, `JE`, and `JMP`, ASCII to numeric conversion, and subroutine handling through `CALL` and `RET`. It serves as a foundational exercise in understanding low-level programming and control flow.',
    },
    {
      id: 9,
      title: 'Radar Like Object Detection System',
      description: 'This project demonstrates the implementation of an ultrasonic radar system using an Arduino microcontroller, a servo motor, and an ultrasonic sensor. The radar's data is visualized in real-time using Processing.',
      image: "https://cdn3.vectorstock.com/i/1000x1000/24/67/radar-blip-detection-of-objects-on-the-vector-18662467.jpg",
      tags: ['Arduino Uno (or compatible)','Ultrasonic Sensor (HC-SR04)','Servo Motor (e.g., SG90)'],
      demoLink: '#',
      codeLink: 'https://github.com/Rahul-Nakka-23/Radar-Detection-System',
      category: 'core',
      details: 'Arduino Code:Controls a servo motor to rotate the ultrasonic sensor.Measures distance using an ultrasonic sensor.Sends angle and distance data to the serial port.Processing Code:Visualizes radar sweeps and detected objects in a graphical interface.Displays real-time angle and distance readings.Indicates whether objects are "In Range" or "Out of Range."',
    },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'aiml', name: 'Machine Learning' },
    { id: 'core', name: 'Core' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const parseDetailsForRendering = (detailsString: string) => {
    const keyFeaturesMarker = "The key features are :- ";
    const markerIndex = detailsString.indexOf(keyFeaturesMarker);

    if (markerIndex === -1) {
      return { intro: detailsString, features: [] };
    }

    const introText = detailsString.substring(0, markerIndex + keyFeaturesMarker.length).trim();
    const featuresOnlyString = detailsString.substring(markerIndex + keyFeaturesMarker.length);

    const featureItems = featuresOnlyString
      .split(/ ✅ |,(?=\s\w)|(?=\sImplements)|(?=\sPerforms)|(?=\sEvaluates)|(?=\sDeploys)|(?=\sVisualizes)/g)
      .map(feature => feature.trim().replace(/^✅\s*/, ''))
      .filter(feature => feature.length > 0);

    return { intro: introText, features: featureItems };
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded transition-all duration-1000 delay-200" style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and opportunity for growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <Eye size={18} />
                        <span className="sr-only">View Demo</span>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <Code size={18} />
                        <span className="sr-only">View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="w-full py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <X size={18} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              {parseDetailsForRendering(selectedProject.details).intro && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">{parseDetailsForRendering(selectedProject.details).intro}</p>
              )}
              {parseDetailsForRendering(selectedProject.details).features.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {parseDetailsForRendering(selectedProject.details).features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              <div className="flex justify-end mt-6 space-x-4">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Demo
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
