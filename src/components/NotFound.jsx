// components/NotFound.js or Pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-16 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100/10 rounded-full mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>

          {/* Error Code */}
          <div className="text-9xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            404
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Page Not Found
          </h1>

          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Suggestions */}
          <div className="rounded-xl p-6 border mb-8 max-w-2xl mx-auto"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
            <h3 className="font-semibold mb-4 flex items-center justify-center" style={{ color: 'var(--text-primary)' }}>
              <Search className="w-5 h-5 mr-2" />
              Here are some helpful links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-left">
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Popular Pages:</p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • Home Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • All Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Categories:</p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/technology" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/programming" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • Programming
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/web-development" className="text-blue-600 hover:text-blue-700 hover:underline">
                      • Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border rounded-lg font-semibold transition-all duration-300 group"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>Try searching for something else:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'JavaScript', 'Node.js', 'Python', 'Web Development', 'API', 'Tutorials'].map((term) => (
                <Link
                  key={term}
                  to={`/blogs?search=${term}`}
                  className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 rounded-full text-sm transition-all duration-300"
                  style={{ background: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;