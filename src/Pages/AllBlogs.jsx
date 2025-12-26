import React, { useState, useEffect } from 'react';
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

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // SEO Metadata
  const seoTitle = ' Blogs | Tech News | Interview Preparation Guides';
  const seoDescription = 'Comprehensive Node.js and Express.js interview questions and answers for junior to mid-level backend developers. Master backend development concepts.';
  const seoKeywords = 'Node.js interview questions, Express.js interview, backend developer interview, JavaScript interview, system design interview, software engineering interview';
  const seoImage = '/blogs-og-image.jpg';

  const categories = [
    { id: 'all', name: 'All Topics', color: 'bg-gray-100 text-gray-600' },
    { id: 'Fundamentals', name: 'Fundamentals', color: 'bg-blue-100 text-blue-600' },
    { id: 'Advanced', name: 'Advanced', color: 'bg-green-100 text-green-600' },
    { id: 'System Design', name: 'System Design', color: 'bg-purple-100 text-purple-600' },
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'Beginner', name: 'Beginner' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Advanced', name: 'Advanced' },
  ];

  const sortOptions = [
    { id: 'latest', name: 'Latest First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'views', name: 'Most Viewed' },
    { id: 'readingTime', name: 'Reading Time' },
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
      case 'Beginner': return 'bg-green-100 text-green-600';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-600';
      case 'Advanced': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Backend Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Latest Tech <span className="text-blue-400">Blogs</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive Node.js & Express.js interview preparation guides for junior to mid-level backend developers
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
              placeholder="Search articles, topics, or questions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
              aria-label="Search blog articles"
            />
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={`Filter by ${cat.name} category`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedDifficulty === diff.id
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={`Filter by ${diff.name} difficulty`}
                  >
                    {diff.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
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
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-label="Loading"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try a different search term or filter</p>
          </div>
        ) : (
          <>
            <section aria-label="Blog articles">
              <h2 className="sr-only">Blog Articles List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article 
                    key={article.id} 
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
                    itemScope 
                    itemType="https://schema.org/Article"
                  >
                    {article.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
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
                        <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold">
                          {getCategoryIcon(article.category)}
                          <span className="ml-1">{article.category}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
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
                          {article.content.metadata.views.toLocaleString()} views
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300" itemProp="headline">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                        {article.excerpt}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full" itemProp="keywords">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
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
                            <div className="text-sm font-medium text-gray-900" itemProp="name">{article.author.name}</div>
                            <div className="text-xs text-gray-500" itemProp="jobTitle">{article.author.role}</div>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          aria-label={`Read more about ${article.title}`}
                          itemProp="url"
                        >
                          Read Guide
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
                Showing {filteredArticles.length} of {blogs.length} articles
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </>
        )}

        {/* Author Section with semantic markup */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8" itemScope itemType="https://schema.org/Person">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="favico.png" 
                alt="Anisul Islam"
                className="w-full h-full object-cover"
                itemProp="image"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">Anisul Islam</h3>
              <p className="text-lg text-gray-600 mb-4" itemProp="jobTitle">Full Stack Software Engineer</p>
              <p className="text-gray-700" itemProp="description">
                I craft beautiful, performant web applications using modern technologies. Passionate about React.js, Node.js, Next.js, Express.js, MongoDB and the entire JavaScript ecosystem. Turning complex problems into simple, beautiful designs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm" itemProp="knowsAbout">React.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm" itemProp="knowsAbout">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm" itemProp="knowsAbout">Express.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm" itemProp="knowsAbout">MongoDB</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllBlogs;