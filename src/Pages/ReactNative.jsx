import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Zap,
  Shield,
  Database,
  Cloud,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  RefreshCw,
  Rocket,
  Headphones,
  DollarSign,
  Award,
  
} from 'lucide-react';

const ReactNativePage = () => {
   // Set meta tags for the page
React.useEffect(() => {
  // Update document title
  document.title = "React Native Mobile App Development | iOS & Android Solutions";
  
  // Create and update meta tags
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = "description";
  metaDescription.content = "Professional React Native mobile app development services. Build cross-platform iOS & Android apps with native performance and seamless user experience.";
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
  
  // Keywords meta tag
  const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
  metaKeywords.name = "keywords";
  metaKeywords.content = "React Native development, mobile app development, iOS apps, Android apps, cross-platform apps, mobile application development, React Native services";
  if (!document.querySelector('meta[name="keywords"]')) {
    document.head.appendChild(metaKeywords);
  }
  
  // Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = "React Native Mobile App Development | iOS & Android Solutions";
  if (!document.querySelector('meta[property="og:title"]')) {
    document.head.appendChild(ogTitle);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.content = "Professional React Native mobile app development. Build cross-platform iOS & Android apps with native performance.";
  if (!document.querySelector('meta[property="og:description"]')) {
    document.head.appendChild(ogDescription);
  }
  
  const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
  ogType.setAttribute('property', 'og:type');
  ogType.content = "website";
  if (!document.querySelector('meta[property="og:type"]')) {
    document.head.appendChild(ogType);
  }
  
  // Twitter Card meta tags
  const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
  twitterCard.name = "twitter:card";
  twitterCard.content = "summary_large_image";
  if (!document.querySelector('meta[name="twitter:card"]')) {
    document.head.appendChild(twitterCard);
  }
  
  const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
  twitterTitle.name = "twitter:title";
  twitterTitle.content = "React Native Mobile App Development | iOS & Android Solutions";
  if (!document.querySelector('meta[name="twitter:title"]')) {
    document.head.appendChild(twitterTitle);
  }
  
  const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
  twitterDescription.name = "twitter:description";
  twitterDescription.content = "Professional React Native mobile app development. Build cross-platform iOS & Android apps with native performance.";
  if (!document.querySelector('meta[name="twitter:description"]')) {
    document.head.appendChild(twitterDescription);
  }
  
  // Cleanup function
  return () => {
    // Reset to default title if needed
    document.title = "Your Site Name";
  };
}, []);
    
  // React Native Development Phases
  const developmentPhases = [
    {
      phase: "01",
      title: "Discovery & Planning",
      description: "Requirement analysis, wireframing, and project roadmap",
      duration: "1-2 weeks",
      deliverables: [
        "Project Specification Document",
        "Wireframes & User Flows",
        "Technology Stack Decision",
        "Project Timeline & Milestones"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "02",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive mobile interfaces",
      duration: "2-3 weeks",
      deliverables: [
        "High-Fidelity Mockups",
        "Interactive Prototypes",
        "Design System & Components",
        "User Experience Guidelines"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "03",
      title: "Development",
      description: "Building the React Native application",
      duration: "4-8 weeks",
      deliverables: [
        "Core Application Features",
        "Backend Integration",
        "Testing Implementation",
        "Performance Optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across all devices",
      duration: "1-2 weeks",
      deliverables: [
        "Bug Reports & Fixes",
        "Performance Testing Results",
        "Security Audits",
        "App Store Guidelines Compliance"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      phase: "05",
      title: "Deployment",
      description: "App store submission and launch",
      duration: "1-2 weeks",
      deliverables: [
        "App Store Listings",
        "Production Builds",
        "Deployment Documentation",
        "Launch Checklist"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      phase: "06",
      title: "Maintenance & Support",
      description: "Ongoing updates and technical support",
      duration: "Ongoing",
      deliverables: [
        "Regular Updates",
        "Bug Fixes & Patches",
        "Performance Monitoring",
        "Feature Enhancements"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Key Features of React Native Development
  const keyFeatures = [
    {
      title: "Cross-Platform Development",
      description: "Single codebase for both iOS and Android apps",
      benefits: ["80%+ code sharing", "Consistent user experience", "Faster development cycles"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Native Performance",
      description: "Near-native performance using native components",
      benefits: ["Smooth animations", "Native APIs access", "Hardware acceleration"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Hot Reload",
      description: "Instant code updates without full app reload",
      benefits: ["Faster development", "Real-time changes", "Better developer experience"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Built-in security best practices",
      benefits: ["Secure data storage", "API protection", "Encrypted communications"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Offline Capabilities",
      description: "App functionality without internet connection",
      benefits: ["Data synchronization", "Local storage", "Background processing"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless backend and cloud services integration",
      benefits: ["Scalable infrastructure", "Real-time updates", "Push notifications"]
    }
  ];

  // Technical Stack
  const technicalStack = [
    {
      category: "Core Framework",
      items: [
        { name: "React Native", version: "0.74+", description: "Primary framework" },
        { name: "React.js", version: "18.2+", description: "UI library" },
        { name: "JavaScript/TypeScript", version: "ES2022+", description: "Programming language" }
      ]
    },
    {
      category: "UI Components",
      items: [
        { name: "React Native Paper", description: "Material Design components" },
        { name: "React Native Elements", description: "Cross-platform UI toolkit" },
        { name: "NativeBase", description: "Accessible component library" }
      ]
    },
    {
      category: "Navigation",
      items: [
        { name: "React Navigation", version: "6.x", description: "Stack and tab navigation" },
        { name: "React Native Navigation", description: "Native navigation solution" }
      ]
    },
    {
      category: "State Management",
      items: [
        { name: "Redux Toolkit", description: "Predictable state container" },
        { name: "Zustand", description: "Minimal state management" },
        { name: "MobX", description: "Reactive state management" }
      ]
    },
    {
      category: "Backend Integration",
      items: [
        { name: "REST APIs", description: "Traditional API integration" },
        { name: "GraphQL", description: "Efficient data querying" },
        { name: "Firebase", description: "BaaS platform" },
        { name: "Supabase", description: "Open source Firebase alternative" }
      ]
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", description: "Unit testing framework" },
        { name: "React Testing Library", description: "Component testing" },
        { name: "Detox", description: "End-to-end testing" }
      ]
    }
  ];

  // Common App Types
  const appTypes = [
    {
      type: "E-commerce Apps",
      icon: <ShoppingBag className="w-8 h-8" />,
      features: ["Product catalog", "Shopping cart", "Payment gateway", "Order tracking"]
    },
    {
      type: "Social Media Apps",
      icon: <Users className="w-8 h-8" />,
      features: ["User profiles", "News feed", "Messaging", "Media sharing"]
    },
    {
      type: "Enterprise Apps",
      icon: <Briefcase className="w-8 h-8" />,
      features: ["Employee portal", "Task management", "Reporting", "CRM integration"]
    },
    {
      type: "Health & Fitness Apps",
      icon: <Heart className="w-8 h-8" />,
      features: ["Activity tracking", "Health metrics", "Workout plans", "Progress charts"]
    },
    {
      type: "Education Apps",
      icon: <GraduationCap className="w-8 h-8" />,
      features: ["Course content", "Quizzes", "Progress tracking", "Video lessons"]
    },
    {
      type: "On-Demand Apps",
      icon: <Clock className="w-8 h-8" />,
      features: ["Service booking", "Real-time tracking", "In-app payments", "Ratings"]
    }
  ];

  // Development Packages
  const packages = [
    {
      name: "Basic Package",
      price: "$5,000 - $15,000",
      timeline: "4-8 weeks",
      features: [
        "Basic UI/UX Design",
        "Core Features Implementation",
        "Single Platform (iOS or Android)",
        "Basic Backend Integration",
        "App Store Submission",
        "3 Months Support"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Standard Package",
      price: "$15,000 - $40,000",
      timeline: "8-16 weeks",
      features: [
        "Custom UI/UX Design",
        "Cross-Platform Development",
        "Advanced Features",
        "API Integration",
        "Push Notifications",
        "Analytics Integration",
        "App Store Optimization",
        "6 Months Support"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Package",
      price: "$40,000+",
      timeline: "12-24 weeks",
      features: [
        "Premium UI/UX Design",
        "Complex Business Logic",
        "Third-party Integrations",
        "Offline Capabilities",
        "Real-time Features",
        "Advanced Security",
        "Performance Optimization",
        "White-label Solution",
        "1 Year Support & Maintenance"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Process Benefits
  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Develop once, deploy everywhere - save up to 40% compared to native development",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Time to Market",
      description: "30-40% faster development with hot reload and reusable components",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Native Performance",
      description: "Near-native performance with access to device hardware and native APIs",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Maintainability",
      description: "Single codebase makes updates and maintenance significantly easier",
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Mobile Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                React Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Development</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Build high-performance mobile applications for iOS and Android using a single codebase. 
                Experience native-like performance with faster development cycles and reduced costs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
                <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">iOS Development</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Android Development</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Cross-Platform</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm">Native Performance</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">React Native</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage the power of React Native to build stunning mobile applications with exceptional performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
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
              A structured, transparent process to ensure your project's success from concept to launch
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="space-y-8 md:space-y-12">
              {developmentPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-white border-4 border-blue-500 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} text-white font-bold text-lg mb-4`}>
                        {phase.phase}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {phase.duration}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Stack</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies I use to build robust React Native applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technicalStack.map((stack, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {stack.category}
                </h3>
                
                <div className="space-y-4">
                  {stack.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
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
      <section id="packages" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Packages</span>
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
                  index === 1 ? 'transform md:scale-105 md:-translate-y-4 shadow-2xl' : 'shadow-xl'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-white p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${pkg.color} text-white mb-4`}>
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
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
                      index === 1
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
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Benefits</span> of Our Approach
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600">
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                    <div className="text-sm text-gray-600">Code Sharing</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Faster Development</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Native Performance</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white">
                  <div className="flex items-center">
                    <Headphones className="w-8 h-8 mr-4" />
                    <div>
                      <h4 className="font-bold">Ongoing Support</h4>
                      <p className="text-sm text-blue-100">Post-launch maintenance and updates included</p>
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
          <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Let's discuss your project and create a mobile solution that drives results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
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
              
              <p className="mt-8 text-sm text-blue-200">
                Typically respond within 24 hours • Free initial consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add missing icon components
const ShoppingBag = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const Briefcase = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Heart = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const GraduationCap = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export default ReactNativePage;