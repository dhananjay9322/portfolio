import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface MajorProject {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  color: string;
  image?: string;
}

const MajorProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const majorProjects: MajorProject[] = [
    {
      title: "CI/CD Pipeline for Flask Application (Jenkins & Docker)",
      description:
        "The DevoOps Project is a comprehensive DevOps pipeline designed to automate the deployment of a Python Flask application. Utilizing Jenkins for continuous integration and Docker for containerization, this project demonstrates the seamless integration of development and operations, ensuring efficient and reliable application delivery.",
      tech: [
        "Jenkins",
        "Git",
        "Docker",
        "Python",
        "Flask"
      ],
      demoUrl:
        "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_devops-ci-jenkins-activity-7354772324555870208-R3rL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY",
      githubUrl: "https://github.com/dhananjay9322/devoops.project",
      color: 'from-blue-500 to-cyan-500',
      image: "/cicd-pipeline.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="major-projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Major <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Significant projects that demonstrate advanced technical skills and real-world problem solving
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {majorProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Project content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        </motion.div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white font-mono">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                        
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project visualization */}
                    <div className="lg:w-80 lg:flex-shrink-0">
                      <motion.div
                        className={`w-full h-48 lg:h-64 rounded-2xl bg-gray-900/60 flex items-center justify-center shadow-2xl overflow-hidden border border-gray-700`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                            <div className="text-white text-center p-6">
                              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                              <p className="text-sm opacity-90">Major Project</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: 0 
                      }}
                      animate={{ 
                        y: [null, '-30px'],
                        opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: i * 0.3 
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MajorProjects;
