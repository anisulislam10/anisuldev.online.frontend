/**
 * SEO Utility Functions
 * For dynamic meta tag updates in Single Page Applications
 */

// Default SEO configuration
export const defaultSEO = {
  siteTitle: 'Anisul Islam | Backend Developer & Technical Writer',
  siteDescription: 'Comprehensive Node.js & Express.js interview preparation guides for junior to mid-level backend developers',
  siteUrl: 'https://anisuldev.online',
  siteImage: '/og-image.jpg',
  twitterHandle: '@anisul_islam',
  author: 'Anisul Islam'
};

/**
 * Update meta tags dynamically for SPAs
 */
export const updateMetaTags = (config = {}) => {
  const {
    title = '',
    description = defaultSEO.siteDescription,
    canonicalUrl = defaultSEO.siteUrl,
    ogImage = defaultSEO.siteImage,
    keywords = '',
    author = defaultSEO.author,
    publishedTime = '',
    modifiedTime = '',
    section = 'Technology',
    tags = []
  } = config;

  const fullTitle = title ? `${title} | ${defaultSEO.siteTitle}` : defaultSEO.siteTitle;
  const fullDescription = description;
  const fullCanonicalUrl = canonicalUrl;
  const fullImage = ogImage.startsWith('http') ? ogImage : `${defaultSEO.siteUrl}${ogImage}`;
  
  // Update document title
  document.title = fullTitle;
  
  // Update or create meta tags
  const updateOrCreateMeta = (name, content, property = false) => {
    const attr = property ? 'property' : 'name';
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
    meta.setAttribute('content', content);
  };
  
  // Update or create link tags
  const updateOrCreateLink = (rel, href) => {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  };
  
  // Primary Meta Tags
  updateOrCreateMeta('title', fullTitle);
  updateOrCreateMeta('description', fullDescription);
  updateOrCreateMeta('keywords', keywords || tags.join(', '));
  updateOrCreateMeta('author', author);
  
  // Article Specific Meta Tags
  if (publishedTime) updateOrCreateMeta('article:published_time', publishedTime);
  if (modifiedTime) updateOrCreateMeta('article:modified_time', modifiedTime);
  if (section) updateOrCreateMeta('article:section', section);
  tags.forEach(tag => updateOrCreateMeta('article:tag', tag));
  
  // Open Graph / Facebook
  updateOrCreateMeta('og:type', 'article', true);
  updateOrCreateMeta('og:url', fullCanonicalUrl, true);
  updateOrCreateMeta('og:title', fullTitle, true);
  updateOrCreateMeta('og:description', fullDescription, true);
  updateOrCreateMeta('og:image', fullImage, true);
  updateOrCreateMeta('og:site_name', defaultSEO.siteTitle, true);
  updateOrCreateMeta('og:locale', 'en_US', true);
  
  // Twitter
  updateOrCreateMeta('twitter:card', 'summary_large_image', true);
  updateOrCreateMeta('twitter:url', fullCanonicalUrl, true);
  updateOrCreateMeta('twitter:title', fullTitle, true);
  updateOrCreateMeta('twitter:description', fullDescription, true);
  updateOrCreateMeta('twitter:image', fullImage, true);
  updateOrCreateMeta('twitter:creator', defaultSEO.twitterHandle, true);
  updateOrCreateMeta('twitter:site', defaultSEO.twitterHandle, true);
  
  // Canonical URL
  updateOrCreateLink('canonical', fullCanonicalUrl);
  
  // Robots
  updateOrCreateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
};

/**
 * Generate structured data JSON-LD for articles
 */
export const generateArticleStructuredData = (article) => {
  if (!article) return '';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.description,
    'image': article.image,
    'datePublished': article.date,
    'dateModified': article.updatedDate || article.date,
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'url': defaultSEO.siteUrl,
      'image': article.author.avatar,
      'jobTitle': article.author.role,
      'description': article.author.bio
    },
    'publisher': {
      '@type': 'Organization',
      'name': defaultSEO.siteTitle,
      'logo': {
        '@type': 'ImageObject',
        'url': `${defaultSEO.siteUrl}/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${defaultSEO.siteUrl}/blog/${article.slug}`
    },
    'keywords': article.tags.join(', '),
    'articleSection': article.category,
    'inLanguage': 'en-US',
    'wordCount': article.readTime.replace(' min read', '') * 200, // Approximate words
    'timeRequired': `PT${article.readTime.replace(' min read', '')}M`,
    'url': `${defaultSEO.siteUrl}/blog/${article.slug}`
  };
  
  return JSON.stringify(structuredData);
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbData = (items) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
  
  return JSON.stringify(breadcrumbData);
};

/**
 * Generate FAQ structured data
 */
export const generateFAQData = (questions) => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map(q => ({
      '@type': 'Question',
      'name': q.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': q.answer
      }
    }))
  };
  
  return JSON.stringify(faqData);
};

/**
 * Generate website structured data
 */
export const generateWebsiteData = () => {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': defaultSEO.siteTitle,
    'description': defaultSEO.siteDescription,
    'url': defaultSEO.siteUrl,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${defaultSEO.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  
  return JSON.stringify(websiteData);
};

/**
 * Initialize default SEO for the site
 */
export const initializeDefaultSEO = () => {
  updateMetaTags({
    title: defaultSEO.siteTitle,
    description: defaultSEO.siteDescription
  });
};