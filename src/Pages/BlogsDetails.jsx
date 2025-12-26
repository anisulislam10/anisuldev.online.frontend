import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Share2,
  Bookmark,
  ThumbsUp,
  Eye,
  MessageCircle,
  ChevronRight,
  Star,
  Download,
  Printer,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  TrendingUp
} from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Install: npm install react-helmet-async

// Import blog data
import { getBlogBySlug, blogs } from '../data/blogs';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getBlogBySlug(slug);
  
  const [isCopied, setIsCopied] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (article) {
      // Get related articles (excluding current one)
      const related = blogs
        .filter(blog => blog.id !== article.id && blog.category === article.category)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [article]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-600 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-600 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Fundamentals': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'Advanced': return 'bg-green-100 text-green-600 border-green-200';
      case 'System Design': return 'bg-purple-100 text-purple-600 border-purple-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Share on social media
  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const title = article?.title || '';
    const text = article?.description || '';
    
    const platforms = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}&via=ianisulislam`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`
    };
    
    if (platforms[platform]) {
      window.open(platforms[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <p className="text-gray-600 mb-4">The article "{slug}" doesn't exist.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to All Blogs
          </button>
        </div>
      </div>
    );
  }

  // Generate structured data for the article
  const generateStructuredData = () => {
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/blog/${article.slug}`;
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "image": article.image,
      "datePublished": article.date,
      "dateModified": article.updatedDate || article.date,
      "author": {
        "@type": "Person",
        "name": article.author.name,
        "url": baseUrl,
        "image": article.author.avatar,
        "jobTitle": article.author.role,
        "sameAs": [
          "https://github.com/anisul-islam",
          "https://facebook.com/ianisulislam",
          "https://twitter.com/ianisulislam",
          "https://linkedin.com/in/anisul-islam"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Anisul Islam | Backend Developer",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/favico.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "keywords": article.tags.join(', '),
      "articleSection": article.category,
      "inLanguage": "en-US",
      "wordCount": article.content.sections.reduce((count, section) => {
        return count + (section.content?.length || 0) + (section.points?.join(' ').length || 0);
      }, 0),
      "timeRequired": `PT${article.readTime.replace(' min read', '')}M`,
      "url": fullUrl
    };
  };

  return (
    <>
      {/* SEO Meta Tags using React Helmet */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{article.title} | Node.js & Express.js Interview Guide | Anisul Islam</title>
        <meta name="title" content={article.title} />
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <meta name="author" content={article.author.name} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.anisuldev.online/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={article.title} />
        <meta property="og:site_name" content="Anisul Islam | Backend Developer" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific OG tags */}
        <meta property="article:published_time" content={article.date} />
        <meta property="article:modified_time" content={article.updatedDate || article.date} />
        <meta property="article:author" content={article.author.name} />
        <meta property="article:section" content={article.category} />
        {article.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://www.anisuldev.online/blog/${article.slug}`} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image} />
        <meta name="twitter:image:alt" content={article.title} />
        <meta name="twitter:creator" content="@ianisulislam" />
        <meta name="twitter:site" content="@ianisulislam" />
        
        {/* Additional Meta Tags */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content={article.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.anisuldev.online/blog/${article.slug}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/blogs')}
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Go back to all blogs"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to All Blogs
              </button>
              <div className="flex items-center space-x-4">
                <button 
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors" 
                  title="Bookmark this article"
                  aria-label="Bookmark article"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative"
                  title="Copy link"
                  aria-label="Copy article link"
                  onClick={copyToClipboard}
                >
                  {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {isCopied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
                <button 
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors" 
                  title="Print this article"
                  aria-label="Print article"
                  onClick={() => window.print()}
                >
                  <Printer className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full border ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full border ${getDifficultyColor(article.difficulty)}`}>
                {article.difficulty} Level
              </span>
              {article.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 border border-yellow-200">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <time dateTime={article.date}>
                  {article.date}
                </time>
                {article.updatedDate && (
                  <span className="text-sm text-gray-500 ml-2">
                    (Updated: <time dateTime={article.updatedDate}>{article.updatedDate}</time>)
                  </span>
                )}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                <span>{article.content.metadata.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={article.image}
                alt={`${article.title} - Featured Image`}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Article Overview
                </h2>
                <div className="text-gray-700 space-y-4">
                  {article.content.introduction.split('\n').map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Sections */}
              {article.content.sections.map((section, index) => (
                <article key={section.id} className="mb-12 scroll-mt-20" id={section.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  
                  {section.content && (
                    <p className="text-gray-700 mb-6 text-lg">
                      {section.content}
                    </p>
                  )}
                  
                  {section.image && (
                    <div className="rounded-xl overflow-hidden mb-6">
                      <img
                        src={section.image}
                        alt={`${section.title} - Illustration`}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  {section.points && section.points.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <ul className="space-y-4">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.codeExample && (
                    <div className="bg-gray-900 rounded-2xl p-8 mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Code Example</h3>
                        <button 
                          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                          onClick={() => navigator.clipboard.writeText(section.codeExample)}
                          aria-label="Copy code to clipboard"
                        >
                          <Download className="w-4 h-4 mr-2 inline" />
                          Copy Code
                        </button>
                      </div>
                      <pre className="text-gray-300 overflow-x-auto text-sm">
                        <code>{section.codeExample}</code>
                      </pre>
                    </div>
                  )}
                </article>
              ))}

              {/* Conclusion */}
              {article.content.conclusion && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <div className="text-gray-700 space-y-4">
                    {article.content.conclusion.split('\n').map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
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
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-12 h-12 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-12 h-12 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Table of Contents */}
              <nav aria-label="Table of Contents" className="sticky top-24 bg-white rounded-2xl shadow-lg border p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Table of Contents
                </h3>
                <ul className="space-y-3">
                  {article.content.sections.map((section, index) => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full text-sm mr-3">
                          {index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Author Info */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white mr-4">
                    <img 
                      src={article.author.avatar} 
                      alt={`${article.author.name} - Author`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{article.author.name}</h4>
                    <p className="text-gray-600 text-sm">{article.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {article.author.bio}
                </p>
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Backend</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Like Article ({article.content.metadata.likes})
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Add Comment
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map(related => (
                  <div key={related.id} className="bg-white rounded-xl border p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/blog/${related.slug}`)}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img src={related.thumbnail} alt={related.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{related.category}</div>
                        <div className="text-xs text-gray-500">{related.readTime}</div>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{related.title}</h4>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Read Article →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;