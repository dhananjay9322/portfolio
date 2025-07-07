import React, { useState } from 'react';
import { Cloud, Container, Code, Database, Server, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: 'Cloud Computing',
      icon: Cloud,
      color: 'from-blue-400 to-blue-600',
      description: 'AWS, Google Cloud, Azure deployment and management'
    },
    {
      name: 'DevOps',
      icon: Server,
      color: 'from-green-400 to-green-600',
      description: 'CI/CD, Infrastructure as Code, Monitoring'
    },
    {
      name: 'C',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      description: 'System programming and low-level optimization'
    },
    {
      name: 'C++',
      icon: Cpu,
      color: 'from-indigo-400 to-indigo-600',
      description: 'Object-oriented programming and competitive coding'
    },
    {
      name: 'Python',
      icon: Code,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Automation, web scraping, and data analysis'
    },
    {
      name: 'Docker',
      icon: Container,
      color: 'from-cyan-400 to-cyan-600',
      description: 'Containerization and orchestration'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500/30 transition-all duration-300"></div>
              </div>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-20 whitespace-nowrap">
                  {skill.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;