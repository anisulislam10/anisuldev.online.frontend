import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const toolCategories = [
    {
      id: 'code-editors',
      name: t('tools.categories.code-editors'),
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-700',
      tools: [
        {
          name: 'VS Code',
          description: t('tools.descriptions.vscode'),
          icon: '💻',
          url: 'https://code.visualstudio.com/',
          tags: ['Editor', 'Free', 'Cross-platform']
        },
        {
          name: 'WebStorm',
          description: t('tools.descriptions.webstorm'),
          icon: '⚡',
          url: 'https://www.jetbrains.com/webstorm/',
          tags: ['IDE', 'Paid', 'IntelliJ']
        },
        {
          name: 'IntelliJ IDEA',
          description: t('tools.descriptions.intellij'),
          icon: '☕',
          url: 'https://www.jetbrains.com/idea/',
          tags: ['IDE', 'Paid', 'Java']
        },
        {
          name: 'Sublime Text',
          description: t('tools.descriptions.sublime'),
          icon: '✨',
          url: 'https://www.sublimetext.com/',
          tags: ['Editor', 'Freemium', 'Fast']
        }
      ]
    },
    {
      id: 'version-control',
      name: t('tools.categories.version-control'),
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-green-500 to-green-700',
      tools: [
        {
          name: 'Git',
          description: t('tools.descriptions.git'),
          icon: '🌳',
          url: 'https://git-scm.com/',
          tags: ['VCS', 'Free', 'Command-line']
        },
        {
          name: 'GitHub',
          description: t('tools.descriptions.github'),
          icon: '🐙',
          url: 'https://github.com',
          tags: ['Hosting', 'Free tier', 'CI/CD']
        },
        {
          name: 'GitLab',
          description: t('tools.descriptions.gitlab'),
          icon: '🦊',
          url: 'https://gitlab.com',
          tags: ['DevOps', 'Self-hosted', 'CI/CD']
        },
        {
          name: 'SourceTree',
          description: t('tools.descriptions.sourcetree'),
          icon: '🌿',
          url: 'https://www.sourcetreeapp.com/',
          tags: ['GUI', 'Free', 'Atlassian']
        }
      ]
    },
    {
      id: 'databases',
      name: t('tools.categories.databases'),
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-700',
      tools: [
        {
          name: 'MongoDB Compass',
          description: t('tools.descriptions.compass'),
          icon: '🍃',
          url: 'https://www.mongodb.com/products/compass',
          tags: ['NoSQL', 'GUI', 'Free']
        },
        {
          name: 'MySQL Workbench',
          description: t('tools.descriptions.mysql'),
          icon: '🐬',
          url: 'https://www.mysql.com/products/workbench/',
          tags: ['SQL', 'GUI', 'Free']
        },
        {
          name: 'PostgreSQL',
          description: t('tools.descriptions.postgres'),
          icon: '🐘',
          url: 'https://www.postgresql.org/',
          tags: ['SQL', 'Open-source', 'Advanced']
        },
        {
          name: 'Redis CLI',
          description: t('tools.descriptions.redis'),
          icon: '🔴',
          url: 'https://redis.io/',
          tags: ['In-memory', 'CLI', 'Fast']
        }
      ]
    },
    {
      id: 'api-testing',
      name: t('tools.categories.api-testing'),
      icon: <Server className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-700',
      tools: [
        {
          name: 'Postman',
          description: t('tools.descriptions.postman'),
          icon: '📬',
          url: 'https://www.postman.com/',
          tags: ['API', 'Testing', 'Documentation']
        },
        {
          name: 'Insomnia',
          description: t('tools.descriptions.insomnia'),
          icon: '💤',
          url: 'https://insomnia.rest/',
          tags: ['API', 'Open-source', 'GraphQL']
        },
        {
          name: 'Swagger UI',
          description: t('tools.descriptions.swagger'),
          icon: '📝',
          url: 'https://swagger.io/tools/swagger-ui/',
          tags: ['Documentation', 'OpenAPI', 'Interactive']
        },
        {
          name: 'Thunder Client',
          description: t('tools.descriptions.thunder'),
          icon: '⚡',
          url: 'https://www.thunderclient.com/',
          tags: ['VS Code', 'Lightweight', 'Free']
        }
      ]
    },
    {
      id: 'containerization',
      name: t('tools.categories.containerization'),
      icon: <Box className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-700',
      tools: [
        {
          name: 'Docker',
          description: t('tools.descriptions.docker'),
          icon: '🐳',
          url: 'https://www.docker.com/',
          tags: ['Containers', 'DevOps', 'Cross-platform']
        },
        {
          name: 'Docker Compose',
          description: t('tools.descriptions.compose'),
          icon: '🎼',
          url: 'https://docs.docker.com/compose/',
          tags: ['Orchestration', 'YAML', 'Multi-container']
        },
        {
          name: 'Kubernetes',
          description: t('tools.descriptions.k8s'),
          icon: '☸️',
          url: 'https://kubernetes.io/',
          tags: ['Orchestration', 'Scalable', 'Production']
        },
        {
          name: 'Podman',
          description: t('tools.descriptions.podman'),
          icon: '📦',
          url: 'https://podman.io/',
          tags: ['Containers', 'Daemonless', 'Rootless']
        }
      ]
    },
    {
      id: 'design',
      name: t('tools.categories.design'),
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-700',
      tools: [
        {
          name: 'Figma',
          description: t('tools.descriptions.figma'),
          icon: '🎨',
          url: 'https://www.figma.com/',
          tags: ['UI/UX', 'Collaborative', 'Web-based']
        },
        {
          name: 'Adobe XD',
          description: t('tools.descriptions.xd'),
          icon: '✏️',
          url: 'https://www.adobe.com/products/xd.html',
          tags: ['UI/UX', 'Adobe', 'Prototyping']
        },
        {
          name: 'Zeplin',
          description: t('tools.descriptions.zeplin'),
          icon: '🚀',
          url: 'https://zeplin.io/',
          tags: ['Handoff', 'Collaboration', 'Developer-friendly']
        },
        {
          name: 'InVision',
          description: t('tools.descriptions.invision'),
          icon: '👁️',
          url: 'https://www.invisionapp.com/',
          tags: ['Prototyping', 'Collaboration', 'Design System']
        }
      ]
    },
    {
      id: 'monitoring',
      name: t('tools.categories.monitoring'),
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-700',
      tools: [
        {
          name: 'Google Analytics',
          description: t('tools.descriptions.ga'),
          icon: '📊',
          url: 'https://analytics.google.com/',
          tags: ['Analytics', 'Free', 'Google']
        },
        {
          name: 'Sentry',
          description: t('tools.descriptions.sentry'),
          icon: '🚨',
          url: 'https://sentry.io/',
          tags: ['Error Tracking', 'Performance', 'Open-source']
        },
        {
          name: 'Datadog',
          description: t('tools.descriptions.datadog'),
          icon: '🐶',
          url: 'https://www.datadoghq.com/',
          tags: ['Monitoring', 'APM', 'Logs']
        },
        {
          name: 'New Relic',
          description: t('tools.descriptions.newrelic'),
          icon: '📈',
          url: 'https://newrelic.com/',
          tags: ['APM', 'Monitoring', 'Full-stack']
        }
      ]
    },
    {
      id: 'security',
      name: t('tools.categories.security'),
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-red-700',
      tools: [
        {
          name: 'OWASP ZAP',
          description: t('tools.descriptions.zap'),
          icon: '🛡️',
          url: 'https://www.zaproxy.org/',
          tags: ['Security', 'Open-source', 'Scanner']
        },
        {
          name: 'Burp Suite',
          description: t('tools.descriptions.burp'),
          icon: '🔍',
          url: 'https://portswigger.net/burp',
          tags: ['Security', 'Testing', 'Professional']
        },
        {
          name: 'Let\'s Encrypt',
          description: t('tools.descriptions.letsencrypt'),
          icon: '🔐',
          url: 'https://letsencrypt.org/',
          tags: ['SSL', 'Free', 'Automated']
        },
        {
          name: 'Nmap',
          description: t('tools.descriptions.nmap'),
          icon: '🗺️',
          url: 'https://nmap.org/',
          tags: ['Network', 'Scanner', 'Open-source']
        }
      ]
    },
    {
      id: 'productivity',
      name: t('tools.categories.productivity'),
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-700',
      tools: [
        {
          name: 'Notion',
          description: t('tools.descriptions.notion'),
          icon: '📒',
          url: 'https://www.notion.so/',
          tags: ['Notes', 'Wiki', 'Database']
        },
        {
          name: 'Obsidian',
          description: t('tools.descriptions.obsidian'),
          icon: '💎',
          url: 'https://obsidian.md/',
          tags: ['Markdown', 'Local', 'Linked Notes']
        },
        {
          name: 'Slack',
          description: t('tools.descriptions.slack'),
          icon: '💬',
          url: 'https://slack.com/',
          tags: ['Communication', 'Teams', 'Integrations']
        },
        {
          name: 'Trello',
          description: t('tools.descriptions.trello'),
          icon: '📋',
          url: 'https://trello.com/',
          tags: ['Kanban', 'Project Management', 'Visual']
        }
      ]
    },
    {
      id: 'terminal',
      name: t('tools.categories.terminal'),
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-gray-700 to-gray-900',
      tools: [
        {
          name: 'Windows Terminal',
          description: t('tools.descriptions.wt'),
          icon: '🪟',
          url: 'https://github.com/microsoft/terminal',
          tags: ['Terminal', 'Windows', 'Modern']
        },
        {
          name: 'iTerm2',
          description: t('tools.descriptions.iterm'),
          icon: '🍎',
          url: 'https://iterm2.com/',
          tags: ['Terminal', 'macOS', 'Features']
        },
        {
          name: 'Oh My Zsh',
          description: t('tools.descriptions.zsh'),
          icon: '😮',
          url: 'https://ohmyz.sh/',
          tags: ['Zsh', 'Framework', 'Plugins']
        },
        {
          name: 'PowerShell',
          description: t('tools.descriptions.powershell'),
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
    <div className="min-h-screen py-12 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 mt-10" style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}>
            <Terminal className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">{t('tools.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('tools.heading')} <span className="text-blue-600">{t('tools.headingHighlight')}</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('tools.subheading')}
          </p>
        </div>



        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('tools.searchPlaceholder')}
              className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', '--tw-ring-color': 'var(--accent-indigo)', '--tw-ring-opacity': '0.2' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{t('tools.filterTitle')}</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'hover:shadow-md'
                }`}
              style={selectedCategory === 'all' ? {} : { background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              <Layers className="w-5 h-5 mr-2" />
              {t('tools.categories.all')}
            </button>
            {toolCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'hover:shadow-md'
                  }`}
                style={selectedCategory === category.id ? {} : { background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
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
              className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'; e.currentTarget.style.borderColor = 'var(--accent-blue)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <div className="p-6">
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {tool.name}
                      </h3>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{tool.category}</span>
                    </div>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors"
                    style={{ background: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                    title={t('tools.card.visit')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="mb-6 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{ background: 'var(--bg-card-hover)', color: 'var(--text-muted)' }}
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
                  {t('tools.card.visit')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {searchedTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t('tools.empty.title')}</h3>
            <p className="max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('tools.empty.description')}
            </p>
          </div>
        )}

        {/* Recommendation Section */}
        <div className="mt-16 rounded-2xl p-8" style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>{t('tools.drivers.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'VS Code', description: t('tools.drivers.vscode'), icon: '💻', reason: t('tools.drivers.reasons.vscode') },
              { name: 'GitHub', description: t('tools.drivers.github'), icon: '🐙', reason: t('tools.drivers.reasons.github') },
              { name: 'Postman', description: t('tools.drivers.postman'), icon: '📬', reason: t('tools.drivers.reasons.postman') },
              { name: 'Docker', description: t('tools.drivers.docker'), icon: '🐳', reason: t('tools.drivers.reasons.docker') },
            ].map((tool, index) => (
              <div key={index} className="p-6 rounded-xl text-center shadow-sm transition-shadow" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                <div className="text-4xl mb-4">{tool.icon}</div>
                <div className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{tool.name}</div>
                <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{tool.description}</div>
                <div className="text-xs text-blue-600 font-semibold">{tool.reason}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-12 border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{t('tools.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('tools.cta.description')}
            </p>
            <a
              href="mailto:anis.inbox10@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {t('tools.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};