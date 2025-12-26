import React from 'react';
import { 
  generateArticleStructuredData, 
  generateBreadcrumbData, 
  generateFAQData,
  generateWebsiteData 
} from '../utils/seoUtils';

export const ArticleStructuredData = ({ article }) => {
  if (!article) return null;
  
  const structuredData = generateArticleStructuredData(article);
  
  return (
    <script type="application/ld+json">
      {structuredData}
    </script>
  );
};

export const BreadcrumbStructuredData = ({ items }) => {
  if (!items || items.length === 0) return null;
  
  const breadcrumbData = generateBreadcrumbData(items);
  
  return (
    <script type="application/ld+json">
      {breadcrumbData}
    </script>
  );
};

export const FAQStructuredData = ({ questions }) => {
  if (!questions || questions.length === 0) return null;
  
  const faqData = generateFAQData(questions);
  
  return (
    <script type="application/ld+json">
      {faqData}
    </script>
  );
};

export const WebsiteStructuredData = () => {
  const websiteData = generateWebsiteData();
  
  return (
    <script type="application/ld+json">
      {websiteData}
    </script>
  );
};