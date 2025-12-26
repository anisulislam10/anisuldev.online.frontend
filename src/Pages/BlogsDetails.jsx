import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  BookOpen,
  Code,
  Database,
  Server,
  Shield,
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

// Import blog data
import { getBlogBySlug, blogs } from '../data/blogs';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getBlogBySlug(slug);
  
  const [isCopied, setIsCopied] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  // Update meta tags when article loads
  useEffect(() => {
    if (article) {
      updateMetaTags();
      // Get related articles (excluding current one)
      const related = blogs
        .filter(blog => blog.id !== article.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [article]);

  // Function to update meta tags dynamically
  const updateMetaTags = () => {
    if (!article) return;

    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/blog/${article.slug}`;
    
    // Update document title
    document.title = `${article.title} | Node.js & Express.js Interview Guide | Anisul Islam`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = article.description;
    
    // Update keywords
    updateOrCreateMeta('keywords', article.tags.join(', '));
    
    // Update author
    updateOrCreateMeta('author', article.author.name);
    
    // Update Open Graph tags
    updateOrCreateMeta('og:title', article.title, true);
    updateOrCreateMeta('og:description', article.description, true);
    updateOrCreateMeta('og:image', article.image, true);
    updateOrCreateMeta('og:url', fullUrl, true);
    updateOrCreateMeta('og:type', 'article', true);
    updateOrCreateMeta('og:site_name', 'Anisul Islam | Backend Developer & Technical Writer', true);
    
    // Update article specific Open Graph tags
    updateOrCreateMeta('article:published_time', article.date, true);
    if (article.updatedDate) {
      updateOrCreateMeta('article:modified_time', article.updatedDate, true);
    }
    updateOrCreateMeta('article:section', article.category, true);
    article.tags.forEach(tag => updateOrCreateMeta('article:tag', tag, true));
    
    // Update Twitter tags
    updateOrCreateMeta('twitter:card', 'summary_large_image', true);
    updateOrCreateMeta('twitter:title', article.title, true);
    updateOrCreateMeta('twitter:description', article.description, true);
    updateOrCreateMeta('twitter:image', article.image, true);
  };

  // Helper function to update or create meta tags
  const updateOrCreateMeta = (name, content, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector);
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content || '');
  };

  // Generate structured data for the article
  const generateStructuredData = () => {
    if (!article) return '';
    
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/blog/${article.slug}`;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
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
        "description": article.author.bio
      },
      "publisher": {
        "@type": "Organization",
        "name": "Anisul Islam | Backend Developer & Technical Writer",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "keywords": article.tags.join(', '),
      "articleSection": article.category,
      "inLanguage": "en-US",
      "timeRequired": `PT${article.readTime.replace(' min read', '')}M`,
      "url": fullUrl
    };
    
    return JSON.stringify(structuredData);
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
    const title = article.title;
    const text = article.description;
    
    const platforms = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`
    };
    
    window.open(platforms[platform], '_blank', 'noopener,noreferrer');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {generateStructuredData()}
      </script>

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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="headline">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium" itemProp="name">{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <time dateTime={article.date} itemProp="datePublished">
                {article.date}
              </time>
              {article.updatedDate && (
                <span className="text-sm text-gray-500 ml-2">
                  (Updated: <time dateTime={article.updatedDate} itemProp="dateModified">{article.updatedDate}</time>)
                </span>
              )}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span itemProp="timeRequired" content={`PT${article.readTime.replace(' min read', '')}M`}>
                {article.readTime}
              </span>
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              <span itemProp="interactionStatistic" itemScope itemType="https://schema.org/InteractionCounter">
                <meta itemProp="interactionType" content="https://schema.org/ViewAction" />
                <meta itemProp="userInteractionCount" content={article.content.metadata.views.toString()} />
                {article.content.metadata.views.toLocaleString()} views
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full" itemProp="keywords">
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
              itemProp="image"
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
              <div className="text-gray-700 space-y-4" itemProp="description">
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

            {/* FAQs */}
            {article.content.faqs && article.content.faqs.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.content.faqs.map((faq, index) => (
                    <div key={index} className="bg-white border rounded-xl p-6" itemScope itemType="https://schema.org/Question">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center" itemProp="name">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                        {faq.question}
                      </h3>
                      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-4 rounded-xl border text-center">
                <div className="text-2xl font-bold text-blue-600">{article.content.metadata.views.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Views</div>
              </div>
              <div className="bg-white p-4 rounded-xl border text-center">
                <div className="text-2xl font-bold text-green-600">{article.content.metadata.likes}</div>
                <div className="text-sm text-gray-600">Likes</div>
              </div>
              <div className="bg-white p-4 rounded-xl border text-center">
                <div className="text-2xl font-bold text-purple-600">{article.content.metadata.shares}</div>
                <div className="text-sm text-gray-600">Shares</div>
              </div>
              <div className="bg-white p-4 rounded-xl border text-center">
                <div className="text-2xl font-bold text-orange-600">{article.content.metadata.comments}</div>
                <div className="text-sm text-gray-600">Comments</div>
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
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border" itemScope itemType="https://schema.org/Person">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white mr-4">
                  <img 
                    src={article.author.avatar} 
                    alt={`${article.author.name} - Author`}
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" itemProp="name">{article.author.name}</h4>
                  <p className="text-gray-600 text-sm" itemProp="jobTitle">{article.author.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4" itemProp="description">
                {article.author.bio}
              </p>
              <div className="flex space-x-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Backend</span>
              </div>
            </div>

            {/* Resources */}
            {article.content.resources && article.content.resources.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ExternalLink className="w-6 h-6 mr-3 text-green-600" />
                  Recommended Resources
                </h3>
                <ul className="space-y-3">
                  {article.content.resources.map((resource, index) => (
                    <li key={index}>
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 group-hover:bg-blue-100 rounded-lg mr-3 transition-colors">
                          <span className="font-bold text-gray-600 group-hover:text-blue-600">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{resource.title}</div>
                          <div className="text-xs text-gray-500">{resource.type}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
      </div>
    </div>
  );
};

export default BlogDetail;