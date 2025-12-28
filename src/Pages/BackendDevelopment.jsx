import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Database,
  Shield,
  Zap,
  Cloud,
  Code,
  Lock,
  Cpu,
  HardDrive,
  UploadCloud,
  Activity,
  CheckCircle,
  ArrowLeft,
  Rocket,
  Clock,
  Users,
  BarChart,
  Target,
  Globe,
  Wifi,
  Bell,
  ShieldCheck,
  Terminal,
  GitBranch,
  Layers,
  Award,
  Headphones,
  RefreshCw,
  DollarSign,
  TrendingUp,
  FileCode,
  TestTube,
  Network,
  Key,
  Shield as ShieldIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  GitMerge,
  WifiOff,
  Monitor,
  Smartphone,
  FileText
} from 'lucide-react';

const BackendDatabasesPage = () => {
  // Set meta tags for the page
  React.useEffect(() => {
    // Update document title
    document.title = "Backend & Database Development | Scalable API & Data Solutions";
    
    // Create and update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Professional backend development & database solutions. Build scalable REST/GraphQL APIs, secure authentication systems, and robust database architectures with MongoDB & SQL.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "backend development, database solutions, REST API, GraphQL, MongoDB, PostgreSQL, MySQL, authentication, API development, Vercel deployment, VPS hosting";
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
    
    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Backend & Database Development | Scalable API & Data Solutions";
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Professional backend development & database solutions. Build scalable APIs and robust database architectures.";
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = "website";
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }
    
    // Cleanup function
    return () => {
      // Reset to default title if needed
      document.title = "Your Site Name";
    };
  }, []);

  // Backend Development Phases
  const developmentPhases = [
    {
      phase: "01",
      title: "Architecture Design",
      description: "Designing scalable and maintainable backend architecture",
      duration: "1-2 weeks",
      deliverables: [
        "System Architecture Diagram",
        "Database Schema Design",
        "API Design Specification",
        "Technology Stack Selection"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "02",
      title: "Database Design",
      description: "Designing efficient and scalable database structures",
      duration: "1-2 weeks",
      deliverables: [
        "Database Schema",
        "Data Models & Relationships",
        "Indexing Strategy",
        "Backup & Recovery Plan"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "03",
      title: "API Development",
      description: "Building RESTful or GraphQL APIs with proper endpoints",
      duration: "3-6 weeks",
      deliverables: [
        "REST/GraphQL API Endpoints",
        "Request/Response Validation",
        "Rate Limiting Implementation",
        "API Documentation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "04",
      title: "Authentication & Security",
      description: "Implementing secure authentication and authorization systems",
      duration: "2-3 weeks",
      deliverables: [
        "User Authentication System",
        "Role-Based Access Control",
        "JWT/Token Implementation",
        "Security Audits"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      phase: "05",
      title: "Integration & Testing",
      description: "Integrating with third-party services and comprehensive testing",
      duration: "2-3 weeks",
      deliverables: [
        "Third-party API Integration",
        "Unit & Integration Tests",
        "Performance Testing",
        "Security Testing"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      phase: "06",
      title: "Deployment & Monitoring",
      description: "Deploying to production and setting up monitoring systems",
      duration: "1-2 weeks",
      deliverables: [
        "Production Deployment",
        "Monitoring & Alerting",
        "Logging System",
        "Performance Monitoring"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Key Features
  const keyFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "REST & GraphQL APIs",
      description: "Modern API development with RESTful and GraphQL architectures",
      benefits: ["Scalable endpoints", "Real-time capabilities", "Efficient data fetching", "Versioning support"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "MongoDB & SQL Databases",
      description: "Expert database design and optimization for all data needs",
      benefits: ["MongoDB databases", "PostgreSQL/MySQL", "Query optimization", "Data migration"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentication & Security",
      description: "Robust security implementation with industry best practices",
      benefits: ["JWT authentication", "OAuth integration", "Encryption", "Security audits"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Vercel & VPS Deployment",
      description: "Deployment to Vercel for serverless or VPS for full control",
      benefits: ["Vercel deployment", "VPS setup", "Load balancing", "SSL configuration"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "API Documentation",
      description: "Comprehensive API documentation for easy integration",
      benefits: ["Swagger/OpenAPI", "Interactive docs", "Code samples", "Integration guides"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimized backend systems for maximum performance",
      benefits: ["Caching strategies", "Database indexing", "Query optimization", "Load testing"]
    }
  ];

  // Technical Stack
  const technicalStack = [
    {
      category: "Backend Frameworks",
      items: [
        { name: "Node.js", version: "20.x", description: "JavaScript runtime" },
        { name: "Express.js", description: "Web framework for Node.js" },
        { name: "NestJS", description: "TypeScript Node.js framework" },
        { name: "Python Django", description: "Batteries-included Python framework" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "PostgreSQL", description: "Advanced open-source SQL database" },
        { name: "MySQL", description: "Popular relational database" },
        { name: "Redis", description: "In-memory data structure store" }
      ]
    },
    {
      category: "API Technologies",
      items: [
        { name: "REST API", description: "Traditional RESTful API architecture" },
        { name: "GraphQL", description: "Query language for APIs" },
        { name: "WebSocket", description: "Real-time bidirectional communication" },
        { name: "Socket.io", description: "Real-time engine" }
      ]
    },
    {
      category: "Authentication",
      items: [
        { name: "JWT", description: "JSON Web Token authentication" },
        { name: "OAuth 2.0", description: "Authorization framework" },
        { name: "Passport.js", description: "Authentication middleware" },
        { name: "bcrypt", description: "Password hashing" }
      ]
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", description: "Serverless deployment platform" },
        { name: "DigitalOcean", description: "VPS cloud hosting" },
        { name: "AWS", description: "Amazon Web Services" },
        { name: "Docker", description: "Containerization platform" }
      ]
    },
    {
      category: "Monitoring & Tools",
      items: [
        { name: "PM2", description: "Node.js process manager" },
        { name: "Winston", description: "Logging library" },
        { name: "Postman", description: "API development environment" },
        { name: "Swagger", description: "API documentation" }
      ]
    }
  ];

  // Service Types
  const serviceTypes = [
    {
      type: "API Development",
      icon: "🔌",
      description: "Custom REST & GraphQL API development",
      features: ["RESTful APIs", "GraphQL APIs", "WebSocket APIs", "API Gateway"]
    },
    {
      type: "Database Design",
      icon: "🗃️",
      description: "Database architecture and optimization",
      features: ["Schema design", "Query optimization", "Data migration", "Backup solutions"]
    },
    {
      type: "Authentication Systems",
      icon: "🔐",
      description: "Secure user authentication solutions",
      features: ["JWT implementation", "OAuth integration", "Role management", "Security audits"]
    },
    {
      type: "Deployment & Hosting",
      icon: "🚀",
      description: "Cloud deployment and server management",
      features: ["Vercel deployment", "VPS setup", "Load balancing", "SSL configuration"]
    },
    {
      type: "API Documentation",
      icon: "📚",
      description: "Comprehensive API documentation",
      features: ["Swagger docs", "Interactive testing", "Code samples", "Integration guides"]
    },
    {
      type: "Performance Optimization",
      icon: "⚡",
      description: "Backend performance tuning",
      features: ["Caching strategies", "Database indexing", "Query optimization", "Load testing"]
    }
  ];

  // Development Packages
  const packages = [
    {
      name: "Basic API Package",
      price: "$4,000 - $12,000",
      timeline: "4-8 weeks",
      features: [
        "Basic REST API Development",
        "Single Database Setup",
        "Basic Authentication",
        "API Documentation",
        "Vercel Deployment",
        "3 Months Support"
      ],
      color: "from-blue-400 to-cyan-400",
      bestFor: "Startups & MVPs"
    },
    {
      name: "Professional Backend",
      price: "$12,000 - $35,000",
      timeline: "8-16 weeks",
      features: [
        "REST & GraphQL APIs",
        "Multiple Databases",
        "Advanced Authentication",
        "Real-time Features",
        "Vercel & VPS Deployment",
        "Performance Optimization",
        "Comprehensive API Docs",
        "6 Months Support"
      ],
      color: "from-green-500 to-emerald-500",
      popular: true,
      bestFor: "Growing Businesses"
    },
    {
      name: "Enterprise Solution",
      price: "$35,000+",
      timeline: "12-24 weeks",
      features: [
        "Microservices Architecture",
        "Multiple Database Types",
        "OAuth & SSO Integration",
        "Real-time & WebSocket",
        "Load Balancing",
        "Auto-scaling Setup",
        "Advanced Security",
        "Monitoring & Analytics",
        "1 Year Support & Maintenance"
      ],
      color: "from-purple-500 to-pink-500",
      bestFor: "Large Enterprises"
    }
  ];

  // Process Benefits
  const benefits = [
    {
      title: "High Performance",
      description: "Optimized backend systems handling thousands of requests per second",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalability",
      description: "Architected to scale with your business growth and user base",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Security First",
      description: "Built with security best practices and regular security audits",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Reliability",
      description: "99.9% uptime with robust error handling and monitoring",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  // Performance Metrics
  const performanceMetrics = [
    { metric: "API Response Time", target: "< 100ms", icon: <Zap className="w-5 h-5" /> },
    { metric: "System Uptime", target: "99.9%", icon: <Activity className="w-5 h-5" /> },
    { metric: "Concurrent Users", target: "10,000+", icon: <Users className="w-5 h-5" /> },
    { metric: "Security Score", target: "A+", icon: <Shield className="w-5 h-5" /> }
  ];

  // Database Comparison
  const databaseComparison = [
    {
      name: "MongoDB",
      type: "NoSQL",
      bestFor: ["Unstructured data", "Rapid development", "Scalability", "JSON documents"],
      icon: "🍃"
    },
    {
      name: "PostgreSQL",
      type: "SQL",
      bestFor: ["Complex queries", "Data integrity", "ACID compliance", "Geospatial data"],
      icon: "🐘"
    },
    {
      name: "MySQL",
      type: "SQL",
      bestFor: ["Web applications", "Read-heavy workloads", "E-commerce", "CMS systems"],
      icon: "🐬"
    },
    {
      name: "Redis",
      type: "In-memory",
      bestFor: ["Caching", "Session storage", "Real-time analytics", "Message brokering"],
      icon: "🔴"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Backend & Database Development",
          "description": "Professional backend development services including REST/GraphQL APIs, MongoDB/SQL databases, authentication systems, and Vercel/VPS deployment.",
          "provider": {
            "@type": "Organization",
            "name": "Your Company Name"
          },
          "areaServed": "Worldwide",
          "serviceType": "Backend Development",
          "offers": {
            "@type": "Offer",
            "price": "4000",
            "priceCurrency": "USD"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-green-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-medium mb-4">
                <Server className="w-4 h-4 mr-2" />
                Backend & Database Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">Backend Systems</span>
              </h1>
              
              <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
                Build robust backend systems with REST & GraphQL APIs, MongoDB & SQL databases, 
                secure authentication, and reliable Vercel & VPS deployment solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Project
                  <Rocket className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Packages
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-xl opacity-50"></div>
                      <Server className="w-20 h-20 relative z-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { text: "REST & GraphQL APIs", color: "bg-green-500" },
                      { text: "MongoDB & SQL Databases", color: "bg-blue-500" },
                      { text: "Authentication & Security", color: "bg-purple-500" },
                      { text: "Vercel & VPS Deployment", color: "bg-yellow-500" },
                      { text: "API Documentation", color: "bg-red-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="text-sm">{item.text}</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {performanceMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-cyan-50 text-emerald-600">
                    {item.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{item.target}</div>
                <div className="text-sm text-gray-600">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Backend <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive backend development services for building scalable and secure applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Comparison */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Database <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right database solution for your application needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {databaseComparison.map((db, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{db.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{db.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {db.type}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
                  <ul className="space-y-2">
                    {db.bestFor.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to building robust backend systems and database architectures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {developmentPhases.map((phase, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Phase Number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} text-white font-bold flex items-center justify-center text-lg z-10`}>
                  {phase.phase}
                </div>
                
                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {phase.duration}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < developmentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform translate-x-2 -translate-y-1/2 group-hover:w-8 transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Stack</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern technologies and tools for building robust backend systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technicalStack.map((stack, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {stack.category}
                </h3>
                
                <div className="space-y-4">
                  {stack.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        {item.version && (
                          <div className="text-sm text-gray-500">v{item.version}</div>
                        )}
                        {item.description && (
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        )}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Types</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive backend services for different application needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceTypes.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 group-hover:scale-125 transition-transform"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your backend development needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden ${
                  pkg.popular ? 'transform md:scale-105 md:-translate-y-4 shadow-2xl' : 'shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-white p-6 md:p-8 pt-10">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${pkg.color} text-white mb-4`}>
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600 flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      Timeline: {pkg.timeline}
                    </div>
                    {pkg.bestFor && (
                      <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                        Best for: {pkg.bestFor}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Request Custom Quote
              <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Benefits</span> of Our Approach
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center text-emerald-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-emerald-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime Guarantee</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">&lt;100ms</div>
                    <div className="text-sm text-gray-600">API Response Time</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">A+</div>
                    <div className="text-sm text-gray-600">Security Rating</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl text-white">
                  <div className="flex items-center">
                    <Headphones className="w-8 h-8 mr-4" />
                    <div>
                      <h4 className="font-bold">Comprehensive Support</h4>
                      <p className="text-sm text-emerald-100">Ongoing maintenance, updates, and 24/7 technical support included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Backend System?
              </h2>
              <p className="text-lg text-emerald-100 mb-8">
                Let's discuss your project and create a robust backend solution that scales with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  Start Free Consultation
                  <Rocket className="w-5 h-5 ml-3" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  View Case Studies
                </a>
              </div>
              
              <p className="mt-8 text-sm text-emerald-200">
                Typically respond within 24 hours • Free initial consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackendDatabasesPage;