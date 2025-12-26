import blog1 from './blog1-nodejs-junior-interview';
import blog2 from './blog2-expressjs-mid-level';
import blog3 from './blog3-system-design';

export const blogs = [
  blog1,
  blog2,
  blog3
];

// Helper function to create URL-friendly slugs
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

// Get blog by slug
export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};

// Get blog by ID (for backward compatibility)
export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === id);
};

export const getBlogsByCategory = (category) => {
  if (category === 'all') return blogs;
  return blogs.filter(blog => blog.category === category);
};

export const searchBlogs = (query) => {
  const q = query.toLowerCase();
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(q) ||
    blog.description.toLowerCase().includes(q) ||
    blog.tags.some(tag => tag.toLowerCase().includes(q)) ||
    blog.content.sections.some(section => 
      section.content.toLowerCase().includes(q) ||
      section.points.some(point => point.toLowerCase().includes(q))
    )
  );
};