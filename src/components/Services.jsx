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
  Upload,
  Wrench,
  Monitor,
  ShieldCheck,
  HardDrive,
  CloudUpload,
  Globe as Network,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "React Native Mobile Apps",
      description: "Cross-platform mobile applications using React Native with native performance and seamless user experience.",
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
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Modern web applications using React.js & Next.js with server-side rendering and optimal performance.",
      features: [
        "React.js SPA/MPA",
        "Next.js SSR/SSG",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Optimization"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      delay: "200"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development & Databases",
      description: "Scalable backend systems with robust database solutions and deployment on Vercel, VPS, or cloud platforms.",
      features: [
        "REST & GraphQL APIs",
        "MongoDB & SQL Databases",
        "Authentication & Authorization",
        "Vercel & VPS Deployment",
        "API Documentation & Security"
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

  // Updated deployment tools with VPS focus
  const deploymentTools = {
    devTools: [
      { name: "Git", icon: <GitBranch size={16} />, color: "bg-orange-500" },
      { name: "GitHub Actions", icon: <Wrench size={16} />, color: "bg-gray-800" },
      { name: "Docker", icon: <Cpu size={16} />, color: "bg-blue-500" },
      { name: "CI/CD", icon: <Terminal size={16} />, color: "bg-green-500" }
    ],
    deploymentPlatforms: [
      { name: "Vercel", icon: "▲", color: "bg-black", type: "Serverless" },
      { name: "VPS", icon: <HardDrive size={16} />, color: "bg-green-600", type: "Self-hosted" },
      { name: "AWS EC2", icon: "☁️", color: "bg-yellow-500", type: "Cloud" },
      { name: "DigitalOcean", icon: "🌊", color: "bg-blue-600", type: "Cloud" }
    ],
    databaseTools: [
      { name: "MongoDB", icon: <Database size={16} />, color: "bg-green-500" },
      { name: "PostgreSQL", icon: <Database size={16} />, color: "bg-blue-400" },
      { name: "MySQL", icon: <Database size={16} />, color: "bg-orange-500" },
      { name: "Redis", icon: <Database size={16} />, color: "bg-red-500" }
    ]
  };

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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Services & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Build</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack solutions tailored to your needs, from mobile apps to complex web applications and scalable backends.
          </p>
        </div>

        {/* Tech Stack Overview - Infinite Scroll */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              My Tech Stack
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleDirectionChange('left')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    direction === 'left'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDirectionChange('right')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    direction === 'right'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
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
              className={`flex space-x-4 ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} ${
                isPaused ? 'animation-paused' : ''
              }`}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group relative flex-shrink-0 w-40"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-5 h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon with Gradient Background */}
                      <div className={`w-5 h-5  bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {typeof tech.icon === 'string' ? (
                            <span className="text-sm">{tech.icon}</span>
                          ) : (
                            React.cloneElement(tech.icon, { className: "w-7 h-7" })
                          )}
                        </div>
                      </div>
                      
                      {/* Tech Name */}
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        {tech.name}
                      </h4>
                      
                      {/* Category Badge */}
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {tech.category}
                      </span>
                      
                      {/* Hover Effect Indicator */}
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>

          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="group flex items-center font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              My Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Process</span>
            </h3>
            <p className="text-gray-300 text-lg">
              A structured approach to deliver high-quality software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                {/* Database tools above Step 3 */}
                {index === 2 && (
                  <div className="absolute -top-16 left-0 right-0 z-10">
                    <div className="flex justify-center space-x-2">
                      {deploymentTools.databaseTools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 animate-pulse"
                        >
                          <div className={`w-6 h-6 rounded flex items-center justify-center ${tool.color} text-white`}>
                            {tool.icon}
                          </div>
                          <span className="text-xs font-medium">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Process Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative z-20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                  <p className="text-gray-300">{process.description}</p>
                  
                  {/* Development Phase Special Content */}
                  {index === 2 && (
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Deployment:</span>
                        <div className="flex space-x-2">
                          {deploymentTools.deploymentPlatforms.slice(0, 2).map((platform, idx) => (
                            <div
                              key={idx}
                              className={`w-8 h-8 rounded flex items-center justify-center ${platform.color} text-white text-sm`}
                              title={`${platform.name} - ${platform.type}`}
                            >
                              {typeof platform.icon === 'string' ? (
                                <span className="text-sm">{platform.icon}</span>
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

                {/* Infrastructure tools below Step 3 */}
                {index === 2 && (
                  <div className="absolute -bottom-16 left-0 right-0 z-10">
                    <div className="flex justify-center space-x-2">
                      {[
                        { name: "NGINX", icon: "🎯", color: "bg-green-600" },
                        { name: "PM2", icon: "🔄", color: "bg-yellow-400" },
                        { name: "SSL", icon: <ShieldCheck size={16} />, color: "bg-green-400" },
                        { name: "Firewall", icon: <Shield size={16} />, color: "bg-red-500" }
                      ].map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 animate-pulse"
                        >
                          <div className={`w-6 h-6 rounded flex items-center justify-center ${tool.color} text-white`}>
                            {typeof tool.icon === 'string' ? (
                              <span className="text-sm">{tool.icon}</span>
                            ) : (
                              tool.icon
                            )}
                          </div>
                          <span className="text-xs font-medium">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-3 z-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600">
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Get a Quote Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;