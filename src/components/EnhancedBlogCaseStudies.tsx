import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Post {
  title: string;
  description: string;
  tags: string[];
  type: 'Blog' | 'Case Study';
  readLink: string;
  githubLink?: string;
}

interface EnhancedBlogCaseStudiesProps {
  postsData: Post[];
}

const EnhancedBlogCaseStudies: React.FC<EnhancedBlogCaseStudiesProps> = ({ postsData }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const FILTERS = ['All', 'Blogs', 'Case Studies'];

  const filteredPosts =
    selectedFilter === 'All'
      ? postsData
      : postsData.filter(post =>
          selectedFilter === 'Blogs'
            ? post.type === 'Blog'
            : post.type === 'Case Study'
        );

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

  const getTypeColor = (type: string) => {
    return type === 'Blog' 
      ? 'from-blue-500 to-cyan-500' 
      : 'from-orange-500 to-pink-500';
  };

  const getTypeIcon = (type: string) => {
    return type === 'Blog' ? '📝' : '📚';
  };

  return (
    <section id="blogs" className="py-20 px-4 relative overflow-hidden">
      {/* Animated terminal background */}
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
              repeating-linear-gradient(
                0deg,
                rgba(34, 197, 94, 0.1) 0px,
                transparent 1px,
                transparent 40px,
                rgba(34, 197, 94, 0.1) 41px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(59, 130, 246, 0.1) 0px,
                transparent 1px,
                transparent 40px,
                rgba(59, 130, 246, 0.1) 41px
              )
            `
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-mono">
            <span className="text-white">📝 Blogs</span>{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              & Case Studies
            </span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {FILTERS.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center gap-2 font-mono ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-orange-500/40 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-orange-400/30 hover:shadow-lg border border-gray-600'
              }`}
            >
              <span className="text-lg">
                {filter === 'All' ? '🗂️' : filter === 'Blogs' ? '📝' : '📚'}
              </span>
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={`${post.title}-${selectedFilter}-${idx}`}
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-500 relative h-full flex flex-col">
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(post.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${getTypeColor(post.type).split(' ')[1]}, ${getTypeColor(post.type).split(' ')[3]})`,
                        `linear-gradient(225deg, ${getTypeColor(post.type).split(' ')[3]}, ${getTypeColor(post.type).split(' ')[1]})`,
                        `linear-gradient(45deg, ${getTypeColor(post.type).split(' ')[1]}, ${getTypeColor(post.type).split(' ')[3]})`
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    {/* Type Badge */}
                    <div className="mb-3 flex items-center gap-2">
                      <motion.span 
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(post.type)} text-white font-mono`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {getTypeIcon(post.type)} {post.type}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-mono">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium font-mono"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <motion.a
                        href={post.readLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>📖 Read</span>
                      </motion.a>
                      {post.githubLink && post.githubLink.trim() !== '' && (
                        <motion.a
                          href={post.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all duration-300 shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          <span>🔗 GitHub</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400 rounded-full"
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
                          delay: i * 0.3
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
    </section>
  );
};

export default EnhancedBlogCaseStudies;