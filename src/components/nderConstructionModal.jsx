// components/UnderConstructionModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const UnderConstructionModal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-6">
            <Construction className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This page is currently being developed. Please check back soon for updates!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What's Coming</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Detailed information</li>
                <li>• Interactive features</li>
                <li>• Enhanced user experience</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Available Pages</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <Link to="/" className="text-blue-600 hover:text-blue-700">
                    • Home
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-blue-600 hover:text-blue-700">
                    • Blogs
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
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
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