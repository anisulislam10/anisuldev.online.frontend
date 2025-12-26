import React, { useEffect, useRef, useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  Zap, 
  Shield,
  Code,
  Layout,
  Cloud,
  CheckCircle,
  ArrowRight,
  GitBranch,
  Cpu,
  Terminal,
  Wrench,
  ShieldCheck,
  HardDrive,
  CloudUpload,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "React Native Mobile Apps",
      description: "Cross-platform mobile apps with native performance and seamless UX.",
      features: [
        "iOS & Android Development",
        "Native Modules Integration",
        "Offline Capabilities",
        "Push Notifications",
        "App Store Deployment"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      delay: "100"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Web Applications",
      description: "Modern web apps with React.js & Next.js for optimal performance.",
      features: [
        "React.js SPA/MPA",
        "Next.js SSR/SSG",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Tuning"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      delay: "200"
    },
    {
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Backend & Databases",
      description: "Scalable backend systems with robust database solutions.",
      features: [
        "REST & GraphQL APIs",
        "MongoDB & SQL Databases",
        "Authentication & Security",
        "Vercel & VPS Deployment",
        "API Documentation"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      delay: "300"
    },
  ];

  const technologies = [
    { name: "React Native", icon: <Smartphone />, category: "Mobile", color: "from-blue-400 to-cyan-400" },
    { name: "React.js", icon: <Code />, category: "Frontend", color: "from-blue-500 to-indigo-500" },
    { name: "Next.js", icon: <Layout />, category: "Frontend", color: "from-black to-gray-800" },
    { name: "Node.js", icon: <Server />, category: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Express.js", icon: <Server />, category: "Backend", color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: <Database />, category: "Database", color: "from-green-400 to-emerald-400" },
    { name: "PostgreSQL", icon: <Database />, category: "Database", color: "from-blue-400 to-indigo-400" },
    { name: "MySQL", icon: <Database />, category: "Database", color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", icon: <Cloud />, category: "Cloud", color: "from-yellow-500 to-orange-500" },
    { name: "Vercel", icon: "▲", category: "Deployment", color: "from-black to-gray-900" },
    { name: "Docker", icon: <Cpu />, category: "DevOps", color: "from-blue-500 to-cyan-500" },
    { name: "AWS", icon: "☁️", category: "Cloud", color: "from-orange-500 to-yellow-500" },
    { name: "Tailwind CSS", icon: <Layout />, category: "Frontend", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: <Code />, category: "Language", color: "from-blue-500 to-indigo-500" },
    { name: "Git", icon: <GitBranch />, category: "Tools", color: "from-orange-500 to-red-500" },
    { name: "Redux", icon: <Code />, category: "State", color: "from-purple-500 to-pink-500" },
    { name: "GraphQL", icon: <Server />, category: "API", color: "from-pink-500 to-purple-500" },
    { name: "Redis", icon: <Database />, category: "Database", color: "from-red-500 to-orange-500" },
  ];

  // Double the array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies];
  
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const [direction, setDirection] = useState('right');

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding requirements and planning architecture"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Creating UI/UX designs and interactive prototypes"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular progress updates"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching and maintaining your application"
    }
  ];

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Services & Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Build</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Full-stack solutions tailored to your needs, from mobile apps to complex web applications and scalable backends.
          </p>
        </div>

        {/* Tech Stack Overview - Mobile Optimized */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8 px-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              My Tech Stack
            </h3>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="flex bg-gray-100 rounded-lg p-0.5 sm:p-1">
                <button
                  onClick={() => handleDirectionChange('left')}
                  className={`p-1.5 sm:p-2 rounded-md text-xs sm:text-sm transition-all duration-300 ${
                    direction === 'left'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => handleDirectionChange('right')}
                  className={`p-1.5 sm:p-2 rounded-md text-xs sm:text-sm transition-all duration-300 ${
                    direction === 'right'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Animated Scroll Container */}
            <div
              ref={containerRef}
              className={`flex space-x-3 sm:space-x-4 ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} ${
                isPaused ? 'animation-paused' : ''
              }`}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group relative flex-shrink-0 w-32 sm:w-36 md:w-40"
                >
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-3 sm:p-4 h-full">
                    <div className="flex flex-col items-center text-center space-y-2">
                      {/* Icon with Gradient Background */}
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300`}>
                        <div className="text-gray-700">
                          {typeof tech.icon === 'string' ? (
                            <span className="text-base sm:text-lg">{tech.icon}</span>
                          ) : (
                            React.cloneElement(tech.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })
                          )}
                        </div>
                      </div>
                      
                      {/* Tech Name */}
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                        {tech.name}
                      </h4>
                      
                      {/* Category Badge */}
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays - Mobile Optimized */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`inline-flex p-2.5 sm:p-3 md:p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="group flex items-center font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm sm:text-base">
                <span className="mr-1.5 sm:mr-2">Learn more</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section - Mobile Optimized */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              My Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Process</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              A structured approach to deliver high-quality software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                {/* Step 03 - Development (Mobile Optimized) */}
                {index === 2 && (
                  <>
                    {/* Database tools above (Mobile layout) */}
                    <div className="absolute -top-10 sm:-top-12 left-0 right-0 z-10 px-1 sm:px-2">
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                        {[
                          { name: "MongoDB", icon: <Database size={12} />, color: "bg-green-500" },
                          { name: "PostgreSQL", icon: <Database size={12} />, color: "bg-blue-400" },
                          { name: "MySQL", icon: <Database size={12} />, color: "bg-orange-500" },
                          { name: "Redis", icon: <Database size={12} />, color: "bg-red-500" }
                        ].map((tool, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded-md border border-gray-700 animate-pulse"
                          >
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center ${tool.color} text-white`}>
                              {tool.icon}
                            </div>
                            <span className="text-xs font-medium whitespace-nowrap">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Infrastructure tools below (Mobile layout) */}
                    <div className="absolute -bottom-10 sm:-bottom-12 left-0 right-0 z-10 px-1 sm:px-2">
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                        {[
                          { name: "NGINX", icon: "🎯", color: "bg-green-600" },
                          { name: "PM2", icon: "🔄", color: "bg-yellow-500" },
                          { name: "SSL", icon: <ShieldCheck size={12} />, color: "bg-green-400" },
                          { name: "Firewall", icon: <Shield size={12} />, color: "bg-red-500" }
                        ].map((tool, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded-md border border-gray-700 animate-pulse"
                          >
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center ${tool.color} text-white`}>
                              {typeof tool.icon === 'string' ? (
                                <span className="text-xs">{tool.icon}</span>
                              ) : (
                                tool.icon
                              )}
                            </div>
                            <span className="text-xs font-medium whitespace-nowrap">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Main Process Card */}
                <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative z-20 ${
                  index === 2 ? 'mt-8 sm:mt-10 mb-8 sm:mb-10' : ''
                }`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 sm:mb-3 md:mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                    {process.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">{process.description}</p>
                  
                  {/* Development Phase Special Content (Mobile Optimized) */}
                  {index === 2 && (
                    <div className="mt-4 pt-3 border-t border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-400">Deployment:</span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {[
                            { name: "Vercel", icon: "▲", color: "bg-black", type: "Serverless" },
                            { name: "VPS", icon: <HardDrive size={12} />, color: "bg-green-600", type: "Self-hosted" },
                            { name: "AWS", icon: "☁️", color: "bg-yellow-500", type: "Cloud" },
                            { name: "DO", icon: "🌊", color: "bg-blue-600", type: "Cloud" }
                          ].slice(0, 3).map((platform, idx) => (
                            <div
                              key={idx}
                              className={`w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center ${platform.color} text-white text-xs sm:text-sm`}
                              title={`${platform.name} - ${platform.type}`}
                            >
                              {typeof platform.icon === 'string' ? (
                                <span className="text-xs sm:text-sm">{platform.icon}</span>
                              ) : (
                                platform.icon
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Connection Line - Hide on mobile, show on medium+ */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-4 sm:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-2 sm:translate-x-3 z-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full max-w-4xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
              <span>Get a Quote Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animation-paused {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .animate-scroll-right,
          .animate-scroll-left {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;