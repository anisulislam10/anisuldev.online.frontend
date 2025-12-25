import React from 'react';
import logo from './../../public/anisuldev.online_logo_light.png';

import { 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowUp,
  Code,
  Coffee,
  Calendar,
  MapPin,
  ExternalLink,
  BookOpen,
  FileCode,
  Phone,
  Send
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'React Native Apps', icon: '📱' },
    { name: 'Web Applications', icon: '🌐' },
    { name: 'Backend APIs', icon: '⚙️' },
    { name: 'Database Design', icon: '🗃️' },
    { name: 'VPS Deployment', icon: '🚀' },
    { name: 'Vercel Deployment', icon: '▲' }
  ];

  const resources = [
    { name: 'Documentation', icon: <BookOpen className="w-4 h-4" />, href: '#docs' },
    { name: 'GitHub Profile', icon: <Github className="w-4 h-4" />, href: 'https://github.com/anisul-islam' },
    { name: 'Resume/CV', icon: <FileCode className="w-4 h-4" />, href: '/resume.pdf' },
    { name: 'Tech Stack', icon: <Code className="w-4 h-4" />, href: '#services' }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'info@anisuldev.online', href: 'mailto:info@anisuldev.online' },
    { icon: <Phone className="w-4 h-4" />, text: '+923439275550', href: 'tel:+923439275550' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Islamabad, Pakistan', href: '#' },
    { icon: <Calendar className="w-4 h-4" />, text: 'Available for Freelance', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/anisul-islam', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/anisul-islam', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/anisul_islam', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:info@anisuldev.online', label: 'Email' }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 
    'React Native', 'Firebase', 'Tailwind CSS', 'Vercel', 'Docker'
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-16 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <div>
                {/* Logo */}
                         <div className="flex-shrink-0 w-27 h-27 flex items-center">
                           <img src={logo} alt="AnisulDev Logo" />
                         </div>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Passionate about crafting digital experiences with modern technologies. 
              Turning complex problems into simple, beautiful designs.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowUp className="w-4 h-4 mr-2 transform rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    <span>{service.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Get In Touch
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <span>{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe for tech insights and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 px-4 py-3 rounded-r-lg transition-all duration-300 flex items-center">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-bold text-white mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="grid grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {resource.icon}
                    <span className="text-sm">{resource.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-2">Ready to work together?</h4>
                  <p className="text-gray-400 text-sm">Let's build something amazing</p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <Code className="w-4 h-4" />
            <span className="text-sm">
              Built with React, Vite & Tailwind CSS
            </span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Coffee className="w-4 h-4" />
            <span className="text-sm">
              Fueled by coffee & passion
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <ArrowUp className="w-4 h-4 mr-1 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 text-gray-500 text-sm">
            <p>
              © {currentYear} Anisul Islam. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center text-gray-600 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>by Anisul Islam</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse delay-300"></div>
    </footer>
  );
};

export default Footer;