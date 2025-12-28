import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Zap,
  Code,
  Shield,
  TrendingUp,
  Layers,
  Search,
  Rocket,
  Clock,
  CheckCircle,
  ArrowLeft,
  Server,
  Database,
  Smartphone,
  Monitor,
  Cpu,
  BarChart,
  Users,
  Target,
  Lock,
  RefreshCw,
  DollarSign,
  Award,
  Headphones,
  FileCode,
  TestTube,
  Palette,
  GitBranch,
  Cloud,
  WifiOff,
  Bell,
  ShieldCheck,
  HardDrive,
  UploadCloud,
  Activity,
  Eye,
  Smartphone as PhoneIcon,
  CheckSquare
} from 'lucide-react';

const WebApplicationsPage = () => {
  // Set meta tags for the page
  React.useEffect(() => {
    // Update document title
    document.title = "Modern Web Application Development | React.js & Next.js Solutions";
    
    // Create and update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Professional web application development with React.js & Next.js. Build high-performance, SEO-friendly web apps with optimal user experience.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "web applications, React.js development, Next.js development, progressive web apps, SEO optimization, web performance";
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
    
    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Modern Web Application Development | React.js & Next.js Solutions";
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Professional web application development with React.js & Next.js. Build high-performance, SEO-friendly web apps.";
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

  // Web Development Phases
  const developmentPhases = [
    {
      phase: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering, project scoping, and technical planning",
      duration: "1-2 weeks",
      deliverables: [
        "Project Requirements Document",
        "Technical Architecture",
        "Project Timeline & Milestones",
        "Technology Stack Selection"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "02",
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences",
      duration: "2-3 weeks",
      deliverables: [
        "Wireframes & Prototypes",
        "UI Design System",
        "Responsive Design Mockups",
        "User Flow Diagrams"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "03",
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React.js/Next.js",
      duration: "3-6 weeks",
      deliverables: [
        "Component Library",
        "State Management Setup",
        "API Integration",
        "Performance Optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "04",
      title: "Backend Development",
      description: "Developing robust server-side logic and database architecture",
      duration: "3-5 weeks",
      deliverables: [
        "REST/GraphQL APIs",
        "Database Design",
        "Authentication System",
        "Server-side Logic"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      phase: "05",
      title: "Testing & QA",
      description: "Comprehensive testing across all browsers and devices",
      duration: "1-2 weeks",
      deliverables: [
        "Unit & Integration Tests",
        "Performance Testing",
        "Security Audits",
        "Cross-browser Testing"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      phase: "06",
      title: "Deployment & Launch",
      description: "Production deployment and performance monitoring",
      duration: "1 week",
      deliverables: [
        "Production Deployment",
        "Performance Monitoring Setup",
        "SEO Implementation",
        "Analytics Integration"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Key Features of Web Development
  const keyFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "React.js SPA/MPA",
      description: "Single Page Applications and Multi Page Applications built with React.js",
      benefits: ["Fast navigation", "Rich interactivity", "Component reusability", "State management"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Next.js SSR/SSG",
      description: "Server-Side Rendering and Static Site Generation for optimal performance",
      benefits: ["Better SEO", "Faster load times", "Improved performance", "Better UX"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Progressive Web Apps",
      description: "Web apps that work offline and feel like native applications",
      benefits: ["Offline functionality", "Push notifications", "Home screen installation", "Native-like experience"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Search engine optimized web applications for better visibility",
      benefits: ["Better rankings", "More organic traffic", "Structured data", "Performance optimization"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Tuning",
      description: "Optimizing web applications for speed and efficiency",
      benefits: ["Faster load times", "Better Core Web Vitals", "Optimized assets", "Efficient code"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Built with security best practices from the ground up",
      benefits: ["HTTPS enforcement", "Input validation", "CSRF protection", "Security headers"]
    }
  ];

  // Technical Stack
  const technicalStack = [
    {
      category: "Frontend Framework",
      items: [
        { name: "React.js", version: "18.2+", description: "Component-based UI library" },
        { name: "Next.js", version: "14.x", description: "React framework with SSR/SSG" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "JavaScript", version: "ES2022+", description: "Modern JavaScript features" }
      ]
    },
    {
      category: "UI Libraries & Styling",
      items: [
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Material-UI", description: "React component library" },
        { name: "Styled Components", description: "CSS-in-JS styling" },
        { name: "Framer Motion", description: "Animation library" }
      ]
    },
    {
      category: "State Management",
      items: [
        { name: "Redux Toolkit", description: "Predictable state container" },
        { name: "Context API", description: "React built-in state management" },
        { name: "Zustand", description: "Minimal state management" },
        { name: "React Query", description: "Server state management" }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js", version: "20.x", description: "JavaScript runtime" },
        { name: "Express.js", description: "Web application framework" },
        { name: "GraphQL", description: "Query language for APIs" },
        { name: "REST APIs", description: "Traditional API architecture" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", description: "NoSQL database" },
        { name: "PostgreSQL", description: "Relational database" },
        { name: "MySQL", description: "SQL database" },
        { name: "Redis", description: "In-memory data store" }
      ]
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", description: "Testing framework" },
        { name: "React Testing Library", description: "Component testing" },
        { name: "Cypress", description: "End-to-end testing" },
        { name: "Playwright", description: "Cross-browser testing" }
      ]
    }
  ];

  // Web App Types
  const appTypes = [
    {
      type: "E-commerce Platforms",
      icon: "🛒",
      features: ["Product management", "Shopping cart", "Payment integration", "Order tracking"]
    },
    {
      type: "SaaS Applications",
      icon: "☁️",
      features: ["Subscription model", "User management", "Analytics dashboard", "Multi-tenant"]
    },
    {
      type: "CRM Systems",
      icon: "📊",
      features: ["Lead management", "Customer tracking", "Sales pipeline", "Reporting"]
    },
    {
      type: "Dashboard Applications",
      icon: "📈",
      features: ["Data visualization", "Real-time updates", "Custom widgets", "Export functionality"]
    },
    {
      type: "Social Platforms",
      icon: "👥",
      features: ["User profiles", "Content sharing", "Messaging", "Notifications"]
    },
    {
      type: "Learning Management",
      icon: "🎓",
      features: ["Course management", "Student progress", "Quizzes & exams", "Certificates"]
    }
  ];

  // Development Packages
  const packages = [
    {
      name: "Starter Package",
      price: "$3,000 - $10,000",
      timeline: "4-8 weeks",
      features: [
        "Basic UI/UX Design",
        "React.js SPA Development",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Months Support"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Professional Package",
      price: "$10,000 - $30,000",
      timeline: "8-16 weeks",
      features: [
        "Custom UI/UX Design",
        "Next.js SSR/SSG",
        "Progressive Web App",
        "Advanced SEO",
        "Database Integration",
        "Authentication System",
        "Performance Optimization",
        "6 Months Support"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$30,000+",
      timeline: "12-24 weeks",
      features: [
        "Premium UI/UX Design",
        "Full-stack Development",
        "Real-time Features",
        "Scalable Architecture",
        "Advanced Security",
        "Analytics Integration",
        "Third-party APIs",
        "Custom Admin Panel",
        "1 Year Support & Maintenance"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Process Benefits
  const benefits = [
    {
      title: "Optimal Performance",
      description: "Lightning-fast applications with optimized load times and Core Web Vitals",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "SEO Friendly",
      description: "Built with SEO best practices to ensure maximum visibility in search engines",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Cross-Platform",
      description: "Responsive designs that work seamlessly across all devices and browsers",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof applications designed to grow with your business",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  // Performance Metrics
  const performanceMetrics = [
    { metric: "Load Time", target: "< 2s", icon: <Clock className="w-5 h-5" /> },
    { metric: "SEO Score", target: "95%+", icon: <Search className="w-5 h-5" /> },
    { metric: "Performance", target: "90%+", icon: <Activity className="w-5 h-5" /> },
    { metric: "Accessibility", target: "100%", icon: <Eye className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Application Development",
          "description": "Professional web application development services using React.js and Next.js for optimal performance and SEO.",
          "provider": {
            "@type": "Organization",
            "name": "Your Company Name"
          },
          "areaServed": "Worldwide",
          "serviceType": "Web Development",
          "offers": {
            "@type": "Offer",
            "price": "3000",
            "priceCurrency": "USD"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-purple-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Web Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Web Applications</span>
              </h1>
              
              <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
                Build high-performance web applications with React.js & Next.js. 
                Experience optimal performance, SEO optimization, and seamless user experiences 
                across all devices.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
                <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl opacity-50"></div>
                      <Globe className="w-20 h-20 relative z-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">React.js SPA/MPA</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Next.js SSR/SSG</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Progressive Web Apps</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm">SEO Optimization</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm">Performance Tuning</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
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
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 text-purple-600">
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
              Web Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services leveraging modern technologies for optimal results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured, transparent process to ensure your web application's success from concept to launch
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
                  <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-x-2 -translate-y-1/2 group-hover:w-8 transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom web applications tailored to various business needs and industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.type}</h3>
                
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
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

      {/* Technical Stack */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Stack</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for building robust, scalable web applications
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
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors"
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

      {/* Pricing Packages */}
      <section id="packages" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your project requirements and budget
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
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-white p-6 md:p-8 pt-10">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${pkg.color} text-white mb-4`}>
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600 flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Timeline: {pkg.timeline}
                    </div>
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
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
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
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Benefits</span> of Our Approach
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600">
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-purple-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-purple-600 mb-2">90%+</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%+</div>
                    <div className="text-sm text-gray-600">SEO Optimization</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Responsive Design</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
                  <div className="flex items-center">
                    <Headphones className="w-8 h-8 mr-4" />
                    <div>
                      <h4 className="font-bold">Dedicated Support</h4>
                      <p className="text-sm text-purple-100">Ongoing maintenance, updates, and technical support included</p>
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
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Web Application?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Let's discuss your project and create a web solution that drives results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  Start Free Consultation
                  <Rocket className="w-5 h-5 ml-3" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  View Portfolio
                </a>
              </div>
              
              <p className="mt-8 text-sm text-purple-200">
                Typically respond within 24 hours • Free initial consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApplicationsPage;