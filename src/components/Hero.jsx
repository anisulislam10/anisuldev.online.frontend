import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Code, Server, Database, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
// import UnderConstructionModal from './nderConstructionModal'; // Adjust path as needed

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
        className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="Anisul Islam" />
        <meta itemProp="jobTitle" content="Full Stack Software Engineer" />
        <meta itemProp="knowsAbout" content="React.js, Node.js, Next.js, Express.js, MongoDB, JavaScript" />
        
        <div className="max-w-7xl mx-auto">
          {/* Changed grid order - left content first on mobile, then on lg screens it's side by side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Comes first on mobile */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Full Stack Developer
              </div>

              {/* Main Heading with proper semantic structure */}
              <header className="space-y-4">
                
                
                {/* Subtitle as h2 for hierarchy */}
                <h2 className="text-sm sm:text-3xl text-gray-700 font-semibold" itemProp="jobTitle">
                  JavaScript Lover & Full Stack Software Engineer
                </h2>
              </header>

              {/* Description with schema */}
              <p 
                className="text-gray-600 text-lg leading-relaxed"
                itemProp="description"
              >
                I craft beautiful, performant web applications using modern technologies. 
                Passionate about React.js, Node.js, Next.js, Express.js, MongoDB and the entire 
                JavaScript ecosystem. Turning complex problems into simple, beautiful designs.
              </p>

              {/* Tech Stack with schema */}
              <div className="space-y-3" itemScope itemType="https://schema.org/ItemList">
                <h3 className="text-base font-semibold text-gray-800">Tech Stack:</h3>
                <meta itemProp="name" content="Technology Stack" />
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm border hover:shadow-md transition-shadow duration-300 text-sm"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <meta itemProp="position" content={String(index + 1)} />
                      <div itemProp="item" itemScope itemType="https://schema.org/Thing">
                        <meta itemProp="name" content={tech.name} />
                        <div className="flex items-center space-x-1.5">
                          {React.cloneElement(tech.icon, { size: 16 })}
                          <span className="font-medium text-gray-700">{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <meta itemProp="numberOfItems" content={String(techStack.length)} />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="View my portfolio projects"
                >
                  <span>View Projects</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link to="/contact"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  aria-label="Get a free quote for your project"
                >
                  <span>Get a Quote</span>
                </Link>
              </div>

              {/* Social Links with proper schema */}
              <div className="flex items-center space-x-4 pt-8">
                <span className="text-gray-600 font-medium">Connect with me:</span>
                <div className="flex space-x-3" itemProp="sameAs">
                  <a 
                    href="https://github.com/anisulislam10" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Visit my GitHub profile"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ianisulislam" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Connect with me on LinkedIn"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/ianisulislam" 
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Follow me on Twitter"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Card - Comes second on mobile */}
            <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full">
                {/* Main Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-3"></div>
                
                {/* Content Card */}
                <div 
                  className="absolute inset-0 bg-white rounded-3xl shadow-2xl transform -rotate-3 flex flex-col items-center justify-center p-6 sm:p-8"
                  itemScope
                  itemType="https://schema.org/ProfilePage"
                >
                  <div className="w-40 h-40 sm:w-48 sm:h-48 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src="/Anisul_Islam_Software_Developer_Chitral.png" 
                      alt="Anisul Islam - Full Stack Software Engineer"
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800" itemProp="name">Anisul Islam</h3>
                      <p className="text-gray-600 mt-1 sm:mt-2 text-base sm:text-lg" itemProp="jobTitle">Full Stack Software Engineer</p>
                    </div>
                    
                    {/* Stats with schema */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6">
                      <div className="text-center" itemProp="numberOfProjects">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-600">100%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div 
                        className="text-center"
                        itemProp="yearsOfExperience"
                        content="3"
                      >
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">3+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Years Exp</div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full max-w-xs mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                      aria-label="Hire me - Available for work"
                    >
                      Available for Work
                    </button>
                  </div>
                </div>
                
                {/* Floating Elements - Hidden on small screens, shown on medium and up */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Rocket className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

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
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/Anisul_Islam_Software_Developer_Chitral.png",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername"
              ],
              "workLocation": {
                "@type": "Place",
                "name": "Chitral, Pakistan"
              },
              "yearsOfExperience": 3,
              "numberOfProjects": 50,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com"
              }
            })
          }}
        />
      </section>

      {/* Under Construction Modal */}
      {/* <UnderConstructionModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      /> */}
    </>
  );
};

export default Hero;