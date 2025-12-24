import React, { useEffect, useState } from 'react';
import { X, Construction, Mail, Clock, Rocket } from 'lucide-react';

const UnderConstructionModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(5);
  
  // Countdown timer for auto-close
  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-100 rounded-full translate-x-20 translate-y-20"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close notification"
        >
          <X size={20} />
        </button>
        
        {/* Countdown indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          <Clock size={14} />
          <span>Auto-close in {countdown}s</span>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12">
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Construction size={36} className="text-white" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Under Construction</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-600 mb-6">
              We're working hard to bring you an amazing experience!
            </p>
            
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Development Progress</span>
                <span>85%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-1">New Features</h4>
                <p className="text-sm text-gray-600">Exciting updates coming soon</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <Construction className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-1">Optimization</h4>
                <p className="text-sm text-gray-600">Performance improvements</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-1">Stay Updated</h4>
                <p className="text-sm text-gray-600">Subscribe for launch news</p>
              </div>
            </div>
            
            {/* Estimated launch */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="text-blue-600" size={18} />
                <span className="text-blue-700 font-medium">
                  Estimated Launch: December 2024
                </span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Continue Exploring
              </button>
              
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Notify Me
              </button>
            </div>
            
            {/* Footer note */}
            <p className="mt-6 text-sm text-gray-500">
              This notification will auto-close in {countdown} seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionModal;