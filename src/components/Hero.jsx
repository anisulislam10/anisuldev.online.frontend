import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Code, Server, Database, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const techStack = [
    { icon: <Code size={20} />, name: 'React.js' },
    { icon: <Server size={20} />, name: 'Node.js' },
    { icon: <Rocket size={20} />, name: 'Next.js' },
    { icon: <Server size={20} />, name: 'Express.js' },
    { icon: <Database size={20} />, name: 'MongoDB' },
  ];

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Auto-close modal after 5 seconds when shown
  useEffect(() => {
    if (!showModal) return;

    const autoCloseTimer = setTimeout(() => {
      setShowModal(false);
    }, 5000); // Auto-close after 5 seconds

    return () => clearTimeout(autoCloseTimer);
  }, [showModal]);

  return (
    <>
      <section 
        className="relative min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Mobile-optimized background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 pointer-events-none"></div>
        
        <meta itemProp="name" content="Anisul Islam" />
        <meta itemProp="jobTitle" content="Full Stack Software Engineer" />
        <meta itemProp="knowsAbout" content="React.js, Node.js, Next.js, Express.js, MongoDB, JavaScript" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile-first grid layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Mobile optimized */}
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              {/* Badge - Mobile optimized */}
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm md:text-base">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Full Stack Developer
              </div>

              {/* Main Heading with proper semantic structure */}
              <header className="space-y-2 md:space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Anisul Islam</span>
                </h1>
                
                {/* Subtitle as h2 for hierarchy - Mobile optimized */}
                <h2 className="text-base md:text-xl lg:text-2xl text-gray-700 font-semibold leading-snug" itemProp="jobTitle">
                  JavaScript Lover & Full Stack Software Engineer
                </h2>
              </header>

              {/* Description with schema - Mobile optimized */}
              <p 
                className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed"
                itemProp="description"
              >
                I craft beautiful, performant web applications using modern technologies. 
                Passionate about React.js, Node.js, Next.js, Express.js, MongoDB and the entire 
                JavaScript ecosystem.
              </p>

              {/* Tech Stack with schema - Mobile optimized */}
              <div className="space-y-2 md:space-y-3" itemScope itemType="https://schema.org/ItemList">
                <h3 className="text-sm md:text-base font-semibold text-gray-800">Tech Stack:</h3>
                <meta itemProp="name" content="Technology Stack" />
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-white rounded-full shadow-sm border hover:shadow-md transition-shadow duration-300 text-xs md:text-sm"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <meta itemProp="position" content={String(index + 1)} />
                      <div itemProp="item" itemScope itemType="https://schema.org/Thing">
                        <meta itemProp="name" content={tech.name} />
                        <div className="flex items-center space-x-1.5">
                          {React.cloneElement(tech.icon, { size: 14 })}
                          <span className="font-medium text-gray-700">{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <meta itemProp="numberOfItems" content={String(techStack.length)} />
              </div>

              {/* CTA Buttons - Mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link 
                  to="/projects" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
                  aria-label="View my portfolio projects"
                >
                  <span>View Projects</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                
                <Link 
                  to="/contact"
                  className="group border border-gray-300 text-gray-700 px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm md:text-base"
                  aria-label="Get a free quote for your project"
                >
                  <span>Get a Quote</span>
                </Link>
              </div>

              {/* Social Links with proper schema - Mobile optimized */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-6">
                <span className="text-gray-600 font-medium text-sm md:text-base">Connect with me:</span>
                <div className="flex space-x-3" itemProp="sameAs">
                  <a 
                    href="https://github.com/anisulislam10" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Visit my GitHub profile"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ianisulislam" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Connect with me on LinkedIn"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://twitter.com/ianisulislam" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Follow me on Twitter"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Card - Mobile optimized */}
            <div className="order-1 lg:order-2 relative w-full max-w-sm md:max-w-md mx-auto lg:max-w-none">
              <div className="relative h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] w-full">
                {/* Main Card - Mobile optimized */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl transform rotate-2 lg:rotate-3"></div>
                
                {/* Content Card - Mobile optimized */}
                <div 
                  className="absolute inset-0 bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl transform -rotate-2 lg:-rotate-3 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
                  itemScope
                  itemType="https://schema.org/ProfilePage"
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/Anisul_Islam_Software_Developer_Chitral.png" 
                      alt="Anisul Islam - Full Stack Software Engineer"
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 192px"
                      srcSet="/Anisul_Islam_Software_Developer_Chitral.png 192w, /Anisul_Islam_Software_Developer_Chitral.png 128w"
                    />
                  </div>
                  <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 px-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800" itemProp="name">Anisul Islam</h3>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg" itemProp="jobTitle">Full Stack Software Engineer</p>
                    </div>
                    
                    {/* Stats with schema - Mobile optimized */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                      <div className="text-center" itemProp="numberOfProjects">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600">100%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div 
                        className="text-center"
                        itemProp="yearsOfExperience"
                        content="3"
                      >
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">3+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Years Exp</div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full max-w-xs mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
                      aria-label="Hire me - Available for work"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Available for Work
                    </button>
                  </div>
                </div>
                
                {/* Floating Elements - Hidden on small screens */}
                <div className="hidden sm:block absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Rocket className="text-white w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="hidden sm:block absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile viewport meta fix */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </section>

      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anisul Islam",
            "jobTitle": "Full Stack Software Engineer",
            "description": "Full Stack Software Engineer specializing in React.js, Node.js, Next.js, Express.js, and MongoDB. I craft beautiful, performant web applications using modern JavaScript technologies.",
            "knowsAbout": ["React.js", "Node.js", "Next.js", "Express.js", "MongoDB", "JavaScript", "Web Development"],
            "url": "https://www.anisuldev.online",
            "image": "https://www.anisuldev.online/Anisul_Islam_Software_Developer_Chitral.png",
            "sameAs": [
              "https://github.com/anisulislam10",
              "https://linkedin.com/in/ianisulislam",
              "https://twitter.com/ianisulislam"
            ],
            "workLocation": {
              "@type": "Place",
              "name": "Chitral, Pakistan"
            },
            "yearsOfExperience": 3,
            "numberOfProjects": 50,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.anisuldev.online"
            }
          })
        }}
      />
    </>
  );
};

export default Hero;