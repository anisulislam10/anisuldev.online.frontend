import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Tag,
  TrendingUp,
  MessageCircle,
  Eye,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

const API_KEY = '47c96c3dcfbbcce395d533de48d4b7aa';
const API_BASE_URL = 'https://api.mediastack.com/v1';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const blogCategories = [
    { name: "Technology", count: 12, color: "bg-blue-100 text-blue-600" },
    { name: "Programming", count: 8, color: "bg-green-100 text-green-600" },
    { name: "Web Development", count: 6, color: "bg-purple-100 text-purple-600" },
    { name: "Mobile", count: 5, color: "bg-orange-100 text-orange-600" },
    { name: "Artificial Intelligence", count: 4, color: "bg-red-100 text-red-600" },
    { name: "Startups", count: 7, color: "bg-indigo-100 text-indigo-600" }
  ];

  const popularTags = [
    "React", "JavaScript", "Node.js", "TypeScript", "MongoDB", 
    "Docker", "AWS", "Next.js", "Python", "Machine Learning"
  ];

 const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

const fetchLatestArticles = async () => {
  try {
    setLoading(true);
    setError(null);

    // Check cache first
    const cacheKey = 'homepage-articles-cache';
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const now = Date.now();
      
      // Use cache if less than 30 minutes old
      if (now - timestamp < CACHE_DURATION) {
        console.log('Using cached articles');
        const formattedArticles = formatArticles(data);
        setBlogPosts(formattedArticles);
        setCategories(extractCategories(formattedArticles));
        setLoading(false);
        return;
      }
    }

    // Only make API call if no valid cache
    const url = `${API_BASE_URL}/news?` +
      `access_key=${API_KEY}&` +
      `categories=technology&` +
      `languages=en&` +
      `limit=3&` +
      `sort=published_desc`;

    const response = await fetch(url);
    
    if (!response.ok) {
      // If API fails, try to use stale cache
      if (cachedData) {
        const { data } = JSON.parse(cachedData);
        console.log('API failed, using stale cache');
        const formattedArticles = formatArticles(data);
        setBlogPosts(formattedArticles);
        setCategories(extractCategories(formattedArticles));
        throw new Error('Using cached data: API rate limit reached');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      // Cache the response
      const cacheData = {
        data: data.data,
        timestamp: Date.now()
      };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      
      const formattedArticles = formatArticles(data.data);
      setBlogPosts(formattedArticles);
      setCategories(extractCategories(formattedArticles));
    } else {
      throw new Error('No articles found');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    setError(err.message);
    setBlogPosts(getFallbackPosts());
  } finally {
    setLoading(false);
  }
};

const formatArticles = (articles) => {
  return articles
    .filter(article => 
      article.title && 
      article.title !== '[Removed]'
    )
    .slice(0, 3)
    .map((article, index) => ({
      id: `article-${index}-${Date.now()}`,
      title: article.title,
      excerpt: article.description || 'Read the full article for more details...',
      author: article.author || 'Tech Correspondent',
      date: new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      publishedAt: article.published_at,
      readTime: `${Math.max(1, Math.ceil((article.description?.length || 300) / 300))} min read`,
      category: article.category ? article.category.charAt(0).toUpperCase() + article.category.slice(1) : 'Technology',
      tags: extractTags(article.title, article.description),
      image: article.image || getFallbackImage(article.category),
      url: article.url || '#',
      source: article.source || 'Tech News',
      views: `${Math.floor(Math.random() * 10) + 1}K`,
      comments: Math.floor(Math.random() * 100),
      featured: index === 0,
      content: article.description || 'Content available on original source'
    }));
};

  const extractTags = (title, description) => {
    const text = (title + ' ' + (description || '')).toLowerCase();
    const allTags = [...popularTags];
    const foundTags = allTags.filter(tag => 
      text.includes(tag.toLowerCase())
    );
    return foundTags.slice(0, 4).length > 0 ? foundTags.slice(0, 4) : ['Technology', 'News', 'Update'];
  };

  const extractCategories = (articles) => {
    const categoryCounts = {};
    articles.forEach(article => {
      if (article.category) {
        categoryCounts[article.category] = (categoryCounts[article.category] || 0) + 1;
      }
    });
    
    return Object.entries(categoryCounts).map(([name, count], index) => ({
      name,
      count,
      color: blogCategories[index % blogCategories.length].color
    }));
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

  const getFallbackPosts = () => [
    {
      id: 1,
      title: "Latest Technology Trends 2024",
      excerpt: "Explore the latest trends and technologies shaping the tech industry in 2024.",
      author: "Tech Insights",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "8 min read",
      category: "Technology",
      tags: ["Tech", "Trends", "2024", "Innovation"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      views: "1.2K",
      comments: 42,
      featured: true,
      url: "#"
    },
    {
      id: 2,
      title: "AI Integration in Modern Applications",
      excerpt: "How artificial intelligence is transforming application development and user experiences.",
      author: "AI Research",
      date: new Date(Date.now() - 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "10 min read",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Development", "Innovation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      views: "980",
      comments: 28,
      featured: false,
      url: "#"
    },
    {
      id: 3,
      title: "Mobile Development Best Practices",
      excerpt: "Essential patterns and techniques for building high-performance mobile applications.",
      author: "Mobile Dev Team",
      date: new Date(Date.now() - 172800000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "12 min read",
      category: "Technology",
      tags: ["Mobile", "Development", "Best Practices"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      views: "1.5K",
      comments: 56,
      featured: false,
      url: "#"
    }
  ];

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  const handleRefresh = () => {
    fetchLatestArticles();
  };

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 font-semibold mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Tech Articles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fresh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest technology news, tutorials, and industry insights.
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Refresh Articles'}
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-center text-yellow-700">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Showing cached articles: {error}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Loading latest articles...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 ${
                        post.featured ? 'md:col-span-2' : ''
                      }`}
                    >
                      {/* Post Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = getFallbackImage(post.category);
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats & Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views} views
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments} comments
                            </div>
                          </div>
                          <Link
                            to={`/blog/${encodeURIComponent(post.title)}`}
                            state={{ article: post }}
                            className="group flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            <span className="mr-2">Read More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                  <Link 
                    to="/blogs"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto inline-flex"
                  >
                    <span>View All Blog Posts</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Trending Categories
              </h3>
              <div className="space-y-3">
                {(categories.length > 0 ? categories : blogCategories).map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${category.color.split(' ')[0]}`}></div>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">
                        {category.name}
                      </span>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Source Attribution */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time News</h3>
              <p className="text-gray-600 mb-4">
                Articles are fetched from real news sources using Mediastack API, updated daily.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Live data from global sources</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Latest Articles</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">Daily</div>
            <div className="text-gray-600">Updates</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">Real</div>
            <div className="text-gray-600">News Sources</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;