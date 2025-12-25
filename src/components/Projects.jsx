import React from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Smartphone,
  Globe,
  Server,
  Zap,
  Eye,
  Code,
  Star
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-featured online store with payment processing and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      liveLink: "https://ecommerce-demo.vercel.app",
      githubLink: "https://github.com/username/ecommerce-platform",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Full Stack",
      status: "Live"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      liveLink: "https://taskflow-app.vercel.app",
      githubLink: "https://github.com/username/taskflow",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
      category: "Web App",
      status: "Live"
    },
    {
      id: 3,
      name: "Food Delivery App",
      description: "Mobile food delivery with real-time tracking and payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80",
      liveLink: "#",
      githubLink: "https://github.com/username/food-delivery-app",
      techStack: ["React Native", "Firebase", "Redux", "Google Maps API"],
      category: "Mobile App",
      status: "App Store"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-4">
            <Code className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing full-stack development expertise from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                        title="View Code"
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveLink && project.liveLink !== "#" ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </span>
                    </a>
                  ) : (
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300">
                      <span className="flex items-center justify-center space-x-2">
                        <Smartphone className="w-4 h-4" />
                        <span>App Store</span>
                      </span>
                    </button>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-50 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Code className="w-4 h-4" />
                      <span>Code</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Want to See More?
              </h3>
              <p className="text-gray-600 text-sm">
                Check my GitHub for complete source code
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-all duration-300"
              >
                <span>Case Study</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Projects", value: "50+", icon: <Zap />, color: "from-blue-500 to-purple-500" },
            { label: "Clients", value: "30+", icon: <Star />, color: "from-blue-500 to-purple-500" },
            { label: "Commits", value: "5K+", icon: <Code />, color: "from-blue-500 to-purple-500" },
            { label: "Experience", value: "5+", icon: <Globe />, color: "from-blue-500 to-purple-500" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;