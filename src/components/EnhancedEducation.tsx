import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EnhancedEducation: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineVariants = {
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
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering',
    'Web Development',
    'Machine Learning'
  ];

  const learningTopics = [
    'Docker Containerization',
    'Cloud Computing Fundamentals',
    'Python Programming',
    'DevOps Practices',
    'Jenkins',
    'Kubernetes',
    'Flutter'
  ];

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Animated blueprint background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 30px 30px, 30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300">
            My academic journey in computer science
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-cyan-500 to-purple-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div 
            className="relative"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Education Card */}
            <motion.div 
              className="flex items-start space-x-8 mb-12"
              variants={itemVariants}
            >
              <motion.div 
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg relative z-10"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-500 group relative overflow-hidden"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(236, 72, 153, 0.1))',
                      'linear-gradient(225deg, rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.1))',
                      'linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(236, 72, 153, 0.1))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 font-mono">
                        B.Sc. (Hons) Computer Science
                      </h3>
                      <p className="text-lg text-orange-400 font-medium">
                        MGM University
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2 text-gray-400 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">Currently Pursuing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">Aurangabad, Maharashtra</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Pursuing a comprehensive computer science degree with focus on software development, 
                    data structures, algorithms, and emerging technologies. Actively engaged in practical 
                    projects involving cloud computing, containerization, and DevOps practices.
                  </p>

                  {/* Relevant Coursework */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 font-mono flex items-center">
                      <Award className="w-5 h-5 mr-2 text-cyan-400" />
                      Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {coursework.map((course, index) => (
                        <motion.div
                          key={course}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center space-x-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                          <span className="text-gray-300 text-sm font-mono">{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Learning Section */}
            <motion.div 
              className="flex items-start space-x-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg relative z-10"
                whileHover={{ scale: 1.1, rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                      'linear-gradient(225deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                      'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-6 font-mono">
                    Learning
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {learningTopics.map((topic, index) => (
                      <motion.div
                        key={topic}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                      >
                        <motion.div 
                          className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span className="text-gray-300 font-mono">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedEducation;