import React from 'react';
import { 
  Server, 
  Cloud, 
  Zap, 
  Shield, 
  CheckCircle,
  Globe,
  Lock,
  RefreshCw,
  Cpu,
  Database,
  Upload,
  Terminal,
  Code
} from 'lucide-react';

const Deployment = () => {
  const deploymentServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "VPS Deployment",
      description: "Complete setup and deployment on Virtual Private Servers with full control and customization.",
      features: [
        "Ubuntu/CentOS Server Setup",
        "NGINX/Apache Configuration",
        "SSL Certificate Installation",
        "Domain & DNS Management",
        "Server Security Hardening",
        "Auto-scaling & Load Balancing"
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      tech: ["Ubuntu", "Docker", "NGINX", "PM2", "SSL", "CI/CD"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Vercel Deployment",
      description: "Lightning-fast deployment for frontend applications with automatic CI/CD pipelines.",
      features: [
        "Automatic Deployments from Git",
        "Preview Deployments for PRs",
        "Edge Network Optimization",
        "Serverless Functions",
        "Automatic SSL/TLS",
        "Global CDN Distribution"
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      tech: ["Next.js", "React", "Vercel CLI", "Edge Functions", "Git Integration"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full Stack Deployment",
      description: "End-to-end deployment solutions for complex applications with multiple services.",
      features: [
        "Microservices Architecture",
        "Database Deployment & Migration",
        "WebSocket Server Setup",
        "Redis Cache Configuration",
        "Background Jobs Setup",
        "Monitoring & Logging"
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      tech: ["MongoDB", "Redis", "WebSocket", "Microservices", "Docker", "Kubernetes"]
    }
  ];

  const deploymentProcess = [
    {
      step: 1,
      title: "Environment Setup",
      icon: <Terminal />,
      description: "Configure development, staging, and production environments"
    },
    {
      step: 2,
      title: "CI/CD Pipeline",
      icon: <RefreshCw />,
      description: "Set up automated testing, building, and deployment workflows"
    },
    {
      step: 3,
      title: "Security Configuration",
      icon: <Shield />,
      description: "Implement SSL, firewall, and security best practices"
    },
    {
      step: 4,
      title: "Performance Optimization",
      icon: <Zap />,
      description: "Configure caching, CDN, and performance monitoring"
    },
    {
      step: 5,
      title: "Monitoring & Analytics",
      icon: <Cpu />,
      description: "Set up logging, error tracking, and performance analytics"
    },
    {
      step: 6,
      title: "Backup & Recovery",
      icon: <Database />,
      description: "Implement automated backups and disaster recovery plans"
    }
  ];

  const deploymentStats = [
    { label: "Deployment Time", value: "< 5 min", description: "Average deployment time" },
    { label: "Uptime", value: "99.9%", description: "Guaranteed server uptime" },
    { label: "Projects Deployed", value: "50+", description: "Successfully deployed" },
    { label: "Response Time", value: "< 100ms", description: "Global CDN response" }
  ];

  return (
    <section id="deployment" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 font-semibold mb-4">
            <Upload className="w-4 h-4 mr-2" />
            Deployment & DevOps
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Deployment</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From VPS setup to Vercel deployment - I handle everything to get your application live and running smoothly.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {deploymentStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Deployment Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {deploymentServices.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-2xl p-8 border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Process</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {deploymentProcess.map((process, index) => (
                <div
                  key={index}
                  className={`relative lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white mb-4">
                        {process.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                      <div className="text-sm font-bold text-blue-600">{process.step}</div>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deployment Tools & Technologies */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Tools & Stack</span>
            </h3>
            <p className="text-gray-300">
              Comprehensive toolkit for modern application deployment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Vercel", icon: "▲", color: "from-black to-gray-800" },
              { name: "AWS", icon: "☁️", color: "from-yellow-500 to-orange-500" },
              { name: "DigitalOcean", icon: "🌊", color: "from-blue-400 to-blue-600" },
              { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
              { name: "NGINX", icon: "🎯", color: "from-green-500 to-emerald-600" },
              { name: "GitHub Actions", icon: "⚡", color: "from-gray-700 to-black" },
              { name: "PM2", icon: "🔄", color: "from-yellow-400 to-orange-400" },
              { name: "SSL/TLS", icon: "🔒", color: "from-green-400 to-emerald-500" },
              { name: "Redis", icon: "🗃️", color: "from-red-500 to-orange-500" },
              { name: "MongoDB Atlas", icon: "🍃", color: "from-green-600 to-emerald-700" },
              { name: "Cloudflare", icon: "🌩️", color: "from-orange-500 to-yellow-500" },
              { name: "Let's Encrypt", icon: "🔐", color: "from-blue-400 to-cyan-500" }
            ].map((tool, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-3 mx-auto`}>
                  {tool.icon}
                </div>
                <div className="font-semibold">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Deploy Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it's a simple website or a complex microservices architecture, I'll handle the deployment from start to finish.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Server className="w-5 h-5" />
                <span>Discuss VPS Deployment</span>
              </button>
              
              <button className="group border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all duration-300">
                <Cloud className="w-5 h-5" />
                <span>Vercel Deployment Inquiry</span>
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Includes server setup, domain configuration, SSL installation, and ongoing maintenance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deployment;