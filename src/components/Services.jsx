import React, { useRef, useState } from 'react';
import {
  Smartphone, Globe, Server, Database, Zap, Cloud,
  Code, CheckCircle, ArrowRight, GitBranch, Cpu, Layout,
  ChevronLeft, ChevronRight, Shield, ShieldCheck, HardDrive,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'React Native Mobile Apps',
    description: 'Cross-platform mobile apps with native performance and seamless UX for iOS & Android.',
    features: ['iOS & Android Development', 'Native Modules Integration', 'Offline Capabilities', 'Push Notifications', 'App Store Deployment'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
    glow: 'rgba(99, 102, 241, 0.3)',
    link: '/services/react-native-development',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Web Applications',
    description: 'Modern, fast web apps with React.js & Next.js — SSR, SSG, and everything in between.',
    features: ['React.js SPA/MPA', 'Next.js SSR/SSG', 'Progressive Web Apps', 'SEO Optimization', 'Performance Tuning'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    glow: 'rgba(168, 85, 247, 0.3)',
    link: '/services/web-app-development',
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: 'Backend & Databases',
    description: 'Scalable server-side systems with RESTful/GraphQL APIs and robust database design.',
    features: ['REST & GraphQL APIs', 'MongoDB & SQL Databases', 'Auth & Security', 'Vercel & VPS Deploy', 'API Documentation'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #22d3ee 100%)',
    glow: 'rgba(16, 185, 129, 0.3)',
    link: '/services/backend-development',
  },
];

const technologies = [
  { name: 'React Native', icon: <Smartphone />, category: 'Mobile' },
  { name: 'React.js', icon: <Code />, category: 'Frontend' },
  { name: 'Next.js', icon: <Layout />, category: 'Frontend' },
  { name: 'Node.js', icon: <Server />, category: 'Backend' },
  { name: 'Express.js', icon: <Server />, category: 'Backend' },
  { name: 'MongoDB', icon: <Database />, category: 'Database' },
  { name: 'PostgreSQL', icon: <Database />, category: 'Database' },
  { name: 'MySQL', icon: <Database />, category: 'Database' },
  { name: 'Firebase', icon: <Cloud />, category: 'Cloud' },
  { name: 'Docker', icon: <Cpu />, category: 'DevOps' },
  { name: 'Tailwind CSS', icon: <Layout />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code />, category: 'Language' },
  { name: 'Git', icon: <GitBranch />, category: 'Tools' },
  { name: 'GraphQL', icon: <Server />, category: 'API' },
  { name: 'Redis', icon: <Database />, category: 'Database' },
  { name: 'AWS', icon: <Cloud />, category: 'Cloud' },
];

const duplicated = [...technologies, ...technologies];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Understanding requirements and planning architecture' },
  { step: '02', title: 'Design', desc: 'UI/UX wireframes and interactive prototypes' },
  { step: '03', title: 'Development', desc: 'Agile sprints with regular progress updates' },
  { step: '04', title: 'Launch', desc: 'Deploying, monitoring, and ongoing support' },
];

const Services = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('right');

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>

      {/* Background grid */}
      <div className="absolute inset-0 bg-dot opacity-30" />

      {/* Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-0 right-0 opacity-20" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="section-badge mb-4 inline-flex">
            <Zap size={13} />
            Services &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mt-4">
            What I{' '}
            <span className="gradient-text animate-grad-shift">Build</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Full-stack solutions tailored to your needs — from sleek mobile apps to complex web platforms and scalable backends.
          </p>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-500"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 0 0 0 transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${svc.glow}`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: svc.gradient }} />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{ background: svc.gradient, boxShadow: `0 8px 24px ${svc.glow}` }}
              >
                {svc.icon}
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{svc.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{svc.description}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {svc.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={14} className="flex-shrink-0" style={{ color: '#10b981' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={svc.link}
                className="flex items-center gap-1.5 text-sm font-semibold group/link"
                style={{ color: 'var(--accent-indigo)' }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* ── Tech Stack Scroll ── */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Tech Stack</h3>
            <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
              {(['left', 'right']).map((dir) => (
                <button
                  key={dir}
                  onClick={() => setDirection(dir)}
                  className="p-1.5 rounded-md transition-all duration-200"
                  style={{
                    background: direction === dir ? 'var(--accent-indigo)' : 'transparent',
                    color: direction === dir ? '#fff' : 'var(--text-muted)',
                  }}
                  aria-label={`Scroll ${dir}`}
                >
                  {dir === 'left' ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
                </button>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(-90deg, var(--bg-primary), transparent)' }} />

            <div className={`flex gap-3 ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} ${isPaused ? 'animation-paused' : ''}`}>
              {duplicated.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl w-32 transition-all duration-200"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                >
                  <div style={{ color: 'var(--text-muted)' }}>
                    {typeof tech.icon === 'string'
                      ? <span className="text-lg">{tech.icon}</span>
                      : React.cloneElement(tech.icon, { size: 18 })}
                  </div>
                  <span className="text-xs font-semibold text-center leading-tight" style={{ color: 'var(--text-secondary)' }}>
                    {tech.name}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)' }}>
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Process Steps ── */}
        <div
          className="rounded-2xl p-8 lg:p-12 mb-12"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Development{' '}
              <span className="gradient-text">Process</span>
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              A structured approach to deliver high-quality software
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative p-5 rounded-xl transition-all duration-300 group"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-indigo)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="text-4xl font-black mb-3 gradient-text opacity-60">{step.step}</div>
                <h4 className="text-base font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>

                {/* Connector */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px z-10"
                    style={{ background: 'linear-gradient(90deg, #6366f1, #22d3ee)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 lg:p-10 rounded-2xl"
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Ready to Start Your Project?
            </h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss how I can bring your ideas to life
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Get a Quote Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;