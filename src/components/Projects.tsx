import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Docker Menu-Based Application',
      description: 'Interactive command-line interface for Docker container management with automated deployment scripts and monitoring capabilities.',
      tech: ['Docker', 'Python', 'Shell'],
      category: 'DevOps',
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Based Docker Project using Gradio',
      description: 'Machine learning application containerized with Docker, featuring a user-friendly Gradio interface for AI model deployment and testing.',
      tech: ['Docker', 'Python', 'Gradio', 'AI/ML'],
      category: 'AI/ML',
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Electricity Consumption Predictor using Streamlit',
      description: 'Data-driven web application for predicting electricity consumption patterns with interactive visualizations and real-time analytics.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
      category: 'Data Science',
      demoUrl: '#',
      githubUrl: '#',
      color: 'from-green-500 to-emerald-500'
    },
    // NEW PROJECT CARD
    {
      title: 'Record Video on Button Click and Send via Email',
      description: '🎥 Web App to Record & Email Videos Instantly! Built with Flask & JavaScript, this app lets users record videos in-browser and send them via email—no uploads or storage needed!',
      tech: ['Flask', 'JavaScript', 'Docker'],
      category: 'JavaScript, DevOps',
      demoUrl: 'https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-flask-javascript-activity-7351959583545872385-Ia3I',
      githubUrl: 'https://github.com/dhananjay9322/summer_internship_projects/tree/main/video_email',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filters = ['All', 'DevOps', 'AI/ML', 'Data Science'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300">
            Showcasing my work in DevOps, AI, and web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Category Tags */}
                {project.category && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.split(',').map(cat => (
                      <span
                        key={cat.trim()}
                        className="px-3 py-1 bg-orange-600/80 text-white rounded-full text-xs font-semibold"
                      >
                        {cat.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            GitHub <span className="text-orange-500">Activity</span>
          </h3>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">GitHub Contributions Heatmap</p>
            <div className="bg-gray-900 rounded-lg p-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=dhananjay9322&show_icons=true&theme=dark&bg_color=1a1a1a&text_color=ffffff&icon_color=f97316"
                alt="GitHub Stats"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;