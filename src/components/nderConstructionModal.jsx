// components/UnderConstructionModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, CheckCircle } from 'lucide-react';

const UnderConstructionModal = () => {
  return (
    <div className="min-h-screen pt-16 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6" style={{ background: 'var(--bg-card-hover)' }}>
            <Construction className="w-12 h-12" style={{ color: 'var(--accent-cyan)' }} />
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Page Under Construction
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            This page is currently being developed. Please check back soon for updates!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
            <div className="p-6 rounded-xl border text-left transition-all duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-semibold mb-3 flex items-center" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle className="w-4 h-4 mr-2" style={{ color: 'var(--accent-cyan)' }} />
                What's Coming
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>• Detailed information</li>
                <li>• Interactive features</li>
                <li>• Enhanced user experience</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border text-left transition-all duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-semibold mb-3 flex items-center" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle className="w-4 h-4 mr-2" style={{ color: 'var(--accent-indigo)' }} />
                Available Pages
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>
                  <Link to="/" className="hover:underline flex items-center transition-colors" style={{ color: 'var(--accent-indigo)' }}>
                    <span className="mr-2">•</span> Home
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:underline flex items-center transition-colors" style={{ color: 'var(--accent-indigo)' }}>
                    <span className="mr-2">•</span> Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Go to Home
            </Link>
            <Link
              to="/blogs"
              className="px-6 py-3 border rounded-lg font-semibold transition-all duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              Browse Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionModal;