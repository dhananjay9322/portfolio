import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  color: string;
}

const EnhancedProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
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

  const filters = ['All', 'Python', 'Docker', 'JavaScript'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Featured <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-mono ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedFilter}`}
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-transparent transition-all duration-500 relative">
                  {/* Gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
                        `linear-gradient(225deg, ${project.color.split(' ')[3]}, ${project.color.split(' ')[1]})`,
                        `linear-gradient(45deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium font-mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-xs font-semibold font-mono`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{
                          x: [
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%'
                          ],
                          y: [
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%'
                          ],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className={`w-full h-2 bg-gradient-to-r ${selectedProject.color} rounded-full mb-6`} />
              
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Demo</span>
                </motion.a>
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EnhancedProjects;