import React, { useEffect } from 'react';
import { updateMetaTags } from '../utils/seoUtils';

/**
 * SEO Head Component - Dynamically updates meta tags for each page
 */
const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage,
  keywords,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  useEffect(() => {
    updateMetaTags({
      title,
      description,
      canonicalUrl,
      ogImage,
      keywords,
      author,
      publishedTime,
      modifiedTime,
      section,
      tags
    });
  }, [title, description, canonicalUrl, ogImage, keywords, author, publishedTime, modifiedTime, section, tags]);

  return null; // This component doesn't render anything
};

export default SEOHead;