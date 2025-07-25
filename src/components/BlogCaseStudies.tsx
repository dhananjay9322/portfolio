import React, { useState } from 'react';

interface Post {
  title: string;
  description: string;
  tags: string[];
  type: 'Blog' | 'Case Study';
  readLink: string;
  githubLink?: string;
}

interface BlogCaseStudiesProps {
  postsData: Post[];
}

const FILTERS = ['All', 'Blogs', 'Case Studies'];

const typeBadgeColor = (type: string) =>
  type === 'Blog' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white';

const BlogCaseStudies: React.FC<BlogCaseStudiesProps> = ({ postsData }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPosts =
    selectedFilter === 'All'
      ? postsData
      : postsData.filter(post =>
          selectedFilter === 'Blogs'
            ? post.type === 'Blog'
            : post.type === 'Case Study'
        );

  return (
    <section id="blogs" className="py-20 px-4 relative bg-[#181924] overflow-hidden">
      {/* Subtle stars/particles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* You can use a CSS background or a simple SVG for stars/particles */}
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">📝 Blogs</span> <span className="text-orange-500">& Case Studies</span>
          </h2>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center gap-2
                ${
                  selectedFilter === filter
                    ? 'bg-orange-500 text-white shadow-orange-500/40 shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-orange-400/30 hover:shadow-lg'
                }
                `}
            >
              <span className="text-lg">{filter === 'All' ? '🗂️' : filter === 'Blogs' ? '📝' : '📚'}</span>
              {filter}
            </button>
          ))}
        </div>
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <div
              key={post.title + idx}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeBadgeColor(post.type)}`}>{post.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{post.description}</p>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={post.readLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm shadow-md"
                  >
                    <span>📖 Read</span>
                  </a>
                  {post.githubLink && post.githubLink.trim() !== '' && (
                    <a
                      href={post.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm shadow-md"
                    >
                      <span>🔗 GitHub</span>
                    </a>
                  )}
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

export default BlogCaseStudies; 