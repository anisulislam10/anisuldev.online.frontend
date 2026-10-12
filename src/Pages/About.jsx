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
import { useTranslation } from 'react-i18next';
import Deployment from '../components/Deployment';
import MetaTags from '../components/MetaTags';


const About = () => {
    const { t } = useTranslation();

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
            degree: t('about.education.bs'),
            institution: 'The University of Agriculture, Peshawar',
            location: t('about.education.location'),
            details: t('about.education.bsDetails')
        },
        {
            year: '2017',
            degree: t('about.education.diploma'),
            institution: 'Technical Education Board',
            location: t('about.education.location'),
            details: t('about.education.diplomaDetails')
        }
    ];

    const certifications = [
        {
            name: t('about.certifications.mobile'),
            issuer: 'Pakistan Software Export Board',
            year: '2022'
        },
        {
            name: t('about.certifications.networking'),
            issuer: 'Cisco',
            year: '2021'
        },
        {
            name: t('about.certifications.programming'),
            issuer: 'Jawan Tech Pakistan through Cisco',
            year: '2021'
        },
        {
            name: t('about.certifications.web'),
            issuer: 'Coursera',
            year: '2020'
        },
        {
            name: t('about.certifications.ml'),
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
                title={t('about.meta.title')}
                description={t('about.meta.description')}
                keywords="Full Stack Developer Pakistan, MERN Stack Developer, React Native Developer, Software Engineer Pakistan, Web Developer Islamabad, API Developer, Mobile App Developer"
                canonical="https://www.anisuldev.online/about"
                image="https://www.anisuldev.online/Anisul_Islam_Software_Developer_Chitral.png"
            />
            <section id="about" className="py-20 lg:py-28" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-[76rem] mx-auto px-5 sm:px-8">
                    {/* Section Header */}
                    <div className="mb-14 lg:mb-20 animate-fade-up">
                        <span className="section-badge">{t('about.badge')}</span>
                        <h2 className="mt-6 text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem]">
                            {t('about.heading')} <span className="gradient-text">{t('about.headingHighlight')}</span>
                        </h2>
                        <p className="mt-5 lede max-w-[36rem]">
                            {t('about.subheading')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                        {/* Left Column - Personal Info & Download CV */}
                        <div className="lg:col-span-1">
                            {/* Profile Card */}
                            <div className="rounded-[14px] p-7 mb-8"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
                                <div className="text-center mb-6">
                                    <div className="w-40 h-40 mx-auto rounded-full p-1 mb-7" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                                        <div className="w-full h-full rounded-full overflow-hidden">

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
                                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{t('about.profile.role')}</p>

                                    {/* Location & Contact */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                                            <MapPin className="w-4 h-4 mr-2" />
                                            <div className="text-center">
                                                <div>{t('about.profile.from')}</div>
                                                <div className="text-sm">{t('about.profile.livesIn')}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>anisuldev@gmail.com</span>
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
                                    className="w-full inline-flex items-center justify-center text-white px-6 py-3 rounded-[6px] font-medium transition-all duration-200 hover:brightness-105"
                                    style={{ background: 'var(--gradient-hero)' }}
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('about.profile.downloadCv')}
                                </a>
                            </div>

                            {/* Expertise Areas */}
                            <div className="rounded-[14px] p-6"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                                <h3 className="text-[1.125rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                                    {t('about.expertise.title')}
                                </h3>
                                <div className="space-y-4">
                                    {[t('about.expertise.web'), t('about.expertise.mobile'), t('about.expertise.api'), t('about.expertise.integration')].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <span className="h-px w-3 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                                            <span className="text-[0.9375rem]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - About Text & Skills */}
                        <div className="lg:col-span-2">
                            {/* About Text */}
                            <div className="rounded-[14px] p-7 lg:p-8 border mb-8"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-[1.5rem] mb-6" style={{ color: 'var(--text-primary)' }}>{t('about.journey.title')}</h3>
                                <div className="space-y-4 text-[0.9375rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    <p>{t('about.journey.p1')}</p>
                                    <p>{t('about.journey.p2')}</p>
                                    <p>{t('about.journey.p3')}</p>
                                    <p>{t('about.journey.p4')}</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="rounded-[14px] p-7 lg:p-8 border mb-8"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-[1.5rem] mb-7" style={{ color: 'var(--text-primary)' }}>
                                    {t('about.techStack')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                                            </div>
                                            <div className="w-full rounded-full h-1.5" style={{ background: 'var(--bg-sunken)' }}>
                                                <div
                                                    className="h-1.5 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%`, background: 'var(--accent)' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="rounded-[14px] p-7 lg:p-8 border"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <h3 className="text-[1.5rem] mb-7" style={{ color: 'var(--text-primary)' }}>
                                    {t('about.certifications.title')}
                                </h3>
                                <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start py-4"
                                            style={{ borderBottom: '1px solid var(--border-subtle)' }}>
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
                        <div className="mb-12">
                            <span className="section-badge">{t('about.education.title')}</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <div key={index} className="rounded-[14px] p-7 border"
                                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
                                    <div className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                                        {edu.year}
                                    </div>
                                    <h4 className="text-[1.25rem] mb-2" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
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