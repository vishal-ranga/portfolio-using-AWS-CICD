import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink, Code, Database, Cloud, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'AWS', level: 80, category: 'Cloud' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'CI/CD', level: 70, category: 'DevOps' },
    { name: 'Linux', level: 85, category: 'Systems' },
    { name: 'Bash Scripting', level: 80, category: 'Programming' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'Azure', level: 70, category: 'Cloud' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Networking', level: 75, category: 'Infrastructure' }
  ];

  const projects = [
    {
      title: 'Cloud-Based File Storage System',
      tech: 'AWS S3, EC2, Python, Linux',
      date: 'Jan 2024 – Mar 2024',
      description: 'Developed secure cloud storage platform with upload, download, and sharing capabilities using AWS S3 for scalable storage with versioning and backup support.',
      highlights: ['AWS S3 Integration', 'IAM Security', 'CloudWatch Monitoring']
    },
    {
      title: 'Python Music Player',
      tech: 'Python, Tkinter, Pytube',
      date: 'Oct 2023 – Dec 2023',
      description: 'Created GUI-based music player supporting local audio and YouTube audio extraction with playlist management and optimized memory usage.',
      highlights: ['YouTube Integration', 'GUI Development', 'Memory Optimization']
    },
    {
      title: 'Weather Forecasting Website',
      tech: 'HTML, CSS, JavaScript, API',
      date: 'Aug 2023 – Sep 2023',
      description: 'Developed responsive weather application using OpenWeatherMap API with caching mechanisms to reduce API calls and improve performance.',
      highlights: ['API Integration', 'Responsive Design', 'Performance Optimization']
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Microsoft Certified: Azure AI Fundamentals',
    'Oracle Cloud Infrastructure 2024 DevOps Professional',
    'AWS Academy Graduate – Cloud Foundations',
    'Python for Data Science – IIT Madras'
  ];

  const timeline = [
    { year: '2024-2026', title: 'Master of Computer Applications', institution: 'The NorthCap University', status: 'Pursuing' },
    { year: '2021-2024', title: 'Bachelor of Computer Applications', institution: 'Gurugram University', status: 'Completed' },
    { year: '2024', title: 'AWS Cloud Practitioner Certification', institution: 'Amazon Web Services', status: 'Certified' },
    { year: '2024', title: 'Azure AI Fundamentals', institution: 'Microsoft', status: 'Certified' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'timeline', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vishal Ranga
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Timeline', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-bold">
              VR
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vishal Ranga
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            Cloud Engineer | AWS Certified | DevOps Enthusiast
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable cloud solutions and automating infrastructure
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="border border-blue-500 hover:bg-blue-500/20 px-8 py-3 rounded-full transition-all">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300">
                AWS Certified Cloud Practitioner and Azure AI Fundamentals certified professional with hands-on experience in cloud infrastructure, automation, and Linux system operations.
              </p>
              <p className="text-lg text-slate-300">
                Skilled in deploying scalable solutions using AWS services including S3, EC2, IAM, and serverless architectures. Strong experience with Python scripting, containerization, CI/CD workflows, and cloud security best practices.
              </p>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-800/50 p-4 rounded-lg">
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-sm text-blue-400">{skill.category}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right text-sm text-slate-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                    <Award size={24} />
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-500/30 mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-slate-800/50 p-6 rounded-lg">
                  <div className="text-blue-400 font-semibold mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.institution}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-600/30 rounded-full text-sm">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Code className="text-blue-400" size={32} />
                    <span className="text-xs text-slate-400">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-blue-400 mb-4">{project.tech}</p>
                  <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hidx) => (
                      <span key={hidx} className="text-xs bg-blue-600/30 px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <a href="tel:9310228519" className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <Phone size={24} />
                  <span>+91 9310228519</span>
                </a>
                <a href="mailto:vishalranga222@gmail.com" className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                  <span>vishalranga222@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/vishal-ranga" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                  <span>linkedin.com/in/vishal-ranga</span>
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 Vishal Ranga. Built with AWS, S3, and automation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;