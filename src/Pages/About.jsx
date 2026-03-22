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
import MetaTags from '../components/MetaTags'; // Add this import


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
                title="About Anisul Islam | Full Stack Software Engineer "
                description="Anisul Islam is a Full Stack Developer from Chitral, Pakistan specializing in MERN Stack, React Native, API Development. BS Software Engineering graduate with certifications from Coursera and Cisco."
                keywords="Full Stack Developer Pakistan, MERN Stack Developer, React Native Developer, Software Engineer Pakistan, Web Developer Islamabad, API Developer, Mobile App Developer"
                canonical="https://www.anisuldev.online/about"
                image="https://www.anisuldev.online/Anisul_Islam_Software_Developer_Chitral.png"
            />
            <section id="about" className="py-20" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 font-semibold mb-4" style={{ color: 'var(--accent-indigo)' }}>
                            <User className="w-4 h-4 mr-2" />
                            About Me
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Full Stack <span className="gradient-text animate-grad-shift">Developer</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Building modern web & mobile applications with JavaScript ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Personal Info & Download CV */}
                        <div className="lg:col-span-1">
                            {/* Profile Card */}
                            <div className="rounded-2xl p-8 border mb-8"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
                                <div className="text-center mb-6">
                                    <div className="w-40 h-40 mx-auto rounded-full p-1 mb-7 shadow-xl" style={{ background: 'var(--gradient-hero)' }}>
                                        <div className="w-full h-full rounded-full overflow-hidden border-4"
                                            style={{ borderColor: 'var(--bg-card)' }}>
                                            <img
                                                src="/Anisul_Islam_Software_Developer_Chitral.png"
                                                alt="Anisul Islam - Full Stack Software Engineer"
                                                className="w-full h-full object-cover"
                                                itemProp="image"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Anisul Islam</h3>
                                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer (MERN)</p>

                                    {/* Location & Contact */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                                            <MapPin className="w-4 h-4 mr-2" />
                                            <div className="text-center">
                                                <div>From: KPK, Chitral</div>
                                                <div className="text-sm">Lives in: Islamabad, Pakistan</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>info@anisuldev.online</span>
                                        </div>
                                        <div className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                                            <Phone className="w-4 h-4 mr-2" />
                                            <span>+923439275550</span>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-4 mb-6">
                                        <a href="https://github.com/anisulislam10" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{ background: 'var(--bg-card-hover)', color: 'var(--text-muted)' }}>
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="https://linkedin.com/in/ianisulislam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{ background: 'var(--bg-card-hover)', color: 'var(--text-muted)' }}>
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="https://twitter.com/ianisulislam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{ background: 'var(--bg-card-hover)', color: 'var(--text-muted)' }}>
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Download CV Button */}
                                <a
                                    href="/cv/Anisul_Resume[Updated].pdf"
                                    download
                                    className="w-full inline-flex items-center justify-center text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ background: 'var(--gradient-hero)' }}
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download CV
                                </a>
                            </div>

                            {/* Expertise Areas */}
                            <div className="rounded-2xl p-6 border"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'var(--bg-card-hover)';
                                    e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                                    e.currentTarget.style.color = 'var(--accent-indigo)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}>
                                <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                    <Cpu className="w-5 h-5 mr-2" style={{ color: 'var(--accent-blue)' }} />
                                    Expertise
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span style={{ color: 'var(--text-secondary)' }}>Full Stack Web Development</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                        <span style={{ color: 'var(--text-secondary)' }}>Mobile App Development</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span style={{ color: 'var(--text-secondary)' }}>REST API Development</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                        <span style={{ color: 'var(--text-secondary)' }}>Third-party API Integration</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - About Text & Skills */}
                        <div className="lg:col-span-2">
                            {/* About Text */}
                            <div className="rounded-2xl p-8 border mb-8"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>My Journey</h3>
                                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
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
                            <div className="rounded-2xl p-8 border mb-8"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                    <Code className="w-6 h-6 mr-2" style={{ color: 'var(--accent-indigo)' }} />
                                    Technical Stack
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                                            </div>
                                            <div className="w-full rounded-full h-2.5" style={{ background: 'var(--bg-card-hover)' }}>
                                                <div
                                                    className="h-2.5 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%`, background: 'var(--gradient-hero)' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="rounded-2xl p-8 border"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                    <Award className="w-6 h-6 mr-2" style={{ color: 'var(--accent-cyan)' }} />
                                    Certifications & Training
                                </h3>
                                <div className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start p-4 rounded-lg transition-colors duration-300"
                                            style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}>
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                                    style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)' }}>
                                                    {cert.issuer.includes('Cisco') ? (
                                                        <Cpu className="w-5 h-5" style={{ color: 'var(--accent-blue)' }} />
                                                    ) : cert.issuer.includes('Coursera') ? (
                                                        <Brain className="w-5 h-5" style={{ color: 'var(--accent-indigo)' }} />
                                                    ) : (
                                                        <Award className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{cert.name}</h4>
                                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{cert.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="flex items-center mb-12">
                            <GraduationCap className="w-10 h-10 mr-4" style={{ color: 'var(--accent-indigo)' }} />
                            <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Education Background</h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <div key={index} className="rounded-2xl p-8 border transition-shadow duration-300"
                                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'var(--bg-card-hover)';
                                        e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                                        e.currentTarget.style.color = 'var(--accent-indigo)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}>
                                    <div className="flex items-center mb-4" style={{ color: 'var(--accent-indigo)' }}>
                                        <Calendar className="w-5 h-5 mr-2" />
                                        <span className="font-semibold">{edu.year}</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
                                    <p className="font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                                    <div className="flex items-center mb-4" style={{ color: 'var(--text-muted)' }}>
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {edu.location}
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>{edu.details}</p>
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


                    <Deployment />
                </div>
            </section>
        </>
    );
};

export default About;