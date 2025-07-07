import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-orange-500">Education</span>
          </h2>
          <p className="text-xl text-gray-300">
            My academic journey in computer science
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500"></div>

          <div className="relative">
            {/* Education Card */}
            <div className="flex items-start space-x-8 mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      B.Sc. (Hons) Computer Science
                    </h3>
                    <p className="text-lg text-orange-400 font-medium">
                      MGM University
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Currently Pursuing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Aurangabad, Maharashtra</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Pursuing a comprehensive computer science degree with focus on software development, 
                  data structures, algorithms, and emerging technologies. Actively engaged in practical 
                  projects involving cloud computing, containerization, and DevOps practices.
                </p>

                {/* Relevant Coursework */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Computer Networks',
                      'Operating Systems',
                      'Software Engineering',
                      'Web Development',
                      'Machine Learning'
                    ].map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Certifications */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300 mb-4">
                  Certifications & Learning
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Docker Containerization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Cloud Computing Fundamentals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Python Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">DevOps Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;