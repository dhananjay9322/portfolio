import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Container, Code, Database, Server, Cpu } from 'lucide-react';

const EnhancedSkills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: 'Cloud Computing',
      icon: Cloud,
      color: 'from-blue-400 to-blue-600',
      description: 'AWS, Google Cloud, Azure deployment and management',
      level: 85
    },
    {
      name: 'DevOps',
      icon: Server,
      color: 'from-green-400 to-green-600',
      description: 'CI/CD, Infrastructure as Code, Monitoring',
      level: 90
    },
    {
      name: 'C',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      description: 'System programming and low-level optimization',
      level: 80
    },
    {
      name: 'C++',
      icon: Cpu,
      color: 'from-indigo-400 to-indigo-600',
      description: 'Object-oriented programming and competitive coding',
      level: 75
    },
    {
      name: 'Python',
      icon: Code,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Automation, web scraping, and data analysis',
      level: 95
    },
    {
      name: 'Docker',
      icon: Container,
      color: 'from-cyan-400 to-cyan-600',
      description: 'Containerization and orchestration',
      level: 88
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%'
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
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredSkill === skill.name ? { 
                    background: [
                      `linear-gradient(45deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`,
                      `linear-gradient(225deg, ${skill.color.split(' ')[3]}, ${skill.color.split(' ')[1]})`,
                      `linear-gradient(45deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white font-mono">{skill.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-4">
                    {skill.description}
                  </p>

                  {/* Skill level indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover effect particles */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%',
                          y: Math.random() * 100 + '%',
                          opacity: 0 
                        }}
                        animate={{ 
                          y: [null, '-20px'],
                          opacity: [0, 1, 0] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2 
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSkills;