import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "Send An Text Message",
      description: "Instantly send SMS via a sleek Streamlit UI using Twilio's powerful API—perfect for alerts, notifications, or automation!",
      tech: ["Python", "Streamlit", "Twilio"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-twilio-streamlit-activity-7349285489289424896-I6cn",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/sms_call.py",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: "Make A Call",
      description: "Instantly trigger voice calls via a sleek Streamlit UI using Twilio's powerful API—perfect for alerts, notifications, or automation!",
      tech: ["Python", "Streamlit", "Twilio"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-twilio-streamlit-activity-7349285489289424896-I6cn",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/sms_call.py",
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: "Send An Email",
      description: "Instantly send emails via a clean web interface using smtplib and secure Gmail login, perfect for quick automation or demos!",
      tech: ["Python", "Streamlit"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-streamlit-emailautomation-activity-7348570954723192835-E0Ru",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/email.py",
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: "Create And Post a Message on LinkedIn",
      description: "Posts instantly with a sleek Streamlit-powered UI — secure, fast, and perfect for devs and marketers.",
      tech: ["Python", "Streamlit", "API"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-streamlit-linkedinapi-activity-7349366654239203329-fbq1",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/linkdein.py",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: "Post a message on Twitter (X)",
      description: "Post tweets instantly with a minimal Streamlit app powered by Tweepy — secure, real-time, and perfect for quick tests or automation.",
      tech: ["Python", "Streamlit", "API"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-streamlit-tweepy-activity-7349663804760203265-ru00",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/twitter.py",
      color: 'from-pink-500 to-red-500'
    },
    {
      title: "Post a message on Instagram",
      description: "Simulate Instagram DMs with a sleek Streamlit interface — a fun, API-free demo to prototype real-world messaging experiences in Python.",
      tech: ["Python", "Streamlit", "API"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-streamlit-instagramapi-activity-7349444897147363329-7GQx",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/insta.py",
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: "Send a WhatsApp Message",
      description: "Automate WhatsApp messaging with a Streamlit + Python app — send or schedule messages instantly via a clean web UI using pywhatkit.",
      tech: ["Python", "Streamlit", "API", "pywhatkit"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-streamlit-automation-activity-7348783127135211520-k0iN",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/whatsapp1.py",
      color: 'from-green-500 to-lime-500'
    },
    {
      title: "Automation panel using Streamlit",
      description: "⚙️ Execute scripts, view logs, restart services, and schedule tasks from a sleek web UI. A hands-on dive into Python automation and real-time system control!",
      tech: ["Python", "Streamlit", "API"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_streamlit-automation-python-activity-7350199882210562049-tu3L",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/autopanel.py",
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: "Automation panel using Gradio",
      description: "🚀 Run scripts, send emails, and schedule tasks from a clean web UI. Perfect for fast prototyping and streamlined automation!",
      tech: ["Python", "Gradio", "Subprocess", "Schedule"],
      category: "Python",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_automation-python-gradio-activity-7350320640664494083-ZEKA",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/autopanel_gradio.ipynb",
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: "Run any tool or technology in Docker",
      description: "🐳 Spinning up tools like NGINX in Docker is a game-changer — fast, isolated, and perfect for testing. One command and you're live on localhost:8080!",
      tech: ["nginx"],
      category: "Docker",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_docker-devops-containers-activity-7351287043315945473-o32C",
      githubUrl: "",
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: "Set up and configure the Apache webserver in Docker",
      description: "🐳 Deployed Apache in Docker after tackling real-world build errors — from missing files to path issues. Debugging each step taught me more than any tutorial ever could. Lessons lived, not just learned!",
      tech: ["Apache"],
      category: "Docker",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_devops-docker-apache-activity-7351827399094755330-nfgM",
      githubUrl: "",
      color: 'from-red-500 to-yellow-500'
    },
    {
      title: "Set up Docker inside Docker (DIND)",
      description: "🐳🔁 A powerful way to run Docker inside Docker for CI/CD, testing, and automation. Learned the setup, use cases, and where it fits in real-world workflows!",
      tech: ["DIND"],
      category: "Docker",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_docker-devops-dind-activity-7350780117310205953-9zEm",
      githubUrl: "",
      color: 'from-gray-500 to-blue-500'
    },
    {
      title: "Access the webcam and capture a photo",
      description: "🎥 Webcam Photo Capture App - instant snapshots, and downloads, all powered by modern browser APIs. A great dive into real-world JS and client-side creativity!",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      category: "JavaScript",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_webdevelopment-javascriptprojects-frontenddevelopment-activity-7350922703677083648-Ri8P",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/blob/main/photo.html",
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: "Send an Email",
      description: "📬 Built a clean and functional Email Sending API — perfect for contact forms, alerts, and automations",
      tech: ["Express.js", "Node.js", "CORS", "body-parser", "Nodemailer"],
      category: "JavaScript",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_nodejs-expressjs-nodemailer-activity-7351578811781574658-Q9-u",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/tree/main/email-backend",
      color: 'from-green-500 to-blue-500'
    },
    {
      title: "Record Video and Send via Email",
      description: "Webapp to record webcam videos in-browser and send them instantly via email — no uploads, no storage, just fast, secure delivery. Perfect for interviews, feedback, and support use cases!",
      tech: ["Python Flask", "JavaScript", "HTML5", "CSS", "Gmail SMTP"],
      category: "JavaScript",
      demoUrl: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_python-flask-javascript-activity-7351959583545872385-Ia3I",
      githubUrl: "https://github.com/dhananjay9322/summer_internship_projects/tree/main/video_email",
      color: 'from-orange-500 to-pink-500'
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
      </div>
    </section>
  );
};

export default Projects;