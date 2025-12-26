    import React from 'react';
    import { 
    User, 
    Download, 
    GraduationCap, 
    MapPin, 
    Calendar,
    Briefcase,
    Code,
    Globe,
    Award,
    Mail,
    Phone,
    Github,
    Linkedin,
    Twitter,
    FileText,
    CheckCircle,
    Smartphone,
    Database,
    Cpu,
    Brain
    } from 'lucide-react';
    import Deployment from '../components/Deployment';

    const About = () => {
    const skills = [
        { name: 'React', level: 95 },
        { name: 'React Native', level: 85 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'REST API Development', level: 88 },
        { name: 'Third-party API Integration', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'Machine Learning Basics', level: 65 },
    ];

    const education = [
        {
        year: '2019 - 2023',
        degree: 'BS Software Engineering',
        location: 'Pakistan',
        details: 'Specialized in Software Development, Web Technologies, and Mobile App Development'
        },
        {
        year: '2017',
        degree: 'Diploma in Information Technology',
        institution: 'Technical Education Board',
        location: 'Pakistan',
        details: 'Focused on IT fundamentals, programming basics, and computer systems'
        }
    ];

    const certifications = [
        {
        name: 'Mobile App Development',
        issuer: 'Pakistan Software Export Board',
        year: '2022'
        },
        {
        name: 'Networking Essentials',
        issuer: 'Cisco',
        year: '2021'
        },
        {
        name: 'Programming Essentials',
        issuer: 'Jawan Tech Pakistan through Cisco',
        year: '2021'
        },
        {
        name: 'Web Development Specialization',
        issuer: 'Coursera',
        year: '2020'
        },
        {
        name: 'Machine Learning Specialization',
        issuer: 'Coursera',
        year: '2021'
        }
    ];

    const projects = [
        {
        title: 'E-commerce Platform',
        tech: 'MERN Stack',
        description: 'Full-featured e-commerce solution with payment integration'
        },
        {
        title: 'Food Delivery App',
        tech: 'React Native + Node.js',
        description: 'Mobile app with real-time tracking and push notifications'
        },
        {
        title: 'Social Media Dashboard',
        tech: 'React + Express + MongoDB',
        description: 'Analytics dashboard with third-party API integrations'
        },
        {
        title: 'Healthcare Management System',
        tech: 'MERN Stack',
        description: 'Patient records and appointment scheduling system'
        }
    ];

    return (
        <>
        <MetaTags 
        title="About Anisul Islam | Full Stack Developer from Pakistan"
        description="Anisul Islam is a Full Stack Developer from Chitral, Pakistan specializing in MERN Stack, React Native, API Development. BS Software Engineering graduate with certifications from Coursera and Cisco."
        keywords="Full Stack Developer Pakistan, MERN Stack Developer, React Native Developer, Software Engineer Pakistan, Web Developer Islamabad, API Developer, Mobile App Developer"
        canonical="https://www.anisuldev.online/about"
        image="https://www.anisuldev.online/Anisul_Islam_Software_Developer_Chitral.png"
      />        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 font-semibold mb-4">
                <User className="w-4 h-4 mr-2" />
                About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Developer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building modern web & mobile applications with JavaScript ecosystem
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Personal Info & Download CV */}
            <div className="lg:col-span-1">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <div className="text-center mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-7">
                    <div className="w-30 h-30 sm:w-48 sm:h-48 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img 
                        src="/Anisul_Islam_Software_Developer_Chitral.png" 
                        alt="Anisul Islam - Full Stack Software Engineer"
                        className="w-full h-full object-cover"
                        itemProp="image"
                        loading="lazy"
                        />
                    </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Anisul Islam</h3>
                    <p className="text-gray-600 mb-4">Full Stack Developer (MERN)</p>
                    
                    {/* Location & Contact */}
                    <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <div className="text-center">
                        <div>From: KPK, Chitral</div>
                        <div className="text-sm">Lives in: Islamabad, Pakistan</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>info@anisuldev.online</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>+923439275550</span>
                    </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://github.com/anisulislam10" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/ianisulislam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/ianisulislam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                        <Twitter className="w-5 h-5" />
                    </a>
                    </div>
                </div>

                {/* Download CV Button */}
                <a
                    href="/cv/Anisul_Resume[Updated].pdf"
                    download
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                </a>
                </div>

                {/* Expertise Areas */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                    Expertise
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Full Stack Web Development</span>
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Mobile App Development</span>
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">REST API Development</span>
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Third-party API Integration</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Middle Column - About Text & Skills */}
            <div className="lg:col-span-2">
                {/* About Text */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-700">
                    <p>
                    I'm a passionate Full Stack Developer from the beautiful mountains of Chitral, KPK, 
                    currently based in Islamabad, Pakistan. My journey in technology started with a Diploma 
                    in IT and evolved into a BS in Software Engineering, which laid the foundation for my 
                    career in software development.
                    </p>
                    <p>
                    I specialize in the <strong>MERN Stack</strong> (MongoDB, Express.js, React, Node.js) 
                    and <strong>React Native</strong> for building responsive web applications and 
                    cross-platform mobile apps. I have extensive experience in API development and 
                    integrating third-party APIs to create seamless user experiences.
                    </p>
                    <p>
                    Through various certifications from platforms like Coursera and Cisco, I've expanded 
                    my knowledge to include Web Development, Networking, and Machine Learning fundamentals. 
                    I believe in writing clean, efficient code and following best practices to build 
                    scalable and maintainable applications.
                    </p>
                    <p>
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                    projects, and sharing my knowledge through tutorials and blog posts to help others 
                    in their development journey.
                    </p>
                </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-purple-600" />
                    Technical Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-green-600" />
                    Certifications & Training
                </h3>
                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                        <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-4">
                            {cert.issuer.includes('Cisco') ? (
                            <Cpu className="w-5 h-5 text-blue-600" />
                            ) : cert.issuer.includes('Coursera') ? (
                            <Brain className="w-5 h-5 text-purple-600" />
                            ) : (
                            <Award className="w-5 h-5 text-green-600" />
                            )}
                        </div>
                        </div>
                        <div>
                        <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs mt-1">{cert.year}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>

            {/* Education Timeline */}
            <div className="mt-16">
            <div className="flex items-center mb-12">
                <GraduationCap className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Education Background</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center text-blue-600 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{edu.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                    </div>
                    <p className="text-gray-600">{edu.details}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Projects Showcase */}
            {/* <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                What I Build
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mobile Apps</h4>
                <p className="text-gray-600 text-sm">React Native cross-platform applications</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Web Applications</h4>
                <p className="text-gray-600 text-sm">MERN Stack full-featured web apps</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">APIs</h4>
                <p className="text-gray-600 text-sm">RESTful APIs with Node.js & Express</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Integrations</h4>
                <p className="text-gray-600 text-sm">Third-party API integration services</p>
                </div>
            </div>
            </div> */}

            {/* Tech Stack */}
            {/* <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'TypeScript', 'Python', 'Tailwind', 'Git', 'REST APIs', 'Redux'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-gray-800 font-medium">{tech}</div>
                </div>
                ))}
            </div>
            </div> */}


            <Deployment/>
        </div>
        </section>
          </>
    );
    };

    export default About;