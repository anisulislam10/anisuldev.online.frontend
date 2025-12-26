import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Server, 
  Globe, 
  Package,
  ShoppingCart,
  Shield,
  Brain,
  BookOpen,
  Layers,
  Star,
  TrendingUp,
  Award,
  Code,
  Database,
  Cloud,
  Zap
} from 'lucide-react';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Al Waqas Inventory App',
      description: 'Complete inventory management solution for paint & hardware businesses with barcode scanning and real-time stock updates',
      techStack: ['React Native', 'Redux', 'Firebase', 'Barcode Scanner'],
      platform: 'Mobile',
      category: 'Inventory Management',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.alwaqas.inventory',
      githubUrl: null,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.alwaqas.inventory',
      featured: true,
      status: 'Live',
      screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ]
    },
    {
      id: 2,
      name: 'Price Signal',
      description: 'Real-time price tracking and alert application for financial markets with advanced charting capabilities',
      techStack: ['React Native', 'WebSocket', 'Chart.js', 'Node.js'],
      platform: 'Mobile',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pricesignal.app',
      githubUrl: null,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.pricesignal.app',
      featured: true,
      status: 'Live'
    },
    {
      id: 3,
      name: 'Allsmosis App',
      description: 'Educational platform for language learning with interactive lessons and progress tracking',
      techStack: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
      platform: 'Mobile',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.allsmosis.app',
      githubUrl: null,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.allsmosis.app',
      featured: false,
      status: 'Live'
    },
    {
      id: 4,
      name: 'Saborly.es',
      description: 'Full-featured e-commerce platform for gourmet foods with payment integration and inventory management',
      techStack: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis'],
      platform: 'Web',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://saborly.es',
      featured: true,
      status: 'Live'
    },
    {
      id: 5,
      name: 'Al Waqas Business Suite',
      description: 'Comprehensive business management suite including POS, Inventory, and Accounting systems',
      techStack: ['MERN Stack', 'Redux', 'JWT', 'Socket.io', 'PDFKit'],
      platform: 'Web',
      category: 'Business Suite',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://alwaqaspaint.com',
      featured: true,
      status: 'Live',
      subProjects: [
        {
          name: 'Paint POS System',
          url: 'https://alwaqaspaint.com/pos'
        },
        {
          name: 'Hardware POS System',
          url: 'https://alwaqaspaint.com/hardware-pos'
        },
        {
          name: 'Inventory Management',
          url: 'https://alwaqaspaint.com/inventory'
        }
      ]
    },
    {
      id: 6,
      name: 'Taxara Admin Panel',
      description: 'Administrative dashboard for tax consulting services with client management and document processing',
      techStack: ['Node.js', 'Express', 'React', 'MySQL', 'AWS S3'],
      platform: 'Web',
      category: 'Admin Panel',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://taxara.co.uk',
      featured: false,
      status: 'Live'
    },
    {
      id: 7,
      name: 'Brain Bank Dashboard',
      description: 'Interactive dashboard for educational content management with analytics and user progress tracking',
      techStack: ['MERN Stack', 'Chart.js', 'WebSocket', 'AWS'],
      platform: 'Web',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://brainbank.app',
      featured: true,
      status: 'Live'
    },
    {
      id: 8,
      name: 'Sharplogicians Website',
      description: 'Professional services website with portfolio showcase, client management, and service booking',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      platform: 'Web',
      category: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://sharplogicians.com',
      featured: false,
      status: 'Live'
    },
    {
      id: 9,
      name: 'Laraib Online Academy',
      description: 'Online Quran learning platform with video lessons, progress tracking, and teacher-student communication',
      techStack: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      platform: 'Web',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://laraibquranacademy.online',
      featured: false,
      status: 'Live'
    },
    {
      id: 10,
      name: 'Digidaal',
      description: 'Digital agency platform with project management, client portal, and portfolio showcase',
      techStack: ['MERN Stack', 'Redux', 'Stripe', 'AWS', 'Docker'],
      platform: 'Web',
      category: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      playStoreUrl: null,
      githubUrl: null,
      liveUrl: 'https://digidaal.com',
      featured: true,
      status: 'Live'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Layers className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'web', name: 'Web Applications', icon: <Globe className="w-5 h-5" /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'education', name: 'Education', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'business', name: 'Business Suite', icon: <Package className="w-5 h-5" /> }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => {
        if (selectedCategory === 'mobile') return project.platform === 'Mobile';
        if (selectedCategory === 'web') return project.platform === 'Web';
        if (selectedCategory === 'ecommerce') return project.category === 'E-commerce';
        if (selectedCategory === 'education') return project.category === 'Education';
        if (selectedCategory === 'business') return project.category === 'Business Suite';
        return true;
      });
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  const getPlatformIcon = (platform) => {
    return platform === 'Mobile' ? <Smartphone className="w-4 h-4" /> : <Globe className="w-4 h-4" />;
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Inventory Management': return <Package className="w-4 h-4" />;
      case 'Finance': return <TrendingUp className="w-4 h-4" />;
      case 'E-commerce': return <ShoppingCart className="w-4 h-4" />;
      case 'Business Suite': return <Layers className="w-4 h-4" />;
      case 'Admin Panel': return <Shield className="w-4 h-4" />;
      case 'Education': return <BookOpen className="w-4 h-4" />;
      case 'Professional Services': return <Award className="w-4 h-4" />;
      case 'Digital Agency': return <Code className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getTechStackIcon = (tech) => {
    switch (tech) {
      case 'React Native': return <Smartphone className="w-4 h-4" />;
      case 'React.js': return <Code className="w-4 h-4" />;
      case 'Next.js': return <Zap className="w-4 h-4" />;
      case 'Node.js': return <Server className="w-4 h-4" />;
      case 'Express': return <Server className="w-4 h-4" />;
      case 'MongoDB': return <Database className="w-4 h-4" />;
      case 'MySQL': return <Database className="w-4 h-4" />;
      case 'AWS': return <Cloud className="w-4 h-4" />;
      case 'Firebase': return <Cloud className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Professional Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-blue-400">Projects</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A showcase of production-grade applications built with modern technologies.
              From mobile apps to enterprise web solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.platform === 'Mobile').length}
            </div>
            <div className="text-gray-600">Mobile Apps</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {projects.filter(p => p.platform === 'Web').length}
            </div>
            <div className="text-gray-600">Web Applications</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-gray-600">Featured Projects</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  ● {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold flex items-center">
                    {getPlatformIcon(project.platform)}
                    <span className="ml-1">{project.platform}</span>
                  </span>
                  <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold flex items-center">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {getTechStackIcon(tech)}
                        <span className="ml-1">{tech}</span>
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Sub Projects (for Al Waqas Business Suite) */}
                {project.subProjects && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Components</h4>
                    <div className="space-y-2">
                      {project.subProjects.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center space-x-4">
                    {/* Play Store Link */}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-green-600 transition-colors"
                        title="View on Play Store"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </a>
                    )}

                    {/* GitHub Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {/* Live URL */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                        title="Visit Live Site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React Native', count: 3, icon: <Smartphone className="w-8 h-8" /> },
              { name: 'Node.js', count: 8, icon: <Server className="w-8 h-8" /> },
              { name: 'Express.js', count: 6, icon: <Server className="w-8 h-8" /> },
              { name: 'React.js', count: 7, icon: <Code className="w-8 h-8" /> },
              { name: 'MongoDB', count: 5, icon: <Database className="w-8 h-8" /> },
              { name: 'Next.js', count: 1, icon: <Zap className="w-8 h-8" /> },
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">{tech.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-1">{tech.count}</div>
                <div className="text-sm text-gray-600">{tech.name} Projects</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:anisul.official2020@gmail.com"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/blogs"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View My Blogs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;