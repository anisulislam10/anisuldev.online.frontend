import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Filter,
  Tag,
  Eye,
  BookOpen,
  TrendingUp,
  RefreshCw,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

const API_KEY = '47c96c3dcfbbcce395d533de48d4b7aa';
const API_BASE_URL = 'https://api.mediastack.com/v1';

const AllBlogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [sortBy, setSortBy] = useState('published_desc');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const categories = [
    { id: 'technology', name: 'Technology', color: 'bg-blue-100 text-blue-600' },
    { id: 'business', name: 'Business', color: 'bg-green-100 text-green-600' },
    { id: 'entertainment', name: 'Entertainment', color: 'bg-purple-100 text-purple-600' },
    { id: 'health', name: 'Health', color: 'bg-red-100 text-red-600' },
    { id: 'science', name: 'Science', color: 'bg-indigo-100 text-indigo-600' },
    { id: 'sports', name: 'Sports', color: 'bg-orange-100 text-orange-600' }
  ];

  const sortOptions = [
    { id: 'published_desc', name: 'Latest' },
    { id: 'published_asc', name: 'Oldest' },
    { id: 'popularity', name: 'Popular' }
  ];

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        access_key: API_KEY,
        languages: 'en',
        limit: '12',
        offset: ((page - 1) * 12).toString(),
        sort: sortBy
      });

      // Add category filter
      if (selectedCategory) {
        params.append('categories', selectedCategory);
      }

      // Add search keywords if provided
      if (searchQuery.trim()) {
        params.append('keywords', searchQuery);
      }

      const url = `${API_BASE_URL}/news?${params.toString()}`;
      console.log('Fetching from:', url); // Debug log

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data); // Debug log

      if (data.data && data.data.length > 0) {
        const filteredArticles = data.data
          .filter(article => 
            article.title && 
            article.title !== '[Removed]'
          )
          .map((article, index) => ({
            id: `article-${index}-${Date.now()}`,
            title: article.title,
            description: article.description || 'No description available',
            author: article.author || 'Unknown Author',
            publishedAt: article.published_at,
            date: new Date(article.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            readTime: `${Math.max(1, Math.ceil((article.description?.length || 300) / 300))} min read`,
            category: article.category ? article.category.charAt(0).toUpperCase() + article.category.slice(1) : 'General',
            image: article.image || getFallbackImage(article.category),
            url: article.url,
            source: article.source || 'Unknown Source',
            content: article.description || 'Content available on original source'
          }));

        setArticles(filteredArticles);
        setTotalResults(data.pagination?.total || filteredArticles.length);
      } else {
        throw new Error('No articles found');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setArticles(getFallbackArticles());
    } finally {
      setLoading(false);
    }
  };

  const getFallbackImage = (category) => {
    const categoryMap = {
      'technology': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'business': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'entertainment': 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'health': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'science': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'default': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    };
    
    return categoryMap[category?.toLowerCase()] || categoryMap['default'];
  };

  const getFallbackArticles = () => [
    {
      id: 1,
      title: "Latest Technology Trends 2024",
      description: "Explore the latest trends and technologies shaping the tech industry in 2024.",
      author: "Tech Insights",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      url: "#",
      source: "Tech News"
    },
    {
      id: 2,
      title: "AI Integration in Modern Applications",
      description: "How artificial intelligence is transforming application development and user experiences.",
      author: "AI Research",
      date: new Date(Date.now() - 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      url: "#",
      source: "AI Digest"
    },
    {
      id: 3,
      title: "Mobile Development Best Practices",
      description: "Essential patterns and techniques for building high-performance mobile applications.",
      author: "Mobile Dev Team",
      date: new Date(Date.now() - 172800000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      url: "#",
      source: "Mobile Weekly"
    }
  ];

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory, sortBy, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchArticles();
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  const handleRefresh = () => {
    fetchArticles();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Tech News Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Latest <span className="text-yellow-300">Tech News</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay updated with the latest technology news and articles from around the world
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <form onSubmit={handleSearch} className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technology news..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700"
              >
                Search
              </button>
            </form>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      Sort by: {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center px-4 py-3 bg-white rounded-xl border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Loading...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center text-red-600">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Error loading articles: {error}</span>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading latest tech news...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try a different search term or category</p>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = getFallbackImage(article.category);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full">
                        {article.source}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="line-clamp-1">{article.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${encodeURIComponent(article.title)}`}
                        state={{ article }}
                        className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-6 py-2 bg-white rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-gray-700 font-medium">
                  Page {page} of {Math.ceil(totalResults / 12)}
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={articles.length < 12}
                  className="px-6 py-2 bg-white rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 text-center text-gray-600">
              Showing {articles.length} of {totalResults} articles
            </div>
          </>
        )}

        {/* Powered by Mediastack */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-gray-600 mr-2">Powered by</span>
            <span className="font-bold text-blue-600">Mediastack API</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Access to live news from global sources
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;