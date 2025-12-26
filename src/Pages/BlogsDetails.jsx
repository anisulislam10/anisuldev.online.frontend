import React, { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Eye,
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  Newspaper
} from 'lucide-react';

const API_KEY = '47c96c3dcfbbcce395d533de48d4b7aa';
const API_BASE_URL = 'https://api.mediastack.com/v1';

const BlogDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(location.state?.article || null);
  const [loading, setLoading] = useState(!location.state?.article);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  const fetchArticleByTitle = async (articleTitle) => {
    try {
      setLoading(true);
      setError(null);

      // Search for articles with similar keywords
      const keywords = articleTitle.split(' ').slice(0, 3).join(' ');
      
      const url = `${API_BASE_URL}/news?` +
        `access_key=${API_KEY}&` +
        `keywords=${encodeURIComponent(keywords)}&` +
        `languages=en&` +
        `limit=10&` +
        `sort=published_desc`;

      console.log('Fetching article:', url);

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        // Try to find exact match first, otherwise use first article
        const articleData = data.data.find(article => 
          article.title.toLowerCase().includes(articleTitle.toLowerCase().slice(0, 20))
        ) || data.data[0];
        
        const formattedArticle = {
          id: `article-${Date.now()}`,
          title: articleData.title || 'Untitled Article',
          description: articleData.description || 'No description available',
          content: articleData.description || 'Content available on original source',
          author: articleData.author || 'Unknown Author',
          publishedAt: articleData.published_at,
          date: new Date(articleData.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          readTime: `${Math.max(1, Math.ceil((articleData.description?.length || 300) / 300))} min read`,
          category: articleData.category ? articleData.category.charAt(0).toUpperCase() + articleData.category.slice(1) : 'Technology',
          tags: extractTags(articleData.title, articleData.description),
          image: articleData.image || getFallbackImage(articleData.category),
          url: articleData.url || '#',
          source: articleData.source || 'Unknown Source'
        };
        
        setArticle(formattedArticle);
        
        // Fetch related articles (excluding the current one)
        const related = data.data
          .filter(article => article.title !== articleData.title)
          .slice(0, 3)
          .map((related, index) => ({
            id: `related-${index}-${Date.now()}`,
            title: related.title,
            description: related.description,
            readTime: `${Math.max(1, Math.ceil((related.description?.length || 300) / 300))} min read`,
            image: related.image || getFallbackImage(related.category),
            url: related.url,
            source: related.source
          }));
        setRelatedArticles(related);
      } else {
        throw new Error('Article not found');
      }
    } catch (err) {
      console.error('Fetch article error:', err);
      setError(err.message);
      setArticle(getFallbackArticle(articleTitle));
    } finally {
      setLoading(false);
    }
  };

  const extractTags = (title, description) => {
    const text = (title + ' ' + (description || '')).toLowerCase();
    const popularTags = ['Technology', 'News', 'Update', 'Latest', 'Trending'];
    const foundTags = popularTags.filter(tag => 
      text.includes(tag.toLowerCase())
    );
    return foundTags.length > 0 ? foundTags : ['Technology', 'News', 'Update'];
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

  const getFallbackArticle = (title) => {
    return {
      id: `fallback-${Date.now()}`,
      title: title || 'Latest Technology News',
      description: 'This article discusses current technology trends and developments. Read the full article for more insights.',
      content: `<p>This article provides insights into the topic of "${title || 'technology'}". The content covers various aspects and implications in today's digital landscape.</p>
                <p>Stay informed about the latest developments and trends that are shaping our technological future.</p>
                <p>For more detailed information and updates, visit the original source.</p>`,
      author: 'Tech Correspondent',
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: '5 min read',
      category: 'Technology',
      tags: ['Technology', 'News', 'Update'],
      image: getFallbackImage('technology'),
      url: '#',
      source: 'Tech News'
    };
  };

  useEffect(() => {
    if (!article && title) {
      fetchArticleByTitle(decodeURIComponent(title));
    }
  }, [title, article]);

  const copyToClipboard = () => {
    if (article?.url && article.url !== '#') {
      navigator.clipboard.writeText(article.url);
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareLinks = article ? {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(article.url !== '#' ? article.url : window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(article.url !== '#' ? article.url : window.location.href)}&text=${encodeURIComponent(article.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(article.url !== '#' ? article.url : window.location.href)}&title=${encodeURIComponent(article.title)}`
  } : {};

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error && !article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
          
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h2>
            <p className="text-gray-600 mb-6">
              {error || 'The article you\'re looking for doesn\'t exist.'}
            </p>
            <Link 
              to="/blogs" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Check if article exists before rendering
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
          
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h2>
            <p className="text-gray-600 mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link 
              to="/blogs" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Safely get author initial
  const authorInitial = article.author && article.author.length > 0 
    ? article.author.charAt(0).toUpperCase() 
    : 'T'; // Default to 'T' for Tech

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
              {article.category || 'Technology'}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date || 'Recent'}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime || '5 min read'}
            </div>
            <div className="flex items-center">
              <Newspaper className="w-4 h-4 mr-1" />
              {article.source || 'Tech News'}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold mr-4">
                {authorInitial}
              </div>
              <div>
                <div className="font-bold">{article.author || 'Tech Correspondent'}</div>
                <div className="text-white/80 text-sm">News Contributor</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300">
                <Bookmark className="w-5 h-5" />
              </button>
              <button 
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300 relative"
              >
                {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {isCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg">
              <div className="flex items-center text-yellow-200">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Using fallback data: {error}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = getFallbackImage(article.category);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {(article.tags || []).map((tag, index) => (
              <span
                key={index}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-full border border-blue-100"
              >
                <Tag className="w-3 h-3 mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl font-semibold text-gray-900 mb-6">
              {article.description}
            </p>
            
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: article.content?.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>') || '<p>Content not available</p>'
              }}
            />
          </div>
        </article>

        {/* Source Attribution */}
        {article.url && article.url !== '#' && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-1">Original Source:</div>
                <div className="font-semibold text-gray-900">{article.source}</div>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Read on {article.source}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Share this article
          </h3>
          <div className="flex items-center space-x-4">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <a
                  key={related.id}
                  href={related.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = getFallbackImage('default');
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {related.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {related.readTime}
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blogs */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link 
            to="/blogs" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;