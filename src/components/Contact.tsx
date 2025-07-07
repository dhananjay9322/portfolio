import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with EmailJS or similar service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">kkharatdhananjay@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">932230000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Aurangabad, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What People Say</h3>
              <div className="space-y-4">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-500 font-medium">Client Feedback</span>
                  </div>
                  <p className="text-gray-300 italic mb-3">
                    "Dhananjay's expertise in Docker and DevOps practices helped streamline our deployment process significantly. His attention to detail and problem-solving skills are exceptional."
                  </p>
                  <p className="text-sm text-gray-400">- Project Collaborator</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-blue-500 font-medium">Peer Review</span>
                  </div>
                  <p className="text-gray-300 italic mb-3">
                    "Working with Dhananjay on cloud computing projects has been a great experience. His passion for technology and continuous learning is truly inspiring."
                  </p>
                  <p className="text-sm text-gray-400">- Fellow Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;