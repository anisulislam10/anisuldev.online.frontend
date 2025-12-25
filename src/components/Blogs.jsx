import React from 'react';
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
  Share2
} from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 14",
      excerpt: "Learn how to build performant React applications using Next.js 14 features like Server Components, Streaming, and Turbopack.",
      author: "Anisul Islam",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "React",
      tags: ["Next.js", "React", "Performance", "Web Development"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      views: "1.2K",
      comments: 42,
      featured: true
    },
    {
      id: 2,
      title: "Mastering Node.js Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices with Node.js, Docker, and Kubernetes.",
      author: "Anisul Islam",
      date: "Nov 28, 2023",
      readTime: "12 min read",
      category: "Backend",
      tags: ["Node.js", "Microservices", "Docker", "DevOps"],
      image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      views: "980",
      comments: 28,
      featured: false
    },
    {
      id: 3,
      title: "React Native Best Practices for 2024",
      excerpt: "Essential tips and patterns for building production-ready React Native applications with optimal performance.",
      author: "Anisul Islam",
      date: "Nov 15, 2023",
      readTime: "10 min read",
      category: "Mobile",
      tags: ["React Native", "Mobile", "JavaScript", "Performance"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      views: "1.5K",
      comments: 56,
      featured: true
    }
  ];

  const blogCategories = [
    { name: "React & Frontend", count: 12, color: "bg-blue-100 text-blue-600" },
    { name: "Node.js & Backend", count: 8, color: "bg-green-100 text-green-600" },
    { name: "Mobile Development", count: 6, color: "bg-purple-100 text-purple-600" },
    { name: "DevOps & Deployment", count: 5, color: "bg-orange-100 text-orange-600" },
    { name: "Database Design", count: 4, color: "bg-red-100 text-red-600" },
    { name: "Best Practices", count: 7, color: "bg-indigo-100 text-indigo-600" }
  ];

  const popularTags = [
    "React", "Next.js", "Node.js", "TypeScript", "MongoDB", 
    "Docker", "AWS", "Vercel", "Firebase", "GraphQL"
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 font-semibold mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Technical Blog & Articles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and experiences in web development, best practices, and technical tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2">
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
                      {post.tags.slice(0, 3).map((tag, index) => (
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
                      <button className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Posts Button */}
            <div className="text-center mt-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto">
                <span>View All Blog Posts</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Categories
              </h3>
              <div className="space-y-3">
                {blogCategories.map((category, index) => (
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

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to my newsletter for the latest tutorials and tech insights.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Published Articles</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">100K+</div>
            <div className="text-gray-600">Total Reads</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">1K+</div>
            <div className="text-gray-600">Community Comments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;