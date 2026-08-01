import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  BookOpen,
  Code,
  Database,
  Server,
  Shield,
  TrendingUp,
  RefreshCw,
  AlertCircle,
  ExternalLink,
  Star,
  Bookmark,
  Eye
} from 'lucide-react';

// Import blog data
import { blogs, getBlogsByCategory, searchBlogs } from '../data/blogs';
import SEOHead from '../components/SEOHead';
import { WebsiteStructuredData, BreadcrumbStructuredData } from '../components/StructuredData';

const AllBlogs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // SEO Metadata
  const seoTitle = t('blogs_page.meta.title');
  const seoDescription = t('blogs_page.meta.description');
  const seoKeywords = t('blogs_page.meta.keywords');
  const seoImage = '/blogs-og-image.jpg';

  const categories = [
    { id: 'all', name: t('blogs_page.filters.categories.all'), color: 'bg-gray-100 text-gray-600' },
    { id: 'Fundamentals', name: t('blogs_page.filters.categories.fundamentals'), color: 'bg-blue-100 text-blue-600' },
    { id: 'Advanced', name: t('blogs_page.filters.categories.advanced'), color: 'bg-green-100 text-green-600' },
    { id: 'System Design', name: t('blogs_page.filters.categories.systemDesign'), color: 'bg-purple-100 text-purple-600' },
  ];

  const difficulties = [
    { id: 'all', name: t('blogs_page.filters.difficulties.all') },
    { id: 'Beginner', name: t('blogs_page.filters.difficulties.beginner') },
    { id: 'Intermediate', name: t('blogs_page.filters.difficulties.intermediate') },
    { id: 'Advanced', name: t('blogs_page.filters.difficulties.advanced') },
  ];

  const sortOptions = [
    { id: 'latest', name: t('blogs_page.filters.sortOptions.latest') },
    { id: 'popular', name: t('blogs_page.filters.sortOptions.popular') },
    { id: 'views', name: t('blogs_page.filters.sortOptions.views') },
    { id: 'readingTime', name: t('blogs_page.filters.sortOptions.readingTime') },
  ];

  useEffect(() => {
    loadArticles();
  }, [selectedCategory, selectedDifficulty, sortBy, searchQuery]);

  const loadArticles = () => {
    setLoading(true);

    setTimeout(() => {
      let filtered = [...blogs];

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(blog => blog.category === selectedCategory);
      }

      if (selectedDifficulty !== 'all') {
        filtered = filtered.filter(blog => blog.difficulty === selectedDifficulty);
      }

      if (searchQuery.trim()) {
        filtered = searchBlogs(searchQuery);
      }

      switch (sortBy) {
        case 'latest':
          filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'popular':
          filtered.sort((a, b) => b.content.metadata.likes - a.content.metadata.likes);
          break;
        case 'views':
          filtered.sort((a, b) => b.content.metadata.views - a.content.metadata.views);
          break;
        case 'readingTime':
          filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
          break;
        default:
          break;
      }

      setArticles(filtered);
      setFilteredArticles(filtered);
      setLoading(false);
    }, 300);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    loadArticles();
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
      case 'Intermediate': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      case 'Advanced': return 'bg-rose-500/10 text-rose-500 border border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
    }
  };
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Fundamentals': return <Code className="w-4 h-4" />;
      case 'Advanced': return <Server className="w-4 h-4" />;
      case 'System Design': return <Database className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  // Breadcrumb items for structured data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://anisuldev.online/' },
    { name: 'Blogs', url: 'https://anisuldev.online/blogs' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* SEO Components */}
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        ogImage={seoImage}
      />
      <WebsiteStructuredData />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Hidden semantic elements for SEO */}
      <div className="sr-only" aria-hidden="true">
        <h1>Node.js and Express.js Interview Preparation Blog</h1>
        <p>Comprehensive collection of Node.js and Express.js interview questions, answers, and guides for backend developers. Covering fundamentals to advanced topics.</p>
        <ul>
          <li>Node.js Interview Questions</li>
          <li>Express.js Interview Questions</li>
          <li>JavaScript Backend Development</li>
          <li>System Design Interview Preparation</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="text-white" style={{ background: 'var(--gradient-hero)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', backdropFilter: 'blur(16px)' }}>
              <BookOpen className="w-4 h-4 mr-2" style={{ color: 'var(--accent-indigo)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t('blogs_page.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('blogs_page.heading')} <span className="gradient-text animate-grad-shift">{t('blogs_page.headingHighlight')}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('blogs_page.subheading')}
            </p>

            {/* Search Schema */}
            <div itemScope itemType="https://schema.org/WebSite" className="sr-only">
              <meta itemProp="url" content="https://anisuldev.online/blogs" />
              <form itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
                <meta itemProp="target" content="https://anisuldev.online/blogs?q={search_term_string}" />
                <input itemProp="query-input" name="search_term_string" required type="text" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <form onSubmit={handleSearch} className="relative mb-8" role="search" aria-label="Search blogs">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('blogs_page.searchPlaceholder')}
              className="w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all duration-300"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
              aria-label="Search blog articles"
            />
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t('blogs_page.filters.category')}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === cat.id
                      ? 'text-white shadow-lg'
                      : 'hover:bg-gray-200'
                      }`}
                    style={selectedCategory === cat.id ? { background: 'var(--gradient-hero)' } : { background: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                    aria-label={`Filter by ${cat.name} category`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t('blogs_page.filters.difficulty')}
              </label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedDifficulty === diff.id
                      ? 'text-white shadow-lg'
                      : 'hover:bg-gray-200'
                      }`}
                    style={selectedDifficulty === diff.id ? { background: 'var(--gradient-hero)' } : { background: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                    aria-label={`Filter by ${diff.name} difficulty`}
                  >
                    {diff.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="sort-select" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t('blogs_page.filters.sort')}
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                aria-label="Sort articles"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Articles List with semantic HTML */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--accent-indigo)' }} aria-label="Loading"></div>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{t('blogs_page.status.loading')}</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t('blogs_page.status.noResults')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('blogs_page.status.tryDifferent')}</p>
          </div>
        ) : (
          <>
            <section aria-label="Blog articles">
              <h2 className="sr-only">Blog Articles List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
                    itemScope
                    itemType="https://schema.org/Article"
                  >
                    {article.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                          style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-indigo)', color: 'var(--accent-indigo)', backdropFilter: 'blur(8px)' }}>
                          <Star className="w-3 h-3 mr-1" />
                          {t('blogs_page.card.featured')}
                        </span>
                      </div>
                    )}

                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-semibold">
                          {getCategoryIcon(article.category)}
                          <span className="ml-1">{article.category}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                        <time className="flex items-center" dateTime={article.date} itemProp="datePublished">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </time>
                        <div className="flex items-center" itemProp="timeRequired" content={`PT${article.readTime.replace(' min read', '')}M`}>
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.content.metadata.views.toLocaleString()} {t('blogs_page.card.views')}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-indigo)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        itemProp="headline">
                        {article.title}
                      </h3>

                      <p className="mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }} itemProp="description">
                        {article.excerpt}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-3 py-1 text-xs font-medium rounded-full" style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }} itemProp="keywords">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full" style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                            +{article.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="w-full h-full object-cover"
                              itemProp="image"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }} itemProp="name">{article.author.name}</div>
                            <div className="text-xs" style={{ color: 'var(--text-muted)' }} itemProp="jobTitle">{article.author.role}</div>
                          </div>
                        </div>

                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          style={{ background: 'var(--gradient-hero)' }}
                          aria-label={`Read more about ${article.title}`}
                          itemProp="url"
                        >
                          {t('blogs_page.card.readGuide')}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-12 text-center text-gray-600">
              <p>
                {t('blogs_page.status.showing')} {filteredArticles.length} {t('blogs_page.status.of')} {blogs.length} {t('blogs_page.status.articles')}
                {searchQuery && ` ${t('blogs_page.status.for')} "${searchQuery}"`}
              </p>
            </div>
          </>
        )}

        {/* Author Section with semantic markup */}
        <section className="mt-16 rounded-2xl p-8 border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }} itemScope itemType="https://schema.org/Person">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: 'var(--bg-card)' }}>
              <img
                src="favico.png"
                alt="Anisul Islam"
                className="w-full h-full object-cover"
                itemProp="image"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }} itemProp="name">Anisul Islam</h3>
              <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }} itemProp="jobTitle">{t('blogs_page.author.role')}</p>
              <p style={{ color: 'var(--text-secondary)' }} itemProp="description">
                {t('blogs_page.author.description')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-indigo)', border: '1px solid var(--border-subtle)' }} itemProp="knowsAbout">React.js</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-indigo)', border: '1px solid var(--border-subtle)' }} itemProp="knowsAbout">Node.js</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-indigo)', border: '1px solid var(--border-subtle)' }} itemProp="knowsAbout">Express.js</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-indigo)', border: '1px solid var(--border-subtle)' }} itemProp="knowsAbout">MongoDB</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllBlogs;