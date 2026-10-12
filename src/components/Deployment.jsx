import React from 'react';
import { Server, Cloud, Zap, ArrowUpRight } from 'lucide-react';

const Deployment = () => {
  const deploymentServices = [
    {
      icon: <Server size={19} />,
      title: 'VPS Deployment',
      description: 'Complete setup and deployment on Virtual Private Servers with full control and customization.',
      features: [
        'Ubuntu/CentOS Server Setup',
        'NGINX/Apache Configuration',
        'SSL Certificate Installation',
        'Domain & DNS Management',
        'Server Security Hardening',
        'Auto-scaling & Load Balancing',
      ],
      tech: ['Ubuntu', 'Docker', 'NGINX', 'PM2', 'SSL', 'CI/CD'],
    },
    {
      icon: <Cloud size={19} />,
      title: 'Vercel Deployment',
      description: 'Lightning-fast deployment for frontend applications with automatic CI/CD pipelines.',
      features: [
        'Automatic Deployments from Git',
        'Preview Deployments for PRs',
        'Edge Network Optimization',
        'Serverless Functions',
        'Automatic SSL/TLS',
        'Global CDN Distribution',
      ],
      tech: ['Next.js', 'React', 'Vercel CLI', 'Edge Functions', 'Git Integration'],
    },
    {
      icon: <Zap size={19} />,
      title: 'Full Stack Deployment',
      description: 'End-to-end deployment solutions for complex applications with multiple services.',
      features: [
        'Microservices Architecture',
        'Database Deployment & Migration',
        'WebSocket Server Setup',
        'Redis Cache Configuration',
        'Background Jobs Setup',
        'Monitoring & Logging',
      ],
      tech: ['MongoDB', 'Redis', 'WebSocket', 'Microservices', 'Docker', 'Kubernetes'],
    },
  ];

  const deploymentProcess = [
    { step: '01', title: 'Environment Setup', description: 'Configure development, staging, and production environments' },
    { step: '02', title: 'CI/CD Pipeline', description: 'Set up automated testing, building, and deployment workflows' },
    { step: '03', title: 'Security Configuration', description: 'Implement SSL, firewall, and security best practices' },
    { step: '04', title: 'Performance Optimization', description: 'Configure caching, CDN, and performance monitoring' },
    { step: '05', title: 'Monitoring & Analytics', description: 'Set up logging, error tracking, and performance analytics' },
    { step: '06', title: 'Backup & Recovery', description: 'Implement automated backups and disaster recovery plans' },
  ];

  const deploymentStats = [
    { label: 'Deployment Time', value: '< 5 min' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Projects Deployed', value: '50+' },
    { label: 'Response Time', value: '< 100ms' },
  ];

  const tools = [
    'Vercel', 'AWS', 'DigitalOcean', 'Docker', 'NGINX', 'GitHub Actions',
    'PM2', 'SSL/TLS', 'Redis', 'MongoDB Atlas', 'Cloudflare', "Let's Encrypt",
  ];

  return (
    <section id="deployment" className="py-20 lg:py-28" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[76rem] mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end animate-fade-up">
          <div className="lg:col-span-7">
            <span className="section-badge">Deployment &amp; DevOps</span>
            <h2 className="mt-6 text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem]">
              Seamless <span className="gradient-text">Deployment</span> Solutions
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="lede lg:pb-2">
              From VPS setup to Vercel deployment — I handle everything to get your application live and running smoothly.
            </p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-14 lg:mt-20"
          style={{ background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}
        >
          {deploymentStats.map((stat) => (
            <div key={stat.label} className="px-6 py-8" style={{ background: 'var(--bg-card)' }}>
              <div className="font-display text-[2rem] leading-none" style={{ color: 'var(--accent)', fontWeight: 640 }}>
                {stat.value}
              </div>
              <div className="mt-3 text-[0.875rem]" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Services ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 lg:mt-20">
          {deploymentServices.map((service) => (
            <div key={service.title} className="deployment-service-card p-7 flex flex-col">
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-6"
                style={{ border: '1px solid var(--border-subtle)', color: 'var(--accent)' }}
              >
                {service.icon}
              </div>

              <h3 className="text-[1.25rem] mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>

              <ul className="mt-6 pt-5 flex-1 space-y-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[0.875rem]" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-[0.6rem] h-px w-3 flex-shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {service.tech.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Process ── */}
        <div className="mt-24 lg:mt-32">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h3 className="text-[1.5rem] sm:text-[1.75rem]">
              Deployment <span className="gradient-text">Process</span>
            </h3>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
              Six steps, start to live
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 mt-8">
            {deploymentProcess.map((process) => (
              <div key={process.step} className="index-row">
                <span className="index-number">{process.step}</span>
                <div>
                  <h4 className="text-[1.0625rem] mb-1.5" style={{ color: 'var(--text-primary)' }}>{process.title}</h4>
                  <p className="text-[0.875rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tools ── */}
        <div className="mt-24 lg:mt-32">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h3 className="text-[1.5rem] sm:text-[1.75rem]">
              Deployment <span className="gradient-text">Toolkit</span>
            </h3>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
              What I deploy with
            </span>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px mt-8"
            style={{ background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}
          >
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-5 py-4 text-[0.8125rem] transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="mt-20 lg:mt-24 p-8 sm:p-12 text-center rounded-[14px]"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
        >
          <h3 className="text-[1.75rem] sm:text-[2rem] mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready to deploy your project?
          </h3>
          <p className="text-[1.0625rem] mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Whether it&apos;s a simple website or a complex microservices architecture, I&apos;ll handle the deployment from start to finish.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:anisuldev@gmail.com" className="btn-primary justify-center">
              Discuss VPS Deployment
              <ArrowUpRight size={15} />
            </a>
            <a href="/contact" className="btn-ghost justify-center">
              Vercel Deployment Inquiry
            </a>
          </div>

          <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.04em]" style={{ color: 'var(--text-muted)' }}>
            Includes server setup, domain configuration, SSL installation, and ongoing maintenance
          </p>
        </div>

      </div>
    </section>
  );
};

export default Deployment;
