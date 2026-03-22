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
    <section id="projects" className="py-20" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 font-semibold mb-4">
            <Code className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            My <span className="gradient-text animate-grad-shift">Work</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Showcasing full-stack development expertise from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
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
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.name}</h3>
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors duration-300"
                        style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}
                        title="View Code"
                      >
                        <Github className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors duration-300"
                        style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-300"
                        style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
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
                      className="flex-1 text-white px-4 py-2.5 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                      style={{ background: 'var(--gradient-brand)' }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </span>
                    </a>
                  ) : (
                    <button className="flex-1 text-white px-4 py-2.5 rounded-lg font-semibold text-center transition-all duration-300"
                      style={{ background: 'var(--gradient-brand)' }}>
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
                    className="flex-1 border transition-all duration-300 px-4 py-2.5 rounded-lg font-semibold text-center"
                    style={{ borderColor: 'var(--accent-indigo)', color: 'var(--accent-indigo)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--bg-card-hover)';
                      e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                      e.currentTarget.style.color = 'var(--accent-indigo)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl p-8 border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                Want to See More?
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Check my GitHub for complete source code
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="border px-6 py-2 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300"
                style={{ borderColor: 'var(--accent-indigo)', color: 'var(--accent-indigo)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
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
              className="rounded-xl p-4 transition-all duration-300 text-center"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;