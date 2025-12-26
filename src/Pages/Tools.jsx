import React from 'react';
import {
  Code,
  Database,
  Cloud,
  Terminal,
  GitBranch,
  Palette,
  Shield,
  Cpu,
  Layout,
  Package,
  Server,
  Zap,
  Search,
  Monitor,
  Lock,
  MessageSquare,
  FileText,
  Layers,
  Box,
  Globe,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const Tools = () => {
  const toolCategories = [
    {
      id: 'code-editors',
      name: 'Code Editors & IDEs',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-700',
      tools: [
        {
          name: 'VS Code',
          description: 'Free, open-source code editor with extensive extensions',
          icon: '💻',
          url: 'https://code.visualstudio.com/',
          tags: ['Editor', 'Free', 'Cross-platform']
        },
        {
          name: 'WebStorm',
          description: 'Powerful IDE for JavaScript and TypeScript development',
          icon: '⚡',
          url: 'https://www.jetbrains.com/webstorm/',
          tags: ['IDE', 'Paid', 'IntelliJ']
        },
        {
          name: 'IntelliJ IDEA',
          description: 'Java IDE with excellent JavaScript/TypeScript support',
          icon: '☕',
          url: 'https://www.jetbrains.com/idea/',
          tags: ['IDE', 'Paid', 'Java']
        },
        {
          name: 'Sublime Text',
          description: 'Lightweight, fast text editor with powerful features',
          icon: '✨',
          url: 'https://www.sublimetext.com/',
          tags: ['Editor', 'Freemium', 'Fast']
        }
      ]
    },
    {
      id: 'version-control',
      name: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-green-500 to-green-700',
      tools: [
        {
          name: 'Git',
          description: 'Distributed version control system',
          icon: '🌳',
          url: 'https://git-scm.com/',
          tags: ['VCS', 'Free', 'Command-line']
        },
        {
          name: 'GitHub',
          description: 'Cloud-based Git repository hosting',
          icon: '🐙',
          url: 'https://github.com',
          tags: ['Hosting', 'Free tier', 'CI/CD']
        },
        {
          name: 'GitLab',
          description: 'Complete DevOps platform with Git repository',
          icon: '🦊',
          url: 'https://gitlab.com',
          tags: ['DevOps', 'Self-hosted', 'CI/CD']
        },
        {
          name: 'SourceTree',
          description: 'Free Git GUI client for Windows and Mac',
          icon: '🌿',
          url: 'https://www.sourcetreeapp.com/',
          tags: ['GUI', 'Free', 'Atlassian']
        }
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-700',
      tools: [
        {
          name: 'MongoDB Compass',
          description: 'GUI for MongoDB with visual query building',
          icon: '🍃',
          url: 'https://www.mongodb.com/products/compass',
          tags: ['NoSQL', 'GUI', 'Free']
        },
        {
          name: 'MySQL Workbench',
          description: 'Visual tool for database design and administration',
          icon: '🐬',
          url: 'https://www.mysql.com/products/workbench/',
          tags: ['SQL', 'GUI', 'Free']
        },
        {
          name: 'PostgreSQL',
          description: 'Powerful open-source relational database',
          icon: '🐘',
          url: 'https://www.postgresql.org/',
          tags: ['SQL', 'Open-source', 'Advanced']
        },
        {
          name: 'Redis CLI',
          description: 'Command-line interface for Redis',
          icon: '🔴',
          url: 'https://redis.io/',
          tags: ['In-memory', 'CLI', 'Fast']
        }
      ]
    },
    {
      id: 'api-testing',
      name: 'API Testing',
      icon: <Server className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-700',
      tools: [
        {
          name: 'Postman',
          description: 'Complete API development environment',
          icon: '📬',
          url: 'https://www.postman.com/',
          tags: ['API', 'Testing', 'Documentation']
        },
        {
          name: 'Insomnia',
          description: 'Open-source API client for REST and GraphQL',
          icon: '💤',
          url: 'https://insomnia.rest/',
          tags: ['API', 'Open-source', 'GraphQL']
        },
        {
          name: 'Swagger UI',
          description: 'Interactive API documentation',
          icon: '📝',
          url: 'https://swagger.io/tools/swagger-ui/',
          tags: ['Documentation', 'OpenAPI', 'Interactive']
        },
        {
          name: 'Thunder Client',
          description: 'Lightweight REST API client for VS Code',
          icon: '⚡',
          url: 'https://www.thunderclient.com/',
          tags: ['VS Code', 'Lightweight', 'Free']
        }
      ]
    },
    {
      id: 'containerization',
      name: 'Containerization',
      icon: <Box className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-700',
      tools: [
        {
          name: 'Docker',
          description: 'Platform for developing, shipping, running applications',
          icon: '🐳',
          url: 'https://www.docker.com/',
          tags: ['Containers', 'DevOps', 'Cross-platform']
        },
        {
          name: 'Docker Compose',
          description: 'Tool for defining and running multi-container apps',
          icon: '🎼',
          url: 'https://docs.docker.com/compose/',
          tags: ['Orchestration', 'YAML', 'Multi-container']
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration platform',
          icon: '☸️',
          url: 'https://kubernetes.io/',
          tags: ['Orchestration', 'Scalable', 'Production']
        },
        {
          name: 'Podman',
          description: 'Daemonless container engine',
          icon: '📦',
          url: 'https://podman.io/',
          tags: ['Containers', 'Daemonless', 'Rootless']
        }
      ]
    },
    {
      id: 'design',
      name: 'Design & Prototyping',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-700',
      tools: [
        {
          name: 'Figma',
          description: 'Collaborative interface design tool',
          icon: '🎨',
          url: 'https://www.figma.com/',
          tags: ['UI/UX', 'Collaborative', 'Web-based']
        },
        {
          name: 'Adobe XD',
          description: 'Vector-based UI/UX design tool',
          icon: '✏️',
          url: 'https://www.adobe.com/products/xd.html',
          tags: ['UI/UX', 'Adobe', 'Prototyping']
        },
        {
          name: 'Zeplin',
          description: 'Handoff designs and styleguides',
          icon: '🚀',
          url: 'https://zeplin.io/',
          tags: ['Handoff', 'Collaboration', 'Developer-friendly']
        },
        {
          name: 'InVision',
          description: 'Digital product design platform',
          icon: '👁️',
          url: 'https://www.invisionapp.com/',
          tags: ['Prototyping', 'Collaboration', 'Design System']
        }
      ]
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Analytics',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-700',
      tools: [
        {
          name: 'Google Analytics',
          description: 'Web analytics service',
          icon: '📊',
          url: 'https://analytics.google.com/',
          tags: ['Analytics', 'Free', 'Google']
        },
        {
          name: 'Sentry',
          description: 'Application monitoring and error tracking',
          icon: '🚨',
          url: 'https://sentry.io/',
          tags: ['Error Tracking', 'Performance', 'Open-source']
        },
        {
          name: 'Datadog',
          description: 'Cloud monitoring and security platform',
          icon: '🐶',
          url: 'https://www.datadoghq.com/',
          tags: ['Monitoring', 'APM', 'Logs']
        },
        {
          name: 'New Relic',
          description: 'Observability platform',
          icon: '📈',
          url: 'https://newrelic.com/',
          tags: ['APM', 'Monitoring', 'Full-stack']
        }
      ]
    },
    {
      id: 'security',
      name: 'Security Tools',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-red-700',
      tools: [
        {
          name: 'OWASP ZAP',
          description: 'Open-source web application security scanner',
          icon: '🛡️',
          url: 'https://www.zaproxy.org/',
          tags: ['Security', 'Open-source', 'Scanner']
        },
        {
          name: 'Burp Suite',
          description: 'Web vulnerability scanner',
          icon: '🔍',
          url: 'https://portswigger.net/burp',
          tags: ['Security', 'Testing', 'Professional']
        },
        {
          name: 'Let\'s Encrypt',
          description: 'Free SSL/TLS certificates',
          icon: '🔐',
          url: 'https://letsencrypt.org/',
          tags: ['SSL', 'Free', 'Automated']
        },
        {
          name: 'Nmap',
          description: 'Network discovery and security auditing',
          icon: '🗺️',
          url: 'https://nmap.org/',
          tags: ['Network', 'Scanner', 'Open-source']
        }
      ]
    },
    {
      id: 'productivity',
      name: 'Productivity',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-700',
      tools: [
        {
          name: 'Notion',
          description: 'All-in-one workspace',
          icon: '📒',
          url: 'https://www.notion.so/',
          tags: ['Notes', 'Wiki', 'Database']
        },
        {
          name: 'Obsidian',
          description: 'Knowledge base on local Markdown files',
          icon: '💎',
          url: 'https://obsidian.md/',
          tags: ['Markdown', 'Local', 'Linked Notes']
        },
        {
          name: 'Slack',
          description: 'Team communication platform',
          icon: '💬',
          url: 'https://slack.com/',
          tags: ['Communication', 'Teams', 'Integrations']
        },
        {
          name: 'Trello',
          description: 'Visual project management',
          icon: '📋',
          url: 'https://trello.com/',
          tags: ['Kanban', 'Project Management', 'Visual']
        }
      ]
    },
    {
      id: 'terminal',
      name: 'Terminal & CLI',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-gray-700 to-gray-900',
      tools: [
        {
          name: 'Windows Terminal',
          description: 'Modern terminal application for Windows',
          icon: '🪟',
          url: 'https://github.com/microsoft/terminal',
          tags: ['Terminal', 'Windows', 'Modern']
        },
        {
          name: 'iTerm2',
          description: 'Terminal emulator for macOS',
          icon: '🍎',
          url: 'https://iterm2.com/',
          tags: ['Terminal', 'macOS', 'Features']
        },
        {
          name: 'Oh My Zsh',
          description: 'Framework for managing Zsh configuration',
          icon: '😮',
          url: 'https://ohmyz.sh/',
          tags: ['Zsh', 'Framework', 'Plugins']
        },
        {
          name: 'PowerShell',
          description: 'Cross-platform automation and configuration tool',
          icon: '💪',
          url: 'https://microsoft.com/powershell',
          tags: ['Shell', 'Cross-platform', 'Automation']
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const allTools = toolCategories.flatMap(category => 
    category.tools.map(tool => ({
      ...tool,
      category: category.name,
      categoryId: category.id
    }))
  );

  const filteredTools = selectedCategory === 'all' 
    ? allTools 
    : allTools.filter(tool => tool.categoryId === selectedCategory);

  const searchedTools = searchQuery 
    ? filteredTools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredTools;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4 mt-10">
            <Terminal className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Developer Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential <span className="text-blue-600">Developer Tools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of software tools, applications, and utilities that enhance development workflow and productivity.
          </p>
        </div>

      

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tools by name, description, or tags..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <Layers className="w-5 h-5 mr-2" />
              All Tools
            </button>
            {toolCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchedTools.map((tool, index) => (
            <div
              key={`${tool.categoryId}-${index}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="p-6">
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <span className="text-sm text-gray-500">{tool.category}</span>
                    </div>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    title="Visit Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {searchedTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try a different search term or select another category to discover developer tools.
            </p>
          </div>
        )}

        {/* Recommendation Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Daily Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'VS Code', description: 'Primary code editor', icon: '💻', reason: 'Extensions & Speed' },
              { name: 'GitHub', description: 'Version control & CI/CD', icon: '🐙', reason: 'Integration & Community' },
              { name: 'Postman', description: 'API development', icon: '📬', reason: 'Testing & Documentation' },
              { name: 'Docker', description: 'Containerization', icon: '🐳', reason: 'Consistency & Deployment' },
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-1">{tool.name}</div>
                <div className="text-sm text-gray-600 mb-2">{tool.description}</div>
                <div className="text-xs text-blue-600 font-semibold">{tool.reason}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Missing a Tool?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Have a favorite developer tool that's not on the list? Let me know and I'll add it!
            </p>
            <a
              href="mailto:anis.inbox10@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Suggest a Tool
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};