import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  MessageSquare,
  User,
  Clock,
  Shield,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'web',
    budget: 'medium',
    timeline: '1-3 months'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'web', label: 'Web Application', icon: '🌐' },
    { value: 'mobile', label: 'Mobile App', icon: '📱' },
    { value: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { value: 'api', label: 'API Development', icon: '🔌' },
    { value: 'consulting', label: 'Consulting', icon: '💼' },
    { value: 'other', label: 'Other', icon: '✨' }
  ];

  const budgetOptions = [
    { value: 'small', label: 'Small ($1k - $5k)', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium ($5k - $20k)', color: 'bg-blue-100 text-blue-800' },
    { value: 'large', label: 'Large ($20k+)', color: 'bg-purple-100 text-purple-800' },
    { value: 'custom', label: 'Custom Quote', color: 'bg-orange-100 text-orange-800' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (< 1 month)' },
    { value: '1-3 months', label: '1-3 Months' },
    { value: '3-6 months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          projectType: 'web',
          budget: 'medium',
          timeline: '1-3 months'
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@aniduldev.online",
      subtitle: "Response within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "(92 343 9275550)",
      subtitle: "Mon-Fri, 9AM-6PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Islamabad, Pakistan",
      subtitle: "Available for remote work worldwide"
    }
  ];

  const quoteFeatures = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24-Hour Response",
      description: "Get a detailed quote within 24 hours"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "No-Spam Guarantee",
      description: "Your information is safe with us"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Free Consultation",
      description: "30-minute free project discussion"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 font-semibold mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{info.title}</h4>
                      <p className="text-gray-700 text-lg font-semibold">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote Features */}
              <div className="mt-10 pt-8 border-t border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4">What to expect:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quoteFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="font-semibold text-gray-900">Available for new projects</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  Open
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Currently accepting 2-3 new projects for Q1 2024. Let's discuss your requirements!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for your inquiry. I'll review your project details and get back to you within 24 hours.
                </p>
                <div className="animate-pulse text-sm text-gray-500">
                  Redirecting back to form...
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Quote</h3>
                <p className="text-gray-600 mb-8">Fill out the form below to discuss your project</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Full Name *
                        </div>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          Email Address *
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        Phone Number (Optional)
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="+880 1234 567890"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">Project Details</h4>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-300 ${
                              formData.projectType === type.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <span className="text-xl mb-1">{type.icon}</span>
                            <span className="text-xs font-medium text-gray-700">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Estimated Budget
                        </label>
                        <div className="space-y-2">
                          {budgetOptions.map((option) => (
                            <label
                              key={option.value}
                              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                formData.budget === option.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="budget"
                                value={option.value}
                                checked={formData.budget === option.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                                formData.budget === option.value
                                  ? 'border-blue-500'
                                  : 'border-gray-300'
                              }`}>
                                {formData.budget === option.value && (
                                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                )}
                              </div>
                              <span className={`text-sm font-medium ${option.color.split(' ')[1]}`}>
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Project Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                        >
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Project Description *
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none`}
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    />
                    {errors.message && (
                      <div className="flex items-center text-red-600 text-sm mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message & Get Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What happens after I submit the form?",
                answer: "I'll review your project details within 24 hours and schedule a free 30-minute consultation call to discuss requirements, timeline, and budget."
              },
              {
                question: "What's included in your quote?",
                answer: "Detailed project scope, timeline breakdown, cost estimation, technology stack recommendation, and maintenance plan."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! I work with clients worldwide. All communication and project management is done remotely using modern collaboration tools."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Small projects: 2-4 weeks, Medium projects: 1-3 months, Large projects: 3-6 months. Custom timelines available based on requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;